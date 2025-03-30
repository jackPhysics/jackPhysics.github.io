
var canvW0 = 1750;
var canvH0 = 1750;
var canvW = 1320;//660;
var canvH = 1316;
var unitColor = "Wheat";
var baseColor = "Wheat";
var tableColor = "DarkOliveGreen";
var lineColor = "Black";
var terrain0Col = "Ivory";
var terrain1Col = "Green";
var terrain1Prob = 20;//% coverage
var terrainA = ["Brown", "LimeGreen", "#832727",  "Blue", "Blue", "Turquoise", "Yellow", "Yellow", "Tan", "Cyan", "Pink"];//this array must be same length as allCOORDSX
//mount n woods: DarkOliveGreen
//brown: #A52A2A so dark brown:#531515
//0=clear 0=hills 1=woods 2=mountain 3=lake 4=small lakes 5=swamp 6=city 7=desert 8=slope 9=hilltop 10=bridge 11=ford
var terrainANum0 = [0, 0, 0, 0, 0, 0, 0, 0];//[4, 4, 2, 2, 3, 0, 6, 0];
var terrainANMin0 = [0, 0, 0, 0, 0, 0, 0, 0];//min number of each
var terrainASize0 = [6, 10, 6, 8, 0, 8, 0, 1];//[6, 10, 6, 8, 0, 8, 0, 1];[2, 3, 2, 6, 4, 0, 0, 0]
var terrainASpread = [2, 2, 1, 1, 0, 1, 0, 0];//[2, 2, 1, 1, 0, 1, 0, 0]
var terrainALen = terrainA.length;
var terrainANum = new Array();
var terrainASize = new Array();

//random number of each terrain
/*
for(t=0;t<terrainALen;t++){
  var dumRange = terrainANum0[t];
  var dumMin = terrainANMin0[t];
  dumRange = dumRange-dumMin;
  var dumT1 = Math.round(Math.random()*dumRange)+dumMin;
  var dumT2 = Math.round(Math.random()*terrainASize0[t]);
terrainANum[t] = dumT1;//5
terrainASize[t] = dumT2;//5
}*/

/*
//all of each terrain
for(t=0;t<terrainALen;t++){
terrainANum[t] = terrainANum0[t];//5
terrainASize[t] = terrainASize0[t];//5
}
*/
var cityX = new Array();
var cityY = new Array();
var roadX = new Array();
var roadY = new Array();
var riverX = new Array();
var riverY = new Array();
var lakeX = new Array();
var lakeY = new Array();
var lake2X = [3, 2, 0, 5];//new Array();//kreigspiel rivers
var lake2Y = [0,36, 26, 10];//new Array();
var city2X = [2, 2, 0, 5, 5, 0];//new Array();
var city2Y = [1, 35, 24, 12, 24, 12];//new Array();
var mountX = new Array();
var mountY = new Array();
var terrainALen = terrainA.length;
var boardA = new Array();
var delY = 40;
var delX = 40;
var noXlines = canvW/delX;//17.5
var noYlines = canvH/delY;//32.5
const sin60 = 0.8660254038;
const hexD = 40;
const hexLong = sin60*hexD;//34.64
noXlines = canvW/(3*hexD);//(hexD+2*hexLong);//5.8333
noYlines = canvH/(hexLong);//canvH/(hexLong*2);//18.76
noXXlines = noXlines*2;//11.67
noYYlines = noYlines*2;//71.06
var hexMoveX = [0, hexD, hexD+hexD/2, hexD, 0, -hexD/2, 0];
var hexMoveY = [0, 0, hexLong, 2*hexLong, 2*hexLong, hexLong, 0];
var allTerrainA = new Array();//stores if river in hex
var allTerrainA2 = new Array();//stores other terrain
var riverEndProb = 0;//0.2;
var roadEndProb = 0;//0.05;
var dumCountList=0;
var changeColor = "#111111";
var changeColorR = "#110000";
var changeColorG = "#001100";
var changeColorB = "#000011";
var colorNow = "Black";
var colorNow0 = "Black";
var colFlag = 0;
//var brdShiftX = 220;//
//var brdShiftY = 208;//
//var brdShiftX0 = 220;//
//var brdShiftY0 = 208;//
var brdShiftX = 4.5*hexD;//220;//5.5*hexD
var brdShiftY = 5*hexLong;//208;//6*hexLong
var brdShiftX0 = 4.5*hexD;//220;//5.5*hexD
var brdShiftY0 = 5*hexLong;//208;//6*hexLong
var brdSftCoX = brdShiftX/hexD/3;
var brdSftCoY = brdShiftY/hexLong;
var hexCoords = true;
var boardPos = 0;
var allBoardArr = create2DArray(110,110);//function at bottom of page
var coordX = 0;
var coordY = 0;
var woodSlopesFlag = false;
//terrain code

var swampCOX = [100];
var swampCOY = [100];
var hillCOX = [100];
var hillCOY = [100];
var smLakeCOX = [100];
var smLakeCOY = [100];
var cityCOX = [100];
var cityCOY = [100];
var woodCOX = [100];
var woodCOY = [100];
var mountCOX = [100];
var mountCOY = [100];
var beachCOX = [100];
var beachCOY = [100];
var lakeCOX = [100];
var lakeCOY = [100];
var riverCOX = [100];
var riverCOY = [100];
var roadCOX = [100];
var roadCOY = [100];
var slopeCOX = [100];
var slopeCOY = [100];
var bridgeCOX = [100];
var bridgeCOY = [100];
var fordCOX = [100];
var fordCOY = [100];
var hillTopDir = [100];
var hillTopCOY = [100];
var namedHexes = [100];
var iconHexes = [100];

var noOfTurns0 = 20;
var blackBrdNo = 0;
var redBrdNo = 1;

var longBoardFlag = false;
var gameTurnTrackFlag = false;
var vpTrackFlag = false;


//loadTerrain(0);
//edge rivers and roads - BLACK
/*
var riverCOX = [3, 3, 100,    -1, 0, 100,    5, 4, 100,    2, 2, 100];
var riverCOY = [0, 2,100,    11, 9, 100,    25, 27, 100,   36, 34, 100,];
var roadCOX = [2.5, 2, 100, -1, 0, 100, -1, 0, 100, 5, 4, 100, 5, 4, 100, 2, 2, 100];
var roadCOY = [-1, 3, 100, 11, 13, 100, 23, 25, 100, 23, 25,100, 11, 13, 100, 37, 33, 100];
*/

//var terrainA = ["Brown", "LimeGreen", "#832727",  "Blue", "Blue", "Turquoise", "Grey", "Yellow"];
//var allCOORDSX = [hillCOX, woodCOX, mountCOX, lakeCOX, smLakeCOX, swampCOX, cityCOX, beachCOX];
//var allCOORDSY = [hillCOY, woodCOY, mountCOY, lakeCOY, smLakeCOY, swampCOY, cityCOY, beachCOY];


//window.onload= function(){
function initBoard(){
  loadTerrain(blackBno,flipBrdNoBX,flipBrdNoBY);//mirrBrdNoB
  ////console.log("flipBrdNoB:"+flipBrdNoBX +" mirrBrdNoB:"+flipBrdNoBY)
  //loadTerrain(redBno,flipBrdNoR,mirrBrdNoR);
   allCOORDSX = [hillCOX, woodCOX, mountCOX, lakeCOX, smLakeCOX, swampCOX, cityCOX, beachCOX, slopeCOX, bridgeCOX, fordCOX];
   allCOORDSY = [hillCOY, woodCOY, mountCOY, lakeCOY, smLakeCOY, swampCOY, cityCOY, beachCOY, slopeCOY, bridgeCOY, fordCOY];
   printBoards(0);
   //printBoards(1);
  //loadTerrain(blackBno,flipBrdNoB,mirrBrdNoB);
  /*
  loadTerrain(redBno,flipBrdNoR,mirrBrdNoR);
   allCOORDSX = [hillCOX, woodCOX, mountCOX, lakeCOX, smLakeCOX, swampCOX, cityCOX, beachCOX, slopeCOX, bridgeCOX, fordCOX];
   allCOORDSY = [hillCOY, woodCOY, mountCOY, lakeCOY, smLakeCOY, swampCOY, cityCOY, beachCOY, slopeCOY, bridgeCOY, fordCOY];
   //printBoards(0);
   printBoards(1);
   */
   completeBoard();
////console.log("hideHills "+hideHills+" hideWoods "+hideWoods+" hideTowns "+hideTowns+"hideRivers "+hideRivers+" hideRoads "+hideRoads+" hideLakes "+hideLakes+" hideSwamps "+hideSwamps)
   //alert(""+cityCOX);
}

