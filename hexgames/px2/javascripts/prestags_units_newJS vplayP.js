var situationAddress="situations/Playtesting Prestags";
var tecAddress="charts/tec_spartan.html";
var crtAddress="charts/crt_prestags_plusD6.html"; //"charts/goa crt.htm";
var crt2Address="charts/crt_prestags.html";
var reinfAddress="charts/d20.htm"; //reinforcments
var pbmAddress="charts/rallyCalculator.html"; //PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt"; //seq of play
var victoryAddress="situations/ZAMA.html"; //victory, situation
var weatherAddress="charts/goa weather.htm"; //weather
var supplyAddress="charts/prestagsWEC.html"; //supply
var rulesAddress="rules/prestags_rules.htm";
var errataAddress="rules/New prestag rules Jun09.txt"; //extra rules
var manualAddress="rules/EXCLUSIVE RULES SPARTAN.htm"; //battle manual
var SPAREAddress="charts/goa victory.htm"; //SPARE SLOT
var boardAddress = "";
var presetupGameData = "";
var setupGameData= "";
var setupGameData=new Array();
//marathon
    setupGameData[0] = "0,0,287,0,0,0,324,513,3, 0,0,284,0,0,0,315,439,3, 0,0,281,0,0,0,323,479,3, 0,0,260,0,0,0,406,319,3, 0,0,254,0,0,0,316,505,3, 0,0,248,0,0,0,320,511,3, 0,0,245,0,0,0,321,476,3, 0,0,236,0,0,0,350,387,3, 0,0,233,0,0,0,378,372,3, 0,0,224,0,0,0,411,285,3, 0,0,278,0,0,0,320,446,3, 0,0,275,0,0,0,355,392,3, 0,0,263,0,0,0,380,335,3, 0,0,257,0,0,0,408,283,3, 0,0,251,0,0,0,437,263,3, 0,0,242,0,0,0,322,440,3, 0,0,239,0,0,0,349,422,3, 0,0,230,0,0,0,382,338,3, 0,0,227,0,0,0,409,322,3, 0,0,221,0,0,0,441,267,3, 0,0,272,0,0,0,356,427,3, 0,0,266,0,0,0,376,368,3, 0,0,290,0,0,0,323,440,-, 0,0,123,0,0,0,441,475,2, 0,0,120,0,0,0,440,441,2, 0,0,104,0,0,0,440,373,2, 0,0,107,0,0,0,471,353,2, 0,0,116,0,0,0,441,405,2, 0,0,110,0,0,0,502,338,2, 0,0,113,0,0,0,531,318,2, 0,0,215,0,0,0,529,421,2, 0,0,206,0,0,0,562,373,3, 0,0,203,0,0,0,559,368,3, 0,0,200,0,0,0,503,444,3, 0,0,196,0,0,0,499,435,3, 0,0,193,0,0,0,533,391,[6], 0,0,190,0,0,0,528,385,[6], 0,0,187,0,0,0,501,406,[6], 0,0,184,0,0,0,498,401,[6], 0,0,166,0,0,0,467,453,o, 0,0,126,0,0,0,473,391,o, 0,0,130,0,0,0,467,386,o, 0,0,133,0,0,0,504,375,o, 0,0,136,0,0,0,497,368,o, 0,0,139,0,0,0,474,425,o, 0,0,142,0,0,0,467,422,o, 0,0,169,0,0,0,529,352,o, 0,0,151,0,0,0,535,354,[2], 0,0,161,0,0,0,473,461,[2], 0,0,172,0,0,0,562,338,[2], 0,0,212,0,0,0,500,476,[2], 0,0,209,0,0,0,497,470,[2], 0,0,181,0,0,0,558,335,[2], 0,0,178,0,0,0,467,489,[2], 0,0,175,0,0,0,471,495,[2], 0,0,218,0,0,0,496,400,-, 0,0,99,0,0,0,42.5,300,side A, 0,0,99,0,0,0,42.5,323,side A, 0,0,99,0,0,0,42.5,345,side B, 0,0,99,0,0,0,42.5,368,side B, 0,0,99,0,0,0,42.5,390,TURN, 0,0,99,0,0,0,42.5,413,MOVE,23,31,false,true,false,false,true,false,true,1510,1080,1542.1539030879999,1108.1539030879999,0,0,0,10,2,0,0,0,1,8,A,0,situations/Playtesting Prestags";
