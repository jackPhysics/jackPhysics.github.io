var situationAddress="charts/wagram rules.html";
var tecAddress="charts/nap_quad_TEC.html";
var crt2Address="charts/nap_quad_CRT.html"; //"charts/goa crt.htm";
var crtAddress="charts/CRT Dresden.html"
var reinfAddress="charts/reinf ruled.html" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/SoP Austerlitz.html" //seq of play
var victoryAddress="charts/wagram victory.html" //victory, situation
var weatherAddress="charts/Kr battle manual.pdf" //weather
var supplyAddress="charts/map Dresden.html" //MAP
var rulesAddress="rules/nap_quad_rules.pdf"
var errataAddress="rules/reinf rulesAddress.html" //extra rules
var manualAddress="rules/OOB Borodino.html" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/Wagram board 8 v2.png";
var presetupGameData = "";
var setupGameData ="";

var setupGameData = new Array();
//rotated to show which units cannot move turn 1
setupGameData[0] = "0,0,344,0,0,0,435,666,9, 0,0,347,0,0,0,426,682,9, 0,0,438,0,0,0,71,379,9, 0,0,360,0,0,0,463,580,8, 0,0,396,0,0,0,214,472,8, 0,0,399,0,0,0,213,491,8, 0,0,323,0,0,0,199,799,6, 0,0,310,0,0,0,209,780,6, 0,0,319,0,0,0,217,802,6, 0,0,316,0,0,0,231,784,6, 0,0,326,0,0,0,225,768,6, 0,0,408,0,0,0,297,466,6, 0,0,411,0,0,0,278,465,6, 0,0,414,0,0,0,297,496,6, 0,0,417,0,0,0,277,488,6, 0,0,441,0,0,0,74,410,6, 0,0,384,0,0,0,204,565,5, 0,0,444,0,0,0,73,436,5, 0,0,363,0,0,0,443,575,4, 0,0,366,0,0,0,462,599,4, 0,0,369,0,0,0,441,597,4, 0,0,387,0,0,0,213,580,3, 0,0,447,0,0,0,72,459,6, 0,0,390,0,0,0,225,564,4, 0,0,420,0,0,0,257,475,3, 0,0,329,0,0,0,236,805,2, 0,0,332,0,0,0,188,772,2, 0,0,402,0,0,0,196,474,2, 0,0,335,0,0,0,206,757,1, 0,0,357,0,0,0,416,656,1, 0,0,381,0,0,0,460,558,1, 0,0,393,0,0,0,208,551,10, 0,0,429,0,0,0,72,500,10, 0,0,432,0,0,0,68,495,10, 0,0,435,0,0,0,62,486,10, 0,0,353,0,0,0,408,678,8, 0,0,423,0,0,0,264,499,8, 0,0,426,0,0,0,278,502,8, 0,0,338,0,0,0,245,766,6, 0,0,341,0,0,0,253,787,6, 0,0,405,0,0,0,197,492,6, 0,0,372,0,0,0,424,580,6, 0,0,375,0,0,0,484,585,6, 0,0,177,0,0,0,670,682,9, 0,0,180,0,0,0,643,760,8, 0,0,183,0,0,0,643,793,8, 0,0,207,0,0,0,725,587,7, 0,0,210,0,0,0,751,572,7, 0,0,162,0,0,0,588,854,6, 0,0,165,0,0,0,615,840,6, 0,0,213,0,0,0,697,634,6, 0,0,216,0,0,0,669,775,6, 0,0,219,0,0,0,670,805,6, 0,0,222,0,0,0,669,837,6, 0,0,234,0,0,0,696,71,6, 0,0,237,0,0,0,670,116,6, 0,0,264,0,0,0,859,289,6, 0,0,267,0,0,0,723,275,6, 0,0,131,0,0,0,541,40,6, 0,0,134,0,0,0,566,39,6, 0,0,143,0,0,0,445,1137,6, 0,0,152,0,0,0,535,1142,6, 0,0,149,0,0,0,509,1141,6, 0,0,255,0,0,0,669,86,5, 0,0,137,0,0,0,590,39,5, 0,0,146,0,0,0,480,1141,5, 0,0,270,0,0,0,805,351,3, 0,0,273,0,0,0,806,415,3, 0,0,276,0,0,0,860,448,3, 0,0,171,0,0,0,509,933,2, 0,0,246,0,0,0,698,101,2, 0,0,168,0,0,0,400,1090,1, 0,0,228,0,0,0,697,760,1, 0,0,225,0,0,0,697,822,1, 0,0,186,0,0,0,697,727,9, 0,0,292,0,0,0,753,636,9, 0,0,295,0,0,0,698,855,9, 0,0,286,0,0,0,725,85,9, 0,0,140,0,0,0,616,39,8, 0,0,158,0,0,0,566,1143,7, 0,0,174,0,0,0,617,870,6, 0,0,298,0,0,0,724,210,6, 0,0,204,0,0,0,292,352,25 pts, 0,0,201,0,0,0,283,477,30 pts, 0,0,198,0,0,0,218,557,25 pts, 0,0,304,0,0,0,900,87,TURN, 0,0,301,0,0,0,200,289,to move, 0,0,1,8,A,0,situations/wagram rules.pdf";
    //non rotated
