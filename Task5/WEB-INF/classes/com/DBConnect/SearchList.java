package com.DBConnect;

import java.sql.*;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;
import com.google.gson.Gson;

public class SearchList extends HttpServlet
{
	private static String URL="jdbc:mysql://localhost/Exp5",className="com.mysql.jdbc.Driver",user="root",pass="Zohocorp";
	private static Connection con;
	private static ResultSet rs;
	private static PreparedStatement sel=null;
    private static String sel_query="select * from country where countryname like ?";
    private static String word;

    private static ArrayList<String> vals;
    public String str;
	public void doGet(HttpServletRequest request,HttpServletResponse response)throws ServletException,IndexOutOfBoundsException
	{
		try
		{
			vals=new ArrayList<String>();
			word=request.getParameter("w");
			word=word+"%";
			Class.forName(className);
        	con=DriverManager.getConnection(URL,user,pass);
	      	sel=con.prepareStatement(sel_query);
    	    sel.setString(1,word);
        	rs=sel.executeQuery();
	        while(rs.next())
    	    {
        		str=rs.getInt(4)+" : "+rs.getString(2);
        		vals.add(str);
	        }
    	    String jsonn = new Gson().toJson(vals);
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
	public void doPost(HttpServletResponse response,HttpServletRequest request)throws ServletException,IndexOutOfBoundsException
	{
		doGet(request,response);
	}
}