//qadisiya
    setupGameData[1] = "0,0,655,0,0,0,740,757,2, 0,0,643,0,0,0,804,757,2, 0,0,637,0,0,0,771,698,2, 0,0,649,0,0,0,743,721,2, 0,0,640,0,0,0,799,719,2, 0,0,646,0,0,0,774,738,2, 0,0,631,0,0,0,715,702,2, 0,0,652,0,0,0,711,738,2, 0,0,634,0,0,0,744,685,2, 0,0,658,0,0,0,771,773,2, 0,0,607,0,0,0,655,636,[4], 0,0,604,0,0,0,682,612,[4], 0,0,574,0,0,0,798,581,[4], 0,0,601,0,0,0,683,616,[4], 0,0,586,0,0,0,714,599,[4], 0,0,577,0,0,0,745,585,[4], 0,0,571,0,0,0,805,584,[4], 0,0,583,0,0,0,715,602,[4], 0,0,610,0,0,0,650,632,[4], 0,0,595,0,0,0,772,560,[4], 0,0,580,0,0,0,743,582,[4], 0,0,592,0,0,0,774,566,[4], 0,0,625,0,0,0,624,756,[3], 0,0,622,0,0,0,619,726,[3], 0,0,616,0,0,0,620,681,[3], 0,0,619,0,0,0,622,719,[3], 0,0,613,0,0,0,623,685,[3], 0,0,628,0,0,0,619,750,[3], 0,0,589,0,0,0,711,595,-, 0,0,598,0,0,0,768,565,-, 0,0,515,0,0,0,530,288,o, 0,0,482,0,0,0,746,235,o, 0,0,503,0,0,0,684,272,o, 0,0,506,0,0,0,679,262,o, 0,0,497,0,0,0,708,250,o, 0,0,555,0,0,0,588,317,o, 0,0,536,0,0,0,623,271,o, 0,0,552,0,0,0,594,324,o, 0,0,527,0,0,0,560,300,o, 0,0,565,0,0,0,619,301,o, 0,0,542,0,0,0,652,287,o, 0,0,518,0,0,0,534,290,o, 0,0,521,0,0,0,503,268,o, 0,0,485,0,0,0,740,235,o, 0,0,562,0,0,0,650,279,o, 0,0,494,0,0,0,715,255,o, 0,0,524,0,0,0,565,304,o, 0,0,533,0,0,0,587,284,o, 0,0,509,0,0,0,650,254,o, 0,0,491,0,0,0,680,238,o, 0,0,530,0,0,0,592,289,o, 0,0,512,0,0,0,562,271,o, 0,0,539,0,0,0,501,265,o, 0,0,488,0,0,0,711,217,o, 0,0,558,0,0,0,626,302,o, 0,0,568,0,0,0,585,322,-, 0,0,500,0,0,0,712,244,-, 0,0,99,0,0,0,49,106,side A, 0,0,99,0,0,0,80,118,side A, 0,0,99,0,0,0,45,102,side B, 0,0,99,0,0,0,77,103,side B, 0,0,99,0,0,0,43,23,TURN, 0,0,661,0,0,0,817,646,MOVE,19,41,false,true,true,true,true,true,true,2470,2040,2373.5382907360004,1939.5382907360004,2,3,0,7,4,0,0,0,1,8,A,0,situations/Playtesting Prestags";
