var actElem,f=0,val=1,up=0,down=0;
function disp_list(n)
{
    if( ! document.getElementById('numlist').classList.contains('show'))
    {
    for(var i=1;i<=n;i++)
        {
            var newchild=document.createElement('div');
            newchild.innerHTML=i;
            newchild.setAttribute("class","innerdiv");
            newchild.setAttribute("id",i);
            newchild.setAttribute("tabindex",0);
            document.getElementById('numlist').appendChild(newchild);
        }
    document.getElementById('num').addEventListener('keydown',function(event)
    {
        if(event.keyCode==40)
        {
            document.getElementById("numlist").classList.add("show"); 
            if(!actElem){
                var firstChild = document.getElementById('numlist').childNodes[1];
                actElem = firstChild.id;
                firstChild.classList.add("hover");
            }else{
                if(val<50)
                {   
                    val=getNextElem();
                }
            }
        }
        else if(event.keyCode==38)
        {
            if(val>1)
            {
                val=getPrevElem();
            }
        }
        else if(event.keyCode==13)
        {
            document.getElementById('num').value=val;
        }
    });
}
}

function getNextElem(){
    document.getElementById(actElem).classList.remove('hover');
    actElem++;
    document.getElementById(actElem).classList.add('hover');
    console.log("offset of  "+actElem+" is "+document.getElementById(actElem).offsetTop);
    if((document.getElementById(actElem).offsetTop) % 490 ==0)
    {
        document.getElementById('numlist').scrollTop+=490;
    }
    return document.getElementById(actElem).innerHTML;
}
function getPrevElem(){
    document.getElementById(actElem).classList.remove('hover');
    actElem--;
    document.getElementById(actElem).classList.add('hover');
    console.log("offset of  "+actElem+" is "+document.getElementById(actElem).offsetTop);
    if((document.getElementById(actElem).offsetTop) % 490 ==441)
    {
        document.getElementById('numlist').scrollTop-=490;
    }
    return document.getElementById(actElem).innerHTML;
}
