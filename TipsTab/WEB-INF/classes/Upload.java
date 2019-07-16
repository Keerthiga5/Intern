import java.util.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import javax.servlet.http.Part;
public class Upload extends HttpServlet
{
	
	public void doPost(HttpServletRequest request,HttpServletResponse response)throws IOException,ServletException
	{
		//String header=request.getParameter("header");
		String header = request.getParameter("header"); 
		//Part filePart = request.getPart("file");
  		//String fileName = getFileName(filePart);
    	response.getWriter().println(header);
    	String msg=request.getParameter("msg");
    	response.getWriter().println(msg);
    	// Part filePart = request.getPart("file");
    	// String name=filePart.getName();
    	//response.getWriter().write(name);
		
	}
	public void doGet(HttpServletRequest request,HttpServletResponse response)throws IOException,ServletException
	{
		doPost(request,response);
	}
}