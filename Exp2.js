function init()
{
    var ip=document.getElementById("userip");
    var contnt=document.getElementById('content');    

    var b=0,i=0,s=0,u=0;

    key_char=new Map();
    key_char.set(66,'b');
    key_char.set(73,'i');
    key_char.set(83,'s');
    key_char.set(85,'u');    

    var keys=new Array();        
    keys[0]=false;
    keys[1]=false;

    ip.addEventListener("keydown", function(event){        
        if(event.metaKey)
        {
            event.preventDefault();
            keys[0]=true;
        }
    });

    ip.addEventListener("keydown",function(e){
        var k=e.keyCode;
        var alpha=e.key;
        e.preventDefault();
        if(k>=65&&k<=90 && keys[0]==true)
        {
            e.preventDefault();
            keys[1]=true;
            var l=key_char.get(k);
            runfunc(l,alpha);
        }
    });

    ip.addEventListener("keyup",function(ev)
    {
        keys[0]=false;
    });
        
    function runfunc(k,alpha)
    {
        var press=document.getElementById('textbox');
        switch(k)
       {
            case 'b':
            {
                bold();
                press.innerHTML+="CMD + "+alpha+"<br>";
                break;
            }
            case 'i':
            {   
                italize();
                press.innerHTML+="CMD + "+alpha+"<br>";
                break;
            }
            case 's':
            {
                strikethro();
                press.innerHTML+="CMD + "+alpha+"<br>";
                break;
            }
            case 'u':
            {
                underline();
                press.innerHTML+="CMD + "+alpha+"<br>";
                break;
            }
            default:
                alert("Wrong key pressed !");
        }
    }

    function bold()
    {
        if (b==0)
        {
            b=1;
            contnt.classList.add('bold');
        }                
        else
        {
            contnt.classList.remove('bold');
            b=0;
        }
    }

    function italize()
    {
        if (i==0)
        {
            i=1;
            contnt.classList.add('italics');
        }                
        else
        {
            contnt.classList.remove('italics');
            i=0;
        }
    }
    
    function strikethro()
    {            
        if(s==0)
        {
            if(contnt.classList.contains('under'))
            {
                contnt.classList.remove('under');
                contnt.classList.add('both');
            }
            else
            {
                contnt.classList.add('strike');
            }
            s=1;
        }
        else if(s==1)
        {
            if(contnt.classList.contains('both'))
            {
                contnt.classList.remove('both');
                contnt.classList.add('under');
            }
            else
            {
                contnt.classList.remove('strike');
            }
            s=0;
        }
    }

    function underline()
    {
        if(u==0)
        {
            if(contnt.classList.contains('strike'))
            {
                contnt.classList.remove('strike');
                contnt.classList.add('both');
            }
            else
            {
                contnt.classList.add('under');
                console.log("underline added");
            }
            u=1;
        }
        else if(u==1)
        {
            if(contnt.classList.contains('both'))
            {
                contnt.classList.remove('both');
                contnt.classList.add('strike');
            }
            else
            {
                contnt.classList.remove('under');
                console.log("underline removed");
            }
            u=0;
        }
    }
}

function updated()   
{
    var op=document.getElementById('op');
    var sel=op.options[op.selectedIndex].value;
    var sh1=document.getElementById('sh').value;
    sh1=sh1.toUpperCase();
    var x=getKeyByValue(sel);
    var code=sh1.charCodeAt(0);
    key_char.delete(x);
    key_char.set(code,sel);
}   
    
function getKeyByValue(val)
{
    for (let [k, v] of key_char) {
        if(val==v)
            return k; 
    }
}
