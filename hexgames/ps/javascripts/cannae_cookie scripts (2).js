// JavaScript Document
//var loadBox = "";
var noOfCookiesFlag=3;

function setCookie(d){

  var cookName = "qadisiyaCookie";
  //d=d.slice(0,100);
  var cookVal = ""+d;
  //alert("this is d.length:" +d.length);
  //var cookVal = "here it is!"
  var date = new Date();
  var timeKept = 604800000*5;//604800000 is week in milliseconds
  date.setTime(date.getTime()+timeKept);
  //date.setTime(date.getTime()+604800000);
  var expireDate = date.toGMTString();
  //expireDate = Never;
  var path = ";path=/";
 
  var myCookie = cookName + "=" + cookVal + ";expires=" + expireDate;// + path;
  document.cookie = myCookie;
  
  //getCookie();
}

function setCookie2(d){

  var cookName = "cannaeCookie2";
  //d=d.slice(0,100);
  var cookVal = ""+d;
  //alert("this is d.length:" +d.length);
  //var cookVal = "here it is!"
  var date = new Date();
  var timeKept = 604800000*5;//604800000 is week in milliseconds
  date.setTime(date.getTime()+timeKept);
  //date.setTime(date.getTime()+604800000);
  var expireDate = date.toGMTString();
  //expireDate = Never;
  var path = ";path=/";
 
  var myCookie = cookName + "=" + cookVal + ";expires=" + expireDate;// + path;
  document.cookie = myCookie;
}

function setCookie3(d){

  var cookName = "cannaeCookie3";
  //d=d.slice(0,100);
  var cookVal = ""+d;
  //alert("this is d.length:" +d.length);
  //var cookVal = "here it is!"
  var date = new Date();
  var timeKept = 604800000*5;//604800000 is week in milliseconds
  date.setTime(date.getTime()+timeKept);
  //date.setTime(date.getTime()+604800000);
  var expireDate = date.toGMTString();
  //expireDate = Never;
  var path = ";path=/";
 
  var myCookie = cookName + "=" + cookVal + ";expires=" + expireDate;// + path;
  document.cookie = myCookie;
}


function getCookie(){

if(noOfCookiesFlag==1){
  var incCookies = document.cookie.split(";");
  var cookLength = incCookies.length;
  var cookieName = "";
  var cookieValue = ""; 
  var cookieValue2 = "";
  var cookieValue3 = "";  
  for (var c=0; c<cookLength; c++){
      var pairs = incCookies[c].split("=");
      cookieName = pairs[0];
      //cookieValue2 = pairs[1];
      if(cookieName=="cannaeCookie"){
      cookieValue = pairs[1];} 
      //alert("Name: "+cookieName+" "+"Value: "+cookieValue2);
  }
}
else{

  var incCookies = document.cookie.split(";");
  var cookLength = incCookies.length;
  var cookieName = "";
  var cookieValue = "";
  var cookieValue1 = ""; 
  var cookieValue2 = ""; 
  var cookieValue3 = ""; 
    var countCookies=0;
  for (var c=0; c<cookLength; c++){
      var pairs = incCookies[c].split("=");
      cookieName = pairs[0];
      //alert("pairs[0]="+pairs[0]+" pairs[1]="+pairs[1]);
      //cookieValue2 = pairs[1];
      if(countCookies==0){
      //if(cookieName=="fr40Cookie"){
      cookieValue1 = pairs[1];
      //alert("1:*"+pairs[1]);
      //alert("2:*"+cookieValue1);
      } 
      else if(countCookies==1){
      //else if(cookieName=="fr40Cookie2"){
      cookieValue2 = pairs[1];
      //alert("3:*"+pairs[1]);
      //alert("4:*"+cookieValue2);
      } 
      else if(countCookies==2){
      //else if(cookieName=="fr40Cookie2"){
      cookieValue3 = pairs[1];
      //alert("3:*"+pairs[1]);
      //alert("4:*"+cookieValue2);
      }
      countCookies++;
      //alert("Name: "+cookieName+" "+"Value: "+cookieValue2);
  }
      cookieValue = cookieValue1+cookieValue2+cookieValue3;
}
      //loadBox = cookieValue; 
      //alert(cookieValue);
      reload2(cookieValue);
      //alert("Name: "+cookieName+" "+"Value: "+cookieValue);
}


function clearCookie(){

  var cookName = "cannaeCookie";
  var cookVal = "";
  var date = new Date();
  date.setTime(date.getTime()-60);
  var expireDate = date.toGMTString();
  //var path = ";path=/";
   
  var myCookie = cookName + "=" + cookVal + ";expires=" + expireDate; // + path;
  document.cookie = myCookie;

}