//Mantinea
    setupGameData[2] = "0,0,327,0,0,0,287,291,6, 0,0,324,0,0,0,296,287,6, 0,0,321,0,0,0,259,333,6, 0,0,318,0,0,0,257,342,6, 0,0,315,0,0,0,267,339,6, 0,0,312,0,0,0,289,324,6, 0,0,309,0,0,0,291,318,6, 0,0,306,0,0,0,296,322,6, 0,0,333,0,0,0,290,283,4, 0,0,342,0,0,0,296,253,4, 0,0,348,0,0,0,291,249,4, 0,0,354,0,0,0,287,245,4, 0,0,360,0,0,0,266,307,4, 0,0,366,0,0,0,264,301,4, 0,0,372,0,0,0,257,305,4, 0,0,408,0,0,0,237,357,4, 0,0,414,0,0,0,226,356,4, 0,0,411,0,0,0,234,352,4, 0,0,330,0,0,0,204,270,3, 0,0,336,0,0,0,199,264,3, 0,0,420,0,0,0,231,316,3, 0,0,417,0,0,0,235,321,3, 0,0,423,0,0,0,227,322,3, 0,0,363,0,0,0,205,305,3, 0,0,369,0,0,0,198,308,3, 0,0,432,0,0,0,228,292,3, 0,0,390,0,0,0,267,270,3, 0,0,396,0,0,0,261,265,3, 0,0,381,0,0,0,237,252,3, 0,0,384,0,0,0,229,257,3, 0,0,426,0,0,0,236,289,3, 0,0,339,0,0,0,197,274,3, 0,0,429,0,0,0,229,284,3, 0,0,435,0,0,0,259,272,3, 0,0,438,0,0,0,292,317,-, 0,0,441,0,0,0,265,337,-, 0,0,186,0,0,0,649,458,6, 0,0,189,0,0,0,654,453,6, 0,0,171,0,0,0,596,495,6, 0,0,198,0,0,0,618,476,6, 0,0,201,0,0,0,624,477,6, 0,0,168,0,0,0,592,491,6, 0,0,153,0,0,0,590,462,6, 0,0,150,0,0,0,596,458,6, 0,0,144,0,0,0,625,443,6, 0,0,147,0,0,0,620,439,6, 0,0,177,0,0,0,561,474,6, 0,0,174,0,0,0,564,478,6, 0,0,183,0,0,0,530,498,4, 0,0,180,0,0,0,535,495,4, 0,0,165,0,0,0,558,507,4, 0,0,162,0,0,0,565,508,4, 0,0,159,0,0,0,560,516,4, 0,0,156,0,0,0,564,512,4, 0,0,141,0,0,0,533,524,4, 0,0,138,0,0,0,526,533,4, 0,0,132,0,0,0,536,531,4, 0,0,135,0,0,0,530,527,4, 0,0,282,0,0,0,625,548,3, 0,0,267,0,0,0,590,559,3, 0,0,264,0,0,0,591,564,3, 0,0,261,0,0,0,558,575,3, 0,0,258,0,0,0,562,580,3, 0,0,255,0,0,0,646,523,3, 0,0,249,0,0,0,650,491,3, 0,0,243,0,0,0,590,525,3, 0,0,237,0,0,0,620,507,3, 0,0,231,0,0,0,558,543,3, 0,0,252,0,0,0,651,529,3, 0,0,246,0,0,0,654,497,3, 0,0,240,0,0,0,595,529,3, 0,0,234,0,0,0,625,511,3, 0,0,228,0,0,0,563,547,3, 0,0,219,0,0,0,648,420,[4], 0,0,216,0,0,0,654,426,[4], 0,0,300,0,0,0,679,437,[4], 0,0,303,0,0,0,684,445,[4], 0,0,270,0,0,0,594,599,1, 0,0,273,0,0,0,589,593,1, 0,0,291,0,0,0,625,580,1, 0,0,294,0,0,0,618,581,1, 0,0,285,0,0,0,594,520,-, 0,0,297,0,0,0,656,425,-, 0,0,288,0,0,0,594,600,-, 0,0,99,0,0,0,49,106,side A, 0,0,99,0,0,0,80,118,side A, 0,0,99,0,0,0,45,102,side B, 0,0,99,0,0,0,77,103,side B, 0,0,99,0,0,0,43,23,TURN, 0,0,444,0,0,0,166,296,MOVE,31,40,false,false,false,false,true,true,true,1750,1320,1542.1539030879999,1108.1539030879999,4,5,10,14,2,0,0,0,1,8,A,0,situations/Playtesting Prestags";
//sabines
    setupGameData[3] = "0,0,160,0,0,0,260,717,2, 0,0,157,0,0,0,381,718,2, 0,0,154,0,0,0,289,770,2, 0,0,151,0,0,0,263,785,2, 0,0,136,0,0,0,228,770,2, 0,0,148,0,0,0,355,770,2, 0,0,145,0,0,0,321,784,2, 0,0,142,0,0,0,382,789,2, 0,0,139,0,0,0,413,772,2, 0,0,133,0,0,0,381,752,3, 0,0,130,0,0,0,323,756,3, 0,0,123,0,0,0,261,756,3, 0,0,120,0,0,0,293,737,[2], 0,0,164,0,0,0,229,736,[2], 0,0,117,0,0,0,353,735,[2], 0,0,111,0,0,0,410,734,[2], 0,0,209,0,0,0,288,248,3, 0,0,206,0,0,0,319,267,3, 0,0,203,0,0,0,353,286,3, 0,0,200,0,0,0,290,283,3, 0,0,197,0,0,0,379,268,3, 0,0,194,0,0,0,322,304,3, 0,0,188,0,0,0,263,268,3, 0,0,185,0,0,0,262,302,3, 0,0,182,0,0,0,232,286,3, 0,0,179,0,0,0,407,250,3, 0,0,176,0,0,0,382,304,3, 0,0,173,0,0,0,411,286,3, 0,0,191,0,0,0,320,336,3, 0,0,167,0,0,0,349,320,o, 0,0,170,0,0,0,291,319,o, 0,0,99,0,0,0,49,106,side A, 0,0,99,0,0,0,80,118,side A, 0,0,99,0,0,0,45,102,side B, 0,0,99,0,0,0,77,103,side B, 0,0,99,0,0,0,43,23,TURN, 0,0,101,0,0,0,63,792,MOVE, 100,100,true,false,true,false,true,true,true,1750,1320,2165.6921938240002,1731.6921938240002,6,7,0,8,1,0,0,0,1,8,A,0,situations/Playtesting Prestags";
