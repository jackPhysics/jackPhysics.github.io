
//var lastIndex = 0;
var imageArray=new Array();
var piecesArray=new Array();
var piecesLeft=new Array();
var piecesTop=new Array();
var hopperLeft=0;
var hopperTop=0;
var hopperL=0;
var hopperT=0;
var mouseActive=0;
var xpos=0;
var ypos=0;
var xpos2=0;
var ypos2=0;
var leftPos=0;//position of transport so passanger can get aboard!
var topPos=0;
var oldXpos=0;
var oldYpos=0;
//var ps=0;//holds the passenger unit image
var relX=0;
var relY=0;
var activeIndex=0;
var oldIndex=-1;
var activeImage = null;
var oldImage = 0;
var noOfImages = 0;
var nextZ=100;
var pieceSize = sunit/10;
var pieceShrink = 1;
//***FOLLOWING MOVED TO 'UNITS' FILE - No, didnt work there
var boardSize = 2;//start size of board 1=smallest; 8=largest
var boardNumb = 1;
var buried = 0;
var noOfTouches = 0;
var ongoingTouches = new Array;
var line = new Array;//holds the h1 elements
var rulerL = new Array;//holds the left and top positions of the elements
var rulerT = new Array;

var effectiveA=new Array();
var disruptedA=new Array();
var hideA=new Array();
var deadA=new Array();
var thisIsA=new Array(); //array to hold what each piece actually is
var armourA=new Array();
var leftA=new Array();
var topA=new Array();
var movedA = new Array();
var firedA = new Array();
var transA= new Array();//flag to indicate unit is carrying 1=loaded, 0=empty
var panicA= new Array();
var dismountA = new Array();
var isCavA= new Array();
var leaderA= new Array();
var transActive = 0;//hold image of transport unit
var transIndex = 0;//hold index of transport unit
var transporterA=new Array();//array to hold id of the transported unit: transporterA[id of carrier]=id of passenger
var passengerA=new Array();//array to hold length (+11) of passengers name: passengerA[id of carrier]=length of pngers name +11
var typeNumbA=new Array(); //id number within type of unit
var typeTotalA=new Array(); //total of that type of unit
var findPasFlag=0;
var transActive=0;
var hideRus=0;
var hideGer=0;
var russiansHid=false;
var germansHid=false;
var turnNumb=1;
var gerDead=0;
var rusDead=0;
var vicLevel="None";
var victor = "";
var firerA=new Array();
var dismountA = new Array();
var exitA= new Array();
var cityA= new Array();
var unionVP=0;
var rebelVP=0;
var turnLetter = "A";
var turnNumber = 0; //this is the turn number
var turnNumb=1; //this is what part of a turn we are in 1:A's turn 2:end of A's turn 3:B's turn 4:end of B's turn
var turnCode = "A00";
var scale=2; //factor to change size by
var size=8; //biggest size counts as size 4
var halfsize=0; //1=pieces are halfsize
var hiddenMovement = false;
var keyBoard = null;
var dieInHand=1;
var neutN=new Array();
var ruler=false;
var rusDeadPts=0;
var gerDeadPts=0;
var deadDummy=0;
var navyMis=false;
var airMis=false;
var navyMisA=new Array();
var airMisA=new Array();
var startYear=2001;
//var seasonA=new Array();
var seasonA=["January", "February", "March", "April", "May","June","July",
"August","September","October","November","December"];
var currentPlayer=nameA;
var startSeasonOffset=0;
var seasonNow=seasonA[0+startSeasonOffset];
var yearNow=startYear;
var alliedVP=0;
var gerVP=0;
var shuffleStep=2;
var panicFlag = false;
var leaderValueA = new Array();
var saveDataFlag = false;
var mouseOverFlag=true;//turn mouseOver piece enlarge on/off KEY=Ll
var hopperFlag=true;//turn hopper on/off KEY=Hh
//var changeOfSize=0;
var hopSignL = 1;
var hopSignT = 1;
var hopJump = 1;
var turnTock = 0;//auto turn counter
var pieceNameA = new Array();
var supplyA = 3;//0 - all in supply; 1- all out of supply; 2 - random supply
var supplyB = 3;
var boardMult = 1;
var cmbtFactorsA = new Array();
var cmbtFactorsMaxA = new Array();
var hopOffset=1;
var colorIndividual = new Array();
var colorTester = "";
var countOutUnits0 = "0";
var oneOffHide=0;
var noOfTypeA = new Array();//array to hold the number of each type that unit is eg 2nd 3-10 etc.
var noOfNameA = new Array();//array to hold the number of the name that unit is eg 3_10_2etc.
var openA = new Array();//array to hold whether unit is hidden (closed) or unhidden (open) - 0 if hidden, # of unit if unhidden, #+100 if art
var unhideInf = true;//whether unhiding inf unit (true) or art unit (false)
var unhiddenNoA = new Array();
var countIndividual = new Array();
var hasSteps = new Array();
var flipBrdFlag=1;
var redBoardsList = ["red original.png", "red ardennes.png",
"red biglake.png", "red blank.png", "red board01.png",
"red plains.png", "red lostcity.png", "Kr Red n12crop.png"];
var redBLLen = redBoardsList.length;
var blackBoardsList = ["black original.png", "black ardennes.png",
"black biglake.png", "black board 00.png", "black board 01.png",
"black board 04.png", "black high terrain.png",
"black lostcity.png", "Kr Black n08crop.png"];
var blackBLLen = blackBoardsList.length;
var redBno = 1;//red boards are ODD
var blackBno = 0;//black boards are EVEN
var flipBrdNoR=0;
var flipBrdNoB=0;
var stepFlag = true;
var redArmyNo = 0;
var blackArmyNo = 0;
var changeRedFlag = false;
var changeBlackFlag = false;
var nameA = "";
var nameB = "";
var Abase = "";
var Bbase = "";
var unitsA = new Array();
var sideA = new Array();//hold which side the unit is
var sideA1 = new Array();//hold which side the unit is
var sideA2 = new Array();//hold which side the unit is
var designateLA = new Array();
var designateRA = new Array();
var unitsA1 = new Array();
var unitsA2 = new Array();
var designateLA1 = new Array();
var designateRA1 = new Array();
var designateLA2 = new Array();
var designateRA2 = new Array();
var totUnits = 0;
var rusUnits = 0;
var gerUnits = 0;
var neutUnits =0;
var redColor = false;
var blackColor = false;
var initFlag = false;
var brdNameB = "";
var brdNameR = "";
var chooseD6 = true;
var printArmiesFlag = true;

function init(){
changeRedFlag = true;
  findArmies();
  //alert("1:"+unitsA);
  changeRedFlag = false;
  changeBlackFlag = true;
  findArmiesBlackBlank()
  //findArmies();
  //alert("2:"+unitsA+"unitsA[0]="+unitsA[0]);
  sortArmies();
  //alert("5:"+"noOfPieces="+noOfPieces+"unitTotal="+unitTotal+"lastIndex="+lastIndex+"gerNumber="+gerNumber+"rusUnits="+rusUnits+"neutNumber="+neutNumber)
  placePics();
  changeRedFlag = false;
  changeBlackFlag = false;
  initFlag = true;
}


function findNewBoard(bad)//board address
{
  var brdAddr=bad;
  var flipLetR = "up";
  var flipLetB = "up";
    if(brdAddr==1){//red board
      flipBrdNoR++;
      if(flipBrdNoR>1){
      flipBrdNoR=0;
      redBno++;redBno++;
      if(redBno>boardMax){redBno=1;}}
    }
    else if(brdAddr==0){//black board
      flipBrdNoB++;
      if(flipBrdNoB>1){
      flipBrdNoB=0;
      blackBno++;blackBno++;
      if(blackBno>boardMax){blackBno=1;}}
    }

    initBoard();

    if(flipBrdNoR==1){flipLetR = "dn";}
    if(flipBrdNoB==1){flipLetB = "dn";}
    document.getElementById('boardNameR').innerText="Red Board #"+redBno+flipLetR+"\n"+brdNameR;
    document.getElementById('boardNameB').innerText="Black Board #"+blackBno+flipLetB+"\n"+brdNameB;
/*
          var d1 = document.getElementById('board');
          d1.setAttribute("src", boardAddress);

          var canvasB = document.getElementById("board");
          var ctxB = canvasB.getContext("2d");
          var scale2 = boardSize;
          swidth2=swidth*scale2/8;
          sheight2=sheight*scale2/8;
            ctxB.canvas.width = swidth2;
            ctxB.canvas.height = sheight2;

          const imgB = new Image();
          const img1 = new Image();
          const img2 = new Image();

                imgB.src = "boards/kreigBoard1c_size8n.jpg";
                img1.src = "clipBoards/"+blackBoardsList[blackBno];//"boards/Kr Black n08crop.png";
                img2.src = "clipBoards/"+redBoardsList[redBno];//"boards/Kr Red n12crop.png";
                imgB.style.zIndex = 1;
                img1.style.zIndex = 5;
                img2.style.zIndex = 6;

            ctxB.drawImage(imgB, 0, 0, swidth2, sheight2);
            //1=both up; 2=both down; 3=red down; 4=black down
            if(flipBrdNoR==1){
            ctxB.save();
            ctxB.rotate(Math.PI);
            ctxB.translate(-swidth2, -sheight2);
            ctxB.drawImage(img2, 730*scale2/8, 687*scale2/8, 4466*scale2/8, 2288*scale2/8);
            ctxB.restore();}
            else{
            ctxB.drawImage(img2, 792*scale2/8, 3058*scale2/8, 4466*scale2/8, 2288*scale2/8);}
            if(flipBrdNoB==1){
            ctxB.save();
            ctxB.rotate(Math.PI);
            ctxB.translate(-swidth2, -sheight2);
            ctxB.drawImage(img1, 742*scale2/8, 2997*scale2/8, 4466*scale2/8, 2288*scale2/8);
            ctxB.restore();}
            else{
            ctxB.drawImage(img1, 803*scale2/8, 726*scale2/8, 4466*scale2/8, 2288*scale2/8);}
            //ctxB.drawImage(img2, 792, 3036, 4466, 2277);
            if(flipBrdNoR==1){flipLetR = "d";}
            if(flipBrdNoB==1){flipLetB = "d";}
            document.getElementById('boardNameR').innerText="Red Board #"+redBno+flipLetR+": "+redBoardsList[redBno];
            document.getElementById('boardNameB').innerText="Black Board #"+blackBno+flipLetB+": "+blackBoardsList[blackBno];

    var b2 = document.getElementById("board");
  	b2.setAttribute("src", boardA[brdAddr]);
    var scale2 = boardSize;
    swidth2=swidth*scale2/8;
    sheight2=sheight*scale2/8;
    b2.style.width = swidth2 + "px";
    b2.style.height = sheight2 + "px";
*/

}




