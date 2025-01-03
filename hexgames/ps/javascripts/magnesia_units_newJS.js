var situationAddress="situations/magnesia_sit.html";
var tecAddress="charts/tec_spartan.html";
var crtAddress="charts/crt_prestags.html"; //"charts/goa crt.htm";
var crt2Address="charts/crt_prestags_plusD6.html"
var reinfAddress="charts/d20.htm" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt" //seq of play
var victoryAddress="situations/magnesia.html" //victory, situation
var weatherAddress="charts/goa weather.htm" //weather
var supplyAddress="charts/spartanWEC.html" //supply
var rulesAddress="rules/prestags_rules.htm"
var errataAddress="rules/New prestag rules Jun09.txt" //extra rules
var manualAddress="rules/EXCLUSIVE RULES VIKING.htm" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/magnesiaJM.jpg";
var presetupGameData = "";
var setupGameData = "";
var setupGameData=new Array();
    setupGameData[0] = "0,0,177,0,0,0,68,166,x, 0,0,163,0,0,0,54,152,x, 0,0,160,0,0,0,56,154,x, 0,0,157,0,0,0,59,157,x, 0,0,115,0,0,0,109,180,x, 0,0,118,0,0,0,106,177,x, 0,0,121,0,0,0,104,175,x, 0,0,124,0,0,0,101,172,x, 0,0,128,0,0,0,78,176,x, 0,0,131,0,0,0,75,173,x, 0,0,140,0,0,0,70,168,x, 0,0,144,0,0,0,50,174,x, 0,0,147,0,0,0,47,172,x, 0,0,150,0,0,0,45,169,x, 0,0,153,0,0,0,42,167,x, 0,0,166,0,0,0,51,149,x, 0,0,184,0,0,0,125,178,x, 0,0,181,0,0,0,127,180,x, 0,0,187,0,0,0,122,175,x, 0,0,191,0,0,0,142,180,x, 0,0,194,0,0,0,140,178,x, 0,0,197,0,0,0,137,175,x, 0,0,201,0,0,0,125,161,x, 0,0,204,0,0,0,122,159,x, 0,0,207,0,0,0,120,156,x, 0,0,210,0,0,0,117,154,x, 0,0,214,0,0,0,132,199,x, 0,0,217,0,0,0,129,197,x, 0,0,220,0,0,0,127,194,x, 0,0,223,0,0,0,124,192,x, 0,0,227,0,0,0,147,213,x, 0,0,230,0,0,0,145,211,x, 0,0,233,0,0,0,142,208,x, 0,0,236,0,0,0,140,206,x, 0,0,240,0,0,0,161,199,x, 0,0,243,0,0,0,158,197,x, 0,0,246,0,0,0,156,194,x, 0,0,249,0,0,0,153,192,x, 0,0,253,0,0,0,174,188,x, 0,0,256,0,0,0,172,185,x, 0,0,260,0,0,0,16,194,x, 0,0,263,0,0,0,13,192,x, 0,0,266,0,0,0,11,189,x, 0,0,269,0,0,0,8,187,x, 0,0,272,0,0,0,6,184,x, 0,0,276,0,0,0,24,174,x, 0,0,279,0,0,0,21,171,x, 0,0,282,0,0,0,19,169,x, 0,0,285,0,0,0,16,166,x, 0,0,288,0,0,0,14,164,x, 0,0,292,0,0,0,170,241,x, 0,0,295,0,0,0,167,239,x, 0,0,298,0,0,0,165,236,x, 0,0,301,0,0,0,162,234,x, 0,0,305,0,0,0,194,240,x, 0,0,308,0,0,0,192,237,x, 0,0,312,0,0,0,181,274,x, 0,0,315,0,0,0,178,272,x, 0,0,318,0,0,0,176,269,x, 0,0,321,0,0,0,173,267,x, 0,0,325,0,0,0,208,276,x, 0,0,328,0,0,0,205,273,x, 0,0,331,0,0,0,203,271,x, 0,0,334,0,0,0,200,268,x, 0,0,338,0,0,0,189,287,x, 0,0,342,0,0,0,204,290,x, 0,0,438,0,0,0,275,99,x, 0,0,441,0,0,0,273,97,x, 0,0,444,0,0,0,270,94,x, 0,0,465,0,0,0,252,109,x, 0,0,474,0,0,0,245,102,x, 0,0,471,0,0,0,247,104,x, 0,0,468,0,0,0,250,107,x, 0,0,435,0,0,0,278,102,x, 0,0,431,0,0,0,247,120,x, 0,0,428,0,0,0,250,122,x, 0,0,425,0,0,0,252,125,x, 0,0,422,0,0,0,255,127,x, 0,0,418,0,0,0,292,279,x, 0,0,415,0,0,0,294,282,x, 0,0,412,0,0,0,297,284,x, 0,0,405,0,0,0,299,287,x, 0,0,401,0,0,0,317,290,x, 0,0,398,0,0,0,320,293,x, 0,0,395,0,0,0,322,295,x, 0,0,392,0,0,0,325,298,x, 0,0,388,0,0,0,419,180,x, 0,0,385,0,0,0,421,183,x, 0,0,382,0,0,0,424,185,x, 0,0,379,0,0,0,426,188,x, 0,0,457,0,0,0,438,235,x, 0,0,454,0,0,0,440,238,x, 0,0,451,0,0,0,443,240,x, 0,0,448,0,0,0,445,243,x, 0,0,367,0,0,0,351,283,x, 0,0,364,0,0,0,347,291,x, 0,0,361,0,0,0,350,293,x, 0,0,357,0,0,0,354,286,x, 0,0,353,0,0,0,382,272,x, 0,0,350,0,0,0,384,274,x, 0,0,375,0,0,0,418,239,x, 0,0,371,0,0,0,415,252,x, 0,0,346,0,0,0,80,137,x, 0,0,1,8,B,0,situations/magnesia.html";
    setupGameData[1] = "0,0,600,0,0,0,143,361,x, 0,0,745,0,0,0,63,262,x, 0,0,749,0,0,0,82,288,x, 0,0,752,0,0,0,79,285,x, 0,0,614,0,0,0,53,236,x, 0,0,611,0,0,0,55,239,x, 0,0,570,0,0,0,66,215,x, 0,0,573,0,0,0,63,213,x, 0,0,777,0,0,0,81,341,x, 0,0,780,0,0,0,79,339,x, 0,0,603,0,0,0,141,358,x, 0,0,766,0,0,0,108,335,x, 0,0,763,0,0,0,110,337,x, 0,0,791,0,0,0,55,292,x, 0,0,794,0,0,0,53,289,x, 0,0,742,0,0,0,66,265,x, 0,0,696,0,0,0,94,267,x, 0,0,699,0,0,0,91,264,x, 0,0,703,0,0,0,104,291,x, 0,0,706,0,0,0,102,288,x, 0,0,798,0,0,0,94,312,x, 0,0,801,0,0,0,92,309,x, 0,0,717,0,0,0,77,237,x, 0,0,714,0,0,0,79,239,x, 0,0,678,0,0,0,121,313,x, 0,0,681,0,0,0,119,310,x, 0,0,524,0,0,0,147,264,x, 0,0,527,0,0,0,145,262,x, 0,0,513,0,0,0,108,195,x, 0,0,510,0,0,0,110,197,x, 0,0,506,0,0,0,120,217,x, 0,0,503,0,0,0,122,219,x, 0,0,499,0,0,0,131,242,x, 0,0,496,0,0,0,133,244,x, 0,0,731,0,0,0,119,263,x, 0,0,784,0,0,0,134,339,x, 0,0,787,0,0,0,132,337,x, 0,0,710,0,0,0,121,266,x, 0,0,770,0,0,0,119,362,x, 0,0,773,0,0,0,116,359,x, 0,0,649,0,0,0,160,337,x, 0,0,635,0,0,0,33,215,x, 0,0,632,0,0,0,35,218,x, 0,0,628,0,0,0,48,190,x, 0,0,625,0,0,0,51,193,x, 0,0,646,0,0,0,163,340,x, 0,0,642,0,0,0,172,356,x, 0,0,639,0,0,0,175,358,x, 0,0,621,0,0,0,75,190,x, 0,0,618,0,0,0,77,193,x, 0,0,815,0,0,0,106,239,x, 0,0,812,0,0,0,109,241,x, 0,0,808,0,0,0,90,213,x, 0,0,805,0,0,0,93,216,x, 0,0,830,0,0,0,137,283,x, 0,0,827,0,0,0,140,285,x, 0,0,674,0,0,0,146,312,x, 0,0,671,0,0,0,149,314,x, 0,0,667,0,0,0,160,286,x, 0,0,664,0,0,0,162,289,x, 0,0,660,0,0,0,174,311,x, 0,0,653,0,0,0,176,313,x, 0,0,492,0,0,0,191,337,x, 0,0,489,0,0,0,193,339,x, 0,0,833,0,0,0,74,234,x, 0,0,836,0,0,0,158,335,x, 0,0,930,0,0,0,313,263,x, 0,0,927,0,0,0,316,266,x, 0,0,878,0,0,0,280,163,x, 0,0,875,0,0,0,283,166,x, 0,0,865,0,0,0,296,240,x, 0,0,868,0,0,0,294,237,x, 0,0,872,0,0,0,285,168,x, 0,0,933,0,0,0,311,261,x, 0,0,851,0,0,0,269,193,x, 0,0,854,0,0,0,266,190,x, 0,0,858,0,0,0,282,219,x, 0,0,861,0,0,0,279,216,x, 0,0,896,0,0,0,324,239,x, 0,0,913,0,0,0,322,237,x, 0,0,958,0,0,0,324,289,x, 0,0,962,0,0,0,325,196,x, 0,0,923,0,0,0,319,234,x, 0,0,988,0,0,0,362,126,x, 0,0,985,0,0,0,364,128,x, 0,0,955,0,0,0,327,291,x, 0,0,882,0,0,0,305,195,x, 0,0,889,0,0,0,302,193,x, 0,0,892,0,0,0,300,190,x, 0,0,1004,0,0,0,320,191,x, 0,0,992,0,0,0,315,124,x, 0,0,995,0,0,0,312,121,x, 0,0,998,0,0,0,310,119,x, 0,0,1001,0,0,0,307,116,x, 0,0,941,0,0,0,337,265,x, 0,0,944,0,0,0,335,262,x, 0,0,1011,0,0,0,337,216,x, 0,0,1025,0,0,0,354,286,x, 0,0,1028,0,0,0,351,283,x, 0,0,1008,0,0,0,340,219,x, 0,0,1038,0,0,0,305,114,x, 0,0,1035,0,0,0,317,232,x, 0,0,346,0,0,0,80,137,x, 0,0,1,8,A,1,situations/magnesia.html";
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