//pharsalus
        setupGameData[4] = "0,0,517,0,0,0,773,741,4, 0,0,520,0,0,0,768,734,4, 0,0,514,0,0,0,834,663,4, 0,0,523,0,0,0,777,734,4, 0,0,529,0,0,0,801,720,4, 0,0,469,0,0,0,774,663,4, 0,0,502,0,0,0,800,684,4, 0,0,484,0,0,0,737,717,4, 0,0,505,0,0,0,807,684,4, 0,0,490,0,0,0,775,705,4, 0,0,463,0,0,0,774,670,4, 0,0,535,0,0,0,834,707,4, 0,0,544,0,0,0,832,698,4, 0,0,460,0,0,0,744,681,4, 0,0,454,0,0,0,743,686,4, 0,0,466,0,0,0,769,667,4, 0,0,493,0,0,0,767,708,4, 0,0,496,0,0,0,773,697,4, 0,0,511,0,0,0,827,667,4, 0,0,472,0,0,0,804,651,4, 0,0,508,0,0,0,832,671,4, 0,0,538,0,0,0,828,702,4, 0,0,475,0,0,0,795,654,4, 0,0,526,0,0,0,806,723,4, 0,0,532,0,0,0,803,715,4, 0,0,499,0,0,0,804,690,4, 0,0,481,0,0,0,744,723,4, 0,0,487,0,0,0,741,713,4, 0,0,478,0,0,0,800,646,4, 0,0,457,0,0,0,738,682,4, 0,0,556,0,0,0,771,809,1, 0,0,442,0,0,0,735,753,1, 0,0,565,0,0,0,769,766,1, 0,0,445,0,0,0,744,751,1, 0,0,559,0,0,0,778,769,1, 0,0,550,0,0,0,775,804,1, 0,0,574,0,0,0,799,780,1, 0,0,433,0,0,0,740,786,1, 0,0,439,0,0,0,741,756,1, 0,0,571,0,0,0,804,789,1, 0,0,553,0,0,0,770,800,1, 0,0,562,0,0,0,770,775,1, 0,0,385,0,0,0,710,702,[2], 0,0,373,0,0,0,709,665,[2], 0,0,400,0,0,0,737,647,[2], 0,0,406,0,0,0,768,629,[2], 0,0,394,0,0,0,802,615,[2], 0,0,409,0,0,0,705,702,[2], 0,0,397,0,0,0,713,670,[2], 0,0,388,0,0,0,773,633,[2], 0,0,379,0,0,0,710,770,[2], 0,0,403,0,0,0,708,737,[2], 0,0,382,0,0,0,712,734,[2], 0,0,376,0,0,0,742,651,[2], 0,0,577,0,0,0,745,794,2, 0,0,580,0,0,0,736,789,2, 0,0,586,0,0,0,769,673,-, 0,0,583,0,0,0,742,785,-, 0,0,644,0,0,0,443,611,4, 0,0,641,0,0,0,438,581,4, 0,0,617,0,0,0,445,514,4, 0,0,714,0,0,0,414,559,4, 0,0,659,0,0,0,616,443,4, 0,0,726,0,0,0,413,526,4, 0,0,605,0,0,0,444,650,4, 0,0,626,0,0,0,441,577,4, 0,0,632,0,0,0,439,614,4, 0,0,638,0,0,0,439,543,4, 0,0,611,0,0,0,444,581,4, 0,0,592,0,0,0,623,442,4, 0,0,681,0,0,0,590,420,4, 0,0,678,0,0,0,594,425,4, 0,0,720,0,0,0,412,630,4, 0,0,717,0,0,0,413,598,4, 0,0,647,0,0,0,437,652,4, 0,0,620,0,0,0,439,510,4, 0,0,635,0,0,0,439,507,4, 0,0,623,0,0,0,439,545,4, 0,0,608,0,0,0,443,617,4, 0,0,596,0,0,0,617,437,4, 0,0,629,0,0,0,441,647,4, 0,0,614,0,0,0,444,547,4, 0,0,696,0,0,0,645,431,1, 0,0,693,0,0,0,652,424,1, 0,0,699,0,0,0,646,420,1, 0,0,702,0,0,0,656,427,1, 0,0,653,0,0,0,444,510,[2], 0,0,650,0,0,0,441,647,[2], 0,0,656,0,0,0,443,580,[2], 0,0,663,0,0,0,624,434,[2], 0,0,705,0,0,0,648,425,-, 0,0,708,0,0,0,438,573,-, 0,0,99,0,0,0,49,106,side A, 0,0,99,0,0,0,80,118,side A, 0,0,99,0,0,0,45,102,side B, 0,0,99,0,0,0,77,103,side B, 0,0,99,0,0,0,43,23,TURN, 0,0,732,0,0,0,846,750,MOVE, 100,100,true,false,false,false,false,false,true,2230,1800,2165.6921938240002,1731.6921938240002,8,9,2,10,3,0,0,0,1,8,A,0,situations/Playtesting Prestags";
