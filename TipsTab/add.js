(function()
{
	var modal = document.getElementById("myModal");
	var span = document.getElementsByClassName("close")[0];
	var disp=document.getElementById("disp_table");



	document.getElementById("add").onclick=function()
	{
		var header=document.getElementById('header').value;
		var msg=document.getElementById('msg').value;
		var file=document.getElementById('file').files[0];
		var link=document.getElementById('link').value;
		console.log(header)
		console.log(msg);
		console.log(file);
		console.log(link);
		console.log(formData)
		var formData=new FormData();
		console.log(formData);
		formData.append("header",header);
		formData.append("msg",msg);
		formData.append("file",file);
		formData.append("link",link);
		for(var key of formData.entries()){
			console.log("key :", key[0], " key 1 : ", key[1]);
		}
		var xhtp = new XMLHttpRequest();
		xhtp.onreadystatechange=function()
		{
			if(this.readyState==4 && this.status==200)
			{
				alert(xhtp.responseText);
			}
		};
		xhtp.open("POST","/TipsTab/addData",true);
		// xhtp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		//xhtp.setRequestHeader('Content-Type','multipart/form-data');
		xhtp.send(formData);

	};
	
	document.getElementById('view').onclick=function()
	{
		var xhttp=new XMLHttpRequest();
		xhttp.onreadystatechange=function()
		{
			if(this.readyState==4 && this.status==200)
			{
				disp.innerHTML=xhttp.response;
			}
		};
		xhttp.open("GET","/TipsTab/viewTags",true);
		xhttp.send();

		modal.style.display = "block";

	};
	span.onclick = function() {
		modal.style.display = "none";
	}
	window.onclick = function(event) {
  		if (event.target == modal) {
    		modal.style.display = "none";
  		}
	};

})();