setupGameData[1] = "0,0,487,0,0,0,399,683,9, 0,0,483,0,0,0,452,681,9, 0,0,583,0,0,0,155,386,9, 0,0,502,0,0,0,456,652,8, 0,0,563,0,0,0,237,463,8, 0,0,566,0,0,0,211,510,8, 0,0,459,0,0,0,264,855,6, 0,0,468,0,0,0,213,888,6, 0,0,456,0,0,0,265,823,6, 0,0,462,0,0,0,291,777,6, 0,0,465,0,0,0,238,871,6, 0,0,531,0,0,0,318,509,6, 0,0,537,0,0,0,267,417,6, 0,0,521,0,0,0,319,477,6, 0,0,534,0,0,0,291,526,6, 0,0,586,0,0,0,128,402,6, 0,0,549,0,0,0,212,603,5, 0,0,589,0,0,0,129,370,5, 0,0,511,0,0,0,508,557,4, 0,0,499,0,0,0,507,588,4, 0,0,505,0,0,0,453,619,4, 0,0,556,0,0,0,235,555,3, 0,0,592,0,0,0,102,386,6, 0,0,553,0,0,0,210,543,4, 0,0,540,0,0,0,290,462,3, 0,0,471,0,0,0,186,872,2, 0,0,474,0,0,0,291,745,2, 0,0,569,0,0,0,210,480,2, 0,0,477,0,0,0,210,856,1, 0,0,490,0,0,0,426,669,1, 0,0,508,0,0,0,482,605,1, 0,0,543,0,0,0,235,587,10, 0,0,579,0,0,0,181,494,10, 0,0,576,0,0,0,181,464,10, 0,0,573,0,0,0,183,524,10, 0,0,480,0,0,0,426,698,8, 0,0,528,0,0,0,319,447,8, 0,0,524,0,0,0,294,431,8, 0,0,453,0,0,0,292,808,6, 0,0,450,0,0,0,291,838,6, 0,0,559,0,0,0,235,492,6, 0,0,496,0,0,0,482,635,6, 0,0,493,0,0,0,509,618,6, 0,0,177,0,0,0,670,682,9, 0,0,180,0,0,0,643,760,8, 0,0,183,0,0,0,643,793,8, 0,0,207,0,0,0,725,587,7, 0,0,210,0,0,0,751,572,7, 0,0,162,0,0,0,588,854,6, 0,0,165,0,0,0,615,840,6, 0,0,213,0,0,0,697,634,6, 0,0,216,0,0,0,669,775,6, 0,0,219,0,0,0,670,805,6, 0,0,222,0,0,0,669,837,6, 0,0,234,0,0,0,696,71,6, 0,0,237,0,0,0,670,116,6, 0,0,264,0,0,0,859,289,6, 0,0,267,0,0,0,723,275,6, 0,0,131,0,0,0,541,40,6, 0,0,134,0,0,0,566,39,6, 0,0,143,0,0,0,445,1137,6, 0,0,152,0,0,0,535,1142,6, 0,0,149,0,0,0,509,1141,6, 0,0,255,0,0,0,669,86,5, 0,0,137,0,0,0,590,39,5, 0,0,146,0,0,0,480,1141,5, 0,0,270,0,0,0,805,351,3, 0,0,273,0,0,0,806,415,3, 0,0,276,0,0,0,860,448,3, 0,0,171,0,0,0,509,933,2, 0,0,246,0,0,0,698,101,2, 0,0,168,0,0,0,400,1090,1, 0,0,228,0,0,0,697,760,1, 0,0,225,0,0,0,697,822,1, 0,0,186,0,0,0,697,727,9, 0,0,292,0,0,0,753,636,9, 0,0,295,0,0,0,698,855,9, 0,0,286,0,0,0,725,85,9, 0,0,140,0,0,0,616,39,8, 0,0,158,0,0,0,566,1143,7, 0,0,174,0,0,0,617,870,6, 0,0,298,0,0,0,724,210,6, 0,0,204,0,0,0,292,352,25 pts, 0,0,201,0,0,0,283,477,30 pts, 0,0,198,0,0,0,218,557,25 pts, 0,0,304,0,0,0,900,87,TURN, 0,0,301,0,0,0,200,289,to move, 0,0,1,8,A,0,situations/wagram rules.pdf";
    setupGameData[2] = "";
    setupGameData[3] = "";
    var setUpGameNo = 0;
