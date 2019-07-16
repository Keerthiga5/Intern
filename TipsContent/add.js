(function()
{
	var modal = document.getElementById("myModal");
	var span = document.getElementsByClassName("close")[0];
	var disp=document.getElementById("disp_table");

	document.getElementById("add").onclick=function()
	{
		var header=document.getElementById('header').value;
		var msg=document.getElementById('msg').value;
		var file=document.getElementById('file').value;
		var link=document.getElementById('link').value;
		var str="header="+header+"&msg="+msg+"&file="+file+"&link="+link;
		var xhtp = new XMLHttpRequest();
		xhtp.onreadystatechange=function()
		{
			if(this.readyState==4 && this.status==200)
			{
				alert(xhtp.responseText);
			}
		};
		xhtp.open("POST","/TipsContent/addData",true);
		xhtp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		xhtp.send(str);
	};
	
	document.getElementById('view').onclick=function()
	{
		var xhttp=new XMLHttpRequest();
		xhttp.onreadystatechange=function()
		{
			if(this.readyState==4 && this.status==200)
			{
				var resp=JSON.parse(xhttp.response);
				console.log(Object.keys(resp).length);
				var table=document.getElementById("res_table");
				for(var i = table.rows.length - 1; i > 0; i--)
				{
    				table.deleteRow(i);
				}
				const sorted={};
				Object.keys(resp).sort().forEach(function(key) {
 					 sorted[key] = resp[key];
				});
				for(var tip in sorted)
				{
					console.log(tip);
					var tipdata=resp[tip];
					var row=table.insertRow(-1);
					var cell=row.insertCell(0);
					cell.innerHTML=tipdata["id"];
					var cell=row.insertCell(1);
					cell.innerHTML=tipdata["header"];
					var cell=row.insertCell(2);
					cell.innerHTML=tipdata["msg"];
					var cell=row.insertCell(3);
					cell.innerHTML=tipdata["link"];
					var cell=row.insertCell(4);
					cell.innerHTML=tipdata["ImgOPFile"];	
				}
			}
		};
		xhttp.open("GET","/TipsContent/viewTags",true);
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