function addAllHandlers(){

    var board = document.getElementById("board");
    board.addEventListener("click", placePieceHere, false);

    window.addEventListener("keyup", keyInput, false);


    //window.addEventListener("touchstart", whereTouched, false);
    //window.addEventListener("touchmove", whereMoved, false);
    //window.addEventListener("touchend", whereEnded, false);

    for(var k=0;k<noOfImages;k++){
    //window.addEventListener("click", whereClicked, false);
    imageArray[k].addEventListener("click", whereClicked, false);
    }

    line = document.getElementsByTagName("h1");
    document.onmousedown=drawLine;
    board.addEventListener("onmousedown", drawLine, false);
    for(i=0;i<33;i++){
		rulerL[i] = 0;
		rulerT[i] = 0;
	}
}

function whereClicked(event) //where on a piece has the mouse been clicked
{
    relX = event.pageX;
    relY = event.pageY;

    var targetLeft = document.defaultView.getComputedStyle(activeImage, null).getPropertyValue("left");
    var targetTop = document.defaultView.getComputedStyle(activeImage, null).getPropertyValue("top");
    targetLeft = +targetLeft.slice(0,-2);
    targetTop = +targetTop.slice(0,-2);
    relX = relX - targetLeft;
    relY = relY - targetTop;

    //alert("left:"+relX + " top:"+relY);

}

/*
function ongoingTouchIndexById(idToFind) {
      for (var i=0; i<ongoingTouches.length; i++) {
        var id = ongoingTouches[i].identifier;

        if (id == idToFind) {
          return i;
        }
      }
      return -1;    // not found
    }

function whereTouched(evt) //where on a piece has the touch been made
{
    //evt.preventDefault();
    var touches = evt.changedTouches;
        ongoingTouches.push(touches[0]);
    var targetImg = evt.target;


    if(touches.length==1)
    { noOfTouches=1;
      change(targetImg[0]);

    }
    else if(touches.length==2)
    { noOfTouches=2;
      //makeSmaller();
    }
    else if(touches.length>2)
    { noOfTouches=3;
      //makeBigger();
    }

}

function whereMoved(evt)
{
  //evt.preventDefault();

  if(noOfTouches==1){
    var touches = evt.changedTouches;
    var idx = ongoingTouchIndexById(touches[0].identifier);


    //ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
    //touches[i].pageX, touches[i].pageY);

    xpos = ongoingTouches[idx].pageX;
    ypos = ongoingTouches[idx].pageY;
    //alert("left:"+xpos+ " top:"+ypos);

  if(mouseActive==1){

    //activeImage = document.getElementById("piece#"+activeIndex);

   //xpos = event.pageX;
    //ypos = event.pageY;
    //alert("left:"+xpos+ " top:"+ypos);
    activeImage.style.left= xpos + "px";
    activeImage.style.top= ypos + "px";
    piecesLeft[activeIndex]= (xpos)/boardSize;
    piecesTop[activeIndex]= (ypos)/boardSize;

    //activeImage.setAttribute("class", "piece");
    //activeImage.style.zIndex = nextZ++;
    //oldImage = activeImage;
    //mouseActive=0;
  }
  }
}

function whereEnded(evt)
{
  evt.preventDefault();
}
*/


function drawLine(event){//-4 and -17 are because of offset of h1 elements
	if(ruler){
	xpos2=event.pageX-2;//evnt.offsetX-4;//event.x-4;
	ypos2=event.pageY-32;//evnt.offsetY-17;//event.y-17;
//offsetXY works when the window scrolls but not when you click on pieces
//.x .y you can click on pieces but line goes wrong when you scroll
	for(i=0;i<33;i++){
		line[i].style.left=xpos2-((xpos2-oldXpos)/32)*i +"px";
		rulerL[i] = ((xpos2-((xpos2-oldXpos)/32)*i)+2)/boardSize;
		line[i].style.top=ypos2-((ypos2-oldYpos)/32)*i +"px";
		rulerT[i] = ((ypos2-((ypos2-oldYpos)/32)*i)+32)/boardSize;
	}
	oldXpos=xpos2;
	oldYpos=ypos2;
	}

}


 function placePieceHere(event) //move the active piece into a new position
{
    xpos = event.pageX;
    ypos = event.pageY;
    //alert("left:"+xpos+ " top:"+ypos);
    //alert("noOfPieces:"+noOfPieces+ " unitTotal:"+unitTotal+ " lastIndex:"+lastIndex+ " gerNumber:"+gerNumber);

  if(mouseActive==1){

    //activeImage = document.getElementById("piece#"+activeIndex);

    xpos = event.pageX;
    ypos = event.pageY;
    //alert("left:"+xpos+ " top:"+ypos);
    if(mouseOverFlag){
    activeImage.style.left= xpos - relX/2 + "px";//xpos - relX/2 + "px";
    activeImage.style.top= ypos - relY/2 + "px";//ypos - relY/2 + "px";
    piecesLeft[activeIndex]= Math.round((xpos - relX/2)/boardSize);//Math.round((xpos - relX)/boardSize);
    piecesTop[activeIndex]= Math.round((ypos - relY/2)/boardSize);//Math.round((ypos - relY)/boardSize);
    keyBoard.style.left= xpos - relX/2 + hopSignL*pieceSize*boardSize*hopOffset + "px";//xpos - relX/2 + "px";
    keyBoard.style.top= ypos - relY/2 + hopSignT*pieceSize*boardSize*hopOffset + "px";//ypos - relY/2 + "px";
    //alert("left:"+xpos+ " top:"+ypos+" Ileft:"+activeImage.style.left+ " Itop:"+activeImage.style.top);
    }
    else{
    activeImage.style.left= xpos - relX + "px";//xpos - relX/2 + "px";
    activeImage.style.top= ypos - relY + "px";//ypos - relY/2 + "px";
    piecesLeft[activeIndex]= Math.round((xpos - relX)/boardSize);//Math.round((xpos - relX)/boardSize);
    piecesTop[activeIndex]= Math.round((ypos - relY)/boardSize);//Math.round((ypos - relY)/boardSize);
    keyBoard.style.left= xpos - relX + hopSignL*pieceSize*boardSize*hopOffset + "px";//xpos - relX/2 + "px";
    keyBoard.style.top= ypos - relY + hopSignT*pieceSize*boardSize*hopOffset + "px";//ypos - relY/2 + "px";
    }
    hopperLeft= (xpos - relX + hopSignL*pieceSize*boardSize*hopOffset);//xpos - relX/2 + "px";
    hopperTop= (ypos - relY) + hopSignT*pieceSize*boardSize*hopOffset;//ypos - relY/2 + "px";
    document.getElementById('hopText').innerText=""+activeImage.getAttribute("title");
    //document.getElementById("hopText").innerHTML="DONE1";
    if(hopperFlag){keyBoard.style.zIndex = nextZ++;}
    activeImage.setAttribute("class", "piece");
    activeImage.style.borderColor="black";
    activeImage.style.zIndex = nextZ++;
    oldImage = activeImage;
    //alert(""+piecesTop[activeIndex]);
    mouseActive=0;
    hopHop(xpos, ypos);
    if(movedA[activeIndex]==0){changeMark(activeImage, activeIndex, 1);}
    //alert("2 a: "+activeIndex+" x: "+lastIndex);
    if(activeIndex==lastIndex-1){turnTock++
      if(turnTock==2){
        //turnTock=0;
        nextTurn();
      }
    }
  }

  //now need to save the page
  doEdgeColor();
  saveWindow2();
}


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("unit", ev.target.id);
  var data = ev.dataTransfer.getData("unit");
  mouseActive=1;
  activeImage = document.getElementById(data);
  activeIndex = activeImage.getAttribute("id");
  activeIndex = 1*activeIndex.slice(6);
  //alert(""+activeIndex);
      relX = event.pageX;
      relY = event.pageY;

      var targetLeft = document.defaultView.getComputedStyle(activeImage, null).getPropertyValue("left");
      var targetTop = document.defaultView.getComputedStyle(activeImage, null).getPropertyValue("top");
      targetLeft = +targetLeft.slice(0,-2);
      targetTop = +targetTop.slice(0,-2);
      relX = relX - targetLeft;
      relY = relY - targetTop;

          //alert("left:"+relX + " top:"+relY);
}


function drop(ev) {
  ev.preventDefault();
  placePieceHere(ev);
//  for(i=0;i<noOfPieces;i++){
//    activeIndex=i;
  doEdgeColor();
//}
}

