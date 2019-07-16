import java.io.*;
import java.util.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.io.output.*;

public class UploadImg extends HttpServlet
{
   	public void doPost(HttpServletRequest request,HttpServletResponse response)throws IOException,ServletException
   	{
         String filepath;
         int maxFileSize = 500 * 1024;
         int maxMemSize = 400 * 1024;
         File file ;
         String header,msg,link,imgurl,imgOPFile;
         String URL="jdbc:mysql://localhost/pictures?useSSL=false",className="com.mysql.jdbc.Driver",user="root",pass="Zohocorp";
         Connection con;
         PreparedStatement ins=null;
         String ins_query="insert into tips values(null,?,?,?,?,?)";
         int i=1;
   		filepath=getServletContext().getInitParameter("file-upload");
         System.out.println(ServletFileUpload.isMultipartContent(request));
         System.out.println(request.getContentType());
   		if(ServletFileUpload.isMultipartContent(request))
   		{
   			DiskFileItemFactory factory=new DiskFileItemFactory();
   			factory.setSizeThreshold(maxMemSize);
   			factory.setRepository(new File("/Users/test/Documents/OutputImages/extra"));
   			ServletFileUpload upload=new ServletFileUpload(factory);
   			upload.setSizeMax(maxFileSize);
   			try
   			{
               Class.forName(className);
               con=DriverManager.getConnection(URL,user,pass);
               ins=con.prepareStatement(ins_query);
   				List<FileItem> items=upload.parseRequest(request);
               Iterator<FileItem> iter = items.iterator();
               while (iter.hasNext()) {
                  FileItem item = iter.next();
                  //response.getWriter().println("1 ");
                  if (item.isFormField()) {
                     String name = item.getFieldName();
                     String value = item.getString();
                     ins.setString(i++,value);
                     //response.getWriter().write(name+" , "+value);
                  }
                  else {
                     String fieldName = item.getFieldName();
                     ins.setString(i++,item.getName());
                     String fileName = new File(item.getName()).getName();
                     String contentType = item.getContentType();
                     boolean isInMemory = item.isInMemory();
                     long sizeInBytes = item.getSize();
                     String path=filepath+File.separator+fileName;
                     ins.setString(i++,path);
                     file=new File(path);
                     item.write(file) ;
                     //response.getWriter().write("2 ");
                  }
   			   }
               int n=ins.executeUpdate();
               if(n>0)
               {
                  response.getWriter().println(n+" record entered");
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
   		
   	}

}