function resetCookie(){

  //var cookName = "fr40Cookie";
  var cookVal = presetupGameData;
  //var cookVal = "0, 0, 0, 0, 0, 0, 523, 153, 0, 0, 0, 0, 0, 0, 0, 572, 161, 0, 0, 0, 0, 0, 0, 0, 559, 159, 0, 0, 0, 0, 0, 0, 0, 559, 167, 0, 0, 0, 0, 0, 0, 0, 564, 165, 0, 0, 0, 0, 0, 0, 0, 564, 159, 0, 0, 0, 0, 0, 0, 0, 570, 169, 0, 0, 0, 0, 0, 0, 0, 570, 175, 0, 0, 0, 0, 0, 0, 0, 560, 172, 0, 0, 0, 0, 0, 0, 0, 535, 144, 0, 0, 0, 0, 0, 0, 0, 534, 138, 0, 0, 0, 0, 0, 0, 0, 539, 206, 0, 0, 0, 0, 0, 0, 0, 536, 232, 0, 0, 0, 0, 0, 0, 0, 544.125, 230.5, 0, 0, 0, 0, 0, 0, 0, 546, 223, 0, 0, 0, 0, 0, 0, 0, 534, 224, 0, 0, 0, 0, 0, 0, 0, 542, 221, 0, 0, 0, 0, 0, 0, 0, 575, 212, 0, 0, 0, 0, 0, 0, 0, 567, 215, 0, 0, 0, 0, 0, 0, 0, 571, 205, 0, 0, 0, 0, 0, 0, 0, 564, 210, 0, 0, 0, 0, 0, 0, 0, 563, 204, 0, 0, 0, 0, 0, 0, 0, 578, 203, 0, 0, 0, 0, 0, 0, 0, 569, 209, 0, 0, 0, 0, 0, 0, 0, 584, 37, 0, 0, 0, 0, 0, 0, 0, 577, 33, 0, 0, 0, 0, 0, 0, 0, 582, 33, 0, 0, 0, 0, 0, 0, 0, 579, 252, 0, 0, 0, 0, 0, 0, 0, 571, 261, 0, 0, 0, 0, 0, 0, 0, 581, 242, 0, 0, 0, 0, 0, 0, 0, 558, 248, 0, 0, 0, 0, 0, 0, 0, 555, 254, 0, 0, 0, 0, 0, 0, 0, 574, 247, 0, 0, 0, 0, 0, 0, 0, 566, 249, 0, 0, 0, 0, 0, 0, 0, 562, 256, 0, 0, 0, 0, 0, 0, 0, 587, 253, 0, 0, 0, 0, 0, 0, 0, 589, 247, 0, 0, 0, 0, 0, 0, 0, 579, 260, 0, 0, 0, 0, 0, 0, 0, 573, 240, 0, 0, 0, 0, 0, 0, 0, 571, 252, 0, 0, 0, 0, 0, 0, 0, 564, 243, 0, 0, 0, 0, 0, 0, 0, 503, 254, 0, 0, 0, 0, 0, 0, 0, 520, 281, 0, 0, 0, 0, 0, 0, 0, 504, 282, 0, 0, 0, 0, 0, 0, 0, 511, 285, 0, 0, 0, 0, 0, 0, 0, 516, 256, 0, 0, 0, 0, 0, 0, 0, 511, 259, 0, 0, 0, 0, 0, 0, 0, 529, 279, 0, 0, 0, 0, 0, 0, 0, 525, 281, 0, 0, 0, 0, 0, 0, 0, 523, 272, 0, 0, 0, 0, 0, 0, 0, 508, 266, 0, 0, 0, 0, 0, 0, 0, 521, 286, 0, 0, 0, 0, 0, 0, 0, 509, 291, 0, 0, 0, 0, 0, 0, 0, 513, 277, 0, 0, 0, 0, 0, 0, 0, 508, 272, 0, 0, 0, 0, 0, 0, 0, 503, 261, 0, 0, 0, 0, 0, 0, 0, 520, 265, 0, 0, 0, 0, 0, 0, 0, 528, 273, 0, 0, 0, 0, 0, 0, 0, 515, 271, 0, 0, 0, 0, 0, 0, 0, 494, 258, 0, 0, 0, 0, 0, 0, 0, 494, 286, 0, 0, 0, 0, 0, 0, 0, 492, 267, 0, 0, 0, 0, 0, 0, 0, 500, 268, 0, 0, 0, 0, 0, 0, 0, 503, 277, 0, 0, 0, 0, 0, 0, 0, 509, 251, 0, 0, 0, 0, 0, 0, 0, 493, 278, 0, 0, 0, 0, 0, 0, 0, 500, 289, 0, 0, 0, 0, 0, 0, 0, 286, 171, 0, 0, 0, 0, 0, 0, 0, 46, 284, 0, 0, 0, 0, 0, 0, 0, 42, 274, 0, 0, 0, 0, 0, 0, 0, 33, 285, 0, 0, 0, 0, 0, 0, 0, 263, 175, 0, 0, 0, 0, 0, 0, 0, 265, 164, 0, 0, 0, 0, 0, 0, 0, 256, 165, 0, 0, 0, 0, 0, 0, 0, 346, 133, 0, 0, 0, 0, 0, 0, 0, 330, 141, 0, 0, 0, 0, 0, 0, 0, 219, 141, 0, 0, 0, 0, 0, 0, 0, 69, 285, 0, 0, 0, 0, 0, 0, 0, 221, 152, 0, 0, 0, 0, 0, 0, 0, 60, 275, 0, 0, 0, 0, 0, 0, 0, 69, 276, 0, 0, 0, 0, 0, 0, 0, 61, 283, 0, 0, 0, 0, 0, 0, 0, 210, 145, 0, 0, 0, 0, 0, 0, 0, 210, 157, 0, 0, 0, 0, 0, 0, 0, 222, 160, 0, 0, 0, 0, 0, 0, 0, 218, 286, 0, 0, 0, 0, 0, 0, 0, 197, 286, 0, 0, 0, 0, 0, 0, 0, 200, 282, 0, 0, 0, 0, 0, 0, 0, 199, 274, 0, 0, 0, 0, 0, 0, 0, 189, 286, 0, 0, 0, 0, 0, 0, 0, 193, 276, 0, 0, 0, 0, 0, 0, 0, 158, 307, 0, 0, 0, 0, 0, 0, 0, 166, 303, 0, 0, 0, 0, 0, 0, 0, 167, 313, 0, 0, 0, 0, 0, 0, 0, 157, 318, 0, 0, 0, 0, 0, 0, 0, 173, 306, 0, 0, 0, 0, 0, 0, 0, 223, 223, 0, 0, 0, 0, 0, 0, 0, 228, 232, 0, 0, 0, 0, 0, 0, 0, 215, 234, 0, 0, 0, 0, 0, 0, 0, 222, 243, 0, 0, 0, 0, 0, 0, 0, 218, 223, 0, 0, 0, 0, 0, 0, 0, 206, 236, 0, 0, 0, 0, 0, 0, 0, 213, 244, 0, 0, 0, 0, 0, 0, 0, 212, 254, 0, 0, 0, 0, 0, 0, 0, 220, 249, 0, 0, 0, 0, 0, 0, 0, 226, 250, 0, 0, 0, 0, 0, 0, 0, 220, 256, 0, 0, 0, 0, 0, 0, 0, 224, 258, 0, 0, 0, 0, 0, 0, 0, 67, 149, 0, 0, 0, 0, 0, 0, 0, 59, 146, 0, 0, 0, 0, 0, 0, 0, 53, 148, 0, 0, 0, 0, 0, 0, 0, 37, 153, 0, 0, 0, 0, 0, 0, 0, 31, 151, 0, 0, 0, 0, 0, 0, 0, 26, 151, 0, 0, 0, 0, 0, 0, 0, 207, 336, 0, 0, 0, 0, 0, 0, 0, 217, 337, 0, 0, 0, 0, 0, 0, 0, 211, 344, 0, 0, 0, 0, 0, 0, 0, 219, 348, 0, 0, 0, 0, 0, 0, 0, 212, 355, 0, 0, 0, 0, 0, 0, 0, 200, 343, 0, 0, 0, 0, 0, 0, 0, 219, 372, 0, 0, 0, 0, 0, 0, 0, 198, 321, 0, 0, 0, 0, 0, 0, 0, 216, 318, 0, 0, 0, 0, 0, 0, 0, 228, 340, 0, 0, 0, 0, 0, 0, 0, 190, 348, 0, 0, 0, 0, 0, 0, 0, 223, 359, 0, 0, 0, 0, 0, 0, 0, 199, 357, 0, 0, 0, 0, 0, 0, 0, 205, 324, 0, 0, 0, 0, 0, 0, 0, 214, 327, 0, 0, 0, 0, 0, 0, 0, 197, 330, 0, 0, 0, 0, 0, 0, 0, 201, 371, 0, 0, 0, 0, 0, 0, 0, 190, 360, 0, 0, 0, 0, 0, 0, 0, 222, 325, 0, 0, 0, 0, 0, 0, 0, 191, 337, 0, 0, 0, 0, 0, 0, 0, 210, 364, 0, 0, 0, 0, 0, 0, 0, 44, 138, 0, 0, 0, 0, 0, 0, 0, 36, 134, 0, 0, 0, 0, 0, 0, 0, 25, 135, 0, 0, 0, 0, 0, 0, 0, 135, 15, 0, 0, 0, 0, 0, 0, 0, 118, 15, 0, 0, 0, 0, 0, 0, 0, 104, 34, 0, 0, 0, 0, 0, 0, 0, 104, 21, 0, 0, 0, 0, 0, 0, 0, 115, 51, 0, 0, 0, 0, 0, 0, 0, 120, 20, 0, 0, 0, 0, 0, 0, 0, 135, 64, 0, 0, 0, 0, 0, 0, 0, 134, 22, 0, 0, 0, 0, 0, 0, 0, 254, 25, 0, 0, 0, 0, 0, 0, 0, 263, 15, 0, 0, 0, 0, 0, 0, 0, 267, 34, 0, 0, 0, 0, 0, 0, 0, 258, 35, 0, 0, 0, 0, 0, 0, 0, 259, 40, 0, 0, 0, 0, 0, 0, 0, 244, 29, 0, 0, 0, 0, 0, 0, 0, 246, 22, 0, 0, 0, 0, 0, 0, 0, 271, 20, 0, 0, 0, 0, 0, 0, 0, 283, 18, 0, 0, 0, 0, 0, 0, 0, 277, 42, 0, 0, 0, 0, 0, 0, 0, 253, 35, 0, 0, 0, 0, 0, 0, 0, 279, 31, 0, 0, 0, 0, 0, 0, 0, 267, 66, 0, 0, 0, 0, 0, 0, 0, 293, 75, 0, 0, 0, 0, 0, 0, 0, 254, 82, 0, 0, 0, 0, 0, 0, 0, 253, 73, 0, 0, 0, 0, 0, 0, 0, 269, 79, 0, 0, 0, 0, 0, 0, 0, 280, 77, 0, 0, 0, 0, 0, 0, 0, 278, 66, 0, 0, 0, 0, 0, 0, 0, 258, 69, 0, 0, 0, 0, 0, 0, 0, 264, 67, 0, 0, 0, 0, 0, 0, 0, 284, 62, 0, 0, 0, 0, 0, 0, 0, 292, 65, 0, 0, 0, 0, 0, 0, 0, 259, 80, 0, 0, 0, 0, 0, 0, 0, 35, 78, 0, 0, 0, 0, 0, 0, 0, 43, 27, 0, 15, 0, 1, 8,A,0,charts/goa victory.htm";
  //var date = new Date();
  //date.setTime(date.getTime()+604800000);
  //var expireDate = date.toGMTString();
  //var path = ";path=/";
 
  //var myCookie = cookName + "=" + cookVal + ";expires=" + expireDate; // + path;
  //document.cookie = myCookie;
      reload2(cookVal);
}

