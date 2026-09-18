const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
var allColors = new Array();
var colorCurrent = "White";
var gameEndFlag = false;

  var changeA = ["#010100","#010100","#010100","#010000", "#000100","#010000", "#000100","#010000", "#000100","#010000", "#000100","#010000", "#000100","#010100", "#010101"];

  //black and white removed
const htmlColorHex = [ "#F0F8FF", "#FAEBD7", "#00FFFF", "#7FFFD4", "#F0FFFF", "#F5F5DC", "#FFE4C4", "#FFEBCD", "#0000FF", "#8A2BE2", "#A52A2A", "#DEB887", "#5F9EA0", "#7FFF00", "#D2691E", "#FF7F50", "#6495ED", "#FFF8DC", "#DC143C", "#00FFFF", "#00008B", "#008B8B", "#B8860B", "#A9A9A9", "#006400", "#A9A9A9", "#BDB76B", "#8B008B", "#556B2F", "#FF8C00", "#9932CC", "#8B0000", "#E9967A", "#8FBC8F", "#483D8B", "#2F4F4F", "#2F4F4F", "#00CED1", "#9400D3", "#FF1493", "#00BFFF", "#696969", "#696969", "#1E90FF", "#B22222", "#FFFAF0", "#228B22", "#FF00FF", "#DCDCDC", "#F8F8FF", "#FFD700", "#DAA520", "#808080", "#008000", "#ADFF2F", "#808080", "#F0FFF0", "#FF69B4", "#CD5C5C", "#4B0082", "#FFFFF0", "#F0E68C", "#E6E6FA", "#FFF0F5", "#7CFC00", "#FFFACD", "#ADD8E6", "#F08080", "#E0FFFF", "#FAFAD2", "#D3D3D3", "#90EE90", "#D3D3D3", "#FFB6C1", "#FFA07A", "#20B2AA", "#87CEFA", "#778899", "#778899", "#B0C4DE", "#FFFFE0", "#00FF00", "#32CD32", "#FAF0E6", "#FF00FF", "#800000", "#66CDAA", "#0000CD", "#BA55D3", "#9370DB", "#3CB371", "#7B68EE", "#00FA9A", "#48D1CC", "#C71585", "#191970", "#F5FFFA", "#FFE4E1", "#FFE4B5", "#FFDEAD", "#000080", "#FDF5E6", "#808000", "#6B8E23", "#FFA500", "#FF4500", "#DA70D6", "#EEE8AA", "#98FB98", "#AFEEEE", "#DB7093", "#FFEFD5", "#FFDAB9", "#CD853F", "#FFC0CB", "#DDA0DD", "#B0E0E6", "#800080", "#663399", "#FF0000", "#BC8F8F", "#4169E1", "#8B4513", "#FA8072", "#F4A460", "#2E8B57", "#FFF5EE", "#A0522D", "#C0C0C0", "#87CEEB", "#6A5ACD", "#708090", "#708090", "#FFFAFA", "#00FF7F", "#4682B4", "#D2B48C", "#008080", "#D8BFD8", "#FF6347", "#40E0D0", "#EE82EE", "#F5DEB3", "#F5F5F5", "#FFFF00", "#9ACD32" ];

var colrSpecOrder = ["#FFFFF0", "#FFFFE0", "#FFFF00", "#FFFAFA", "#FFFAF0", "#FFFACD", "#FFF8DC", "#FFF5EE", "#FFF0F5", "#FFEFD5", "#FFEBCD", "#FFE4E1", "#FFE4C4", "#FFE4B5", "#FFDEAD", "#FFDAB9", "#FFD700", "#FFC0CB", "#FFB6C1", "#FFA500", "#FFA07A", "#FF8C00", "#FF7F50", "#FF69B4", "#FF6347", "#FF4500", "#FF1493", "#FF00FF", "#FF00FF", "#FF0000", "#FDF5E6", "#FAFAD2", "#FAF0E6", "#FAEBD7", "#FA8072", "#F8F8FF", "#F5FFFA", "#F5F5F5", "#F5F5DC", "#F5DEB3", "#F4A460", "#F0FFFF", "#F0FFF0", "#F0F8FF", "#F0E68C", "#F08080", "#EEE8AA", "#EE82EE", "#E9967A", "#E6E6FA", "#E0FFFF", "#DEB887", "#DDA0DD", "#DCDCDC", "#DC143C", "#DB7093", "#DAA520", "#DA70D6", "#D8BFD8", "#D3D3D3", "#D3D3D3", "#D2B48C", "#D2691E", "#CD853F", "#CD5C5C", "#C71585", "#C0C0C0", "#BDB76B", "#BC8F8F", "#BA55D3", "#B8860B", "#B22222", "#B0E0E6", "#B0C4DE", "#AFEEEE", "#ADFF2F", "#ADD8E6", "#A9A9A9", "#A9A9A9", "#A52A2A", "#A0522D", "#9ACD32", "#9932CC", "#98FB98", "#9400D3", "#9370DB", "#90EE90", "#8FBC8F", "#8B4513", "#8B008B", "#8B0000", "#8A2BE2", "#87CEFA", "#87CEEB", "#808080", "#808080", "#808000", "#800080", "#800000", "#7FFFD4", "#7FFF00", "#7CFC00", "#7B68EE", "#778899", "#778899", "#708090", "#708090", "#6B8E23", "#6A5ACD", "#696969", "#696969", "#66CDAA", "#663399", "#6495ED", "#5F9EA0", "#556B2F", "#4B0082", "#48D1CC", "#483D8B", "#4682B4", "#4169E1", "#40E0D0", "#3CB371", "#32CD32", "#2F4F4F", "#2F4F4F", "#2E8B57", "#228B22", "#20B2AA", "#1E90FF", "#191970", "#00FFFF", "#00FFFF", "#00FF7F", "#00FF00", "#00FA9A", "#00CED1", "#00BFFF", "#008B8B", "#008080", "#008000", "#006400", "#0000FF", "#0000CD", "#00008B", "#000080"];


var colrSpecOrderBU = ["#FFFFF0", "#FFFFE0", "#FFFF00", "#FFFAFA", "#FFFAF0", "#FFFACD", "#FFF8DC", "#FFF5EE", "#FFF0F5", "#FFEFD5", "#FFEBCD", "#FFE4E1", "#FFE4C4", "#FFE4B5", "#FFDEAD", "#FFDAB9", "#FFD700", "#FFC0CB", "#FFB6C1", "#FFA500", "#FFA07A", "#FF8C00", "#FF7F50", "#FF69B4", "#FF6347", "#FF4500", "#FF1493", "#FF00FF", "#FF00FF", "#FF0000", "#FDF5E6", "#FAFAD2", "#FAF0E6", "#FAEBD7", "#FA8072", "#F8F8FF", "#F5FFFA", "#F5F5F5", "#F5F5DC", "#F5DEB3", "#F4A460", "#F0FFFF", "#F0FFF0", "#F0F8FF", "#F0E68C", "#F08080", "#EEE8AA", "#EE82EE", "#E9967A", "#E6E6FA", "#E0FFFF", "#DEB887", "#DDA0DD", "#DCDCDC", "#DC143C", "#DB7093", "#DAA520", "#DA70D6", "#D8BFD8", "#D3D3D3", "#D3D3D3", "#D2B48C", "#D2691E", "#CD853F", "#CD5C5C", "#C71585", "#C0C0C0", "#BDB76B", "#BC8F8F", "#BA55D3", "#B8860B", "#B22222", "#B0E0E6", "#B0C4DE", "#AFEEEE", "#ADFF2F", "#ADD8E6", "#A9A9A9", "#A9A9A9", "#A52A2A", "#A0522D", "#9ACD32", "#9932CC", "#98FB98", "#9400D3", "#9370DB", "#90EE90", "#8FBC8F", "#8B4513", "#8B008B", "#8B0000", "#8A2BE2", "#87CEFA", "#87CEEB", "#808080", "#808080", "#808000", "#800080", "#800000", "#7FFFD4", "#7FFF00", "#7CFC00", "#7B68EE", "#778899", "#778899", "#708090", "#708090", "#6B8E23", "#6A5ACD", "#696969", "#696969", "#66CDAA", "#663399", "#6495ED", "#5F9EA0", "#556B2F", "#4B0082", "#48D1CC", "#483D8B", "#4682B4", "#4169E1", "#40E0D0", "#3CB371", "#32CD32", "#2F4F4F", "#2F4F4F", "#2E8B57", "#228B22", "#20B2AA", "#1E90FF", "#191970", "#00FFFF", "#00FFFF", "#00FF7F", "#00FF00", "#00FA9A", "#00CED1", "#00BFFF", "#008B8B", "#008080", "#008000", "#006400", "#0000FF", "#0000CD", "#00008B", "#000080"]

