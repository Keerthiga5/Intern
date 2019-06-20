package org.struts1;

import java.sql.*;
import java.io.*;
import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionMapping;
import org.apache.struts.action.ActionForward;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



public class DbDetails extends Action
{
    private static String URL="jdbc:mysql://localhost/Details",className="com.mysql.jdbc.Driver",user="root",pass="Zohocorp";
	private static Connection con;
	private static ResultSet rs;
	private static PreparedStatement ins=null,sel=null;
    private static String ins_query="insert into FormDetails values(?,?,?,?,?,?)";
    private static String sel_query="select * from FormDetails where id=?";
    private int id,age;
    private String name,dept,email,phno;
    public ActionForward execute(ActionMapping ma,ActionForm ac,HttpServletRequest request,HttpServletResponse response)
    {
        try
        {
            id=Integer.parseInt(request.getParameter("id"));
            name=request.getParameter("name");
			age=Integer.parseInt(request.getParameter("age"));
			dept=request.getParameter("dept"); 
            email=request.getParameter("email");
			phno=request.getParameter("phno");

            //PrintWriter out=response.getWriter();
            /*out.println(" Id : "+id);
            out.println(" Name : "+name);
            out.println("Age:"+age);
            out.println("Dept:"+dept);
            out.println(email);
            out.println(phno);*/

            Class.forName(className);
            con=DriverManager.getConnection(URL,user,pass);
            /*if(con!=null)
                out.println("success");*/
            ins=con.prepareStatement(ins_query);
            ins.setInt(1,id);
            ins.setString(2,name);
            ins.setInt(3,age);
            ins.setString(4,dept);
            ins.setString(5,email);
            ins.setString(6,phno);
            //out.println(ins);

            int n=ins.executeUpdate();

            /*if(n>0)
                out.println("inserted");*/

            sel=con.prepareStatement(sel_query);
            sel.setInt(1,id);

            rs=sel.executeQuery();
            while(rs.next())
            {
                id=rs.getInt(1);
                name=rs.getString(2);
                age=rs.getInt(3);
                dept=rs.getString(4);
                email=rs.getString(5);
                phno=rs.getString(6);
            }
            PrintWriter out=response.getWriter();
            out.println(" Id : "+id);
            out.println(" Name : "+name);
            out.println(" Age : "+age);
            out.println(" Dept : "+dept);
            out.println(" Email : "+email);
            out.println(" Phno : "+phno);
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
        return null;
    }
}