var maxNoOfSetUps = 2;
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
var sheight=2400*4; //height of biggest board
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
var Apanic=50;
var Bpanic=45;
const nameA="French";//player listed 1st in unitsA
const nameB = "Austrian";
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
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "9", "3", "n", "inf", "9", "4", "XX",
"#00aaff/#ffffff/#ffff00/#000000", "Infantry", "8", "1", "n", "inf", "8", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "8", "2", "n", "inf", "8", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "6", "10", "n", "inf", "6", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "5", "2", "n", "inf", "5", "4", "XX",
"#00aaff/#ffffff/#ffff00/#000000", "Infantry", "4", "3", "n", "inf", "4", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "3", "1", "n", "inf", "3", "4", "XX",
"#0000ff/#ffffff/#ffffff/#000000", "Cavalry", "6", "1", "c", "cav", "6", "6", "XX",
"#0000ff/#ffffff/#ffffff/#000000", "Cavalry", "4", "1", "c", "cav", "4", "6", "XX",
"#0000ff/#ffffff/#ffffff/#000000", "Cavalry", "3", "1", "c", "cav", "3", "6", "XX",
"#0000ff/#ffffff/#ffffff/#000000", "Cavalry", "2", "3", "c", "cav", "2", "6", "XX",
"#0000ff/#ffffff/#ffffff/#000000", "Cavalry", "1", "2", "c", "cav", "1", "6", "XX",
"#00aaff/#ffffff/#ffffff/#000000", "Cavalry", "1", "1", "c", "cav", "1", "6", "XX",
"#0000ff/#ffffff/#ff0000/#000000", "Artillery", "10", "1", "a", "art", "10", "4", "||",
"#0000ff/#ffffff/#ff0000/#000000", "Artillery", "10", "3", "a", "art", "10", "1", "||",
"#0000ff/#ffffff/#ff0000/#000000", "Artillery", "8", "3", "a", "art", "8", "4", "||",
"#0000ff/#ffffff/#ff0000/#000000", "Artillery", "6", "3", "a", "art", "6", "4", "||",
"#00aaff/#ffffff/#ff0000/#000000", "Artillery", "6", "2", "a", "art", "6", "4", "||",


"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "9", "1", "n", "inf", "9", "4", "XX",
"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "8", "2", "n", "inf", "8", "4", "XX",
"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "7", "2", "n", "inf", "7", "4", "XX",
"#ffbc8f/#000000/#ffff00/#000000" , "Infantry", "6", "2", "n", "inf", "6", "4", "XX",
"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "6", "10", "n", "inf", "6", "4", "XX",
"#ffbc8f/#000000/#ffff00/#000000" , "Infantry", "6", "3", "n", "inf", "6", "4", "XX",
"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "5", "2", "n", "inf", "5", "4", "XX",
"#ffbc8f/#000000/#ffffff/#000000" , "Cavalry", "5", "1", "c", "cav", "5", "6", "XX",
"#8fbc8f/#000000/#ffffff/#000000" , "Cavalry", "3", "3", "c", "cav", "3", "6", "XX",
"#ffbc8f/#000000/#ffffff/#000000" , "Cavalry", "2", "1", "c", "cav", "2", "6", "XX",
"#8fbc8f/#000000/#ffffff/#000000" , "Cavalry", "2", "1", "c", "cav", "2", "6", "XX",
"#ffbc8f/#000000/#ffffff/#000000" , "Cavalry", "1", "1", "c", "cav", "1", "6", "XX",
"#8fbc8f/#000000/#ffffff/#000000" , "Cavalry", "1", "2", "c", "cav", "1", "6", "XX",
"#8fbc8f/#000000/#ff0000/#000000" , "Artillery", "9", "4", "a", "art", "9", "4", "||",
"#8fbc8f/#000000/#ff0000/#000000" , "Artillery", "8", "1", "a", "art", "8", "4", "||",
"#ffbc8f/#000000/#ff0000/#000000" , "Artillery", "7", "1", "a", "art", "7", "4", "||",
"#ffbc8f/#000000/#ff0000/#000000" , "Artillery", "6", "1", "a", "art", "6", "4", "||",
"#8fbc8f/#000000/#ff0000/#000000" , "Artillery", "6", "1", "a", "art", "6", "4", "||",


"#ff3333/#000000/#ffff00/#000000", "Objective","0","1","x", "Aspern", "25 pts", "", "",
"#ff3333/#000000/#ffff00/#000000", "Objective","0","1","x", "Essling", "30 pts", "", "",
"#ff3333/#000000/#ffff00/#000000", "Objective","0","1","x", "Gross En.", "25 pts", "", "",
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

