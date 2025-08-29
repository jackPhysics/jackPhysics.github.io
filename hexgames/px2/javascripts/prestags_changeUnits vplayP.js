
function stepOrPoints(){
  if(stepFlag){stepFlag=false;
  document.getElementById('btn21').innerText="now: lose FACTORS";}
  else{stepFlag=true;
  document.getElementById('btn21').innerText="now: lose STEPS";}
}


function dropStep(id){
  var noToDrop = id;
  if(hasSteps[noToDrop]){
  cmbtFactorsA[noToDrop]=Math.ceil(cmbtFactorsA[noToDrop]/2);
  cmbtFactorsA[noToDrop]="*"+cmbtFactorsA[noToDrop];
  hasSteps[noToDrop]=false;
  imageArray[noToDrop].setAttribute("title", "#"+(noToDrop+1)+": "+unitsA[thisIsA[noToDrop]*noOfItems+1]+" "+designateLA[noToDrop]+"/"+designateRA[noToDrop]+" "+cmbtFactorsA[noToDrop]+"-"+unitsA[thisIsA[noToDrop]*noOfItems+7]+" (pts:"+unitsA[thisIsA[noToDrop]*noOfItems+2]+") ("+(typeNumbA[noToDrop])+"/"+typeTotalA[noToDrop]+")");
  //imageArray[noToDrop].setAttribute("title", "#"+(noToDrop+1)+": "+cmbtFactorsA[noToDrop]+"-"+unitsA[thisIsA[noToDrop]*noOfItems+7]+" "+unitsA[thisIsA[noToDrop]*noOfItems+3]+"pts ("+(typeNumbA[noToDrop])+"/"+typeTotalA[noToDrop]+")");
  document.getElementById('hopText').innerText=""+activeImage.getAttribute("title");
  printUnit(noToDrop, typeNumbA[noToDrop], typeTotalA[noToDrop], thisIsA[noToDrop],countIndividual[noToDrop]);
  }
  else if(armourA[noToDrop]=="x"){
  }
}


function upStep(id){
  var noToDrop = id;
    if(cmbtFactorsA[noToDrop]<cmbtFactorsMaxA[noToDrop]){
    cmbtFactorsA[noToDrop]=cmbtFactorsMaxA[noToDrop];
    hasSteps[noToDrop]=true;
    imageArray[noToDrop].setAttribute("title", "#"+(noToDrop+1)+": "+unitsA[thisIsA[noToDrop]*noOfItems+1]+" "+designateLA[noToDrop]+"/"+designateRA[noToDrop]+" "+cmbtFactorsA[noToDrop]+"-"+unitsA[thisIsA[noToDrop]*noOfItems+7]+" (pts:"+unitsA[thisIsA[noToDrop]*noOfItems+2]+") ("+(typeNumbA[noToDrop])+"/"+typeTotalA[noToDrop]+")");
    //imageArray[noToDrop].setAttribute("title", "#"+(noToDrop+1)+": "+cmbtFactorsA[noToDrop]+"-"+unitsA[thisIsA[noToDrop]*noOfItems+7]+" "+unitsA[thisIsA[noToDrop]*noOfItems+3]+"pts ("+(typeNumbA[noToDrop])+"/"+typeTotalA[noToDrop]+")");
    document.getElementById('hopText').innerText=""+activeImage.getAttribute("title");
    printUnit(noToDrop, typeNumbA[noToDrop], typeTotalA[noToDrop], thisIsA[noToDrop],countIndividual[noToDrop]);
    }
  }

function dropPoints(id){
  var noToDrop = id;
  cmbtFactorsA[noToDrop]--;
  if(cmbtFactorsA[noToDrop]<1&&armourA[noToDrop]!="a"){cmbtFactorsA[noToDrop]=1;}
  else if(cmbtFactorsA[noToDrop]<0){cmbtFactorsA[noToDrop]=0;}
  imageArray[noToDrop].setAttribute("title", "#"+(noToDrop+1)+": "+unitsA[thisIsA[noToDrop]*noOfItems+1]+" "+designateLA[noToDrop]+"/"+designateRA[noToDrop]+" "+cmbtFactorsA[noToDrop]+"-"+unitsA[thisIsA[noToDrop]*noOfItems+7]+" (pts:"+unitsA[thisIsA[noToDrop]*noOfItems+2]+") ("+(typeNumbA[noToDrop])+"/"+typeTotalA[noToDrop]+")");
  //imageArray[noToDrop].setAttribute("title", "#"+(noToDrop+1)+": "+cmbtFactorsA[noToDrop]+"-"+unitsA[thisIsA[noToDrop]*noOfItems+7]+" "+unitsA[thisIsA[noToDrop]*noOfItems+3]+"pts ("+(typeNumbA[noToDrop])+"/"+typeTotalA[noToDrop]+")");
  document.getElementById('hopText').innerText=""+activeImage.getAttribute("title");
  printUnit(noToDrop, typeNumbA[noToDrop], typeTotalA[noToDrop], thisIsA[noToDrop],countIndividual[noToDrop]);

}

