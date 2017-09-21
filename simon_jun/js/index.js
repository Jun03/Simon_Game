level=0;
var flag=false;
var symbol="abcd";
 var pattern=[];
var user=[];
var sound={
  a: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    b:new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
  c:new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
  d:new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
  beep: new Audio('http://res.cloudinary.com/jun03/video/upload/v1505670631/Basketball_Buzzer-SoundBible.com-1863250611_qiwjwu.mp3'),
  lost: new Audio('http://res.cloudinary.com/jun03/video/upload/v1505670647/9_mm_gunshot-mike-koenig-123_sugz2a.mp3'),
  win: new Audio('http://res.cloudinary.com/jun03/video/upload/v1505670665/SMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408_em0aer.mp3')
};
    
    function reset(){
  level=0;
  pattern=[];
  user=[];
      flag=false;
      $(".level").text("");
    }
  

function newgame(){
  level=0;
  pattern=[];
  nextLevel();
  
  }

function nextLevel(){
  level++;
pattern.push(symbol.charAt(Math.floor(Math.random()*symbol.length))); 
  $(".level").text(level);
   setTimeout(display,1030);

}

function clearuser(){
  user=[];
}

function addToUser(entry){
 show(entry);
  user.push(entry);
  check();
}

function check(){
  
 if(pattern[user.length-1]!==user[user.length-1]){
   if(flag===false)
   {
     audio("beep");
     setTimeout(function(){
   alert("Wrong Move");
   setInterval(display(),1000);
    
     },1020);
    }
   else {
     audio("lost");
   setTimeout(function(){
     alert("YOU LOST");
      newgame();
     },1020);
   }
 }
  else 
    {
    if(user.length===pattern.length)
      {
        if(user.length===20){
         
          audio("win");
          setTimeout(function(){
          alert("YOU WON");
          newgame();  
          },4000);
          
        }
        else setTimeout(nextLevel(),1000);
      }
    }
    
}

function display(){
  
 var i=0;
  var moves=setInterval(function(){
    show(pattern[i]);
    i++;
    if(i>=pattern.length){
      clearInterval(moves);
      
    }
  },1000);
  clearuser();
  
}

function show(x){
audio(x);   
  $("#"+x).toggle();
  setTimeout(function(){
    $("#"+x).toggle();
  },500);
  
}

function audio(x){
  switch(x){
    case 'a': sound.a.play();
                break; 
    case 'b': sound.b.play();
              break;
     case 'c': sound.c.play();
      break;
     case 'd': sound.d.play();
      break;
    case 'win': sound.win.play();
             break;
    case 'lost': sound.lost.play();
             break;
    case 'beep': sound.beep.play();
             break;
      
          }
  
}


$(document).ready(function(){
  document.getElementById('a').style.pointerEvents = 'none';
  document.getElementById('b').style.pointerEvents = 'none';
  document.getElementById('c').style.pointerEvents = 'none';
  document.getElementById('d').style.pointerEvents = 'none';
 //   $('[data-toggle="popover"]').popover();   
  $(".switch").click(function(){
  if($("#stat").prop("checked")){
    $("#status").text("ON");
    $(".level").text("start");
   $("#start").prop("disabled",false);
    $("#strict").prop("disabled",false);

  }
  else {
    $("#status").text("OFF");
    $("#start").prop("disabled",true);
    $("#strict").prop("disabled",true);
   // $("#a").pointerEvents=none;
    //document.getElementById('a').style.pointerEvents = 'none';
    reset();
  }
  
  });
  
  $("#start").click(function(){
   document.getElementById('a').style.pointerEvents = 'auto';
   document.getElementById('b').style.pointerEvents = 'auto';
   document.getElementById('c').style.pointerEvents = 'auto';
   document.getElementById('d').style.pointerEvents = 'auto';
    
    setTimeout(newgame,2000);
   
  });
 
   $("#strict").click(function(){
   flag=true;
  });
 
  
  
  
  $("#a").click(function(){
  addToUser(this.id);  
  });
  
  $("#c").click(function(){
  addToUser(this.id);  
  });
  
  
  $("#b").click(function(){
  addToUser(this.id);  
  });
  
  
  $("#d").click(function(){
  addToUser(this.id);  
  });






});