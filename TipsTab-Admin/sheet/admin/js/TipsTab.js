
var TipsTab= (function()
{
	var modal = document.getElementById("myModal");
	var span = document.getElementsByClassName("close")[0];
	var disp=document.getElementById("disp_table");

	document.getElementById("addTip").onclick=function()
	{
		
		var header=document.getElementById('header').value;
		var msg=document.getElementById('msg').value;
		var file=document.getElementById('file').value;
		var link=document.getElementById('link').value;
		var str="action=add&header="+header+"&msg="+msg+"&file="+file+"&link="+link+"&" + admin.getcsrfFields().csrfParamName + "=" + admin.getcsrfFields().cookieValue;
		console.log(header);
		console.log(msg);
		console.log(file);
		console.log(link);
		var xhtp = new XMLHttpRequest();
		xhtp.onreadystatechange=function()
		{
			if(this.readyState==4 && this.status==200)
			{
				alert(xhtp.responseText);
			}
		};
		xhtp.open("POST","TipsTab.do",true);
		xhtp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		xhtp.send(str);

	};

	document.getElementById('viewTip').onclick=function()
	{
		var xhttp=new XMLHttpRequest();
		xhttp.onreadystatechange=function()
		{
			if(this.readyState==4 && this.status==200)
			{
				//disp.innerHTML=xhttp.response;
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
				console.log(resp);
				for(var tip in resp)
				{
					var tipdata=resp[tip];
					console.log("tipdata[0] : "+tipdata);
					var row=table.insertRow(-1);
					var cell=row.insertCell(0);
					cell.innerHTML=tipdata["header"];
					cell.style="border: 1px solid black;"
					var cell=row.insertCell(1);
					cell.innerHTML=tipdata["msg"];
					cell.style="border: 1px solid black;"
					var cell=row.insertCell(2);
					cell.innerHTML=tipdata["file"];
					cell.style="border: 1px solid black;"
					var cell=row.insertCell(3);
					cell.innerHTML=tipdata["link"];	
					cell.style="border: 1px solid black;"
				}
			}
		};
		var params="action=view&" + admin.getcsrfFields().csrfParamName + "=" + admin.getcsrfFields().cookieValue;
		xhttp.open("POST","TipsTab.do",true);
		xhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		xhttp.send(params);

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