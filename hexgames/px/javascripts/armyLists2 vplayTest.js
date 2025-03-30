
var redArmyMax = 24;
var blackArmyMax = 24;
var addSupplyUnitsFlag = false;
if(printArmiesFlag){addSupplyUnitsFlag = true;}
var addDummyUnitsFlag = false;
var addAirPowerFlag = false;
var designateLN=[49,106,80,118,45,102,77,103,43,23,298,112];

var allTheArmiesA = ["All Units Red","All Units Black","Spartans", "Normans", "Vikings",
  "Saxons","Romans", "Pike and Shot", "Henry V","Arabs", "Hordes", "Militia Levy",
 "Mongols", "Angry Mob", "Mob", "Franks", "Legionaires",
 "British WWI Infantry", "US Cavalry c.1776","Sioux Warriors", "Polish Winged Hussars",
"Napoleonic French Grenadiers", "New Model Army", "Roundheads"];

var allTheUnitsA = [
  "0","A", "n","inf","2","3","","","MI",
  "1","A", "n","spear","3","3","","","MS",
  "2","A", "n","hspear","4","3","","","PS",
  "3","A", "n","hspear","6","4","","","PP",
  "4","A", "n","spear","[4]","5","","","LT",
  "5","A", "n","ex","3","5","2","1","EX",

  "6", "B", "n","inf","[6]","5","","","BI",
  "7","B", "n","sd","4","4","","","SD",
  "8","B", "n","ax","3","4","","","AX",

  "9","C", "n","scout","1","9","","","LC",
  "10","C", "n","cav","[3]","9","","","MC",
  "11","C", "n","cav","[4]","7","","","HC",

  "12","D", "n","vf","4","15","","","VF",
  "13","D", "n","el","[8]","6","","","EL",
  "14","D", "n","ch1","o","9","","","CH",
  "15","D", "n","ch1","o","6","","","CH",
  "16","D", "n","ch1","o","10","","","CH",

  "17","Ff", "f","aa","o","5","2","2","BW",
  "18","Ff", "f","aa","o","5","2","3","IB",
  "19","Ff", "f","sk","[2]","5","2","1","SK",
  "20","Ff", "f","bl","o","5","3","7","BL",
  "21","Ff", "f","cb","o","5","2","3","CB",
  "22","Ff", "f","arq","o","5","2","3","AE",
  "23","Ff", "f","arq","o","5","2","4","AL",
  "24","Ff", "f","lb","o","5","3","3","LB",

  "25","Mf", "f","hb","o","9","1","2","HB",
  "26","Mf", "f","hb","2","9","1","1","OC",
  "27","Mf", "f","bc","3","9","1","2","BC",
  "28","Mf", "f","hvart","o","2","3","7","HA",
  "29","Mf", "f","hvart","o","-","3","7","HA",
  "30","Mf", "f","hvart","o","4","3","7","HA",
  "31","Mf", "f","art","o","4","2","5","LA",
  "32","Mf", "f","art","o","-","2","5","LA",
  "33","Mf", "f","art","o","8","2","5","LA",

  "34","B", "n","ax","3","4","","","AX(LB)",
  "35","B", "n","ax","3","4","1","1","AX(FR)",
  "36","Ff", "f","s1","2","5","2","1","SK(BC)",
  "37","B", "n","sd","4","4","","","SD(BC)",
  "38","B", "n","pl","4","4","1","1","PL",
  "39","A", "n","hspear","4","3","","","PS(HC)",
  "40","B", "n","sd","4","4","","","SD(MC)",
  "41","Ff", "f","cb","o","5","2","3","CB(LC)",
  "42","A", "n","mob","[2]","3","","","MB",


];

var allTheLeadersA = [

];

