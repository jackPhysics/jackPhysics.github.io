//all the units
function colorRed(){//change the color of red units between red and color
  if(redColor){
    redColor=false;
    document.getElementById('btnCA').innerText="A=Original";
  document.getElementById('btnCA').style.backgroundColor="Pink";
document.getElementById('btnCA').style.color="Black";
    for(j=0;j<gerNumber;j++){
    printUnit(j, typeNumbA[j], typeTotalA[j], thisIsA[j],countIndividual[j]);
    }
  }
  else{
    redColor=true;
    var colorName = "Original";
    const [dumColorA1, colorName1, dumColorTA1] = chooseColorArray(dumColorNumbA, "A");
    dumColorA = dumColorA1;
    colorName = colorName1;
    dumColorTA = dumColorTA1;
    dumColorNumbA++;
    if(dumColorNumbA>28){dumColorNumbA=0}
      /*switch(dumColorNumbA){
        case 0: dumColorA = "#fff0f0";//pink
        colorName = "Pale Pink";
        break;
        case 1: dumColorA = "#ff0000";//red
        colorName = "Red";
        break;
        case 2: dumColorA = "#f0ff0f";//lemon
        colorName = "Lemon";
        break;
        case 3: dumColorA = "#fff00f";//yellow
        colorName = "Yellow";
        break;
        case 4: dumColorA = "#0fff0f";//green
        colorName = "Green";
        break;
        case 5: dumColorA = "#f0fff0";//green white
        colorName = "Green White";
        break;
        case 6: dumColorA = "#0ff0ff";//light blue
        colorName = "Light Blue";
        break;
        case 7: dumColorA = "#f0f0ff";//blue white
        colorName = "Blue White";
        break;
        case 8: dumColorA = "#ff00ff";//magenta
        colorName = "Purple";
        break;
      }*/
    document.getElementById('btnCA').innerText="A="+colorName+" ("+dumColorNumbA+")";
  document.getElementById('btnCA').style.backgroundColor=dumColorA;
document.getElementById('btnCA').style.color=dumColorTA;
    for(j=0;j<gerNumber;j++){
    printUnit(j, typeNumbA[j], typeTotalA[j], thisIsA[j],countIndividual[j]);
    }
  }
}


function colorBlack(){//change the color of black units between black and color
  if(blackColor){
    blackColor=false;
    document.getElementById('btnCB').innerText="B=Original";
  document.getElementById('btnCB').style.backgroundColor="Cyan";
document.getElementById('btnCB').style.color="Black";
    for(j=gerNumber;j<neutNumber;j++){
    printUnit(j, typeNumbA[j], typeTotalA[j], thisIsA[j],countIndividual[j]);
    }
  }
  else{
  blackColor=true;
  var colorName = "Original";
  const [dumColorB1, colorName1, dumColorTB1] = chooseColorArray(dumColorNumbB, "B");
  dumColorB = dumColorB1;
  colorName = colorName1;
  dumColorTB = dumColorTB1;
  dumColorNumbB--;
  if(dumColorNumbB<0){dumColorNumbB=28}
    /*  switch(dumColorNumbB){
        case 0: dumColorB = "#fff0f0";//pink
        colorName = "Pale Pink";
        break;
        case 1: dumColorB = "#ff0000";//red
        colorName = "Red";
        break;
        case 2: dumColorB = "#f0ff0f";//lemon
        colorName = "Lemon";
        break;
        case 3: dumColorB = "#fff00f";//yellow
        colorName = "Yellow";
        break;
        case 4: dumColorB = "#0fff0f";//green
        colorName = "Green";
        break;
        case 5: dumColorB = "#f0fff0";//green white
        colorName = "Green White";
        break;
        case 6: dumColorB = "#0ff0ff";//light blue
        colorName = "Light Blue";
        break;
        case 7: dumColorB = "#f0f0ff";//blue white
        colorName = "Blue White";
        break;
        case 8: dumColorB = "#ff00ff";//magenta
        colorName = "Purple";
        break;
      }*/
    document.getElementById('btnCB').innerText="B="+colorName+" ("+dumColorNumbB+")";
  document.getElementById('btnCB').style.backgroundColor=dumColorB;
document.getElementById('btnCB').style.color=dumColorTB;
    for(j=gerNumber;j<neutNumber;j++){
    printUnit(j, typeNumbA[j], typeTotalA[j], thisIsA[j],countIndividual[j]);
    }
  }
}