var brightnessOrder = [ "#FFFFF0", "#FFFFE0", "#F5FFFA", "#F0FFFF", "#FFFAFA", "#F0FFF0", "#FFFAF0", "#F8F8FF", "#E0FFFF", "#FFFACD", "#FFF8DC", "#FAFAD2", "#F0F8FF", "#FFF5EE", "#FDF5E6", "#F5F5F5", "#FFF0F5", "#F5F5DC", "#FAF0E6", "#FFEFD5", "#FFEBCD", "#FAEBD7", "#FFFF00", "#FFE4E1", "#E6E6FA", "#FFE4C4", "#FFE4B5", "#EEE8AA", "#F0E68C", "#FFDEAD", "#7FFFD4", "#AFEEEE", "#F5DEB3", "#FFDAB9", "#98FB98", "#ADFF2F", "#DCDCDC", "#B0E0E6", "#90EE90", "#D3D3D3", "#D3D3D3", "#7FFF00", "#FFD700", "#ADD8E6", "#7CFC00", "#FFC0CB", "#00FFFF", "#00FFFF", "#FFB6C1", "#D8BFD8", "#87CEFA", "#B0C4DE", "#87CEEB", "#C0C0C0", "#00FF7F", "#00FA9A", "#40E0D0", "#DEB887", "#D2B48C", "#9ACD32", "#00FF00", "#66CDAA", "#48D1CC", "#BDB76B", "#FFA07A", "#DDA0DD", "#F4A460", "#8FBC8F", "#FFA500", "#A9A9A9", "#A9A9A9", "#DAA520", "#E9967A", "#00CED1", "#32CD32", "#EE82EE", "#00BFFF", "#FF8C00", "#FA8072", "#BC8F8F", "#F08080", "#FF7F50", "#3CB371", "#20B2AA", "#6495ED", "#5F9EA0", "#e48319", "#CD853F", "#FF69B4", "#DA70D6", "#DB7093", "#B8860B", "#778899", "#778899", "#FF6347", "#808080", "#808080", "#1E90FF", "#9370DB", "#6B8E23", "#708090", "#708090", "#D2691E", "#4682B4", "#808000", "#7B68EE", "#CD5C5C", "#BA55D3", "#2E8B57", "#008B8B", "#228B22", "#4169E1", "#696969", "#696969", "#FF4500", "#6A5ACD", "#008080", "#556B2F", "#A0522D", "#008000", "#9932CC", "#8B4513", "#FF1493", "#8A2BE2", "#FF00FF", "#FF00FF", "#2F4F4F", "#2F4F4F", "#006400", "#663399", "#483D8B", "#A52A2A", "#C71585", "#DC143C", "#B22222", "#FF0000", "#9400D3", "#8B008B", "#800080", "#191970", "#8B0000", "#800000", "#4B0082", "#0000FF", "#0000CD", "#00008B", "#000080"]

var colrSpecLen = brightnessOrder.length;
let colNo = 2;
var colJump = Math.floor(colrSpecLen / colNo);

    var noOfEachCol = new Array();
    var noOfEachColPc = new Array();
    var noOfEachColPcT = new Array();
    var noOfEachColPcT2 = new Array();
    var orderedColFlag =0;//0=all colours in order;1=colours in order but remove empty colours;2=random colour;3=colours as by how many present by %

    for(i=0;i<colNo;i++){
      noOfEachCol[i]=0;
      noOfEachColPc[i]=0;
      noOfEachColPcT[i]=0;
      noOfEachColPcT2[i]=0;
    }

const gridSizeX = 10;
const gridSizeY = 10;
var edgeSize = 8;
var changeColor = "#333333";
const cellSize = 80; // Doubled from 50 to 100
const canvasSizeX = gridSizeX * cellSize;
const canvasSizeY = gridSizeY * cellSize;
let indexColorCurrent = 1;
let indexColOld = 0;
let indexColNow = 0;
let indexColLoop = 0;

// Sudoku board
let board = Array.from({ length: gridSizeX }, () => Array(gridSizeY).fill(0));
let board50pc = Array.from({ length: 9 }, () => Array(9).fill(0));//holds if num displayed

// Arrays to hold rows, columns, and 3x3 blocks
let rows = Array.from({ length: gridSizeY }, () => []);
let cols = Array.from({ length: gridSizeX }, () => []);
let blocks = Array.from({ length: 9 }, () => []);

// Define colors
//const oddBlockColors = ["#ffff99", "#ffcc66"]; // yellow and orange
//const evenBlockColors = ["#ccff99", "#66cc66"]; // lime and leaf-green
const mainBlockColors = ["#ffff99", "#ffcc66"]; // yellow and orange
const green2BlockColors = ["#bbff99", "#66cc66"]; // ["#ddffaa", "#77cc77"]; // lime and leaf-green
const greenBlockColors = ["#bbbbbb", "#888888"];//["#ccff99", "#66cc66"];//["#ddff99", "#aacc66"]; // lime and leaf-green
const purple2BlockColors = ["#ffbbff", "#cc55cc"]; // lime and leaf-green
const purpleBlockColors = ["#999999", "#666666"];//["#ff99ff", "#cc66cc"];//["#ffccff", "#dd9999"]; // lime and leaf-green

