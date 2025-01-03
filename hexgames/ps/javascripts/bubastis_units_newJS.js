var situationAddress="situations/bubastis_sit.html";
var tecAddress="charts/tec_spartan.html";
var crtAddress="charts/crt_prestags.html"; //"charts/goa crt.htm";
var crt2Address="charts/crt_prestags_plusD6.html"
var reinfAddress="charts/d20.htm" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt" //seq of play
var victoryAddress="situations/bubastis_sit.html" //victory, situation
var weatherAddress="charts/goa weather.htm" //weather
var supplyAddress="charts/chariotWEC.html" //supply
var rulesAddress="rules/prestags_rules.htm"
var errataAddress="rules/New prestag rules Jun09.txt" //extra rules
var manualAddress="rules/EXCLUSIVE RULES VIKING.htm" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/bubastis setup.png";
var presetupGameData = "";
var setupGameData = "";
var setupGameData=new Array();
    setupGameData[0] = "0,0,308,0,0,0,572,509,x, 0,0,284,0,0,0,571,629,x, 0,0,256,0,0,0,658,660,x, 0,0,253,0,0,0,623,660,x, 0,0,293,0,0,0,606,511,x, 0,0,296,0,0,0,590,478,x, 0,0,290,0,0,0,533,628,x, 0,0,271,0,0,0,516,656,x, 0,0,265,0,0,0,590,657,x, 0,0,268,0,0,0,555,658,x, 0,0,299,0,0,0,600,447,x, 0,0,305,0,0,0,574,568,x, 0,0,280,0,0,0,607,628,x, 0,0,277,0,0,0,636,630,x, 0,0,274,0,0,0,669,628,x, 0,0,302,0,0,0,591,536,x, 0,0,311,0,0,0,568,503,x, 0,0,262,0,0,0,620,654,x, 0,0,287,0,0,0,565,626,x, 0,0,259,0,0,0,657,657,x, 0,0,320,0,0,0,367,692,x, 0,0,368,0,0,0,393,627,x, 0,0,353,0,0,0,308,660,x, 0,0,359,0,0,0,322,628,x, 0,0,386,0,0,0,342,537,x, 0,0,380,0,0,0,363,570,x, 0,0,371,0,0,0,378,598,x, 0,0,389,0,0,0,361,507,x, 0,0,338,0,0,0,307,718,x, 0,0,341,0,0,0,326,688,x, 0,0,374,0,0,0,400,567,x, 0,0,344,0,0,0,341,661,x, 0,0,329,0,0,0,330,749,x, 0,0,326,0,0,0,343,717,x, 0,0,383,0,0,0,377,535,x, 0,0,314,0,0,0,416,600,x, 0,0,350,0,0,0,294,688,x, 0,0,347,0,0,0,273,720,x, 0,0,335,0,0,0,294,749,x, 0,0,332,0,0,0,308,777,x, 0,0,317,0,0,0,414,594,x, 0,0,323,0,0,0,361,686,x, 0,0,356,0,0,0,303,655,x, 0,0,377,0,0,0,393,565,x, 0,0,395,0,0,0,660,516,x, 0,0,1,8,A,1,situations/bubastis_sit.html";
    setupGameData[1] = "0,0,582,0,0,0,515,476,x, 0,0,579,0,0,0,530,509,x, 0,0,576,0,0,0,552,535,x, 0,0,573,0,0,0,569,570,x, 0,0,561,0,0,0,591,601,x, 0,0,548,0,0,0,623,597,x, 0,0,585,0,0,0,536,450,x, 0,0,542,0,0,0,643,630,x, 0,0,597,0,0,0,485,477,x, 0,0,591,0,0,0,518,535,x, 0,0,567,0,0,0,551,598,x, 0,0,554,0,0,0,568,631,x, 0,0,570,0,0,0,536,569,x, 0,0,594,0,0,0,499,508,x, 0,0,545,0,0,0,601,628,x, 0,0,600,0,0,0,497,447,x, 0,0,603,0,0,0,530,444,x, 0,0,588,0,0,0,532,569,x, 0,0,551,0,0,0,621,592,x, 0,0,564,0,0,0,589,595,x, 0,0,445,0,0,0,413,599,x, 0,0,426,0,0,0,398,630,x, 0,0,451,0,0,0,380,597,x, 0,0,454,0,0,0,344,597,x, 0,0,430,0,0,0,361,628,x, 0,0,408,0,0,0,380,660,x, 0,0,396,0,0,0,362,686,x, 0,0,436,0,0,0,293,629,x, 0,0,457,0,0,0,309,596,x, 0,0,414,0,0,0,316,657,x, 0,0,433,0,0,0,328,628,x, 0,0,411,0,0,0,345,659,x, 0,0,463,0,0,0,333,449,x, 0,0,469,0,0,0,309,419,x, 0,0,399,0,0,0,326,688,x, 0,0,402,0,0,0,289,686,x, 0,0,405,0,0,0,258,688,x, 0,0,417,0,0,0,274,653,x, 0,0,420,0,0,0,240,658,x, 0,0,442,0,0,0,260,627,x, 0,0,439,0,0,0,391,624,x, 0,0,448,0,0,0,409,594,x, 0,0,423,0,0,0,308,656,x, 0,0,466,0,0,0,324,452,x, 0,0,606,0,0,0,620,544,x, 0,0,1,8,A,1,situations/bubastis_sit.html";
    setupGameData[2] = "";
    setupGameData[3] = "";
    var setUpGameNo = 0;
