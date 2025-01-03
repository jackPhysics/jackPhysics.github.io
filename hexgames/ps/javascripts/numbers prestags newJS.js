

/*
var noOfPieces=40; //no of pieces in game
var unitTotal=81; //number of types of pieces
var lastIndex=21; //index number of last piece - north marker
var gerNumber=19; //the index number of the first german piece
var neutNumber=20; //index number of first neutral piece
*/


var noOfItems2=2; //no of items of data for each unit type
var itemsPerUnit2 = noOfItems2;

var totalPieces = 81;
var rusPieces = 31;
var gerPieces = 40;
var neutPieces = 10;

var totUnits = 0;
var rusUnits = 0;
var gerUnits = 0;
var neutUnits =0;



var numbersA=[
 "12.7mm MG", "1",
 "45mm AT", "0",
 "57mm AT", "0",
 "76.2mm AT", "2",
 "76.2mm H", "0",
 "122mm H", "1",
 "82mm M (MOT.)", "0",
 "82mm M", "1",
 "120mm M", "1",
 "ENGINEERS", "0",
 "RECON", "2",
 "RIFLE", "0",
 "GUARDS", "1",
 "SMG", "2",
 "Command Post", "0",
 "CAVALRY", "0",
 "WAGONS", "4",
 "TRUCK", "5",
 "HALFTRACK", "2",
 "SU152", "0",
 "SU76", "2",
 "SU85", "0",
 "SU100", "2",
 "JSU122", "0",
 "KV85", "0",
 "T34c", "9",
 "T34/85", "0",
 "JS-II", "0",
 "JS-III", "0",
 "blank motor", "0",
 "blank non-motor", "0",
 "50mm AT", "1",
 "75mm AT", "3",
 "88mm AT", "0",
 "20mm mg", "1",
 "20mm QUAD", "0",
 "75mm H", "0",
 "150mm H", "0",
 "81mm M", "0",
 "120mm M", "0",
 "ENGINEERS", "0",
 "SECURITY", "0",
 "RIFLE", "4",
 "SMG", "2",
 "Command Post", "0",
 "WAGONS", "0",
 "TRUCK", "6",
 "HALFTRK", "6",
 "PUMA", "0",
 "SdKfz 234/4", "0",
 "SdKfz 234/1", "0",
 "MAULTIER", "0",
 "WESPE", "0",
 "HUMMEL", "0",
 "GW38", "1",
 "WIRBELWIND", "0",
 "Stu H 42", "1",
 "MARDER III", "0",
 "SG III-75", "0",
 "HETZER", "0",
 "JgdPz IV", "0",
 "NASHORN", "0",
 "JgdPz V", "0",
 "JgdPz VI", "0",
 "LYNX", "0",
 "PzKpfw IV", "2",
 "PANTHER", "0",
 "TIGER I", "1",
 "TIGER II", "0",
 "blank motor", "0",
 "blank non-motor", "0",
 "R FORTIFICATION", "0",
 "G FORTIFICATION", "0",
 "SMOKE", "0",
 "BLOCK", "0",
 "MINE FIELD","0",
 "OVERRUN!", "0",
 "FIRE!", "0",
 "BATTLE!", "0",
 "TURN NOW", "1",
 "NORTH MARKER", "1"
];

for(i=0;i<rusPieces;i++){ //(i*2)-1
  rusUnits = 1*rusUnits + 1*numbersA[(i*2)+1];
  }

for(i=rusPieces;i<(rusPieces+gerPieces);i++){ //(i*2)-1
  gerUnits = 1*gerUnits + 1*numbersA[(i*2)+1];
  }

for(i=(rusPieces+gerPieces);i<(rusPieces+gerPieces+neutPieces);i++){ //(i*2)-1
  neutUnits = 1*neutUnits + 1*numbersA[(i*2)+1];
  }
//alert ("rus="+rusUnits+" ger="+gerUnits+" neut="+neutUnits);


noOfPieces= rusUnits+gerUnits+neutUnits; //no of pieces in game

unitTotal= totalPieces; //number of types of pieces
lastIndex= rusUnits+gerUnits+neutUnits; //index number of last piece - north marker
gerNumber= rusUnits;//rusUnits+1; //the index number of the first german piece
neutNumber= rusUnits+gerUnits;//rusUnits+gerUnits+1; //index number of first neutral piece

//alert(""+gerNumber);

for(j=0;j<totalPieces;j++){
  unitsA[j*6+3] = numbersA[j*2+1];//unitsA[j*noOfItems+3] = numbersA[j*noOfItems2+1]

}
