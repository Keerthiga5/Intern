(function() {

	var elem = document.getElementById('cont');
	var i, j=1,pos = 0,
		pval,pg=1,page=1,ind=1;
	var threshold_down = 2000,
		threshold_up = 250;
	var map=new Map();
	var contTop=0,
		contBottom=0,
		flag=0;
	var newdiv;
	var timer=1;
	var count=0;


	for(let k=1;k<=5;k++)
	{
		append();
	}

	contBottom=elem.offsetHeight;
	page=document.getElementById('pageno').value;

	// function throttle (func, interval) {
 // 		var timeout;
 //    	return function() {
 //    		var context = this, args = arguments;
 //    		var later = function () {
 //      			timeout = false;
 //    		};
 //    		if (!timeout) {
 //      			func.apply(context, args)
 //      			timeout = true;
 //      			setTimeout(later, interval)
 //    		}
 //  		}
	//}

	// function scrollHeavyfunc()
	// {
	// 	console.log(j);
	// 	down();
	// 	up();
	// 	pos = elem.scrollTop;
	// 	pval=j-60;
	// 	var divs=elem.childNodes;
	// 	for(i=0;i<divs.length;i++)
	// 	{
	// 		var thisTop=(divs[i].getBoundingClientRect().top);
	// 		var h=parseInt(divs[i].style.height);
	// 		console.log(h);
	// 		if(thisTop>=contTop && h+thisTop<=contBottom+500)
	// 		{
	// 			document.getElementById('pageno').value=divs[i].id;
	// 			break;
	// 		}
	// 	}
	// }

	// const scrollCheckFunc=function()
	// {
	// 	if(timer!=null)
	// 	{
	// 		clearTimeout(timer);
	// 		count++;
	// 		console.log(count);
	// 	}
	// 	timer=setTimeout(function(){
	// 		alert("in");
	// 		scrollHeavyfunc();
	// 	},100);
	// };

	elem.addEventListener("scroll", function()
	{
		down();
		up();
		pos = elem.scrollTop;
		pval=j-60;
		var divs=elem.childNodes;
		for(i=0;i<divs.length;i++)
		{
			var thisTop=(divs[i].getBoundingClientRect().top);
			var h=parseInt(divs[i].style.height);
			if(thisTop>=contTop && h+thisTop<=contBottom+500)
			{
				document.getElementById('pageno').value=divs[i].id;
				break;
			}
		}
	});

	//elem.addEventListener("scroll", scrollCheckFunc);

	function down()
	{
		if (elem.scrollTop >= threshold_down && elem.scrollTop > pos && j<=250) //scrolling down
		{
			delete_up();
			append();
		}
	}

	function up()
	{
		if(elem.scrollTop==0 && pval>-9)
		{
			elem.scrollTop+=1;
		}
		if (elem.scrollTop <= threshold_up && elem.scrollTop <= pos && pval>=1)
		{
			addatbeg();
			delete_down();
		}
	}

	function append() {
		newdiv=document.createElement("div");
		newdiv.setAttribute("style","text-align:center; height:550px");
		elem.appendChild(newdiv);
		j=insertElements(j);
	}

	function delete_up() {
		elem.removeChild(elem.firstChild);
	}

	function addatbeg() {
		newdiv=document.createElement("div");
		newdiv.setAttribute("style","text-align:center; height:550px");
		elem.insertBefore(newdiv,elem.childNodes[0]);
		pval=insertElements(pval);
	}

	function delete_down() {
			elem.removeChild(elem.lastChild);
			j-=10;
	}


	function insertElements(ind) {
		if(map.has(ind))
		{
			for (i = 0; i < 10; i++) {
				var str = map.get(ind);
				var newbox = document.createElement("div");
				newbox.setAttribute("id","i"+ind);
				newbox.classList.add('newbox_style');
				newbox.innerHTML=ind + " : " + str;
				newdiv.appendChild(newbox);
				ind++;
			}
		}
		else
		{
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var db_txt = JSON.parse(xhttp.response);
				
				for (i = 1; i <= 10; i++) {
					var Str = db_txt[ind];
					map.set(ind, Str);				
					var newbox = document.createElement("div");
					newbox.setAttribute("id","i"+ind);
					newbox.classList.add('newbox_style');
					newbox.innerHTML=ind + " : " + Str;
					newdiv.appendChild(newbox);
					ind++;
				}
			}
		}
		xhttp.open("GET", "/Task5/scroll/Country?j=" + ind + "&x=" + 10, false);
		xhttp.send();
		}
		pg=(ind-1)/10;
		newdiv.setAttribute("id",pg);
		return ind;
	}

	document.getElementById('up1').addEventListener("click",function()
	{
		page=document.getElementById('pageno').value;
		page--;
		document.getElementById(page).scrollIntoView();
		document.getElementById('pageno').value=page;
	});

	document.getElementById('down1').addEventListener("click",function()
	{
		page=document.getElementById('pageno').value;
		page++;
		document.getElementById(page).scrollIntoView();
		document.getElementById('pageno').value=page;
	});

	document.getElementById('up2').addEventListener("click",function()
	{
		insertFivePages(1,1);

	});

	document.getElementById('down2').addEventListener("click",function()
	{
		insertFivePages(201,25);
		
	});

	function insertFivePages(val,pa)
	{
		for(i=0;i<5;i++)
		{
			delete_up();
		}
		j=val;
		pval=j-60;
		for(let y=0;y<5;y++)
		{
			append();
		}
		page=pa;
		document.getElementById('pageno').value=page;
		document.getElementById(page).scrollIntoView();
	}

	var debounce=function(func, interval) {
  		var timeout;
  		return function () {
   			var context = this, args = arguments;
    		var later = function () {
      			timeout = null;
      			func.apply(context, args);
    		};
    		clearTimeout(timeout);
    		timeout = setTimeout(later, interval);
  		}
	}

	var xhr=new XMLHttpRequest();

	const suggest=function(e)
	{
		e.stopImmediatePropagation();
		var txtToFind=document.getElementById('search').value;
		var list=document.getElementById('hugelist');
		if(txtToFind.length<1)
		{
			return;
		}
		if(!isNaN(txtToFind))
		{
			alert("Entered a number ! Please enter Country name");
			return;
		}
		//search from map--to be implemeted
		if(txtToFind.length>0)
		{
			xhr.onreadystatechange=function(){
			if(this.readyState==4 && this.status==200){
				var response=JSON.parse(xhr.response);
				while(list.firstChild)
				{
					list.removeChild(list.firstChild);
				}
				for(i=0;i<response.length;i++)
				{
					var option=document.createElement('option');
					var idval=response[i].split(" : ");
					option.setAttribute("data-value",parseInt(idval[0]));
					option.innerText=idval[1];
					list.appendChild(option);
				}
			}
			};
			xhr.open("GET","/Task5/load/SearchList?w="+txtToFind,false);
			xhr.send();
			document.querySelector('input[list]').addEventListener('keyup', function(e) {
	    		var input = e.target;
    	    	var list = input.getAttribute('list');
       			var options = document.querySelectorAll('#' + list + ' option');
        		var hiddenInput = document.getElementById(input.getAttribute('id') + '-hidden');
	        	var label = input.value;
				hiddenInput.value = label;
    			for(var i = 0; i < options.length; i++) {
        			var option = options[i];
        			if(option.innerText === label) {
            			hiddenInput.value = option.getAttribute('data-value');
    					insertFivePages(((Math.ceil(hiddenInput.value/10)-3)*10)+1,Math.ceil(hiddenInput.value/10));
    					document.getElementById("i"+hiddenInput.value).classList.add('hover');
            			break;
        			}
    			}
			});
		}			
		}

	document.getElementById('search').addEventListener('keyup',debounce(suggest,1000));

	document.getElementById('pageno').addEventListener('keydown',function(e)
	{
		if(e.keyCode==13)
		{
			page=document.getElementById('pageno').value;
			insertFivePages((page*10)-9,page);	
		}
	});
	// window.util = {};
	// window.util.debounce = debounce

})();
