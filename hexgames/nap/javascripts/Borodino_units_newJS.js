var situationAddress="situations/setups.html";
var tecAddress="charts/TEC Borodino.html";
var crtAddress="charts/CRT Austerlitz.html"; //"charts/goa crt.htm";
var crt2Address="charts/CRT Borodino.html"
var reinfAddress="charts/reinf ruled.html" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt" //seq of play
var victoryAddress="situations/pharsalus_sit.html" //victory, situation
var weatherAddress="charts/Kr battle manual.pdf" //weather
var supplyAddress="charts/map Borodino.html" //MAP
var rulesAddress="rules/Borodino rules.html"
var errataAddress="rules/reinf ruled.htmlOOB Borodino.html" //extra rules
var manualAddress="rules/OOB Borodino.html" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/Borodino board 8.png";
var presetupGameData = "";
var setupGameData ="";

var setupGameData=new Array();
    setupGameData[0] = "0,0,551,0,0,0,19,189,, 0,0,605,0,0,0,96,249,, 0,0,614,0,0,0,234,250,, 0,0,611,0,0,0,149,250,, 0,0,623,0,0,0,290,277,, 0,0,617,0,0,0,314,276,, 0,0,581,0,0,0,520,259,, 0,0,584,0,0,0,715,199,, 0,0,608,0,0,0,122,252,, 0,0,590,0,0,0,465,259,, 0,0,596,0,0,0,470,274,, 0,0,602,0,0,0,541,258,, 0,0,111,0,0,0,658,194,11, 0,0,482,0,0,0,149,186,7, 0,0,413,0,0,0,178,213,7, 0,0,136,0,0,0,547,223,7, 0,0,133,0,0,0,544,188,7, 0,0,488,0,0,0,201,184,6, 0,0,404,0,0,0,206,179,6, 0,0,142,0,0,0,518,220,6, 0,0,139,0,0,0,517,223,6, 0,0,127,0,0,0,575,192,5, 0,0,124,0,0,0,575,194,5, 0,0,419,0,0,0,152,213,5, 0,0,407,0,0,0,179,244,5, 0,0,428,0,0,0,122,183,4, 0,0,377,0,0,0,309,241,4, 0,0,620,0,0,0,322,249,4, 0,0,464,0,0,0,233,184,3, 0,0,629,0,0,0,297,219,2, 0,0,626,0,0,0,279,214,2, 0,0,114,0,0,0,629,194,4, 0,0,117,0,0,0,631,195,4, 0,0,913,0,0,0,200,986,2, 0,0,910,0,0,0,224,985,2, 0,0,922,0,0,0,177,965,2, 0,0,919,0,0,0,149,982,2, 0,0,916,0,0,0,172,987,2, 0,0,425,0,0,0,123,210,2, 0,0,401,0,0,0,204,213,2, 0,0,461,0,0,0,286,181,2, 0,0,368,0,0,0,346,241,2, 0,0,154,0,0,0,456,220,2, 0,0,151,0,0,0,467,215,2, 0,0,148,0,0,0,514,187,2, 0,0,145,0,0,0,524,189,2, 0,0,925,0,0,0,197,1014,1, 0,0,389,0,0,0,318,216,1, 0,0,479,0,0,0,461,190,1, 0,0,108,0,0,0,686,194,8, 0,0,121,0,0,0,603,193,7, 0,0,485,0,0,0,174,186,7, 0,0,395,0,0,0,228,213,5, 0,0,473,0,0,0,287,244,4, 0,0,470,0,0,0,344,215,2, 0,0,886,0,0,0,1424,681,, 0,0,883,0,0,0,1393,706,, 0,0,880,0,0,0,1389,732,, 0,0,871,0,0,0,1394,677,, 0,0,874,0,0,0,1398,653,, 0,0,877,0,0,0,1394,636,, 0,0,865,0,0,0,1393,620,, 0,0,868,0,0,0,1424,639,, 0,0,733,0,0,0,774,715,10, 0,0,730,0,0,0,790,686,10, 0,0,749,0,0,0,660,903,7, 0,0,690,0,0,0,855,419,6, 0,0,759,0,0,0,648,931,6, 0,0,774,0,0,0,455,930,5, 0,0,699,0,0,0,898,499,5, 0,0,705,0,0,0,884,529,5, 0,0,724,0,0,0,744,661,5, 0,0,693,0,0,0,899,391,5, 0,0,762,0,0,0,648,877,5, 0,0,717,0,0,0,787,579,4, 0,0,711,0,0,0,837,556,4, 0,0,727,0,0,0,695,687,4, 0,0,792,0,0,0,502,901,4, 0,0,862,0,0,0,1357,643,3, 0,0,777,0,0,0,598,687,2, 0,0,810,0,0,0,852,905,3, 0,0,807,0,0,0,818,904,3, 0,0,491,0,0,0,1386,425,3, 0,0,498,0,0,0,1388,463,3, 0,0,510,0,0,0,1389,492,3, 0,0,501,0,0,0,1383,523,3, 0,0,539,0,0,0,1388,558,3, 0,0,507,0,0,0,1428,397,3, 0,0,536,0,0,0,1422,429,3, 0,0,532,0,0,0,1424,459,3, 0,0,513,0,0,0,1422,491,3, 0,0,523,0,0,0,1423,521,3, 0,0,504,0,0,0,1427,556,3, 0,0,736,0,0,0,820,690,4, 0,0,739,0,0,0,803,716,3, 0,0,837,0,0,0,867,664,2, 0,0,840,0,0,0,883,634,2, 0,0,843,0,0,0,852,636,2, 0,0,849,0,0,0,444,850,2, 0,0,846,0,0,0,472,798,2, 0,0,855,0,0,0,721,905,1, 0,0,638,0,0,0,979,472,1, 0,0,632,0,0,0,1010,477,1, 0,0,635,0,0,0,994,503,1, 0,0,742,0,0,0,837,716,7, 0,0,768,0,0,0,695,906,5, 0,0,789,0,0,0,882,419,4, 0,0,804,0,0,0,913,527,3, 0,0,801,0,0,0,820,578,3, 0,0,926,0,0,0,723,690,3, 0,0,889,0,0,0,522,929,2, 0,0,940,0,0,0,691,280,Dest., 0,0,936,0,0,0,722,279,Dest., 0,0,932,0,0,0,662,278,Dest., 0,0,928,0,0,0,631,277,Dest., 0,0,362,0,0,0,63,118,TURN, 0,0,365,0,0,0,177,318,to move, 0,0,1,8,B,3,situations/setups.html";
