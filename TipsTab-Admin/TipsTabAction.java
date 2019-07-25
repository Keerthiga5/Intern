/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zoho.sheet.admin;

import static com.adventnet.zoho.websheet.model.redis.RedisHelper.get;
import javax.servlet.http.*;
import org.apache.struts.action.*;
import static com.adventnet.zoho.websheet.model.redis.RedisHelper.lpop;
import static com.adventnet.zoho.websheet.model.redis.RedisHelper.lrange;
import static com.adventnet.zoho.websheet.model.redis.RedisHelper.rpush;
import static com.adventnet.zoho.websheet.model.redis.RedisHelper.set;
import java.io.PrintWriter;
import java.util.List;
import java.util.logging.Logger;
import net.sf.json.JSONObject;

/**
 *
 * @author test
 */
public class TipsTabAction extends Action{
        
    public ActionForward execute(ActionMapping mapping, ActionForm form,HttpServletRequest request, HttpServletResponse response)throws Exception 
    {
        JSONObject returnObj= new JSONObject();
        String action=request.getParameter("action");
        if("add".equals(action)){
            returnObj = add(request);
        }
        else if("view".equals(action)){
            returnObj = view();
        }
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();
        out.print(returnObj);
        return null;
    }
        
    public JSONObject add(HttpServletRequest request)
    {
        JSONObject obj=new JSONObject();
        try
        {
          obj.put("header",request.getParameter("header"));
          obj.put("msg",request.getParameter("msg"));
          obj.put("link",request.getParameter("link"));
          obj.put("file",request.getParameter("file"));
          querying(obj);
        }
        catch(Exception e)
        {
            System.out.println("IN ADD: "+ e);
        }
        return obj;
    }	

    private void querying(JSONObject obj)
    {
        try
        {
            int n=Integer.parseInt(get("tipcount",-1));
            n=n+1;
            int idval=n;
            if(n>3) //always have only 3 values
            {
                String popped=lpop("TIPS",-1);
                idval=n%3;
            }            
            obj.put("TipID",idval);
            rpush("TIPS",obj.toString());
            String val=Integer.toString(n);
            set("tipcount",val,-1);   
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
    }
    
    public JSONObject view()throws Exception
    {
        JSONObject wholeTips = new JSONObject();
        List<String> tip=lrange("TIPS",0,-1); 
        int ii=tip.size();
        for(int i=0;i<tip.size();i++)
        {
            wholeTips.put(Integer.toString(ii),tip.get(i));
            --ii;
        }
        return wholeTips;
    }
}
