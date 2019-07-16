import java.io.*;
import java.util.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;


public class Upload extends HttpServlet
{
   public void querying(String header,String msg,String link,String imgurl,String imgOPFile,HttpServletRequest request,HttpServletResponse response)throws IOException,ServletException
   {
      String URL="jdbc:mysql://localhost/pictures?useSSL=false",className="com.mysql.jdbc.Driver",user="root",pass="Zohocorp";
      Connection con;
      try
      {
         Class.forName(className);
         con=DriverManager.getConnection(URL,user,pass);
         PreparedStatement ins=null;
         String ins_query="insert into tips values(null,?,?,?,?,?)";
         ins=con.prepareStatement(ins_query);
         ins.setString(1,header);
         ins.setString(2,msg);
         ins.setString(3,imgurl);
         ins.setString(4,imgOPFile);
         ins.setString(5,link);
         int n=ins.executeUpdate();
         if(n>0)
         {
            response.getWriter().write(n+" record entered");
         }
         if(con!=null)
         {
            con.close();
         }
      }
      catch(Exception e)
      {
         System.out.println(e);
      }
   }

   public String writeFile(String imgurl)
   {
      String filepath=getServletContext().getInitParameter("file-upload");
      String[] file=imgurl.split("/");
      String fname=file[file.length-1];
      System.out.println("fname: "+fname);
      String[] ext=fname.split("\\.");
      String path=filepath+File.separator+fname;
      File fp=null;
      BufferedImage image=null;
      try
      {
         fp=new File(imgurl);
         image=ImageIO.read(fp);
      }
      catch(Exception e)
      {
         System.out.println(e + " in Upload 1");
      }

      try
      {
         fp=new File(path);
         System.out.println(ext.length);
         ImageIO.write(image,ext[ext.length-1],fp);
      }
      catch(Exception e)
      {
         System.out.println(e+ " in Upload 2");
      }
      return path;
   }

	public void doPost(HttpServletRequest request,HttpServletResponse response)throws IOException,ServletException
   {
      String header,msg,link,imgurl,imgOPFile;
		try
		{
         header=request.getParameter("header");
         msg=request.getParameter("msg");
         link=request.getParameter("link");  
         
         imgurl=request.getParameter("file");
         
         imgOPFile=writeFile(imgurl);
         
         querying(header,msg,link,imgurl,imgOPFile,request,response);
   	}
		catch(Exception e)
      {
   		System.out.println(e);
		}            
	}	
}