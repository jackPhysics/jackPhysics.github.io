

function clearCookie(){
}

function resetCookie(){

  var cookVal = presetupGameData;
      reload2(cookVal);
}

function defaultSetup(){

  var cookVal = setupGameData[setUpGameNo]; //locationName;
      reload2(cookVal);
      setUpGameNo++;
      if(setUpGameNo==maxNoOfSetUps){setUpGameNo=0;}
}

function advancedGameSetup(){

  var cookName = "raphiaCookie";
  var cookVal = "0, 0, 0, 0, 0, 0, 457, 56, 0, 0, 0, 0, 0, 0, 0, 458, 60, 0, 0, 0, 0, 0, 0, 0, 468, 62, 0, 0, 0, 0, 0, 0, 0, 465, 52, 0, 0, 0, 0, 0, 0, 0, 503, 78, 0, 0, 0, 0, 0, 0, 0, 501, 82, 0, 0, 0, 0, 0, 0, 0, 508, 83, 0, 0, 0, 0, 0, 0, 0, 506, 87, 0, 0, 0, 0, 0, 0, 0, 242, 255, 0, 0, 0, 0, 0, 0, 0, 273, 254, 0, 0, 0, 0, 0, 0, 0, 273, 311, 0, 0, 0, 0, 0, 0, 0, 442.5, 228.5, 0, 0, 0, 0, 0, 0, 0, 459, 148, 0, 0, 0, 0, 0, 0, 0, 543, 76, 0, 0, 0, 0, 0, 0, 0, 459, 50, 0, 0, 0, 0, 0, 0, 0, 54, 9, 0, 0, 0, 0, 0, 0, 0, 597, 59, 0, 0, 0, 0, 0, 0, 0, 604, 60, 0, 0, 0, 0, 0, 0, 0, 606, 65, 0, 0, 0, 0, 0, 0, 0, 304, 254, 0, 0, 0, 0, 0, 0, 0, 333, 255, 0, 0, 0, 0, 0, 0, 0, 396, 308, 0, 0, 0, 0, 0, 0, 0, 554, 472, 0, 0, 0, 0, 0, 0, 0, 633, 500, 0, 0, 0, 0, 0, 0, 0, 398, 146, 0, 0, 0, 0, 0, 0, 0, 475, 174, 0, 0, 0, 0, 0, 0, 0, 459, 255, 0, 0, 0, 0, 0, 0, 0, 363, 145, 0, 0, 0, 0, 0, 0, 0, 522, 147, 0, 0, 0, 0, 0, 0, 0, 490, 199, 0, 0, 0, 0, 0, 0, 0, 475, 281, 0, 0, 0, 0, 0, 0, 0, 351, 228, 0, 0, 0, 0, 0, 0, 0, 396, 256, 0, 0, 0, 0, 0, 0, 0, 334, 310, 0, 0, 0, 0, 0, 0, 0, 413, 335, 0, 0, 0, 0, 0, 0, 0, 412, 391, 0, 0, 0, 0, 0, 0, 0, 491, 418, 0, 0, 0, 0, 0, 0, 0, 477, 336, 0, 0, 0, 0, 0, 0, 0, 587.875, 365.125, 0, 0, 0, 0, 0, 0, 0, 552, 418, 0, 0, 0, 0, 0, 0, 0, 616, 417, 0, 0, 0, 0, 0, 0, 0, 678, 472, 0, 0, 0, 0, 0, 0, 0, 457, 81, 0, 0, 0, 0, 0, 0, 0, 463, 82, 0, 0, 0, 0, 0, 0, 0, 467, 83, 0, 0, 0, 0, 0, 0, 0, 455, 95, 0, 0, 0, 0, 0, 0, 0, 594, 87, 0, 0, 0, 0, 0, 0, 0, 600, 89, 0, 0, 0, 0, 0, 0, 0, 608, 87, 0, 0, 0, 0, 0, 0, 0, 605, 92, 0, 0, 0, 0, 0, 0, 0, 595, 84.5, 0, 0, 0, 0, 0, 0, 0, 504.5, 54, 0, 0, 0, 0, 0, 0, 0, 232, 8, 0, 0, 0, 0, 0, 0, 0, 259, 8, 0, 0, 0, 0, 0, 0, 0, 256, 8, 0, 0, 0, 0, 0, 0, 0, 295, 7, 0, 0, 0, 0, 0, 0, 0, 264.875, 8, 0, 0, 0, 0, 0, 0, 0, 273.25, 13, 0, 0, 0, 0, 0, 0, 0, 302.125, 8.25, 0, 0, 0, 0, 0, 0, 0, 309.25, 10, 0, 0, 0, 0, 0, 0, 0, 303.125, 17.625, 0, 0, 0, 0, 0, 0, 0, 398.25, 26.625, 0, 15, 0, 1, 8,A,0,charts/rules.htm";
  var date = new Date();
  date.setTime(date.getTime()+604800000);
  var expireDate = date.toGMTString();

  var myCookie = cookName + "=" + cookVal + ";expires=" + expireDate; // + path;
  document.cookie = myCookie;
}

function getCookie(){//reload the last move - move gets save in saveWindow2()
      cookieValue = localStorage.raphiaSave;
      alert("raphiaSave = " + cookieValue);
      reload2(cookieValue);
}


function saveTheLot(t){
  var allText=t;
  localStorage.raphiaSave = ""+allText;
  return;
  //allText="";
}

//to put pieces back to where they last were - use getCookie(

function reloadReset(){//reset the pieces

  saveWindow();
  resetCookie();
  //getCookie();
}


function reloadSetup(){//setup 1st turn

  //saveWindow();
  defaultSetup();
  //getCookie();
}

function reloadAdvancedGame(){

  //saveWindow();
  advancedGameSetup();
  getCookie();
}