function upPoints(id){
  var noToDrop = id;
  cmbtFactorsA[noToDrop]++;
  if(cmbtFactorsA[noToDrop]>cmbtFactorsMaxA[noToDrop]&&armourA[noToDrop]!="a"){cmbtFactorsA[noToDrop]=cmbtFactorsMaxA[noToDrop];}
  imageArray[noToDrop].setAttribute("title", "#"+(noToDrop+1)+": "+unitsA[thisIsA[noToDrop]*noOfItems+1]+" "+designateLA[noToDrop]+"/"+designateRA[noToDrop]+" "+cmbtFactorsA[noToDrop]+"-"+unitsA[thisIsA[noToDrop]*noOfItems+7]+" (pts:"+unitsA[thisIsA[noToDrop]*noOfItems+2]+") ("+(typeNumbA[noToDrop])+"/"+typeTotalA[noToDrop]+")");
  //imageArray[noToDrop].setAttribute("title", "#"+(noToDrop+1)+": "+cmbtFactorsA[noToDrop]+"-"+unitsA[thisIsA[noToDrop]*noOfItems+7]+" "+unitsA[thisIsA[noToDrop]*noOfItems+3]+"pts ("+(typeNumbA[noToDrop])+"/"+typeTotalA[noToDrop]+")");
  document.getElementById('hopText').innerText=""+activeImage.getAttribute("title");
  printUnit(noToDrop, typeNumbA[noToDrop], typeTotalA[noToDrop], thisIsA[noToDrop],countIndividual[noToDrop]);

}

function findName(p, i){
  var activePiece = p;
  var pieceIndex = i;
  //activeImage = activePiece;
  //pieceIndex = pieceIndex;

  var pieceName = activePiece.getAttribute("title");// activeImage.getAttribute("title");
  //var pieceName = imageArray[pieceIndex].getAttribute("title");// activeImage.getAttribute("title");

  var pieceName2 = unitsA[thisIsA[pieceIndex]*5+1].slice(0,2);//*
   												                             //^-use this code to investigate original name
  if(pieceIndex<10){
     var pieceName1 = pieceName.slice(4,6);
  }
  else if(pieceIndex<100){
     var pieceName1 = pieceName.slice(5,7);
  }
  else{
     var pieceName1 = pieceName.slice(6,8);
  }
  return pieceName1;
}

function findNameSrc(p, i){
  var activePiece = p;
  var pieceIndex = i;
  //activeImage = activePiece;
  //pieceIndex = pieceIndex;

  var pieceName = activePiece.getAttribute("title");// activeImage.getAttribute("title");
  //var pieceName = imageArray[pieceIndex].getAttribute("title");// activeImage.getAttribute("title");

  var pieceSrc = activePiece.getAttribute("src");
  pieceSrc = pieceSrc.slice(-7, -4);

  var pieceName2 = unitsA[thisIsA[pieceIndex]*5+1].slice(0,2);//*
   												                             //^-use this code to investigate original name
  if(pieceIndex<10){
     var pieceName1 = pieceName.slice(4,6);
  }
  else if(pieceIndex<100){
     var pieceName1 = pieceName.slice(5,7);
  }
  else{
     var pieceName1 = pieceName.slice(6,8);
  }
  pieceName1 = pieceName1+" "+pieceSrc;

  return pieceName1;
}

function findTryValue(m){
  var maxValue = m;
  var chanceNumber = Math.pow(maxValue,0.5);
  chanceNumber = 0.4+chanceNumber/10;
  //console.log(chanceNumber);
  if(maxValue<4){
  var actualValue = 0;
  if(maxValue>2){actualValue = 1;}
  var jumpOut = false;
  while(!jumpOut){
    if(Math.random()<chanceNumber){actualValue++;}
    else{jumpOut=true;}
  }
  if(actualValue>1*maxValue+1){
    actualValue=1*maxValue+1;
  }}
  else{
    actualValue = Math.floor(Math.random()*maxValue)+1;
  }
/*
  if(Math.random()<0.2){
    actualValue = 1*maxValue+1;
  }
  else if(maxValue>2){
    actualValue = Math.floor(Math.random()*maxValue)+1;
  }
  else{//if(maxValue<=2)
    actualValue = Math.round(Math.random()*maxValue);
  }
  */
  return actualValue;
}