function completeBoard(){

  /*
  var edgeX0 = [18, canvW-39, canvW-39, 18, 18];
  var edgeY0 = [68, 68, canvH-69, canvH-69, 68];
  var edgeX = new Array();
  var edgeY = new Array();
  for(c=0;c<edgeX0.length;c++){
    edgeX[c]=edgeX0[c]+brdSftCoX*hexD*3;
    edgeY[c]=edgeY0[c]+brdSftCoY*hexLong;
  }*/

  var corner1X = 6*hexLong;//238;
  var corner2X = canvW0-7*hexLong;//canvW0-308;
  var corner3X = canvW0-7*hexLong;//canvW0-308;
  var corner4X = 6*hexLong;//238;
  var corner1Y = 6*hexLong;//276
  var corner2Y = 6*hexLong;//276;
  var corner3Y = canvH0-6.5*hexLong;//canvH0-294;
  var corner4Y = canvH0-6.5*hexLong;//294;

  var canvas = document.getElementById("board");
  var ctx = canvas.getContext("2d");
    //ctx.canvas.width = canvW0;
    //ctx.canvas.height = canvH0;
  ctx.globalAlpha = 0.9;
  //down the top side
  ctx.beginPath();
  ctx.fillStyle = tableColor;
  ctx.fillRect(0,0,canvW0,corner1Y);

  //down the left side
  ctx.beginPath();
  ctx.fillStyle = tableColor;
  ctx.fillRect(0,0,corner1X,canvH0);

  //across the bottom side
  ctx.beginPath();
  ctx.fillStyle =tableColor;
  ctx.fillRect(0,corner3Y,canvW0,canvH0-corner4Y);

  //across the right side
  ctx.beginPath();
  ctx.fillStyle = tableColor;
  ctx.fillRect(corner2X,0,canvW0-corner2X,canvH0);

/*
    //label the boards
      ctx.font = "72px Arial";
      ctx.fillStyle = "Black";//textColorThis;
      ctx.strokeStyle = "Red";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      ctx.lineWidth = "4";
      ctx.fillText("Black",canvW0*0.3, brdShiftY/1.5);
      ctx.lineWidth = "1";
      ctx.strokeText("Black",canvW0*0.3, brdShiftY/1.5);
      ctx.fillStyle = "Red";
      ctx.strokeStyle = "Black";
      ctx.lineWidth = "4";
      ctx.fillText("Red",canvW0*0.65, brdShiftY/1.5);
      ctx.lineWidth = "1";
      ctx.strokeText("Red",canvW0*0.65, brdShiftY/1.5);
      ctx.closePath();
      ctx.globalAlpha = 1;

  //reinforcement n replacement areas
    //black replacements
      ctx.beginPath();
      ctx.fillStyle = "Silver";
      ctx.fillRect(corner1X*1.3,corner4Y+corner1X*0.2,corner1X*1.8,corner1Y*0.7);
        ctx.font = "48px Arial";
        ctx.textAlign = "left";
        ctx.textBaseline = "bottom";
      ctx.lineWidth = "1";
    ctx.fillStyle = "Black";
      ctx.fillText("Replacements:",corner1X*1.3-15,corner4Y+corner1X*0.2+23);
    ctx.fillStyle = "White";
    ctx.fillText("Replacements:",corner1X*1.3-20,corner4Y+corner1X*0.2+20);
      ctx.closePath();

      //red replacements
        ctx.beginPath();
        ctx.fillStyle = "Silver";
        ctx.fillRect(canvH0/2+corner1X*0.28,corner4Y+corner1X*0.2,corner1X*1.8,corner1Y*0.7);
          ctx.font = "48px Arial";
          ctx.textAlign = "left";
          ctx.textBaseline = "bottom";
        ctx.lineWidth = "1";
      ctx.fillStyle = "Red";
        ctx.fillText("Replacements:",canvH0/2+corner1X*0.28-15,corner4Y+corner1X*0.2+23);
      ctx.fillStyle = "White";
      ctx.fillText("Replacements:",canvH0/2+corner1X*0.28-20,corner4Y+corner1X*0.2+20);
          ctx.closePath();

    //black reinforcements
      ctx.beginPath();
      ctx.fillStyle = "Silver";
      ctx.fillRect(corner1X*0.1,canvH0*0.5,corner1Y*0.7,corner1X*1.8);
      ctx.save();
      ctx.rotate(Math.PI/2);
        ctx.font = "48px Arial";
        ctx.textAlign = "left";
        ctx.textBaseline = "bottom";
      ctx.lineWidth = "1";
    ctx.fillStyle = "Black";
      ctx.fillText("Reinforcements:",canvH0*0.5-20,corner1X*0.1-30);//canvH0/2+corner1X*0.28-15,23);
    ctx.fillStyle = "White";
    ctx.fillText("Reinforcements:",canvH0*0.5-25,corner1X*0.1-25);//canvH0/2+corner1X*0.28-20,20);
    ctx.restore();
      ctx.closePath();


    //red reinforcements
      ctx.beginPath();
      ctx.fillStyle = "Silver";
      ctx.fillRect(canvH0-corner1X*0.9,canvH0*0.5,corner1Y*0.7,corner1X*1.8);
      ctx.save();
      ctx.rotate(Math.PI/2);
        ctx.font = "48px Arial";
        ctx.textAlign = "left";
        ctx.textBaseline = "bottom";
      ctx.lineWidth = "1";
    ctx.fillStyle = "Red";
      ctx.fillText("Reinforcements:",canvH0*0.5-22,-canvH0+corner1X*0.9+20);//canvH0/2+corner1X*0.28-15,23);
    ctx.fillStyle = "White";
    ctx.fillText("Reinforcements:",canvH0*0.5-25,-canvH0+corner1X*0.9+25);//canvH0*0.5-25,canvH0-corner1X*0.1+25);//canvH0/2+corner1X*0.28-20,20);
    ctx.restore();
      ctx.closePath();

*/
/*
var sizeOfBox = canvW0/(noOfTurns0+4);
  ctx.font = "56px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";
  ctx.lineWidth = "2";
  ctx.strokeStyle = "Blue";
    for(i=1;i<noOfTurns0+1;i++){
      ctx.beginPath();
      ctx.fillStyle = "#b0e0e6";
      if(i%2==1){ctx.fillStyle = "#ffc0cb";}
      ctx.fillRect(sizeOfBox*1.1*i,corner1Y*0.55,sizeOfBox,100);
      ctx.strokeText(""+i,sizeOfBox*0.5+sizeOfBox*1.1*i,corner1Y*0.9);
      ctx.closePath();
    }
      ctx.font = "48px Arial";
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
    ctx.lineWidth = "1";
  ctx.fillStyle = "Blue";
    ctx.fillText("Game Turn Chart:",sizeOfBox*1.1-45,corner1Y*0.55);//canvH0/2+corner1X*0.28-15,23);
  ctx.fillStyle = "White";
  ctx.fillText("Game Turn Chart:",sizeOfBox*1.1-50,corner1Y*0.55);
*/
if(gameTurnTrackFlag){
  var sizeOfBox = canvW0/(noOfTurns0+4);
    ctx.font = "40px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.lineWidth = "2";
    ctx.strokeStyle = "Blue";
      for(i=1;i<noOfTurns0+1;i++){
        ctx.beginPath();
        ctx.fillStyle = "#b0e0e6";
        if(i%2==1){ctx.fillStyle = "#ffc0cb";}
        ctx.fillRect(sizeOfBox*1.1*i,corner1Y*0.55,sizeOfBox,80);
        ctx.strokeStyle = "Red";
        ctx.strokeText(""+i,sizeOfBox*0.30+sizeOfBox*1.1*i,corner1Y*0.75);
        ctx.strokeStyle = "Black";
        ctx.strokeText(""+i,sizeOfBox*0.68+sizeOfBox*1.1*i,corner1Y*0.95);
        ctx.closePath();
      }
        ctx.font = "48px Arial";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
      ctx.lineWidth = "1";
    ctx.fillStyle = "Blue";
      ctx.fillText("Game Turn Chart:",sizeOfBox*1.1-45,corner1Y*0.50+5);//canvH0/2+corner1X*0.28-15,23);
    ctx.fillStyle = "White";
    ctx.fillText("Game Turn Chart:",sizeOfBox*1.1-50,corner1Y*0.50);
}
//replacement points chart
if(vpTrackFlag){
      ctx.font = "40px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      ctx.lineWidth = "2";
      ctx.fillStyle = "Black";
        for(i=0;i<10;i++){
          ctx.beginPath();
          //corner1X*0.1,canvH0*0.5,corner1Y*0.7,corner1X*1.8
          ctx.fillStyle = "Black";
          ctx.fillRect(corner1X*0.3,corner1Y+10+55*i,100,50);
          ctx.fillStyle = "Red";
          ctx.fillText(""+i,corner1X*0.4,corner1Y+55+55*i);
          ctx.closePath();
        }

        ctx.save();
        ctx.rotate(Math.PI/2);
          ctx.font = "36[po32], px Arial";
          ctx.textAlign = "left";
          ctx.textBaseline = "bottom";
        ctx.lineWidth = "1";
      ctx.fillStyle = "Black";
        ctx.fillText("Victory points:",canvH0*0.20-20,corner1X*0.1-40);//canvH0/2+corner1X*0.28-15,23);
      //ctx.fillStyle = "White";
      //ctx.fillText("Reinforcements:",canvH0*0.5-25,-canvH0+corner1X*0.9+25);//canvH0*0.5-25,canvH0-corner1X*0.1+25);//canvH0/2+corner1X*0.28-20,20);
      ctx.restore();
        ctx.closePath();
      }
}