function defaultSetup(){

  //var cookName = "ddayCookie";
  var cookVal = setupGameData;
  //var cookVal = "0, 0, 0, 0, 0, 0, 346, 374, 0, 0, 0, 0, 0, 0, 0, 333, 253, 0, 0, 0, 0, 0, 0, 0, 365, 228, 0, 0, 0, 0, 0, 0, 0, 376, 185, 0, 0, 0, 0, 0, 0, 0, 365, 241, 0, 0, 0, 0, 0, 0, 0, 355, 198, 0, 0, 0, 0, 0, 0, 0, 348, 282, 0, 0, 0, 0, 0, 0, 0, 345, 334, 0, 0, 0, 0, 0, 0, 0, 334, 305, 0, 0, 0, 0, 0, 0, 0, 338, 330, 0, 0, 0, 0, 0, 0, 0, 355, 246, 0, 0, 0, 0, 0, 0, 0, 362, 319, 0, 0, 0, 0, 0, 0, 0, 376, 193, 0, 0, 0, 0, 0, 0, 0, 365, 203, 0, 0, 0, 0, 0, 0, 0, 346, 259, 0, 0, 0, 0, 0, 0, 0, 353, 221, 0, 0, 0, 0, 0, 0, 0, 399, 173, 0, 0, 0, 0, 0, 0, 0, 357, 342, 0, 0, 0, 0, 0, 0, 0, 363, 361, 0, 0, 0, 0, 0, 0, 0, 339, 392, 0, 0, 0, 0, 0, 0, 0, 340, 399, 0, 0, 0, 0, 0, 0, 0, 349, 394, 0, 0, 0, 0, 0, 0, 0, 361, 384, 0, 0, 0, 0, 0, 0, 0, 357, 314, 0, 0, 0, 0, 0, 0, 0, 508, 156, 0, 0, 0, 0, 0, 0, 0, 516, 165, 0, 0, 0, 0, 0, 0, 0, 504, 169, 0, 0, 0, 0, 0, 0, 0, 359, 289, 0, 0, 0, 0, 0, 0, 0, 358, 297, 0, 0, 0, 0, 0, 0, 0, 368, 293, 0, 0, 0, 0, 0, 0, 0, 338, 324, 0, 0, 0, 0, 0, 0, 0, 338, 366, 0, 0, 0, 0, 0, 0, 0, 347, 328, 0, 0, 0, 0, 0, 0, 0, 341, 353, 0, 0, 0, 0, 0, 0, 0, 335, 372, 0, 0, 0, 0, 0, 0, 0, 405, 178, 0, 0, 0, 0, 0, 0, 0, 398, 183, 0, 0, 0, 0, 0, 0, 0, 348, 367, 0, 0, 0, 0, 0, 0, 0, 347, 345, 0, 0, 0, 0, 0, 0, 0, 338, 346, 0, 0, 0, 0, 0, 0, 0, 334, 336, 0, 0, 0, 0, 0, 0, 0, 378, 218, 0, 0, 0, 0, 0, 0, 0, 340, 251, 0, 0, 0, 0, 0, 0, 0, 385, 183, 0, 0, 0, 0, 0, 0, 0, 357, 207, 0, 0, 0, 0, 0, 0, 0, 339, 310, 0, 0, 0, 0, 0, 0, 0, 359, 254, 0, 0, 0, 0, 0, 0, 0, 365, 253, 0, 0, 0, 0, 0, 0, 0, 341, 287, 0, 0, 0, 0, 0, 0, 0, 344, 277, 0, 0, 0, 0, 0, 0, 0, 350, 298, 0, 0, 0, 0, 0, 0, 0, 335, 279, 0, 0, 0, 0, 0, 0, 0, 384, 229, 0, 0, 0, 0, 0, 0, 0, 363, 217, 0, 0, 0, 0, 0, 0, 0, 386, 191, 0, 0, 0, 0, 0, 0, 0, 342, 298, 0, 0, 0, 0, 0, 0, 0, 356, 229, 0, 0, 0, 0, 0, 0, 0, 335, 262, 0, 0, 0, 0, 0, 0, 0, 357, 239, 0, 0, 0, 0, 0, 0, 0, 364, 270, 0, 0, 0, 0, 0, 0, 0, 388, 210, 0, 0, 0, 0, 0, 0, 0, 356, 269, 0, 0, 0, 0, 0, 0, 0, 366, 196, 0, 0, 0, 0, 0, 0, 0, 368, 265, 0, 0, 0, 0, 0, 0, 0, 377, 237, 0, 0, 0, 0, 0, 0, 0, 378, 206, 0, 0, 0, 0, 0, 0, 0, 384, 240, 0, 0, 0, 0, 0, 0, 0, 320, 247, 0, 0, 0, 0, 0, 0, 0, 46, 284, 0, 0, 0, 0, 0, 0, 0, 42, 274, 0, 0, 0, 0, 0, 0, 0, 33, 285, 0, 0, 0, 0, 0, 0, 0, 320, 221, 0, 0, 0, 0, 0, 0, 0, 315, 199, 0, 0, 0, 0, 0, 0, 0, 279, 245, 0, 0, 0, 0, 0, 0, 0, 342, 143, 0, 0, 0, 0, 0, 0, 0, 341, 187, 0, 0, 0, 0, 0, 0, 0, 204, 134, 0, 0, 0, 0, 0, 0, 0, 69, 285, 0, 0, 0, 0, 0, 0, 0, 165, 159, 0, 0, 0, 0, 0, 0, 0, 60, 275, 0, 0, 0, 0, 0, 0, 0, 69, 276, 0, 0, 0, 0, 0, 0, 0, 61, 283, 0, 0, 0, 0, 0, 0, 0, 198, 128, 0, 0, 0, 0, 0, 0, 0, 154, 155, 0, 0, 0, 0, 0, 0, 0, 161, 150, 0, 0, 0, 0, 0, 0, 0, 303, 357, 0, 0, 0, 0, 0, 0, 0, 321, 298, 0, 0, 0, 0, 0, 0, 0, 316, 389, 0, 0, 0, 0, 0, 0, 0, 317, 319, 0, 0, 0, 0, 0, 0, 0, 326, 339, 0, 0, 0, 0, 0, 0, 0, 318, 364, 0, 0, 0, 0, 0, 0, 0, 260, 212, 0, 0, 0, 0, 0, 0, 0, 281, 339, 0, 0, 0, 0, 0, 0, 0, 279, 271, 0, 0, 0, 0, 0, 0, 0, 262, 257, 0, 0, 0, 0, 0, 0, 0, 280, 363, 0, 0, 0, 0, 0, 0, 0, 259, 375, 0, 0, 0, 0, 0, 0, 0, 293, 310, 0, 0, 0, 0, 0, 0, 0, 302, 312, 0, 0, 0, 0, 0, 0, 0, 303, 336, 0, 0, 0, 0, 0, 0, 0, 258, 282, 0, 0, 0, 0, 0, 0, 0, 259, 397, 0, 0, 0, 0, 0, 0, 0, 298, 326, 0, 0, 0, 0, 0, 0, 0, 303, 345, 0, 0, 0, 0, 0, 0, 0, 307, 327, 0, 0, 0, 0, 0, 0, 0, 306, 349, 0, 0, 0, 0, 0, 0, 0, 308, 374, 0, 0, 0, 0, 0, 0, 0, 297, 381, 0, 0, 0, 0, 0, 0, 0, 67, 149, 0, 0, 0, 0, 0, 0, 0, 59, 146, 0, 0, 0, 0, 0, 0, 0, 53, 148, 0, 0, 0, 0, 0, 0, 0, 37, 153, 0, 0, 0, 0, 0, 0, 0, 31, 151, 0, 0, 0, 0, 0, 0, 0, 26, 151, 0, 0, 0, 0, 0, 0, 0, 327, 358, 0, 0, 0, 0, 0, 0, 0, 322, 310, 0, 0, 0, 0, 0, 0, 0, 316, 342, 0, 0, 0, 0, 0, 0, 0, 329, 381, 0, 0, 0, 0, 0, 0, 0, 314, 290, 0, 0, 0, 0, 0, 0, 0, 321, 344, 0, 0, 0, 0, 0, 0, 0, 320, 378, 0, 0, 0, 0, 0, 0, 0, 299, 285, 0, 0, 0, 0, 0, 0, 0, 326, 388, 0, 0, 0, 0, 0, 0, 0, 296, 278, 0, 0, 0, 0, 0, 0, 0, 298, 368, 0, 0, 0, 0, 0, 0, 0, 321, 334, 0, 0, 0, 0, 0, 0, 0, 325, 365, 0, 0, 0, 0, 0, 0, 0, 325, 290, 0, 0, 0, 0, 0, 0, 0, 307, 283, 0, 0, 0, 0, 0, 0, 0, 323, 322, 0, 0, 0, 0, 0, 0, 0, 317, 356, 0, 0, 0, 0, 0, 0, 0, 308, 304, 0, 0, 0, 0, 0, 0, 0, 316, 298, 0, 0, 0, 0, 0, 0, 0, 295, 352, 0, 0, 0, 0, 0, 0, 0, 329, 317, 0, 0, 0, 0, 0, 0, 0, 44, 138, 0, 0, 0, 0, 0, 0, 0, 36, 134, 0, 0, 0, 0, 0, 0, 0, 25, 135, 0, 0, 0, 0, 0, 0, 0, 171, 25, 0, 0, 0, 0, 0, 0, 0, 184, 23, 0, 0, 0, 0, 0, 0, 0, 177, 39, 0, 0, 0, 0, 0, 0, 0, 189, 38, 0, 0, 0, 0, 0, 0, 0, 175, 52, 0, 0, 0, 0, 0, 0, 0, 187, 50, 0, 0, 0, 0, 0, 0, 0, 170, 66, 0, 0, 0, 0, 0, 0, 0, 186, 63, 0, 0, 0, 0, 0, 0, 0, 254, 25, 0, 0, 0, 0, 0, 0, 0, 263, 15, 0, 0, 0, 0, 0, 0, 0, 267, 34, 0, 0, 0, 0, 0, 0, 0, 258, 35, 0, 0, 0, 0, 0, 0, 0, 276, 12, 0, 0, 0, 0, 0, 0, 0, 244, 29, 0, 0, 0, 0, 0, 0, 0, 246, 22, 0, 0, 0, 0, 0, 0, 0, 271, 20, 0, 0, 0, 0, 0, 0, 0, 283, 18, 0, 0, 0, 0, 0, 0, 0, 264, 25, 0, 0, 0, 0, 0, 0, 0, 253, 35, 0, 0, 0, 0, 0, 0, 0, 279, 31, 0, 0, 0, 0, 0, 0, 0, 267, 66, 0, 0, 0, 0, 0, 0, 0, 299, 190, 0, 0, 0, 0, 0, 0, 0, 270, 73, 0, 0, 0, 0, 0, 0, 0, 253, 73, 0, 0, 0, 0, 0, 0, 0, 342, 305, 0, 0, 0, 0, 0, 0, 0, 363, 342, 0, 0, 0, 0, 0, 0, 0, 278, 66, 0, 0, 0, 0, 0, 0, 0, 258, 69, 0, 0, 0, 0, 0, 0, 0, 264, 67, 0, 0, 0, 0, 0, 0, 0, 298, 304, 0, 0, 0, 0, 0, 0, 0, 323, 229, 0, 0, 0, 0, 0, 0, 0, 201, 287, 0, 0, 0, 0, 0, 0, 0, 33, 71, 0, 0, 0, 0, 0, 0, 0, 40, 24, 0, 15, 0, 1, 8,A,0,charts/goa victory.htm";
  //var date = new Date();
  //date.setTime(date.getTime()+604800000);
  //var expireDate = date.toGMTString();
  //var path = ";path=/";
   
  //var myCookie = cookName + "=" + cookVal + ";expires=" + expireDate; // + path;
  //document.cookie = myCookie;
      reload2(cookVal);
}

