var situationAddress="situations/pharsalus_sit.html";
var tecAddress="charts/tec_spartan.html";
var crtAddress="charts/crt_prestags.html"; //"charts/goa crt.htm";
var crt2Address="charts/crt_prestags_plusD6.html"
var reinfAddress="charts/d20.htm" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt" //seq of play
var victoryAddress="situations/pharsalus_sit.html" //victory, situation
var weatherAddress="charts/goa weather.htm" //weather
var supplyAddress="charts/legionWEC.html" //supply
var rulesAddress="rules/prestags_rules.htm"
var errataAddress="rules/New prestag rules Jun09.txt" //extra rules
var manualAddress="rules/LegionExRules.pdf" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/pharsalus2_setup.jpg";
var presetupGameData = "0,0,370,0,0,0,411,184,x, 0,0,373,0,0,0,409,182,x, 0,0,376,0,0,0,406,179,x, 0,0,342,0,0,0,339,151,x, 0,0,339,0,0,0,342,153,x, 0,0,336,0,0,0,344,156,x, 0,0,323,0,0,0,363,178,x, 0,0,320,0,0,0,365,181,x, 0,0,317,0,0,0,387,182,x, 0,0,314,0,0,0,390,184,x, 0,0,332,0,0,0,356,165,x, 0,0,329,0,0,0,358,168,x, 0,0,326,0,0,0,385,179,x, 0,0,310,0,0,0,368,183,x, 0,0,306,0,0,0,361,170,x, 0,0,302,0,0,0,329,163,x, 0,0,299,0,0,0,332,165,x, 0,0,296,0,0,0,334,168,x, 0,0,292,0,0,0,337,180,x, 0,0,289,0,0,0,339,182,x, 0,0,286,0,0,0,342,185,x, 0,0,282,0,0,0,351,199,x, 0,0,279,0,0,0,354,201,x, 0,0,276,0,0,0,356,204,x, 0,0,272,0,0,0,378,200,x, 0,0,269,0,0,0,380,203,x, 0,0,266,0,0,0,383,205,x, 0,0,262,0,0,0,397,196,x, 0,0,259,0,0,0,399,199,x, 0,0,256,0,0,0,402,201,x, 0,0,190,0,0,0,432,148,x, 0,0,177,0,0,0,445,162,x, 0,0,174,0,0,0,448,165,x, 0,0,171,0,0,0,450,167,x, 0,0,164,0,0,0,433,182,x, 0,0,161,0,0,0,436,185,x, 0,0,154,0,0,0,423,199,x, 0,0,151,0,0,0,425,201,x, 0,0,144,0,0,0,413,219,x, 0,0,141,0,0,0,416,222,x, 0,0,187,0,0,0,435,150,x, 0,0,167,0,0,0,431,180,x, 0,0,246,0,0,0,329,201,x, 0,0,237,0,0,0,389,220,x, 0,0,382,0,0,0,387,217,x, 0,0,210,0,0,0,320,186,x, 0,0,206,0,0,0,331,204,x, 0,0,202,0,0,0,346,219,x, 0,0,198,0,0,0,369,220,x, 0,0,194,0,0,0,392,222,x, 0,0,243,0,0,0,343,217,x, 0,0,379,0,0,0,315,181,x, 0,0,240,0,0,0,367,217,x, 0,0,249,0,0,0,317,184,x, 0,0,157,0,0,0,420,196,x, 0,0,147,0,0,0,411,217,x, 0,0,366,0,0,0,360,176,x, 0,0,362,0,0,0,428,177,x, 0,0,397,0,0,0,325,361,x, 0,0,403,0,0,0,320,356,x, 0,0,508,0,0,0,330,370,x, 0,0,505,0,0,0,333,373,x, 0,0,502,0,0,0,335,375,x, 0,0,499,0,0,0,338,378,x, 0,0,486,0,0,0,284,361,x, 0,0,518,0,0,0,348,391,x, 0,0,521,0,0,0,345,388,x, 0,0,407,0,0,0,305,365,x, 0,0,400,0,0,0,323,359,x, 0,0,410,0,0,0,302,362,x, 0,0,452,0,0,0,185,288,x, 0,0,495,0,0,0,277,353,x, 0,0,492,0,0,0,279,356,x, 0,0,489,0,0,0,282,358,x, 0,0,515,0,0,0,350,393,x, 0,0,524,0,0,0,343,386,x, 0,0,536,0,0,0,324,395,x, 0,0,416,0,0,0,297,357,x, 0,0,394,0,0,0,328,364,x, 0,0,413,0,0,0,300,360,x, 0,0,449,0,0,0,187,291,x, 0,0,446,0,0,0,190,293,x, 0,0,551,0,0,0,294,379,x, 0,0,554,0,0,0,291,376,x, 0,0,544,0,0,0,320,379,x, 0,0,547,0,0,0,317,376,x, 0,0,386,0,0,0,334,346,x, 0,0,390,0,0,0,290,344,x, 0,0,438,0,0,0,202,274,x, 0,0,442,0,0,0,359,376,x, 0,0,511,0,0,0,318,354,x, 0,0,557,0,0,0,182,286,x, 0,0,561,0,0,0,385,147,x, 0,0,1,8,A,1,situations/pharsalus.html";
var setupGameData=new Array();
    setupGameData[0] = "0,0,370,0,0,0,411,184,x, 0,0,373,0,0,0,409,182,x, 0,0,376,0,0,0,406,179,x, 0,0,342,0,0,0,339,151,x, 0,0,339,0,0,0,342,153,x, 0,0,336,0,0,0,344,156,x, 0,0,323,0,0,0,363,178,x, 0,0,320,0,0,0,365,181,x, 0,0,317,0,0,0,387,182,x, 0,0,314,0,0,0,390,184,x, 0,0,332,0,0,0,356,165,x, 0,0,329,0,0,0,358,168,x, 0,0,326,0,0,0,385,179,x, 0,0,310,0,0,0,368,183,x, 0,0,306,0,0,0,361,170,x, 0,0,302,0,0,0,329,163,x, 0,0,299,0,0,0,332,165,x, 0,0,296,0,0,0,334,168,x, 0,0,292,0,0,0,337,180,x, 0,0,289,0,0,0,339,182,x, 0,0,286,0,0,0,342,185,x, 0,0,282,0,0,0,351,199,x, 0,0,279,0,0,0,354,201,x, 0,0,276,0,0,0,356,204,x, 0,0,272,0,0,0,378,200,x, 0,0,269,0,0,0,380,203,x, 0,0,266,0,0,0,383,205,x, 0,0,262,0,0,0,397,196,x, 0,0,259,0,0,0,399,199,x, 0,0,256,0,0,0,402,201,x, 0,0,190,0,0,0,432,148,x, 0,0,177,0,0,0,445,162,x, 0,0,174,0,0,0,448,165,x, 0,0,171,0,0,0,450,167,x, 0,0,164,0,0,0,433,182,x, 0,0,161,0,0,0,436,185,x, 0,0,154,0,0,0,423,199,x, 0,0,151,0,0,0,425,201,x, 0,0,144,0,0,0,413,219,x, 0,0,141,0,0,0,416,222,x, 0,0,187,0,0,0,435,150,x, 0,0,167,0,0,0,431,180,x, 0,0,246,0,0,0,329,201,x, 0,0,237,0,0,0,389,220,x, 0,0,382,0,0,0,387,217,x, 0,0,210,0,0,0,320,186,x, 0,0,206,0,0,0,331,204,x, 0,0,202,0,0,0,346,219,x, 0,0,198,0,0,0,369,220,x, 0,0,194,0,0,0,392,222,x, 0,0,243,0,0,0,343,217,x, 0,0,379,0,0,0,315,181,x, 0,0,240,0,0,0,367,217,x, 0,0,249,0,0,0,317,184,x, 0,0,157,0,0,0,420,196,x, 0,0,147,0,0,0,411,217,x, 0,0,366,0,0,0,360,176,x, 0,0,362,0,0,0,428,177,x, 0,0,397,0,0,0,325,361,x, 0,0,403,0,0,0,320,356,x, 0,0,508,0,0,0,330,370,x, 0,0,505,0,0,0,333,373,x, 0,0,502,0,0,0,335,375,x, 0,0,499,0,0,0,338,378,x, 0,0,486,0,0,0,284,361,x, 0,0,518,0,0,0,348,391,x, 0,0,521,0,0,0,345,388,x, 0,0,407,0,0,0,305,365,x, 0,0,400,0,0,0,323,359,x, 0,0,410,0,0,0,302,362,x, 0,0,452,0,0,0,185,288,x, 0,0,495,0,0,0,277,353,x, 0,0,492,0,0,0,279,356,x, 0,0,489,0,0,0,282,358,x, 0,0,515,0,0,0,350,393,x, 0,0,524,0,0,0,343,386,x, 0,0,536,0,0,0,324,395,x, 0,0,416,0,0,0,297,357,x, 0,0,394,0,0,0,328,364,x, 0,0,413,0,0,0,300,360,x, 0,0,449,0,0,0,187,291,x, 0,0,446,0,0,0,190,293,x, 0,0,551,0,0,0,294,379,x, 0,0,554,0,0,0,291,376,x, 0,0,544,0,0,0,320,379,x, 0,0,547,0,0,0,317,376,x, 0,0,386,0,0,0,334,346,x, 0,0,390,0,0,0,290,344,x, 0,0,438,0,0,0,202,274,x, 0,0,442,0,0,0,359,376,x, 0,0,511,0,0,0,318,354,x, 0,0,557,0,0,0,182,286,x, 0,0,561,0,0,0,385,147,x, 0,0,1,8,A,1,situations/pharsalus.html";
    setupGameData[1] = "0,0,333,0,0,0,516,285,x, 0,0,348,0,0,0,588,287,x, 0,0,345,0,0,0,593,291,x, 0,0,306,0,0,0,553,289,x, 0,0,297,0,0,0,521,293,x, 0,0,294,0,0,0,535,316,x, 0,0,291,0,0,0,542,318,x, 0,0,288,0,0,0,545,319,x, 0,0,273,0,0,0,573,320,x, 0,0,270,0,0,0,551,348,x, 0,0,321,0,0,0,519,289,x, 0,0,336,0,0,0,630,291,x, 0,0,303,0,0,0,555,292,x, 0,0,339,0,0,0,624,287,x, 0,0,330,0,0,0,551,287,x, 0,0,342,0,0,0,618,284,x, 0,0,234,0,0,0,518,350,x, 0,0,267,0,0,0,554,351,x, 0,0,261,0,0,0,559,354,x, 0,0,237,0,0,0,515,346,x, 0,0,258,0,0,0,586,344,x, 0,0,255,0,0,0,591,347,x, 0,0,252,0,0,0,593,352,x, 0,0,231,0,0,0,522,353,x, 0,0,216,0,0,0,575,382,x, 0,0,222,0,0,0,567,376,x, 0,0,219,0,0,0,570,378,x, 0,0,210,0,0,0,497,318,x, 0,0,207,0,0,0,499,322,x, 0,0,204,0,0,0,503,325,x, 0,0,249,0,0,0,608,320,x, 0,0,246,0,0,0,640,317,x, 0,0,240,0,0,0,645,321,x, 0,0,225,0,0,0,620,338,x, 0,0,201,0,0,0,627,345,x, 0,0,198,0,0,0,668,316,x, 0,0,195,0,0,0,670,319,x, 0,0,192,0,0,0,675,322,x, 0,0,282,0,0,0,605,318,x, 0,0,178,0,0,0,651,345,x, 0,0,243,0,0,0,641,317,x, 0,0,213,0,0,0,625,339,x, 0,0,175,0,0,0,541,380,x, 0,0,165,0,0,0,546,385,x, 0,0,154,0,0,0,642,377,x, 0,0,147,0,0,0,645,380,x, 0,0,144,0,0,0,484,289,x, 0,0,141,0,0,0,487,292,x, 0,0,138,0,0,0,647,382,x, 0,0,134,0,0,0,489,294,x, 0,0,130,0,0,0,606,380,x, 0,0,127,0,0,0,609,383,x, 0,0,124,0,0,0,611,385,x, 0,0,172,0,0,0,544,383,x, 0,0,161,0,0,0,654,348,x, 0,0,158,0,0,0,656,350,x, 0,0,354,0,0,0,532,314,x, 0,0,351,0,0,0,609,316,x, 0,0,570,0,0,0,291,418,x, 0,0,509,0,0,0,320,407,x, 0,0,601,0,0,0,286,477,x, 0,0,500,0,0,0,302,383,x, 0,0,506,0,0,0,297,378,x, 0,0,566,0,0,0,299,441,x, 0,0,529,0,0,0,334,441,x, 0,0,573,0,0,0,288,415,x, 0,0,625,0,0,0,302,500,x, 0,0,503,0,0,0,299,380,x, 0,0,586,0,0,0,286,413,x, 0,0,512,0,0,0,317,404,x, 0,0,542,0,0,0,316,471,x, 0,0,526,0,0,0,337,444,x, 0,0,539,0,0,0,318,473,x, 0,0,420,0,0,0,304,502,x, 0,0,545,0,0,0,313,468,x, 0,0,560,0,0,0,304,446,x, 0,0,515,0,0,0,315,402,x, 0,0,536,0,0,0,332,439,x, 0,0,589,0,0,0,297,495,x, 0,0,563,0,0,0,302,443,x, 0,0,557,0,0,0,307,448,x, 0,0,426,0,0,0,299,497,x, 0,0,622,0,0,0,269,502,x, 0,0,616,0,0,0,267,381,x, 0,0,608,0,0,0,270,384,x, 0,0,619,0,0,0,272,504,x, 0,0,490,0,0,0,304,385,x, 0,0,482,0,0,0,322,409,x, 0,0,523,0,0,0,321,476,x, 0,0,358,0,0,0,339,446,x, 0,0,628,0,0,0,311,466,x, 0,0,631,0,0,0,312,399,x, 0,0,475,0,0,0,605,257,x, 0,0,1,8,A,1,situations/pharsalus.html";
    setupGameData[2] = "0,0,333,0,0,0,516,285,x, 0,0,348,0,0,0,588,287,x, 0,0,345,0,0,0,593,291,x, 0,0,306,0,0,0,553,289,x, 0,0,297,0,0,0,521,293,x, 0,0,294,0,0,0,535,316,x, 0,0,291,0,0,0,542,318,x, 0,0,288,0,0,0,545,319,x, 0,0,273,0,0,0,573,320,x, 0,0,270,0,0,0,551,348,x, 0,0,321,0,0,0,519,289,x, 0,0,336,0,0,0,630,291,x, 0,0,303,0,0,0,555,292,x, 0,0,339,0,0,0,624,287,x, 0,0,330,0,0,0,551,287,x, 0,0,342,0,0,0,618,284,x, 0,0,234,0,0,0,518,350,x, 0,0,267,0,0,0,554,351,x, 0,0,261,0,0,0,559,354,x, 0,0,237,0,0,0,515,346,x, 0,0,258,0,0,0,586,344,x, 0,0,255,0,0,0,591,347,x, 0,0,252,0,0,0,593,352,x, 0,0,231,0,0,0,522,353,x, 0,0,216,0,0,0,575,382,x, 0,0,222,0,0,0,567,376,x, 0,0,219,0,0,0,570,378,x, 0,0,210,0,0,0,497,318,x, 0,0,207,0,0,0,499,322,x, 0,0,204,0,0,0,503,325,x, 0,0,249,0,0,0,608,320,x, 0,0,246,0,0,0,640,317,x, 0,0,240,0,0,0,645,321,x, 0,0,225,0,0,0,620,338,x, 0,0,201,0,0,0,627,345,x, 0,0,198,0,0,0,668,316,x, 0,0,195,0,0,0,670,319,x, 0,0,192,0,0,0,675,322,x, 0,0,282,0,0,0,605,318,x, 0,0,178,0,0,0,651,345,x, 0,0,243,0,0,0,641,317,x, 0,0,213,0,0,0,625,339,x, 0,0,175,0,0,0,541,380,x, 0,0,165,0,0,0,546,385,x, 0,0,154,0,0,0,642,377,x, 0,0,147,0,0,0,645,380,x, 0,0,144,0,0,0,484,289,x, 0,0,141,0,0,0,487,292,x, 0,0,138,0,0,0,647,382,x, 0,0,134,0,0,0,489,294,x, 0,0,130,0,0,0,606,380,x, 0,0,127,0,0,0,609,383,x, 0,0,124,0,0,0,611,385,x, 0,0,172,0,0,0,544,383,x, 0,0,161,0,0,0,654,348,x, 0,0,158,0,0,0,656,350,x, 0,0,354,0,0,0,532,314,x, 0,0,351,0,0,0,609,316,x, 0,0,754,0,0,0,491,650,x, 0,0,757,0,0,0,488,647,x, 0,0,675,0,0,0,502,614,x, 0,0,706,0,0,0,524,645,x, 0,0,700,0,0,0,529,650,x, 0,0,662,0,0,0,467,615,x, 0,0,656,0,0,0,472,620,x, 0,0,760,0,0,0,486,645,x, 0,0,679,0,0,0,444,621,x, 0,0,703,0,0,0,527,647,x, 0,0,774,0,0,0,461,654,x, 0,0,724,0,0,0,493,652,x, 0,0,685,0,0,0,439,616,x, 0,0,659,0,0,0,469,617,x, 0,0,688,0,0,0,436,614,x, 0,0,420,0,0,0,304,502,x, 0,0,682,0,0,0,441,619,x, 0,0,669,0,0,0,507,619,x, 0,0,731,0,0,0,302,500,x, 0,0,653,0,0,0,474,622,x, 0,0,709,0,0,0,522,642,x, 0,0,666,0,0,0,509,621,x, 0,0,672,0,0,0,504,616,x, 0,0,735,0,0,0,299,497,x, 0,0,792,0,0,0,524,709,x, 0,0,802,0,0,0,519,704,x, 0,0,799,0,0,0,521,707,x, 0,0,789,0,0,0,526,712,x, 0,0,785,0,0,0,560,647,x, 0,0,781,0,0,0,522,588,x, 0,0,692,0,0,0,321,476,x, 0,0,649,0,0,0,456,589,x, 0,0,777,0,0,0,483,642,x, 0,0,742,0,0,0,297,495,x, 0,0,475,0,0,0,605,257,x, 0,0,1,8,A,1,situations/pharsalus.html";
    setupGameData[3] = "0,0,333,0,0,0,516,285,x, 0,0,348,0,0,0,588,287,x, 0,0,345,0,0,0,593,291,x, 0,0,306,0,0,0,553,289,x, 0,0,297,0,0,0,521,293,x, 0,0,294,0,0,0,535,316,x, 0,0,291,0,0,0,542,318,x, 0,0,288,0,0,0,545,319,x, 0,0,273,0,0,0,573,320,x, 0,0,270,0,0,0,551,348,x, 0,0,321,0,0,0,519,289,x, 0,0,336,0,0,0,630,291,x, 0,0,303,0,0,0,555,292,x, 0,0,339,0,0,0,624,287,x, 0,0,330,0,0,0,551,287,x, 0,0,342,0,0,0,618,284,x, 0,0,234,0,0,0,518,350,x, 0,0,267,0,0,0,554,351,x, 0,0,261,0,0,0,559,354,x, 0,0,237,0,0,0,515,346,x, 0,0,258,0,0,0,586,344,x, 0,0,255,0,0,0,591,347,x, 0,0,252,0,0,0,593,352,x, 0,0,231,0,0,0,522,353,x, 0,0,216,0,0,0,575,382,x, 0,0,222,0,0,0,567,376,x, 0,0,219,0,0,0,570,378,x, 0,0,210,0,0,0,497,318,x, 0,0,207,0,0,0,499,322,x, 0,0,204,0,0,0,503,325,x, 0,0,249,0,0,0,608,320,x, 0,0,246,0,0,0,640,317,x, 0,0,240,0,0,0,645,321,x, 0,0,225,0,0,0,620,338,x, 0,0,201,0,0,0,627,345,x, 0,0,198,0,0,0,668,316,x, 0,0,195,0,0,0,670,319,x, 0,0,192,0,0,0,675,322,x, 0,0,282,0,0,0,605,318,x, 0,0,178,0,0,0,651,345,x, 0,0,243,0,0,0,641,317,x, 0,0,213,0,0,0,625,339,x, 0,0,175,0,0,0,541,380,x, 0,0,165,0,0,0,546,385,x, 0,0,154,0,0,0,642,377,x, 0,0,147,0,0,0,645,380,x, 0,0,144,0,0,0,484,289,x, 0,0,141,0,0,0,487,292,x, 0,0,138,0,0,0,647,382,x, 0,0,134,0,0,0,489,294,x, 0,0,130,0,0,0,606,380,x, 0,0,127,0,0,0,609,383,x, 0,0,124,0,0,0,611,385,x, 0,0,172,0,0,0,544,383,x, 0,0,161,0,0,0,654,348,x, 0,0,158,0,0,0,656,350,x, 0,0,354,0,0,0,532,314,x, 0,0,351,0,0,0,609,316,x, 0,0,754,0,0,0,491,650,x, 0,0,757,0,0,0,488,647,x, 0,0,675,0,0,0,502,614,x, 0,0,706,0,0,0,524,645,x, 0,0,700,0,0,0,529,650,x, 0,0,662,0,0,0,467,615,x, 0,0,656,0,0,0,472,620,x, 0,0,760,0,0,0,486,645,x, 0,0,679,0,0,0,444,621,x, 0,0,703,0,0,0,527,647,x, 0,0,774,0,0,0,461,654,x, 0,0,724,0,0,0,493,652,x, 0,0,685,0,0,0,439,616,x, 0,0,659,0,0,0,469,617,x, 0,0,688,0,0,0,436,614,x, 0,0,809,0,0,0,458,651,x, 0,0,682,0,0,0,441,619,x, 0,0,669,0,0,0,507,619,x, 0,0,812,0,0,0,456,649,x, 0,0,653,0,0,0,474,622,x, 0,0,709,0,0,0,522,642,x, 0,0,666,0,0,0,509,621,x, 0,0,672,0,0,0,504,616,x, 0,0,815,0,0,0,453,646,x, 0,0,836,0,0,0,411,621,x, 0,0,825,0,0,0,547,679,x, 0,0,851,0,0,0,544,677,x, 0,0,839,0,0,0,409,618,x, 0,0,832,0,0,0,573,678,x, 0,0,781,0,0,0,522,588,x, 0,0,806,0,0,0,544,619,x, 0,0,649,0,0,0,456,589,x, 0,0,857,0,0,0,519,640,x, 0,0,854,0,0,0,451,644,x, 0,0,475,0,0,0,605,257,x, 0,0,1,8,A,1,situations/pharsalus.html";
    var setUpGameNo = 0;
		var maxNoOfSetUps = 4;
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
var sheight=4920; //height of biggest board
var placePieceShift=700;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=90 //no of pieces in game
var unitTotal=17; //number of types of pieces
//***these should all be 1 less than index given by mouseOver
var lastIndex=89; //index number of last piece - turn now
var gerNumber=42; //the index number of the first side B piece
var neutNumber=89; //index number of first neutral piece