function placePicsBoard(){
      var d1 = document.getElementById('board');
      d1.setAttribute("src", boardAddress);

      var d2 = document.getElementById('hopperHTML');
        d2.insertAdjacentHTML('afterend', ""+hopperHTMLcode);
      var d3 = document.getElementById('table1HTML');
        d3.insertAdjacentHTML('afterend', ""+table1HTMLcode);
      var d4 = document.getElementById('table2HTML');
        d4.insertAdjacentHTML('afterend', ""+table2HTMLcode);

      keyBoard = document.getElementById('keyPressTable');

      //board.style.width = swidth + "px";
      //board.style.height = sheight + "px";

      var canvasB = document.getElementById("board");
      var ctxB = canvasB.getContext("2d");
        ctxB.canvas.width = swidth;
        ctxB.canvas.height = sheight;
      ctxB.fillStyle = "Olive";
      ctxB.fillRect(0, 0, swidth, sheight);

      //const ctx = document.getElementById("canvas").getContext("2d");
      //BACK BOARD
      const imgB = new Image();
      const img1 = new Image();
      const img2 = new Image();
      imgB.onload = () => {
        ctxB.drawImage(imgB, 0, 0, swidth, sheight);
        //1=both up; 2=both down; 3=red down; 4=black down
        ctxB.drawImage(img1, 803, 726, 4466, 2288);
        if(flipBrdFlag==2||flipBrdFlag==3){
        ctxB.save();
        ctxB.rotate(Math.PI);
        ctxB.translate(-swidth, -sheight);
        ctxB.drawImage(img2, 730, 687, 4466, 2288);
        ctxB.restore();}
        else{
        ctxB.drawImage(img2, 792, 3058, 4466, 2288);}
        if(flipBrdFlag==2||flipBrdFlag==4){
        ctxB.save();
        ctxB.rotate(Math.PI);
        ctxB.translate(-swidth, -sheight);
        ctxB.drawImage(img1, 742, 2997, 4466, 2288);
        ctxB.restore();}
        else{
        ctxB.drawImage(img1, 803, 726, 4466, 2288);}
        //ctxB.drawImage(img2, 792, 3036, 4466, 2277);
        };
      imgB.src = "boards/kreigBoard1c_size8n.jpg";
      img1.src = "clipBoards/black original.png";
      img2.src = "clipBoards/red original.png";
      imgB.style.zIndex = 1;
      img1.style.zIndex = 5;
		  //img1.style.transform='rotate(180deg)';
      img2.style.zIndex = 6;
}

function placePics() //initialise, add the game pieces to the board
{
  //keyBoard = document.getElementById('keyPressTable');
  //alert(""+hopperHTMLcode);

      var d1 = document.getElementById('board');
      d1.setAttribute("src", boardAddress);

      var d2 = document.getElementById('hopperHTML');
        d2.insertAdjacentHTML('afterend', ""+hopperHTMLcode);
      var d3 = document.getElementById('table1HTML');
        d3.insertAdjacentHTML('afterend', ""+table1HTMLcode);
      var d4 = document.getElementById('table2HTML');
        d4.insertAdjacentHTML('afterend', ""+table2HTMLcode);

      keyBoard = document.getElementById('keyPressTable');

      initBoard();

      var m1 = document.getElementById('armyMenu');
      for(a=0;a<redArmyMax;a++){
      //document.getElementById('armyMenu').insertAdjacentHTML='<a class="save" href="javascript:changeRedArmy2("'+a+'")">"Army #"'+a+'</a>';
      var armyNow = allTheArmiesA[a];
      m1.innerHTML += '<a class="aiw" href="javascript:changeRedArmy2('+a+')">Army #'+a+': '+armyNow+'</a>';
      }

      //board.style.width = swidth + "px";
      //board.style.height = sheight + "px";

/*
      var canvasB = document.getElementById("board");
      var ctxB = canvasB.getContext("2d");
        ctxB.canvas.width = swidth;
        ctxB.canvas.height = sheight;
      ctxB.fillStyle = "Olive";
      ctxB.fillRect(0, 0, swidth, sheight);

      //const ctx = document.getElementById("canvas").getContext("2d");
      //BACK BOARD
      const imgB = new Image();
      const img1 = new Image();
      const img2 = new Image();
      imgB.onload = () => {
        ctxB.drawImage(imgB, 0, 0, swidth, sheight);
        //1=both up; 2=both down; 3=red down; 4=black down
        ctxB.drawImage(img1, 803, 726, 4466, 2288);
        if(flipBrdFlag==2||flipBrdFlag==3){
        ctxB.save();
        ctxB.rotate(Math.PI);
        ctxB.translate(-swidth, -sheight);
        ctxB.drawImage(img2, 730, 687, 4466, 2288);
        ctxB.restore();}
        else{
        ctxB.drawImage(img2, 792, 3058, 4466, 2288);}
        if(flipBrdFlag==2||flipBrdFlag==4){
        ctxB.save();
        ctxB.rotate(Math.PI);
        ctxB.translate(-swidth, -sheight);
        ctxB.drawImage(img1, 742, 2997, 4466, 2288);
        ctxB.restore();}
        else{
        ctxB.drawImage(img1, 803, 726, 4466, 2288);}
        //ctxB.drawImage(img2, 792, 3036, 4466, 2277);
        };
      imgB.src = "boards/kreigBoard1c_size8n.jpg";
      img1.src = "clipBoards/black original.png";
      img2.src = "clipBoards/red original.png";
      imgB.style.zIndex = 1;
      img1.style.zIndex = 5;
		  //img1.style.transform='rotate(180deg)';
      img2.style.zIndex = 6;
*/

		  //img2.style.clipPath='circle(40%)';
/*
      //black board
      const img1 = new Image();
      img1.src = "boards/Kr Black n08crop.png";
      ctxB.drawImage(img1, 803, 726, 4466, 2288);
		  //img1.style.transform='rotate('+180+'deg)';

      //red board
      const img2 = new Image();
      img2.src = "boards/Kr Red n12crop.png";
      ctxB.drawImage(img2, 792, 3036, 4466, 2277);
*/
  for(var i=0; i<noOfPieces; i++){
    //d1.insertAdjacentHTML('afterend', '<img class=piece src="" title="" onmouseover="doThis(this)" onmouseout="doThis2(this)" onclick="change(this)">');
    d1.insertAdjacentHTML('afterend', '<canvas class="piece" id="" width="200" height="200" title="" onmouseover="doThis(this)" onmouseout="doThis2(this)" onclick="change(this)" draggable="true" ondragstart="drag(event)">');
  }

  if(printArmiesFlag){
    var extraBlanks = 0;
    var xb0 = (noOfPieces)%10;//eg if noOfPieces=18 xb0=8
    var xb1 = 10-xb0;//eg 20-18 = 2
    xb1 = xb1+10;//eg 12 so 12 blanks
    for(var i=0; i<xb1; i++){
      //d1.insertAdjacentHTML('afterend', '<img class=piece src="" title="" onmouseover="doThis(this)" onmouseout="doThis2(this)" onclick="change(this)">');
      d1.insertAdjacentHTML('afterend', '<canvas class="piece" id="" width="200" height="200" title="" onmouseover="doThis(this)" onmouseout="doThis2(this)" onclick="change(this)" draggable="true" ondragstart="drag(event)">');
    }
    var originalLength = unitsA.length;
   //add a whole new row to the army list
   //example:
   //"#b22222/#ffffff/#1e90ff/#ffffff","Fallschirmjager","6","5",                      "n","para","4","4","xx",
   //base colour,                       "blank",         "0", number of blanks needed, "b", "blank", "0"
    unitsA[originalLength]=unitsA[0];//unitsA[0] is the colour of the 1st unit in the army list
    unitsA[originalLength+1]="blank";
    unitsA[originalLength+2]="0";
    unitsA[originalLength+3]=xb1;
    unitsA[originalLength+4]="b";
    unitsA[originalLength+5]="blank";
    unitsA[originalLength+6]="0";
  }
  //alert("noOfPieces="+noOfPieces+" xb0="+xb0+" xb1="+xb1)
  //alert(""+unitsA);

  imageArray = document.getElementsByClassName("piece");

  noOfImages = imageArray.length;
  //alert("images="+noOfImages);
  var noOfImg=0; //index to hold the number of every piece

  //for(j=0;j<noOfImages;j++){
  for(i=0;i<unitTotal+2;i++){
	totalNo=unitsA[i*noOfItems+3];//for prestags '+3' is no of units, '+2' is VP
	for(j=0;j<totalNo;j++){
    countOutUnits0++;
    piecesArray[noOfImg]=imageArray[noOfImg];
    imageArray[noOfImg].setAttribute("id", "piece#"+noOfImg);//1st piece is id:#0
    cmbtFactorsA[noOfImg]=unitsA[i*noOfItems+6];
    cmbtFactorsMaxA[noOfImg]=unitsA[i*noOfItems+6];
    var colorLoop = new Array();
      var colorCode = unitsA[i*noOfItems+0];
      colorLoop[0] = colorCode.slice(0,7);
      colorLoop[1] = colorCode.slice(8,15);
      colorLoop[2] = colorCode.slice(16,23);
      colorLoop[3] = colorCode.slice(24);
    colorIndividual[noOfImg] = colorLoop;
    if(colorTester!=colorLoop[0]){
      colorTester=colorLoop[0];
      countOutUnits0 = 1;
    }
    if(unitsA[i*noOfItems+5]!="supply"||unitsA[i*noOfItems+4]!="x"){
      hasSteps[noOfImg]=true;
    }
    else{hasSteps[noOfImg]=false;}

    if(i<unitTotal){
    printUnit(noOfImg, j+1, totalNo, i, countOutUnits0);}
    else{
    printUnitBlank(noOfImg, j+1, totalNo, i, countOutUnits0);
    }
	  imageArray[noOfImg].setAttribute("title", "#"+(noOfImg+1)+": "+unitsA[i*noOfItems+1]+" "+designateLA[noOfImg]+"/"+designateRA[noOfImg]+" "+unitsA[i*noOfItems+6]+"-"+unitsA[i*noOfItems+7]+" (pts:"+unitsA[i*noOfItems+2]+") ("+(j+1)+"/"+totalNo+")");
	  //if units have individual names then need "#"+(noOfImg+1)+": "+unitsA[i*noOfItems+1]+" "+(j+1)+"/"+totalNo +unitNamesA[noOfImg]
    armourA[noOfImg]=unitsA[i*noOfItems+4];
    if(armourA[noOfImg]=="x"){neutN[noOfImg]=0;}
    if(armourA[noOfImg]=="a"){firerA[noOfImg]=1;
              navyMisA[noOfImg]=0;}
              else{firerA[noOfImg]=0;}
    if(armourA[noOfImg]=="c"){isCavA[noOfImg]=1;}
              else{isCavA[noOfImg]=0;}
    if(armourA[noOfImg]=="l"){leaderA[noOfImg]=1;}
              else{leaderA[noOfImg]=0;}
	activeImage=imageArray[noOfImg];
	activeIndex=noOfImg;
	doEdgeColor();
	thisIsA[noOfImg]=i;
	typeNumbA[noOfImg]=j+1;
  typeTotalA[noOfImg]=totalNo;
  countIndividual[noOfImg]=countOutUnits0;
  //printUnit(activeIndex, typeNumbA[activeIndex], typeTotalA[activeIndex], thisIsA[activeIndex]);
	noOfImg++;
	if(noOfImg>noOfImages-1){noOfImg=noOfImages-1;}
       }
  }

  for(k=0;k<noOfImages;k++){
  imageArray[k].style.left=(k-Math.floor(k/10)*10)*pieceSize*1.2+50+"px";//(k-(Math.floor(k/10)*10))+100+"px";//k*60+"px";
  imageArray[k].style.top=Math.floor(k/10)*pieceSize*1.2+25+"px";//k*60+"px";
  piecesLeft[k] = Math.round((k-Math.floor(k/10)*10)*pieceSize*1.2+50);
  piecesTop[k] = Math.round(Math.floor(k/10)*pieceSize*1.2+25);
  imageArray[k].style.width=pieceSize+"px";
  imageArray[k].style.height=pieceSize+"px";
  imageArray[k].style.borderWidth=boardSize*2+"px";
  imageArray[k].style.zIndex = nextZ-1;
  }

  for(i=0;i<noOfImages;i++){
    effectiveA[i]=0;
    disruptedA[i]=0;
    hideA[i]=0;
    deadA[i]=0;
    movedA[i] = 0;
    firedA[i] = 0;
    transA[i]= 0;
    panicA[i]= 0;
    dismountA[i] = 0;
    //firerA[i]= 0;
    dismountA[i] = 0;
    exitA[i]= 0;


  }
  if(DcolorFlag){
    D1color = Acolor;
    D2color = Bcolor;
  }

	addAllHandlers();
	//nameOfTurn();
	nextTurn();
	lastTurn();
  changeSize();
  //makeBigger();
  //makeBigger();
	//placePicsCity();
  //placeNow++;
	//boxSmall_window();
}