function advancedGameSetup(){

  var cookName = "cannaeCookie";
  var cookVal = "0, 0, 0, 0, 0, 0, 457, 56, 0, 0, 0, 0, 0, 0, 0, 458, 60, 0, 0, 0, 0, 0, 0, 0, 468, 62, 0, 0, 0, 0, 0, 0, 0, 465, 52, 0, 0, 0, 0, 0, 0, 0, 503, 78, 0, 0, 0, 0, 0, 0, 0, 501, 82, 0, 0, 0, 0, 0, 0, 0, 508, 83, 0, 0, 0, 0, 0, 0, 0, 506, 87, 0, 0, 0, 0, 0, 0, 0, 242, 255, 0, 0, 0, 0, 0, 0, 0, 273, 254, 0, 0, 0, 0, 0, 0, 0, 273, 311, 0, 0, 0, 0, 0, 0, 0, 442.5, 228.5, 0, 0, 0, 0, 0, 0, 0, 459, 148, 0, 0, 0, 0, 0, 0, 0, 543, 76, 0, 0, 0, 0, 0, 0, 0, 459, 50, 0, 0, 0, 0, 0, 0, 0, 54, 9, 0, 0, 0, 0, 0, 0, 0, 597, 59, 0, 0, 0, 0, 0, 0, 0, 604, 60, 0, 0, 0, 0, 0, 0, 0, 606, 65, 0, 0, 0, 0, 0, 0, 0, 304, 254, 0, 0, 0, 0, 0, 0, 0, 333, 255, 0, 0, 0, 0, 0, 0, 0, 396, 308, 0, 0, 0, 0, 0, 0, 0, 554, 472, 0, 0, 0, 0, 0, 0, 0, 633, 500, 0, 0, 0, 0, 0, 0, 0, 398, 146, 0, 0, 0, 0, 0, 0, 0, 475, 174, 0, 0, 0, 0, 0, 0, 0, 459, 255, 0, 0, 0, 0, 0, 0, 0, 363, 145, 0, 0, 0, 0, 0, 0, 0, 522, 147, 0, 0, 0, 0, 0, 0, 0, 490, 199, 0, 0, 0, 0, 0, 0, 0, 475, 281, 0, 0, 0, 0, 0, 0, 0, 351, 228, 0, 0, 0, 0, 0, 0, 0, 396, 256, 0, 0, 0, 0, 0, 0, 0, 334, 310, 0, 0, 0, 0, 0, 0, 0, 413, 335, 0, 0, 0, 0, 0, 0, 0, 412, 391, 0, 0, 0, 0, 0, 0, 0, 491, 418, 0, 0, 0, 0, 0, 0, 0, 477, 336, 0, 0, 0, 0, 0, 0, 0, 587.875, 365.125, 0, 0, 0, 0, 0, 0, 0, 552, 418, 0, 0, 0, 0, 0, 0, 0, 616, 417, 0, 0, 0, 0, 0, 0, 0, 678, 472, 0, 0, 0, 0, 0, 0, 0, 457, 81, 0, 0, 0, 0, 0, 0, 0, 463, 82, 0, 0, 0, 0, 0, 0, 0, 467, 83, 0, 0, 0, 0, 0, 0, 0, 455, 95, 0, 0, 0, 0, 0, 0, 0, 594, 87, 0, 0, 0, 0, 0, 0, 0, 600, 89, 0, 0, 0, 0, 0, 0, 0, 608, 87, 0, 0, 0, 0, 0, 0, 0, 605, 92, 0, 0, 0, 0, 0, 0, 0, 595, 84.5, 0, 0, 0, 0, 0, 0, 0, 504.5, 54, 0, 0, 0, 0, 0, 0, 0, 232, 8, 0, 0, 0, 0, 0, 0, 0, 259, 8, 0, 0, 0, 0, 0, 0, 0, 256, 8, 0, 0, 0, 0, 0, 0, 0, 295, 7, 0, 0, 0, 0, 0, 0, 0, 264.875, 8, 0, 0, 0, 0, 0, 0, 0, 273.25, 13, 0, 0, 0, 0, 0, 0, 0, 302.125, 8.25, 0, 0, 0, 0, 0, 0, 0, 309.25, 10, 0, 0, 0, 0, 0, 0, 0, 303.125, 17.625, 0, 0, 0, 0, 0, 0, 0, 398.25, 26.625, 0, 15, 0, 1, 8,A,0,charts/rules.htm";
  var date = new Date();
  date.setTime(date.getTime()+604800000);
  var expireDate = date.toGMTString();
  //var path = ";path=/";
  
  var myCookie = cookName + "=" + cookVal + ";expires=" + expireDate; // + path;
  document.cookie = myCookie;
}