var designateLA = ["II Oudinot", "II Oudinot", "XI Marmont",
  "I MacDonald", "IX Barnadotte",   "IX Barnadotte", "III Davout",
  "III Davout", "III Davout", "II Oudinot", "III Davout",
  "IV Massena", "IV Massena", "IV Massena",
  "IV Massena", "Reserve", "Imp Gd Walther", "Reserve", "I MacDonald", "I MacDonald",
  "I MacDonald", "Imp Gd Walther",

  "Reserve", "Imp Gd Walther", "IV Massena", "III Davout", "III Davout",
  "IX Barnadotte", "III Davout", "II Oudinot", "I MacDonald",


  "Imp Gd Walther", "Lobau", "Lobau", "Lobau",
  "II Oudinot", "IV Massena",
  "IV Massena", "III Davout", "III Davout",
  "IX Barnadotte","I MacDonald", "I MacDonald",

  "II Hohenzollern", "II Hohenzollern", "II Hohenzollern",
  "I Bellgarde", "I Bellgarde",
  "AdvGd Nordmann", "AdvGd Nordmann", "I Bellgarde",
  "IV Rosenberg", "IV Rosenberg", "IV Rosenberg",
  "VI Klenau", "VI Klenau",
  "Res Lichtenstein", "Res Lichtenstein",
  "III Kollowrat", "III Kollowrat",
  "Archduke John", "Archduke John", "Archduke John",
  "VI Klenau", "III Kollowrat",

  "Archduke John", "Res Lichtenstein", "Res Lichtenstein", "Res Lichtenstein",
  "AdvGd Nordmann", "VI Klenau", "AdvGd Nordmann",
  "II Hohenzollern", "IV Rosenberg",

  "II Hohenzollern", "I Bellgarde", "IV Rosenberg",
  "VI Klenau", "III Kollowrat", "Archduke John",
  "AdvGd Nordmann", "Res Lichtenstein",

  "Aspern", "Essling", "Gross Enzerdorf", "Game", "Side"];

var designateRA = ["Claparede", "Tharreau", "composite",
  "D'Hillier", "Dupas",   "Saxon", "Morand",
  "Friant", "Gudin", "Grandjean", "Demont",
  "Legrand", "Boudet", "St.Cyr",
  "Molitor", "Reynier", "Old Gd", "Wrede", "Broussier", "Lecchi",
  "Pacthod", "Young Gd",

  "Bessieres", "", "Lasalle", "Grouchy", "Montbrun",
  "", "Pully", "Colbert", "Gerard",

  "", "1st", "2nd", "3rd",
  "", "1st",
  "2nd", "1st", "2nd",
  "","1st Italy", "2nd Italy",

  "1st", "2nd", "3rd",
  "1st", "2nd",
  "1st", "2nd", "3rd",
  "1st", "2nd", "3rd",
  "1st", "2nd",
  "1st", "2nd",
  "1st", "2nd",
  "1st", "2nd", "3rd",
  "3rd", "3rd",

  "", "1st", "2nd", "3rd",
  "2nd", "", "1st",
  "1st", "",

  "", "", "",
  "", "", "",
  "", "",

  "25 pts", "30 pts", "25 pts",
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


var board1 = "boards/Wagram board 8 v2.png";
var board_setup = "boards/Wagram setup.png";
var board2 = "boards/Wagram board 8 v2.png";
var board3 = "boards/Wagram board 8 v2.png";

var boardA = ["boards/Wagram setup.png", "boards/Wagram board 8 v2.png",
"boards/Wagram board 8 v2.png", "boards/Wagram board 8 v2.png" ]


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

var maxTurns = 14;
var startYear=14;
//var seasonA=new Array();
var seasonA=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
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
//if(turnPos==3){
//yearAdd++;
//yearNow=yearNow+1;
//turnPos=0;
//}
//if(turnPos>5&&turnPos<20){
 // weather = "RAIN";
 //}
//var step2=step3-step1*4;
//seasonNow=seasonA[step3];
seasonNow=seasonA[turnPos];
var dummyTurnNo = 1*turnNumber+1;
document.getElementById("turnBox").innerText = currentPlayer+"\nTurn "+seasonNow+"\n"+yearNow+"th June "+weather+" (#"+dummyTurnNo+")";//+"-"+Number(yearNow+1);
document.getElementById("timebox").innerText = currentPlayer+"\nTurn "+seasonNow+"\n"+yearNow+"th June "+weather+" (#"+dummyTurnNo+")";//+"-"+Number(yearNow+1);
if(turnTock==2){alert("new turn: "+dummyTurnNo+" "+currentPlayer+" (of "+maxTurns+")");
turnTock=0;
saveWindow2();}
//statusNow();
}
