var situationAddress="situations/Eylau setup.html";
var tecAddress="charts/TEC Dresden.html";
var crtAddress="charts/CRT Borodino.html"; //"charts/goa crt.htm";
var crt2Address="charts/CRT Dresden.html"
var reinfAddress="charts/reinf ruled.html" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/SoP Austerlitz.html" //seq of play
var victoryAddress="situations/pharsalus_sit.html" //victory, situation
var weatherAddress="charts/Kr battle manual.pdf" //weather
var supplyAddress="charts/map Dresden.html" //MAP
var rulesAddress="rules/BattleAusterlitz.pdf"
var errataAddress="rules/reinf rulesAddress.html" //extra rules
var manualAddress="rules/OOB Borodino.html" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/Eylau board 8.png";
var presetupGameData = "";
var setupGameData ="";

var setupGameData = new Array();
//rotated to show which units cannot move turn 1
setupGameData[0] = "0,30,768,0,0,0,671,557,9, 0,30,770,0,0,0,703,575,9, 0,0,940,0,0,0,70,1052,8, 0,0,230,0,0,0,605,598,8, 0,0,910,0,0,0,907,327,8, 0,0,892,0,0,0,909,423,7, 0,0,218,0,0,0,511,648,6, 0,0,222,0,0,0,477,707,5, 0,0,952,0,0,0,70,1089,5, 0,0,955,0,0,0,52,1091,4, 0,0,943,0,0,0,51,1051,4, 0,0,901,0,0,0,912,376,4, 0,0,904,0,0,0,933,376,4, 0,0,913,0,0,0,927,327,4, 0,0,226,0,0,0,608,555,4, 0,0,234,0,0,0,638,536,4, 0,0,238,0,0,0,637,580,4, 0,0,242,0,0,0,639,611,4, 0,0,246,0,0,0,672,595,4, 0,0,250,0,0,0,672,519,4, 0,0,258,0,0,0,668,479,4, 0,0,262,0,0,0,705,495,4, 0,0,266,0,0,0,476,669,3, 0,0,270,0,0,0,509,612,3, 0,0,274,0,0,0,475,629,3, 0,0,895,0,0,0,930,423,2, 0,0,278,0,0,0,445,724,1, 0,0,282,0,0,0,574,573,4, 0,0,286,0,0,0,570,650,4, 0,0,290,0,0,0,607,631,4, 0,0,294,0,0,0,540,595,3, 0,0,298,0,0,0,541,633,3, 0,30,771,0,0,0,700,612,3, 0,0,306,0,0,0,408,783,1, 0,0,310,0,0,0,345,820,1, 0,0,916,0,0,0,946,327,1, 0,0,958,0,0,0,32,1090,1, 0,0,314,0,0,0,509,686,7, 0,0,318,0,0,0,608,670,7, 0,0,322,0,0,0,539,668,5, 0,0,326,0,0,0,671,632,5, 0,0,330,0,0,0,571,613,5, 0,0,970,0,0,0,61,1070,2, 0,0,382,0,0,0,872,493,4, 0,0,919,0,0,0,965,327,3, 0,0,378,0,0,0,875,523,3, 0,0,390,0,0,0,899,496,3, 0,0,386,0,0,0,900,519,3, 0,0,907,0,0,0,955,375,3, 0,0,898,0,0,0,952,422,3, 0,0,973,0,0,0,31,1052,3, 0,0,964,0,0,0,14,1090,3, 0,30,835,0,0,0,309,574,8, 0,30,825,0,0,0,347,517,8, 0,30,827,0,0,0,347,446,8, 0,30,831,0,0,0,317,428,8, 0,30,804,0,0,0,441,426,8, 0,30,802,0,0,0,475,408,7, 0,30,800,0,0,0,538,371,7, 0,30,798,0,0,0,507,352,7, 0,0,840,0,0,0,475,479,7, 0,30,820,0,0,0,376,501,6, 0,30,822,0,0,0,377,427,6, 0,30,829,0,0,0,347,367,6, 0,30,824,0,0,0,346,553,5, 0,0,839,0,0,0,478,519,5, 0,30,834,0,0,0,313,539,4, 0,30,806,0,0,0,411,445,4, 0,30,828,0,0,0,345,409,4, 0,0,842,0,0,0,538,479,1, 0,30,832,0,0,0,309,459,4, 0,30,805,0,0,0,441,389,4, 0,30,836,0,0,0,313,616,3, 0,30,826,0,0,0,346,486,4, 0,30,821,0,0,0,378,464,4, 0,0,838,0,0,0,445,535,4, 0,0,843,0,0,0,572,424,4, 0,30,837,0,0,0,282,632,1, 0,30,830,0,0,0,312,391,1, 0,30,803,0,0,0,476,444,8, 0,30,807,0,0,0,411,483,6, 0,30,833,0,0,0,281,445,6, 0,30,818,0,0,0,377,536,5, 0,30,823,0,0,0,377,388,5, 0,30,801,0,0,0,508,390,4, 0,0,841,0,0,0,510,466,4, 0,0,751,0,0,0,81,393,4, 0,0,736,0,0,0,86,409,3, 0,0,739,0,0,0,92,444,3, 0,0,748,0,0,0,76,433,3, 0,0,742,0,0,0,88,482,3, 0,0,745,0,0,0,78,459,3, 0,0,922,0,0,0,72,998,5, 0,0,925,0,0,0,63,1016,3, 0,0,928,0,0,0,51,998,3, 0,0,931,0,0,0,42,1015,4, 0,0,934,0,0,0,29,997,2, 0,0,937,0,0,0,21,1016,2, 0,0,851,0,0,0,525,1308,TURN, 0,0,857,0,0,0,333,1041,to move, 0,0,854,0,0,0,585,706,undefined, 0,0,1,8,A,0,situations/Eylau setup.html";
    //non rotated
