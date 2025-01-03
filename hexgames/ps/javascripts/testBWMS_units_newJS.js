var situationAddress="situations/testBWMS_sit.html";
var tecAddress="charts/tec_spartan.html";
var crtAddress="charts/crt_prestags.html"; //"charts/goa crt.htm";
var crt2Address="charts/crt_prestags_plusD6.html"
var reinfAddress="charts/d20.htm" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt" //seq of play
var victoryAddress="situations/kadesh_sit.html" //victory, situation
var weatherAddress="charts/goa weather.htm" //weather
var supplyAddress="charts/chariotWEC.html" //supply
var rulesAddress="rules/prestags_rules.htm"
var errataAddress="rules/New prestag rules Jun09.txt" //extra rules
var manualAddress="rules/EXCLUSIVE RULES VIKING.htm" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/Sabines_setup.jpg";
var presetupGameData = "";
var setupGameData = "";
var setupGameData=new Array();
    setupGameData[0] = "0,0,169,0,1,0,273,261,x, 0,0,165,0,1,0,211,250,x, 0,0,173,0,1,0,310,233,x, 0,0,161,0,1,0,225,259,x, 0,0,185,0,1,0,252,250,x, 0,0,177,0,1,0,293,248,x, 0,0,181,0,1,0,189,237,x, 0,0,157,0,1,0,248,269,x, 0,0,102,0,1,0,249,504,x, 0,0,121,0,1,0,290,519,x, 0,0,125,0,1,0,212,545,x, 0,0,129,0,1,0,211,521,x, 0,0,133,0,1,0,232,537,x, 0,0,137,0,1,0,252,541,x, 0,0,141,0,1,0,288,542,x, 0,0,153,0,1,0,190,534,x, 0,0,149,0,1,0,271,533,x, 0,0,117,0,1,0,231,511,x, 0,0,113,0,1,0,249,520,x, 0,0,109,0,1,0,276,513,x, 0,0,189,0,1,0,123,204,x, 0,0,1,8,A,0,situations/kadesh_sit.html";
    setupGameData[1] = "";
    setupGameData[2] = "";
    setupGameData[3] = "";
    setupGameData[4] = "";
    setupGameData[5] = "";
    var setUpGameNo = 0;
var maxNoOfSetUps = 1;
var unitLocation = "units/";//"units/"; "units3/";
var unitExtension = ".jpg";//".jpg"; ".png";
//var boardSize = 2;//start size of board 1=smallest; 8=largest

var deadPosA_X0 = 4000;
var deadPosA_delX = 400;
var deadPosA_Y0 = 1500;
var deadPosA_delY = 500;
var deadPosB_X0 = 100;
var deadPosB_delX = 400;
var deadPosB_Y0 = 1500;
var deadPosB_delY = 500;

var swidth=4920; //width of biggest board
var sheight=6560; //height of biggest board
var placePieceShift=700;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=21; //no of pieces in game
var unitTotal=3 //number of types of pieces
//***these should all be 1 less than index given by mouseOver
var lastIndex=21; //index number of last piece - turn now
var gerNumber=8; //the index number of the first side B piece
var neutNumber=21; //index number of first neutral piece

var Abase = "white/"
var Bbase = "black/"
var Apanic=12;
var Bpanic=12;
var maxTurns = 15;
var nameA="Bowmen";
var nameB="Hoplites";
var D1color = "red";
var D2color = "hotwhite";
var Acolor = "red";
var Bcolor = "hotwhite";
var DcolorFlag = false;

//unit sizes - 88 fits 3 to a hex, so hex=264, so if stackin=4 size = 264/4, if stacking=1 size =264 etc.
var sunit=100; //unit width/height
var sunit2=71;
var sunitB=71; //unit width/height
var sunitB2=71;

var noOfItems=5; //no of items of data for each unit type
var itemsPerUnit = noOfItems;
//address (without the jpg bit...), mouse text, number of pieces,  type, points value,

//c=cavalry, a=artillery, e=engine, n=infantry, x=neutral, l=leader

var unitsA=[
"white/bw.jpg", "BW mf:5 fire:2/2 vp:", "3",  "8", "f",

"black/ms.jpg", "MS af:3 mf:3 vp:", "2", "12", "n",

"neut/turn1.jpg", "TURN NOW", "", "1", "x"
];

var unitNamesA=[];
//THESE ARE ALL DUMMY VALUES - TRUE VALUES WILL BE CALCULATED BELOW...
var totalPieces = 82;
var rusPieces = 31;
var gerPieces = 40;
var neutPieces = 10;
//...calculated here...
var totUnits = 0;
var rusUnits = 0;
var gerUnits = 0;
var neutUnits =0;

var baseA1 = Abase.slice(0,-1);
var baseB1 = Bbase.slice(0,-1);
var loopLen = unitsA.length/noOfItems;

for(i=0;i<loopLen;i++){
  //alert("i="+i+" noOfItems="+noOfItems+" i*noOfItems="+(i*noOfItems)+" unitsA[i*noOfItems]="+unitsA[i*noOfItems])
  var dumBaseA = unitsA[i*noOfItems].split("/");
  var dumBase0 = dumBaseA[0];
  if(dumBase0==baseA1){
    rusUnits = 1*rusUnits + 1*unitsA[(i*noOfItems)+3];
  }
  else if(dumBase0==baseB1){
    gerUnits = 1*gerUnits + 1*unitsA[(i*noOfItems)+3];
  }
  else{
    neutUnits = 1*neutUnits + 1*unitsA[(i*noOfItems)+3];
  }
}

noOfPieces= rusUnits+gerUnits+neutUnits; //no of pieces in game
unitTotal= totalPieces; //number of types of pieces
lastIndex= rusUnits+gerUnits+neutUnits; //index number of last piece - north marker
gerNumber= rusUnits;//rusUnits+1; //the index number of the first german piece
neutNumber= rusUnits+gerUnits;//rusUnits+gerUnits+1; //index number of first neutral piece


var board1 = "boards/Sabines.jpg";
var board_setup = "boards/Sabines_setup.jpg";
var board3 = "boards/RnS_board_select1.jpg";
var board2 = "boards/RnS_board_select3.jpg";