setupGameData[1] = "0,0,551,0,0,0,19,189,, 0,0,605,0,0,0,96,249,, 0,0,614,0,0,0,234,250,, 0,0,611,0,0,0,149,250,, 0,0,623,0,0,0,290,277,, 0,0,617,0,0,0,314,276,, 0,0,581,0,0,0,520,259,, 0,0,584,0,0,0,715,199,, 0,0,608,0,0,0,122,252,, 0,0,590,0,0,0,465,259,, 0,0,596,0,0,0,470,274,, 0,0,602,0,0,0,541,258,, 0,0,111,0,0,0,658,194,11, 0,0,1571,0,0,0,454,926,7, 0,0,1553,0,0,0,501,952,7, 0,0,136,0,0,0,547,223,7, 0,0,133,0,0,0,544,188,7, 0,0,1538,0,0,0,516,873,6, 0,0,1565,0,0,0,499,847,6, 0,0,142,0,0,0,518,220,6, 0,0,139,0,0,0,517,223,6, 0,0,127,0,0,0,575,192,5, 0,0,124,0,0,0,575,194,5, 0,0,1589,0,0,0,437,955,5, 0,0,1541,0,0,0,531,953,5, 0,0,1544,0,0,0,519,927,4, 0,0,1616,0,0,0,312,1117,4, 0,0,1613,0,0,0,329,1142,4, 0,0,1568,0,0,0,468,900,3, 0,0,1574,0,0,0,440,848,2, 0,0,1580,0,0,0,426,819,2, 0,0,114,0,0,0,629,194,4, 0,0,117,0,0,0,631,195,4, 0,0,1607,0,0,0,420,1034,2, 0,0,1592,0,0,0,451,1035,2, 0,0,1595,0,0,0,438,1007,2, 0,0,1598,0,0,0,359,1033,2, 0,0,1604,0,0,0,378,1010,2, 0,0,1559,0,0,0,470,955,2, 0,0,1562,0,0,0,486,872,2, 0,0,1586,0,0,0,406,741,2, 0,0,1610,0,0,0,327,1089,2, 0,0,154,0,0,0,456,220,2, 0,0,151,0,0,0,467,215,2, 0,0,148,0,0,0,514,187,2, 0,0,1653,0,0,0,516,196,2, 0,0,1601,0,0,0,392,1033,1, 0,0,1577,0,0,0,453,820,1, 0,0,1442,0,0,0,463,185,1, 0,0,108,0,0,0,686,194,8, 0,0,121,0,0,0,603,193,7, 0,0,1556,0,0,0,484,980,7, 0,0,1550,0,0,0,503,901,5, 0,0,1619,0,0,0,295,1143,4, 0,0,1583,0,0,0,408,845,2, 0,0,886,0,0,0,1424,681,, 0,0,883,0,0,0,1393,706,, 0,0,880,0,0,0,1389,732,, 0,0,871,0,0,0,1394,677,, 0,0,874,0,0,0,1398,653,, 0,0,877,0,0,0,1394,636,, 0,0,865,0,0,0,1393,620,, 0,0,868,0,0,0,1424,639,, 0,0,1499,0,0,0,817,795,10, 0,0,1496,0,0,0,801,768,10, 0,0,1520,0,0,0,659,902,7, 0,0,1402,0,0,0,791,921,6, 0,0,1523,0,0,0,642,927,6, 0,0,1396,0,0,0,807,948,5, 0,0,699,0,0,0,898,499,5, 0,0,1463,0,0,0,882,523,5, 0,0,1481,0,0,0,706,657,5, 0,0,1035,0,0,0,1351,609,5, 0,0,1529,0,0,0,643,872,5, 0,0,1475,0,0,0,802,658,4, 0,0,1466,0,0,0,818,578,4, 0,0,1487,0,0,0,675,711,4, 0,0,1547,0,0,0,640,767,4, 0,0,1526,0,0,0,659,847,3, 0,0,777,0,0,0,598,687,2, 0,0,1508,0,0,0,846,901,3, 0,0,1505,0,0,0,879,901,3, 0,0,491,0,0,0,1386,425,3, 0,0,1625,0,0,0,1382,456,3, 0,0,1622,0,0,0,1384,490,3, 0,0,1650,0,0,0,1384,520,3, 0,0,1647,0,0,0,1383,551,3, 0,0,1637,0,0,0,1420,392,3, 0,0,1634,0,0,0,1421,425,3, 0,0,1631,0,0,0,1420,455,3, 0,0,1628,0,0,0,1420,488,3, 0,0,1640,0,0,0,1419,520,3, 0,0,1643,0,0,0,1421,551,3, 0,0,1493,0,0,0,832,769,4, 0,0,1490,0,0,0,814,740,3, 0,0,1472,0,0,0,911,630,2, 0,0,1457,0,0,0,1053,496,2, 0,0,1454,0,0,0,1022,496,2, 0,0,1535,0,0,0,692,795,2, 0,0,1484,0,0,0,750,739,2, 0,0,1514,0,0,0,722,902,1, 0,0,1451,0,0,0,896,387,1, 0,0,1448,0,0,0,913,415,1, 0,0,1445,0,0,0,926,445,1, 0,0,1502,0,0,0,847,791,7, 0,0,1517,0,0,0,692,901,5, 0,0,1511,0,0,0,831,928,4, 0,0,1460,0,0,0,914,523,3, 0,0,1469,0,0,0,848,631,3, 0,0,1478,0,0,0,721,684,3, 0,0,1532,0,0,0,674,820,2, 0,0,940,0,0,0,691,280,Dest., 0,0,936,0,0,0,722,279,Dest., 0,0,932,0,0,0,662,278,Dest., 0,0,1233,0,0,0,447,923,Dest., 0,0,362,0,0,0,63,118,TURN, 0,0,365,0,0,0,177,318,to move, 0,0,1,8,A,10,situations/setups.html";
    setupGameData[2] = "0,0,551,0,0,0,19,189,, 0,0,605,0,0,0,96,249,, 0,0,614,0,0,0,234,250,, 0,0,611,0,0,0,149,250,, 0,0,623,0,0,0,290,277,, 0,0,617,0,0,0,314,276,, 0,0,581,0,0,0,520,259,, 0,0,584,0,0,0,715,199,, 0,0,608,0,0,0,122,252,, 0,0,590,0,0,0,465,259,, 0,0,596,0,0,0,470,274,, 0,0,602,0,0,0,541,258,, 0,0,1859,0,0,0,361,927,11, 0,0,1760,0,0,0,422,928,7, 0,0,1553,0,0,0,501,952,7, 0,0,1824,0,0,0,422,713,7, 0,0,1862,0,0,0,500,792,7, 0,0,1538,0,0,0,516,873,6, 0,0,1565,0,0,0,499,847,6, 0,0,1842,0,0,0,391,873,6, 0,0,1855,0,0,0,393,928,6, 0,0,1821,0,0,0,486,658,5, 0,0,1818,0,0,0,454,714,5, 0,0,1767,0,0,0,467,739,5, 0,0,1541,0,0,0,531,953,5, 0,0,1544,0,0,0,519,927,4, 0,0,1720,0,0,0,499,1118,4, 0,0,1714,0,0,0,514,1144,4, 0,0,1753,0,0,0,483,874,3, 0,0,1574,0,0,0,440,848,2, 0,0,1580,0,0,0,426,819,2, 0,0,1852,0,0,0,377,900,4, 0,0,1849,0,0,0,408,901,4, 0,0,1730,0,0,0,436,1061,2, 0,0,1727,0,0,0,466,1061,2, 0,0,1733,0,0,0,453,1033,2, 0,0,1737,0,0,0,420,1035,2, 0,0,1740,0,0,0,436,1009,2, 0,0,1559,0,0,0,470,955,2, 0,0,1757,0,0,0,470,899,2, 0,0,1830,0,0,0,421,764,2, 0,0,1723,0,0,0,530,1117,2, 0,0,1839,0,0,0,391,767,2, 0,0,1865,0,0,0,374,1006,2, 0,0,1878,0,0,0,534,577,2, 0,0,1871,0,0,0,360,1036,2, 0,0,1601,0,0,0,392,1033,1, 0,0,1577,0,0,0,453,820,1, 0,0,1833,0,0,0,405,738,1, 0,0,1845,0,0,0,437,900,8, 0,0,1827,0,0,0,390,712,7, 0,0,1743,0,0,0,516,980,7, 0,0,1747,0,0,0,532,902,5, 0,0,1717,0,0,0,484,1143,4, 0,0,1583,0,0,0,408,845,2, 0,0,886,0,0,0,1424,681,, 0,0,883,0,0,0,1393,706,, 0,0,880,0,0,0,1389,732,, 0,0,871,0,0,0,1394,677,, 0,0,874,0,0,0,1398,653,, 0,0,877,0,0,0,1394,636,, 0,0,865,0,0,0,1393,620,, 0,0,868,0,0,0,1424,639,, 0,0,1499,0,0,0,817,795,10, 0,0,1496,0,0,0,801,768,10, 0,0,1696,0,0,0,690,902,7, 0,0,1708,0,0,0,608,1091,6, 0,0,1523,0,0,0,642,927,6, 0,0,1711,0,0,0,595,1117,5, 0,0,699,0,0,0,898,499,5, 0,0,1463,0,0,0,882,523,5, 0,0,1679,0,0,0,675,711,5, 0,0,1035,0,0,0,1351,609,5, 0,0,1529,0,0,0,643,872,5, 0,0,1660,0,0,0,753,630,4, 0,0,1663,0,0,0,738,658,4, 0,0,1683,0,0,0,660,738,4, 0,0,1686,0,0,0,661,794,4, 0,0,1526,0,0,0,659,847,3, 0,0,777,0,0,0,598,687,2, 0,0,1699,0,0,0,721,1009,3, 0,0,1702,0,0,0,751,1009,3, 0,0,491,0,0,0,1386,425,3, 0,0,1625,0,0,0,1382,456,3, 0,0,1622,0,0,0,1384,490,3, 0,0,1650,0,0,0,1384,520,3, 0,0,1647,0,0,0,1383,551,3, 0,0,1637,0,0,0,1420,392,3, 0,0,1634,0,0,0,1421,425,3, 0,0,1631,0,0,0,1420,455,3, 0,0,1628,0,0,0,1420,488,3, 0,0,1640,0,0,0,1419,520,3, 0,0,1643,0,0,0,1421,551,3, 0,0,1493,0,0,0,832,769,4, 0,0,1490,0,0,0,814,740,3, 0,0,1657,0,0,0,857,600,2, 0,0,1457,0,0,0,1053,496,2, 0,0,1454,0,0,0,1022,496,2, 0,0,1535,0,0,0,692,795,2, 0,0,1484,0,0,0,750,739,2, 0,0,1514,0,0,0,722,902,1, 0,0,1451,0,0,0,896,387,1, 0,0,1448,0,0,0,913,415,1, 0,0,1445,0,0,0,926,445,1, 0,0,1502,0,0,0,847,791,7, 0,0,1693,0,0,0,655,901,5, 0,0,1705,0,0,0,642,1091,4, 0,0,1460,0,0,0,914,523,3, 0,0,1666,0,0,0,799,657,3, 0,0,1676,0,0,0,689,740,3, 0,0,1532,0,0,0,674,820,2, 0,0,940,0,0,0,691,280,Dest., 0,0,936,0,0,0,722,279,Dest., 0,0,932,0,0,0,662,278,Dest., 0,0,1874,0,0,0,451,926,Dest., 0,0,362,0,0,0,63,118,TURN, 0,0,365,0,0,0,177,318,to move, 0,0,1,8,A,26,situations/setups.html";
    setupGameData[3] = "";
    var setUpGameNo = 0;