setupGameData[1] = "0,0,206,0,0,0,668,552,9, 0,0,210,0,0,0,703,575,9, 0,0,181,0,0,0,882,380,8, 0,0,230,0,0,0,605,598,8, 0,0,151,0,0,0,881,299,8, 0,0,172,0,0,0,883,357,7, 0,0,218,0,0,0,511,648,6, 0,0,222,0,0,0,477,707,5, 0,0,194,0,0,0,885,404,5, 0,0,198,0,0,0,909,408,4, 0,0,185,0,0,0,905,378,4, 0,0,163,0,0,0,882,329,4, 0,0,168,0,0,0,905,328,4, 0,0,155,0,0,0,905,299,4, 0,0,226,0,0,0,608,555,4, 0,0,234,0,0,0,638,536,4, 0,0,238,0,0,0,637,580,4, 0,0,242,0,0,0,639,611,4, 0,0,246,0,0,0,672,595,4, 0,0,250,0,0,0,672,519,4, 0,0,258,0,0,0,668,479,4, 0,0,262,0,0,0,705,495,4, 0,0,266,0,0,0,476,669,3, 0,0,270,0,0,0,509,612,3, 0,0,274,0,0,0,475,629,3, 0,0,176,0,0,0,909,356,2, 0,0,278,0,0,0,445,724,1, 0,0,282,0,0,0,574,573,4, 0,0,286,0,0,0,570,650,4, 0,0,290,0,0,0,607,631,4, 0,0,294,0,0,0,540,595,3, 0,0,298,0,0,0,541,633,3, 0,0,302,0,0,0,700,612,3, 0,0,306,0,0,0,408,783,1, 0,0,310,0,0,0,345,820,1, 0,0,159,0,0,0,928,298,1, 0,0,202,0,0,0,932,407,1, 0,0,314,0,0,0,509,686,7, 0,0,318,0,0,0,608,670,7, 0,0,322,0,0,0,539,668,5, 0,0,326,0,0,0,671,632,5, 0,0,330,0,0,0,571,613,5, 0,0,189,0,0,0,933,378,2, 0,0,382,0,0,0,872,493,4, 0,0,343,0,0,0,947,298,3, 0,0,378,0,0,0,875,523,3, 0,0,390,0,0,0,899,496,3, 0,0,386,0,0,0,900,519,3, 0,0,351,0,0,0,935,330,3, 0,0,355,0,0,0,930,354,3, 0,0,359,0,0,0,958,377,3, 0,0,367,0,0,0,954,405,3, 0,0,546,0,0,0,309,574,8, 0,0,574,0,0,0,347,517,8, 0,0,609,0,0,0,347,446,8, 0,0,613,0,0,0,317,428,8, 0,0,664,0,0,0,441,426,8, 0,0,668,0,0,0,475,408,7, 0,0,676,0,0,0,538,371,7, 0,0,684,0,0,0,507,352,7, 0,0,696,0,0,0,475,479,7, 0,0,578,0,0,0,376,501,6, 0,0,628,0,0,0,377,427,6, 0,0,640,0,0,0,347,367,6, 0,0,550,0,0,0,346,553,5, 0,0,700,0,0,0,478,519,5, 0,0,558,0,0,0,313,539,4, 0,0,582,0,0,0,411,445,4, 0,0,644,0,0,0,345,409,4, 0,0,711,0,0,0,538,479,1, 0,0,620,0,0,0,309,459,4, 0,0,672,0,0,0,441,389,4, 0,0,562,0,0,0,313,616,3, 0,0,594,0,0,0,346,486,4, 0,0,598,0,0,0,378,464,4, 0,0,715,0,0,0,445,535,4, 0,0,719,0,0,0,572,424,4, 0,0,566,0,0,0,282,632,1, 0,0,656,0,0,0,312,391,1, 0,0,727,0,0,0,476,444,8, 0,0,602,0,0,0,411,483,6, 0,0,624,0,0,0,281,445,6, 0,0,570,0,0,0,377,536,5, 0,0,660,0,0,0,377,388,5, 0,0,688,0,0,0,508,390,4, 0,0,723,0,0,0,510,466,4, 0,0,751,0,0,0,81,393,4, 0,0,736,0,0,0,86,409,3, 0,0,739,0,0,0,92,444,3, 0,0,748,0,0,0,76,433,3, 0,0,742,0,0,0,88,482,3, 0,0,745,0,0,0,78,459,3, 0,0,122,0,0,0,149,1006,5, 0,0,127,0,0,0,133,1014,3, 0,0,131,0,0,0,116,1015,3, 0,0,139,0,0,0,95,1022,4, 0,0,143,0,0,0,82,1035,2, 0,0,147,0,0,0,67,1030,2, 0,0,394,0,0,0,334,1046,TURN, 0,0,398,0,0,0,571,1028,to move, 0,0,1,8,B,0,situations/Eylau setup.html";;
    setupGameData[2] = "";
    setupGameData[3] = "";
    var setUpGameNo = 0;
