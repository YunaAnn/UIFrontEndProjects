/***LOADING***/
var time;

function loading()
{
  time = setTimeout(showPage, 2000);
}

function showPage()
{
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.display = "block";
}

/***MENU***/

var i=0;
function expand()
{
  if(i==0)
  {
   document.getElementById("menu").style.transform="scale(3)"; 
   document.getElementById("open").style.transform="rotate(45deg)"; 
   i=1;
  }
  else
  {
   document.getElementById("menu").style.transform="scale(0)"; 
   document.getElementById("open").style.transform="rotate(0deg)"; 
   i=0;
  }
}

function menuActive()
{
    document.getElementsByTagName("nav")[0].className = "menu menu_active";
}

function menuClose()
{
  document.getElementsByTagName("nav")[0].className = "menu";
}