var maxNoOfSetUps = 3;
var unitLocation = "units/";//"units/"; "units3/";
var unitExtension = ".jpg";//".jpg"; ".png";
//var boardSize = 2;//start size of board 1=smallest; 8=largest

var deadPosA_X0 = 1550;
var deadPosA_delX = 240;
var deadPosA_Y0 = 2500;
var deadPosA_delY = 3400;
var deadPosB_X0 = 9900;
var deadPosB_delX = 240;
var deadPosB_Y0 = 2500;
var deadPosB_delY = 3400;

var swidth=3000*4; //width of biggest board
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
var Bbase = ["#77ff00","#00ff00", "#00ff01"];
var Apanic=9999;
var Bpanic=9999;
var maxTurns = 10;
const nameA="French";
const nameB="Russian";
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
"#0077ff/#ffffff/#000000/#ffffff", "Head-Quarters", "0", "12", "n", "hq", "", "6", "",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "11", "1", "n", "inf", "11", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "7", "4", "n", "inf", "7", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "6", "4", "n", "inf", "6", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "5", "4", "n", "inf", "5", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "4", "3", "n", "inf", "4", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "3", "1", "n", "inf", "3", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "2", "2", "n", "inf", "2", "4", "XX",
"#0000ff/#ffffff/#ffffff/#000000", "Cavalry", "4", "2", "c", "cav", "4", "5", "XX",
"#0000ff/#ffffff/#ffffff/#000000", "Cavalry", "2", "13", "c", "cav", "2", "5", "XX",
"#0000ff/#ffffff/#ffffff/#000000", "Cavalry", "1", "3", "c", "cav", "1", "5", "XX",
"#0000ff/#ffffff/#ff0000/#000000", "Artillery", "8", "1", "a", "art", "8", "3", "XX",
"#0000ff/#ffffff/#ff0000/#000000", "Artillery", "7", "2", "a", "art", "7", "3", "XX",
"#0000ff/#ffffff/#ff0000/#000000", "Artillery", "5", "1", "a", "art", "5", "3", "XX",
"#0000ff/#ffffff/#ff0000/#000000", "Artillery", "4", "1", "a", "art", "4", "3", "XX",
"#0000ff/#ffffff/#ff0000/#000000", "Artillery", "2", "1", "a", "art", "2", "3", "XX",