function printBoards(bn){

  changeColor = "#111111";
  changeColorR = "#110000";
  changeColorG = "#001100";
  changeColorB = "#000011";

  //brdSftCoX = brdShiftX/hexD/3;
  //brdSftCoY = brdShiftY/hexLong;//Math.round(brdShiftY/hexLong);

  if(bn%2==0){//even number - black - on left
    brdShiftX = 5.5*hexD;//5.5*hexD;//220;//5.5*40
    brdShiftY = 6*hexLong;//6*hexLong;//208;//4*69.28(hexLong*2)
    brdSftCoX = brdShiftX/hexD/3;
    brdSftCoY = brdShiftY/hexLong;}
   else if(bn%2==1){//red number - red - on right
    brdShiftX = 820;//5.5*40
    brdShiftY = 208;//4*69.28(hexLong*2)
    brdSftCoX = brdShiftX/hexD/3;
    brdSftCoY = brdShiftY/hexLong;}

//if 2 boards
/*
if(bn%2==0){//even number - black - on left
 //brdShiftX = 220;//5.5*40
 //brdShiftY = 208;//4*69.28(hexLong*2)
 brdSftCoX = brdShiftX/hexD/3;
 brdSftCoY = brdShiftY/hexLong;}
else if(bn%2==1){//red number - red - on right
 brdShiftX = 820;//5.5*40
 brdShiftY = 208;//4*69.28(hexLong*2)
 brdSftCoX = brdShiftX/hexD/3;
 brdSftCoY = brdShiftY/hexLong;}
*/
for(a=0;a<noYlines;a++){
  for(b=0;b<noXlines;b++){
    allTerrainA[a*noXXlines+b]=0;
  }
}
for(a=0;a<noYlines;a++){
  for(b=0;b<noXlines;b++){
    allTerrainA2[a*noXXlines+b]=0;
  }
}

var loopRFlag = true;
while(loopRFlag){
  if(Math.random()<0.6){
    riverEndProb=riverEndProb+0.1;
  }
  else{
    loopRFlag=false;
  }
}
loopRFlag = true;
while(loopRFlag){
  if(Math.random()<0.6){
    roadEndProb=roadEndProb+0.1;
  }
  else{
    loopRFlag=false;
  }
}

    var events = new Events("board");
    var canvas = events.getCanvas();
    var context = events.getContext();
    var isMouseDown = false;
    var canvasImg = getCanvasImg(canvas);
		//const image = document.getElementById("source");

  var canvas = document.getElementById("board");
  var ctx = canvas.getContext("2d");
  if(bn%2==0){
    ctx.canvas.width = canvW0;
    ctx.canvas.height = canvH0;
    ctx.beginPath();
  ctx.fillStyle = baseColor;//"Orange";//tableColor;
  ////console.log(""+canvW0+" "+canvW+" "+canvH0+" "+canvH);
  ////console.log(""+swidth+" "+sheight);
  ctx.fillRect(0, 0, canvW0, canvH0);
  ctx.closePath();}
  ctx.beginPath();
ctx.fillStyle = baseColor;
ctx.fillRect(brdShiftX+hexD/2, brdShiftY, canvW, canvH);
ctx.closePath();

  //draw filled hex terrain
  //alert(""+terrainALen);
  //alert(""+allBoardArr[0]+" "+allBoardArr[12])
  for(l=0;l<terrainALen;l++){
  //for(g=0;g<terrainANum[l];g++){
  for(g=0;g<allCOORDSX[l].length;g++){
  ////console.log(""+l+" "+g);
  //***dumY needs Math.round, dumX must not have Math.round
    var dumX = allCOORDSX[l][g]+brdSftCoX;//Math.floor(Math.random()*(noXlines-3))+2;
    var dumY = Math.round(allCOORDSY[l][g]+brdSftCoY);//Math.floor(Math.random()*(noYlines-6))+3;
  var jumpArrayFlag = false;
  coordX = allCOORDSX[l][g]+Math.round(flipBrdNoBX/2);//-1
  coordY = allCOORDSY[l][g]+(flipBrdNoBY*2);
  var dumx27 = slopeCOY.length-38;//-38
  //if(l==1&&g==dumx27){
  ////console.log(allCOORDSX[8][dumx27]+" "+allCOORDSY[8][dumx27]+" "+coordX+" "+coordY);}
  if(coordX>=100||coordY>=100){jumpArrayFlag=true;}
  if(coordX<0||coordY<0){jumpArrayFlag=true;}
  ////console.log(coordX+" "+coordY);
  if(l!=8&&!jumpArrayFlag){//if not slopes
    ////console.log(coordX);
  allBoardArr[coordX][coordY]=l+1;
  woodSlopesFlag = false;}
  else if(!jumpArrayFlag){
    if(l==8&&allBoardArr[coordX][coordY]==2){
      woodSlopesFlag = true;
      ////console.log(coordX+" "+coordY);
    }
    else{woodSlopesFlag = false;}
  }
  //if(l==8&&g==dumx27){
  ////console.log(allBoardArr[coordX][coordY]+" "+woodSlopesFlag);}
  boardPos = Math.round(dumY*noXXlines+dumX);
  //if(allTerrainA2[boardPos]!=77){allTerrainA2[boardPos]=l;}
  //if(l==1){allTerrainA2[boardPos]=77;
  //      //console.log("wood:"+dumX+", "+dumY+" "+boardPos+" "+allTerrainA2[boardPos]);}//store the terrain in the hex
    //else{allTerrainA2[boardPos]=l;}
  if(l==3){//record lake start hexes - now 3 with high mount added
    lake2X[g+4]=dumX;
    lake2Y[g+4]=dumY;
  }
  if(l==4){//record small lake start hexes
    lake2X[g+terrainANum[2]+4]=dumX;
    lake2Y[g+terrainANum[2]+4]=dumY;
  }
  if(l==6){//record city hexes - now 4 with high mount added
    cityX[g]=dumX;
    cityY[g]=dumY;
  }
  if(l==0){//record mountain start hexes
    mountX[g]=dumX;
    mountY[g]=dumY;
  }
  var xPos = dumX*(hexD*3);//+hexD/2;
  if(dumY%2==1){xPos=xPos+(hexD/2+hexD);}
  var yPos = dumY*(hexLong);//+hexLong;
  if(dumY%2==1){yPos=yPos;}
  ctx.beginPath();
  if (allTerrainA2[boardPos]==0){
    //allTerrainA2[boardPos]=+l+1;
    ctx.fillStyle = terrainA[l];//terrain1Col;
    colorNow0 = terrainA[l];
  }
  else if(allTerrainA2[boardPos]==1&&l==1){//woods on hills
    //allTerrainA2[boardPos]=6;
    ctx.fillStyle = "DarkGreen";//terrain1Col;
    colorNow0 = "DarkGreen";
  }
  else{//lakes and cities overlay other types
  //allTerrainA2[boardPos]=+l+1;
  ctx.fillStyle = terrainA[l];//terrain1Col;
  colorNow0 = terrainA[l];
  if(woodSlopesFlag){
    ctx.fillStyle ="ForestGreen";
    colorNow0="ForestGreen";
  }
  }
  if(l<9){
    var posOrgX = 1;
    var posOrgY = 1;
    var posNowX = 0;
    var posNowY = 0;
  ctx.moveTo(xPos,yPos);
    for(e=0;e<7;e++){
    posNowX = xPos+hexMoveX[e];
    posNowY = yPos+hexMoveY[e];
    ctx.lineTo(posNowX,posNowY);
    }
    ctx.fill();}
    //ADD TEXTURE TO 1ST HEXES
    //ctx.fill();
    if(l==1){//woods n wooded hills
          colorNow=colorNow0;
        for(tx=0;tx<10;tx++){//extra colours
          var dirColor = "add";
          if(Math.random()<0.4){dirColor="sub"}
          var colorNowH = col2Hex(colorNow);
          colorNow = shiftColor(colorNowH, changeColor, dirColor);
          colorNow = "#"+colorNow;
            var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
            var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
          ctx.fillStyle = colorNow;
        ctx.beginPath();
        ctx.arc(texWd_x, texWd_y, 10, 0, Math.PI*2);
        ctx.fill();
        }
        for(tx=0;tx<30;tx++){//curly curves
          if(tx>15){ctx.lineWidth = "2";}
          var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
          var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
          var texWd_r = Math.round(Math.random()*8)+0;
          var texWd_sA = Math.round(Math.random()*Math.PI*2);
          var texWd_eA = texWd_sA+Math.PI+Math.round(Math.random()*Math.PI/2);
          ctx.strokeStyle = "Black";
          ctx.beginPath();
          ctx.arc(texWd_x, texWd_y, texWd_r, texWd_sA, texWd_eA);
          ctx.stroke();
        }
        for(tx=0;tx<20;tx++){//extra dots
          var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
          var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
          var texWd_r = 1;
          var texWd_sA = 0;
          var texWd_eA = Math.PI*2;
        ctx.beginPath();
        ctx.arc(texWd_x, texWd_y, 1, 0, Math.PI*2);
        ctx.stroke();
        }
        }
        else if(l==5){//swamp
        colorNow="Turquoise";
        for(tx=0;tx<10;tx++){//extra colours
          var dirColor = "add";
          if(Math.random()<0.5){dirColor="sub"}
          var colorNowH = col2Hex(colorNow);
          if(Math.random()<0.5){
          colorNow = shiftColor(colorNowH, changeColorG, dirColor);}
          else{
          colorNow = shiftColor(colorNowH, changeColorB, dirColor);}
          colorNow = "#"+colorNow;
            var texWd_x = xPos - hexD/2 +10 +Math.round(Math.random()*(hexD*2-20));
            var texWd_y = yPos +10 +Math.round(Math.random()*(hexLong*2-20));
            var texWd_w = Math.round(Math.random()*20)+5;
            var texWd_h = Math.round(Math.random()*20)+5;
          ctx.fillStyle = colorNow;
        ctx.beginPath();
        ctx.arc(texWd_x, texWd_y, 6, 0, Math.PI*2);
        ctx.fill();
      }
      for(tx=0;tx<20;tx++){//three dots
        var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-20));
        var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-20));
        var texWd_r = 1;
        var texWd_sA = 0;
        var texWd_eA = Math.PI*2;
      ctx.fillStyle = "Black";
      ctx.beginPath();
      ctx.arc(texWd_x, texWd_y, 1, 0, Math.PI*2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(texWd_x+3, texWd_y, 1, 0, Math.PI*2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(texWd_x+6, texWd_y, 1, 0, Math.PI*2);
      ctx.fill();
      }
      }
      else if(l==3){//big lake{
      for(tx=0;tx<5;tx++){//white dots
        var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
        var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
        var texWd_r = 1;
        var texWd_sA = 0;
        var texWd_eA = Math.PI*2;
      ctx.fillStyle = "White";
      ctx.strokeStyle = "White";
      ctx.beginPath();
      //ctx.rect(texWd_x, texWd_y, 3, 1);
      ctx.stroke();
      ctx.arc(texWd_x, texWd_y, 1, 0, Math.PI*2);
      ctx.fill();
    ctx.strokeStyle = "Black";
    ctx.fillStyle = "Blue";
      }}
    else if(l==0){//hills
          colorNow=colorNow0;
    for(tx=0;tx<4;tx++){//extra colours
      var dirColor = "add";
      if(Math.random()<0.7){dirColor="sub"}
      var colorNowH = col2Hex(colorNow);
      colorNow = shiftColor(colorNowH, changeColor, dirColor);
      colorNow = "#"+colorNow;
        var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(20));
        var yShift = Math.round(Math.random()*(hexLong))
        var texWd_y = yPos +hexLong -10 +yShift;
        texWd_x = texWd_x + yShift/3;
      ctx.fillStyle = colorNow;
    ctx.beginPath();
    ctx.rect(texWd_x, texWd_y, hexD, 10);
    ctx.fill();
    }
    for(tx=0;tx<2;tx++){//line of dots
      var texWd_x = xPos +Math.round(Math.random()*(15));
      var texWd_y = yPos +hexLong +Math.round(Math.random()*(3*hexLong/4));
      var texWd_r = 1;
      var texWd_sA = 0;
      var texWd_eA = Math.PI*2;
    ctx.fillStyle = "Black";
    for(tx2=0;tx2<30;tx2=tx2+3){
    ctx.beginPath();
    ctx.arc(texWd_x+tx2, texWd_y, 1, 0, Math.PI*2);
    ctx.fill();}
    }
    for(tx=0;tx<4;tx++){//hill peaks
        var texWd_x = xPos +Math.round(Math.random()*(hexD));
        var texWd_y = yPos+15+Math.round(Math.random()*(hexLong));
        //var texWd_w = Math.round(Math.random()*20)+5;
        //var texWd_h = Math.round(Math.random()*20)+5;
      ctx.stokeStyle = "Black";
    ctx.beginPath();
    ctx.arc(texWd_x, texWd_y, 15, -Math.PI/6, -5*Math.PI/6,-1);//Math.PI/4
    ctx.stroke();
    }
    }
    else if(l==7){//desert
          colorNow=colorNow0;
        ////console.log("start "+dumX+": "+colorNow);
    for(tx=0;tx<4;tx++){//extra colours
    var dirColor = "add";
    if(Math.random()<0.7){dirColor="sub"}
    var colorNowH = col2Hex(colorNow);
    colorNow = shiftColor(colorNowH, changeColor, dirColor);
    colorNow = "#"+colorNow;
    ////console.log(""+dumX+": "+"changeColor="+changeColor+" --> "+colorNow);
    var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(20));
    var yShift = Math.round(Math.random()*(hexLong*1.5))
    var texWd_y = yPos +yShift;
    //texWd_x = texWd_x + yShift/3;
    ctx.fillStyle = colorNow;
    ctx.beginPath();
    ctx.rect(texWd_x, texWd_y, hexD, 10);
    ctx.fill();
    }
    for(tx=0;tx<4;tx++){//line of dots
    var texWd_x = xPos +Math.round(Math.random()*(15));
    var texWd_y = yPos +hexLong +Math.round(Math.random()*(3*hexLong/4));
    var texWd_r = 1;
    var texWd_sA = 0;
    var texWd_eA = Math.PI*2;
    ctx.fillStyle = "Brown";
    if(tx>1){ctx.fillStyle = "White";}
    for(tx2=0;tx2<30;tx2=tx2+3){
    ctx.beginPath();
    ctx.arc(texWd_x+tx2, texWd_y, 1, 0, Math.PI*2);
    ctx.fill();}
    }
    }
    else if(l==2){//mountains
          colorNow=colorNow0;
    for(tx=0;tx<4;tx++){//hill peaks
      var texWd_x = xPos +Math.round(Math.random()*(hexD)-5);
      var texWd_y = yPos+20+Math.round(Math.random()*10)+(tx*hexLong/4);
      //var texWd_x = xPos +Math.round(Math.random()*(hexD)-5);
      //var texWd_y = yPos+20+Math.round(Math.random()*(hexLong));
      var snowLine = Math.round(Math.random()*3)+3;
      //var texWd_w = Math.round(Math.random()*20)+5;
      //var texWd_h = Math.round(Math.random()*20)+5;
    ctx.stokeStyle = "Black";
      ctx.fillStyle = "#531515";
      ctx.beginPath();
      ctx.moveTo(texWd_x-5, texWd_y+10);
      ctx.lineTo(texWd_x+10, texWd_y-20);
      ctx.lineTo(texWd_x+25, texWd_y+10);
      ctx.fill();
      ctx.fillStyle = "Black";
      ctx.beginPath();
      ctx.moveTo(texWd_x-5, texWd_y+10);
      ctx.lineTo(texWd_x+10, texWd_y-20);
      ctx.lineTo(texWd_x+14, texWd_y+10);
      //ctx.moveTo(texWd_x, texWd_y);
      //ctx.lineTo(texWd_x+10, texWd_y-20);
      //ctx.lineTo(texWd_x+9, texWd_y);
      ctx.fill();
    if(Math.random()<0.35){//Math.random()<0.4
      ctx.fillStyle = "Ivory";
      ctx.beginPath();
      ctx.moveTo(texWd_x+snowLine/2, texWd_y-snowLine);
      ctx.lineTo(texWd_x+10, texWd_y-20);
      ctx.lineTo(texWd_x+20-snowLine/2, texWd_y-snowLine);
      ctx.fill();
        ctx.fillStyle = "Cyan";
        ctx.beginPath();
        ctx.moveTo(texWd_x+snowLine/2, texWd_y-snowLine);
        ctx.lineTo(texWd_x+10, texWd_y-20);
        ctx.lineTo(texWd_x+12-snowLine/2, texWd_y-snowLine);
        ctx.fill();
    }
    else{
      ctx.fillStyle = "#531515";
      ctx.beginPath();
      ctx.moveTo(texWd_x, texWd_y);
      ctx.lineTo(texWd_x+10, texWd_y-20);
      ctx.lineTo(texWd_x+20, texWd_y);
      ctx.fill();
        ctx.fillStyle = "Black";
        ctx.beginPath();
        ctx.moveTo(texWd_x, texWd_y);
        ctx.lineTo(texWd_x+10, texWd_y-20);
        ctx.lineTo(texWd_x+9, texWd_y);
        ctx.fill();
    }
    ctx.beginPath();
    ctx.moveTo(texWd_x, texWd_y);
    ctx.lineTo(texWd_x+10, texWd_y-20);
    ctx.lineTo(texWd_x+20, texWd_y);
    ctx.stroke();
    }
    for(tx=0;tx<30;tx++){//extra dots
      var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
      var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
      var texWd_r = 1;
      var texWd_sA = 0;
      var texWd_eA = Math.PI*2;
    ctx.fillStyle = "Black";
    ctx.beginPath();
    ctx.arc(texWd_x, texWd_y, 1, 0, Math.PI*2);
    ctx.fill();
    }
    }
        else if(l==6){//city
          colorNow=colorNow0;
        for(tx=0;tx<10;tx++){//extra colours
          colorNow="Maroon";
          var dirColor = "add";
          if(Math.random()<0.7){dirColor="sub"}
          var colorNowH = col2Hex(colorNow);
          colorNow = shiftColor(colorNowH, changeColor, dirColor);
          colorNow = "#"+colorNow;
            var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-25));
            var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-25));
            var texWd_w = Math.round(Math.random()*20)+5;
            var texWd_h = Math.round(Math.random()*20)+5;
          ctx.fillStyle = colorNow;
        ctx.beginPath();
        ctx.rect(texWd_x, texWd_y, texWd_w, texWd_h);
        ctx.fill();
        }
        for(tx=0;tx<10;tx++){//black houses
          var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-20));
          var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-20));
          var texWd_w = Math.round(Math.random()*10)+2;
          var texWd_h = Math.round(Math.random()*10)+2;
          //var texWd_r = 1;
          ctx.fillStyle = "Maroon";
        ctx.beginPath();
        ctx.rect(texWd_x, texWd_y, 8, 6);
        ctx.fill();
        }
        for(tx=0;tx<1;tx++){//city roads
            var texWd_x = xPos +Math.round(Math.random()*(hexD));
            var texWd_y = yPos+5;//yPos +5 +Math.round(Math.random()*(hexLong*2-25));
            //var texWd_w = Math.round(Math.random()*20)+5;
            //var texWd_h = Math.round(Math.random()*20)+5;
          ctx.stokeStyle = "Maroon";
        ctx.beginPath();
        ctx.moveTo(texWd_x, texWd_y);
        ctx.lineTo(texWd_x, texWd_y+hexLong*1.5);
        ctx.stroke();
        }
        for(tx=0;tx<1;tx++){//city roads
            var texWd_x = xPos +5;
            var texWd_y = yPos+5 +Math.round(Math.random()*(hexLong));
            //var texWd_w = Math.round(Math.random()*20)+5;
            //var texWd_h = Math.round(Math.random()*20)+5;
          ctx.stokeStyle = "Maroon";
        ctx.beginPath();
        ctx.moveTo(texWd_x, texWd_y);
        ctx.lineTo(texWd_x+hexD, texWd_y);
        ctx.stroke();
        }
      //ctx.stokeStyle = "Black";
      //ctx.fillStyle = "Black";
        }
            else if(l==8){//slope  var edge1X = -50;
                  colorNow="Tan";//colorNow0;
                  ////console.log(colorNow)
                if(woodSlopesFlag){
                  colorNow="ForestGreen";
                }
                for(tx=0;tx<3;tx++){//extra colours
                  var dirColor = "add";
                  if(Math.random()<0.70){dirColor="sub"}
                  var colorNowH = col2Hex(colorNow);
                  ////console.log(colorNow)
                  colorNow = shiftColor(colorNowH, changeColor, dirColor);
                  colorNow = "#"+colorNow;
                  ////console.log(colorNow)
                    var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
                    var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
                  ctx.fillStyle = colorNow;
                  var dotSize = Math.round(Math.random()*6+3)
                ctx.beginPath();
                ctx.arc(texWd_x, texWd_y, 6, 0, Math.PI*2);
                ctx.fill();
                }
              //add texture to slope
                    for(tx=0;tx<10;tx++){//extra colours
                        var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
                        var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
                      ctx.fillStyle = "Brown";
                    ctx.beginPath();
                    ctx.arc(texWd_x, texWd_y, 2, 0, Math.PI*2);
                    ctx.fill();
                    }
                        for(tx=0;tx<18;tx++){//extra colours
                            var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
                            var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
                          ctx.fillStyle = "Black";
                        ctx.beginPath();
                        ctx.arc(texWd_x, texWd_y, 1, 0, Math.PI*2);
                        ctx.fill();
                        }
                //if woods on slope
              //  //console.log("slope:"+dumX+", "+dumY+" "+boardPos+" "+allTerrainA2[boardPos]);
                if(woodSlopesFlag){
                for(tx=0;tx<30;tx++){//curly curves
                  if(tx>15){ctx.lineWidth = "2";}
                  var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
                  var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
                  var texWd_r = Math.round(Math.random()*8)+0;
                  var texWd_sA = Math.round(Math.random()*Math.PI*2);
                  var texWd_eA = texWd_sA+Math.PI+Math.round(Math.random()*Math.PI/2);
                  ctx.strokeStyle = "Black";
                  ctx.beginPath();
                  ctx.arc(texWd_x, texWd_y, texWd_r, texWd_sA, texWd_eA);
                  ctx.stroke();
                }
                }
            }
}//end of g loop
}

