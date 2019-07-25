<!DOCTYPE HTML>

<html>
<head>
	<title>Tips & Tricks</title>
</head>
<style>
	#tipsContainer>.*{
		text-align: center;
	}
	#inner{
		width: 900px;
		height: 400px;
		position: absolute;
		top:0;
		bottom: 0;
		left: 0;
		right: 0;
  		margin: auto auto auto auto;
  		display: inline-block;

	}
	input[type="text"]{
		width:500px;
  		margin-bottom: 20px;
  		height: 30px;
  		font-size: 15px;
  		font-family: inherit;
  	}
  	textarea
  	{
  		overflow:auto;
  		height:180px;
  		width:500px;
  		margin-bottom: 20px;
  		vertical-align: middle;
  		font-family: inherit;
  		font-size: 15px;
  	}
	label{
		display:inline-block;
		width:150px;
		text-align: right;
		margin-right:30px;
		font-size: 12px;
	}
	button{
		width:100px;
		height:30px;
		font-size: 15px;
		margin-left: 25%;
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
  		background-color: rgba(0,0,0,0.4);
  		 /* Black w/ opacity */
	}
	.modal-content {
  		background-color: #fefefe;
  		margin: 15% auto;
  		padding: 20px;
  		border: 1px solid #888;
  		width: 65%;
}	
	.close {
	  	color: #aaaaaa;
	  	float: right;
	  	font-size: 25px;
	  	font-weight: bold;
	}
	.close:hover,.close:focus {
  		color: #000;
  		text-decoration: none;
  		cursor: pointer;
	}
</style>
<body>
	<div id="tipsContainer" style="display: none">
	<div id="inner">
		<form method="POST" id="form_id" enctype="multipart/form-data">
			<label for="header">Tip Header:</label><input type="text" id="header" name="header"><br>
			<label for="msg">Tip Message:</label><textarea id="msg" name="msg" rows="10" cols="100"></textarea><br>
			<label for="file">Tip Image:</label><input type="text" name="file" id="file"><br>
			<label for="link">Tip Link:</label><input type="text" id="link" name="link"><br>
		</form>
		<br>
		<button id="addTip" value="add">ADD</button>
		<button id="viewTip" value="view">View</button>

	</div>
	<div id="myModal" class="modal">
  		<div class="modal-content">
   			<span class="close">&times;</span>
   			<div id="disp_table" style="display: table;">
   				<table id="res_table" style="border: 1px solid black; width: 100%; font-size: 13px; text-align: center;  word-break: break-word; vertical-align: top; table-layout: fixed;">
   					<th style="border: 1px solid black;">TipId</th>
   					<th style="border: 1px solid black;">TipHeader</th>
   					<th style="border: 1px solid black;">TipMessage</th>
   					<th style="border: 1px solid black;">TipLink</th>
   				</table>
   			</div>
  		</div>
	</div>
	</div>
</body>
</html>