"#77ff00/#000000/#000000/#ffffff", "Head-Quarters", "0", "8", "n", "hq", "", "6", "",
"#00ff00/#000000/#ffff00/#000000" , "Infantry", "10", "2", "n", "inf", "10", "4", "XX",
"#00ff00/#000000/#ffff00/#000000" , "Infantry", "7", "1", "n", "inf", "7", "4", "XX",
"#00ff00/#000000/#ffff00/#000000" , "Infantry", "6", "2", "n", "inf", "6", "4", "XX",
"#00ff00/#000000/#ffff00/#000000" , "Infantry", "5", "6", "n", "inf", "5", "4", "XX",
"#00ff00/#000000/#ffff00/#000000" , "Infantry", "4", "4", "n", "inf", "4", "4", "XX",
"#00ff00/#000000/#ffff00/#000000" , "Infantry", "3", "1", "n", "inf", "3", "4", "XX",
"#00ff00/#000000/#ffff00/#000000" , "Infantry", "2", "1", "n", "inf", "2", "4", "XX",
"#00ff00/#000000/#ffff00/#000000" , "Infantry", "3", "13", "n", "inf", "3", "3", "XX",
"#00ff00/#000000/#ffffff/#000000" , "Cavalry", "4", "1", "c", "cav", "4", "5", "XX",
"#00ff00/#000000/#ffffff/#000000" , "Cavalry", "3", "1", "c", "cav", "3", "5", "XX",
"#00ff00/#000000/#ffffff/#000000" , "Cavalry", "2", "5", "c", "cav", "2", "5", "XX",
"#00ff00/#000000/#ffffff/#000000" , "Cavalry", "1", "1", "c", "cav", "1", "5", "XX",
"#00ff00/#000000/#ffffff/#000000" , "Cavalry", "1", "3", "c", "cav", "1", "6", "XX",
"#00ff00/#000000/#ff0000/#000000" , "Artillery", "7", "1", "a", "art", "7", "3", "XX",
"#00ff00/#000000/#ff0000/#000000" , "Artillery", "5", "1", "a", "art", "5", "3", "XX",
"#00ff00/#000000/#ff0000/#000000" , "Artillery", "4", "1", "a", "art", "4", "3", "XX",
"#00ff00/#000000/#ff0000/#000000" , "Artillery", "3", "3", "a", "art", "3", "3", "XX",
"#00ff00/#000000/#ff0000/#000000" , "Artillery", "2", "1", "a", "art", "2", "3", "XX",

