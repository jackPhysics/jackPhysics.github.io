var situationAddress="situations/Waterloo.html";
var tecAddress="charts/TEC Waterloo.html";
var crtAddress="charts/CRT Borodino.html"; //"charts/goa crt.htm";
var crt2Address="charts/CRT Waterloo.html"
var reinfAddress="charts/reinf ruled.html" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/SoP Austerlitz.html" //seq of play
var victoryAddress="situations/pharsalus_sit.html" //victory, situation
var weatherAddress="charts/Kr battle manual.pdf" //weather
var supplyAddress="charts/map Waterloo.html" //MAP
var rulesAddress="rules/Waterloo rules.html"
var errataAddress="rules/Waterloo examples.html" //extra rules
var manualAddress="rules/OOB Borodino.html" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/Waterloo board 8.png";
var presetupGameData = "";
var setupGameData ="";

var setupGameData=new Array();
    setupGameData[0] = "0,0,236,0,0,0,384,448,7, 0,0,239,0,0,0,262,377,7, 0,0,266,0,0,0,363,435,6, 0,0,245,0,0,0,300,380,5, 0,0,263,0,0,0,381,425,5, 0,0,203,0,0,0,422,331,5, 0,0,206,0,0,0,402,343,4, 0,0,209,0,0,0,443,320,4, 0,0,212,0,0,0,463,331,4, 0,0,251,0,0,0,363,367,4, 0,0,257,0,0,0,363,391,4, 0,0,269,0,0,0,363,412,1, 0,0,233,0,0,0,301,426,4, 0,0,221,0,0,0,464,378,3, 0,0,242,0,0,0,201,366,2, 0,0,227,0,0,0,282,413,2, 0,0,200,0,0,0,504,308,2, 0,0,230,0,0,0,302,401,2, 0,0,215,0,0,0,443,367,1, 0,0,218,0,0,0,465,355,1, 0,0,254,0,0,0,382,378,1, 0,0,224,0,0,0,403,390,1, 0,0,197,0,0,0,383,307,5, 0,0,248,0,0,0,280,389,3, 0,0,194,0,0,0,402,297,3, 0,0,260,0,0,0,383,402,2, 0,0,134,0,0,0,444,226,7, 0,0,155,0,0,0,301,285,7, 0,0,158,0,0,0,260,284,6, 0,0,149,0,0,0,342,261,6, 0,0,140,0,0,0,403,249,6, 0,0,125,0,0,0,199,249,6, 0,0,137,0,0,0,423,237,5, 0,0,122,0,0,0,159,272,4, 0,0,128,0,0,0,261,213,2, 0,0,276,0,0,0,282,366,1, 0,0,116,0,0,0,322,249,4, 0,0,113,0,0,0,383,214,4, 0,0,119,0,0,0,240,296,3, 0,0,110,0,0,0,443,202,3, 0,0,131,0,0,0,341,214,1, 0,0,146,0,0,0,362,273,3, 0,0,143,0,0,0,382,261,3, 0,0,152,0,0,0,322,272,2, 0,0,161,0,0,0,657,201,5, 0,0,164,0,0,0,658,222,4, 0,0,167,0,0,0,657,243,4, 0,0,170,0,0,0,657,264,4, 0,0,173,0,0,0,657,286,4, 0,0,176,0,0,0,657,306,3, 0,0,179,0,0,0,658,327,3, 0,0,182,0,0,0,657,349,4, 0,0,185,0,0,0,657,370,3, 0,0,188,0,0,0,673,150,TURN, 0,0,191,0,0,0,59,388,to move, 0,0,1,8,A,0,situations/Waterloo.html";
setupGameData[1] = "";
    setupGameData[2] = "";
    setupGameData[3] = "";
    var setUpGameNo = 0;
var maxNoOfSetUps = 1;
var unitLocation = "units/";//"units/"; "units3/";
var unitExtension = ".jpg";//".jpg"; ".png";
//var boardSize = 2;//start size of board 1=smallest; 8=largest