function chooseColorArray(n, s){
  var colorCol0 = "#ffffff";
  var colorName0 = "White";
  var colorText0 = "#000000";
  var colorNumb0 = n;
  if(s=="A"){
  colorNumb0++;
  if(colorNumb0>28){colorNumb0=0}}
  else{//side B
  colorNumb0--;
  if(colorNumb0<0){colorNumb0=28}}
  switch(colorNumb0){
    case 0: colorCol0 = "#fa8072";//pink
    colorName0 = "Salmon";
    break;
    case 1: colorCol0 = "#dc143c";//red
    colorName0 = "Crimson";
    colorText0 = "#ffffff";
    break;
    case 2: colorCol0 = "#ffe4e1";//lemon
    colorName0 = "MistyRose";
    break;
    case 3: colorCol0 = "#ff0000";//yellow
    colorName0 = "Red";
    break;
    case 4: colorCol0 = "#8b0000";//green white
    colorName0 = "DarkRed";
    colorText0 = "#ffffff";
    break;
    case 5: colorCol0 = "#ffb6c1";//light blue
    colorName0 = "Pink";
    break;
    case 6: colorCol0 = "#ff7f50";//blue white
    colorName0 = "Coral";
    break;
    case 7: colorCol0 = "#ffa500";//magenta
    colorName0 = "Orange";
    break;
    case 8: colorCol0 = "#ffd700";//green white
    colorName0 = "Gold";
    break;
    case 9: colorCol0 = "#f0e68c";//blue white
    colorName0 = "Khaki";
    break;
    case 10: colorCol0 = "#bdb76b";//magenta
    colorName0 = "DarkKhaki";
    break;
    case 11: colorCol0 = "#f0ff0f";//lemon
    colorName0 = "Lemon";
    break;
      case 12: colorCol0 = "#dda0dd";//pink
      colorName0 = "Plum";
      break;
      case 13: colorCol0 = "#9400d3";//red
      colorName0 = "Violet";
      colorText0 = "#ffffff";
      break;
      case 14: colorCol0 = "#4b0082";//lemon
      colorName0 = "Indigo";
      colorText0 = "#ffffff";
      break;
      case 15: colorCol0 = "#98fb98";//yellow
      colorName0 = "PaleGreen";
      break;
      case 16: colorCol0 = "#0fff0f";//green
      colorName0 = "Green";
      break;
      case 17: colorCol0 = "#228b22";//light blue
      colorName0 = "ForestGreen";
      colorText0 = "#ffffff";
      break;
      case 18: colorCol0 = "#808000";//blue white
      colorName0 = "Olive";
      colorText0 = "#ffffff";
      break;
      case 19: colorCol0 = "#7fffd4";//magenta
      colorName0 = "Aquamarine";
      break;
      case 20: colorCol0 = "#87ceeb";//green white
      colorName0 = "SkyBlue";
      break;
      case 21: colorCol0 = "#4169e1";//blue white
      colorName0 = "RoyalBlue";
      colorText0 = "#ffffff";
      break;
      case 22: colorCol0 = "#000080";//magenta
      colorName0 = "Navy";
      colorText0 = "#ffffff";
      break;
        case 23: colorCol0 = "#f5deb3";//pink
        colorName0 = "Wheat";
        break;
        case 24: colorCol0 = "#d2691e";//red
        colorName0 = "Chocolate";
        colorText0 = "#ffffff";
        break;
        case 25: colorCol0 = "#c0c0c0";//green
        colorName0 = "Silver";
        break;
        case 26: colorCol0 = "#000000";//light blue
        colorName0 = "Black";
        colorText0 = "#ffffff";
        break;
        case 27: colorCol0 = "#ffffff";//blue white
        colorName0 = "White";
        break;
        case 28: colorCol0 = "#ffffff";//blue white
        colorName0 = "White n Red";
        colorText0 = "#ff0000";
        break;
  }
  return[colorCol0,colorName0,colorText0];
}