/*
//draw clear hexes around edge
//down the left side
//x=0 y=0 to noYlines
if(bn%2==0){
var dumX = 0+brdSftCoX;
for(g=0;g<noYlines;g=g+2){
var dumY =  Math.round(g+brdSftCoY);
var boardPos = dumY*noXlines+dumX;
var xPos = dumX*(hexD*3);//+hexD/2;
if(dumY%2==1){xPos=xPos+(hexD/2+hexD);}
var yPos = dumY*(hexLong);//+hexLong;
if(dumY%2==1){yPos=yPos;}
ctx.beginPath();
ctx.fillStyle = "Wheat";
  var posOrgX = 1;
  var posOrgY = 1;
  var posNowX = 0;
  var posNowY = 0;
ctx.moveTo(xPos,yPos);
  for(e=0;e<7;e++){
  posNowX = xPos+hexMoveX[e];
  posNowY = yPos+hexMoveY[e];
  ctx.lineTo(posNowX,posNowY);
  }
  ctx.fill();
}}
//down the right side
//x=0 y=0 to noYlines
var dumX = noXlines-0.5+brdSftCoX;
for(g=0;g<noYlines;g=g+2){
var dumY =  Math.round(g+brdSftCoY);
var boardPos = dumY*noXlines+dumX;
var xPos = dumX*(hexD*3);//+hexD/2;
if(dumY%2==1){xPos=xPos+(hexD/2+hexD);}
var yPos = dumY*(hexLong);//+hexLong;
if(dumY%2==1){yPos=yPos;}
ctx.beginPath();
ctx.fillStyle = "Wheat";
  var posOrgX = 1;
  var posOrgY = 1;
  var posNowX = 0;
  var posNowY = 0;
ctx.moveTo(xPos,yPos);
  for(e=0;e<7;e++){
  posNowX = xPos+hexMoveX[e];
  posNowY = yPos+hexMoveY[e];
  ctx.lineTo(posNowX,posNowY);
  }
  ctx.fill();
}

//across the top side
//x=0 y=0 to noYlines
var dumY =  Math.round(1+brdSftCoY);
for(g=0;g<5;g++){
var dumX = g+brdSftCoX;
var boardPos = dumY*noXlines+dumX;
var xPos = dumX*(hexD*3);//+hexD/2;
if(dumY%2==1){xPos=xPos+(hexD/2+hexD);}
var yPos = dumY*(hexLong);//+hexLong;
if(dumY%2==1){yPos=yPos;}
ctx.beginPath();
ctx.fillStyle = "Wheat";
  var posOrgX = 1;
  var posOrgY = 1;
  var posNowX = 0;
  var posNowY = 0;
ctx.moveTo(xPos,yPos);
  for(e=0;e<7;e++){
  posNowX = xPos+hexMoveX[e];
  posNowY = yPos+hexMoveY[e];
  ctx.lineTo(posNowX,posNowY);
  }
  ctx.fill();
}
//across the bottom side
//x=0 y=0 to noYlines
var dumY =  Math.floor(noYlines-2+brdSftCoY);//-3
for(g=0;g<5;g++){
var dumX = g+brdSftCoX;//+0.5
var boardPos = dumY*noXlines+dumX;
var xPos = dumX*(hexD*3);//+hexD/2;
if(dumY%2==1){xPos=xPos+(hexD/2+hexD);}
var yPos = dumY*(hexLong);//+hexLong;
if(dumY%2==1){yPos=yPos;}
ctx.beginPath();
ctx.fillStyle = "Wheat";
  var posOrgX = 1;
  var posOrgY = 1;
  var posNowX = 0;
  var posNowY = 0;
ctx.moveTo(xPos,yPos);
  for(e=0;e<7;e++){
  posNowX = xPos+hexMoveX[e];
  posNowY = yPos+hexMoveY[e];
  ctx.lineTo(posNowX,posNowY);
  }
  ctx.fill();
}
*/