function untriedTry(n){
	var tryUnitIndex=n;
  var dummyValue = 0;
    //console.log(" untriedPrint="+untriedPrint[tryUnitIndex]);
  if(untriedPrint[tryUnitIndex]=="?"){//untried, give it a value
    dummyValue = findTryValue(untriedMax[tryUnitIndex]);
    untriedPrint[tryUnitIndex] = dummyValue;
      //console.log(" dummyValue="+dummyValue+" untriedMax[tryUnitIndex]="+untriedMax[tryUnitIndex]);
  }
  else{
  untriedPrint[tryUnitIndex] = "?";
  }
  cmbtFactorsA[tryUnitIndex]=untriedPrint[tryUnitIndex];
	printUnit(tryUnitIndex, typeNumbA[tryUnitIndex], typeTotalA[tryUnitIndex], thisIsA[tryUnitIndex],countIndividual[tryUnitIndex]);
  imageArray[tryUnitIndex].setAttribute("title", "#"+(tryUnitIndex+1)+": "+unitsA[thisIsA[tryUnitIndex]*noOfItems+10]+" "+cmbtFactorsA[tryUnitIndex]+"-"+unitsA[thisIsA[tryUnitIndex]*noOfItems+7]+" fire:"+unitsA[thisIsA[tryUnitIndex]*noOfItems+8]+"/"+unitsA[thisIsA[tryUnitIndex]*noOfItems+9]+" (pts:"+unitsA[thisIsA[tryUnitIndex]*noOfItems+2]+") ("+(typeNumbA[tryUnitIndex])+"/"+typeTotalA[tryUnitIndex]+")");
  mouseActive=0;
  doEdgeColor();
}

function changeUnitType(p, i, pd){//(p, i, f){  i=index pr=printdata array
  var activePiece = p;
  var pieceIndex = i;
  //var flagChange = f;
  var printDataDum = pd;
  var changeMade = false;
  var pieceName0 = unitsA[thisIsA[pieceIndex]*noOfItems+10];//get the type name eg "SK"
  if(pieceName0=="LB"){
    if(changeUnitA[pieceIndex]==1){//the function is only called if changeUnitA>0, so is >0
      //now detail the changes - change to "AX"
      printDataDum[1] = ["B"];
      printDataDum[4] = ["n"];
      printDataDum[5] = ["ax"];
      printDataDum[6] = ["3"];
      printDataDum[7] = ["4"];
      printDataDum[8] = [""];
      printDataDum[9] = [""];
      printDataDum[10] = ["AX(LB)"];
      firerA[pieceIndex]=0;
      changeMade = true;}
      else{firerA[pieceIndex]=1;changeUnitA[pieceIndex]=0}
  }
  else if(pieceName0=="MI"){
    if(changeUnitA[pieceIndex]==1){//the function is only called if changeUnitA>0, so is >0
      //now detail the changes - change to "SK"
      printDataDum[1] = ["Ff"];
      printDataDum[4] = ["f"];
      printDataDum[5] = ["sk"];
      printDataDum[6] = ["o"];
      printDataDum[7] = ["5"];
      printDataDum[8] = ["2"];
      printDataDum[9] = ["1"];
      printDataDum[10] = ["SK/MI"];
      firerA[pieceIndex]=1;
      changeMade = true;}
      else{firerA[pieceIndex]=0;changeUnitA[pieceIndex]=0}
  }
  else if(pieceName0=="MC"){
    if(changeUnitA[pieceIndex]==1){//the function is only called if changeUnitA>0, so is >0
      //now detail the changes - change to "SD"
      printDataDum[1] = ["B"];
      printDataDum[4] = ["n"];
      printDataDum[5] = ["sd"];
      printDataDum[6] = ["4"];
      printDataDum[7] = ["4"];
      printDataDum[8] = [""];
      printDataDum[9] = [""];
      printDataDum[10] = ["SD/MC"];
      firerA[pieceIndex]=0;
      changeMade = true;}
      else{firerA[pieceIndex]=0;changeUnitA[pieceIndex]=0}
  }
  else if(pieceName0=="HC"){
    if(changeUnitA[pieceIndex]==1){//the function is only called if changeUnitA>0, so is >0
      //now detail the changes - change to "PS"
      printDataDum[1] = ["A"];
      printDataDum[4] = ["n"];
      printDataDum[5] = ["hspear"];
      printDataDum[6] = ["4"];
      printDataDum[7] = ["3"];
      printDataDum[8] = [""];
      printDataDum[9] = [""];
      printDataDum[10] = ["PS/HC"];
      firerA[pieceIndex]=0;
      changeMade = true;}
      else{firerA[pieceIndex]=0;changeUnitA[pieceIndex]=0}
  }
  else if(pieceName0=="US"){
    if(changeUnitA[pieceIndex]==1){//the function is only called if changeUnitA>0, so is >0
      //now detail the changes - change to "PS"
      printDataDum[1] = ["Ff"];
      printDataDum[4] = ["f"];
      printDataDum[5] = ["inf"];
      printDataDum[6] = ["3"];
      printDataDum[7] = ["2"];
      printDataDum[8] = ["5"];
      printDataDum[9] = ["5"];
      printDataDum[10] = ["DM/US"];
      firerA[pieceIndex]=1;
      changeMade = true;}
      else{firerA[pieceIndex]=1;changeUnitA[pieceIndex]=0}
  }
  else if(pieceName0=="7th"){
    if(changeUnitA[pieceIndex]==1){//the function is only called if changeUnitA>0, so is >0
      //now detail the changes - change to "PS"
      printDataDum[1] = ["Ff"];
      printDataDum[4] = ["f"];
      printDataDum[5] = ["inf"];
      printDataDum[6] = ["3"];//CF
      printDataDum[7] = ["2"];//MF
      printDataDum[8] = ["6"];//fire attack
      printDataDum[9] = ["12"];//fire range
      printDataDum[10] = ["(7th)"];
      firerA[pieceIndex]=1;
      changeMade = true;}
      else{firerA[pieceIndex]=1;changeUnitA[pieceIndex]=0}
  }
  else if(pieceName0=="DR"){
    if(changeUnitA[pieceIndex]==1){//the function is only called if changeUnitA>0, so is >0
      //now detail the changes - change to "PS"
      printDataDum[1] = ["Ff"];
      printDataDum[4] = ["f"];
      printDataDum[5] = ["inf"];
      printDataDum[6] = ["o"];//CF
      printDataDum[7] = ["3"];//MF
      printDataDum[8] = ["3"];//fire attack
      printDataDum[9] = ["4"];//fire range
      printDataDum[10] = ["MM/DR"];
      firerA[pieceIndex]=1;
      changeMade = true;}
      else{firerA[pieceIndex]=1;changeUnitA[pieceIndex]=0}
  }
  else if(pieceName0=="GN"){
    if(changeUnitA[pieceIndex]==1){//the function is only called if changeUnitA>0, so is >0
      //now detail the changes - change to "PS"
      //printDataDum[1] = ["D"];
      printDataDum[4] = ["n"];
      printDataDum[5] = ["ch1"];
      printDataDum[6] = ["o"];//CF
      printDataDum[7] = ["7"];//MF
      printDataDum[8] = ["."];//fire attack
      printDataDum[9] = ["."];//fire range
      printDataDum[10] = ["TR/GN"];
      firerA[pieceIndex]=0;
      changeMade = true;}
      else{firerA[pieceIndex]=1;changeUnitA[pieceIndex]=0}
  }
  if(changeMade){
  imageArray[pieceIndex].setAttribute("title", "#"+(pieceIndex+1)+": "+printDataDum[10]+" "+printDataDum[6]+"-"+printDataDum[7]+" fire:"+printDataDum[8]+"/"+printDataDum[9]+" (pts:"+printDataDum[2]+")("+(typeNumbA[pieceIndex])+"/"+typeTotalA[pieceIndex]+")");
  document.getElementById('hopText').innerText=""+activePiece.getAttribute("title");
  }
  doEdgeColor();
  return printDataDum;
}

