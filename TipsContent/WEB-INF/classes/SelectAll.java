import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
/**
var wholeTipDetails = {
      tip1: {
        id:number,
        header: string ,
        message: string,
        imgURL: string of url,
        link:"string of url",
      },
      tip2: {
        id: ~~,
        header:"asdfasd",
        message: "adfasd",
        imgURL: "adasdf",
        link:"asdfasdf",
      },
      ...
      
    }
**/

public class SelectAll extends HttpServlet
{
  public ResultSet selectQuery()
  {
    String URL="jdbc:mysql://localhost/pictures?useSSL=false",className="com.mysql.jdbc.Driver",user="root",pass="Zohocorp";
    Connection con;
    Statement stmt;
    ResultSet rs=null;
    try
    {
      Class.forName(className);
      con=DriverManager.getConnection(URL,user,pass);
      stmt=con.createStatement();
      rs=stmt.executeQuery("select tipId,tipHeader,tipMsg,tipLink,tipImgOPFile from tips");
    }
    catch(Exception e)
    {
      System.out.print(e);
    }   
    return rs;
  }

  public void doGet(HttpServletRequest request,HttpServletResponse response)throws IOException,ServletException
  {
    try
    {
      JSONObject wholeTips = new JSONObject();
      int ind=1;
      ResultSet rs=selectQuery();
      while(rs.next())
      {       
        JSONObject obj=new JSONObject();
        obj.put("id",rs.getInt(1));
        obj.put("header",rs.getString(2));
        obj.put("msg",rs.getString(3));
        obj.put("link",rs.getString(4));
        obj.put("ImgOPFile",rs.getString(5));
        wholeTips.put("Tip"+ind, obj);
        ind++;    
      }
      response.setContentType("application/json");
      response.setCharacterEncoding("UTF-8");
      System.out.print(wholeTips);
      response.getWriter().print(wholeTips);
    }
    catch(Exception e)
    {
      System.out.print(e);
    }
  }
}