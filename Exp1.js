
function init()
{
  var elem=document.getElementById('cont');
  var i,j=1,pos=0;
  var threshold_down=1900,threshold_up=300;
  append(50);

  elem.addEventListener("scroll", function(){
  if(elem.scrollTop>=threshold_down&&elem.scrollTop>pos) //scrolling down
  {
    delete_up();
    append(10);
  }
  else if(elem.scrollTop<=threshold_up&&elem.scrollTop<pos&&elem.firstChild.value>1)  //scrolling up
  {
    delete_down();
    addatbeg();
  }
  pos=elem.scrollTop;
});

function append(x)
{
  for(i=1;i<=x;i++)
  {
  var newbox=document.createElement("input");
  newbox.setAttribute("style","height:50px; text-align:center; width:80px");
  newbox.setAttribute("value",j);
  j++;
  elem.appendChild(newbox);
  }
  
}
function delete_up()
{
  for(i=1;i<=10;i++)
  {
    elem.removeChild(elem.firstChild);
  }
}
function delete_down()
{
  for(i=1;i<=10;i++)
  {
    elem.removeChild(elem.lastChild); 

  }
}
function addatbeg()
{
    for(i=1;i<=10;i++)
    {
        var pree=elem.firstChild.value;
        var newbox=document.createElement("input");
        newbox.setAttribute("style","height:50px; text-align:center; width:80px");
        newbox.setAttribute("value",--pree);
        elem.insertBefore(newbox,elem.childNodes[0]);
    }
}
}