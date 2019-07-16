import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class SelectAll extends HttpServlet
{
	private static String URL="jdbc:mysql://localhost/pictures",className="com.mysql.jdbc.Driver",user="root",pass="Zohocorp";
   	private static Connection con;
   	private static Statement stmt;
   	private static ResultSet rs;
	public void doGet(HttpServletRequest request,HttpServletResponse response)throws IOException,ServletException
   	{
   		response.setContentType("text/html");
   		PrintWriter out=response.getWriter();
   		out.write("<!DOCTYPE HTML>"+
        		  "<html><head>"+
        		  "</head><body>"+
        		  "<table width='100%' height='100%' style='border:1px solid black;'>"+
        		  "<th style='border:1px solid black;'>ID</th><th style='border:1px solid black;'>Header</th><th style='border:1px solid black;'>Message</th><th style='border:1px solid black;'>Link</th><th style='border:1px solid black;'>ImageSource</th>");
   		try
   			{
               Class.forName(className);
               con=DriverManager.getConnection(URL,user,pass);
               stmt=con.createStatement();
               rs=stmt.executeQuery("select tipId,tipHeader,tipMsg,tipLink,tipImgOPFile from tips");
               while(rs.next())
               {
               		out.println("<tr><td style='border:1px solid black;'>"+rs.getInt(1)+"</td><td style='border:1px solid black;'>"+rs.getString(2)+"</td><td style='border:1px solid black;'>"+rs.getString(3)+"</td><td style='border:1px solid black;'>"+rs.getString(4)+"</td><td style='border:1px solid black;'>"+rs.getString(5)+"</td></tr>");
               }
               out.println("</table>"+
               			"</body></html>");
               if(con!=null)
               {
               		con.close();
               }
               if(out!=null)
               {
               		out.close();
               }
            }
        catch(Exception e)
        {
        	System.out.print(e);
        }   


   	}
}