function chooseColorArrayOld(n){
  var colorCol0 = "#ffffff";
  var colorName0 = "White";
  var colorText0 = "#000000";
  var colorNumb0 = n;
  colorNumb0++;
  if(colorNumb0>8){colorNumb0=0}
  switch(colorNumb0){
    case 0: colorCol0 = "#fff0f0";//pink
    colorName0 = "Pale Pink";
    break;
    case 1: colorCol0 = "#ff0000";//red
    colorName0 = "Red";
    break;
    case 2: colorCol0 = "#f0ff0f";//lemon
    colorName0 = "Lemon";
    break;
    case 3: colorCol0 = "#fff00f";//yellow
    colorName0 = "Yellow";
    break;
    case 4: colorCol0 = "#0fff0f";//green
    colorName0 = "Green";
    break;
    case 5: colorCol0 = "#f0fff0";//green white
    colorName0 = "Green White";
    break;
    case 6: colorCol0 = "#0ff0ff";//light blue
    colorName0 = "Light Blue";
    break;
    case 7: colorCol0 = "#f0f0ff";//blue white
    colorName0 = "Blue White";
    break;
    case 8: colorCol0 = "#ff00ff";//magenta
    colorName0 = "Purple";
    break;
    case 4: colorCol0 = "#f4a460";//green
    colorName0 = "SandyBrown";
    break;
    case 32: colorCol0 = "#808080";//green white
    colorName0 = "Gray";
    colorText0 = "#ffffff";
    break;
    case 29: colorCol0 = "#f0fff0";//lemon
    colorName0 = "HoneyDew";
    break;
    case 30: colorCol0 = "#f0f8ff";//yellow
    colorName0 = "AliceBlue";
    break;
    case 24: colorCol0 = "#b0c4de";//light blue
    colorName0 = "SteelBlue";
    break;
    case 19: colorCol0 = "#3cb371";//green white
    colorName0 = "SeaGreen";
    break;
    case 10: colorCol0 = "#ffe4b5";//light blue
    colorName0 = "Moccasin";
    break;
  }
  return[colorCol0,colorName0,colorText0];
}

function changeRedArmy2(n){
  //alert("find army #"+n);
  //for(var i=0; i<noOfPieces; i++){
  for(var i=0; i<noOfImages; i++){
    //d1.insertAdjacentHTML('afterend', '<img class=piece src="" title="" onmouseover="doThis(this)" onmouseout="doThis2(this)" onclick="change(this)">');
    var element = document.getElementById("piece#"+i);
    element.remove();
  }

    imageArray = [];
    imageArray = document.getElementsByClassName("piece");

    noOfImages = imageArray.length;
    //alert("images="+noOfImages);

changeRedFlag = true;
changeBlackFlag = false;
redArmyNo=n;
findArmies();
sortArmies();
placePics2();
changeRedFlag = false;
document.getElementById('armyNameR').innerText="Red Army #"+redArmyNo+"\n"+nameA;
}

function changeRedArmy(){

    //for(var i=0; i<noOfPieces; i++){
    for(var i=0; i<noOfImages; i++){
      //d1.insertAdjacentHTML('afterend', '<img class=piece src="" title="" onmouseover="doThis(this)" onmouseout="doThis2(this)" onclick="change(this)">');
      var element = document.getElementById("piece#"+i);
      element.remove();
    }

      imageArray = [];
      imageArray = document.getElementsByClassName("piece");

      noOfImages = imageArray.length;
      //alert("images="+noOfImages);

  changeRedFlag = true;
  changeBlackFlag = false;
  redArmyNo++;
  if(redArmyNo>redArmyMax){redArmyNo=0;}
  findArmies();
  sortArmies();
  placePics2();
  changeRedFlag = false;
  document.getElementById('armyNameR').innerText="Red Army #"+redArmyNo+"\n"+nameA;
}

function changeBlackArmy2(n){
  //alert("find army #"+n);
  //for(var i=0; i<noOfPieces; i++){
  if(n==0){n=1;}
  else if(n==1){n=0;}
  else{}
  for(var i=0; i<noOfImages; i++){
    //d1.insertAdjacentHTML('afterend', '<img class=piece src="" title="" onmouseover="doThis(this)" onmouseout="doThis2(this)" onclick="change(this)">');
    var element = document.getElementById("piece#"+i);
    element.remove();
  }

    imageArray = [];
    imageArray = document.getElementsByClassName("piece");

    noOfImages = imageArray.length;
    //alert("images="+noOfImages);

changeRedFlag = false;
changeBlackFlag = true;
blackArmyNo=n;
findArmies();
sortArmies();
placePics2();
changeRedFlag = false;
document.getElementById('armyNameB').innerText="Black Army #"+blackArmyNo+"\n"+nameB;
}

