


/*
//export function shiftColor(base, change, direction) {//direction = 'add' or 'sub'
function flipColor(base) {//'base' = color to find complement
  console.log("call flipColor");
  const colorRegEx = /^\#?[A-Fa-f0-9]{6}$/;

  //var change = "#ffffff";
  //var direction = 'add';
  // Missing parameter(s)
  if (!base) {
    return '000000';
  }

  // Invalid parameter(s)
  if (!base.match(colorRegEx)) {
    return '000000';
  }

  // Remove any '#'s
  base = base.replace(/\#/g, '');

  // Build new color
  let newColor = '';
  for (let i = 0; i < 3; i++) {
    const basePiece = parseInt(base.substring(i * 2, i * 2 + 2), 16);
    //const changePiece = parseInt(change.substring(i * 2, i * 2 + 2), 16);
    let newPiece = '';

    newPiece = 255-basePiece;

    newPiece = newPiece.toString(16);
    newPiece = newPiece.length < 2 ? '0' + newPiece : newPiece;
    newColor += newPiece;
  }
  newColor = "#"+newColor;
  console.log(" newColor="+newColor);
  return newColor;
}
*/

function chooseColors(n){

  var noColors = n;

  var bigCol1 = 56;
  var bigCol2 = 200;
  if(Math.random()<0.5){bigCol1 = 128;bigCol2 = 128;}
  var smCol2 = -10;
  var smCol1 = 66;
  if(Math.random()<0.5){smCol1 = 110;}

  if(noColors==2){
    if(Math.random()<0.25){
      var rndR = Math.floor(Math.random()*66)+190;
      var rndG = Math.floor(Math.random()*66)+190;
      var rndB = Math.floor(Math.random()*66)+190;}
    else if(Math.random()<0.3333){
      var rndR = Math.floor(Math.random()*56)+200;
      var rndG = Math.floor(Math.random()*128)+0;
      var rndB = Math.floor(Math.random()*128)+0;}
    else if(Math.random()<0.5){
      var rndR = Math.floor(Math.random()*128)+0;
      var rndG = Math.floor(Math.random()*56)+200;
      var rndB = Math.floor(Math.random()*128)+0;}
    else{
      var rndR = Math.floor(Math.random()*128)+0;
      var rndG = Math.floor(Math.random()*128)+0;
      var rndB = Math.floor(Math.random()*56)+200;}
    var rndRH = rndR.toString(16);
    var rndGH = rndG.toString(16);
    var rndBH = rndB.toString(16);
    if(rndRH.length<2){
      rndRH = "0"+rndRH;}
    if(rndGH.length<2){
      rndGH = "0"+rndGH;}
    if(rndBH.length<2){
      rndBH = "0"+rndBH;}
    unitColor = "#"+rndRH+rndGH+rndBH;
  //shouldn't need the following routines, but just in case...
  if(unitColor.length<6){
      var oldCol = unitColor;
      var colDigit1 = Math.floor(Math.random()*10);
      var colDigit2 = Math.floor(Math.random()*10);
      unitColor=""+unitColor+colDigit1+colDigit2;
    }
  else if(unitColor.length<7){
      var oldCol = unitColor;
      var colDigit = Math.floor(Math.random()*10);
      unitColor=""+unitColor+colDigit;
    }
  else{}
      allColors[0] = unitColor;
      var dumFCol = flipColor(unitColor);
      allColors[1] =  "#"+dumFCol;
      //console.log(" allColors[0]="+allColors[0]+" allColors[1]="+allColors[1]);
  }
  else if(noColors==3){
  for(c=0;c<3;c++){
    if(c==0){//red
      var rndR = Math.floor(Math.random()*bigCol1)+bigCol2;//*bigCol1)+bigCol2;
      var rndG = Math.floor(Math.random()*smCol1)+smCol2;//*smCol1)+smCol2;
      if(rndG<0){rndG=0;}
      var rndB = Math.floor(Math.random()*smCol1)+smCol2;
      if(rndB<0){rndB=0;}
      }
    else if(c==1){//green
      var rndR = Math.floor(Math.random()*smCol1)+smCol2;
      if(rndR<0){rndR=0;}
      var rndG = Math.floor(Math.random()*bigCol1)+bigCol2;
      var rndB = Math.floor(Math.random()*smCol1)+smCol2;
      if(rndB<0){rndB=0;}
    }
  else{//blue
      var rndR = Math.floor(Math.random()*smCol1)+smCol2;
      if(rndR<0){rndR=0;}
      var rndG = Math.floor(Math.random()*smCol1)+smCol2;
      if(rndG<0){rndG=0;}
      var rndB = Math.floor(Math.random()*bigCol1)+bigCol2;
  }

    var rndRH = rndR.toString(16);
    var rndGH = rndG.toString(16);
    var rndBH = rndB.toString(16);
    if(rndRH.length<2){
      rndRH = "0"+rndRH;}
    if(rndGH.length<2){
      rndGH = "0"+rndGH;}
    if(rndBH.length<2){
      rndBH = "0"+rndBH;}
    unitColor = "#"+rndRH+rndGH+rndBH;

  if(unitColor.length<6){
      var oldCol = unitColor;
      var colDigit1 = Math.floor(Math.random()*10);
      var colDigit2 = Math.floor(Math.random()*10);
      unitColor=""+unitColor+colDigit1+colDigit2;
    }
  else if(unitColor.length<7){
      var oldCol = unitColor;
      var colDigit = Math.floor(Math.random()*10);
      unitColor=""+unitColor+colDigit;
    }
  else{}
      allColors[c] = unitColor;
      //console.log(" allColors[0]="+allColors[0]+" allColors[1]="+allColors[1]);
  }
  }

    else if(noColors==4){
    for(c=0;c<5;c++){
      if(c==0){//red
        var rndR = Math.floor(Math.random()*bigCol1)+bigCol2;//*bigCol1)+bigCol2;
        var rndG = Math.floor(Math.random()*smCol1)+smCol2;//*smCol1)+smCol2;
        if(rndG<0){rndG=0;}
        var rndB = Math.floor(Math.random()*smCol1)+smCol2;
        if(rndB<0){rndB=0;}
        }
      else if(c==1){//green
        var rndR = Math.floor(Math.random()*smCol1)+smCol2;
        if(rndR<0){rndR=0;}
        var rndG = Math.floor(Math.random()*bigCol1)+bigCol2;
        var rndB = Math.floor(Math.random()*smCol1)+smCol2;
        if(rndB<0){rndB=0;}
      }
    else if(c==2){//blue
        var rndR = Math.floor(Math.random()*smCol1)+smCol2;
        if(rndR<0){rndR=0;}
        var rndG = Math.floor(Math.random()*smCol1)+smCol2;
        if(rndG<0){rndG=0;}
        var rndB = Math.floor(Math.random()*bigCol1)+bigCol2;
    }
  else if(c==3){//yellow
      var rndR = Math.floor(Math.random()*bigCol1)+bigCol2;//*bigCol1)+bigCol2;
      var rndG = Math.floor(Math.random()*bigCol1)+bigCol2;
      var rndB = Math.floor(Math.random()*smCol1)+smCol2;
      if(rndB<0){rndB=0;}
  }
      var rndRH = rndR.toString(16);
      var rndGH = rndG.toString(16);
      var rndBH = rndB.toString(16);
      if(rndRH.length<2){
        rndRH = "0"+rndRH;}
      if(rndGH.length<2){
        rndGH = "0"+rndGH;}
      if(rndBH.length<2){
        rndBH = "0"+rndBH;}
      unitColor = "#"+rndRH+rndGH+rndBH;

    if(unitColor.length<6){
        var oldCol = unitColor;
        var colDigit1 = Math.floor(Math.random()*10);
        var colDigit2 = Math.floor(Math.random()*10);
        unitColor=""+unitColor+colDigit1+colDigit2;
      }
    else if(unitColor.length<7){
        var oldCol = unitColor;
        var colDigit = Math.floor(Math.random()*10);
        unitColor=""+unitColor+colDigit;
      }
    else{}
        allColors[c] = unitColor;
        //console.log(" allColors[0]="+allColors[0]+" allColors[1]="+allColors[1]);
    }
    }


  else if(noColors==5){
  for(c=0;c<5;c++){
    if(c==0){//red
      var rndR = Math.floor(Math.random()*bigCol1)+bigCol2;//*bigCol1)+bigCol2;
      var rndG = Math.floor(Math.random()*smCol1)+smCol2;//*smCol1)+smCol2;
      if(rndG<0){rndG=0;}
      var rndB = Math.floor(Math.random()*smCol1)+smCol2;
      if(rndB<0){rndB=0;}
      }
    else if(c==1){//green
      var rndR = Math.floor(Math.random()*smCol1)+smCol2;
      if(rndR<0){rndR=0;}
      var rndG = Math.floor(Math.random()*bigCol1)+bigCol2;
      var rndB = Math.floor(Math.random()*smCol1)+smCol2;
      if(rndB<0){rndB=0;}
    }
  else if(c==2){//blue
      var rndR = Math.floor(Math.random()*smCol1)+smCol2;
      if(rndR<0){rndR=0;}
      var rndG = Math.floor(Math.random()*smCol1)+smCol2;
      if(rndG<0){rndG=0;}
      var rndB = Math.floor(Math.random()*bigCol1)+bigCol2;
  }
else if(c==3){//yellow
    var rndR = Math.floor(Math.random()*bigCol1)+bigCol2;//*bigCol1)+bigCol2;
    var rndG = Math.floor(Math.random()*bigCol1)+bigCol2;
    var rndB = Math.floor(Math.random()*smCol1)+smCol2;
    if(rndB<0){rndB=0;}
}
else{//violet
  var rndR = Math.floor(Math.random()*bigCol1)+bigCol2;//*bigCol1)+bigCol2;
  var rndG = Math.floor(Math.random()*smCol1)+smCol2;
  if(rndG<0){rndG=0;}
  var rndB = Math.floor(Math.random()*bigCol1)+bigCol2;
}

    var rndRH = rndR.toString(16);
    var rndGH = rndG.toString(16);
    var rndBH = rndB.toString(16);
    if(rndRH.length<2){
      rndRH = "0"+rndRH;}
    if(rndGH.length<2){
      rndGH = "0"+rndGH;}
    if(rndBH.length<2){
      rndBH = "0"+rndBH;}
    unitColor = "#"+rndRH+rndGH+rndBH;

  if(unitColor.length<6){
      var oldCol = unitColor;
      var colDigit1 = Math.floor(Math.random()*10);
      var colDigit2 = Math.floor(Math.random()*10);
      unitColor=""+unitColor+colDigit1+colDigit2;
    }
  else if(unitColor.length<7){
      var oldCol = unitColor;
      var colDigit = Math.floor(Math.random()*10);
      unitColor=""+unitColor+colDigit;
    }
  else{}
      allColors[c] = unitColor;
      //console.log(" allColors[0]="+allColors[0]+" allColors[1]="+allColors[1]);
  }
  }

  console.log(" allColors="+allColors);


}
