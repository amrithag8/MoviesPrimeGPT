import React from 'react'

export const generateCatcha = () => {
  var alpha=new Array("A","B","C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");

  for(var i=1; i<=4; i++){
    var a=alpha[Math.floor(Math.random()*alpha.length)];
    var b=alpha[Math.floor(Math.random()*alpha.length)];
    var c=alpha[Math.floor(Math.random()*alpha.length)];
    var d=alpha[Math.floor(Math.random()*alpha.length)];
  }

  var captcha=a+" "+b+" "+c+" "+d;
  
  return captcha;

}