//draw hillTops from code list
//var ctx2 = canvas.getContext("2d");//2nd ctx to do hilltops
var hillTopEndFlag = false;
var hillTopALen = hillTopDir.length;
var dum6=0;
var brdEdge=0;
ctx.lineWidth = "10";
ctx.strokeStyle="Brown";
ctx.lineCap = "round";
//var yRshift = 25;//8
//var xRshift = 0;//-3
var xPos = (hillTopDir[0]+brdSftCoX)*(hexD*3)+brdEdge;//*(hexD*3)+hexD/2+xRshift;
////console.log("hill: "+hillTopDir[0]+" "+xPos);
if(hillTopDir[1]%2==1||hillTopDir[1]%2==-1){xPos = xPos+(hexD/2+hexD);}//{xPos = xPos+(hexD/2+hexD);}
var yPos = (hillTopDir[1]+brdSftCoY)*(hexLong)+brdEdge;//*(hexLong)+hexLong+yRshift;
ctx.beginPath();
ctx.moveTo(xPos, yPos);
var rL=2;
while(rL<hillTopALen){
//for(r=2;r<riverALen;r++){
if(hillTopEndFlag){//start new river
ctx.beginPath();
var xPos = (hillTopDir[rL]+brdSftCoX)*(hexD*3)+brdEdge;//*(hexD*3)+hexD/2+xRshift;
rL++;
if(hillTopDir[rL]%2==1||hillTopDir[rL]%2==-1){xPos = xPos+(hexD/2+hexD);}//{xPos = xPos+(hexD/2+hexD);}
var yPos = (hillTopDir[rL]+brdSftCoY)*(hexLong)+brdEdge;//*(hexLong)+hexLong+yRshift;
rL++;
ctx.moveTo(xPos, yPos);
hillTopEndFlag = false;
}
else{
if(hillTopDir[rL]==100){
hillTopEndFlag = true;
rL++;
ctx.stroke();
ctx.closePath();
}
else{
direction = hillTopDir[rL];
rL++;
switch (direction) {
case 1:
xPos=xPos+0.5*hexD;
yPos=yPos-hexLong;
break;
case 2:
xPos=xPos+hexD;
//yPos=yPos+hexLong;
dum6=1;
break;
case 3:
xPos=xPos+0.5*hexD;
yPos=yPos+hexLong;
dum6=2;
break;
case 4:
xPos=xPos-0.5*hexD;
yPos=yPos+hexLong;
dum6=3;
break;
case 5:
xPos=xPos-hexD;
//yPos=yPos+hexLong;
dum6=4;
break;
case 6:
xPos=xPos-0.5*hexD;
yPos=yPos-hexLong;
dum6=5;
}
//direction=riverDir[r];
ctx.lineTo(xPos, yPos);
}
}
}
//add texture to hillTops
//var ctx2 = canvas.getContext("2d");//2nd ctx to do hilltops
var hillTopEndFlag = false;
var hillTopALen = hillTopDir.length;
var xPos = (hillTopDir[0]+brdSftCoX)*(hexD*3)+brdEdge;//*(hexD*3)+hexD/2+xRshift;
if(hillTopDir[1]%2==1||hillTopDir[1]%2==-1){xPos = xPos+(hexD/2+hexD);}//{xPos = xPos+(hexD/2+hexD);}
var yPos = (hillTopDir[1]+brdSftCoY)*(hexLong)+brdEdge;//*(hexLong)+hexLong+yRshift;
var rL=2;
while(rL<hillTopALen){
//for(r=2;r<riverALen;r++){
if(hillTopEndFlag){//start new river
var xPos = (hillTopDir[rL]+brdSftCoX)*(hexD*3)+brdEdge;//*(hexD*3)+hexD/2+xRshift;
rL++;
if(hillTopDir[rL]%2==1||hillTopDir[rL]%2==-1){xPos = xPos+(hexD/2+hexD);}//{xPos = xPos+(hexD/2+hexD);}
var yPos = (hillTopDir[rL]+brdSftCoY)*(hexLong)+brdEdge;//*(hexLong)+hexLong+yRshift;
rL++;
hillTopEndFlag = false;
}
else{
if(hillTopDir[rL]==100){
hillTopEndFlag = true;
rL++;
}
else{
direction = hillTopDir[rL];
rL++;
switch (direction) {
case 1:
xPos=xPos+0.5*hexD;
yPos=yPos-hexLong;
edge1X = xPos;
edge1Y = yPos;
edge2X = xPos;
edge2Y = yPos;
edge1XE = xPos-0.5*hexD;
edge1YE = yPos+hexLong;
edge2XE = xPos-0.5*hexD;
edge2YE = yPos+hexLong;
dum6=1;
break;
case 2:
xPos=xPos+hexD;
//yPos=yPos+hexLong;
edge1X=xPos;
edge1Y=yPos+0.5*hexLong;
edge1XE=xPos-hexD;
edge1YE=yPos-0.5*hexLong;
edge2X=xPos;
edge2Y=yPos+0.5*hexLong;
edge2XE=xPos-hexD;
edge2YE=yPos-0.5*hexLong;
dum6=2;
break;
case 3:
xPos=xPos+0.5*hexD;
yPos=yPos+hexLong;
edge1X = xPos;
edge1Y = yPos;
edge2X = xPos;
edge2Y = yPos;
edge1XE = xPos-0.5*hexD;
edge1YE = yPos-hexLong;
edge2XE = xPos-0.5*hexD;
edge2YE = yPos-hexLong;
dum6=3;
break;
case 4:
xPos=xPos-0.5*hexD;
yPos=yPos+hexLong;
edge1X = xPos;
edge1Y = yPos;
edge2X = xPos;
edge2Y = yPos;
edge1XE = xPos+0.5*hexD;
edge1YE = yPos-hexLong;
edge2XE = xPos+0.5*hexD;
edge2YE = yPos-hexLong;
dum6=4;
break;
case 5:
xPos=xPos-hexD;
//yPos=yPos+hexLong;
edge1X = xPos;
edge1Y=  yPos+0.5*hexLong;
edge2X = xPos;
edge2Y = yPos+0.5*hexLong;
edge1XE=xPos+hexD;
edge1YE=yPos-0.5*hexLong;
edge2XE=xPos+hexD;
edge2YE=yPos-0.5*hexLong;
dum6=5;
break;
case 6:
xPos=xPos-0.5*hexD;
yPos=yPos-hexLong;
edge1X = xPos;
edge1Y = yPos;
edge2X = xPos;
edge2Y = yPos;
edge1XE = xPos+0.5*hexD;
edge1YE = yPos+hexLong;
edge2XE = xPos+0.5*hexD;
edge2YE = yPos+hexLong;
dum6=6;
}
//direction=riverDir[r];
//texture to edges
var splodgeX = 0;
var splodgeY = 0;
for(sp=0;sp<12;sp++){
var splodgeX = Math.round(Math.random()*(edge1X-edge1XE)+edge1XE);//(edge1X+edge1XE)/2;
var splodgeY = Math.round(Math.random()*(edge1Y-edge1YE)+edge1YE);//(edge1Y+edge1YE)/2;
ctx.beginPath();
ctx.fillStyle = "Brown";//terrain1Col;
ctx.arc(splodgeX, splodgeY, 2, 0, Math.PI*2);
ctx.fill();
ctx.closePath();}
for(sp=0;sp<15;sp++){
var splodgeX = Math.round(Math.random()*(edge1X-edge1XE)+edge1XE);//(edge1X+edge1XE)/2;
var splodgeY = Math.round(Math.random()*(edge1Y-edge1YE)+edge1YE);//(edge1Y+edge1YE)/2;
ctx.beginPath();
ctx.fillStyle = "Black";//terrain1Col;
ctx.arc(splodgeX, splodgeY, 1, 0, Math.PI*2);
ctx.fill();
ctx.closePath();}
//COLOR IN THE EDGE2
/*ctx.beginPath();
ctx.strokeStyle = "Brown";//terrain1Col;
ctx.lineWidth = "10";
ctx.moveTo(edge2X,edge2Y);
ctx.lineTo(edge2XE,edge2YE);
ctx.stroke();
ctx.closePath();*/
for(sp=0;sp<12;sp++){
var splodgeX = Math.round(Math.random()*(edge1X-edge1XE)+edge1XE);//(edge1X+edge1XE)/2;
var splodgeY = Math.round(Math.random()*(edge1Y-edge1YE)+edge1YE);//(edge1Y+edge1YE)/2;
ctx.beginPath();
ctx.fillStyle = "Brown";//terrain1Col;
ctx.arc(splodgeX, splodgeY, 1, 0, Math.PI*2);
ctx.fill();
ctx.closePath();}
for(sp=0;sp<7;sp++){
//var splodgeX = Math.round(Math.random()*(edge2X-edge2XE)+edge2XE);//(edge1X+edge1XE)/2;
//var splodgeY = Math.round(Math.random()*(edge2Y-edge2YE)+edge2YE);//(edge1Y+edge1YE)/2;
var splodgeX = Math.round(Math.random()*(edge1X-edge1XE)+edge1XE);//(edge1X+edge1XE)/2;
var splodgeY = Math.round(Math.random()*(edge1Y-edge1YE)+edge1YE);//(edge1Y+edge1YE)/2;
ctx.beginPath();
ctx.fillStyle = "Black";//terrain1Col;
ctx.arc(splodgeX, splodgeY, 2, 0, Math.PI*2);
ctx.fill();
ctx.closePath();}

for(sp=0;sp<2;sp++){
//var splodgeX = Math.round(Math.random()*(edge2X-edge2XE)+edge2XE);//(edge1X+edge1XE)/2;
//var splodgeY = Math.round(Math.random()*(edge2Y-edge2YE)+edge2YE);//(edge1Y+edge1YE)/2;
var splodgeX = Math.round(Math.random()*((edge1X)-(edge1XE))+(edge1XE));//(edge1X+edge1XE)/2;
var splodgeY = Math.round(Math.random()*((edge1Y)-(edge1YE))+(edge1YE));//(edge1Y+edge1YE)/2;
ctx.strokeStyle = "Brown";//terrain1Col;
ctx.lineWidth = "2";
ctx.setLineDash([5, 5]);
var lineLen = Math.round(Math.random()*(hexD/2)+hexD/6);//(edge1X+edge1XE)/2;
ctx.beginPath();
if(dum6==2||dum6==5){
  ctx.moveTo(splodgeX,yPos-lineLen);
  ctx.lineTo(splodgeX,yPos+lineLen);
}
else if(dum6==3||dum6==6){
  ctx.moveTo(splodgeX+lineLen*0.87,splodgeY-lineLen*0.5);
  ctx.lineTo(splodgeX-lineLen*0.87,splodgeY+lineLen*0.5);
}
else{
  ctx.moveTo(splodgeX-lineLen*0.87,splodgeY-lineLen*0.5);
  ctx.lineTo(splodgeX+lineLen*0.87,splodgeY+lineLen*0.5);
}
ctx.stroke();
ctx.closePath();}
ctx.setLineDash([]);
ctx.strokeStyle = "Black";//terrain1Col;
}
}
}

//add the 2 half-wood hexes
/*
var dumY =  Math.round(1+brdSftCoY);
var dumX = 1+brdSftCoX;
if(bn%2==1){dumX = 3+brdSftCoX;}
var boardPos = dumY*noXlines+dumX;
var xPos = dumX*(hexD*3);//+hexD/2;
if(dumY%2==1){xPos=xPos+(hexD/2+hexD);}
var yPos = dumY*(hexLong);//+hexLong;
if(dumY%2==1){yPos=yPos;}
ctx.beginPath();
ctx.fillStyle = "LimeGreen";
colorNow = "LimeGreen";
  var posOrgX = 1;
  var posOrgY = 1;
  var posNowX = 0;
  var posNowY = 0;
ctx.moveTo(xPos,yPos);
  for(e=0;e<7;e++){
  posNowX = xPos+hexMoveX[e];
  posNowY = yPos+hexMoveY[e];
  ctx.lineTo(posNowX,posNowY);
  }
  ctx.fill();

  //woods n wooded hills
   for(tx=0;tx<10;tx++){//extra colours
     var dirColor = "add";
     if(Math.random()<0.4){dirColor="sub"}
     var colorNowH = col2Hex(colorNow);
     colorNow = shiftColor(colorNowH, changeColor, dirColor);
     colorNow = "#"+colorNow;
       var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
       var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
     ctx.fillStyle = colorNow;
   ctx.beginPath();
   ctx.arc(texWd_x, texWd_y, 10, 0, Math.PI*2);
   ctx.fill();
   }
   for(tx=0;tx<30;tx++){//curly curves
     if(tx>15){ctx.lineWidth = "2";}
     var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
     var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
     var texWd_r = Math.round(Math.random()*8)+0;
     var texWd_sA = Math.round(Math.random()*Math.PI*2);
     var texWd_eA = texWd_sA+Math.PI+Math.round(Math.random()*Math.PI/2);
     ctx.strokeStyle = "Black";
     ctx.beginPath();
     ctx.arc(texWd_x, texWd_y, texWd_r, texWd_sA, texWd_eA);
     ctx.stroke();
   }
   for(tx=0;tx<20;tx++){//extra dots
     var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
     var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
     var texWd_r = 1;
     var texWd_sA = 0;
     var texWd_eA = Math.PI*2;
   ctx.beginPath();
   ctx.arc(texWd_x, texWd_y, 1, 0, Math.PI*2);
   ctx.stroke();
   }
  var dumY =  Math.round(35+brdSftCoY);
  var dumX = 3+brdSftCoX;
  if(bn%2==1){dumX =  1+brdSftCoX;}
  var boardPos = dumY*noXlines+dumX;
  var xPos = dumX*(hexD*3);//+hexD/2;
  if(dumY%2==1){xPos=xPos+(hexD/2+hexD);}
  var yPos = dumY*(hexLong);//+hexLong;
  if(dumY%2==1){yPos=yPos;}
  ctx.beginPath();
  ctx.fillStyle = "LimeGreen";
  colorNow = "LimeGreen";
    var posOrgX = 1;
    var posOrgY = 1;
    var posNowX = 0;
    var posNowY = 0;
  ctx.moveTo(xPos,yPos);
    for(e=0;e<7;e++){
    posNowX = xPos+hexMoveX[e];
    posNowY = yPos+hexMoveY[e];
    ctx.lineTo(posNowX,posNowY);
    }
    ctx.fill();
    //woods n wooded hills
     for(tx=0;tx<10;tx++){//extra colours
       var dirColor = "add";
       if(Math.random()<0.4){dirColor="sub"}
       var colorNowH = col2Hex(colorNow);
       colorNow = shiftColor(colorNowH, changeColor, dirColor);
       colorNow = "#"+colorNow;
         var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
         var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
       ctx.fillStyle = colorNow;
     ctx.beginPath();
     ctx.arc(texWd_x, texWd_y, 10, 0, Math.PI*2);
     ctx.fill();
     }
     for(tx=0;tx<30;tx++){//curly curves
       if(tx>15){ctx.lineWidth = "2";}
       var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
       var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
       var texWd_r = Math.round(Math.random()*8)+0;
       var texWd_sA = Math.round(Math.random()*Math.PI*2);
       var texWd_eA = texWd_sA+Math.PI+Math.round(Math.random()*Math.PI/2);
       ctx.strokeStyle = "Black";
       ctx.beginPath();
       ctx.arc(texWd_x, texWd_y, texWd_r, texWd_sA, texWd_eA);
       ctx.stroke();
     }
     for(tx=0;tx<20;tx++){//extra dots
       var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
       var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
       var texWd_r = 1;
       var texWd_sA = 0;
       var texWd_eA = Math.PI*2;
     ctx.beginPath();
     ctx.arc(texWd_x, texWd_y, 1, 0, Math.PI*2);
     ctx.stroke();
     }
*/
//****************************************************************
//RIVERS ON HEXSIDES
//****************************************************************