function placePics2() //print new armies
{

      var d1 = document.getElementById('board');

      keyBoard = document.getElementById('keyPressTable');

  for(var i=0; i<noOfPieces; i++){
    //d1.insertAdjacentHTML('afterend', '<img class=piece src="" title="" onmouseover="doThis(this)" onmouseout="doThis2(this)" onclick="change(this)">');
    d1.insertAdjacentHTML('afterend', '<canvas class="piece" id="" width="200" height="200" title="" onmouseover="doThis(this)" onmouseout="doThis2(this)" onclick="change(this)" draggable="true" ondragstart="drag(event)">');
  }

    if(printArmiesFlag){
      var extraBlanks = 0;
      var xb0 = (noOfPieces)%10;//eg if noOfPieces=18 xb0=8
      var xb1 = 10-xb0;//eg 20-18 = 2
      xb1 = xb1+10;//eg 12 so 12 blanks
      for(var i=0; i<xb1; i++){
        //d1.insertAdjacentHTML('afterend', '<img class=piece src="" title="" onmouseover="doThis(this)" onmouseout="doThis2(this)" onclick="change(this)">');
        d1.insertAdjacentHTML('afterend', '<canvas class="piece" id="" width="200" height="200" title="" onmouseover="doThis(this)" onmouseout="doThis2(this)" onclick="change(this)" draggable="true" ondragstart="drag(event)">');
      }
      var originalLength = unitsA.length;
      unitsA[originalLength]=unitsA[0];
      unitsA[originalLength+1]="blank";
      unitsA[originalLength+2]="0";
      unitsA[originalLength+3]=xb1;
      unitsA[originalLength+4]="b";
      unitsA[originalLength+4]="blank";
      unitsA[originalLength+6]="0";
    }

  imageArray = [];
  imageArray = document.getElementsByClassName("piece");

  noOfImages = imageArray.length;

  for(var k=0;k<noOfImages;k++){
  //window.addEventListener("click", whereClicked, false);
  imageArray[k].addEventListener("click", whereClicked, false);
  }

  //alert("images="+noOfImages);
  var noOfImg=0; //index to hold the number of every piece

  //for(j=0;j<noOfImages;j++){
  for(i=0;i<unitTotal+2;i++){
	totalNo=unitsA[i*noOfItems+3];//for prestags '+3' is no of units, '+2' is VP
	for(j=0;j<totalNo;j++){
    countOutUnits0++;
    piecesArray[noOfImg]=imageArray[noOfImg];
    imageArray[noOfImg].setAttribute("id", "piece#"+noOfImg);//1st piece is id:#0
    cmbtFactorsA[noOfImg]=unitsA[i*noOfItems+6];
    cmbtFactorsMaxA[noOfImg]=unitsA[i*noOfItems+6];
    var colorLoop = new Array();
      var colorCode = unitsA[i*noOfItems+0];
      colorLoop[0] = colorCode.slice(0,7);
      colorLoop[1] = colorCode.slice(8,15);
      colorLoop[2] = colorCode.slice(16,23);
      colorLoop[3] = colorCode.slice(24);
    colorIndividual[noOfImg] = colorLoop;
    if(colorTester!=colorLoop[0]){
      colorTester=colorLoop[0];
      countOutUnits0 = 1;
    }
    if(unitsA[i*noOfItems+5]!="supply"||unitsA[i*noOfItems+4]!="x"){
      hasSteps[noOfImg]=true;
    }
    else{hasSteps[noOfImg]=false;}


        if(i<unitTotal){
        printUnit(noOfImg, j+1, totalNo, i, countOutUnits0);}
        else{
        printUnitBlank(noOfImg, j+1, totalNo, i, countOutUnits0);
        }

	  imageArray[noOfImg].setAttribute("title", "#"+(noOfImg+1)+": "+unitsA[i*noOfItems+1]+" "+designateLA[noOfImg]+"/"+designateRA[noOfImg]+" "+unitsA[i*noOfItems+6]+"-"+unitsA[i*noOfItems+7]+" pts:"+unitsA[i*noOfItems+2]+" ("+(j+1)+"/"+totalNo+")");
	  //if units have individual names then need "#"+(noOfImg+1)+": "+unitsA[i*noOfItems+1]+" "+(j+1)+"/"+totalNo +unitNamesA[noOfImg]
    armourA[noOfImg]=unitsA[i*noOfItems+4];
    if(armourA[noOfImg]=="x"){neutN[noOfImg]=0;}
    if(armourA[noOfImg]=="a"){firerA[noOfImg]=1;
              navyMisA[noOfImg]=0;}
              else{firerA[noOfImg]=0;}
    if(armourA[noOfImg]=="c"){isCavA[noOfImg]=1;}
              else{isCavA[noOfImg]=0;}
    if(armourA[noOfImg]=="l"){leaderA[noOfImg]=1;}
              else{leaderA[noOfImg]=0;}
	activeImage=imageArray[noOfImg];
	activeIndex=noOfImg;
	doEdgeColor();
	thisIsA[noOfImg]=i;
	typeNumbA[noOfImg]=j+1;
  typeTotalA[noOfImg]=totalNo;
  countIndividual[noOfImg]=countOutUnits0;
  //printUnit(activeIndex, typeNumbA[activeIndex], typeTotalA[activeIndex], thisIsA[activeIndex]);
	noOfImg++;
	if(noOfImg>noOfImages-1){noOfImg=noOfImages-1;}
       }
  }

  for(k=0;k<noOfImages;k++){
    imageArray[k].style.left=(k-Math.floor(k/10)*10)*pieceSize*1.2+50+"px";//(k-(Math.floor(k/10)*10))+100+"px";//k*60+"px";
    imageArray[k].style.top=Math.floor(k/10)*pieceSize*1.2+25+"px";//k*60+"px";
    piecesLeft[k] = Math.round((k-Math.floor(k/10)*10)*pieceSize*1.2+50);
    piecesTop[k] = Math.round(Math.floor(k/10)*pieceSize*1.2+25);
  imageArray[k].style.width=pieceSize+"px";
  imageArray[k].style.height=pieceSize+"px";
  imageArray[k].style.borderWidth=boardSize*2+"px";
  imageArray[k].style.zIndex = nextZ-1;
  }

  for(i=0;i<noOfImages;i++){
    effectiveA[i]=0;
    disruptedA[i]=0;
    hideA[i]=0;
    deadA[i]=0;
    movedA[i] = 0;
    firedA[i] = 0;
    transA[i]= 0;
    panicA[i]= 0;
    dismountA[i] = 0;
    //firerA[i]= 0;
    dismountA[i] = 0;
    exitA[i]= 0;

    changeSize();
    //makeBigger();

  }
  //if(initFlag&&changeRedFlag){colorRed();}
  //if(initFlag&&changeBlackFlag){colorBlack();}

}

