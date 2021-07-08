// 03 section, alert quote
function alert1(text)
{
    alert(text);
}

// 02 section, swap text
function myFunction() {
    
     
  if(document.getElementById("myDIV").innerHTML == "태초에 하나님이 천지를 창조하시니라 땅이 혼돈하고 공허하며 흑암이 깊음 위에 있고 하나님의 영은 수면 위에 운행하시니라")
  {
    document.getElementById("h3DIV").innerHTML = "로마서 8:14";
    document.getElementById("myDIV").innerHTML = "무릇 하나님의 영으로 인도함을 받는 사람은 곧 하나님의 아들이라";
    
  }
  else
  {
    document.getElementById("h3DIV").innerHTML = "창세기 1:1-2";
    document.getElementById("myDIV").innerHTML = "태초에 하나님이 천지를 창조하시니라 땅이 혼돈하고 공허하며 흑암이 깊음 위에 있고 하나님의 영은 수면 위에 운행하시니라";
   
  }

    
  }