"#ffaaaa/#000000/#ffffff/#000000", "Redoubt Destroyed","0","4","x", "Redo't", "Dest.", "", "",
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

  "Redoubt","Redoubt","Redoubt","Redoubt",
  "Game", "Side"
];

var designateLA=[
"Emperor", "Marshal", "Marshal", "Prince Eugene","General", "Prince",
 "Marshal", "Marshal","General", "General", "General", "General",
"Imperial Grd",
"I Corps", "IV*(I) Corps", "IV Corps", "Imperial Grd",
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


 "Marshal", "General", "General", "General","General", "General",
  "General", "Grand Duke",
 "Imperial Grd", "Imperial Grd","VIII Corps", "III Corps", "VIII Corps",
"I Corps", "II Corps", "II Corps", "VI Corps", "VII Corps", "VIII Corps",
"IV Corps", "IV Corps", "VI Corps", "VII Corps",
"VII Corps",   "Imperial Grd",
 "Imperial Grd", "Imperial Grd",
 "", "", "", "","", "", "", "","", "", "", "","",
  "", "", "", "IV Corps", "VI Corps","VIII Corps",
"", "", "",
"Imperial Grd", "VIII Corps","III Corps",
"IV Corps","VI Corps","VII Corps",

"Destroyed","Destroyed","Destroyed","Destroyed",
"Turn", "to move"];

