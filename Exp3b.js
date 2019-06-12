function disp_list()
{
    if( ! document.getElementById('numlist').classList.contains('show'))
    {
    for(var i=1;i<=n;i++)
        {
            var newchild=document.createElement('div');
            newchild.innerHTML=i;
            newchild.setAttribute("class","innerdiv");
            newchild.setAttribute("id","inner");
            newchild.setAttribute("tabindex",0);
            document.getElementById('numlist').appendChild(newchild);
        }
    document.getElementById('num').addEventListener('keydown',function(event)
    {
        if(event.keyCode==40)
        {
            document.getElementById("numlist").classList.add("show"); 
            document.getElementById('numlist').childNodes[0].focus();
        }
        if(event.keyCode==13)
        {
            var txt=document.getElementById('num').value;
            var arr=document.getElementsByClassName('innerdiv');
            for(var i=0;i<arr.length;i++)
            {
                if(arr[i].innerHTML==txt)
                {
                    document.getElementById('selected').innerHTML=txt;
                    console.log(arr[i].innerHTML);
                    arr[i].focus();
                    break;
                }
            }
            if(i==arr.length)
            {
                alert("Enter number within range 1-50");
            }
        }
    });
}
}