function change(n) //make a piece active or deactivate an active piece
{

  var targetImg = n;

  if(targetImg.getAttribute("class")=="piece"||targetImg.getAttribute("class")=="touched")
  {
  //activeIndex = targetImg;

  var indexID = targetImg.getAttribute("id");
  activeIndex = +indexID.slice(6);//+ in front should convert string to number
  activeImage = document.getElementById("piece#"+activeIndex);

  if(findPasFlag==1){
	targetImg.style.borderColor="orange";
	checkPas(activeIndex);
	}
else{
  if(activeIndex==oldIndex&mouseActive){//touching same piece - DEACTIVATE
    //add hopper to piece as it is deactivated...
    hopperL = document.defaultView.getComputedStyle(activeImage, null).getPropertyValue("left");//these values already have "px" attached
    hopperT = document.defaultView.getComputedStyle(activeImage, null).getPropertyValue("top");
    hopperL = +hopperL.slice(0,-2);//remove "px", and turn into number
    hopperT = +hopperT.slice(0,-2);
  /*following doesnt work in getting left position...
      var hopperL = +activeImage.style.left; [***IT DOES WORK! SEE...
    var testJS = activeImage.style.left;
    alert(""+testJS+" "+hopperL);]
  have to use...
  document.defaultView.getComputedStyle(targetImg, null).getPropertyValue("left");
  */
    //alert(""+hopperL+" "+hopperT);
    keyBoard.style.left= hopperL + pieceSize*boardSize*hopOffset + "px";//xpos - relX/2 + "px";
    keyBoard.style.top= hopperT + pieceSize*boardSize*hopOffset + "px";//ypos - relY/2 + "px";
    //keyBoard.style.left= hopperL + 25*scale + "px";//xpos - relX/2 + "px";
    //keyBoard.style.top= hopperT + 25*scale + "px";//ypos - relY/2 + "px";
    hopperLeft= hopperL + pieceSize*boardSize*hopOffset;//xpos - relX/2 + "px";
    hopperTop= hopperT + pieceSize*boardSize*hopOffset;//ypos - relY/2 + "px";
    //hopperLeft= (hopperL + 25*scale)/boardSize;//xpos - relX/2 + "px";
    //hopperTop= (hopperT + 25*scale)/boardSize;//ypos - relY/2 + "px";
    keyBoard.style.zIndex = nextZ++;
    document.getElementById('hopText').innerText=""+activeImage.getAttribute("title");
    //deactivate piece...
    activeImage.setAttribute("class", "piece");
    activeImage.style.borderColor="black";
    activeImage.style.zIndex = nextZ++;
    oldImage = activeImage;
    mouseActive=0;//deactivate
  hopHop(hopperL, hopperT);
    doEdgeColor();
  }
  else{//not touching same piece
    if(mouseActive==1){//touching new piece while mouseactive so STACK ON TOP
    if(oldIndex>-1&oldIndex!=activeIndex){//oldImage.setAttribute("class", "piece");
      //activeImage.style.borderColor="black";
      var dummyImage = activeImage;//dummy is the unit clicked on 2nd
      var dummyIndex = activeIndex;//
      var dummyL = document.defaultView.getComputedStyle(activeImage, null).getPropertyValue("left");//these values already have "px" attached
      var dummyT = document.defaultView.getComputedStyle(activeImage, null).getPropertyValue("top");
      dummyL = +dummyL.slice(0,-2);//remove "px", and turn into number
      dummyT = +dummyT.slice(0,-2);
      if(mouseOverFlag){
          dummyL = dummyL + pieceSize*boardSize/2 ;
          dummyT = dummyT + pieceSize*boardSize/2 ;
          }
      activeImage = oldImage;//make 1st clicked unit the active image
      activeIndex = oldIndex;

    activeImage.style.left= dummyL - pieceSize*boardSize/4 + "px";//xpos - relX/2 + "px";
    activeImage.style.top= dummyT - pieceSize*boardSize/4 + "px";//ypos - relY/2 + "px";
    piecesLeft[activeIndex]= Math.round((dummyL - pieceSize*boardSize/4)/boardSize);//Math.round((xpos - relX)/boardSize);
    piecesTop[activeIndex]= Math.round((dummyT - pieceSize*boardSize/4)/boardSize);//Math.round((ypos - relY)/boardSize);
    //keyBoard.style.left= xpos - relX + pieceSize*boardSize*2 + "px";//xpos - relX/2 + "px";
    //keyBoard.style.top= ypos - relY + pieceSize*boardSize*2 + "px";//ypos - relY/2 + "px";
      //doEdgeColor();
      //activeImage = dummyImage;
      //activeIndex = dummyIndex;}
    //activeImage.setAttribute("class", "touched");
  	activeImage.style.borderColor="black";
    activeImage.style.zIndex = nextZ++;
    oldIndex = activeIndex;
    oldImage = activeImage;
	  //alert("top:"+piecesTop[activeIndex]+"bottom:"+piecesTop[dummyIndex]);
    mouseActive=0;
    if(movedA[activeIndex]==0){changeMark(activeImage, activeIndex, 1);}
  hopHop(dummyL, dummyT);
    doEdgeColor();
  }
  doEdgeColor();
  saveWindow2();
  }

    else{//if mouseActive==0 - ACTIVATE NEW PIECE
    //else{//touching new piece
    if(oldIndex>-1&oldIndex!=activeIndex){//oldImage.setAttribute("class", "piece");
      //activeImage.style.borderColor="black";
      var dummyImage = activeImage;//doEdgeColor only works on activeImage/activeIndex
      var dummyIndex = activeIndex;//so use this work around
      //not sure what next 2 lines are for...
      //activeImage = oldImage;
      //activeIndex = oldIndex;
      doEdgeColor();
      activeImage = dummyImage;
      activeIndex = dummyIndex;}
    //activeImage.setAttribute("class", "touched");
  	activeImage.style.borderColor="yellow";
    activeImage.style.zIndex = nextZ++;
    //alert("here");
    oldIndex = activeIndex;
    oldImage = activeImage;
    mouseActive=1;
  }
  }
}
}
}

function doThis(n) //magnify the piece mouse hovers over
{
if(mouseOverFlag){
  var targetImg = n;
  var targetLeft = document.defaultView.getComputedStyle(targetImg, null).getPropertyValue("left");
  var targetTop = document.defaultView.getComputedStyle(targetImg, null).getPropertyValue("top");
  targetLeft = +targetLeft.slice(0,-2);
  targetTop = +targetTop.slice(0,-2);
  targetImg.style.left= (targetLeft - (pieceSize*boardSize)) + "px";
  targetImg.style.top= (targetTop - (pieceSize*boardSize)) + "px";
  targetImg.style.width=(2*pieceSize*boardSize)+"px";
  targetImg.style.height=(2*pieceSize*boardSize)+"px";
  targetImg.style.left= (targetLeft - (pieceSize*boardSize)/2) + "px";
  targetImg.style.top= (targetTop - (pieceSize*boardSize)/2) + "px";}
}

function doThis2(n) //put piece back to normal size as mouse moves away
{
if(mouseOverFlag){
  var targetImg = n;
  var targetLeft = document.defaultView.getComputedStyle(targetImg, null).getPropertyValue("left");
  var targetTop = document.defaultView.getComputedStyle(targetImg, null).getPropertyValue("top");
  targetLeft = +targetLeft.slice(0,-2);
  targetTop = +targetTop.slice(0,-2);
  targetImg.style.left= (targetLeft + (pieceSize*boardSize)/2) + "px";
  targetImg.style.top= (targetTop + (pieceSize*boardSize)/2) + "px";
  targetImg.style.width=(pieceSize*boardSize)+"px";
  targetImg.style.height=(pieceSize*boardSize)+"px";}
}


function changeSize() //change the size of board and pieces following key press
{

  var board = document.getElementById("board");
  //board.setAttribute("src", boardAddress);

  var scale2 = boardSize;
	var swidth2=swidth*scale2/8;
	var	sheight2=sheight*scale2/8;
		//document.all.board.style.width=swidth;
		board.style.width = swidth2 + "px";
		//board.setAttribute("width", swidth);
		//document.all.board.style.height=sheight;
		board.style.height = sheight2 + "px";
		//board.setAttribute("height", sheight);
  //board.setAttribute("src", boardAddress+boardSize+".jpg");
  //board.style.left = -10 +"px";
  //board.style.top = -10 +"px";

  for(k=0;k<noOfImages;k++){
  imageArray[k].style.width=(pieceSize*boardSize/pieceShrink)+"px";
  imageArray[k].style.height=(pieceSize*boardSize/pieceShrink)+"px";
  imageArray[k].style.borderWidth=boardSize+"px";//*2+"px";
  //if(k==20){
  //  alert(""+piecesLeft[k]+" "+boardSize*piecesLeft[k]);   }
  imageArray[k].style.left=(boardSize*piecesLeft[k])+"px";
  imageArray[k].style.top=(boardSize*piecesTop[k])+"px";
  if(deadA[k]==1){
        imageArray[k].style.width=(pieceSize*boardSize/pieceShrink/2)+"px";
        imageArray[k].style.height=(pieceSize*boardSize/pieceShrink/2)+"px";
        imageArray[k].style.left=(boardSize*piecesLeft[k]+pieceSize*boardSize/pieceShrink/4)+"px";
        imageArray[k].style.top=(boardSize*piecesTop[k]+pieceSize*boardSize/pieceShrink/4)+"px";
			}
  //piecesLeft[k]=(boardSize*piecesLeft[k]);
  //piecesTop[k]=(boardSize*piecesLeft[k]);
  }

  keyBoard.style.left= (boardSize*hopperLeft)+"px";
  keyBoard.style.top= (boardSize*hopperTop)+"px";
  keyBoard.style.width= (boardSize*200/8)+"px";
  keyBoard.style.height= (boardSize*200/8)+"px";
}