var swidth=5140; //width of biggest board
var sheight=3080; //height of biggest board
var placePieceShift=700;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=103; //no of pieces in game
var unitTotal=22 //number of types of pieces
//***these should all be 1 less than index given by mouseOver
var lastIndex=103; //index number of last piece - turn now
var gerNumber=66; //the index number of the first side B piece
var neutNumber=103; //index number of first neutral piece

var Abase = "skyblue/"
var Bbase = "red/"
var Apanic=46;
var Bpanic=28;
var maxTurns = 15;
var nameA="Syrians";
var nameB="Romans";
var D1color = "red";
var D2color = "hotpink";
var Acolor = "red";
var Bcolor = "hotpink";
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

var unitsA=["skyblue/ms.jpg", "MS af:3 mf:3 vp:", "2", "16", "n",
"skyblue/ps.jpg", "PS af:4 mf:3 vp:", "2",  "10", "n",
"skyblue/pp.jpg", "PP af:6 mf:4 vp:", "3", "8", "n",
"skyblue/bi.jpg", "BI af:[6] mf:5 vp:", "3", "6", "n",
"skyblue/lc.jpg", "LC af:1 mf:9 vp:", "1",  "5", "c",
"skyblue/mc.jpg", "MC af:[3] mf:9 vp:", "2",  "5", "c",
"skyblue/bw.jpg", "BW mf:5 fire:2/2 vp:", "2",  "4", "f",
"skyblue/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3",  "2", "f",
"skyblue/oc.jpg", "OC af:2 mf:9 fire:1/1 vp:", "2",  "4", "f",
"skyblue/el.jpg", "EL af:[8] mf:6 vp:", "4",  "4", "n",
"skyblue/2l.jpg", "2L combat:+6 radius:2 mf:9  Antiochus vp", "3", "1", "l",
"skyblue/3l.jpg", "3L combat:+3 radius:1 mf:9 vp:", "2", "1", "l",

"red/ms.jpg", "MS af:3 mf:3 vp:", "2", "8", "n",
"red/ps.jpg", "PS af:4 mf:3 vp:", "2",  "4", "n",
"red/sd.jpg", "SD af:4 mf:4 vp:", "2", "12", "n",
"red/lc.jpg", "LC af:1 mf:9 vp:", "1",  "4", "c",
"red/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3",  "4", "f",
"red/oc.jpg", "OC af:2 mf:9 fire:1/1 vp:", "2",  "2", "f",
"red/2l.jpg", "2L combat:+6 radius:2 mf:9 vp", "3", "1", "l",
"red/1l.jpg", "1L combat:+9 radius:2 mf:9 vp:", "4", "1", "l",

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


var board1 = "boards/magnesiaJM.jpg";
var board_setup = "boards/magnesia_setup.jpg";
var board2 = "boards/magnesia.jpg";
var board3 = "boards/arbela1.jpg";