function saveWindow2(){
	
var swLeft=0;
var swTop=0;
//var swText=0;
var swMark=0;
var swDead=0;
var swCav=0; //dismounted
var swDis=0; //ineffective
var swTrans=0; //use for routed
var swTrans1=0; //passenger id -spare 1 - use for exited
var swTrans2=0; //passenger title - spare 2
var imgIndex=0;
var activeIndex=0;
var allText="";
var thisShift=0;

//if(halfSize==1){thisShift=shift;}
	for(k=0;k<noOfImages;k++){
	//for(k=imgStart;k<lastIndex+1;k++){
	activeIndex=k;
	//imgIndex=activeIndex+1;
	swLeft = piecesLeft[k];
	swTop = piecesTop[k];
	if(movedA[activeIndex]==1){
		swMark = 1;
		}
	else{
		swMark = 0;
		}
	if(disruptedA[k]==1){
		swDis = 1;
		}
	else{
		swDis = 0;
		}
	if(armourA[k]=="l"){
		if(neutN[activeIndex]>0){
			swDis = neutN[activeIndex];}
		else{swDis=0;}
	}
	if(deadA[activeIndex]>0){
		swDead = deadA[activeIndex];
		}
	else{
		swDead = 0;
		}
	if(dismountA[k]==1){
		swCav = 1;
		}
	else{
		swCav = 0;
		}
	if(panicA[activeIndex]>0){
		swTrans = panicA[activeIndex];
		}
	else{
		swTrans = 0;
		}
	if(exitA[activeIndex]>0){
		swTrans1 = exitA[activeIndex];
		}
	else{
		swTrans1 = 0;
		}
	if(passengerA[activeIndex]>0){
		swTrans2 = passengerA[activeIndex];
		}
	else{
		swTrans2 = 0;
		}

	allText=allText+swTrans+", "+swTrans1+", "+swTrans2+", "+swDead+", "+swMark+", "+swDis+", "+swLeft+", "+swTop+", "+swCav+", ";
	}

	allText=allText+unionVP+", "+rebelVP+", "+turnNumb+", "+ size +","+ turnLetter +","+ turnNumber +","+situationAddress;
	//var win = open("", null, "toolbar=0,location=0,directories=0,status=0,menubar=1,scrollbars=1,resizable=1,width=400,height=200,left=200,top=200");
	//win.document.write(allText);
	if(saveDataFlag){
	   //alert(""+allText);
     var win = window.open("", null, "toolbar=0,location=0,directories=0,status=0,menubar=1,scrollbars=1,resizable=1,width=400,height=200,left=200,top=200");
	   win.document.write(""+allText);
	   saveDataFlag=false;}
	//clearCookie();
	if(allText.length<3000){
	noOfCookiesFlag=1;
	setCookie(allText);}
	else{
	noOfCookiesFlag=3;
	setCookie(allText.slice(0,2999));
	setCookie2(allText.slice(2999, 5999));
	setCookie3(allText.slice(5999));
  }
  allText="";
	//win.document.close();
  }
  