var deadPosA_X0 = 100;
var deadPosA_delX = 200;
var deadPosA_Y0 = 2000;
var deadPosA_delY = 1400;
var deadPosB_X0 = 5400;
var deadPosB_delX = 200;
var deadPosB_Y0 = 2000;
var deadPosB_delY = 1400;

var swidth=2000*3; //width of biggest board
var sheight=2000*3; //height of biggest board
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
var Bbase = ["#696969","#ff003b", "#00ff00"];
var Apanic=40;
var Bpanic=40;
var maxTurns = 10;
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
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "7", "2", "n", "inf", "7", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "6", "1", "n", "inf", "6", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "5", "3", "n", "inf", "5", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "4", "5", "n", "inf", "4", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "2", "1", "n", "inf", "2", "4", "XX",
"#0000ff/#ffffff/#ffffff/#000000", "Cavalry", "4", "1", "c", "cav", "4", "5", "XX",
"#0000ff/#ffffff/#ffffff/#000000", "Cavalry", "3", "1", "c", "cav", "3", "6", "XX",
"#0000ff/#ffffff/#ffffff/#000000", "Cavalry", "2", "4", "c", "cav", "2", "5", "XX",
"#0000ff/#ffffff/#ffffff/#000000", "Cavalry", "1", "4", "c", "cav", "1", "5", "XX",
"#0000ff/#ffffff/#ff0000/#000000", "Artillery", "5", "1", "a", "art", "5", "3", "",
"#0000ff/#ffffff/#ff0000/#000000", "Artillery", "3", "2", "a", "art", "3", "3", "",
"#0000ff/#ffffff/#ff0000/#000000", "Artillery", "2", "1", "a", "art", "2", "3", "",

"#ff003b/#000000/#ffff00/#000000" , "Infantry", "7", "2", "n", "inf", "7", "4", "XX",
"#ff003b/#000000/#ffff00/#000000" , "Infantry", "6", "4", "n", "inf", "6", "4", "XX",
"#ff003b/#000000/#ffff00/#000000" , "Infantry", "5", "1", "n", "inf", "5", "4", "XX",
"#ff003b/#000000/#ffff00/#000000" , "Infantry", "4", "1", "n", "inf", "4", "4", "XX",
"#ff003b/#000000/#ffff00/#000000" , "Infantry", "2", "1", "n", "inf", "2", "4", "XX",
"#ff003b/#000000/#ffff00/#000000" , "Infantry", "1", "1", "n", "inf", "1", "4", "X",
"#ff003b/#000000/#ffffff/#000000" , "Cavalry", "4", "2", "c", "cav", "4", "5", "XX",
"#ff003b/#000000/#ffffff/#000000" , "Cavalry", "3", "2", "c", "cav", "3", "5", "XX",
"#ff003b/#000000/#ffffff/#000000" , "Cavalry", "1", "1", "c", "cav", "1", "5", "XX",
"#ff003b/#000000/#00ffff/#000000" , "Artillery", "3", "2", "a", "art", "3", "3", "",
"#ff003b/#000000/#00ffff/#000000" , "Artillery", "2", "1", "a", "art", "2", "3", "",

"#696969/#000000/#ffff00/#000000" , "Infantry", "5", "1", "n", "inf", "5", "4", "XX",
"#696969/#000000/#ffff00/#000000" , "Infantry", "4", "4", "n", "inf", "4", "4", "XX",
"#696969/#000000/#ffffff/#000000" , "Cavalry", "3", "2", "c", "cav", "3", "5", "XX",
"#696969/#000000/#ff0000/#000000" , "Artillery", "4", "1", "a", "art", "4", "3", "",
"#696969/#000000/#ff0000/#000000" , "Artillery", "3", "1", "a", "art", "3", "3", "",

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