var maxNoOfSetUps = 1;
var unitLocation = "units/";//"units/"; "units3/";
var unitExtension = ".jpg";//".jpg"; ".png";
//var boardSize = 2;//start size of board 1=smallest; 8=largest

var deadPosA_X0 = 1000;
var deadPosA_delX = 1000;
var deadPosA_Y0 = 7500;
var deadPosA_delY = 500;
var deadPosB_X0 = 7000;
var deadPosB_delX = 1000;
var deadPosB_Y0 = 7500;
var deadPosB_delY = 500;

var swidth=2000*4; //width of biggest board
var sheight=3000*4; //height of biggest board
var placePieceShift=400;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=40 //no of pieces in game
var unitTotal=17; //number of types of pieces
//***these should all be 1 less than index given by mouseOver
var lastIndex=89; //index number of last piece - turn now
var gerNumber=42; //the index number of the first side B piece
var neutNumber=89; //index number of first neutral piece

//var Abase = "#d2b486/";
//var Bbase = "#aaaaaa/";
var Abase = ["#0077ff","#0000ff", "#1000ff"];
var Bbase = ["#8fbc8f","#556b2f", "#696969"];
var Apanic=30;
var Bpanic=43;
const nameA="French";
const nameB="Allied";
const startingPlayer = nameA;
const secondPlayer = nameB;
var currentPlayer=nameB;//give name of non-starting player as it clicks over as starts
var colorA="#13cc6a";//"Red";
var colorAbx="#bbdfdc";
var textColorA="#ffffff";
var colorB="#82ff00";//"Blue";
var colorBbx="#a54316";
var textColorB="#000000";
var colorN="#999999";//"Silver";
var textColorN="Black";
var D1color = "red";
var D2color = "hotpink";
var Acolor = "red";
var Bcolor = "YellowGreen";
var DcolorFlag = false;