function findArmies(){

if(changeRedFlag&&redArmyNo==0||changeBlackFlag&&blackArmyNo==1){
var nameQ="All Units Red";

var qbase = ["#ff0000","#ff0000", "#ff0000"];


var unitsQ=[
  "#ff0000/#ffffff/#ff0000/#ffffff","A", "1", "1", "n","inf","2","3","","","MI",
  "#ff0000/#ffffff/#ff0000/#ffffff","A", "2", "1", "n","spear","3","3","","","MS",
  "#ff0000/#ffffff/#ff0000/#ffffff","A", "2", "1", "n","hspear","4","3","","","PS",
  "#ff0000/#ffffff/#ff0000/#ffffff","A", "3", "1", "n","hspear","6","4","","","PP",
  "#ff0000/#ffffff/#ff0000/#ffffff","A", "2", "1", "n","spear","[4]","5","","","LT",
  "#ff0000/#ffffff/#ff0000/#ffffff","A", "4", "1", "n","ex","3","5","2","1","EX",

  "#ff0000/#ffffff/#ff0000/#ffffff","B", "3", "1", "n","inf","[6]","5","","","BI",
"#ff0000/#ffffff/#ff0000/#ffffff","B", "2", "1", "n","sd","4","4","","","SD",
"#ff0000/#ffffff/#ff0000/#ffffff","B", "2", "1", "n","ax","3","4","","","AX",

  "#ff0000/#ffffff/#ff0000/#ffffff","C", "1", "1", "n","scout","1","9","","","LC",
  "#ff0000/#ffffff/#ff0000/#ffffff","C", "2", "1", "n","cav","[3]","9","","","MC",
  "#ff0000/#ffffff/#ff0000/#ffffff","C", "3", "1", "n","cav","[4]","7","","","HC",

    "#ff0000/#ffffff/#ff0000/#ffffff","D", "1", "1", "n","vf","4","15","","","VF",
  "#ff0000/#ffffff/#ff0000/#ffffff","D", "1", "1", "n","el","[8]","6","","","EL",
  "#ff0000/#ffffff/#ff0000/#ffffff","D", "1", "1", "n","ch1","o","9","","","CH",

  "#ff0000/#ffffff/#ff0000/#ffffff","Ff", "3", "1", "f","aa","o","5","2","2","BW",
  "#ff0000/#ffffff/#ff0000/#ffffff","Ff", "3", "1", "f","aa","o","5","2","3","IB",
  "#ff0000/#ffffff/#ff0000/#ffffff","Ff", "3", "1", "f","sk","[2]","5","2","1","SK",
  "#ff0000/#ffffff/#ff0000/#ffffff","Ff", "4", "1", "f","bl","o","5","3","7","BL",
  "#ff0000/#ffffff/#ff0000/#ffffff","Ff", "3", "1", "f","cb","o","5","2","3","CB",
  "#ff0000/#ffffff/#ff0000/#ffffff","Ff", "3", "1", "f","arq","o","5","2","3","AE",
  "#ff0000/#ffffff/#ff0000/#ffffff","Ff", "3", "1", "f","arq","o","5","2","4","AL",
  "#ff0000/#ffffff/#ff0000/#ffffff","Ff", "4", "1", "f","lb","o","5","3","3","LB",

  "#ff0000/#ffffff/#ff0000/#ffffff","Mf", "2", "1", "f","hb","o","9","1","2","HB",
  "#ff0000/#ffffff/#ff0000/#ffffff","Mf", "2", "1", "f","hb","2","9","1","1","OC",
  "#ff0000/#ffffff/#ff0000/#ffffff","Mf", "3", "1", "f","bc","3","9","1","2","BC",
  "#ff0000/#ffffff/#ff0000/#ffffff","Mf", "4", "1", "f","hvart","o","2","3","7","HA",
  "#ff0000/#ffffff/#ff0000/#ffffff","Mf", "3", "1", "f","art","o","4","2","5","LA",
  "#ff0000/#ffffff/#ff0000/#ffffff","Supply","0","0", "n","supply","0","10","","","||",
  "#ff0000/#ffffff/#ff0000/#ffffff","blank", "0", "0", "b","blank","0","0","","","-"
];

var designateLQ=[200,150,223,150,245,150,268,150,290,150,313,150,335,150,358,150,380,150,403,150,
200,173,230,173,245,173,268,173,290,173,313,173,335,173,358,173,380,173,403,173,
200,195,223,195,245,195,268,195,290,195,313,195,335,195,358,195];

var designateRQ=[380,595,403,595,
200,618,223,618,245,618,268,618,290,618,313,618,335,618,358,618,380,618,403,618,
200,640,223,640,245,640,268,640,290,640,313,640,335,640,358,640,380,640,403,640,
200,663,223,663,245,663,268,663,290,663,313,663];

    //var noOfSide = designateLQ.length;
    var noOfSide = unitsQ.length/noOfItems;

    var sideQ=new Array();
      for(s=0;s<noOfSide;s++){
      sideQ[s]=0;
    }

}

else if(changeRedFlag&&redArmyNo==1||changeBlackFlag&&blackArmyNo==0){
var nameQ="All Units Black";

var qbase = ["#000000","#000000", "#000000"];


var unitsQ=[
    "#000000/#ffffff/#000000/#ffffff","A", "1", "1", "n","inf","2","3","","","MI",
      "#000000/#ffffff/#000000/#ffffff","A", "2", "1", "n","spear","3","3","","","MS",
        "#000000/#ffffff/#000000/#ffffff","A", "2", "1", "n","hspear","4","3","","","PS",
          "#000000/#ffffff/#000000/#ffffff","A", "3", "1", "n","hspear","6","4","","","PP",
            "#000000/#ffffff/#000000/#ffffff","A", "2", "1", "n","spear","[4]","5","","","LT",
              "#000000/#ffffff/#000000/#ffffff","A", "4", "1", "n","ex","3","5","2","1","EX",

    "#000000/#ffffff/#000000/#ffffff","B", "3", "1", "n","inf","[6]","5","","","BI",
  "#000000/#ffffff/#000000/#ffffff","B", "2", "1", "n","sd","4","4","","","SD",
  "#000000/#ffffff/#000000/#ffffff","B", "2", "1", "n","ax","3","4","","","AX",

    "#000000/#ffffff/#000000/#ffffff","C", "1", "1", "n","scout","1","9","","","LC",
      "#000000/#ffffff/#000000/#ffffff","C", "2", "1", "n","cav","[3]","9","","","MC",
        "#000000/#ffffff/#000000/#ffffff","C", "3", "1", "n","cav","[4]","7","","","HC",

              "#000000/#ffffff/#000000/#ffffff","D", "1", "1", "n","vf","4","15","","","VF",
                    "#000000/#ffffff/#000000/#ffffff","D", "1", "1", "n","el","[8]","6","","","EL",
                        "#000000/#ffffff/#000000/#ffffff","D", "1", "1", "n","ch1","o","9","","","CH",

    "#000000/#ffffff/#000000/#ffffff","Ff", "3", "1", "f","aa","o","5","2","2","BW",
      "#000000/#ffffff/#000000/#ffffff","Ff", "3", "1", "f","aa","o","5","2","3","IB",
        "#000000/#ffffff/#000000/#ffffff","Ff", "3", "1", "f","sk","[2]","5","2","1","SK",
          "#000000/#ffffff/#000000/#ffffff","Ff", "4", "1", "f","bl","o","5","3","7","BL",
            "#000000/#ffffff/#000000/#ffffff","Ff", "3", "1", "f","cb","o","5","2","3","CB",
              "#000000/#ffffff/#000000/#ffffff","Ff", "3", "1", "f","arq","o","5","2","3","AE",
                "#000000/#ffffff/#000000/#ffffff","Ff", "3", "1", "f","arq","o","5","2","4","AL",
                  "#000000/#ffffff/#000000/#ffffff","Ff", "4", "1", "f","lb","o","5","3","3","LB",

    "#000000/#ffffff/#000000/#ffffff","Mf", "2", "1", "f","hb","o","9","1","2","HB",
      "#000000/#ffffff/#000000/#ffffff","Mf", "2", "1", "f","hb","2","9","1","1","OC",
        "#000000/#ffffff/#000000/#ffffff","Mf", "3", "1", "f","bc","3","9","1","2","BC",
          "#000000/#ffffff/#000000/#ffffff","Mf", "4", "1", "f","hvart","o","2","3","7","HA",
            "#000000/#ffffff/#000000/#ffffff","Mf", "3", "1", "f","art","o","4","2","5","LA",
    "#000000/#ffffff/#000000/#ffffff","Supply","0","0", "n","supply","0","10","","","||",
    "#ff0000/#ffffff/#ff0000/#ffffff","blank", "0", "0", "b","blank","0","0","","","-"
];


var designateLQ=[200,150,223,150,245,150,268,150,290,150,313,150,335,150,358,150,380,150,403,150,
200,173,230,173,245,173,268,173,290,173,313,173,335,173,358,173,380,173,403,173,
200,195,223,195,245,195,268,195,290,195,313,195,335,195,358,195];

var designateRQ=[380,595,403,595,
200,618,223,618,245,618,268,618,290,618,313,618,335,618,358,618,380,618,403,618,
200,640,223,640,245,640,268,640,290,640,313,640,335,640,358,640,380,640,403,640,
200,663,223,663,245,663,268,663,290,663,313,663];

var noOfSide = unitsQ.length/noOfItems;

    var sideQ=new Array();
    for(s=0;s<noOfSide;s++){
      sideQ[s]=1;    }
  }


else if(changeRedFlag&&redArmyNo==2||changeBlackFlag&&blackArmyNo==2){
var nameQ="Spartans";//Intelligencia

var qbase = ["#32CD32","#32CD32", "#32CD32"];


var unitsQ=[
  "#32CD32/#ffffff/#FAF0E6/#000000","A", "3", "10", "n","hspear","6","4","","","PP",
  "#32CD32/#ffffff/#FAF0E6/#000000","Ff", "3", "2", "f","aa","o","5","2","2","BW",
  "#32CD32/#ffffff/#FAF0E6/#000000","Ff", "3", "4", "f","sk","[2]","5","2","1","SK",
  "#32CD32/#ffffff/#ffffff/#000000","L", "0", "2", "l","hq","-","9","","","1L"
];

var designateLQ=[202,303, 261,305, 323,304, 379,304, 442,305, 500,302,
 291,286, 410,285,
 231,284, 352,282, 473,284, 352,253,
 203,267, 231,250, 260,265, 290,248,     560,270,560,299
];

var designateRQ=[261,546, 317,547, 380,547, 440,547, 503,546, 558,545,
 352,563, 470,561,
 412,564, 290,565, 532,562, 412,595,
 264,582, 324,580, 382,579, 441,579, 171,526,   169,562];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==3||changeBlackFlag&&blackArmyNo==3){
var nameQ="Normans";//Intelligencia

var qbase = ["#0000CD","#0000CD", "#0000CD"];


var unitsQ=[
  "#0000CD/#ffffff/#66CDAA/#000000","C", "2", "6", "n","cav","[3]","9","","","MC",
  "#0000CD/#ffffff/#66CDAA/#000000","C", "3", "8", "n","cav","[4]","7","","","HC",
  "#0000CD/#ffffff/#66CDAA/#000000","Ff", "3", "4", "f","aa","o","5","2","3","IB",
  "#0000CD/#ffffff/#66CDAA/#000000","L", "0", "2", "l","hq","-","9","","","1L"
];

var designateLQ=[202,303, 261,305, 323,304, 379,304, 442,305, 500,302,
 291,286, 410,285,
 231,284, 352,282, 473,284, 352,253,
 203,267, 231,250, 260,265, 290,248, 320,268, 379,268,     560,270,560,299
];

var designateRQ=[261,546, 317,547, 380,547, 440,547, 503,546, 558,545,
 352,563, 470,561,
 412,564, 290,565, 532,562, 412,595,
 264,582, 324,580, 382,579, 441,579, 499,580, 561,580, 171,526,   169,562
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==4||changeBlackFlag&&blackArmyNo==4){
  var nameQ="Vikings";//single types are 24 pts, armies more points?

  var qbase = ["#7CFC00","#7CFC00", "#7CFC00"];

var unitsQ=[
"#7CFC00/#000000/#FFFACD/#000000","D", "2", "6", "n","vf","4","15","","","VF",
"#7CFC00/#000000/#FFFACD/#000000","B", "2", "12", "n","vk","3","4","","","AX",
"#7CFC00/#000000/#FFFACD/#000000","Ff", "3", "4", "f","aa","o","5","2","3","IB",
  "#7CFC00/#000000/#FFFACD/#000000","L", "0", "2", "l","hq","-","9","","","1L"
];

var designateLQ=[202,303, 261,305, 323,304, 379,304, 442,305, 500,302,
 291,286, 410,285,
 231,284, 352,282, 473,284, 352,253,
 203,267, 231,250, 260,265, 290,248, 320,268, 379,268, 409,251, 436,267, 473,254, 499,266,     560,270,560,299
];

var designateRQ=[261,546, 317,547, 380,547, 440,547, 503,546, 558,545,
 352,563, 470,561,
 412,564, 290,565, 532,562, 412,595,
 264,582, 324,580, 382,579, 441,579, 499,580, 561,580, 291,598, 351,596, 471,596, 531,596, 171,526,   169,562
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==5||changeBlackFlag&&blackArmyNo==5){
var nameQ="Saxons";//Intelligencia

var qbase = ["#800000","#800000", "#800000"];


var unitsQ=[
"#800000/#ffffff/#FF00FF/#000000","B", "2", "10", "n","sd","4","4","","","SD",
"#800000/#ffffff/#FF00FF/#000000","B", "2", "10", "n","ax","3","4","","","AX",
  "#800000/#ffffff/#FF00FF/#000000","A", "1", "8", "n","inf","2","3","","","MI",
  "#800000/#ffffff/#FF00FF/#000000","L", "0", "2", "l","hq","-","9","","","1L"
];


var designateLQ=[202,303, 261,305, 323,304, 379,304, 442,305, 500,302,
 291,286, 410,285,
 231,284, 352,282, 473,284, 352,253,
 203,267, 231,250, 260,265, 290,248, 320,268, 379,268, 409,251, 436,267, 473,254, 499,266, 320,231, 380,233,
 290,195,313,195,335,195,358,195,     560,270,560,299
];

var designateRQ=[261,546, 317,547, 380,547, 440,547, 503,546, 558,545,
 352,563, 470,561,
 412,564, 290,565, 532,562, 412,595,
 264,582, 324,580, 382,579, 441,579, 499,580, 561,580, 291,598, 351,596, 471,596, 531,596, 79,613, 441,615,
245,663,268,663,290,663,313,663, 171,526,   169,562];




var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==6||changeBlackFlag&&blackArmyNo==6){
var nameQ="Romans";

var qbase = ["#BA55D3","#BA55D3", "#BA55D3"];


var unitsQ=[
"#BA55D3/#ffffff/#9370DB/#ffffff","B", "2", "14", "n","sd","4","4","","","SD",
"#BA55D3/#ffffff/#9370DB/#ffffff","Ff", "3", "6", "f","sk","[2]","5","2","1","SK",
"#BA55D3/#ffffff/#9370DB/#ffffff","C", "1", "4", "n","scout","1","9","","","LC",
  "#BA55D3/#ffffff/#9370DB/#ffffff","L", "0", "2", "l","hq","-","9","","","1L"
];
var designateLQ=[202,303, 261,305, 323,304, 379,304, 442,305, 500,302,
 291,286, 410,285,
 231,284, 352,282, 473,284, 352,253,
 203,267, 231,250, 260,265, 290,248, 320,268, 379,268, 409,251, 436,267, 473,254, 499,266, 320,231, 380,233,     560,270,560,299
];

var designateRQ=[261,546, 317,547, 380,547, 440,547, 503,546, 558,545,
 352,563, 470,561,
 412,564, 290,565, 532,562, 412,595,
 264,582, 324,580, 382,579, 441,579, 499,580, 561,580, 291,598, 351,596, 471,596, 531,596, 79,613, 441,615, 171,526,   169,562];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==7||changeBlackFlag&&blackArmyNo==7){
var nameQ="Pike and Shot";

var qbase = ["#7B68EE","#7B68EE", "#7B68EE"];


var unitsQ=[
  "#7B68EE/#ffffff/#3CB371/#ffffff","A", "3", "8", "n","hspear","6","4","","","PP",
  "#7B68EE/#ffffff/#3CB371/#ffffff","Ff", "3", "8", "f","arq","o","5","2","4","AL",
  "#7B68EE/#ffffff/#3CB371/#ffffff","L", "0", "2", "l","hq","-","9","","","1L"
];

var designateLQ=[202,303, 261,305, 323,304, 379,304, 442,305, 500,302,
 291,286, 410,285,
 231,284, 352,282, 473,284, 352,253,
 203,267, 231,250, 260,265, 290,248,     560,270,560,299
];

var designateRQ=[261,546, 317,547, 380,547, 440,547, 503,546, 558,545,
 352,563, 470,561,
 412,564, 290,565, 532,562, 412,595,
 264,582, 324,580, 382,579, 441,579, 171,526,   169,562];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==8||changeBlackFlag&&blackArmyNo==8){
var nameQ="Henry V";

var qbase = ["#C71585","#C71585", "#C71585"];


var unitsQ=[
  "#C71585/#ffffff/#48D1CC/#000000","Ff", "4", "8", "f","lb","o","5","3","3","LB",
  "#C71585/#ffffff/#48D1CC/#000000","A", "2", "8", "n","hspear","4","3","","","PS",
  "#C71585/#ffffff/#48D1CC/#000000","L", "0", "2", "l","hq","-","9","","","1L"
];

var designateLQ=[202,303, 261,305, 323,304, 379,304, 442,305, 500,302,
 291,286, 410,285,
 231,284, 352,282, 473,284, 352,253,
 203,267, 231,250, 260,265, 290,248,     560,270,560,299
];

var designateRQ=[261,546, 317,547, 380,547, 440,547, 503,546, 558,545,
 352,563, 470,561,
 412,564, 290,565, 532,562, 412,595,
 264,582, 324,580, 382,579, 441,579, 171,526,   169,562];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==9||changeBlackFlag&&blackArmyNo==9){
var nameQ="Arabs";//single types are 24 pts, armies more points?

var qbase = ["#F5FFFA","#F5FFFA", "#F5FFFA"];

var unitsQ=[
  "#F5FFFA/#000000/#FFE4E1/#000000","Mf", "2", "12", "f","hb","o","9","1","2","HB",
  "#F5FFFA/#000000/#FFE4E1/#000000","Mf", "2", "12", "f","hb","2","9","1","1","OC",
  "#F5FFFA/#000000/#FFE4E1/#000000","L", "0", "2", "l","hq","-","9","","","1L"
];
var designateLQ=[202,303, 261,305, 323,304, 379,304, 442,305, 500,302,
 291,286, 410,285,
 231,284, 352,282, 473,284, 352,253,
 203,267, 231,250, 260,265, 290,248, 320,268, 379,268, 409,251, 436,267, 473,254, 499,266, 320,231, 380,233,     560,270,560,299
];

var designateRQ=[261,546, 317,547, 380,547, 440,547, 503,546, 558,545,
 352,563, 470,561,
 412,564, 290,565, 532,562, 412,595,
 264,582, 324,580, 382,579, 441,579, 499,580, 561,580, 291,598, 351,596, 471,596, 531,596, 79,613, 441,615, 171,526,   169,562];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==10||changeBlackFlag&&blackArmyNo==10){
var nameQ="Hordes";//single types are 24 pts, armies more points?

var qbase = ["#randA4","#191970", "#191970"];

var unitsQ=[
  "#randA4/#ffffff/#00FA9A/#000000","A", "1", "32", "n","inf","2","3","","","MI",
  "#randA4/#ffffff/#00FA9A/#000000","C", "1", "16", "n","scout","1","9","","","LC",
  "#randA4/#ffffff/#00FA9A/#000000","L", "0", "2", "l","hq","-","9","","","1L"
];

var designateLQ=[410,286, 382,301, 351,286, 200,303, 233,286, 262,304, 290,285, 324,301, 411,179, 440,197,
501,200, 382,198, 412,214, 472,217, 502,232, 441,234, 501,267, 470,250, 262,199, 440,266,
202,234, 229,215, 261,229, 289,215, 353,216, 323,200, 350,184, 411,249, 320,231, 380,233,
203,199, 260,165, 291,181, 472,181, 442,165, 500,302, 321,164, 441,302, 231,179, 380,166,
473,284, 352,253, 203,267, 231,250, 260,265, 290,248, 320,268, 379,268, 560,270, 560,299];

var designateRQ=[232,526, 202,510, 471,528, 531,528, 261,512, 503,509, 440,510, 382,510, 321,510, 353,528,
291,528, 411,530, 380,618, 441,613, 173,598, 204,614, 231,630, 259,612, 291,633, 322,616,
349,632, 501,612, 471,597, 409,629, 171,529, 232,563, 235,597, 172,563, 202,545, 200,579,
261,546, 317,547, 380,547, 440,547, 503,546, 558,545, 352,563, 470,561, 412,564, 290,565,
532,562, 412,595, 264,582, 324,580, 382,579, 441,579, 499,580, 561,580, 291,598, 351,596];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==11||changeBlackFlag&&blackArmyNo==11){
var nameQ="Militia Levy";//single types are 24 pts, armies more points?

var qbase = ["#randA5","#191970", "#191970"];

var unitsQ=[
  "#randA5/#ffffff/#00FA9A/#000000","A", "1", "12", "n","inf","?3","3","","","ML",
  "#randA5/#ffffff/#00FA9A/#000000","A", "1", "12", "n","inf","?2","3","","","ML",
  "#randA5/#ffffff/#00FA9A/#000000","A", "1", "12", "n","inf","?2","3","","","ML",
  "#randA5/#ffffff/#00FA9A/#000000","A", "1", "12", "n","inf","?1","3","","","ML",
  "#randA5/#ffffff/#00FA9A/#000000","L", "0", "2", "l","hq","-","9","","","1L"
];

var designateLQ=[410,286, 382,301, 351,286, 200,303, 233,286, 262,304, 290,285, 324,301, 411,179, 440,197,
501,200, 382,198, 412,214, 472,217, 502,232, 441,234, 501,267, 470,250, 262,199, 440,266,
202,234, 229,215, 261,229, 289,215, 353,216, 323,200, 350,184, 411,249, 320,231, 380,233,
203,199, 260,165, 291,181, 472,181, 442,165, 500,302, 321,164, 441,302, 231,179, 380,166,
473,284, 352,253, 203,267, 231,250, 260,265, 290,248, 320,268, 379,268, 560,270, 560,299];

var designateRQ=[232,526, 202,510, 471,528, 531,528, 261,512, 503,509, 440,510, 382,510, 321,510, 353,528,
291,528, 411,530, 380,618, 441,613, 173,598, 204,614, 231,630, 259,612, 291,633, 322,616,
349,632, 501,612, 471,597, 409,629, 171,529, 232,563, 235,597, 172,563, 202,545, 200,579,
261,546, 317,547, 380,547, 440,547, 503,546, 558,545, 352,563, 470,561, 412,564, 290,565,
532,562, 412,595, 264,582, 324,580, 382,579, 441,579, 499,580, 561,580, 291,598, 351,596];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==12||changeBlackFlag&&blackArmyNo==12){
var nameQ="Mongols";//single types are 24 pts, armies more points?

var qbase = ["#FFE4B5","#FFE4B5", "#FFE4B5"];

var unitsQ=[
  "#FFE4B5/#000000/#FFE4B5/#000000","C", "2", "6", "n","cav","[3]","9","","","MC",
  "#FFE4B5/#000000/#FFE4B5/#000000","C", "3", "4", "n","cav","[4]","7","","","HC",
  "#FFE4B5/#000000/#FFE4B5/#000000","Mf", "2", "12", "f","hb","o","9","1","2","HB",
  "#FFE4B5/#000000/#FFE4B5/#000000","L", "0", "2", "l","hq","-","9","","","1L"
];
var designateLQ=[202,303, 261,305, 323,304, 379,304, 442,305, 500,302,
 291,286, 410,285,
 231,284, 352,282, 473,284, 352,253,
 203,267, 231,250, 260,265, 290,248, 320,268, 379,268, 409,251, 436,267, 473,254, 499,266,     560,270,560,299
];

var designateRQ=[261,546, 317,547, 380,547, 440,547, 503,546, 558,545,
 352,563, 470,561,
 412,564, 290,565, 532,562, 412,595,
 264,582, 324,580, 382,579, 441,579, 499,580, 561,580, 291,598, 351,596, 471,596, 531,596, 171,526,   169,562];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==13||changeBlackFlag&&blackArmyNo==13){
var nameQ="Angry Mob";//single types are 24 pts, armies more points?

var qbase = ["#randA2","#FFE4E1", "#FFE4E1"];

var unitsQ=[
  "#randA2/#000000/#808000/#ffffff","A", "1", "8", "n","mob","?4","3","","","mob!",
  "#randA2/#000000/#808000/#ffffff","A", "1", "8", "n","mob","?4","3","","","mob!",
  "#randA2/#000000/#808000/#ffffff","A", "1", "8", "n","mob","?4","3","","","mob!",
  "#randA2/#000000/#808000/#ffffff","A", "1", "8", "n","mob","?4","3","","","mob!",
  "#randA2/#000000/#808000/#ffffff","A", "1", "8", "n","mob","?4","3","","","mob!",
  "#randA2/#000000/#808000/#ffffff","A", "1", "8", "n","mob","?4","3","","","mob!",
  "#randA2/#000000/#808000/#ffffff","L", "0", "2", "l","hq","-","5","","","5L"
];//#808000

//"#FFE4E1/#000000/#808000/#ffffff","A", "1", "48", "n","mob","[2]","3","","","mob!"

var designateLQ=[410,286, 382,301, 351,286, 200,303, 233,286, 262,304, 290,285, 324,301, 411,179, 440,197,
501,200, 382,198, 412,214, 472,217, 502,232, 441,234, 501,267, 470,250, 262,199, 440,266,
202,234, 229,215, 261,229, 289,215, 353,216, 323,200, 350,184, 411,249, 320,231, 380,233,
203,199, 260,165, 291,181, 472,181, 442,165, 500,302, 321,164, 441,302, 231,179, 380,166,
473,284, 352,253, 203,267, 231,250, 260,265, 290,248, 320,268, 379,268, 560,270, 560,299];

var designateRQ=[232,526, 202,510, 471,528, 531,528, 261,512, 503,509, 440,510, 382,510, 321,510, 353,528,
291,528, 411,530, 380,618, 441,613, 173,598, 204,614, 231,630, 259,612, 291,633, 322,616,
349,632, 501,612, 471,597, 409,629, 171,529, 232,563, 235,597, 172,563, 202,545, 200,579,
261,546, 317,547, 380,547, 440,547, 503,546, 558,545, 352,563, 470,561, 412,564, 290,565,
532,562, 412,595, 264,582, 324,580, 382,579, 441,579, 499,580, 561,580, 291,598, 351,596];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==14||changeBlackFlag&&blackArmyNo==14){
var nameQ="Mob";//single types are 24 pts, armies more points?

var qbase = ["#randA3","#6B8E23", "#6B8E23"];

var unitsQ=[
  "#randA3/#ffffff/#ff00000/#000000","A", "1", "8", "n","mob","?4","2","","","mob",
  "#randA3/#ffffff/#000000/#000000","A", "1", "10", "n","mob","?3","2","","","mob",
  "#randA3/#ffffff/#ffffff/#000000","A", "1", "30", "n","mob","?2","2","","","mob",
  "#randA3/#ffffff/#ffffff/#000000","L", "0", "1", "l","hq","-","5","","","5L",
  "#randA3/#ffffff/#ffffff/#000000","L", "0", "1", "l","hq","-","5","","","5L"
];//#FFDEAD

var designateLQ=[410,286, 382,301, 351,286, 200,303, 233,286, 262,304, 290,285, 324,301, 411,179, 440,197,
501,200, 382,198, 412,214, 472,217, 502,232, 441,234, 501,267, 470,250, 262,199, 440,266,
202,234, 229,215, 261,229, 289,215, 353,216, 323,200, 350,184, 411,249, 320,231, 380,233,
203,199, 260,165, 291,181, 472,181, 442,165, 500,302, 321,164, 441,302, 231,179, 380,166,
473,284, 352,253, 203,267, 231,250, 260,265, 290,248, 320,268, 379,268, 560,270, 560,299];

var designateRQ=[232,526, 202,510, 471,528, 531,528, 261,512, 503,509, 440,510, 382,510, 321,510, 353,528,
291,528, 411,530, 380,618, 441,613, 173,598, 204,614, 231,630, 259,612, 291,633, 322,616,
349,632, 501,612, 471,597, 409,629, 171,529, 232,563, 235,597, 172,563, 202,545, 200,579,
261,546, 317,547, 380,547, 440,547, 503,546, 558,545, 352,563, 470,561, 412,564, 290,565,
532,562, 412,595, 264,582, 324,580, 382,579, 441,579, 499,580, 561,580, 291,598, 351,596];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==15||changeBlackFlag&&blackArmyNo==15){
var nameQ="Franks";//single types are 24 pts, armies more points?

var qbase = ["#FFA500","#FFA500", "#FFA500"];

var unitsQ=[
  "#FFA500/#000000/#EEE8AA/#000000","A", "3", "8", "n","ax","3","4","1","1","FR",
  "#FFA500/#000000/#EEE8AA/#000000","C", "3", "8", "n","cav","[4]","7","","","HC",,
  "#FFA500/#000000/#EEE8AA/#000000","L", "0", "2", "l","hq","-","9","","","1L"
];//#FFDEAD

var designateLQ=[202,303, 261,305, 323,304, 379,304, 442,305, 500,302,
 291,286, 410,285,
 231,284, 352,282, 473,284, 352,253,
 203,267, 231,250, 260,265, 290,248,     560,270,560,299
];

var designateRQ=[261,546, 317,547, 380,547, 440,547, 503,546, 558,545,
 352,563, 470,561,
 412,564, 290,565, 532,562, 412,595,
 264,582, 324,580, 382,579, 441,579, 171,526,   169,562];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==16||changeBlackFlag&&blackArmyNo==16){
var nameQ="Legionaires";//single types are 24 pts, armies more points?

var qbase = ["#FF4500","#FF4500", "#FF4500"];

var unitsQ=[
  "#FF4500/#ffffff/#DA70D6/#000000","A", "3", "16", "n","pl","4","4","1","1","PL",
  "#FF4500/#ffffff/#DA70D6/#00000","L", "0", "2", "l","hq","-","9","","","1L"
];//#FFDEAD

var designateLQ=[202,303, 261,305, 323,304, 379,304, 442,305, 500,302,
 291,286, 410,285,
 231,284, 352,282, 473,284, 352,253,
 203,267, 231,250, 260,265, 290,248,     560,270,560,299
];

var designateRQ=[261,546, 317,547, 380,547, 440,547, 503,546, 558,545,
 352,563, 470,561,
 412,564, 290,565, 532,562, 412,595,
 264,582, 324,580, 382,579, 441,579, 171,526,   169,562];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==17||changeBlackFlag&&blackArmyNo==17){
var nameQ="British WWI Infantry";//single types are 24 pts, armies more points?

var qbase = ["#6B8E23","#6B8E23", "#6B8E23"];

var unitsQ=[
  "#6B8E23/#FFff00/#F0E68C/#000000","Ff", "6", "6", "f","inf","2","5","11","6","|",
    "#6B8E23/#FFff00/#F0E68C/#000000","Ff", "6", "2", "f","mg","2","5","6","10","..",
  "#6B8E23/#FFff00/#F0E68C/#000000","L", "0", "2", "l","hq","-","9","","","1L"
];//#FFDEAD

var designateLQ=[202,303, 261,305, 323,304, 379,304, 442,305, 500,302,
 291,286, 410,285,     560,270,560,299];

var designateRQ=[261,546, 317,547, 380,547, 440,547, 503,546, 558,545,
 352,563, 470,561, 171,526,   169,562];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==18||changeBlackFlag&&blackArmyNo==18){
var nameQ="US Cavalry c.1776";//single types are 24 pts, armies more points?

var qbase = ["#0000dd","#0000dd", "#0000dd"];

var unitsQ=[
  "#0000dd/#ffff00/#ff0000/#ffffff","Mf", "4", "12", "f","cav","2","8","3","3","US",
  "#0000dd/#ffff00/#ff0000/#ffffff","L", "0", "2", "l","hq","-","9","","","1L"
];//#FFDEAD

var designateLQ=[202,303, 261,305, 323,304, 379,304, 442,305, 500,302,
 291,286, 410,285,
 231,284, 352,282, 473,284, 352,253,     560,270,560,299];

var designateRQ=[261,546, 317,547, 380,547, 440,547, 503,546, 558,545,
 352,563, 470,561,
 412,564, 290,565, 532,562, 412,595, 171,526,   169,562];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==19||changeBlackFlag&&blackArmyNo==19){
var nameQ="Sioux Warriors";//single types are 24 pts, armies more points?

var qbase = ["#rand01","#ffeedd", "#ffeedd"];

var unitsQ=[
  "#rand01/#ff0000/#cccc00/#00cc00","Mf", "4", "2", "f","hb","?4","9","2","3","^",
  "#rand01/#ff0000/#cccc00/#00cc00","Mf", "4", "2", "f","hb","?4","9","2","3","^",
  "#rand01/#ff0000/#cccc00/#00cc00","Mf", "4", "2", "f","hb","?4","9","2","3","^",
  "#rand01/#ff0000/#cccc00/#00cc00","Mf", "4", "2", "f","hb","?4","9","2","3","^",
  "#rand01/#ff0000/#cccc00/#00cc00","Mf", "4", "2", "f","hb","?4","9","2","3","^",
  "#rand01/#ff0000/#cccc00/#00cc00","Mf", "4", "2", "f","hb","?4","9","2","3","^",
  "#rand01/#ff0000/#cccc00/#00cc00","L", "0", "1", "l","hq","-","9","","","1L",
  "#rand01/#ff0000/#cccc00/#00cc00","L", "0", "1", "l","hq","-","9","","","1L"
];//#FFDEAD

var designateLQ=[202,303, 261,305, 323,304, 379,304, 442,305, 500,302,
 291,286, 410,285,
 231,284, 352,282, 473,284, 352,253,     560,270,560,299];

var designateRQ=[261,546, 317,547, 380,547, 440,547, 503,546, 558,545,
 352,563, 470,561,
 412,564, 290,565, 532,562, 412,595, 171,526,   169,562];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}



else if(changeRedFlag&&redArmyNo==20||changeBlackFlag&&blackArmyNo==20){
var nameQ="Polish Winged Hussars";//single types are 24 pts, armies more points?

var qbase = ["#eeeeff","#eeeeff", "#eeeeff"];

var unitsQ=[
  "#eeffff/#ff0000/#ffffff/#ff0000","Mf", "4", "12", "f","pwh","5","7","2","1","HC",
  "#eeffff/#ff0000/#ffffff/#ff0000","L", "0", "2", "l","hq","-","9","","","1L"
];//#FFDEAD

var designateLQ=[202,303, 261,305, 323,304, 379,304, 442,305, 500,302,
 291,286, 410,285,
 231,284, 352,282, 473,284, 352,253,     560,270,560,299];

var designateRQ=[261,546, 317,547, 380,547, 440,547, 503,546, 558,545,
 352,563, 470,561,
 412,564, 290,565, 532,562, 412,595, 171,526,   169,562];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==21||changeBlackFlag&&blackArmyNo==21){
var nameQ="Napoleonic French Grenadiers";//single types are 24 pts, armies more points?

var qbase = ["#000080","#000080", "#000080"];

var unitsQ=[
  "#000080/#ff0000/#ffffff/#0000ff","Ff", "6", "8", "f","inf","6","5","8","5","GR",
  "#000080/#ff0000/#ffffff/#0000ff","L", "0", "2", "l","hq","-","9","","","1L"
];//#FFDEAD

var designateLQ=[202,303, 261,305, 323,304, 379,304, 442,305, 500,302,
 291,286, 410,285,     560,270,560,299];

var designateRQ=[261,546, 317,547, 380,547, 440,547, 503,546, 558,545,
 352,563, 470,561, 171,526,   169,562];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==22||changeBlackFlag&&blackArmyNo==22){
var nameQ="New Model Army";//single types are 24 pts, armies more points?

var qbase = ["#F4A460","#F4A460", "#F4A460"];

var unitsQ=[
  "#F4A460/#000000/#d3d3d3/#000000","A", "2", "9", "n","hspear","4","3","","","PP",
  "#F4A460/#000000/#d3d3d3/#000000","Ff", "3", "9", "f","arq","o","3","5","5","PM",
  "#F4A460/#000000/#d3d3d3/#000000","L", "0", "2", "l","hq","-","9","","","1L"
];//#FFDEAD

var designateLQ=[202,303, 261,305, 323,304, 379,304, 442,305, 500,302,
 291,286, 410,285,
 231,284, 352,282, 473,284, 352,253,
 203,267, 231,250, 260,265, 290,248, 320,268, 379,268,     560,270,560,299
];

var designateRQ=[261,546, 317,547, 380,547, 440,547, 503,546, 558,545,
 352,563, 470,561,
 412,564, 290,565, 532,562, 412,595,
 264,582, 324,580, 382,579, 441,579, 499,580, 561,580, 171,526,   169,562
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==23||changeBlackFlag&&blackArmyNo==23){
var nameQ="Roundheads";//single types are 24 pts, armies more points?

var qbase = ["#F4A460","#F4A460", "#F4A460"];

var unitsQ=[
  "#F4A460/#000000/#d3d3d3/#000000","A", "3", "9", "n","cav","5","6","","","HC",
  "#F4A460/#000000/#ffff00/#0000ff","Ff", "4", "5", "n","cav","8","8","","","SC",
  "#F4A460/#000000/#d3d3d3/#000000","L", "0", "2", "l","hq","-","9","","","1L"
];//#FFDEAD

var designateLQ=[202,303, 261,305, 323,304, 379,304, 442,305, 500,302,
 291,286, 410,285,
 231,284, 352,282, 473,284, 352,253,
 203,267, 231,250,     560,270,560,299
];

var designateRQ=[261,546, 317,547, 380,547, 440,547, 503,546, 558,545,
 352,563, 470,561,
 412,564, 290,565, 532,562, 412,595,
 264,582, 324,580, 171,526,   169,562
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

if(addSupplyUnitsFlag){
  //console.log("yes");
  unitsQ.push(unitsQ[0], "D","0","4","n","trans","o","6","","","WG");
  /*
  if(changeRedFlag){
  designateLQ.push(200,200, 220,200,240,200,260,200);}
  else{
  designateRQ.push(200,600, 220,600,240,600,260,600);}
  */
  //console.log(""+designateLQ);
}

if(addDummyUnitsFlag){
  unitsQ.push(unitsQ[0], "-","0","8","b","blank","","","","","*");
  /*
  if(changeRedFlag){
  designateLQ.push(200,180, 220,180,240,180,200,180);}
  else{
  designateRQ.push(200,620, 220,620,240,620,260,620);}*/
}


if(addAirPowerFlag){//add leaders
  unitsQ.push(unitsQ[0], "L", "0", "3", "l","hq","-","9","","","1L",);
    if(changeRedFlag){
   for(s=0;s<3;s++){
     sideQ.push(0); }}
    else if(changeBlackFlag){
    for(s=0;s<3;s++){
      sideQ.push(1); }}
  //designateLQ.push("Air Power", "Air Power", "Air Power", "Air Power","Air Power", "Air Power");
  //designateRQ.push("1","2","3","4","5","6");
}

if(printArmiesFlag){
var unitsN = [
"#aaaaaa/#000000/#ffffff/#000000", "GAME TURN","0","0","x", "GAME", "TURN", "", ""];
/*var blankCode1 = new Array();
var blankCode1 = unitsQ[0];
var blankCode2 = ["0","0","3","b","0","0","0","0"];
var blankCode = blankCode1.concat(blankCode2);
//alert(""+blankCode);
unitsQ = unitsQ+","+blankCode;
alert(""+unitsQ+"                  len="+unitsQ.length+"                  len="+unitsQ.length/noOfItems);
var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}*/
}
else{var unitsN = [
"#ffaaaa/#000000/#ffffff/#000000","A's VPx1","-","1","x", "<VP x1", "side A", "", "VP","x1", "",
"#ffaaaa/#000000/#ffffff/#000000","A's VPx10","-","1","x", "<VP x10", "side A", "", "VP","x10", "",
"#dddddd/#000000/#ffffff/#000000","B's VPx1","-","1","x", "<VP x1", "side B", "", "VP","x1", "",
"#dddddd/#000000/#ffffff/#000000","B's VPx10","-","1","x", "<VP x10", "side B", "", "VP","x10", "",
"#aaffaa/#000000/#ffffff/#000000", "GAME TURN","-","1","x", "GAME", "TURN", "", "","", "",
"#dddd00/#000000/#ffffff/#000000", "side move","-","1","x", "Side to", "MOVE","", "", "", ""];
  /*
var unitsN = [
"#ffaaaa/#000000/#ffffff/#000000","R REPLC","1","1","x", "<--R x1", "REPL", "", "",
"#ffaaaa/#000000/#ffffff/#000000","R REPLC x10","1","1","x", "<--R x10", "REPL", "", "",
"#dddddd/#000000/#ffffff/#000000","B REPLC","1","1","x", "<--B x1", "REPL", "", "",
"#dddddd/#000000/#ffffff/#000000","B REPLC x10","1","1","x", "<--B x10", "REPL", "", "",
"#ffaaaa/#000000/#ffffff/#000000","R Capital","1","1","x", "RED", "CAPITAL", "", "",
"#dddddd/#000000/#ffffff/#000000","B Capital","1","1","x", "BLACK", "CAPITAL", "", "",
"#aaffaa/#000000/#ffffff/#000000", "GAME TURN","0","1","x", "GAME", "TURN", "", "",
"#dddd00/#000000/#ffffff/#000000", "side move","0","1","x", "Side to", "MOVE", "", ""];}
*/
}


//var designateLN=[49,106,80,118,45,102,77,103,43,23,298,112];

//var designateRN=[261,546, 317,547, 380,547, 440,547, 503,546, 558,545,
// 352,563, 470,561];


if(changeRedFlag){
 nameA = nameQ;
/*
 Abase = qbase;

 unitsA1 = unitsQ;
 unitsA = unitsA1+unitsA2+unitsN;

  designateLA1 = designateLQ;
  designateRA1 = designateRQ;
*/
Abase = [];
for (const item of qbase) {
  Abase.push(item);
}
unitsA1 = [];
for (const item of unitsQ) {
  unitsA1.push(item);
}
designateLA1 = [];
designateRA1 = [];

for (const item of designateLQ) {
  designateLA1.push(item);
}
for (const item of designateRQ) {
  designateRA1.push(item);
}
  designateLA = designateLA1.concat(designateLA2);
  designateRA = designateRA1.concat(designateRA2);

unitsA = unitsA1.concat(unitsA2,unitsN);
var dumLen12 = unitsA.length/noOfItems;
for(d=0; d<dumLen12;d++){
colorOrgCode[d] = unitsA[d*noOfItems+0].slice(0,7);}
    //alert("3:"+unitsA);

    sideA1 = [];
    for (const item of sideQ) {
      sideA1.push(item);
    }
    sideA = sideA1.concat(sideA2);
//alert(""+unitsA)
}
else if(changeBlackFlag){
  //alert(""+nameQ)
 nameB = nameQ;
/*
 Bbase = qbase;

 unitsA2 = unitsQ;

  designateLA2 = designateLQ;
  designateRA2 = designateRQ;
 */
 Bbase = [];
 for (const item of qbase) {
   Bbase.push(item);
 }
 unitsA2 = [];
 for (const item of unitsQ) {
   unitsA2.push(item);
 }
 designateLA2 = [];
 designateRA2 = [];
 for (const item of designateLQ) {
   designateLA2.push(item);
 }
 for (const item of designateRQ) {
   designateRA2.push(item);
 }
   designateLA = designateLA1.concat(designateLA2);
   designateRA = designateRA1.concat(designateRA2);
 unitsA = unitsA1.concat(unitsA2,unitsN);
 var dumLen12 = unitsA.length/noOfItems;
 for(d=0; d<dumLen12;d++){
 colorOrgCode[d] = unitsA[d*noOfItems+0].slice(0,7);}
    //alert("4:"+unitsA);
        sideA2 = [];
        for (const item of sideQ) {
          sideA2.push(item);
        }
        sideA = sideA1.concat(sideA2);

}
    //alert("4:"+unitsA);

}

function findArmiesBlackBlank(){

if(changeBlackFlag){
var nameQ="";

var qbase = ["#355e43","#355e43", "#355e43"];


var unitsQ=[
"#355e43/#ffffff/#b0dd98/#355e43","Phalanx","14","0","n","arm","11"," 6","xx",
"#355e43/#ffffff/#b0dd98/#355e43","Marine and Mountain","7","0","n","sf","2"," 5","xx",
"#355e43/#ffffff/#b0dd98/#355e43","Vertical Invaders","3","0","n","para","2"," 3","xx",
"#355e43/#ffffff/#b0dd98/#355e43","Hoorsemen","5","0","n","cav","3"," 5","xx",
"#355e43/#ffffff/#b0dd98/#355e43","Warriors","2","0","n","inf","3"," 2","xx",
"#355e43/#ffffff/#b0dd98/#355e43","supply","0","0","n","supply","0"," 10","xx"

];


var designateLQ=[
];

var designateRQ=[
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

if(printArmiesFlag){
var unitsN = [
"#aaaaaa/#000000/#ffffff/#000000", "GAME TURN","0","0","x", "GAME", "TURN", "", ""];}
else{
var unitsN = [
"#ffaaaa/#000000/#ffffff/#000000","A REPLC","1","1","x", "<--A x1", "REPL", "", "",
"#ffaaaa/#000000/#ffffff/#000000","A REPLC x10","1","1","x", "<--A x10", "REPL", "", "",
"#dddddd/#000000/#ffffff/#000000","B REPLC","1","1","x", "<--B x1", "REPL", "", "",
"#dddddd/#000000/#ffffff/#000000","B REPLC x10","1","1","x", "<--B x10", "REPL", "", "",
"#aaaaaa/#000000/#ffffff/#000000", "GAME TURN","0","1","x", "GAME", "TURN", "", "",
"#dddd00/#000000/#ffffff/#000000", "side move","0","1","x", "Side to", "MOVE", "", ""];}


if(changeBlackFlag){
  //alert(""+nameQ)
 nameB = nameQ;
/*
 Bbase = qbase;

 unitsA2 = unitsQ;

  designateLA2 = designateLQ;
  designateRA2 = designateRQ;
 */
 Bbase = [];
 for (const item of qbase) {
   Bbase.push(item);
 }
 unitsA2 = [];
 for (const item of unitsQ) {
   unitsA2.push(item);
 }
 designateLA2 = [];
 designateRA2 = [];
 for (const item of designateLQ) {
   designateLA2.push(item);
 }
 for (const item of designateRQ) {
   designateRA2.push(item);
 }
   designateLA = designateLA1.concat(designateLA2);
   designateRA = designateRA1.concat(designateRA2);
 unitsA = unitsA1.concat(unitsA2,unitsN);
    //alert("4:"+unitsA);
        sideA2 = [];
        for (const item of sideQ) {
          sideA2.push(item);
        }
        sideA = sideA1.concat(sideA2);

}
    //alert("4:"+unitsA);

}

function supplyUnitsYesNo(){
  if(addSupplyUnitsFlag){
    addSupplyUnitsFlag=false;//flag to ad supply
    changeSupplyFlag=false;//flag to allow changes to numbers due to supply
    document.getElementById('btnSupply').innerText="Supply Units - No";
  }
  else{
    addSupplyUnitsFlag=true;
    changeSupplyFlag=true;
    document.getElementById('btnSupply').innerText="Supply Units - Yes";
  }
}

function blankUnitsYesNo(){
  if(addDummyUnitsFlag){
    addDummyUnitsFlag=false;
    changeDummyUnitsFlag=false;
    document.getElementById('btnBlank').innerText="Blank Units - No";
  }
  else{
    addDummyUnitsFlag=true;
    changeDummyUnitsFlag=true;
    document.getElementById('btnBlank').innerText="Blank Units - Yes";
  }
}


function airUnitsYesNo(){
  if(addAirPowerFlag){
    addAirPowerFlag=false;
    changeAirPowerFlag=false;
    document.getElementById('btnAir').innerText="Air Units - No";
  }
  else{
    addAirPowerFlag=true;
    changeAirPowerFlag=true;
    document.getElementById('btnAir').innerText="Air Units - Yes";
  }
}