function makeBigger()
{
  boardSize = boardSize*2;
  //changeOfSize=2;
  if(boardSize>8){
  boardSize=8;
  //changeOfSize=1;
  }
  changeSize();
}

function makeSmaller()
{
  boardSize = boardSize/2;
  //changeOfSize=0.5;
  if(boardSize<1){
  boardSize=1;
  //changeOfSize=1;
  }
  changeSize();
}

function keyInput(event) //catch keyboard input
{

    var keyCode = event.keyCode;
    var keyPress = String.fromCharCode(keyCode);
    var keyText=keyPress;
    //alert(""+keyText);

//stuff that applies to whole board

if(keyText=="b"||keyText=="B"){ //show board
    showBoard();}

if(keyPress=="1"){
    makeSmaller();//**COMMENT OUT for tablet version
    }
if(keyPress=="2"){
    makeBigger();//**COMMENT OUT for tablet version
    }
if(keyPress=="3"){
    pieceShrink=2;
    changeSize();//**COMMENT OUT for tablet version
    }
if(keyPress=="4"){
    pieceShrink=1;
    changeSize();//**COMMENT OUT for tablet version
    }

if(keyText=="z"||keyText=="Z"){ //zombies! bury dead or raise dead
    zombies();}

if(keyText=="L"||keyText=="l"){ //switch on/off piece expand on mouseOver
    if(mouseOverFlag){mouseOverFlag=false;}
    else{mouseOverFlag=true;}
    }

if(keyText=="H"||keyText=="h"){ //switch on/off Hopper
    /*if(hopperFlag){hopperFlag=false;
    keyBoard.style.zIndex = -10;}
    else{hopperFlag=true;
    keyBoard.style.zIndex = nextZ++;}*/
    //hide/unhide
      oneOffHide=1;
       unhideInf = true;
    if(activeIndex<neutNumber){
      if(hideA[activeIndex]!=1){
        hideUnit(activeImage, activeIndex, 1);}
      else{
        unhideUnit(activeImage, activeIndex, 1);
        }
      mouseActive=0;

    }
    oneOffHide=0;
    doEdgeColor();
    }

if(keyText=="J"||keyText=="j"){ //jump Hopper to new position
  hopHop(hopperL, hopperT);
    }


    if(keyText=="t"||keyText=="T"){ //next turn
    	nextTurn();
    	//keyText="w";
    }

    if(keyText=="y"||keyText=="Y"){ //go back a turn
    	lastTurn();
    	//keyText="w";
    }

if(mouseActive==0){

  }
  else{//if(mouseActive==1) //stuff that applies to single units
  var leftNow=piecesLeft[activeIndex];//imageArray[activeIndex].style.pixelLeft;
	var topNow=piecesTop[activeIndex];//imageArray[activeIndex].style.pixelTop;
	if(keyText=="0"){
	  piecesTop[activeIndex]=piecesTop[activeIndex]-shuffleStep;
		activeImage.style.top=(boardSize*piecesTop[activeIndex])+"px";}
	if(keyText=="l"||keyText=="L"){
	  piecesTop[activeIndex]=piecesTop[activeIndex]+shuffleStep;
		activeImage.style.top=(boardSize*piecesTop[activeIndex])+"px";}
	if(keyText=="o"||keyText=="O"){
	  piecesLeft[activeIndex]=piecesLeft[activeIndex]-shuffleStep;
		activeImage.style.left=(boardSize*piecesLeft[activeIndex])+"px";}
	if(keyText=="p"||keyText=="P"){
	  piecesLeft[activeIndex]=piecesLeft[activeIndex]+shuffleStep;
		activeImage.style.left=(boardSize*piecesLeft[activeIndex])+"px";}
	if(keyText=="9"){
    activeImage.setAttribute("class", "piece");
    activeImage.style.zIndex = nextZ++;
    oldImage = activeImage;
    mouseActive=0;
		//doEdgeColor();
	}

if(keyText=="m"||keyText=="M"){ //marker to show you have moved unit
		/*if(movedA[activeIndex]!=1){
			//activeImage.style.borderStyle="dotted";
			changeMark(activeImage,1);
			movedA[activeIndex]=1;}
		else{
			changeMark(activeImage,0);
			//activeImage.style.borderStyle="solid";
			movedA[activeIndex]=0;}*/
    changeMark(activeImage, activeIndex, 1);
    activeImage.setAttribute("class", "piece");
    //activeImage.style.zIndex = nextZ++;
    oldImage = activeImage;
		mouseActive=0;
		//doEdgeColor();
	}
/*
if(keyText=="t"||keyText=="T"){ //unit transported
    changeTransport(activeImage, activeIndex, 1);//pick up, drop off passengers
} */


if(keyText=="i"||keyText=="I"){ //ineffective unit

    changeIneffective(activeImage, activeIndex, 1);
    activeImage.setAttribute("class", "piece");
    oldImage = activeImage;
		mouseActive=0;
	}

if(keyText=="s"||keyText=="S"){ //unit out of supply

    changeSupply(activeImage, activeIndex, 1);
    activeImage.setAttribute("class", "piece");
    oldImage = activeImage;
		mouseActive=0;
	}

if(keyText=="d"||keyText=="D"){ //disrupted unit

    changeDisrupt(activeImage, activeIndex, 1);
    activeImage.setAttribute("class", "piece");
    oldImage = activeImage;
		mouseActive=0;

	}

if(keyText=="r"||keyText=="R"){ //rout unit

    changeRout(activeImage, activeIndex, 1);
    activeImage.setAttribute("class", "piece");
    oldImage = activeImage;
		mouseActive=0;

	}
/*
if(keyText=="d"){ //unit dismounted
    dismount(activeImage, activeIndex, 1);
    activeImage.setAttribute("class", "piece");
    oldImage = activeImage;
		mouseActive=0;
	}
*/

if(keyText=="e"||keyText=="E"){ //unit exited
    unitExited(activeImage, activeIndex, 1);
    activeImage.setAttribute("class", "piece");
    oldImage = activeImage;
		mouseActive=0;
	}

if(keyText=="x"||keyText=="X"){ //unit destroyed
    //changeDead(activeImage, activeIndex, 1);
    changeElim(activeImage, activeIndex, 1);
}//end of 'x' keyPress function

if(keyText=="f"||keyText=="F"){ //unit fired
    changeFire(activeImage, activeIndex, 1);
}//end of 'f' keyPress function

if(keyText=="c"||keyText=="C"){
  if(leaderA[activeIndex]==1){
  changeNeutralPic(leaderValueA[activeIndex]);}
  else{
    changeUnit(activeImage, activeIndex, 1)
  }
	}

  if(keyText=="q"||keyText=="Q"){ //unit rotate left
    changeRotL(activeImage, activeIndex, 1);
  }

  if(keyText=="a"||keyText=="A"){ //centre the rotation
    changeRotNo(activeImage, activeIndex, 1);
  }

  if(keyText=="w"||keyText=="W"){ //unit rotate right
    changeRotR(activeImage, activeIndex, 1);
  }

	}
  saveWindow2();
}

function virtualKey(k){

    var keyPress = +k;
    var keyText=keyPress;

    if(keyText==1){ //marker to show you have moved unit
    changeMark(activeImage, activeIndex, 1);
		}

	if(keyText==3){
    //rollOddsTable();
    if(chooseD6){
    rollDieTable();}
    else{
    rollDieTable12();}
    //rollBinaryTable();
	}

	if(keyText==2){ //unit destroyed
    //changeElim(activeImage, activeIndex, 1);
    changeElim(activeImage, activeIndex, 1);
}

	if(keyText==4){ //unit disrupted
    changeDisrupt(activeImage, activeIndex, 1);
}

  if(keyText==5){ //shrink units only
    if(pieceShrink==1){pieceShrink=2;}
    else{pieceShrink=1;}
    changeSize();
}

	if(keyText==6){ //unit out of supply
    changeSupply(activeImage, activeIndex, 1);
}

  if(keyText==7){ //unit routed
    mouseOverFlip();
}

if(keyText==22){ //unit rotate left
  changeRotL(activeImage, activeIndex, 1);
}

if(keyText==33){ //centre the rotation
  changeRotNo(activeImage, activeIndex, 1);
}

if(keyText==44){ //unit rotate right
  changeRotR(activeImage, activeIndex, 1);
}

  if(keyText==8){ //unit fired
    //changeFire(activeImage, activeIndex, 1);
    if(stepFlag){
    upStep(activeIndex);}
    else{
    upPoints(activeIndex);}
}

  if(keyText==9){ //change leader
  if(stepFlag){
  dropStep(activeIndex);}
  else{
  dropPoints(activeIndex);}

    /*if(leaderA[activeIndex]==1){
    changeNeutralPic(leaderValueA[activeIndex]);}
    else{
      changeUnit(activeImage, activeIndex, 1)
    }*/
}

if(keyText==24){ //hide/unhide
  oneOffHide=1;
   unhideInf = true;
if(activeIndex<neutNumber){
  if(hideA[activeIndex]!=1){
    hideUnit(activeImage, activeIndex, 1);}
  else{
    unhideUnit(activeImage, activeIndex, 1);
    }
  mouseActive=0;

}
oneOffHide=0;
doEdgeColor();
}

if(keyText==25){ //unhide artillery
  oneOffHide=1;
   unhideInf = false;//unhide artillery
if(activeIndex<neutNumber){
  if(hideA[activeIndex]!=1){
    //hideUnit(activeImage, activeIndex, 1);
  }
  else{
    unhideUnit(activeImage, activeIndex, 1);
    }
  mouseActive=0;

}
oneOffHide=0;
doEdgeColor();
}


	if(keyText==99){
    nextTurn();
	}

		if(keyText==49){
    lastTurn();
	}

if(keyText==88){ //zombies! bury dead or raise dead
    hopHop(hopperL, hopperT);}

if(keyText==87){ //zombies! bury dead or raise dead
    zombies();}

if(keyText==86){ //show board
        showBoard();
            zombies();
                zombies();
                    zombies();}

	if(keyText==11){
	  piecesTop[activeIndex]=piecesTop[activeIndex]-shuffleStep;
		activeImage.style.top=(boardSize*piecesTop[activeIndex])+"px";}
	if(keyText==12){
	  piecesTop[activeIndex]=piecesTop[activeIndex]+shuffleStep;
		activeImage.style.top=(boardSize*piecesTop[activeIndex])+"px";}
	if(keyText==13){
	  piecesLeft[activeIndex]=piecesLeft[activeIndex]-shuffleStep;
		activeImage.style.left=(boardSize*piecesLeft[activeIndex])+"px";}
	if(keyText==14){
	  piecesLeft[activeIndex]=piecesLeft[activeIndex]+shuffleStep;
		activeImage.style.left=(boardSize*piecesLeft[activeIndex])+"px";}
	if(keyText==3){
    activeImage.setAttribute("class", "piece");
    activeImage.style.zIndex = nextZ++;
    oldImage = activeImage;
    mouseActive=0;
		doEdgeColor();
	}

  saveWindow2();
}