var setUpGameNo = 0;
var maxNoOfSetUps = 5;
var gameName = ["Marathon 490 BC", "Qadisiya AD 637", "Mantinea 362 BC", "Romans vs Sabines 753 BC", "Pharsalus 48 BC"]
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

var swidth=canvW0*4; //width of biggest board 1750
var sheight=canvH0*4; //height of biggest board 1750
var placePieceShift=400;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=83;//no of pieces in game
var unitTotal=18; //number of types of pieces
//***these should all be 1 less than index given by mouseOver
var lastIndex=82; //index number of last piece - turn now
var gerNumber=38; //the index number of the first side B piece
var neutNumber=82; //index number of first neutral piece

var Abase = "cream/";
var Bbase = "rose/";
var Apanic=100;
var Bpanic=100;
var maxTurns = 20;
var nameA="Side A";
var nameB="Side B";
var D1color = "red";
var D2color = "hotpink";
var Acolor = "MediumSpringGreen";
var Bcolor = "red";
var DcolorFlag = false;

//unit sizes - 88 fits 3 to a hex, so hex=264, so if stackin=4 size = 264/4, if stacking=1 size =264 etc.
var unitSize = 120;
var deltaSize = 0;
var borderSize = 1.4;//this number gets multiplied by boardSize
var sunit=unitSize; //unit width/height
//alert("here!");
var sunit2=unitSize;
var sunitB=unitSize; //unit width/height
var sunitB2=unitSize;

var noOfItems=11; //no of items of data for each unit type
var itemsPerUnit = noOfItems;
//address (without the jpg bit...), mouse text, number of pieces,  type, points value,

//c=cavalry, a=artillery, e=engine, n=infantry, x=neutral, l=leader

var unitsA=[Abase+"/ms.jpg", "MS af:3 mf:3 vp:", "2", "12", "n",
Abase+"/ps.jpg", "PS af:4 mf:3 vp:", "2",  "4", "n",
Abase+"/lc.jpg", "LC af:1 mf:9 vp:", "1", "2", "c",
Abase+"/mc.jpg", "MC af:[3] mf:9 vp:", "2", "4", "c",
Abase+"/el.jpg", "EL af:[8] mf:6 vp:", "4",  "6", "e",
Abase+"/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3", "4", "f",
Abase+"/oc.jpg", "OC af:2 mf:9 fire:1/1 vp:", "2", "4", "f",
Abase+"/1l.jpg", "1L combat:+9 radius:2 mf:9  HANNIBAL vp", "4", "1", "l",
Abase+"/2l.jpg", "2L combat:+6 radius:2 mf:9  vp", "3", "1", "l",

Bbase+"/ms.jpg", "MS af:3 mf:3 vp:", "2", "4", "n",
Bbase+"/s2.jpg", "PL af:4 mf:4 fire:1/1 vp:", "2", "20", "f",
Bbase+"/lc.jpg", "LC af:1 mf:9 vp:", "1", "4", "c",
Bbase+"/mc.jpg", "MC af:[3] mf:9 vp:", "2", "4", "c",
Bbase+"/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3", "6", "f",
Bbase+"/oc.jpg", "OC af:2 mf:9 fire:1/1 vp:", "2", "4", "f",
Bbase+"/2l.jpg", "2L combat:+6 radius:2 mf:9  vp", "3", "1", "l",
Bbase+"/3l.jpg", "3L combat:+3 radius:1 mf:9  vp", "2", "1", "l",


"neut/turn1.jpg", "TURN NOW", "", "1", "x",
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


var board1 = "boards/ZAMA.jpg";
var board_setup = "boards/ZAMA_SETUP.jpg";
var board2 = "boards/spartan.jpg";
var board3 = "boards/arbela1.jpg";