//unit sizes - 88 fits 3 to a hex, so hex=264, so if stackin=4 size = 264/4, if stacking=1 size =264 etc.
var sunit=150; //unit width/height
//alert("here!");
var sunit2=150;
var sunitB=150; //unit width/height
var sunitB2=150;

var noOfItems=9; //no of items of data for each unit type
var itemsPerUnit = noOfItems;
//address (without the jpg bit...), mouse text, number of pieces,  type, points value,

//c=cavalry, a=artillery, e=engine, n=infantry, x=neutral, l=leader

//RED: totalPts=155 totalCFs=105
//BLACK: totalPts=150 totalCFs=104

var unitsA=[
  "#0000ff/#ffffff/#ffff00/#000000", "Infantry", "9", "2", "n", "inf", "9", "4", "XX",
  "#0000ff/#ffffff/#ffff00/#000000", "Infantry", "8", "3", "n", "inf", "8", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "7", "1", "n", "inf", "7", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "6", "1", "n", "inf", "6", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "5", "2", "n", "inf", "5", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "4", "13", "n", "inf", "4", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "3", "3", "n", "inf", "3", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "2", "1", "n", "inf", "2", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "1", "1", "n", "inf", "1", "4", "XX",
"#0000ff/#ffffff/#ffffff/#000000", "Cavalry", "4", "3", "c", "cav", "4", "5", "XX",
"#0000ff/#ffffff/#ffffff/#000000", "Cavalry", "3", "3", "c", "cav", "3", "5", "XX",
"#0000ff/#ffffff/#ffffff/#000000", "Cavalry", "1", "4", "c", "cav", "1", "5", "XX",
"#0000ff/#ffffff/#ff0000/#000000", "Artillery", "7", "2", "a", "art", "7", "3", "",
"#0000ff/#ffffff/#ff0000/#000000", "Artillery", "5", "3", "a", "art", "5", "3", "",
"#0000ff/#ffffff/#ff0000/#000000", "Artillery", "2", "1", "a", "art", "2", "3", "",
"#0000ff/#ffffff/#ff00ff/#ffffff", "Fresh Strength", "0", "1", "n", "hq2", "4", "4", "",
"#0000ff/#ffffff/#ff00ff/#ffffff", "Fresh Strength", "0", "8", "n", "hq2", "3", "3", "",


"#556b2f/#ffffff/#ffff00/#000000" , "Infantry", "8", "5", "n", "inf", "8", "4", "XX",
"#556b2f/#ffffff/#ffff00/#000000" , "Infantry", "7", "4", "n", "inf", "7", "4", "XX",
"#556b2f/#ffffff/#ffff00/#000000" , "Infantry", "6", "3", "n", "inf", "6", "4", "XX",
"#556b2f/#ffffff/#ffff00/#000000" , "Infantry", "5", "2", "n", "inf", "5", "4", "XX",
"#556b2f/#ffffff/#ffff00/#000000" , "Infantry", "4", "3", "n", "inf", "4", "4", "XX",
"#556b2f/#ffffff/#ffff00/#000000" , "Infantry", "1", "1", "n", "inf", "1", "4", "XX",
"#556b2f/#ffffff/#ffffff/#000000" , "Cavalry", "4", "2", "c", "cav", "4", "5", "XX",
"#556b2f/#ffffff/#ffffff/#000000" , "Cavalry", "3", "1", "c", "cav", "3", "5", "XX",
"#556b2f/#ffffff/#ffffff/#000000" , "Cavalry", "2", "4", "c", "cav", "2", "5", "XX",
"#556b2f/#ffffff/#ffffff/#000000" , "Cavalry", "1", "2", "c", "cav", "1", "5", "XX",
"#556b2f/#ffffff/#ff0000/#000000" , "Artillery", "8", "1", "a", "art", "8", "3", "",
"#556b2f/#ffffff/#ff0000/#000000" , "Artillery", "6", "2", "a", "art", "6", "3", "",
"#556b2f/#ffffff/#ff0000/#000000" , "Artillery", "5", "2", "a", "art", "5", "3", "",
"#556b2f/#ffffff/#ff0000/#000000" , "Artillery", "4", "2", "a", "art", "4", "3", "",
"#556b2f/#ffffff/#ff00ff/#ffffff", "Fresh Strength", "0", "1", "n", "hq2", "4", "4", "",
"#556b2f/#ffffff/#ff00ff/#ffffff", "Fresh Strength", "0", "5", "n", "hq2", "3", "3", "",

"#696969/#ffffff/#ffff00/#000000" , "Infantry", "5", "1", "n", "inf", "5", "4", "XX",
"#696969/#ffffff/#ffff00/#000000" , "Infantry", "3", "1", "n", "inf", "3", "4", "XX",
"#696969/#ffffff/#ffffff/#000000" , "Cavalry", "3", "1", "c", "cav", "3", "5", "XX",
"#696969/#ffffff/#ffffff/#000000" , "Cavalry", "2", "1", "c", "cav", "4", "5", "XX",
"#696969/#ffffff/#ff0000/#000000" , "Artillery", "2", "1", "a", "art", "2", "3", "",
"#696969/#ffffff/#ff00ff/#ffffff", "Fresh Strength", "0", "1", "n", "hq2", "2", "2", "",


"#0000ff/#ffff00/#ffff00/#000000", "Guards Attack","0","1","x", "Guards", "Attack", "", "",
"#aaaaaa/#000000/#ffffff/#000000", "GAME TURN","0","1","x", "GAME", "TURN", "", "",
"#ffffaa/#000000/#ffffff/#000000", "GAME TURN","0","1","x", "side", "to move", "", ""

];