var maxNoOfSetUps = 2;
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

var multiThisNow = 1;
var swidth=4100; //width of biggest board
var sheight=3180; //height of biggest board
var placePieceShift=700;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=45; //no of pieces in game
var unitTotal=22 //number of types of pieces
//***these should all be 1 less than index given by mouseOver
var lastIndex=45; //index number of last piece - turn now
var gerNumber=21; //the index number of the first side B piece
var neutNumber=45; //index number of first neutral piece

var Abase = "white/"
var Bbase = "black/"
var Apanic=9;
var Bpanic=10;
var maxTurns = 15;
var nameA="Upper Egyptians";
var nameB="Lower Egyptians";
var D1color = "red";
var D2color = "hotpink";
var Acolor = "red";
var Bcolor = "orange";
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

var unitsA=["white/mi.jpg", "MI af:2 mf:3 vp:", "1", "8", "n",
"white/bw.jpg", "BW mf:5 fire:2/2 vp:", "2",  "4", "f",
"white/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3",  "4", "f",
"white/1l.jpg", "1L combat:+9 radius:2 mf:9 Menes vp:", "4", "1", "l",
"white/4l.jpg", "4L combat:+3 radius:0 mf:9 vp:", "1", "1", "l",
"white/5l.jpg", "5L combat:0 radius:2 mf:4 vp:", "2", "1", "l",
"white/6l.jpg", "6L combat:0 radius:1 mf:4 vp:", "1", "1", "l",

"black/mi.jpg", "MI af:2 mf:3 vp:", "1", "12", "n",
"black/bw.jpg", "BW mf:5 fire:2/2 vp:", "2",  "2", "f",
"black/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3",  "6", "f",
"black/4l.jpg", "4L combat:+3 radius:0 mf:9 vp:", "1", "2", "l",
"black/5l.jpg", "5L combat:0 radius:2 mf:4 vp:", "2", "1", "l",
"black/6l.jpg", "6L combat:0 radius:1 mf:4 vp:", "1", "1", "l",

"neut/battle.jpg", "BATTLE!", "","0", "x",
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


var board1 = "boards/bubastis.png";
var board_setup = "boards/bubastis setup.png";
var board2 = "boards/chariot2.jpg";
var board3 = "boards/spartan.jpg";