function fillCanvas(){

    //down the top side
    ctx.beginPath();
    ctx.fillStyle = "Black";
    ctx.fillRect(0,0,1218,1000);//1080
    ctx.closePath();

  if(true){
    var colorNowH = "Green";//col2Hex(baseColor);
    for(tx=0;tx<10000;tx++){//extra colours
      var dirColor = "add";
      if(Math.random()<0.5){dirColor="sub"}
      var randColChange1 = Math.floor(Math.random()*changeA.length);
      var randColChange2 = changeA[randColChange1];
      //var randColChange2 = "#010000";
      colorNow = shiftColor(colorNowH, randColChange2, dirColor);
      colorNowH = colorNow;
      colorNow = "#"+colorNow;
        var texWd_x = 0 +Math.round(Math.random()*(1218));//1080
        var texWd_y = 0 +Math.round(Math.random()*(1000));
        //var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
        //var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
      ctx.fillStyle = colorNow;
    ctx.beginPath();
    ctx.globalAlpha = 0.2;
    //different styles of patterning
    if(Math.random()<0.1){
    var randradius = Math.round(Math.random()*100)+1;}
    else if(Math.random()<0.1){
    var randradius = Math.round(Math.random()*40)+Math.round(Math.random()*30)+Math.round(Math.random()*20)+Math.round(Math.random()*10)+1;}
    else{
    var randradius = Math.round(Math.random()*4)+Math.round(Math.random()*3)+Math.round(Math.random()*2)+Math.round(Math.random()*1)+1;}
    ctx.arc(texWd_x, texWd_y, randradius, 0, Math.PI*2);
    ctx.fill();
    }
  }
  ctx.globalAlpha = 1;
}

  //export function shiftColor(base, change, direction) {//direction = 'add' or 'sub'
  function shiftColor(base, change, direction) {//direction = 'add' or 'sub'
    const colorRegEx = /^\#?[A-Fa-f0-9]{6}$/;

    // Missing parameter(s)
    if (!base || !change) {
      return '000000';
    }

    // Invalid parameter(s)
    if (!base.match(colorRegEx) || !change.match(colorRegEx)) {
      return '000000';
    }

    // Remove any '#'s
    base = base.replace(/\#/g, '');
    change = change.replace(/\#/g, '');

    // Build new color
    let newColor = '';
    for (let i = 0; i < 3; i++) {
      const basePiece = parseInt(base.substring(i * 2, i * 2 + 2), 16);
      const changePiece = parseInt(change.substring(i * 2, i * 2 + 2), 16);
      let newPiece = '';

      if (direction === 'add') {
        newPiece = (basePiece + changePiece);
        newPiece = newPiece > 255 ? 255 : newPiece;
      }
      if (direction === 'sub') {
        newPiece = (basePiece - changePiece);
        newPiece = newPiece < 0 ? 0 : newPiece;
      }

      newPiece = newPiece.toString(16);
      newPiece = newPiece.length < 2 ? '0' + newPiece : newPiece;
      newColor += newPiece;
    }

    return newColor;
  }

// Draw background boxes with checkerboard colors
function drawCheckerboard() {

  //completely random colours
  /*
  var colDummy2 = Math.floor(Math.random() * htmlColorHex.length);
  for (cl = 0; cl < colNo; cl++){
    colDummy2 = Math.floor(Math.random() * htmlColorHex.length);
    allColors[cl] = htmlColorHex[colDummy2];//makeColor2();
  }
  */
  //colours from each section of spectrum

  colJump = Math.floor(colrSpecLen / colNo);

  var colDummy2 = Math.floor(Math.random() * colJump);
  //using ordered colours
  /*
  for (cl = 0; cl < colNo; cl++){
    colDummy2 = colJump*cl+Math.floor(Math.random() * colJump);
    allColors[cl] = colrSpecOrder[colDummy2];//makeColor2();
    console.log("colDummy2="+colDummy2);
  }*/
  //using random colours
  for (cl = 0; cl < colNo; cl++){
    var colDummy3 = makeColor2();
    allColors[cl] = colDummy3;
    console.log("allColors="+allColors);
  }


  for (let row = 0; row < gridSizeY; row++) {
    for (let col = 0; col < gridSizeX; col++) {

      var colDummy = Math.floor(Math.random() * colNo);
      var color = allColors[colDummy];
      board[col][row]=colDummy;
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.fillRect(col * cellSize + 140, row * cellSize + 140, cellSize, cellSize);
      ctx.closePath();
      makeUnitColor2(color);
     //**top edge
   	  ctx.lineWidth = "1";
   	  ctx.fillStyle = unitColor1;
   	  ctx.beginPath();
    		ctx.moveTo(col * cellSize + 140, row * cellSize + 140);
    		ctx.lineTo(col * cellSize + 140+edgeSize, row * cellSize + 140+edgeSize);
    		ctx.lineTo(col * cellSize + 140 + cellSize-edgeSize,  row * cellSize + 140+edgeSize);
    		ctx.lineTo(col * cellSize + 140 + cellSize, row * cellSize + 140);
    		ctx.lineTo(col * cellSize + 140, row * cellSize + 140);
    		ctx.closePath();
    		//ctx.stroke();
      ctx.fill();

      //**left edge
		  ctx.lineWidth = "1";
		  ctx.fillStyle = unitColor2;
		  ctx.beginPath();
			ctx.moveTo(col * cellSize + 140, row * cellSize + 140);
			ctx.lineTo(col * cellSize + 140+edgeSize, row * cellSize + 140+edgeSize);
			ctx.lineTo(col * cellSize + 140+edgeSize,  row * cellSize + 140+ cellSize-edgeSize);
			ctx.lineTo(col * cellSize + 140,  row * cellSize + 140+ cellSize);
			ctx.lineTo(col * cellSize + 140, row * cellSize + 140);
			ctx.closePath();
			//ctx.stroke();
			ctx.fill();

			//**bottom edge
			  ctx.lineWidth = "1";
			  ctx.fillStyle = unitColor4;
			  ctx.beginPath();
				ctx.moveTo(col * cellSize + 140, row * cellSize + 140+ cellSize);
				ctx.lineTo(col * cellSize + 140+edgeSize, row * cellSize + 140+ cellSize-edgeSize);
				ctx.lineTo(col * cellSize + 140+ cellSize-edgeSize,  row * cellSize + 140+ cellSize-edgeSize);
				ctx.lineTo(col * cellSize + 140+ cellSize,  row * cellSize + 140+ cellSize);
				ctx.lineTo(col * cellSize + 140, row * cellSize + 140+ cellSize);
				ctx.closePath();
				//ctx.stroke();
				ctx.fill();

				//**right edge
				  ctx.lineWidth = "1";
				  ctx.fillStyle = unitColor3;
				  ctx.beginPath();
					ctx.moveTo(col * cellSize + 140+ cellSize, row * cellSize + 140+ cellSize);
					ctx.lineTo(col * cellSize + 140+ cellSize-edgeSize, row * cellSize + 140+ cellSize-edgeSize);
					ctx.lineTo(col * cellSize + 140+ cellSize-edgeSize,  row * cellSize + 140+edgeSize);
					ctx.lineTo(col * cellSize + 140+ cellSize,  row * cellSize + 140);
					ctx.lineTo(col * cellSize + 140+ cellSize, row * cellSize + 140+ cellSize);
					ctx.closePath();
					//ctx.stroke();
					ctx.fill();
    }
  }
/*
  console.log("start:");
  for(yr=0;yr<gridSizeX;yr++){
    console.log(""+board[0][yr]+" "+board[1][yr]+" "+board[2][yr]+" "+board[3][yr]+" "+board[4][yr]+" "+board[5][yr]+" "+board[6][yr]+" "+board[7][yr]+" "+board[8][yr]+" "+board[9][yr]);
  }
*/

}

// Draw single cells - all colours
function drawSingleCells() {
  for (let row = 0; row < 1; row++) {
    for (let col = 0; col < colNo; col++) {

      var colDummy = col;
      var color = allColors[colDummy];
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.fillRect((col+2) * cellSize + 140+(col*10), row * cellSize + 20, cellSize, cellSize);//(col*10) adds 10 pixel gaps
      ctx.closePath();
        changeColor = "#333333";
      makeUnitColor2(color);
     //**top edge
   	  ctx.lineWidth = "1";
   	  ctx.fillStyle = unitColor1;
   	  ctx.beginPath();
    		ctx.moveTo((col+2) * cellSize + 140+(col*10), row * cellSize + 20);
    		ctx.lineTo((col+2) * cellSize + 140+(col*10)+edgeSize, row * cellSize + 20+edgeSize);
    		ctx.lineTo((col+2) * cellSize + 140+(col*10) + cellSize-edgeSize,  row * cellSize + 20+edgeSize);
    		ctx.lineTo((col+2) * cellSize + 140+(col*10) + cellSize, row * cellSize + 20);
    		ctx.lineTo((col+2) * cellSize + 140+(col*10), row * cellSize + 20);
    		ctx.closePath();
    		//ctx.stroke();
      ctx.fill();

      //**left edge
		  ctx.lineWidth = "1";
		  ctx.fillStyle = unitColor2;
		  ctx.beginPath();
			ctx.moveTo((col+2) * cellSize + 140+(col*10), row * cellSize + 20);
			ctx.lineTo((col+2) * cellSize + 140+(col*10)+edgeSize, row * cellSize + 20+edgeSize);
			ctx.lineTo((col+2) * cellSize + 140+(col*10)+edgeSize,  row * cellSize + 20+ cellSize-edgeSize);
			ctx.lineTo((col+2) * cellSize + 140+(col*10),  row * cellSize + 20+ cellSize);
			ctx.lineTo((col+2) * cellSize + 140+(col*10), row * cellSize + 20);
			ctx.closePath();
			//ctx.stroke();
			ctx.fill();

			//**bottom edge
			  ctx.lineWidth = "1";
			  ctx.fillStyle = unitColor4;
			  ctx.beginPath();
				ctx.moveTo((col+2) * cellSize + 140+(col*10), row * cellSize + 20+ cellSize);
				ctx.lineTo((col+2) * cellSize + 140+(col*10)+edgeSize, row * cellSize + 20+ cellSize-edgeSize);
				ctx.lineTo((col+2) * cellSize + 140+(col*10)+ cellSize-edgeSize,  row * cellSize + 20+ cellSize-edgeSize);
				ctx.lineTo((col+2) * cellSize + 140+(col*10)+ cellSize,  row * cellSize + 20+ cellSize);
				ctx.lineTo((col+2) * cellSize + 140+(col*10), row * cellSize + 20+ cellSize);
				ctx.closePath();
				//ctx.stroke();
				ctx.fill();

				//**right edge
				  ctx.lineWidth = "1";
				  ctx.fillStyle = unitColor3;
				  ctx.beginPath();
					ctx.moveTo((col+2) * cellSize + 140+(col*10)+ cellSize, row * cellSize + 20+ cellSize);
					ctx.lineTo((col+2) * cellSize + 140+(col*10)+ cellSize-edgeSize, row * cellSize + 20+ cellSize-edgeSize);
					ctx.lineTo((col+2) * cellSize + 140+(col*10)+ cellSize-edgeSize,  row * cellSize + 20+edgeSize);
					ctx.lineTo((col+2) * cellSize + 140+(col*10)+ cellSize,  row * cellSize + 20);
					ctx.lineTo((col+2) * cellSize + 140+(col*10)+ cellSize, row * cellSize + 20+ cellSize);
					ctx.closePath();
					//ctx.stroke();
					ctx.fill();
    }
  }
}

// Draw single cells - current colour
function drawCurrentCells() {
  let row = 0;
  let col = 0;

      var colDummy = col;
      var color = allColors[indexColorCurrent];
      colorCurrent = color;
      //console.log("colorCurrent="+colorCurrent);
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.fillRect(col * cellSize + 20, row * cellSize + 20, cellSize, cellSize);
      ctx.closePath();
        changeColor = "#333333";
      makeUnitColor2(color);
     //**top edge
   	  ctx.lineWidth = "1";
   	  ctx.fillStyle = unitColor1;
   	  ctx.beginPath();
    		ctx.moveTo(col * cellSize + 20, row * cellSize + 20);
    		ctx.lineTo(col * cellSize + 20+edgeSize, row * cellSize + 20+edgeSize);
    		ctx.lineTo(col * cellSize + 20 + cellSize-edgeSize,  row * cellSize + 20+edgeSize);
    		ctx.lineTo(col * cellSize + 20 + cellSize, row * cellSize + 20);
    		ctx.lineTo(col * cellSize + 20, row * cellSize + 20);
    		ctx.closePath();
    		//ctx.stroke();
      ctx.fill();

      //**left edge
		  ctx.lineWidth = "1";
		  ctx.fillStyle = unitColor2;
		  ctx.beginPath();
			ctx.moveTo(col * cellSize + 20, row * cellSize + 20);
			ctx.lineTo(col * cellSize + 20+edgeSize, row * cellSize + 20+edgeSize);
			ctx.lineTo(col * cellSize + 20+edgeSize,  row * cellSize + 20+ cellSize-edgeSize);
			ctx.lineTo(col * cellSize + 20,  row * cellSize + 20+ cellSize);
			ctx.lineTo(col * cellSize + 20, row * cellSize + 20);
			ctx.closePath();
			//ctx.stroke();
			ctx.fill();

			//**bottom edge
			  ctx.lineWidth = "1";
			  ctx.fillStyle = unitColor4;
			  ctx.beginPath();
				ctx.moveTo(col * cellSize + 20, row * cellSize + 20+ cellSize);
				ctx.lineTo(col * cellSize + 20+edgeSize, row * cellSize + 20+ cellSize-edgeSize);
				ctx.lineTo(col * cellSize + 20+ cellSize-edgeSize,  row * cellSize + 20+ cellSize-edgeSize);
				ctx.lineTo(col * cellSize + 20+ cellSize,  row * cellSize + 20+ cellSize);
				ctx.lineTo(col * cellSize + 20, row * cellSize + 20+ cellSize);
				ctx.closePath();
				//ctx.stroke();
				ctx.fill();

				//**right edge
				  ctx.lineWidth = "1";
				  ctx.fillStyle = unitColor3;
				  ctx.beginPath();
					ctx.moveTo(col * cellSize + 20+ cellSize, row * cellSize + 20+ cellSize);
					ctx.lineTo(col * cellSize + 20+ cellSize-edgeSize, row * cellSize + 20+ cellSize-edgeSize);
					ctx.lineTo(col * cellSize + 20+ cellSize-edgeSize,  row * cellSize + 20+edgeSize);
					ctx.lineTo(col * cellSize + 20+ cellSize,  row * cellSize + 20);
					ctx.lineTo(col * cellSize + 20+ cellSize, row * cellSize + 20+ cellSize);
					ctx.closePath();
					//ctx.stroke();
					ctx.fill();
}

function checkCells(x0,y0){

    let col = x0;
    let row = y0;
    let col2 = x0;
    let row2 = y0;
    var colorInFlag = 0;//0=no colour in; 1=colour in
    indexColLoop = 0;

    /*console.log("before:");
for(yr=0;yr<gridSizeX;yr++){
  console.log(""+board[0][yr]+" "+board[1][yr]+" "+board[2][yr]+" "+board[3][yr]+" "+board[4][yr]+" "+board[5][yr]+" "+board[6][yr]+" "+board[7][yr]+" "+board[8][yr]+" "+board[9][yr]);
}
*/
if(orthoFlag){
    //go north
    if(row2>1){//can't trap against edge
    row2--;
    indexColOld = board[col2][row2];
    //console.log("indexColOld="+indexColOld+" row2="+row2);
    while(row2>0){
    row2--;
    indexColNow = board[col2][row2];
    //console.log("indexColNow="+indexColNow+" row2="+row2);
    indexColLoop++;
    if(indexColNow==indexColorCurrent){colorInFlag=1;
      //console.log("break! "+indexColLoop+" colorInFlag="+colorInFlag+" row2="+row2);
      break;}
    if(indexColNow!=indexColOld){colorInFlag=0;
      //console.log("break! "+indexColLoop+" colorInFlag="+colorInFlag+" row2="+row2);
      break;}
    }
    //colour in
    //console.log("indexColLoop="+indexColLoop);
    if(colorInFlag==1){
    board[col][row]=indexColorCurrent;
      for(c=0;c<indexColLoop;c++){
        var colD = col2;
        var rowD = +row - c -1;
      reverseSingleCells(colD,rowD);
      board[colD][rowD]=indexColorCurrent;
      }
    }
}
    //go south
    //reset data:
    row2=row;
    indexColLoop = 0;
    colorInFlag=0;

    if(row2<8){//can't trap against edge
    row2++;
    indexColOld = board[col2][row2];
    //console.log("indexColOld="+indexColOld+" row2="+row2);
    while(row2<9){
    row2++;
    indexColNow = board[col2][row2];
    //console.log("indexColNow="+indexColNow+" row2="+row2);
    indexColLoop++;
    if(indexColNow==indexColorCurrent){colorInFlag=1;
      //console.log("break! "+indexColLoop+" colorInFlag="+colorInFlag+" row2="+row2);
      break;}
    if(indexColNow!=indexColOld){colorInFlag=0;
      //console.log("break! "+indexColLoop+" colorInFlag="+colorInFlag+" row2="+row2);
      break;}
    }
    //colour in
    //console.log("indexColLoop="+indexColLoop);
    if(colorInFlag==1){
    board[col][row]=indexColorCurrent;
      for(c=0;c<indexColLoop;c++){
        var colD = col2;
        var rowD = +row + c +1;
      reverseSingleCells(colD,rowD);
      board[colD][rowD]=indexColorCurrent;
      }
    }
    }

    //go east
    //reset data:
    col2=col;
    row2=row;
    indexColLoop = 0;
    colorInFlag=0;

    if(col2<8){//can't trap against edge
    col2++;
    indexColOld = board[col2][row2];
    //console.log("indexColOld="+indexColOld+" row2="+row2);
    while(col2<9){
    col2++;
    indexColNow = board[col2][row2];
    //console.log("indexColNow="+indexColNow+" row2="+row2);
    indexColLoop++;
    if(indexColNow==indexColorCurrent){colorInFlag=1;
      //console.log("break! "+indexColLoop+" colorInFlag="+colorInFlag+" row2="+row2);
      break;}
    if(indexColNow!=indexColOld){colorInFlag=0;
      //console.log("break! "+indexColLoop+" colorInFlag="+colorInFlag+" row2="+row2);
      break;}
    }
    //colour in
    //console.log("indexColLoop="+indexColLoop);
    if(colorInFlag==1){
    board[col][row]=indexColorCurrent;
      for(c=0;c<indexColLoop;c++){
        var rowD = row2;
        var colD = +col + c +1;
      reverseSingleCells(colD,rowD);
      board[colD][rowD]=indexColorCurrent;
      }
    }
    }

        //go west
        //reset data:
        col2=col;
        row2=row;
        indexColLoop = 0;
        colorInFlag=0;

        if(col2>1){//can't trap against edge
        col2--;
        indexColOld = board[col2][row2];
        //console.log("indexColOld="+indexColOld+" row2="+row2);
        while(col2>0){
        col2--;
        indexColNow = board[col2][row2];
        //console.log("indexColNow="+indexColNow+" row2="+row2);
        indexColLoop++;
        if(indexColNow==indexColorCurrent){colorInFlag=1;
          //console.log("break! "+indexColLoop+" colorInFlag="+colorInFlag+" row2="+row2);
          break;}
        if(indexColNow!=indexColOld){colorInFlag=0;
          //console.log("break! "+indexColLoop+" colorInFlag="+colorInFlag+" row2="+row2);
          break;}
        }
        //colour in
        //console.log("indexColLoop="+indexColLoop);
        if(colorInFlag==1){
        board[col][row]=indexColorCurrent;
          for(c=0;c<indexColLoop;c++){
            var rowD = row2;
            var colD = +col - c -1;
          reverseSingleCells(colD,rowD);
          board[colD][rowD]=indexColorCurrent;
          }
        }
        }
}
if(diagFlag){

                //go northwest
                //reset data:
                col2=col;
                row2=row;
                indexColLoop = 0;
                colorInFlag=0;

                if(col2>1&&row2>1){//can't trap against edge
                col2--;row2--;
                indexColOld = board[col2][row2];
                //console.log("indexColOld="+indexColOld+" row2="+row2);
                while(col2>0&&row2>0){
                col2--;row2--;
                indexColNow = board[col2][row2];
                //console.log("indexColNow="+indexColNow+" row2="+row2);
                indexColLoop++;
                if(indexColNow==indexColorCurrent){colorInFlag=1;
                  //console.log("break! "+indexColLoop+" colorInFlag="+colorInFlag+" row2="+row2);
                  break;}
                if(indexColNow!=indexColOld){colorInFlag=0;
                  //console.log("break! "+indexColLoop+" colorInFlag="+colorInFlag+" row2="+row2);
                  break;}
                }
                //colour in
                //console.log("indexColLoop="+indexColLoop);
                if(colorInFlag==1){
                board[col][row]=indexColorCurrent;
                  for(c=0;c<indexColLoop;c++){
                    var rowD = +row -c -1;
                    var colD = +col -c -1;
                  reverseSingleCells(colD,rowD);
                  board[colD][rowD]=indexColorCurrent;
                  }
                }
                }
                //go northeast
                //reset data:
                col2=col;
                row2=row;
                indexColLoop = 0;
                colorInFlag=0;

                if(col2<8&&row2>1){//can't trap against edge
                col2++;row2--;
                indexColOld = board[col2][row2];
                //console.log("indexColOld="+indexColOld+" row2="+row2);
                while(col2<9&&row2>0){
                col2++;row2--;
                indexColNow = board[col2][row2];
                //console.log("indexColNow="+indexColNow+" row2="+row2);
                indexColLoop++;
                if(indexColNow==indexColorCurrent){colorInFlag=1;
                  //console.log("break! "+indexColLoop+" colorInFlag="+colorInFlag+" row2="+row2);
                  break;}
                if(indexColNow!=indexColOld){colorInFlag=0;
                  //console.log("break! "+indexColLoop+" colorInFlag="+colorInFlag+" row2="+row2);
                  break;}
                }
                //colour in
                //console.log("indexColLoop="+indexColLoop);
                if(colorInFlag==1){
                board[col][row]=indexColorCurrent;
                  for(c=0;c<indexColLoop;c++){
                    var rowD = +row -c -1;
                    var colD = +col +c +1;
                  reverseSingleCells(colD,rowD);
                  board[colD][rowD]=indexColorCurrent;
                  }
                }
                }

                                //go southeast
                                //reset data:
                                col2=col;
                                row2=row;
                                indexColLoop = 0;
                                colorInFlag=0;

                                if(col2<8&&row2<8){//can't trap against edge
                                col2++;row2++;
                                indexColOld = board[col2][row2];
                                //console.log("indexColOld="+indexColOld+" row2="+row2);
                                while(col2<9&&row2<9){
                                col2++;row2++;
                                indexColNow = board[col2][row2];
                                //console.log("indexColNow="+indexColNow+" row2="+row2);
                                indexColLoop++;
                                if(indexColNow==indexColorCurrent){colorInFlag=1;
                                  //console.log("break! "+indexColLoop+" colorInFlag="+colorInFlag+" row2="+row2);
                                  break;}
                                if(indexColNow!=indexColOld){colorInFlag=0;
                                  //console.log("break! "+indexColLoop+" colorInFlag="+colorInFlag+" row2="+row2);
                                  break;}
                                }
                                //colour in
                                //console.log("indexColLoop="+indexColLoop);
                                if(colorInFlag==1){
                                board[col][row]=indexColorCurrent;
                                  for(c=0;c<indexColLoop;c++){
                                    var rowD = +row +c +1;
                                    var colD = +col +c +1;
                                  reverseSingleCells(colD,rowD);
                                  board[colD][rowD]=indexColorCurrent;
                                  }
                                }
                                }
                                //go southwest
                                //reset data:
                                col2=col;
                                row2=row;
                                indexColLoop = 0;
                                colorInFlag=0;

                                if(col2>1&&row2<8){//can't trap against edge
                                col2--;row2++;
                                indexColOld = board[col2][row2];
                                //console.log("indexColOld="+indexColOld+" row2="+row2);
                                while(col2>0&&row2<9){
                                col2--;row2++;
                                indexColNow = board[col2][row2];
                                //console.log("indexColNow="+indexColNow+" row2="+row2);
                                indexColLoop++;
                                if(indexColNow==indexColorCurrent){colorInFlag=1;
                                  //console.log("break! "+indexColLoop+" colorInFlag="+colorInFlag+" row2="+row2);
                                  break;}
                                if(indexColNow!=indexColOld){colorInFlag=0;
                                  //console.log("break! "+indexColLoop+" colorInFlag="+colorInFlag+" row2="+row2);
                                  break;}
                                }
                                //colour in
                                //console.log("indexColLoop="+indexColLoop);
                                if(colorInFlag==1){
                                board[col][row]=indexColorCurrent;
                                  for(c=0;c<indexColLoop;c++){
                                    var rowD = +row +c +1;
                                    var colD = +col -c -1;
                                  reverseSingleCells(colD,rowD);
                                  board[colD][rowD]=indexColorCurrent;
                                  }
                                }
                                }

}
}


// Draw single cell
function reverseSingleCells(x0,y0) {

  let col = x0;
  let row = y0;

      ctx.beginPath();
      ctx.fillStyle = colorCurrent;
      ctx.fillRect(col * cellSize + 140, row * cellSize + 140, cellSize, cellSize);
      ctx.closePath();
        changeColor = "#333333";
      makeUnitColor2(colorCurrent);//(color);
     //**top edge
   	  ctx.lineWidth = "1";
   	  ctx.fillStyle = unitColor1;
   	  ctx.beginPath();
    		ctx.moveTo(col * cellSize + 140, row * cellSize + 140);
    		ctx.lineTo(col * cellSize + 140+edgeSize, row * cellSize + 140+edgeSize);
    		ctx.lineTo(col * cellSize + 140 + cellSize-edgeSize,  row * cellSize + 140+edgeSize);
    		ctx.lineTo(col * cellSize + 140 + cellSize, row * cellSize + 140);
    		ctx.lineTo(col * cellSize + 140, row * cellSize + 140);
    		ctx.closePath();
    		//ctx.stroke();
      ctx.fill();

      //**left edge
		  ctx.lineWidth = "1";
		  ctx.fillStyle = unitColor2;
		  ctx.beginPath();
			ctx.moveTo(col * cellSize + 140, row * cellSize + 140);
			ctx.lineTo(col * cellSize + 140+edgeSize, row * cellSize + 140+edgeSize);
			ctx.lineTo(col * cellSize + 140+edgeSize,  row * cellSize + 140+ cellSize-edgeSize);
			ctx.lineTo(col * cellSize + 140,  row * cellSize + 140+ cellSize);
			ctx.lineTo(col * cellSize + 140, row * cellSize + 140);
			ctx.closePath();
			//ctx.stroke();
			ctx.fill();

			//**bottom edge
			  ctx.lineWidth = "1";
			  ctx.fillStyle = unitColor4;
			  ctx.beginPath();
				ctx.moveTo(col * cellSize + 140, row * cellSize + 140+ cellSize);
				ctx.lineTo(col * cellSize + 140+edgeSize, row * cellSize + 140+ cellSize-edgeSize);
				ctx.lineTo(col * cellSize + 140+ cellSize-edgeSize,  row * cellSize + 140+ cellSize-edgeSize);
				ctx.lineTo(col * cellSize + 140+ cellSize,  row * cellSize + 140+ cellSize);
				ctx.lineTo(col * cellSize + 140, row * cellSize + 140+ cellSize);
				ctx.closePath();
				//ctx.stroke();
				ctx.fill();

				//**right edge
				  ctx.lineWidth = "1";
				  ctx.fillStyle = unitColor3;
				  ctx.beginPath();
					ctx.moveTo(col * cellSize + 140+ cellSize, row * cellSize + 140+ cellSize);
					ctx.lineTo(col * cellSize + 140+ cellSize-edgeSize, row * cellSize + 140+ cellSize-edgeSize);
					ctx.lineTo(col * cellSize + 140+ cellSize-edgeSize,  row * cellSize + 140+edgeSize);
					ctx.lineTo(col * cellSize + 140+ cellSize,  row * cellSize + 140);
					ctx.lineTo(col * cellSize + 140+ cellSize, row * cellSize + 140+ cellSize);
					ctx.closePath();
					//ctx.stroke();
					ctx.fill();

    }


// Draw single cell
function changeSingleCells(x0,y0) {

  let col = x0;
  let row = y0;

      //var colDummy = col;
      //var color = allColors[colDummy];
      ctx.beginPath();
      ctx.fillStyle = colorCurrent;
      board[col][row] = indexColorCurrent;
      //console.log("colorCurrent="+colorCurrent);
      ctx.fillRect(col * cellSize + 140, row * cellSize + 140, cellSize, cellSize);
      ctx.closePath();
        changeColor = "#333333";
      makeUnitColor2(colorCurrent);//(color);
     //**top edge
   	  ctx.lineWidth = "1";
   	  ctx.fillStyle = unitColor1;
   	  ctx.beginPath();
    		ctx.moveTo(col * cellSize + 140, row * cellSize + 140);
    		ctx.lineTo(col * cellSize + 140+edgeSize, row * cellSize + 140+edgeSize);
    		ctx.lineTo(col * cellSize + 140 + cellSize-edgeSize,  row * cellSize + 140+edgeSize);
    		ctx.lineTo(col * cellSize + 140 + cellSize, row * cellSize + 140);
    		ctx.lineTo(col * cellSize + 140, row * cellSize + 140);
    		ctx.closePath();
    		//ctx.stroke();
      ctx.fill();

      //**left edge
		  ctx.lineWidth = "1";
		  ctx.fillStyle = unitColor2;
		  ctx.beginPath();
			ctx.moveTo(col * cellSize + 140, row * cellSize + 140);
			ctx.lineTo(col * cellSize + 140+edgeSize, row * cellSize + 140+edgeSize);
			ctx.lineTo(col * cellSize + 140+edgeSize,  row * cellSize + 140+ cellSize-edgeSize);
			ctx.lineTo(col * cellSize + 140,  row * cellSize + 140+ cellSize);
			ctx.lineTo(col * cellSize + 140, row * cellSize + 140);
			ctx.closePath();
			//ctx.stroke();
			ctx.fill();

			//**bottom edge
			  ctx.lineWidth = "1";
			  ctx.fillStyle = unitColor4;
			  ctx.beginPath();
				ctx.moveTo(col * cellSize + 140, row * cellSize + 140+ cellSize);
				ctx.lineTo(col * cellSize + 140+edgeSize, row * cellSize + 140+ cellSize-edgeSize);
				ctx.lineTo(col * cellSize + 140+ cellSize-edgeSize,  row * cellSize + 140+ cellSize-edgeSize);
				ctx.lineTo(col * cellSize + 140+ cellSize,  row * cellSize + 140+ cellSize);
				ctx.lineTo(col * cellSize + 140, row * cellSize + 140+ cellSize);
				ctx.closePath();
				//ctx.stroke();
				ctx.fill();

				//**right edge
				  ctx.lineWidth = "1";
				  ctx.fillStyle = unitColor3;
				  ctx.beginPath();
					ctx.moveTo(col * cellSize + 140+ cellSize, row * cellSize + 140+ cellSize);
					ctx.lineTo(col * cellSize + 140+ cellSize-edgeSize, row * cellSize + 140+ cellSize-edgeSize);
					ctx.lineTo(col * cellSize + 140+ cellSize-edgeSize,  row * cellSize + 140+edgeSize);
					ctx.lineTo(col * cellSize + 140+ cellSize,  row * cellSize + 140);
					ctx.lineTo(col * cellSize + 140+ cellSize, row * cellSize + 140+ cellSize);
					ctx.closePath();
					//ctx.stroke();
					ctx.fill();


        checkCells(col,row);
        countColours();
        if(orderedColFlag==0){
          indexColorCurrent++;
          if(indexColorCurrent==colNo){indexColorCurrent=0;}}
        else if(orderedColFlag==1){
        //console.log("1:"+" indexColorCurrent="+indexColorCurrent);
        //console.log("1:"+" noOfEachCol="+noOfEachCol);
          do{indexColorCurrent++;
          //console.log("2:"+" indexColorCurrent="+indexColorCurrent);
          if(indexColorCurrent==colNo){indexColorCurrent=0;}}
          while(noOfEachCol[indexColorCurrent]==0);
          //console.log("4:"+" indexColorCurrent="+indexColorCurrent);
          }
        else if(orderedColFlag==2){
          var dumChoose = Math.floor(Math.random()*colNo);
          indexColorCurrent = dumChoose;
        }
        else if(orderedColFlag==3){//orderedColFlag==3
          var dumChoose = Math.random();
          console.log("dumChoose="+dumChoose);
            for(i=0;i<colNo;i++){
              if(dumChoose<noOfEachColPcT[i]){indexColorCurrent=i;break;}
            }
          }
        else{//orderedColFlag==4 inverse ratio
          var dumChoose2 = Math.random();
          console.log("dumChoose2="+dumChoose2);
            for(i=0;i<colNo;i++){
              if(dumChoose2<noOfEachColPcT2[i]){indexColorCurrent=i;break;}
            }
        }
        //console.log("orderedColFlag="+orderedColFlag+" indexColorCurrent="+indexColorCurrent);
    }

function countColours(){

  var totalCells = gridSizeY*gridSizeX;

      for(i=0;i<colNo;i++){
        noOfEachCol[i]=0;
      }
        for (let row = 0; row < gridSizeY; row++) {
          for (let col = 0; col < gridSizeX; col++) {
            let dummyCC = board[col][row];
            noOfEachCol[dummyCC]++;
          }
        }
        console.log("noOfEachCol="+noOfEachCol);

//routine to try removing colours that have gone zero - not working yet
        if(false){//if(orderedColFlag==0||orderedColFlag==3){
          var dumColNo = colNo;
        for(i=0;i<dumColNo;i++){
          if(noOfEachCol[i]==0){
            colNo--;
            allColors[i]=allColors[cl];
            noOfEachCol[i]=noOfEachCol[cl];
          }
        }
        drawSingleCells();
        console.log("noOfEachCol="+noOfEachCol);}
  //end of zero removal routine

        for(i=0;i<colNo;i++){
          noOfEachColPc[i]=noOfEachCol[i]/totalCells;
          if(noOfEachColPc[i]==1){alert("GAME COMPLETED!\nYOU WIN!\n\n'I am glad to see you well, Horatio!'");
          gameEndFlag=true;}
        }
        //console.log("noOfEachColPc="+noOfEachColPc);

    noOfEachColPcT[0]=noOfEachColPc[0];
        for(i=1;i<colNo;i++){
          noOfEachColPcT[i]=noOfEachColPcT[i-1]+noOfEachColPc[i];
        }
        console.log("noOfEachColPcT="+noOfEachColPcT);
        var noOfEachColPcInv = new Array();
        var noOfEachColPcInvT = 0;
        for(i=0;i<colNo;i++){
          if(noOfEachCol[i]!=0){
          noOfEachColPcInv[i]=1/noOfEachCol[i];
          noOfEachColPcInvT = noOfEachColPcInvT + noOfEachColPcInv[i];
          }
          else{
          noOfEachColPcInv[i]=0;}
        }

        for(i=0;i<colNo;i++){
            noOfEachColPcInv[i]=noOfEachColPcInv[i]/noOfEachColPcInvT;
        }
        console.log("noOfEachColPcInv="+noOfEachColPcInv);
            noOfEachColPcT2[0]=noOfEachColPcInv[0];
                for(i=1;i<colNo;i++){
                  noOfEachColPcT2[i]=noOfEachColPcT2[i-1]+noOfEachColPcInv[i];
                }
                console.log("noOfEachColPcT2="+noOfEachColPcT2);

    }

    // Draw background boxes with checkerboard colors
    function drawFilledboard2() {
      for (let row = 0; row < gridSizeX; row++) {
        for (let col = 0; col < gridSizeY; col++) {
          let boxNow = board[col][row];
          if(boxNow == 0){
          ctx.fillStyle = "Black";}
          else{
          ctx.fillStyle = "White";}
          //ctx.fillRect(col * cellSize+offSet, row * cellSize+offSet, cellSize, cellSize);
          ctx.beginPath();
          ctx.arc(col * cellSize+140+cellSize/2, row * cellSize+140+cellSize/2, cellSize/3+1, 0, Math.PI*2);
          ctx.fill();
          ctx.closePath();
          if(boxNow == 1){
          ctx.fillStyle = "Black";}
          else{
          ctx.fillStyle = "White";}
          //ctx.fillRect(col * cellSize+offSet, row * cellSize+offSet, cellSize, cellSize);
          ctx.beginPath();
          ctx.arc(col * cellSize+140+cellSize/2, row * cellSize+140+cellSize/2, cellSize/3, 0, Math.PI*2);
          ctx.fill();
          ctx.closePath();
        }
      }
    }

    // Draw single cell
    function removeSingleCells(x0,y0) {

      let col = x0;
      let row = y0;

          var colDummy = col;
          //var color = allColors[colDummy];
          ctx.beginPath();
          ctx.fillStyle = "Black";//color
          ctx.fillRect(col * cellSize + 140, row * cellSize + 140, cellSize, cellSize);
          ctx.closePath();
        }

// Draw the grid lines
function drawGrid() {
  for (let i = 0; i <= gridSizeX; i++) {
    ctx.beginPath();
    ctx.strokeStyle = "Black"; //"White";
    ctx.lineWidth = (i < 1 || i > 9) ? 4 : 1;//(i % 2 === 0) ? 4 : 1;//(i % 3 === 0) ? 4 : 1;
    ctx.moveTo(i * cellSize+140, 0+140);
    ctx.lineTo(i * cellSize+140, canvasSizeY+140);
    ctx.stroke();
    ctx.closePath();
  }

for (let i = 0; i <= gridSizeY; i++) {
    ctx.beginPath();
    ctx.strokeStyle = "Black"; //"White";
    ctx.lineWidth = (i < 1 || i > 9) ? 4 : 1;//(i == 2 || i == 0 || i == 8 || i == 6) ? 4 : 1;//(i < 2 || i > 6) ? 4 : 1;
    ctx.moveTo(0+140, i * cellSize+140);
    ctx.lineTo(canvasSizeX+140, i * cellSize+140);
    ctx.stroke();
    ctx.closePath();
  }
}
var letArray = ["A","B","C","D","E","F","G","H","I","J"];
// Draw the coordinates
function drawCoords() {
  for (let i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.font = "bold 36px Arial";
    ctx.fillStyle = "Yellow";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = "4";
    //var coordX = +i+1;
    var coordX = letArray[i];
    //coordX = i;
    //console.log("x"+i);
    ctx.fillText(""+ coordX, i * cellSize+100+cellSize,  cellSize+40, 150);
    ctx.fillText(""+ coordX, i * cellSize+100+cellSize,  11*cellSize+85, 150);
    //ctx.fillText("X", i * cellSize + cellSize / 2+140, 1 * cellSize + cellSize / 2+140);
    ctx.closePath();
  }

  for (let i = 0; i < 10; i++) {
      ctx.beginPath();
      ctx.font = "bold 36px Arial";
      ctx.fillStyle = "Yellow";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.lineWidth = "4";
      var coordX = i;//use +9-i; to count down from top
      //console.log("x"+i);
      ctx.fillText(""+ coordX, 120,  i*cellSize+185, 150);
      ctx.fillText(""+ coordX, 11 * cellSize+80,  i*cellSize+185, 150);
      //ctx.fillText("X", i * cellSize + cellSize / 2+140, 1 * cellSize + cellSize / 2+140);
      ctx.closePath();
    }
}

// Write numbers with 40% chance of displaying each
/*
function drawNumbers()
  ctx.font = "40px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "black";

  for (let row = 0; row < gridSizeY; row++) {
    for (let col = 0; col < gridSizeX; col++) {
      const num = board[row][col];
      if (num !== 0 && Math.random() < 0.4) { // 40% chance to display
        ctx.fillText(num, col * cellSize + cellSize / 2+140, row * cellSize + cellSize / 2+140);
        board50pc[row][col] = 1;
      }
    }
  }
}
*/
function rerandomNumbersAll() {
  drawCheckerboard();
  drawGrid();
  ctx.font = "40px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "black";
/*
  for (let row = 0; row < gridSizeY; row++) {
    for (let col = 0; col < gridSizeX; col++) {
      const num = board[row][col];
      board50pc[row][col] = 0;
      if (num !== 0 && Math.random() < 0.5) { // 50% chance to display
        ctx.fillText(num, col * cellSize + cellSize / 2+140, row * cellSize + cellSize / 2+140);
        board50pc[row][col] = 1;
      }
    }
  }*/
}

function rerandomNumbers() {
  drawCheckerboard();
  drawGrid();
  ctx.font = "40px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "black";
  for (let row = 0; row < gridSizeY; row++) {
    for (let col = 0; col < gridSizeX; col++) {
      const num = board[row][col];
      board50pc[row][col] = 0;
      if (num !== 0 && Math.random() < 0.5) { // 50% chance to display
        ctx.fillText(num, col * cellSize + cellSize / 2+140, row * cellSize + cellSize / 2+140);
        board50pc[row][col] = 1;
      }
    }
  }
}

function redrawNumbers() {
  //console.log(""+board50pc);
  drawCheckerboard();
  drawGrid();
  ctx.font = "40px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "black";

  for (let row = 0; row < gridSizeY; row++) {
    for (let col = 0; col < gridSizeX; col++) {
      const num = board[row][col];
      if (board50pc[row][col] == 1) { // 50% chance to display
        ctx.fillText(num, col * cellSize + cellSize / 2+140, row * cellSize + cellSize / 2+140);
        //board50pc[row][col] = 1;
      }
    }
  }
}

// Write numbers on the canvas
function drawNumbersAll2() {
  ctx.font = "40px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  //ctx.fillStyle = "Red";
  ctx.globalAlpha = 0.5;
  for (let row = 0; row < gridSizeY; row++) {
    for (let col = 0; col < gridSizeX; col++) {
      const num = board[row][col];
      if (num !== 0) {
        ctx.fillText(num, col * cellSize + cellSize / 2+140, row * cellSize + cellSize / 2+140);
      }
    }
  }
  //ctx.fillStyle = "black";
  ctx.globalAlpha = 1;
}

// Write numbers on the canvas
function drawNumbersAll() {
  ctx.font = "40px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.globalAlpha = 0.1;
  for (let row = 0; row < gridSizeY; row++) {
    for (let col = 0; col < gridSizeX; col++) {
      const num = board[row][col];
      if (num !== 0) {
        ctx.fillText(num, col * cellSize + cellSize / 2+140, row * cellSize + cellSize / 2+140);
      }
    }
  }
  ctx.globalAlpha = 1;
}

// Sudoku validity check
function isSafe(board, row, col, num) {
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num || board[x][col] === num) return false;
  }
  const startRow = row - row % 3;
  const startCol = col - col % 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[startRow + i][startCol + j] === num) return false;
    }
  }
  return true;
}