var numbersA=[
];

//unitColor, textColor, boxColor, boxTextColor
//red and black
var coloring2=["#000000","#ffffff","#000000","#ffffff",
"#ff0000","#ffffff","#ff0000","#ffffff"
];

//other colours
var coloring=["#ff1ec0","#000000", "#a54316","#000000",
"#37c34e","#ffffff", "#6a1d6f","#ffffff"
];


var unitNamesA=[];

var rangeA=[];

var hqA=[];

var designateLA = ["Guard", "Guard", "Marchand", "Desjardins", "Morand",
  "Gudin",
  "Legrand", "Leval", "Gardanne", "Gardanne",
 "Marchand", "Friant", "Friant", "Morand",
"Desjardins",  "Desjardins", "Heudelet", "Heudelet", "Heudelet","St.Hilaire", "St.Hilaire","St.Hilaire", "Leval",
  "Legrand", "Legrand", "Gudin", "Leval",
  "Murat", "Murat", "Murat", "Murat", "Murat",
  "Guard", "Murat", "Murat", "Morand", "Gardanne",
  "Leval", "Heudelet", "Legrand", "St.Hilaire", "Desjardins", "Marchand",

  "Guard", "Morand", "Desjardins", "Heudelet", "St.Hilaire", "Friant", "Gudin", "Marchand", "Gardanne",

 "Tutchov", "Essen", "Samoff", "Samoff",  "Sacken", "Sacken", "Kamenski", "Kamenski", "Osterman",
"Essen", "Docturov", "Docturov", "Tutchov", "Osterman", "Tutchov", "Essen", "Docturov", "Osterman",  "Samoff",  "Sacken",
"Tutchov",  "Essen", "Essen",  "Osterman", "Osterman",  "Tutchov",
  "Docturov", "Sacken", "Essen", "Samoff", "Tutchov", "Docturov", "Kamenski", "Osterman",

  "Samoff", "Docturov", "Cam", "Sacken", "Essen", "Tutchov",

  "Lestocq", "Lestocq", "Lestocq", "Lestocq", "Lestocq",
  "Lestocq",
  "Guards",
  "Game", "Side"];

var designateRA=[
  "1", "2", "1", "1", "1",
    "1",
    "1", "1", "1", "2",
   "2", "1", "2", "2",
  "2",  "3", "1", "2", "3","1", "2","2", "2",
    "2", "3", "2", "3",
    "1", "2", "3", "4", "5",
    "3", "6", "7", "3", "3",
    "4", "4", "4", "4", "4", "3",

    "+", "+", "+", "+", "+", "+", "+", "+", "+",

   "1", "1", "1", "2",  "1", "2", "1", "2", "1",
  "2", "1", "2", "2", "2", "3", "3", "3", "3",  "3",  "3",
  "4",  "4", "5",  "4", "5",  "5",
    "4", "4", "6", "4", "6", "5", "3", "6",

    "+", "+", "+", "+", "+", "+",

    "1", "2", "3", "4", "5",
    "Attack",
    "Turn", "to move"
];
//THESE ARE ALL DUMMY VALUES - TRUE VALUES WILL BE CALCULATED BELOW...
var totalPieces =43;
var rusPieces =14;
var gerPieces =28;
var neutPieces = 2;