var designateRA=[
"Napoleon", "Davout", "Ney", "de Beauhamais","Junot", "Poniatowski",
"Lefebvre", "Mortier","Nansouty", "Montbrun", "Grouchy", "Latour-Maubourg",
"Old Grd",
"2","1", "Italian Grd", "Young Grd",
"10", "11", "Middle Grd", "Hessian Grd",
 "4", "3", "13", "14",
 "5", "16", "18",
"25",
"23","24",
 "Guard Heavy", "Guard",
 "", "", "", "", "1 Light", "1 Heavy", "5 Heavy", "2 Heavy", "4 Heavy", "5 Heavy", "6 Heavy", "4 Light", "7 Heavy",
 "", "2 Light",  "3 Light",
 "", "", "",
 "", "", "",

 "Kutusov", "Tutchkov", "Bagavout", "Ostermann","Doctorov", "Raevski",
  "Borozdin", "Constantine",
 "1 Guard", "2 Guard","Comb. Grenadier", "1 Grenadier", "2 Grenadier",
"3", "4", "17", "7", "27", "12",
"22", "23", "24", "26",
"27",  "3 Guard",
 "1 M. Militia", "2 M. Militia",  "3 M. Militia", "4 M. Militia", "5 M. Militia", "6 M. Militia", "7 M. Militia", "8 M. Militia", "9 M. Militia", "10 M. Militia", "11 M. Militia", "12 M. Militia", "13 M. Militia",
 "1 Guard", "2 Guard",
  "Uvarov", "Platov", "Korf", "Pahlen", "Siewers", "Wassitchkof",
"1 Cossacks", "2 Cossacks", "3 Cossacks",
"", "", "",
"", "", "",

""
];
//THESE ARE ALL DUMMY VALUES - TRUE VALUES WILL BE CALCULATED BELOW...
var totalPieces =38;
var rusPieces =16;
var gerPieces =19;
var neutPieces = 3;

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