var Abase = "green/"
var Bbase = "blue/"
var Apanic=57;
var Bpanic=100;
var maxTurns = 10;
var nameA="Pompey";
var nameB="Caesar";
var D1color = "red";
var D2color = "hotpink";
var Acolor = "red";
var Bcolor = "YellowGreen";
var DcolorFlag = false;

//unit sizes - 88 fits 3 to a hex, so hex=264, so if stackin=4 size = 264/4, if stacking=1 size =264 etc.
var sunit=100; //unit width/height
var sunit2=100;
var sunitB=71; //unit width/height
var sunitB2=71;

var noOfItems=5; //no of items of data for each unit type
var itemsPerUnit = noOfItems;
//address (without the jpg bit...), mouse text, number of pieces,  type, points value,

//c=cavalry, a=artillery, e=engine, n=infantry, x=neutral, l=leader

var unitsA=["green/sd.jpg", "SD af:4 mf:43 vp:", "2", "30", "n",
"green/lc.jpg", "LC af:1 mf:9 vp:", "1", "12", "c",
"green/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3", "12", "f",
"green/oc.jpg", "OC af:2 mf:9 fire:1/1 vp:", "2", "2", "f",
"green/2l.jpg", "2L combat:+6 radius:2 mf:9 POMPEY vp", "1", "1", "l",
"green/2l.jpg", "2L combat:+6 radius:2 mf:9  vp", "1", "1", "l",

"blue/sd.jpg", "SD af:4 mf:43 vp:", "2", "24", "n",
"blue/lc.jpg", "LC af:1 mf:9 vp:", "1", "4", "c",
"blue/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3", "4", "f",
"blue/1l.jpg", "1L combat:+9 radius:2 mf:9 CAESAR vp", "1", "1", "l",
"blue/2l.jpg", "2L combat:+6 radius:2 mf:9  vp", "1", "1", "l",


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


var board1 = "boards/pharsalus_board.jpg";
var board_setup = "boards/pharsalus2_setup.jpg";
var board2 = "boards/pharsalus2_board.jpg";
var board3 = "boards/pharsalus3_board.jpg";