function changeUnitParse(i){
var pieceIndex = i;
  if(unitsA[thisIsA[pieceIndex]*noOfItems+10]=="MI"||unitsA[thisIsA[pieceIndex]*noOfItems+10]=="LB"
  ||unitsA[thisIsA[pieceIndex]*noOfItems+10]=="MC"||unitsA[thisIsA[pieceIndex]*noOfItems+10]=="HC"
  ||unitsA[thisIsA[pieceIndex]*noOfItems+10]=="US"||unitsA[thisIsA[pieceIndex]*noOfItems+10]=="7th"
  ||unitsA[thisIsA[pieceIndex]*noOfItems+10]=="DR"||unitsA[thisIsA[pieceIndex]*noOfItems+10]=="GN"){
    changeUnitA[pieceIndex]++;
    //console.log("changeUnitA[pieceIndex]="+changeUnitA[pieceIndex]);
    //if(changeUnitA[activeIndex]>2){changeUnitA[activeIndex]=0;}
    printUnit(pieceIndex, typeNumbA[pieceIndex], typeTotalA[pieceIndex], thisIsA[pieceIndex],countIndividual[pieceIndex]);
    doEdgeColor();
    //console.log("changeUnitA[activeIndex]="+changeUnitA[activeIndex]);
  }
}