function changeBlackArmy(){

    for(var i=0; i<noOfPieces; i++){
      //d1.insertAdjacentHTML('afterend', '<img class=piece src="" title="" onmouseover="doThis(this)" onmouseout="doThis2(this)" onclick="change(this)">');
      const element = document.getElementById("piece#"+i);
      element.remove();
    }

  changeRedFlag = false;
  changeBlackFlag = true;
  blackArmyNo++;
  if(blackArmyNo>blackArmyMax){blackArmyNo=0;}
  findArmies();
  sortArmies();
  placePics2();
  changeBlackFlag = false;
  document.getElementById('armyNameB').innerText="Black Army #"+blackArmyNo+"\n"+nameB;
}


//neutral units
/*
"x","A REPLC","1","0","x", "<--A x1", "REPL", "", "",
"x","A REPLC x10","1","0","x", "<--A x10", "REPL", "", "",
"x","B REPLC","1","0","x", "<--B x1", "REPL", "", "",
"x","B REPLC x10","1","0","x", "<--B x10", "REPL", "", "",
"#aaaaaa/#000000/#ffffff/#000000", "GAME TURN","0","1","x", "GAME", "TURN", "", ""
*/

function sortArmies(){
//THESE ARE ALL DUMMY VALUES - TRUE VALUES WILL BE CALCULATED BELOW...
var totalPieces =18;
var rusPieces =7;
var gerPieces =6;
var neutPieces = 5;

noOfPieces= 0; //no of pieces in game
unitTotal= 0; //number of types of pieces
lastIndex= 0; //index number of last piece - north marker
gerNumber= 0;
rusUnits=0;//rusUnits+1; //the index number of the first german piece
gerUnits=0;
neutUnits=0;
neutNumber=0;
//...calculated here...
noOfItems=11;
var baseAlen = Abase.length;
var baseB1 = Bbase.slice(0,-1);
var loopLen = unitsA.length/noOfItems;

for(i=0;i<loopLen;i++){
  //alert("i="+i+"noOfItems="+noOfItems+"i*noOfItems="+(i*noOfItems)+"unitsA[i*noOfItems]="+unitsA[i*noOfItems])

  if(sideA[i]==0){//if side A
    rusUnits = 1*rusUnits + 1*unitsA[(i*noOfItems)+3];
  }
  else if(sideA[i]==1){//if side B
  gerUnits = 1*gerUnits + 1*unitsA[(i*noOfItems)+3];
  }
  else{
    neutUnits = 1*neutUnits + 1*unitsA[(i*noOfItems)+3];
  }
/*
  var dumBaseA = unitsA[i*noOfItems].split("/");
  var dumBase0 = dumBaseA[0];
  //if(i<2){alert("7:"+"dumBaseA="+dumBaseA+"  , dumBase0="+dumBase0)}
  if(dumBase0==Abase[0]||dumBase0==Abase[1]||dumBase0==Abase[2]){//if not jap or not neutral
    rusUnits = 1*rusUnits + 1*unitsA[(i*noOfItems)+3];
  }
  else if(dumBase0==Bbase[0]||dumBase0==Bbase[1]||dumBase0==Bbase[2]){//if neutral
  gerUnits = 1*gerUnits + 1*unitsA[(i*noOfItems)+3];
  }
  else{
    neutUnits = 1*neutUnits + 1*unitsA[(i*noOfItems)+3];
  }*/
}

noOfPieces= rusUnits+gerUnits+neutUnits; //no of pieces in game
  //console.log("noOfPieces "+  noOfPieces + " " + rusUnits);
unitTotal= loopLen; //number of types of pieces
lastIndex= rusUnits+gerUnits+neutUnits; //index number of last piece - north marker
gerNumber= rusUnits;//rusUnits+1; //the index number of the first german piece
neutNumber= rusUnits+gerUnits;//+1;//rusUnits+gerUnits+1; //index number of first neutral piece

//console.log("5:"+"noOfPieces="+noOfPieces+"unitTotal="+unitTotal+"lastIndex="+lastIndex+"gerNumber="+gerNumber+"rusUnits="+rusUnits+"neutNumber="+neutNumber)
//alert("5:"+"noOfPieces="+noOfPieces+"unitTotal="+unitTotal+"lastIndex="+lastIndex+"gerNumber="+gerNumber+"rusUnits="+rusUnits+"neutNumber="+neutNumber)

//alert("5:"+"noOfPieces="+noOfPieces+"unitTotal="+unitTotal+"lastIndex="+lastIndex+"gerUnits="+gerUnits+"rusUnits="+rusUnits+"neutUnits="+neutUnits)

}
