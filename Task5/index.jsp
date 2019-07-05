<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!-- <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd"> -->

<!DOCTYPE html>

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <style>
    	#navi_options>*{
    		display: block;
        margin: 5px 2px;
    	}
    	#search{
    		width: 250px;
    		height: 40px;
        margin-bottom: 20px;
        border: 1px solid #0000aa;
        font-size: 25px;
    	}
      .hover
      {
        background-color: #ffff00;
      }
    </style>
    <body>
      
    	<div style="width: 70%; display: flex; margin: 120px 40%;">
        <div style="text-align: center;">
          Search by Country name:<br>
          <input type="text" id="search" list="hugelist">
          <datalist id="hugelist">
          </datalist>
          <input type="hidden" name="answer" id="search-hidden">
       		<div id="cont" style="height:565px; overflow:scroll;"></div>
        </div>
       		<div id="navi_options" style="height:300px width:80px ; display: inline; margin: 150px 0px 150px 30px; flex-grow: 1">
       			<input type="image" src="http://localhost:8080/Task5/res/Up2.png" style="height:50px; width:50px" id="up2">
       			<input type="image" src="http://localhost:8080/Task5/res/Up1.png" style="height:50px; width:50px" id="up1">
       			<input type ="text" id="pageno" value="1" style="height:50px; width:50px; text-align: center; font-size: 15px" >
       			<input type="image" src="http://localhost:8080/Task5/res/Down1.png" style="height:50px; width:50px" id="down1">
       			<input type="image" src="http://localhost:8080/Task5/res/Down2.png" style="height:50px; width:50px" id="down2">
       		</div>
    	</div>
    </body>
    <script src="http://localhost:8080/Task5/ss.js">
</script>
</html>