function changeUnit(p, i, f){
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;
  //activeImage = activePiece;
  //activeIndex = pieceIndex;

  //var pieceName1 = findName(activePiece, pieceIndex);
  var pieceName1 = pieceNameA[pieceIndex];//original name of type

  var pieceName2 = unitsA[thisIsA[pieceIndex]*5+1].slice(0,2);//new name of type
   												                             //^-use this code to investigate original name
  //alert("pieceName1="+pieceName1+"pieceName2="+pieceName2);
	/*var pieceName = activeImage.getAttribute("title");//

  var pieceName2 = unitsA[thisIsA[pieceIndex]*5+1].slice(0,2);//*
 												                             //^-use this code to investigate original name
 	if(pieceIndex<10){
   var pieceName1 = pieceName.slice(4,6);
   }
 	else if(pieceIndex<100){
   var pieceName1 = pieceName.slice(5,7);
   }
 	else{
   var pieceName1 = pieceName.slice(6,8);
 }*/


   //alert("this is a "+pieceName1+" or a "+pieceName2);

   if(pieceName1=="BC"){//cataphracts dismount as skirmishers
        pieceNameA[pieceIndex]="SK";
         activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
         + "SK(BC) af:2 mf:5 fire:2/1 vp:3"
         +" ("+typeNumbA[pieceIndex]+"/"
         +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
         if(pieceIndex<gerNumber){var base=Abase;}
         else{var base=Bbase;}
         activePiece.setAttribute("src", "units/"+base+"s1.jpg");
         armourA[pieceIndex]="f";
         firerA[pieceIndex]=1;
         dismountA[pieceIndex]=1;
    }
    else if(pieceName1=="SK"&&pieceName2=="BC"){//cataphracts dismount as swordmen
         pieceNameA[pieceIndex]="SD";
          activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
          + "SD(BC) af:4 mf:4 vp:3"
          +" ("+typeNumbA[pieceIndex]+"/"
          +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
          if(pieceIndex<gerNumber){var base=Abase;}
          else{var base=Bbase;}
          activePiece.setAttribute("src", "units/"+base+"sd.jpg");
          armourA[pieceIndex]="n";
          firerA[pieceIndex]=0;
          dismountA[pieceIndex]=1;
     }
     else if(pieceName1=="SD"&&pieceName2=="BC"){//cataphracts remount
          pieceNameA[pieceIndex]="BC";
           activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
           + "BC af:3 mf:9 fire:1/2 vp:3"
           +" ("+typeNumbA[pieceIndex]+"/"
           +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
           if(pieceIndex<gerNumber){var base=Abase;}
           else{var base=Bbase;}
           activePiece.setAttribute("src", "units/"+base+"bc.jpg");
           armourA[pieceIndex]="f";
           firerA[pieceIndex]=1;
           dismountA[pieceIndex]=0;
      }
      else if(pieceName1=="PL"){//pilum armed
           pieceNameA[pieceIndex]="SD";
            activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
            + "SD(PL) af:4 mf:4 vp:2"
            +" ("+typeNumbA[pieceIndex]+"/"
            +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
            if(pieceIndex<gerNumber){var base=Abase;}
            else{var base=Bbase;}
            activePiece.setAttribute("src", "units/"+base+"sd.jpg");
            armourA[pieceIndex]="n";
            firerA[pieceIndex]=0;
            dismountA[pieceIndex]=1;
       }
       else if(pieceName1=="SD"&&pieceName2=="PL"){//pilums thrown
            pieceNameA[pieceIndex]="PL";
             activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
             + "PL af:4 mf:4 fire:1/1 vp:2"
             +" ("+typeNumbA[pieceIndex]+"/"
             +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
             if(pieceIndex<gerNumber){var base=Abase;}
             else{var base=Bbase;}
             activePiece.setAttribute("src", "units/"+base+"s2.jpg");
             armourA[pieceIndex]="f";
             firerA[pieceIndex]=1;
             dismountA[pieceIndex]=0;
        }
        else if(pieceName1=="FR"){//francisca
             pieceNameA[pieceIndex]="AX";
              activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
              + "AX(FR) af:3 mf:4 vp:2"
              +" ("+typeNumbA[pieceIndex]+"/"
              +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
              if(pieceIndex<gerNumber){var base=Abase;}
              else{var base=Bbase;}
              activePiece.setAttribute("src", "units/"+base+"ax.jpg");
              armourA[pieceIndex]="n";
              firerA[pieceIndex]=0;
              dismountA[pieceIndex]=1;
         }
         else if(pieceName1=="AX"&&pieceName2=="FR"){//francisca thrown
              pieceNameA[pieceIndex]="FR";
               activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
               + "FR af:3 mf:4 fire:3/1 vp:2"
               +" ("+typeNumbA[pieceIndex]+"/"
               +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
               if(pieceIndex<gerNumber){var base=Abase;}
               else{var base=Bbase;}
               activePiece.setAttribute("src", "units/"+base+"a1.jpg");
               armourA[pieceIndex]="f";
               firerA[pieceIndex]=1;
               dismountA[pieceIndex]=0;
          }
          else if(pieceName1=="LB"){//longbow
               pieceNameA[pieceIndex]="AX";
                activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
                + "AX(LB) af:3 mf:4 vp:2"
                +" ("+typeNumbA[pieceIndex]+"/"
                +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
                if(pieceIndex<gerNumber){var base=Abase;}
                else{var base=Bbase;}
                activePiece.setAttribute("src", "units/"+base+"ax.jpg");
                armourA[pieceIndex]="n";
                firerA[pieceIndex]=0;
                dismountA[pieceIndex]=1;
           }
           else if(pieceName1=="AX"&&pieceName2=="LB"){//
                pieceNameA[pieceIndex]="LB";
                 activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
                 + "LB af:(1) mf:5 fire:3/3 vp:4"
                 +" ("+typeNumbA[pieceIndex]+"/"
                 +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
                 if(pieceIndex<gerNumber){var base=Abase;}
                 else{var base=Bbase;}
                 activePiece.setAttribute("src", "units/"+base+"lb.jpg");
                 armourA[pieceIndex]="f";
                 firerA[pieceIndex]=1;
                 dismountA[pieceIndex]=0;
            }
            else if(pieceName1=="HC"){//
                 pieceNameA[pieceIndex]="PS";
                  activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
                  + "PS(HC) af:4 mf:3 vp:6"
                  +" ("+typeNumbA[pieceIndex]+"/"
                  +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
                  if(pieceIndex<gerNumber){var base=Abase;}
                  else{var base=Bbase;}
                  activePiece.setAttribute("src", "units/"+base+"ps.jpg");
                  armourA[pieceIndex]="n";
                  firerA[pieceIndex]=0;
                  dismountA[pieceIndex]=1;
             }
             else if(pieceName1=="PS"&&pieceName2=="HC"){//
                  pieceNameA[pieceIndex]="HC";
                   activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
                   + "HC af:[4] mf:7 vp:6"
                   +" ("+typeNumbA[pieceIndex]+"/"
                   +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
                   if(pieceIndex<gerNumber){var base=Abase;}
                   else{var base=Bbase;}
                   activePiece.setAttribute("src", "units/"+base+"hc.jpg");
                   armourA[pieceIndex]="c";
                   firerA[pieceIndex]=0;
                   dismountA[pieceIndex]=0;
              }
              else if(pieceName1=="MC"){//
                   pieceNameA[pieceIndex]="SD";
                    activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
                    + "SD(MC) af:4 mf:4 vp:4"
                    +" ("+typeNumbA[pieceIndex]+"/"
                    +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
                    if(pieceIndex<gerNumber){var base=Abase;}
                    else{var base=Bbase;}
                    activePiece.setAttribute("src", "units/"+base+"sd.jpg");
                    armourA[pieceIndex]="n";
                    firerA[pieceIndex]=0;
                    dismountA[pieceIndex]=1;
               }
               else if(pieceName1=="SD"&&pieceName2=="MC"){//
                    pieceNameA[pieceIndex]="MC";
                     activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
                     + "MC af:[3] mf:9 vp:4"
                     +" ("+typeNumbA[pieceIndex]+"/"
                     +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
                     if(pieceIndex<gerNumber){var base=Abase;}
                     else{var base=Bbase;}
                     activePiece.setAttribute("src", "units/"+base+"mc.jpg");
                     armourA[pieceIndex]="c";
                     firerA[pieceIndex]=0;
                     dismountA[pieceIndex]=0;
                }
                else if(pieceName1=="LC"){//
                     pieceNameA[pieceIndex]="CB";
                      activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
                      + "CB(LB) af:(1) mf:5 fire:2/3 vp:2"
                      +" ("+typeNumbA[pieceIndex]+"/"
                      +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
                      if(pieceIndex<gerNumber){var base=Abase;}
                      else{var base=Bbase;}
                      activePiece.setAttribute("src", "units/"+base+"cb.jpg");
                      armourA[pieceIndex]="f";
                      firerA[pieceIndex]=1;
                      dismountA[pieceIndex]=1;
                 }
                 else if(pieceName1=="CB"&&pieceName2=="LC"){//
                      pieceNameA[pieceIndex]="LC";
                       activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
                       + "LC af:1 mf:9 vp:2"
                       +" ("+typeNumbA[pieceIndex]+"/"
                       +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
                       if(pieceIndex<gerNumber){var base=Abase;}
                       else{var base=Bbase;}
                       activePiece.setAttribute("src", "units/"+base+"lc.jpg");
                       armourA[pieceIndex]="c";
                       firerA[pieceIndex]=0;
                       dismountA[pieceIndex]=0;
                  }
                  else if(pieceName1=="L2"){//
                       pieceNameA[pieceIndex]="L1";
                        activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
                        + "LA mf:- fire:2/5 vp:2"
                        +" ("+typeNumbA[pieceIndex]+"/"
                        +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
                        if(pieceIndex<gerNumber){var base=Abase;}
                        else{var base=Bbase;}
                        activePiece.setAttribute("src", "units/"+base+"l1.jpg");
                        armourA[pieceIndex]="f";
                        firerA[pieceIndex]=1;
                        dismountA[pieceIndex]=1;
                   }
                   else if(pieceName1=="L1"&&pieceName2=="L2"){//
                        pieceNameA[pieceIndex]="L2";
                         activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
                         + "LA mf:4 vp:2"
                         +" ("+typeNumbA[pieceIndex]+"/"
                         +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
                         if(pieceIndex<gerNumber){var base=Abase;}
                         else{var base=Bbase;}
                         activePiece.setAttribute("src", "units/"+base+"l2.jpg");
                         armourA[pieceIndex]="c";
                         firerA[pieceIndex]=0;
                         dismountA[pieceIndex]=0;
                    }
                    else if(pieceName1=="L3"){//
                         pieceNameA[pieceIndex]="L1";
                          activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
                          + "LA mf:- fire:2/5 vp:2"
                          +" ("+typeNumbA[pieceIndex]+"/"
                          +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
                          if(pieceIndex<gerNumber){var base=Abase;}
                          else{var base=Bbase;}
                          activePiece.setAttribute("src", "units/"+base+"l1.jpg");
                          armourA[pieceIndex]="f";
                          firerA[pieceIndex]=1;
                          dismountA[pieceIndex]=1;
                     }
                     else if(pieceName1=="L1"&&pieceName2=="L3"){//
                          pieceNameA[pieceIndex]="L3";
                           activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
                           + "LA mf:8 vp:2"
                           +" ("+typeNumbA[pieceIndex]+"/"
                           +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
                           if(pieceIndex<gerNumber){var base=Abase;}
                           else{var base=Bbase;}
                           activePiece.setAttribute("src", "units/"+base+"l3.jpg");
                           armourA[pieceIndex]="c";
                           firerA[pieceIndex]=0;
                           dismountA[pieceIndex]=0;
                      }
                      else if(pieceName1=="H2"){//
                           pieceNameA[pieceIndex]="H1";
                            activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
                            + "HA mf:- fire:3/7 vp:3"
                            +" ("+typeNumbA[pieceIndex]+"/"
                            +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
                            if(pieceIndex<gerNumber){var base=Abase;}
                            else{var base=Bbase;}
                            activePiece.setAttribute("src", "units/"+base+"h1.jpg");
                            armourA[pieceIndex]="f";
                            firerA[pieceIndex]=1;
                            dismountA[pieceIndex]=1;
                       }
                       else if(pieceName1=="H1"&&pieceName2=="H2"){//
                            pieceNameA[pieceIndex]="H2";
                             activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
                             + "HA mf:2 vp:3"
                             +" ("+typeNumbA[pieceIndex]+"/"
                             +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
                             if(pieceIndex<gerNumber){var base=Abase;}
                             else{var base=Bbase;}
                             activePiece.setAttribute("src", "units/"+base+"h2.jpg");
                             armourA[pieceIndex]="c";
                             firerA[pieceIndex]=0;
                             dismountA[pieceIndex]=0;
                        }
                        else if(pieceName1=="H3"){//
                             pieceNameA[pieceIndex]="H1";
                              activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
                              + "HA mf:- fire:3/7 vp:7"
                              +" ("+typeNumbA[pieceIndex]+"/"
                              +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
                              if(pieceIndex<gerNumber){var base=Abase;}
                              else{var base=Bbase;}
                              activePiece.setAttribute("src", "units/"+base+"h1.jpg");
                              armourA[pieceIndex]="f";
                              firerA[pieceIndex]=1;
                              dismountA[pieceIndex]=1;
                         }
                         else if(pieceName1=="H1"&&pieceName2=="H3"){//
                              pieceNameA[pieceIndex]="H3";
                               activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
                               + "HA mf:4 vp:3"
                               +" ("+typeNumbA[pieceIndex]+"/"
                               +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
                               if(pieceIndex<gerNumber){var base=Abase;}
                               else{var base=Bbase;}
                               activePiece.setAttribute("src", "units/"+base+"h3.jpg");
                               armourA[pieceIndex]="c";
                               firerA[pieceIndex]=0;
                               dismountA[pieceIndex]=0;
                          }
              else{}
                mouseActive=0;
              doEdgeColor();
              saveWindow2();

}