//draw rivers from lakes
//var riverFlag = true;
/*
var direction = 0;
var turnD = 1;
if(Math.random()<0.5){turnD = -1;}
for(h=0;h<2;h++){
for(g=0;g<(terrainANum[3]+terrainANum[5]);g++){
var riverFlag = true;
var dum6 = Math.ceil(Math.random()*6);
dum6=6;
var turnLR = 0;//0 = left 1 = right
if(Math.random()<0.5){turnLR = 1;}
var turnProb = 0.4;
var corner=1;
direction = 6;//dum6;
if(g==0){
  ctx.lineWidth = "12";}
else{
    ctx.lineWidth = "6";}
  ctx.strokeStyle="Blue";
  var xPos = lakeX[g]*(hexD*3);//+hexD/2;
  if(lakeY[g]%2==1){xPos = xPos+(hexD/2+hexD);}
  var yPos = lakeY[g]*(hexLong);//+hexLong;
  ctx.beginPath();
  ctx.moveTo(xPos, yPos);
  dumX=Math.round(xPos/(hexD*3));
  dumY=Math.round(yPos/(hexLong));
  allTerrainA[dumY*noXlines+dumX]=1*allTerrainA[dumY*noXlines+dumX]+10;
  while(riverFlag){
    switch (direction) {
case 1:
if(turnLR==0||Math.random()<turnProb){//corner==1
  xPos=xPos+0.5*hexD;
  yPos=yPos+hexLong;
  dum6=2;
  turnLR=1;}
else{
  xPos=xPos+0.5*hexD;
  yPos=yPos-hexLong;
  dum6=6;
  turnLR=0;}
  break;
case 2:
if(turnLR==1||Math.random()<turnProb){//corner==1
  xPos=xPos+hexD;
  //yPos=yPos+hexLong;
  dum6=1;
  turnLR=0;}
else{
  xPos=xPos-0.5*hexD;
  yPos=yPos+hexLong;
  dum6=3;
  turnLR=1;}
  break;
case 3:
if(turnLR==1||Math.random()<turnProb){//corner==1
  xPos=xPos+0.5*hexD;
  yPos=yPos+hexLong;
  dum6=2;
  turnLR=0;}
else{
  xPos=xPos-hexD;
  //yPos=yPos-hexLong;
  dum6=4;
  turnLR=1;}
  break;
case 4:
if(turnLR==1||Math.random()<turnProb){//corner==1
  xPos=xPos-0.5*hexD;
  yPos=yPos+hexLong;
  dum6=3;
  turnLR=0;}
else{
  xPos=xPos-0.5*hexD;
  yPos=yPos-hexLong;
  dum6=5;
  turnLR=1;}
  break;
case 5:
if(turnLR==1||Math.random()<turnProb){//corner==1
  xPos=xPos-hexD;
  //yPos=yPos+hexLong;
  dum6=4;
  turnLR=0;}
else{
  xPos=xPos+0.5*hexD;
  yPos=yPos-hexLong;
  dum6=6;
  turnLR=1;}
  break;
case 6:
if(turnLR==0||Math.random()<turnProb){//corner==1
  xPos=xPos+hexD;
  //yPos=yPos+hexLong;
  dum6=1;
  turnLR=1;}
else{
  xPos=xPos-0.5*hexD;
  yPos=yPos-hexLong;
  dum6=5;
  turnLR=0;}
}
  direction=dum6;
    ctx.lineTo(xPos, yPos);
  //if(xPos<0||yPos<0||xPos>canvW||yPos>canvH||Math.random()<0.02){
  if(xPos<0||yPos<0||xPos>canvW||yPos>canvH||Math.random()<0.05||allTerrainA[dumY*noXlines+dumX]>39){
    riverFlag=false;
    //alert(""+allTerrainA[dumY*noXlines+dumX]);
  }
  else{  }
  }
  ctx.stroke();
  }
}

//draw rivers from mountains
//var riverFlag = true;
var direction = 0;
var turnD = 1;
if(Math.random()<0.5){turnD = -1;}
for(g=0;g<terrainANum[0];g++){
var riverFlag = true;
var dum6 = Math.ceil(Math.random()*6);
dum6=6;
var turnLR = 0;//0 = left 1 = right
if(Math.random()<0.5){turnLR = 1;}
var turnProb = 0.5;
var corner=1;
direction = 6;//dum6;
  ctx.lineWidth = "6";
  ctx.strokeStyle="Blue";
  var xPos = mountX[g]*(hexD*3);//+hexD/2;
  if(mountY[g]%2==1){xPos = xPos+(hexD/2+hexD);}
  var yPos = mountY[g]*(hexLong);//+hexLong;
  var xPos0 = xPos+hexD/2;
  var yPos0 = yPos+hexLong;
  ctx.beginPath();
  ctx.moveTo(xPos0, yPos0);
  dumX=Math.round(xPos/(hexD*3));
  dumY=Math.round(yPos/(hexLong));
  allTerrainA[dumY*noXlines+dumX]=1*allTerrainA[dumY*noXlines+dumX]+10;
  while(riverFlag){
    switch (direction) {
case 1:
if(turnLR==0||Math.random()<turnProb){//corner==1
  xPos=xPos+0.5*hexD;
  yPos=yPos+hexLong;
  dum6=2;
  turnLR=1;}
else{
  xPos=xPos+0.5*hexD;
  yPos=yPos-hexLong;
  dum6=6;
  turnLR=0;}
  break;
case 2:
if(turnLR==1||Math.random()<turnProb){//corner==1
  xPos=xPos+hexD;
  //yPos=yPos+hexLong;
  dum6=1;
  turnLR=0;}
else{
  xPos=xPos-0.5*hexD;
  yPos=yPos+hexLong;
  dum6=3;
  turnLR=1;}
  break;
case 3:
if(turnLR==1||Math.random()<turnProb){//corner==1
  xPos=xPos+0.5*hexD;
  yPos=yPos+hexLong;
  dum6=2;
  turnLR=0;}
else{
  xPos=xPos-hexD;
  //yPos=yPos-hexLong;
  dum6=4;
  turnLR=1;}
  break;
case 4:
if(turnLR==1||Math.random()<turnProb){//corner==1
  xPos=xPos-0.5*hexD;
  yPos=yPos+hexLong;
  dum6=3;
  turnLR=0;}
else{
  xPos=xPos-0.5*hexD;
  yPos=yPos-hexLong;
  dum6=5;
  turnLR=1;}
  break;
case 5:
if(turnLR==1||Math.random()<turnProb){//corner==1
  xPos=xPos-hexD;
  //yPos=yPos+hexLong;
  dum6=4;
  turnLR=0;}
else{
  xPos=xPos+0.5*hexD;
  yPos=yPos-hexLong;
  dum6=6;
  turnLR=1;}
  break;
case 6:
if(turnLR==0||Math.random()<turnProb){//corner==1
  xPos=xPos+hexD;
  //yPos=yPos+hexLong;
  dum6=1;
  turnLR=1;}
else{
  xPos=xPos-0.5*hexD;
  yPos=yPos-hexLong;
  dum6=5;
  turnLR=0;}
}
    direction=dum6;
    ctx.lineTo(xPos, yPos);
    dumX=Math.round(xPos/(hexD*3));
    dumY=Math.round(yPos/(hexLong));
    allTerrainA[dumY*noXlines+dumX]=1*allTerrainA[dumY*noXlines+dumX]+10;
  //if(xPos<0||yPos<0||xPos>canvW||yPos>canvH||Math.random()<0.02){
  if(xPos<0||yPos<0||xPos>canvW||yPos>canvH||Math.random()<0.05||allTerrainA[dumY*noXlines+dumX]>39){
    riverFlag=false;
  }
  else{  }
  }
  ctx.stroke();
  }
*/

  //*********************************************
  //END RIVERS THRU HEXSIDES
  //*******************************************

//*****************************************************
//RIVERS THRU HEXs
//*****************************************************

//draw rivers from code list

var riverCOX1 = new Array();
var riverCOY1 = new Array();
for(c=0;c<riverCOX.length;c++){
  riverCOX1[c]=riverCOX[c]+brdSftCoX;
  riverCOY1[c]=Math.round(riverCOY[c]+brdSftCoY);
}
var riverEndFlag = false;
var riverALen = riverCOX.length;
  ctx.lineWidth = "15";
  ctx.strokeStyle="Blue";
  ctx.lineCap = "round";
  var yRshift = 14;
  var xRshift = -3;
  var xPos = riverCOX1[0]*(hexD*3)+hexD/2+xRshift;
  if(Math.abs(riverCOY[0])%2==1){xPos = xPos+(hexD/2+hexD);}
  var yPos = riverCOY1[0]*(hexLong)+hexLong+yRshift;
  ctx.beginPath();
  ctx.moveTo(xPos, yPos);
  for(r=1;r<riverALen;r++){
  if(riverEndFlag){//start new river
  ctx.beginPath();
  var xPos = riverCOX1[r]*(hexD*3)+hexD/2+xRshift;
  if(Math.abs(riverCOY[r])%2==1){xPos = xPos+(hexD/2+hexD);}
  var yPos = riverCOY1[r]*(hexLong)+hexLong+yRshift;
  ctx.moveTo(xPos, yPos);
  riverEndFlag = false;
  }
  else{
    if(riverCOX[r]==100){riverEndFlag = true;
    ctx.stroke();
    ctx.closePath();
    }
    else{
    var xPos = riverCOX1[r]*(hexD*3)+hexD/2+xRshift;
    if(Math.abs(riverCOY[r])%2==1){xPos = xPos+(hexD/2+hexD);}
    var yPos = riverCOY1[r]*(hexLong)+hexLong+yRshift;
    ctx.lineTo(xPos, yPos);
    //if(r==3){//console.log("xPos="+xPos+" flipBrdNoBX="+flipBrdNoBX+" shiftX="+shiftX+" riverCOX[r]="+riverCOX[r]+" r="+r);}
      }}
}
//ctx.stroke();
//ctx.closePath();