var board1 = "boards/Borodino board 8.png";
var board_setup = "boards/Borodino board 4.png";
var board2 = "boards/Borodino board 2.png";
var board3 = "boards/Borodino board 8.png";

var boardA = ["boards/Borodino board 8.png", "boards/Borodino board 4.png",
"boards/Borodino board 2.png", "boards/Borodino board 8.png" ]


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


var maxTurns = 32;
var startYear=26;
//var seasonA=new Array();
var seasonA=["16:00","17:00","18:00","19:00","20:00","21:00", "22:00 Night","02:00 Night",
 "06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00", "22:00 Night","02:00 Night",
 "06:00","08:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"];
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
if(turnPos==7||turnPos==17){
yearAdd++;
yearNow=yearNow+1;
//turnPos=0;
}
if(turnPos>5&&turnPos<20){
  weather = "RAIN";
}
//var step2=step3-step1*4;
//seasonNow=seasonA[step3];
seasonNow=seasonA[turnPos];
var dummyTurnNo = 1*turnNumber+1;
document.getElementById("turnBox").innerText = currentPlayer+"\n"+seasonNow+"\n"+yearNow+"th Aug "+weather+" (#"+dummyTurnNo+")";//+"-"+Number(yearNow+1);
document.getElementById("timebox").innerText = currentPlayer+"\n"+seasonNow+"\n"+yearNow+"th Aug "+weather+" (#"+dummyTurnNo+")";//+"-"+Number(yearNow+1);
if(turnTock==2){alert("new turn: "+dummyTurnNo+" "+currentPlayer+" (of "+maxTurns+")");
turnTock=0;
saveWindow2();}
//statusNow();
}
