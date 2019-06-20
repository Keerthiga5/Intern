<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <script>
        function send_data()
        {
            var id=document.getElementById('id').value;
            var name=document.getElementById('name').value;
            var age=document.getElementById('age').value;
            var dept=document.getElementById('dept').value;
            var email=document.getElementById('email').value;
            var phno=document.getElementById('phno').value;

            var data="id="+id+"&name="+name+"&age="+age+"&dept="+dept+"&email="+email+"&phno="+phno;

            var xhttp=new XMLHttpRequest();
            xhttp.onreadyStateChange=function () {
                if(this.readyState==4 && this.status==200)
                {
                    console.log(xhttp.responseText);
                }
            }
            xhttp.open("POST","DBConnect.do?",true);
            xhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            xhttp.send(data);
        }
    </script>
    <body>
        <center>
        ID   :<input type="text" name="id" id="id"/><br/>
    	Name :<input type="text" name="name" id="name"/><br/>
    	Age  :<input type="text" name="age" id="age"/><br/>
    	Dept :<input type="text" name="dept" id="dept"/><br/>
    	Email:<input type="text" name="email" id="email"/><br/>
    	Phno :<input type="text" name="phno" id="phno"/><br/>
    	<button id="btn1" onclick="send_data()">Submit</button>
        </center>
    </body>
</html>
