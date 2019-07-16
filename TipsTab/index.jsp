<!DOCTYPE HTML>

<html>
<head>
	<title>Tips & Tricks</title>
</head>
<style>
	#outer>.*{
		text-align: center;
	}
	#inner{
		width: 900px;
		height: 275px;
		position: absolute;
		top:0;
		bottom: 0;
		left: 0;
		right: 0;
  		margin: auto;
  		display: inline-block;
		/*text-align: center;*/
	}
	input[type="text"]{
		width:500px;
  		margin-bottom: 20px;
  		height: 30px;
  		font-size: 20px;
  	}
	label{
		display:inline-block;
		width:150px;
		text-align: right;
		margin-right:30px;
		font-size: 20px;
	}
	button{
		width:100px;
		height:30px;
		font-size: 20px;
		margin-left: 160px;
		/*margin:0px 20px 0px 0px;*/

	}
	.modal {
  		display: none; /* Hidden by default */
  		position: fixed; /* Stay in place */
 		z-index: 1; /* Sit on top */
  		padding-top: 100px; /* Location of the box */
  		left: 0;
  		top: 0;
  		width: 100%; /* Full width */
  		height: 100%; /* Full height */
  		overflow: auto; /* Enable scroll if needed */
  		background-color: rgb(0,0,0); /* Fallback color */
  		background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
	}
	.modal-content {
  		background-color: #fefefe;
  		margin: 15% auto;
  		padding: 20px;
  		border: 1px solid #888;
	
	.close {
	  	color: #aaaaaa;
	  	float: right;
	  	font-size: 28px;
	  	font-weight: bold;
	}
	.close:hover,.close:focus {
  		color: #000;
  		text-decoration: none;
  		cursor: pointer;
	}
</style>
<body>
	<div id="outer">
	<div id="inner">
		<form method="POST" id="form_id" enctype="multipart/form-data">
			<label for="header">Tip Header:</label><input type="text" id="header" name="header"><br>
			<label for="msg">Tip Message:</label><input type="text" id="msg" name="msg"><br>
			<label for="img">Tip Image:</label><input type="file" name="file" id="file" style="width:500px; font-size: 15px;"><br><br>
			<label for="link">Tip Link:</label><input type="text" id="link" name="link"><br>
			<input type="reset" id="clear" value="Clear" style="float:right;margin-right: 250px;height: 30px;width: 100px;font-size: 20px;background: oldlace;border-radius: 10px;border: 1px solid darkred;"><br>
		</form>
		<br>
		<button id="add">ADD</button>
		<button id="view">View</button>

	</div>
	<div id="myModal" class="modal">
  		<div class="modal-content">
   			<span class="close">&times;</span>
   			<div id="disp_table"></div>
  		</div>
	</div>
	</div>
</body>
<script type="text/javascript" src="http://localhost:8080/TipsTab/add.js"></script>
</html>