function saveDataWindow(){
    saveDataFlag=true;
    saveWindow2();
}
  

function reload2(d){
	//var catchText="";
	//var loadBox = document.getElementById("textbox1");
	//var loadBox = d;
	//var catchText=loadBox.value;
	var catchText= ""+d;
	//alert(""+catchText);//ALLOW THIS to show the data in the cookie *****
	var loadA=catchText.split(",");
	var loopTill = loadA.length;
	var loadSize=1*loadA[loopTill-4];
	reScale=size/loadSize;
	var flipIndex=0;
	//var noPieces=lastIndex-imgStart;
	var noPieces=noOfImages;
	//for(m=0;m<((noPieces+1)*9);m=m+9){ //9=number of saved items for each unit
		for(n=0; n<noPieces; n++){
		activeIndex=n;
		m=n*9;
    //activeIndex=Math.floor(m/9);
		panicA[activeIndex]=loadA[m];
		//transA[activeIndex]=loadA[m];
		//dummy1=loadA[m+1];
		//if(dummy1>0){dummy1++;dummy1++;}
		//transporterA[activeIndex]=dummy1;//loadA[m+1];
		exitA[activeIndex]=1*loadA[m+1];//spare 1 - exited
		passengerA[activeIndex]=1*loadA[m+2];//spare 2
		deadA[activeIndex]=1*loadA[m+3];
		movedA[activeIndex]=1*loadA[m+4];
		disruptedA[activeIndex]=1*loadA[m+5];
		dismountA[activeIndex]=1*loadA[m+8];
		piecesLeft[activeIndex]=1*loadA[m+6]*reScale;
		piecesTop[activeIndex]=1*loadA[m+7]*reScale;
	
	//mark if should be marked...
    changeMark(imageArray[activeIndex], activeIndex, 0);
		/*if(movedA[activeIndex]==1){
			imageArray[activeIndex].style.borderStyle="dotted";
			}
		else{imageArray[activeIndex].style.borderStyle="solid";}*/
			
	//routed units
				
		if(panicA[activeIndex]==1){
		  changeRout(imageArray[activeIndex], activeIndex, 0);}
			/*var pieceName = unitsA[thisIsA[activeIndex]*itemsPerUnit+1]; //imageArray[activeIndex].getAttribute("title");
			var pieceName = pieceName.slice(0,2);
			var base=Abase;
			if(activeIndex>=gerNumber){base=Bbase;}
			imageArray[activeIndex].setAttribute("src", "units/"+base+pieceName+"p.jpg");
			titles = imageArray[activeIndex].getAttribute("title");
			imageArray[activeIndex].setAttribute("title", "ROUTING: " + titles);
		}*/
		
	//dismounted?...
		if(dismountA[activeIndex]==1){
			titles = imageArray[activeIndex].getAttribute("title");
			imageArray[activeIndex].setAttribute("title", "dismounted: " + titles);
			}
		else{}
			
	
	//disrupted
	if(disruptedA[activeIndex]==1){
    changeDisrupt(imageArray[activeIndex], activeIndex, 0);}
    
  //out of supply
	if(panicA[activeIndex]==2){
    changeSupply(imageArray[activeIndex], activeIndex, 0);}
    
  //fires
	if(disruptedA[activeIndex]==3){
    changeFire(imageArray[activeIndex], activeIndex, 0);}
	//disrupted if should be disrupted...
	/*if(armourA[activeIndex]!="l"){// in prestags leaders cannot be D so use this to store leader level	
		if(disruptedA[activeIndex]==1){
			titles = imageArray[activeIndex].getAttribute("title");
			imageArray[activeIndex].setAttribute("title", titles+": ineffective!");//"DISRUPTED: " + titles);
			imageArray[activeIndex].style.borderColor="red";
		}
	}
	else{
		if(disruptedA[activeIndex]>0){
		neutN[activeIndex]=disruptedA[activeIndex]-1;
		disruptedA[activeIndex]=0;
		if(neutN[activeIndex]==0){neutN[activeIndex]=4;}
		var pieceName=neutN[activeIndex]+"L";
		//var pieceName = imageArray[activeIndex].getAttribute("title");
		//var pieceName = pieceName.slice(0,4);
		changeNeutralPic(pieceName);
		}
	}*/
	
	//exited units
	if(exitA[activeIndex]==1){
				titles = imageArray[activeIndex].getAttribute("title");
				imageArray[activeIndex].setAttribute("title", "EXITED: " + titles);
				imageArray[activeIndex].style.borderColor="green";
				
			}
	
	//dead units
	if(deadA[activeIndex]>=1){
    changeDead(imageArray[activeIndex], activeIndex, 0);
			/*firedA[activeIndex]=0;
			titles = imageArray[activeIndex].getAttribute("title");
			imageArray[activeIndex].setAttribute("title", "DESTROYED: " + titles);
	if(activeIndex<gerNumber){
					imageArray[activeIndex].style.width=sunit2/2;
					imageArray[activeIndex].style.height=sunit2/2;
					imageArray[activeIndex].setAttribute("src", "units/"+Abase+"dead.jpg");
			}
			else {
					imageArray[activeIndex].style.width=sunit2/2;
					imageArray[activeIndex].style.height=sunit2/2;
					imageArray[activeIndex].setAttribute("src", "units/"+Bbase+"dead.jpg");
			}*/
		}
		
	}
	
	/*flipIndex=loopTill-14;
	for(i=221; i<236; i=i+7){
		cityA[i]=loadA[flipIndex];
		flipIndex++;
		changeCity2(i,cityA[i]);}
	for(i=247; i<255; i=i+7){
		cityA[i]=loadA[flipIndex];
		flipIndex++;
		changeCity2(i,cityA[i]);}
	for(i=266; i<274; i=i+7){
		cityA[i]=loadA[flipIndex];
		flipIndex++;
		changeCity2(i,cityA[i]);}*/

	rebelVP=1*loadA[loopTill-6];
	unionVP=1*loadA[loopTill-7];
	turnNumb=1*loadA[loopTill-5];
	turnLetter=""+loadA[loopTill-3];
	//var loopy=loadA[loopTill-2];
	//turnNumber=0;
	turnNumber=1*loadA[loopTill-2];
	//for(t=0;t<loopy;t++){//I think we do it this way because its
	//	turnNumber++;} //loading a string not a number (but VPs work...)
	//lastTurn();
	turnNumber=turnNumber*1;
	//nextTurn();
	//lastTurn();
	loadA.length=0;
		if(hiddenMovement){
		if(turnNumb==1||turnNumb==4){
			hideRus=0;//=1;
			hideGer=0;}
		if(turnNumb==2||turnNumb==3){
			hideRus=0;
			hideGer=0;}//=1;}
		hideToggle();
		}
	//loadBox.value = "Data re-loaded successfully!"
	alert("Data re-loaded successfully!");
	changeSize();
	//statusNow;
	}
	
function reloadReset(){
  
  saveWindow();
  resetCookie();
  //getCookie();
}

	
function reloadSetup(){
  
  //saveWindow();
  defaultSetup();
  //getCookie();
}

function reloadAdvancedGame(){
  
  //saveWindow();
  advancedGameSetup();
  getCookie();
}