var hqA=["", "I", "III", "IV","VIII", "V",
 "IG", "IG","1st", "2nd", "3rd", "4th",
"",
"", "", "IV Corps", "Imperial Grd",
"III Corps", "III Corps", "Imperial Grd", "Imperial Grd",
 "I Corps", "IV*(I) Corps", "IV Corps", "IV Corps",
 "I Corps", "V Corps", "V Corps",
"III Corps",
"VIII Corps","VIII Corps",
"Imperial Grd", "Imperial Grd",
 "I Corps", "III Corps",  "IV Corps", "V Corps", "I Res. Cav.", "I Res. Cav.", "I Res. Cav.", "II Res. Cav.", "II Res. Cav.", "III Res. Cav.", "III Res. Cav.", "IV Res. Cav.", "IV Res. Cav.",
 "VIII Corps", "III Res. Cav.", "IV Res. Cav.",
 "Imperial Grd", "I Corps", "IV Corps",
 "III Corps", "V Corps", "VIII Corps",
 "", "III", "II", "IV","VI", "VII",
  "VIII", "IG",
];

var designateLA=[
"", "", "", "",  "","", "",  "", "", "",
 "", "", "", "",  "", "", "", "","", "","", "", "","",

"", "", "", "",  "","", "",  "", "", "",
 "", "", "", "",  "", "", "", "",

"", "", "", "",  "","", "",  "", "",

"Game", "Side"];

var designateRA=[
"Old Gd", "Mid Gd", "Yng Gd", "9",  "2","5", "19",  "4", "3", "1",
 "20", "5","GD Hvy", "GD Lght", "12",  "11", "1", "2", "13", "3","5", "14","Gd", "II", "I","VI",


"1 Gd", "5", "2", "3",  "4","6", "2 DB",  "3 DB", "Bru", "",
 "1 Gd", "", "", "", "",  "I", "R", "II",


"", "", "", "",  "","", "",  "", "",

"Turn", "to move"];

//THESE ARE ALL DUMMY VALUES - TRUE VALUES WILL BE CALCULATED BELOW...
var totalPieces =51;
var rusPieces =22;
var gerPieces =27;
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


var board1 = "boards/Waterloo board 8.png";
var board_setup = "boards/Waterloo board 4.png";
var board2 = "boards/Waterloo board 2.png";
var board3 = "boards/Waterloo board 8.png";

var boardA = ["boards/Waterloo board 8.png", "boards/Waterloo board 8.png",
"boards/Waterloo board 8.png", "boards/Waterloo board 8.png" ]


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

var startYear=18;
//var seasonA=new Array();
var seasonA=["13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00"];
var yearAdd = 0;//cpunts how many times go thru seasonA array
//var currentPlayer=nameB;//give name of non-starting player as it clicks over as starts
//above moved to 'units' file
var startSeasonOffset=0;
var seasonNow=seasonA[0+startSeasonOffset];
var yearNow=startYear;


function nameOfTurn(){
	if(turnLetter=="A"){
	currentPlayer=startingPlayer;}
else{
	currentPlayer=secondPlayer;}
var step3 = turnNumber*1;
step3=turnNumber+startSeasonOffset;
turnPos = step3-(seasonA.length)*yearAdd;
if(turnPos == seasonA.length){
yearAdd++;
yearNow=yearNow+1;
turnPos=0;}
//var step2=step3-step1*4;
//seasonNow=seasonA[step3];
seasonNow=seasonA[turnPos];
var dummyTurnNo = 1*turnNumber+1;
document.getElementById("turnBox").innerText = currentPlayer+"\n"+seasonNow+"\n"+yearNow+"th Jun (#"+dummyTurnNo+")";//+"-"+Number(yearNow+1);
document.getElementById("timebox").innerText = currentPlayer+"\n"+seasonNow+"\n"+yearNow+"th Jun (#"+dummyTurnNo+")";//+"-"+Number(yearNow+1);
if(turnTock==2){alert("new turn: "+dummyTurnNo+" "+currentPlayer+" (of "+maxTurns+")");
turnTock=0;
saveWindow2();}
//statusNow();
}