function saveWindow(){

  var swLeft=0;
  var swTop=0;
  //var swText=0;
  var swMark=0;
  var swDead=0;
  var swCav=0; //dismounted - USE FOR UNIT CHANGE
  var swDis=0; //disrupted and leader
  var swTrans=0; //use for rotation
  var swTrans1=0; //passenger id -spare 1 - use for exited
  var swTrans2=0; //z-index
  var imgIndex=0;
  var activeIndex=0;
  var allText="";
  var thisShift=0;
    for(k=0;k<noOfImages;k++){
    activeIndex=k;
    swLeft = piecesLeft[k];
    swTop = piecesTop[k];
    if(movedA[activeIndex]==1){
      swMark = 1;
      }
    else{
      swMark = 0;
      }
    if(disruptedA[k]>=1){
      swDis = disruptedA[k];
      }
    else if(armourA[k]=="l"){
      if(neutN[activeIndex]>0){
        swDis = neutN[activeIndex];
        //swDis--;
      }
      else{swDis=0;}
    }
    else{swDis=0;}
    if(deadA[activeIndex]>0){
      swDead = deadA[activeIndex];
      }
    else{
      swDead = 0;
      }
    if(dismountA[k]==1){
      swCav = cmbtFactorsA[activeIndex]
      //findName(imageArray[activeIndex], activeIndex);
      //alert(""+swCav+" "+activeIndex+" "+k);
      }
    else{
      swCav = cmbtFactorsA[activeIndex]
      //swCav = "x";
      }
    if(panicA[activeIndex]>0){//rout
      swTrans = panicA[activeIndex];
      }
    else{
      swTrans = 0;
      }
    if(exitA[activeIndex]!=0){//rotation
      swTrans1 = exitA[activeIndex];
      }
    else{
      swTrans1 = 0;
      }
    /*if(passengerA[activeIndex]>0){
      swTrans2 = passengerA[activeIndex];
      }
    else{
      swTrans2 = 0;
    }*/
    swTrans2 = document.getElementById("piece#"+activeIndex).style.zIndex;
    //alert(""+swTrans2);
    allText=allText+swTrans+","+swTrans1+","+swTrans2+","+swDead+","+swMark+","+swDis+","+swLeft+","+swTop+","+swCav+", ";
    }

  	allText=allText+redArmyNo+","+blackArmyNo+","+redBno+","+ flipBrdNoR +","+ blackBno +","+ flipBrdNoB+",";

  	allText=allText+unionVP+","+rebelVP+","+turnNumb+","+ size +","+ turnLetter +","+ turnNumber +","+situationAddress;
  		var win = open("", null, "toolbar=0,location=0,directories=0,status=0,menubar=1,scrollbars=1,resizable=1,width=400,height=200,left=200,top=200");
  //var allText2 = stripSpace(allText);
  //alert(""+allText2);
  //win.document.write(allText2);
  win.document.write(allText);
	allText="";
	win.document.close();}


function reload(){
	//var catchText="";
	var loadBox = document.getElementById("textbox1");
	var catchText=loadBox.value;
  var loadA=catchText.split(",");
  var loopTill = loadA.length;
  var shiftBackwards = 7;//due to board and army numbers added to list
  flipBrdNoB = 1*loadA[loopTill-1-shiftBackwards];
  blackBno = 1*loadA[loopTill-2-shiftBackwards];
  flipBrdNoR = 1*loadA[loopTill-3-shiftBackwards];
  redBno = 1*loadA[loopTill-4-shiftBackwards];
  blackArmyNo = 1*loadA[loopTill-5-shiftBackwards];
  redArmyNo = 1*loadA[loopTill-6-shiftBackwards];
  initBoard();
  var flipLetR = "up";
  var flipLetB = "up";
    if(flipBrdNoR==1){flipLetR = "dn";}
    if(flipBrdNoB==1){flipLetB = "dn";}
    document.getElementById('boardNameR').innerText="Red Board #"+redBno+flipLetR+"\n"+brdNameR;
    document.getElementById('boardNameB').innerText="Black Board #"+blackBno+flipLetB+"\n"+brdNameB;
  for(var rm=0; rm<noOfPieces; rm++){
      const element = document.getElementById("piece#"+rm);
        element.remove();
    }
  changeRedFlag=true;changeBlackFlag=false;
  findArmies();
  changeRedFlag=false;changeBlackFlag=true;
  findArmies();
  sortArmies();
  placePics2();
  var loadSize=1*loadA[loopTill-4];
  reScale=size/loadSize;
  var flipIndex=0;
  var dismountDummyA = new Array();
  var noPieces=noOfImages;
    for(n=0; n<noPieces; n++){
    activeIndex=n;
    m=n*9;
    panicA[activeIndex]=loadA[m];
    exitA[activeIndex]=1*loadA[m+1];//rotation numb
    imageArray[activeIndex].style.zIndex = 1*loadA[m+2];//z-index
    if(1*loadA[m+2]>nextZ){nextZ=1*loadA[m+2];}
    passengerA[activeIndex]=1*loadA[m+2];//spare 2
    deadA[activeIndex]=1*loadA[m+3];
    movedA[activeIndex]=1*loadA[m+4];
    disruptedA[activeIndex]=1*loadA[m+5];
    //dismountDummyA[activeIndex]=loadA[m+8];
    cmbtFactorsA[activeIndex]=loadA[m+8];
    if(cmbtFactorsA[activeIndex]=="x"||dismountDummyA[activeIndex]==" x"||dismountDummyA[activeIndex]==" x "){
      //dont change anything
    }
    else if(cmbtFactorsA[activeIndex]<cmbtFactorsMaxA[activeIndex]){
      //routine to re-print unit if it has new value
      printUnit(activeIndex, typeNumbA[activeIndex], typeTotalA[activeIndex], thisIsA[activeIndex]);
    }
    //alert("|"+dismountDummyA[activeIndex]+"|")
      if(dismountDummyA[activeIndex]!="x"&&dismountDummyA[activeIndex]!=" x"&&dismountDummyA[activeIndex]!=" x "&&dismountDummyA[activeIndex]!=0){
        dismountA[activeIndex]=0;//1;
        //alert("not x"+activeIndex);
        //alert("x "+dismountDummyA[activeIndex]+" "+activeIndex+" "+dismountA[activeIndex]);
      }
      else{
        dismountA[activeIndex]=0;
      }
    piecesLeft[activeIndex]=1*loadA[m+6]*reScale*1;//.42;
    piecesTop[activeIndex]=1*loadA[m+7]*reScale*1;//.4;

  //mark if should be marked...
    changeMark(imageArray[activeIndex], activeIndex, 0);

  //dismounted?...CHANGE UNIT
    if(dismountA[activeIndex]==1){
      /*
      titles = imageArray[activeIndex].getAttribute("title");
      imageArray[activeIndex].setAttribute("title", "dismounted: " + titles);
      */
      changeUnitReload(imageArray[activeIndex], activeIndex, dismountDummyA[activeIndex]);
      doEdgeColor();
      }
    else{}

    //routed units
    if(panicA[activeIndex]==1){
    changeRout(imageArray[activeIndex], activeIndex, 0);}

    //out of supply
    if(panicA[activeIndex]==2){
      changeSupply(imageArray[activeIndex], activeIndex, 0);}

       if(armourA[activeIndex]!="l"){// in prestags leaders cannot be D so use this to store leader level
        if(disruptedA[activeIndex]==1||disruptedA[activeIndex]==2){
        titles = imageArray[activeIndex].getAttribute("title");
        imageArray[activeIndex].setAttribute("title", "DISORGANISED: " + titles);//DISRUPTED:
        doEdgeColor();
      }
      //fires
      if(disruptedA[activeIndex]==3){
        changeFire(imageArray[activeIndex], activeIndex, 0);}
    }
    else{//if a leader
      if(disruptedA[activeIndex]>0){
      activeImage =	imageArray[activeIndex];
      neutN[activeIndex]=disruptedA[activeIndex]-1;//-1;
      //alert("neutN[activeIndex] "+neutN[activeIndex]);
      if(neutN[activeIndex]==0){neutN[activeIndex]=4;}
      disruptedA[activeIndex]=0;
      pieceName=""+neutN[activeIndex];//+"L";
      //alert("pieceName "+pieceName);
      leaderValueA[activeIndex]=neutN[activeIndex];
      changeNeutralPic(pieceName);
      }
    }

        changeRot(imageArray[activeIndex], activeIndex, 0);//reload rotation

        //dead units
        if(deadA[activeIndex]>=1){
          changeElim(imageArray[activeIndex], activeIndex, 0);}

  }


  rebelVP=1*loadA[loopTill-6];
  unionVP=1*loadA[loopTill-7];
  turnNumb=1*loadA[loopTill-5];
  turnLetter=""+loadA[loopTill-3];
  turnNumber=1*loadA[loopTill-2];
  turnNumber=turnNumber*1;
  var codeNumber = "0";
  if(turnNumber<0){turnNumber=0;}
  if(turnNumber<10){
	   codeNumber=codeNumber+turnNumber;}
     else{
	      codeNumber=turnNumber;}
  turnCode=turnLetter+codeNumber;
  nameOfTurn();
  loadA.length=0;
    if(hiddenMovement){
    if(turnNumb==1||turnNumb==4){
      hideRus=0;//=1;
      hideGer=0;}
    if(turnNumb==2||turnNumb==3){
      hideRus=0;
      hideGer=0;}//=1;}
    hideToggle();
    }
	loadBox.value = "Data re-loaded successfully!"
	//loadBox.setAttribute("value", "Data re-loaded successfully!");

	changeSize();
	//statusNow;
	}