//draw bridge from code dumCountList
var bridgeEndFlag = false;
var bridgeStartEnd = 0;
var bridgeCount = 0;
var bridgeALen = fordCOX.length;
var brdEdge = 0;
  ctx.lineWidth = "18";
  ctx.strokeStyle="Black";
  var xLastshift = 0;//8
  var yLastshift = 0;//8
  ////console.log(fordCOX[0]);
  while(bridgeCOX[bridgeStartEnd]!=100){
  var yRdshift = -10;//8
  var xRdshift = 0;//-3

  if(bridgeCOX[bridgeStartEnd]==bridgeCOX[bridgeStartEnd+1]){
  var yRdshift = 0;//8
  yLastshift = bridgeCOX[bridgeStartEnd+2]*20;//this is not a coord but the shift to the bridge, so can mix x and y
  ////console.log("yLastshift:"+yLastshift);
  xLastshift = 0;
  }
  else if(bridgeCOX[bridgeStartEnd]>bridgeCOX[bridgeStartEnd+1]){
  //var yRdshift = 0;//8
  yLastshift = bridgeCOX[bridgeStartEnd+2]*6;
  xLastshift = bridgeCOX[bridgeStartEnd+2]*-12;
  }
  else{//if(bridgeCOX[bridgeStartEnd]<bridgeCOX[bridgeStartEnd+1])
  //var yRdshift = 0;//8
  yLastshift = bridgeCOX[bridgeStartEnd+2]*6;
  xLastshift = bridgeCOX[bridgeStartEnd+2]*12;
  }
    //ctx.lineWidth = "30";
    //ctx.strokeStyle="Tan";
  var xPos = (bridgeCOX[bridgeStartEnd]+brdSftCoX)*(hexD*3)+hexD/2+xRdshift;
  ////console.log(""+bridgeCOX[bridgeStartEnd]+" "+xPos);
  ////console.log(hexD+" "+xPos);
  if(bridgeCOY[bridgeStartEnd]%2==1){xPos = xPos+(hexD/2+hexD);}
  var yPos = (bridgeCOY[bridgeStartEnd]+brdSftCoY)*(hexLong)+hexLong;//+yRdshift;
  ////console.log("bridge xPos="+xPos);
  var xPos2 = (bridgeCOX[bridgeStartEnd+1]+brdSftCoX)*(hexD*3)+hexD/2+xRdshift;
  ////console.log(hexD+" "+xPos);
  if(bridgeCOY[bridgeStartEnd+1]%2==1){xPos2 = xPos2+(hexD/2+hexD);}
  var yPos2 = (bridgeCOY[bridgeStartEnd+1]+brdSftCoY)*(hexLong)+hexLong;//+yRdshift;
  /*
    var xPos3 = (2*xPos+xPos2)/3+xLastshift;
    var xPos4 = (xPos+2*xPos2)/3+xLastshift;
    var yPos3 = (2*yPos+yPos2)/3+yRdshift+yLastshift;
    var yPos4 = (yPos+2*yPos2)/3+yRdshift+yLastshift;
    */

  var xPos3 = (1.5*xPos+xPos2)/2.5+xLastshift;
  var xPos4 = (xPos+1.5*xPos2)/2.5+xLastshift;
  var yPos3 = (1.5*yPos+yPos2)/2.5+yRdshift+yLastshift;
  var yPos4 = (yPos+1.5*yPos2)/2.5+yRdshift+yLastshift;

  ctx.beginPath();
  ctx.moveTo(xPos3, yPos3);
  ctx.lineTo(xPos4, yPos4);
  ctx.stroke();
  ctx.closePath();
      ctx.strokeStyle = "Black";
  bridgeStartEnd++;bridgeStartEnd++;bridgeStartEnd++;}


  //draw fords from code dumCountList
  ctx.globalAlpha = 0.7;
  var fordEndFlag = false;
  var fordStartEnd = 0;
  var fordCount = 0;
  var fordALen = fordCOX.length;
    ctx.lineWidth = "30";
    ctx.strokeStyle="Tan";
    var yRdshift = 0;//8
    var xRdshift = 0;//-3
    ////console.log(fordCOX[0]);
    while(fordCOX[fordStartEnd]!=100){
      ctx.lineWidth = "30";
      ctx.strokeStyle="Tan";
    var xPos = (fordCOX[fordStartEnd]+brdSftCoX)*(hexD*3)+hexD/2+brdEdge+xRdshift;
    ////console.log(hexD+" "+xPos);
    if(fordCOY[fordStartEnd]%2==1){xPos = xPos+(hexD/2+hexD);}
    var yPos = (fordCOY[fordStartEnd]+brdSftCoY)*(hexLong)+hexLong+brdEdge+yRdshift;//start of ford
    var xPos2 = (fordCOX[fordStartEnd+1]+brdSftCoX)*(hexD*3)+hexD/2+brdEdge+xRdshift;//end of ford
    ////console.log(hexD+" "+xPos);
    if(fordCOY[fordStartEnd+1]%2==1){xPos2 = xPos2+(hexD/2+hexD);}
    var yPos2 = (fordCOY[fordStartEnd+1]+brdSftCoY)*(hexLong)+hexLong+brdEdge+yRdshift;
    var xPos3 = (2*xPos+xPos2)/3;
    var xPos4 = (xPos+2*xPos2)/3;
    var yPos3 = (2*yPos+yPos2)/3;
    var yPos4 = (yPos+2*yPos2)/3;
    ctx.beginPath();
    ctx.moveTo(xPos3, yPos3);
    ctx.lineTo(xPos4, yPos4);
    ctx.stroke();
    ctx.closePath();
    var spx = 0;
    var spy = 0;
    var tiltFlag = 1;
    var spyFlag = 0;
    if(fordCOX[fordStartEnd]==fordCOX[fordStartEnd+1]){//vertical
      tiltFlag = 1;
    }
    else if(fordCOX[fordStartEnd]<fordCOX[fordStartEnd+1]){//down to the left ie\\
      tiltFlag = 3;
    }
    else{//down to the left ie//  if(fordCOY[fordStartEnd]>fordCOX[fordStartEnd+1])
      tiltFlag = 2;
    }
    for(sp=-15;sp<16;sp=sp+5){
      if(tiltFlag==1){spx=sp;spy=0;}
      else if(tiltFlag==2){spx=sp;spy=sp;}
      else{spx=sp;spy=-1*sp;}//(tiltFlag==3)
        var splodgeX = (fordCOX[fordStartEnd]+brdSftCoX)*(hexD*3)+hexD/2+brdEdge+spx;
        if(fordCOY[fordStartEnd]%2==1){splodgeX = splodgeX+(hexD/2+hexD);}
        var splodgeY = (fordCOY[fordStartEnd]+brdSftCoY)*(hexLong)+hexLong+brdEdge+spy;
        var splodgeX2 = (fordCOX[fordStartEnd+1]+brdSftCoX)*(hexD*3)+hexD/2+brdEdge+spx;
        if(fordCOY[fordStartEnd+1]%2==1){splodgeX2 = splodgeX2+(hexD/2+hexD);}
        var splodgeY2 = (fordCOY[fordStartEnd+1]+brdSftCoY)*(hexLong)+hexLong+brdEdge+spy/2;
        var lineLen = Math.round(Math.random()*8+2);
        var lineWid = Math.round(Math.random()*2+1);//(edge1X+edge1XE)/2;
        if(Math.random()<0.33){
        var splodgeX3 = (2*splodgeX+splodgeX2)/3;
        var splodgeX4 = (splodgeX+2*splodgeX2)/3;
        var splodgeY3 = (2*splodgeY+splodgeY2)/3;
        var splodgeY4 = (splodgeY+2*splodgeY2)/3;}
        else if(Math.random()<0.5){
        var splodgeX3 = (3*splodgeX+splodgeX2)/4;
        var splodgeX4 = (splodgeX+3*splodgeX2)/4;
        var splodgeY3 = (3*splodgeY+splodgeY2)/4;
        var splodgeY4 = (splodgeY+3*splodgeY2)/4;}
        else{
        var splodgeX3 = (1.5*splodgeX+splodgeX2)/2.5;
        var splodgeX4 = (splodgeX+1.5*splodgeX2)/2.5;
        var splodgeY3 = (1.5*splodgeY+splodgeY2)/2.5;
        var splodgeY4 = (splodgeY+1.5*splodgeY2)/2.5;}
        /*else{
        var splodgeX3 = (1.5*splodgeX+splodgeX2)/2.5;
        var splodgeX4 = (splodgeX+1.5*splodgeX2)/2.5;
        var splodgeY3 = (1.5*splodgeY+splodgeY2)/2.5;
        var splodgeY4 = (splodgeY+1.5*splodgeY2)/2.5;}*/
        if(Math.random()<0.33){
        ctx.strokeStyle = "Brown";}
        else if(Math.random()<0.5){
        ctx.strokeStyle = "Black";}
        else{
        ctx.strokeStyle = "Olive";}
        ctx.lineWidth = ""+lineWid;//"2";
        ctx.setLineDash([lineLen, lineLen]);
        //var lineLen = Math.round(Math.random()*(hexD/2)+hexD/6);//(edge1X+edge1XE)/2;
        ctx.beginPath();
          ctx.moveTo(splodgeX3,splodgeY3);
          ctx.lineTo(splodgeX4,splodgeY4);
        ctx.stroke();
        ctx.closePath();}
        ctx.setLineDash([]);
        ctx.strokeStyle = "Black";
        ctx.globalAlpha = 1;
    //********NEEDS WORK
      for(sp2=0;sp2<10;sp2++){
    //var splodgeX = Math.round(Math.random()*(edge2X-edge2XE)+edge2XE);//(edge1X+edge1XE)/2;
    //var splodgeY = Math.round(Math.random()*(edge2Y-edge2YE)+edge2YE);//(edge1Y+edge1YE)/2;
    var puddleSize = Math.floor(sp2/3)+1;
    //var edge1X = (fordCOX[fordStartEnd]+fordCOX[fordStartEnd+1])/2*(hexD*3)+hexD/2+brdEdge;//-hexLong;
    ////console.log(""+fordCOX[fordStartEnd]+" "+edge1X);
    //var edge1XE = edge1X+hexLong*2;
    //var edge1Y = (fordCOY[fordStartEnd]+fordCOY[fordStartEnd+1])/2*(hexLong)+hexLong+brdEdge;//-hexLong;
    //var edge1YE = edge1Y+hexLong*2;
    var edge1X = (xPos+xPos2)/2-hexD/2;//-hexLong;
    var edge1XE = edge1X+hexD;
    var edge1Y = (yPos+yPos2)/2-hexLong/2;//-hexLong;
    var edge1YE = edge1Y+hexLong;
    var splodgeXd = Math.round(Math.random()*(hexD)+edge1X);//(edge1X+edge1XE)/2;
    var splodgeYd = Math.round(Math.random()*(hexLong)+edge1Y);//(edge1Y+edge1YE)/2;
    //var splodgeXd = Math.round(Math.random()*(edge1XE-edge1X)+edge1X);//(edge1X+edge1XE)/2;
    //var splodgeYd = Math.round(Math.random()*(edge1YE-edge1Y)+edge1Y);//(edge1Y+edge1YE)/2;
    ctx.beginPath();
    ctx.fillStyle = "Blue";//terrain1Col;
    ctx.arc(splodgeXd, splodgeYd, puddleSize, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();}

    fordStartEnd++;fordStartEnd++;
    ctx.globalAlpha = 0.7;
    }
    ctx.globalAlpha = 1;

//draw roads from code dumCountList

var roadCOX1 = new Array();
var roadCOY1 = new Array();
for(c=0;c<roadCOX.length;c++){
  roadCOX1[c]=roadCOX[c]+brdSftCoX;
  roadCOY1[c]=Math.round(roadCOY[c]+brdSftCoY);
}
var roadEndFlag = false;
var roadALen = roadCOX.length;
  ctx.lineWidth = "10";
  ctx.strokeStyle="Yellow";
  var yRdshift = -10;//8
  var xRdshift = 0;//-3
  var xPos = roadCOX1[0]*(hexD*3)+hexD/2+xRdshift;
  if(roadCOY1[0]%2==1||roadCOY1[0]%2==-1){xPos = xPos+(hexD/2+hexD);}
  ////console.log("road xPos="+xPos);
  var yPos = roadCOY1[0]*(hexLong)+hexLong+yRdshift;
  ctx.beginPath();
  ctx.moveTo(xPos, yPos);
  for(r=1;r<roadALen;r++){
  if(roadEndFlag){//start new road
  ctx.beginPath();
  var xPos = roadCOX1[r]*(hexD*3)+hexD/2+xRdshift;
  if(roadCOY[r]%2==1||roadCOY[r]%2==-1){xPos = xPos+(hexD/2+hexD);}
  var yPos = roadCOY1[r]*(hexLong)+hexLong+yRdshift;
  ctx.moveTo(xPos, yPos);
  roadEndFlag = false;
  }
  else{
    if(roadCOX[r]==100){roadEndFlag = true;
    ctx.stroke();
    ctx.closePath();
    }
    else{
    var xPos = roadCOX1[r]*(hexD*3)+hexD/2+xRdshift;
    if(roadCOY[r]%2==1||roadCOY[r]%2==-1){xPos = xPos+(hexD/2+hexD);}
    var yPos = roadCOY1[r]*(hexLong)+hexLong+yRdshift;
  ctx.lineTo(xPos, yPos);
  }}
}

var roadCOX1 = new Array();
var roadCOY1 = new Array();
for(c=0;c<roadCOX.length;c++){
  roadCOX1[c]=roadCOX[c]+brdSftCoX;
  roadCOY1[c]=Math.round(roadCOY[c]+brdSftCoY);
}
var roadEndFlag = false;
var roadALen = roadCOX.length;
  ctx.lineWidth = "2";
  ctx.strokeStyle="SandyBrown";//"Black";
  var yRdshift = -10;//8
  var xRdshift = 0;//-3
  ctx.setLineDash([10, 10]);
  var xPos = roadCOX1[0]*(hexD*3)+hexD/2+xRdshift;
  if(roadCOY1[0]%2==1||roadCOY1[0]%2==-1){xPos = xPos+(hexD/2+hexD);}
  var yPos = roadCOY1[0]*(hexLong)+hexLong+yRdshift;
  ctx.beginPath();
  ctx.moveTo(xPos, yPos);
  for(r=1;r<roadALen;r++){
  if(roadEndFlag){//start new road
  ctx.beginPath();
  var xPos = roadCOX1[r]*(hexD*3)+hexD/2+xRdshift;
  if(roadCOY[r]%2==1||roadCOY[r]%2==-1){xPos = xPos+(hexD/2+hexD);}
  var yPos = roadCOY1[r]*(hexLong)+hexLong+yRdshift;
  ctx.moveTo(xPos, yPos);
  roadEndFlag = false;
  }
  else{
    if(roadCOX[r]==100){roadEndFlag = true;
    ctx.stroke();
    ctx.closePath();
    }
    else{
    var xPos = roadCOX1[r]*(hexD*3)+hexD/2+xRdshift;
    if(roadCOY[r]%2==1||roadCOY[r]%2==-1){xPos = xPos+(hexD/2+hexD);}
    var yPos = roadCOY1[r]*(hexLong)+hexLong+yRdshift;
  ctx.lineTo(xPos, yPos);
  }}
}
ctx.setLineDash([0]);
//END OF ROADS code

//iconHexes
var namedALen = iconHexes.length;
for(nh=0;nh<namedALen;nh=nh+3){
ctx.font = "48px Arial";
ctx.fillStyle = "Black";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.lineWidth = "2";
var dumX = iconHexes[nh+1];
var dumY = iconHexes[nh+2];
var xPos = (dumX+brdSftCoX)*(hexD*3)+brdEdge;//Math.floor(dumX*(hexD*3)+brdEdge);//+hexD/2;
if(dumY%2==1){xPos=xPos+(hexD/2+hexD);}
var yPos = (dumY+brdSftCoY)*(hexLong)+brdEdge;//Math.floor(dumY*(hexLong)+brdEdge);//+hexLong;
var posNowX = xPos+hexD/2;
var posNowY = yPos+hexLong;
//ctx.arc(posNowX,posNowY, 10, 0, Math.PI*2);
//ctx.fillStyle = "Red";
//ctx.fill();
//ctx.closePath();
var rotateText=false;//set to ture it rotates clockwise
ctx.beginPath();
ctx.fillStyle = "Black";
if(rotateText){
ctx.save()
var rad = 90 * Math.PI / 180;
ctx.translate(posNowX+0,posNowY+0);
//ctx.translate(posNowX+hexD,posNowY+hexLong);
ctx.rotate(rad);
ctx.fillText(""+iconHexes[nh],0,0);
//ctx.fillText(""+namedHexes[nh],0,-hexLong/2);
ctx.restore();}
else{
ctx.fillText(""+iconHexes[nh],posNowX,posNowY);
}
}

//namedHexes
var namedALen = namedHexes.length;
var brdEdge = 0;
for(nh=0;nh<namedALen;nh=nh+3){
ctx.font = "48px Arial";
ctx.fillStyle = "Red";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.lineWidth = "2";
var dumX = namedHexes[nh+1];
var dumY = namedHexes[nh+2];
var xPos = (dumX+brdSftCoX)*(hexD*3)+brdEdge;//Math.floor(dumX*(hexD*3)+brdEdge);//+hexD/2;
if(dumY%2==1){xPos=xPos+(hexD/2+hexD);}
var yPos = (dumY+brdSftCoY)*(hexLong)+brdEdge;//Math.floor(dumY*(hexLong)+brdEdge);//+hexLong;
var posNowX = xPos+hexD/2;
var posNowY = yPos+hexLong;
var rotateText=false;
ctx.beginPath();
ctx.fillStyle = "Red";
if(rotateText){
ctx.save()
var rad = 90 * Math.PI / 180;
ctx.translate(posNowX+0,posNowY+0);
//ctx.translate(posNowX+hexD,posNowY+hexLong);
ctx.rotate(rad);
ctx.fillText(""+namedHexes[nh],0,0);
//ctx.fillText(""+namedHexes[nh],0,-hexLong/2);
ctx.restore();}
else{
ctx.fillText(""+namedHexes[nh],posNowX,posNowY);
ctx.closePath();
}
}
//}

function drawImageRot(img,x,y,width,height,deg){
    // Store the current context state (i.e. rotation, translation etc..)
    ctx.save()
    //Convert degrees to radian
    var rad = deg * Math.PI / 180;
    //Set the origin to the center of the image
    ctx.translate(x + width / 2, y + height / 2);
    //Rotate the canvas around the origin
    ctx.rotate(rad);
    //draw the image
    ctx.drawImage(img,width / 2 * (-1),height / 2 * (-1),width,height);
    // Restore canvas state as saved from above
    ctx.restore();
}

  //draw edge - dash around the edge
  //var riverFlag = true;#
  /*
  var edgeX0 = [18, canvW-39, canvW-39, 18, 18];
  var edgeY0 = [68, 68, canvH-69, canvH-69, 68];
  var edgeX = new Array();
  var edgeY = new Array();
  for(c=0;c<edgeX0.length;c++){
    edgeX[c]=edgeX0[c]+brdSftCoX*hexD*3;
    edgeY[c]=edgeY0[c]+brdSftCoY*hexLong;
  }
    ctx.lineWidth = "2";
    ctx.setLineDash([24, 12]);
    ctx.strokeStyle="Black";
    ctx.beginPath();
      ctx.moveTo(edgeX[0], edgeY[0]);
  for(g=1;g<5;g++){
    ctx.lineTo(edgeX[g], edgeY[g]);}
    ctx.stroke();

  ctx.lineWidth = "1";
  ctx.setLineDash([0]);
  ctx.strokeStyle = lineColor;
  ctx.fillStyle = "green";
*/
  var posOrgX = 1;
  var posOrgY = 1;
  var posNowX = 0;
  var posNowY = 0;

//DRAW HEXES EVERYWHERE
for(f=0;f<noYlines; f++){
  posOrgY = f*hexLong+brdSftCoY*hexLong;
  if(f%2==0){
    posOrgX=0+brdSftCoX*hexD*3;
  }
  else{
    posOrgX=1.5*hexD+brdSftCoX*hexD*3;
  }
  ctx.strokeStyle="Black";
  for(d=0;d<noXlines; d++){
  ctx.beginPath();
  ctx.moveTo(posOrgX,posOrgY);
    for(e=0;e<7;e++){
    posNowX = posOrgX+hexMoveX[e];
    posNowY = posOrgY+hexMoveY[e];
    ctx.lineTo(posNowX,posNowY);
    }
    if(false){
      ctx.fill();
    }
    else{
    ctx.stroke();}

  if(hexCoordsFlag){hexCoords=true;}
  else{hexCoords=false;}
    if(hexCoords){
	  ctx.font = "12px Arial";
	  ctx.fillStyle = "black";
	  ctx.textAlign = "center";
	  ctx.textBaseline = "top";
  	ctx.lineWidth = "2";
	  ctx.fillText(""+d+","+f,posNowX+hexD*0.5,posNowY+hexLong*0.83);}


    posOrgX = posOrgX+3*hexD;
  }
}

//mark centre of each hex
if(centreDotFlag){
  for(k=0;k<noXXlines;k++){
    for(l=0;l<noYlines;l++){
      var dumX = k+brdSftCoX;
      var dumY = Math.round(l+brdSftCoY);//needs rounding because of modulo later
    var xPos = dumX*(hexD*3)+hexD/2;
    if(dumY%2==1){xPos=xPos+(hexD/2+hexD);}
    var yPos = dumY*(hexLong)+hexLong;
    if(dumY%2==1){yPos=yPos;}
    ctx.beginPath();
    ctx.fillStyle = "Black";//terrain1Col;
    ctx.fillRect(xPos-2, yPos-2, 4, 4);
    }
  }
}
//alert(""+allTerrainA2);

document.getElementById("saveButton").addEventListener("click", function(evt){
        // open new window with saved image so user
        // can right click and save to their computer
        window.open(canvas.toDataURL());
    }, false);

}
//}