function changeUnitReload(p, i, n){
  var activePiece = p;
  var pieceIndex = i;
  var pieceName1 = n;
  //activeImage = activePiece;
  //activeIndex = pieceIndex;

  //var pieceName1 = findName(activeImage, pieceIndex);

  var pieceName2 = unitsA[thisIsA[pieceIndex]*5+1].slice(0,2);//*
  if(pieceName1.length>2){pieceName1=pieceName1.slice(1,3);}

   //alert("this is a |"+pieceName1+"| or a |"+pieceName2+"|");

   if(pieceName1=="SK"&&pieceName2=="BC"){//cataphracts dismount
        pieceNameA[pieceIndex]="SK";
          activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
          + "SK(BC) af:2 mf:5 fire:2/1 vp:3"
          +" ("+typeNumbA[pieceIndex]+"/"
          +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
          if(pieceIndex<gerNumber){var base=Abase;}
          else{var base=Bbase;}
          activePiece.setAttribute("src", "units/"+base+"s1.jpg");
          armourA[pieceIndex]="f";
          firerA[pieceIndex]=1;
          dismountA[pieceIndex]=1;
     }
     else if(pieceName1=="SD"&&pieceName2=="BC"){//cataphracts
          pieceNameA[pieceIndex]="SD";
         activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
         + "SD(BC) af:4 mf:4 vp:3"
         +" ("+typeNumbA[pieceIndex]+"/"
         +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
         if(pieceIndex<gerNumber){var base=Abase;}
         else{var base=Bbase;}
         activePiece.setAttribute("src", "units/"+base+"sd.jpg");
         armourA[pieceIndex]="n";
         firerA[pieceIndex]=0;
         dismountA[pieceIndex]=1;
      }
      else if(pieceName1=="SD"&&pieceName2=="PL"){//pilums thrown
           pieceNameA[pieceIndex]="SD";
           activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
           + "SD af:4 mf:4 vp:2"
           +" ("+typeNumbA[pieceIndex]+"/"
           +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
           if(pieceIndex<gerNumber){var base=Abase;}
           else{var base=Bbase;}
           activePiece.setAttribute("src", "units/"+base+"sd.jpg");
           armourA[pieceIndex]="n";
           firerA[pieceIndex]=0;
           dismountA[pieceIndex]=1;
        }
        else if(pieceName1=="AX"&&pieceName2=="FR"){//francisca thrown
             pieceNameA[pieceIndex]="AX";
               activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
               + "AX af:3 mf:4 vp:2"
               +" ("+typeNumbA[pieceIndex]+"/"
               +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
               if(pieceIndex<gerNumber){var base=Abase;}
               else{var base=Bbase;}
               activePiece.setAttribute("src", "units/"+base+"ax.jpg");
               armourA[pieceIndex]="n";
               firerA[pieceIndex]=0;
               dismountA[pieceIndex]=1;
          }
          else if(pieceName1=="AX"&&pieceName2=="LB"){//
               pieceNameA[pieceIndex]="AX";
                 activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
                 + "AX af:3 mf:4 vp:2"
                 +" ("+typeNumbA[pieceIndex]+"/"
                 +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
                 if(pieceIndex<gerNumber){var base=Abase;}
                 else{var base=Bbase;}
                 activePiece.setAttribute("src", "units/"+base+"ax.jpg");
                 armourA[pieceIndex]="n";
                 firerA[pieceIndex]=0;
                 dismountA[pieceIndex]=1;
            }
            else if(pieceName1=="PS"&&pieceName2=="HC"){//
                 pieceNameA[pieceIndex]="PS";
                   activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
                   + "PS af:4 mf:3 vp:6"
                   +" ("+typeNumbA[pieceIndex]+"/"
                   +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
                   if(pieceIndex<gerNumber){var base=Abase;}
                   else{var base=Bbase;}
                   activePiece.setAttribute("src", "units/"+base+"ps.jpg");
                   armourA[pieceIndex]="n";
                   dismountA[pieceIndex]=1;
              }
              else if(pieceName1=="SD"&&pieceName2=="MC"){//
                   pieceNameA[pieceIndex]="SD";
                     activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
                     + "SD af:4 mf:4 vp:4"
                     +" ("+typeNumbA[pieceIndex]+"/"
                     +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
                     if(pieceIndex<gerNumber){var base=Abase;}
                     else{var base=Bbase;}
                     activePiece.setAttribute("src", "units/"+base+"sd.jpg");
                     armourA[pieceIndex]="n";
                     dismountA[pieceIndex]=1;
                }
                else if(pieceName1=="CB"&&pieceName2=="LC"){//
                     pieceNameA[pieceIndex]="CB";
                       activePiece.setAttribute("title",  "#"+(pieceIndex+1)+": "
                       + "CB af:(1) mf:5 fire:2/3 vp:2"
                       +" ("+typeNumbA[pieceIndex]+"/"
                       +unitsA[thisIsA[pieceIndex]*noOfItems+3]+")");
                       if(pieceIndex<gerNumber){var base=Abase;}
                       else{var base=Bbase;}
                       activePiece.setAttribute("src", "units/"+base+"cb.jpg");
                       armourA[pieceIndex]="f";
                       firerA[pieceIndex]=1;
                       dismountA[pieceIndex]=1;
                  }
              else{}


}

function stripSpace(n){
  var textToStrip = n;
  var newText= "";
  var textLen = textToStrip.length;
  alert(""+textLen);

  for(i=0;i<textLen;i++){
    var cake = textToStrip.slice(i,i+1);
    if(cake!=" "){
      newText=newText+cake;
    }
    else{}
  }
  return newText;
}
