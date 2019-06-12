
function load(c)
{
    var tabdata, tablinks;

    tabdata = document.getElementsByClassName("tab_data");
    tabdata[1-c].style.display = "none";
    tabdata[c].style.display="block";

    tablinks = document.getElementsByClassName("exp");
    tablinks[1-c].className = tablinks[1-c].className.replace(" active", "");
    tablinks[c].className += " active";
}

function init()
{
  document.getElementById("defaultOpen").click();
}