function getCanvasImg(canvas){
    var img = new Image();
    img.src = canvas.toDataURL();
    return img;
}


//export function shiftColor(base, change, direction) {//direction = 'add' or 'sub'
function shiftColor(base, change, direction) {//direction = 'add' or 'sub'
  const colorRegEx = /^\#?[A-Fa-f0-9]{6}$/;

  // Missing parameter(s)
  if (!base || !change) {
    return '000000';
  }

  // Invalid parameter(s)
  if (!base.match(colorRegEx) || !change.match(colorRegEx)) {
    return '000000';
  }

  // Remove any '#'s
  base = base.replace(/\#/g, '');
  change = change.replace(/\#/g, '');

  // Build new color
  let newColor = '';
  for (let i = 0; i < 3; i++) {
    const basePiece = parseInt(base.substring(i * 2, i * 2 + 2), 16);
    const changePiece = parseInt(change.substring(i * 2, i * 2 + 2), 16);
    let newPiece = '';

    if (direction === 'add') {
      newPiece = (basePiece + changePiece);
      newPiece = newPiece > 255 ? 255 : newPiece;
    }
    if (direction === 'sub') {
      newPiece = (basePiece - changePiece);
      newPiece = newPiece < 0 ? 0 : newPiece;
    }

    newPiece = newPiece.toString(16);
    newPiece = newPiece.length < 2 ? '0' + newPiece : newPiece;
    newColor += newPiece;
  }

  return newColor;
}

function col2Hex(col){
  var col2 = col;
  if(col2.slice(0,1)=="#"){
 var colHex = col;}
  else{
 var colHex = "#000000";
  if(col=="Black"){
    colHex = "#000000";
  }
  else if(col=="White"){
    colHex = "#ffffff";
  }
  else if(col=="Wheat"){
    colHex = "#f5deb3";
  }
  else if(col=="Ivory"){
    colHex = "#fffff0";
  }
  else if(col=="Green"){
    colHex = "#008000";
  }
  else if(col=="Brown"){
    colHex = "#a52a2a";
  }
  else if(col=="LimeGreen"){
    colHex = "#32cd32";
  }
  else if(col=="Blue"){
    colHex = "#0000ff";
  }
  else if(col=="Turquoise"){
    colHex = "#40e0D0";
  }
  else if(col=="Silver"){
    colHex = "#c0c0c0";
  }
  else if(col=="DarkGreen"){
    colHex = "#006400";
  }
  else if(col=="DarkOliveGreen"){
    colHex = "#556b2f";
  }
  else if(col=="Red"){
    colHex = "#ff0000";
  }
  else if(col=="Grey"){
    colHex = "#808080";
  }
  else if(col=="Yellow"){
    colHex = "#ffff00";
  }
  else if(col=="Tan"){
    colHex = "#d2b48c";
  }
  else{
    colHex = "#000000";
  }}
  //if(colFlag<2){
  //alert(""+col+" "+colHex);
  //colFlag++;}
  return colHex;
}

function create2DArray(m, n) {
  let arr = new Array(m);
  for (let i = 0; i < m; i++) {
    arr[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      arr[i][j] = 0;//fills all with 0
      arr[i][j] = i*m+j; // gives count across rows from 0 to m*n
    }
  }
  return arr;
}