// Backtracking Sudoku fill
function fillSudoku(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        shuffle(numbers);
        for (let num of numbers) {
          if (isSafe(board, row, col, num)) {
            board[row][col] = num;
            if (fillSudoku(board)) return true;
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

// Shuffle array
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// Extract rows, cols, blocks
function extractArrays(board) {
  for (let i = 0; i < 9; i++) {
    rows[i] = [...board[i]];
    cols[i] = board.map(row => row[i]);
  }

  for (let block = 0; block < 9; block++) {
    let br = Math.floor(block / 3) * 3;
    let bc = (block % 3) * 3;
    blocks[block] = [];
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        blocks[block].push(board[br + r][bc + c]);
      }
    }
  }
}

function initX2() {
  fillSudoku(board);
  extractArrays(board);
  drawCheckerboard();
  drawGrid();
  drawCoords();
  drawSingleCells();
  drawCurrentCells();
  //drawNumbers();

  // Debugging output
  //console.log("Rows:", rows);
  //console.log("Columns:", cols);
  //console.log("Blocks:", blocks);
}

//init();


function makeColor2(){
  var rndR = Math.floor(Math.random()*255);
  var rndG = Math.floor(Math.random()*255);
  var rndB = Math.floor(Math.random()*255);
  var rndRH = rndR.toString(16);
  var rndGH = rndG.toString(16);
  var rndBH = rndB.toString(16);
  if(Math.random()<0.5){}
  else{
  var dumCol = Math.ceil(Math.random()*18);
  switch (dumCol) {
  case 1://rndR
    rndGH="00";
    rndBH="00";
    break;
case 2://rndR
  rndGH="ff";
  rndBH="00";
  break;
case 3://rndR
rndGH="00";
rndBH="ff";
break;
case 4://rndR
rndGH="ff";
rndBH="ff";
break;
case 5://rndG
rndRH="00";
rndBH="00";
break;
case 6://rndG
rndRH="ff";
rndBH="00";
break;
case 7://rndG
rndRH="00";
rndBH="ff";
break;
case 8://rndG
rndRH="ff";
rndBH="ff";
break;
case 9://rndB
rndGH="00";
rndRH="00";
break;
case 10://rndB
rndGH="ff";
rndRH="00";
break;
case 11://rndB
rndGH="00";
rndRH="ff";
break;
case 12://rndB
rndGH="ff";
rndRH="ff";
break;
case 13://rndB
rndRH="ff";
break;
case 14://rndB
rndGH="ff";
break;
case 15://rndB
rndBH="ff";
break;
case 16://rndB
rndRH="00";
break;
case 17://rndB
rndGH="00";
break;
case 18://rndB
rndBH="00";
break;
  }}
  unitColor = "#"+rndRH+rndGH+rndBH;

  if(unitColor.length<6){
    var oldCol = unitColor;
    var colDigit1 = Math.floor(Math.random()*10);
    var colDigit2 = Math.floor(Math.random()*10);
    unitColor=""+unitColor+colDigit1+colDigit2;
    //alert("5: "+oldCol+" "+unitColor);
  }
  else if(unitColor.length<7){
    var oldCol = unitColor;
    var colDigit = Math.floor(Math.random()*10);
    unitColor=""+unitColor+colDigit;
    //alert("6: "+oldCol+" "+unitColor);
  }
  else{}
  return unitColor;
}

function makeUnitColor2(c){

    changeColor = "#333333";

  unitColor = c;

 	unitColor2 = "#"+shiftColor(unitColor, changeColor, 'add');
	unitColor1 = "#"+shiftColor(unitColor2, changeColor, 'add');
	unitColor3 = "#"+shiftColor(unitColor, changeColor, 'sub');
	unitColor4 = "#"+shiftColor(unitColor3, changeColor, 'sub');
  //boxColor = "#"+flipColor(unitColor3);
}