//...calculated here...
var totUnits = 0;
var rusUnits = 0;
var gerUnits = 0;
var neutUnits =0;

var baseAlen = Abase.length;
var baseB1 = Bbase.slice(0,-1);
var loopLen = unitsA.length/noOfItems;

for(i=0;i<loopLen;i++){
  //alert("i="+i+"noOfItems="+noOfItems+"i*noOfItems="+(i*noOfItems)+"unitsA[i*noOfItems]="+unitsA[i*noOfItems])
  var dumBaseA = unitsA[i*noOfItems].split("/");
  var dumBase0 = dumBaseA[0];
  if(dumBase0==Abase[0]||dumBase0==Abase[1]||dumBase0==Abase[2]){//if side A
    rusUnits = 1*rusUnits + 1*unitsA[(i*noOfItems)+3];
  }
  else if(dumBase0==Bbase[0]||dumBase0==Bbase[1]||dumBase0==Bbase[2]){//if side B
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
neutNumber= rusUnits+gerUnits+1;//rusUnits+gerUnits+1; //index number of first neutral piece


var board1 = "boards/Dresden board 8.png";
var board_setup = "boards/Dresden board 4.png";
var board2 = "boards/Austerlitz board 2.png";
var board3 = "boards/Dresden board 8.png";

var boardA = ["boards/Eylau board 8.png", "boards/Eylau board 8.png",
"boards/Eylau board 8.png", "boards/Eylau board 8.png" ]


var hidJapUnitA = new Array();
var hidJapUnitAlen = 0;
/*
  hidJapUnitA[0]="neut/j_blank1.jpg";
  hidJapUnitA[1]="Japan dummy unit \n...?";
  hidJapUnitAlen++;
*/
var hidJapArtA = new Array();
var hidJapArtAlen = 0;
/*
    hidJapArtA[0]="neut/j_blank1.jpg";
    hidJapArtA[1]="Japan dummy unit \n...?";
    hidJapArtAlen++;
*/
var japInfA=[
]
var japInfTListA =[
]

var japArtA=[
]
var japArtTListA =[
]

var maxTurns = 12;
var startYear=7;
//var seasonA=new Array();
var seasonA=["14:00","15:15","18:00 Night","07:00","08:15","09:30", "10:45","02:00 Night",
 "12:00","13:25","14:30","15:45","17:00"];
var yearAdd = 0;//counts how many times go thru seasonA array
//var currentPlayer=nameB;//give name of non-starting player as it clicks over as starts
//above moved to 'units' file
var startSeasonOffset=0;
var seasonNow=seasonA[0+startSeasonOffset];
var yearNow=startYear;


function nameOfTurn(){
var weather = "";
	if(turnLetter=="A"){
	currentPlayer=startingPlayer;}
else{
	currentPlayer=secondPlayer;}
var step3 = turnNumber*1;
step3=turnNumber;
turnPos = step3;
if(turnPos==3){
yearAdd++;
yearNow=yearNow+1;
//turnPos=0;
}
//if(turnPos>5&&turnPos<20){
 // weather = "RAIN";
 //}
//var step2=step3-step1*4;
//seasonNow=seasonA[step3];
seasonNow=seasonA[turnPos];
var dummyTurnNo = 1*turnNumber+1;
document.getElementById("turnBox").innerText = currentPlayer+"\n"+seasonNow+"\n"+yearNow+"th Feb "+weather+" (#"+dummyTurnNo+")";//+"-"+Number(yearNow+1);
document.getElementById("timebox").innerText = currentPlayer+"\n"+seasonNow+"\n"+yearNow+"th Feb "+weather+" (#"+dummyTurnNo+")";//+"-"+Number(yearNow+1);
if(turnTock==2){alert("new turn: "+dummyTurnNo+" "+currentPlayer+" (of "+maxTurns+")");
turnTock=0;
saveWindow2();}
//statusNow();
}