function nextTurn(){

if(turnLetter=="A"){
	turnLetter="B";}
else{
	turnLetter="A";
	turnNumber++;}
var codeNumber = "0";
if(turnNumber<10){
	codeNumber=codeNumber+turnNumber;}
else{
	codeNumber=turnNumber;}
turnCode=turnLetter+codeNumber;
//document.all.turnBox.innerText = turnCode;
nameOfTurn();

}

function lastTurn(){

if(turnLetter=="B"){
	turnLetter="A";}
else{
	turnLetter="B";
	turnNumber--;
	}
var codeNumber = "0";
if(turnNumber<0){turnNumber=0;}
if(turnNumber<10){
	codeNumber=codeNumber+turnNumber;}
else{
	codeNumber=turnNumber;}

turnCode=turnLetter+codeNumber;
//document.all.turnBox.innerText = turnCode;
nameOfTurn();
}


function nameOfTurn(){
	if(turnLetter=="A"){
	currentPlayer=nameA;}
else{
	currentPlayer=nameB;}
var step3 = turnNumber*1;
//step3=turnNumber+startSeasonOffset;
if(turnNumber == 19){
yearNow=startYear+1;}
//var step2=step3-step1*4;
seasonNow=seasonA[step3];
var dummyTurnNo = 1*turnNumber+1;
document.getElementById("turnBox").innerText = currentPlayer+"\n"+seasonNow+"\n"+yearNow+" (#"+dummyTurnNo+")";//+"-"+Number(yearNow+1);
document.getElementById("timebox").innerText = currentPlayer+"\n"+seasonNow+"\n"+yearNow+" (#"+dummyTurnNo+")";//+"-"+Number(yearNow+1);
if(turnTock==2){alert("new turn: "+turnCode+" "+currentPlayer+" (of "+maxTurns+")");
turnTock=0;
saveWindow2();}
//statusNow();
}

function boardFlip()
{
  boardMult=boardMult+0.5;
  if(boardMult>4){boardMult=0.5;}
  document.getElementById("btnBS").innerHTML = "Size x"+boardMult;
}


function newBoard(bad)//board address
{
    if(brdAddr==0){//red board
    }
    else if(brdAddr==1){//black board
    }
    flipBrdFlag++;
    if(flipBrdFlag>4){flipBrdFlag=1;}

          var d1 = document.getElementById('board');
          d1.setAttribute("src", boardAddress);

          var canvasB = document.getElementById("board");
          var ctxB = canvasB.getContext("2d");
          var scale2 = boardSize;
          swidth2=swidth*scale2/8;
          sheight2=sheight*scale2/8;
            ctxB.canvas.width = swidth2;
            ctxB.canvas.height = sheight2;

          const imgB = new Image();
          const img1 = new Image();
          const img2 = new Image();

                imgB.src = "boards/kreigBoard1c_size8n.jpg";
                img1.src = "boards/Kr Black n08crop.png";
                img2.src = "boards/Kr Red n12crop.png";
                imgB.style.zIndex = 1;
                img1.style.zIndex = 5;
                img2.style.zIndex = 6;

            ctxB.drawImage(imgB, 0, 0, swidth2, sheight2);
            //1=both up; 2=both down; 3=red down; 4=black down
            if(flipBrdFlag==2||flipBrdFlag==3){
            ctxB.save();
            ctxB.rotate(Math.PI);
            ctxB.translate(-swidth2, -sheight2);
            ctxB.drawImage(img2, 730*scale2/8, 687*scale2/8, 4466*scale2/8, 2288*scale2/8);
            ctxB.restore();}
            else{
            ctxB.drawImage(img2, 792*scale2/8, 3058*scale2/8, 4466*scale2/8, 2288*scale2/8);}
            if(flipBrdFlag==2||flipBrdFlag==4){
            ctxB.save();
            ctxB.rotate(Math.PI);
            ctxB.translate(-swidth2, -sheight2);
            ctxB.drawImage(img1, 742*scale2/8, 2997*scale2/8, 4466*scale2/8, 2288*scale2/8);
            ctxB.restore();}
            else{
            ctxB.drawImage(img1, 803*scale2/8, 726*scale2/8, 4466*scale2/8, 2288*scale2/8);}
            //ctxB.drawImage(img2, 792, 3036, 4466, 2277);
            document.getElementById('boardNameR').innerText="Red Board #"+flipBrdFlag;

    var b2 = document.getElementById("board");
  	b2.setAttribute("src", boardA[brdAddr]);
    var scale2 = boardSize;
    swidth2=swidth*scale2/8;
    sheight2=sheight*scale2/8;
    b2.style.width = swidth2 + "px";
    b2.style.height = sheight2 + "px";
}

function normBoard(sz)
{
  var scaleBoard = sz;
  var b1 = document.getElementById("board");
	b1.setAttribute("src", board1);
  var realWidth = b1.naturalWidth;
  var realHeight = b1.naturalHeight;
  swidth=4*realWidth;
  sheight=4*realHeight;
  var scale2 = boardSize;
	var swidth2=swidth*scale2/8;
	var	sheight2=sheight*scale2/8;
	b1.style.width = swidth2 + "px";
	b1.style.height = sheight2 + "px";
    var b2 = document.getElementById("board");
  	b2.setAttribute("src", board1);
    realWidth = b2.naturalWidth;
    realHeight = b2.naturalHeight;
    swidth=4*realWidth*boardMult;
    sheight=4*realHeight*boardMult;
    scale2 = boardSize;
  	swidth2=swidth*scale2/8;
  	sheight2=sheight*scale2/8;
  	b2.style.width = swidth2 + "px";
  	b2.style.height = sheight2 + "px";
}

function setupBoard(sz)
{
  var scaleBoard = sz;
  var b1 = document.getElementById("board");
	b1.setAttribute("src", board_setup);
  var realWidth = b1.naturalWidth;
  var realHeight = b1.naturalHeight;
  swidth=4*realWidth;
  sheight=4*realHeight;
  var scale2 = boardSize;
	var swidth2=swidth*scale2/8;
	var	sheight2=sheight*scale2/8;
	b1.style.width = swidth2 + "px";
	b1.style.height = sheight2 + "px";
    var b2 = document.getElementById("board");
  	b2.setAttribute("src", board_setup);
    realWidth = b2.naturalWidth;
    realHeight = b2.naturalHeight;
    swidth=4*realWidth*boardMult;//boardMult;
    sheight=4*realHeight*boardMult;//boardMult;
    scale2 = boardSize;
  	swidth2=swidth*scale2/8;
  	sheight2=sheight*scale2/8;
  	b2.style.width = swidth2 + "px";
  	b2.style.height = sheight2 + "px";
}

function noHexBoard(sz)
{
  var scaleBoard=sz;
  var b1 = document.getElementById("board");
	b1.setAttribute("src", board2);
  var realWidth = b1.naturalWidth;
  var realHeight = b1.naturalHeight;
  swidth=4*realWidth;
  sheight=4*realHeight;
  var scale2 = boardSize;
	var swidth2=swidth*scale2/8;
	var	sheight2=sheight*scale2/8;
	b1.style.width = swidth2 + "px";
	b1.style.height = sheight2 + "px";
    var b2 = document.getElementById("board");
  	b2.setAttribute("src", board2);
    realWidth = b2.naturalWidth;
    realHeight = b2.naturalHeight;
    swidth=4*realWidth*boardMult;
    sheight=4*realHeight*boardMult;
    scale2 = boardSize;
  	swidth2=swidth*scale2/8;
  	sheight2=sheight*scale2/8;
  	b2.style.width = swidth2 + "px";
  	b2.style.height = sheight2 + "px";
}

function no3Board(sz)
{
  var scaleBoard=sz;
  var b1 = document.getElementById("board");
	b1.setAttribute("src", board3);
  var realWidth = b1.naturalWidth;
  var realHeight = b1.naturalHeight;
  swidth=4*realWidth;
  sheight=4*realHeight;
  var scale2 = boardSize;
	var swidth2=swidth*scale2/8;
	var	sheight2=sheight*scale2/8;
	b1.style.width = swidth2 + "px";
	b1.style.height = sheight2 + "px";
    var b2 = document.getElementById("board");
  	b2.setAttribute("src", board3);
    realWidth = b2.naturalWidth;
    realHeight = b2.naturalHeight;
    swidth=4*realWidth*boardMult;
    sheight=4*realHeight*boardMult;
    scale2 = boardSize;
  	swidth2=swidth*scale2/8;
  	sheight2=sheight*scale2/8;
  	b2.style.width = swidth2 + "px";
  	b2.style.height = sheight2 + "px";
}

function mouseOverFlip(){
  if(mouseOverFlag){mouseOverFlag=false;}
else{mouseOverFlag=true;}
}