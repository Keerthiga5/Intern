package com.DBConnect;

import java.sql.*;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;
import com.google.gson.Gson;

public class Country extends HttpServlet
{
	private static String URL="jdbc:mysql://localhost/Exp5",className="com.mysql.jdbc.Driver",user="root",pass="Zohocorp";
	private static Connection con;
	private static ResultSet rs;
    private static PreparedStatement sel=null;
    private static String sel_query="select * from country LIMIT ?,?";
    private int row,lmt,ind=1;
    public String str;
    private Map<Integer,String> map;
    public void doGet(HttpServletRequest request,HttpServletResponse response)throws ServletException,IOException
	{
		try
        {
        	map=new LinkedHashMap<>();
            row=Integer.parseInt(request.getParameter("j"))-1;
            lmt=Integer.parseInt(request.getParameter("x"));
            Class.forName(className);
            con=DriverManager.getConnection(URL,user,pass);
      		sel=con.prepareStatement(sel_query);
            sel.setInt(1,row);
            sel.setInt(2,lmt);
            rs=sel.executeQuery();
            row++;
        	while(rs.next())
        	{
                str=rs.getString(1)+" , "+rs.getString(2)+" , "+rs.getString(3);
                map.put(row,str);
                row++;
        	}
            String jsonn = new Gson().toJson(map);
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().write(jsonn);

        }
        catch (Exception e) {
            System.out.println(e);
        }
        finally {
            try{
            if (con != null) {
                  con.close();
            }}
            catch(Exception e){e.printStackTrace();}
        }
    }
    public void doPost(HttpServletRequest request,HttpServletResponse response)throws ServletException, IOException
    {
        doGet(request, response);	
    }
}