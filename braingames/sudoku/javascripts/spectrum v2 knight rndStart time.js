const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
var allColors = new Array();
var colorCurrent = "White";

  //down the top side
  ctx.beginPath();
  ctx.fillStyle = "Black";
  ctx.fillRect(0,0,1218,1000);//1080
  ctx.closePath();

  var changeA = ["#010100","#010100","#010100","#010000", "#000100","#010000", "#000100","#010000", "#000100","#010000", "#000100","#010000", "#000100","#010100", "#010101"];

  //black and white removed
const htmlColorHex = [ "#F0F8FF", "#FAEBD7", "#00FFFF", "#7FFFD4", "#F0FFFF", "#F5F5DC", "#FFE4C4", "#FFEBCD", "#0000FF", "#8A2BE2", "#A52A2A", "#DEB887", "#5F9EA0", "#7FFF00", "#D2691E", "#FF7F50", "#6495ED", "#FFF8DC", "#DC143C", "#00FFFF", "#00008B", "#008B8B", "#B8860B", "#A9A9A9", "#006400", "#A9A9A9", "#BDB76B", "#8B008B", "#556B2F", "#FF8C00", "#9932CC", "#8B0000", "#E9967A", "#8FBC8F", "#483D8B", "#2F4F4F", "#2F4F4F", "#00CED1", "#9400D3", "#FF1493", "#00BFFF", "#696969", "#696969", "#1E90FF", "#B22222", "#FFFAF0", "#228B22", "#FF00FF", "#DCDCDC", "#F8F8FF", "#FFD700", "#DAA520", "#808080", "#008000", "#ADFF2F", "#808080", "#F0FFF0", "#FF69B4", "#CD5C5C", "#4B0082", "#FFFFF0", "#F0E68C", "#E6E6FA", "#FFF0F5", "#7CFC00", "#FFFACD", "#ADD8E6", "#F08080", "#E0FFFF", "#FAFAD2", "#D3D3D3", "#90EE90", "#D3D3D3", "#FFB6C1", "#FFA07A", "#20B2AA", "#87CEFA", "#778899", "#778899", "#B0C4DE", "#FFFFE0", "#00FF00", "#32CD32", "#FAF0E6", "#FF00FF", "#800000", "#66CDAA", "#0000CD", "#BA55D3", "#9370DB", "#3CB371", "#7B68EE", "#00FA9A", "#48D1CC", "#C71585", "#191970", "#F5FFFA", "#FFE4E1", "#FFE4B5", "#FFDEAD", "#000080", "#FDF5E6", "#808000", "#6B8E23", "#FFA500", "#FF4500", "#DA70D6", "#EEE8AA", "#98FB98", "#AFEEEE", "#DB7093", "#FFEFD5", "#FFDAB9", "#CD853F", "#FFC0CB", "#DDA0DD", "#B0E0E6", "#800080", "#663399", "#FF0000", "#BC8F8F", "#4169E1", "#8B4513", "#FA8072", "#F4A460", "#2E8B57", "#FFF5EE", "#A0522D", "#C0C0C0", "#87CEEB", "#6A5ACD", "#708090", "#708090", "#FFFAFA", "#00FF7F", "#4682B4", "#D2B48C", "#008080", "#D8BFD8", "#FF6347", "#40E0D0", "#EE82EE", "#F5DEB3", "#F5F5F5", "#FFFF00", "#9ACD32" ];

var colrSpecOrder = ["#FFFFF0", "#FFFFE0", "#FFFF00", "#FFFAFA", "#FFFAF0", "#FFFACD", "#FFF8DC", "#FFF5EE", "#FFF0F5", "#FFEFD5", "#FFEBCD", "#FFE4E1", "#FFE4C4", "#FFE4B5", "#FFDEAD", "#FFDAB9", "#FFD700", "#FFC0CB", "#FFB6C1", "#FFA500", "#FFA07A", "#FF8C00", "#FF7F50", "#FF69B4", "#FF6347", "#FF4500", "#FF1493", "#FF00FF", "#FF00FF", "#FF0000", "#FDF5E6", "#FAFAD2", "#FAF0E6", "#FAEBD7", "#FA8072", "#F8F8FF", "#F5FFFA", "#F5F5F5", "#F5F5DC", "#F5DEB3", "#F4A460", "#F0FFFF", "#F0FFF0", "#F0F8FF", "#F0E68C", "#F08080", "#EEE8AA", "#EE82EE", "#E9967A", "#E6E6FA", "#E0FFFF", "#DEB887", "#DDA0DD", "#DCDCDC", "#DC143C", "#DB7093", "#DAA520", "#DA70D6", "#D8BFD8", "#D3D3D3", "#D3D3D3", "#D2B48C", "#D2691E", "#CD853F", "#CD5C5C", "#C71585", "#C0C0C0", "#BDB76B", "#BC8F8F", "#BA55D3", "#B8860B", "#B22222", "#B0E0E6", "#B0C4DE", "#AFEEEE", "#ADFF2F", "#ADD8E6", "#A9A9A9", "#A9A9A9", "#A52A2A", "#A0522D", "#9ACD32", "#9932CC", "#98FB98", "#9400D3", "#9370DB", "#90EE90", "#8FBC8F", "#8B4513", "#8B008B", "#8B0000", "#8A2BE2", "#87CEFA", "#87CEEB", "#808080", "#808080", "#808000", "#800080", "#800000", "#7FFFD4", "#7FFF00", "#7CFC00", "#7B68EE", "#778899", "#778899", "#708090", "#708090", "#6B8E23", "#6A5ACD", "#696969", "#696969", "#66CDAA", "#663399", "#6495ED", "#5F9EA0", "#556B2F", "#4B0082", "#48D1CC", "#483D8B", "#4682B4", "#4169E1", "#40E0D0", "#3CB371", "#32CD32", "#2F4F4F", "#2F4F4F", "#2E8B57", "#228B22", "#20B2AA", "#1E90FF", "#191970", "#00FFFF", "#00FFFF", "#00FF7F", "#00FF00", "#00FA9A", "#00CED1", "#00BFFF", "#008B8B", "#008080", "#008000", "#006400", "#0000FF", "#0000CD", "#00008B", "#000080"];


var colrSpecOrderBU = ["#FFFFF0", "#FFFFE0", "#FFFF00", "#FFFAFA", "#FFFAF0", "#FFFACD", "#FFF8DC", "#FFF5EE", "#FFF0F5", "#FFEFD5", "#FFEBCD", "#FFE4E1", "#FFE4C4", "#FFE4B5", "#FFDEAD", "#FFDAB9", "#FFD700", "#FFC0CB", "#FFB6C1", "#FFA500", "#FFA07A", "#FF8C00", "#FF7F50", "#FF69B4", "#FF6347", "#FF4500", "#FF1493", "#FF00FF", "#FF00FF", "#FF0000", "#FDF5E6", "#FAFAD2", "#FAF0E6", "#FAEBD7", "#FA8072", "#F8F8FF", "#F5FFFA", "#F5F5F5", "#F5F5DC", "#F5DEB3", "#F4A460", "#F0FFFF", "#F0FFF0", "#F0F8FF", "#F0E68C", "#F08080", "#EEE8AA", "#EE82EE", "#E9967A", "#E6E6FA", "#E0FFFF", "#DEB887", "#DDA0DD", "#DCDCDC", "#DC143C", "#DB7093", "#DAA520", "#DA70D6", "#D8BFD8", "#D3D3D3", "#D3D3D3", "#D2B48C", "#D2691E", "#CD853F", "#CD5C5C", "#C71585", "#C0C0C0", "#BDB76B", "#BC8F8F", "#BA55D3", "#B8860B", "#B22222", "#B0E0E6", "#B0C4DE", "#AFEEEE", "#ADFF2F", "#ADD8E6", "#A9A9A9", "#A9A9A9", "#A52A2A", "#A0522D", "#9ACD32", "#9932CC", "#98FB98", "#9400D3", "#9370DB", "#90EE90", "#8FBC8F", "#8B4513", "#8B008B", "#8B0000", "#8A2BE2", "#87CEFA", "#87CEEB", "#808080", "#808080", "#808000", "#800080", "#800000", "#7FFFD4", "#7FFF00", "#7CFC00", "#7B68EE", "#778899", "#778899", "#708090", "#708090", "#6B8E23", "#6A5ACD", "#696969", "#696969", "#66CDAA", "#663399", "#6495ED", "#5F9EA0", "#556B2F", "#4B0082", "#48D1CC", "#483D8B", "#4682B4", "#4169E1", "#40E0D0", "#3CB371", "#32CD32", "#2F4F4F", "#2F4F4F", "#2E8B57", "#228B22", "#20B2AA", "#1E90FF", "#191970", "#00FFFF", "#00FFFF", "#00FF7F", "#00FF00", "#00FA9A", "#00CED1", "#00BFFF", "#008B8B", "#008080", "#008000", "#006400", "#0000FF", "#0000CD", "#00008B", "#000080"]

var colrSpecLen = colrSpecOrder.length;
const colNo = 3;
var colJump = Math.floor(colrSpecLen / colNo);

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

const gridSizeX = 8;
const gridSizeY = 8;
var edgeSize = 8;
var changeColor = "#333333";
var lineStage = 0;
var lineStepsX = new Array();
var lineStepsY = new Array();
var lineFlag = false;
var oldDotX = 0;
var oldDotY = 0;
var startTime = 0;
var nowTime = 0;
var spanTime = 0;
const cellSize = 80; // Doubled from 50 to 100
const canvasSizeX = gridSizeX * cellSize;
const canvasSizeY = gridSizeY * cellSize;

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

//completely random colours
/*
var colDummy2 = Math.floor(Math.random() * htmlColorHex.length);
for (cl = 0; cl < colNo; cl++){
  colDummy2 = Math.floor(Math.random() * htmlColorHex.length);
  allColors[cl] = htmlColorHex[colDummy2];//makeColor2();
}
*/
//colours from each section of spectrum
var colDummy2 = Math.floor(Math.random() * colJump);
for (cl = 0; cl < colNo; cl++){
  colDummy2 = colJump*cl+Math.floor(Math.random() * colJump);
  allColors[cl] = colrSpecOrder[colDummy2];//makeColor2();
}

// Draw background boxes with checkerboard colors
function drawCheckerboard() {
  for (let row = 0; row < gridSizeY; row++) {
    for (let col = 0; col < gridSizeX; col++) {

      var colDummy = Math.floor(Math.random() * colNo);
      var color = allColors[0];
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
}

// Draw single cells - all colours
function drawSingleCells() {
  for (let row = 0; row < 1; row++) {
    for (let col = 0; col < colNo; col++) {

      var colDummy = col;
      var color = allColors[colDummy];
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.fillRect((col+2) * cellSize + 140, row * cellSize + 20, cellSize, cellSize);
      ctx.closePath();
      makeUnitColor2(color);
     //**top edge
   	  ctx.lineWidth = "1";
   	  ctx.fillStyle = unitColor1;
   	  ctx.beginPath();
    		ctx.moveTo((col+2) * cellSize + 140, row * cellSize + 20);
    		ctx.lineTo((col+2) * cellSize + 140+edgeSize, row * cellSize + 20+edgeSize);
    		ctx.lineTo((col+2) * cellSize + 140 + cellSize-edgeSize,  row * cellSize + 20+edgeSize);
    		ctx.lineTo((col+2) * cellSize + 140 + cellSize, row * cellSize + 20);
    		ctx.lineTo((col+2) * cellSize + 140, row * cellSize + 20);
    		ctx.closePath();
    		//ctx.stroke();
      ctx.fill();

      //**left edge
		  ctx.lineWidth = "1";
		  ctx.fillStyle = unitColor2;
		  ctx.beginPath();
			ctx.moveTo((col+2) * cellSize + 140, row * cellSize + 20);
			ctx.lineTo((col+2) * cellSize + 140+edgeSize, row * cellSize + 20+edgeSize);
			ctx.lineTo((col+2) * cellSize + 140+edgeSize,  row * cellSize + 20+ cellSize-edgeSize);
			ctx.lineTo((col+2) * cellSize + 140,  row * cellSize + 20+ cellSize);
			ctx.lineTo((col+2) * cellSize + 140, row * cellSize + 20);
			ctx.closePath();
			//ctx.stroke();
			ctx.fill();

			//**bottom edge
			  ctx.lineWidth = "1";
			  ctx.fillStyle = unitColor4;
			  ctx.beginPath();
				ctx.moveTo((col+2) * cellSize + 140, row * cellSize + 20+ cellSize);
				ctx.lineTo((col+2) * cellSize + 140+edgeSize, row * cellSize + 20+ cellSize-edgeSize);
				ctx.lineTo((col+2) * cellSize + 140+ cellSize-edgeSize,  row * cellSize + 20+ cellSize-edgeSize);
				ctx.lineTo((col+2) * cellSize + 140+ cellSize,  row * cellSize + 20+ cellSize);
				ctx.lineTo((col+2) * cellSize + 140, row * cellSize + 20+ cellSize);
				ctx.closePath();
				//ctx.stroke();
				ctx.fill();

				//**right edge
				  ctx.lineWidth = "1";
				  ctx.fillStyle = unitColor3;
				  ctx.beginPath();
					ctx.moveTo((col+2) * cellSize + 140+ cellSize, row * cellSize + 20+ cellSize);
					ctx.lineTo((col+2) * cellSize + 140+ cellSize-edgeSize, row * cellSize + 20+ cellSize-edgeSize);
					ctx.lineTo((col+2) * cellSize + 140+ cellSize-edgeSize,  row * cellSize + 20+edgeSize);
					ctx.lineTo((col+2) * cellSize + 140+ cellSize,  row * cellSize + 20);
					ctx.lineTo((col+2) * cellSize + 140+ cellSize, row * cellSize + 20+ cellSize);
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
      var color = allColors[1];
      colorCurrent = color;
      console.log("colorCurrent="+colorCurrent);
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.fillRect(col * cellSize + 20, row * cellSize + 20, cellSize, cellSize);
      ctx.closePath();
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

function numberOfClicks(){
    let donePc = Math.floor(lineStage/64*100);
    nowTime = Date.now();
    spanTime = nowTime - startTime;
    var hmsTime = secondsToHms(spanTime);
      ctx.beginPath();
      ctx.fillStyle = "Black";
      ctx.fillRect(2 * cellSize, 0 * cellSize + 10, cellSize*6, cellSize);
      ctx.closePath();
      ctx.beginPath();
      ctx.fillStyle = "White";
      ctx.font = "48px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(""+lineStage,1 * cellSize + 140, 0 * cellSize + 50);
      ctx.fillText(""+donePc+"%",2.5 * cellSize + 140, 0 * cellSize + 50);
      ctx.fillText(""+hmsTime,5 * cellSize + 140, 0 * cellSize + 50);
      ctx.closePath();
}

// Draw single cell
function changeSingleCells(x0,y0,n) {

  let col = x0;
  let row = y0;
  let clrIndex = n;

  changeColor = "#333333";
      //var colDummy = col;
      //var color = allColors[colDummy];
      colorCurrent = allColors[clrIndex];
      ctx.beginPath();
      ctx.fillStyle = colorCurrent;
      console.log("colorCurrent="+colorCurrent);
      ctx.fillRect(col * cellSize + 140, row * cellSize + 140, cellSize, cellSize);
      ctx.closePath();
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
    ctx.lineWidth = (i < 1 || i > gridSizeX-1) ? 4 : 1;//(i % 2 === 0) ? 4 : 1;//(i % 3 === 0) ? 4 : 1;
    ctx.moveTo(i * cellSize+140, 0+140);
    ctx.lineTo(i * cellSize+140, canvasSizeY+140);
    ctx.stroke();
    ctx.closePath();
  }

for (let i = 0; i <= gridSizeY; i++) {
    ctx.beginPath();
    ctx.strokeStyle = "Black"; //"White";
    ctx.lineWidth = (i < 1 || i > gridSizeY-1) ? 4 : 1;//(i == 2 || i == 0 || i == 8 || i == 6) ? 4 : 1;//(i < 2 || i > 6) ? 4 : 1;
    ctx.moveTo(0+140, i * cellSize+140);
    ctx.lineTo(canvasSizeX+140, i * cellSize+140);
    ctx.stroke();
    ctx.closePath();
  }
}
var letArray = ["a","b","c","d","e","f","g","h","i","j"];
// Draw the coordinates
function drawCoords() {
  for (let i = 0; i < gridSizeX; i++) {
    ctx.beginPath();
    ctx.font = "bold 36px Arial";
    ctx.fillStyle = "Yellow";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = "4";
    //var coordX = +i+1;
    var coordX = letArray[i];
    //console.log("x"+i);
    ctx.fillText(""+ coordX, i * cellSize+100+cellSize,  cellSize+40, 150);
    ctx.fillText(""+ coordX, i * cellSize+100+cellSize,  (gridSizeY+1)*cellSize+85, 150);
    //ctx.fillText("X", i * cellSize + cellSize / 2+140, 1 * cellSize + cellSize / 2+140);
    ctx.closePath();
  }

  for (let i = 0; i < gridSizeY; i++) {
      ctx.beginPath();
      ctx.font = "bold 36px Arial";
      ctx.fillStyle = "Yellow";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.lineWidth = "4";
      var coordX = +gridSizeY-i;
      //console.log("x"+i);
      ctx.fillText(""+ coordX, 120,  i*cellSize+185, 150);
      ctx.fillText(""+ coordX, (gridSizeX+1) * cellSize+80,  i*cellSize+185, 150);
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
  console.log(""+board50pc);
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
/*
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
*/
function init() {
  //fillSudoku(board);
  //extractArrays(board);
  drawCheckerboard();
  drawGrid();
  drawCoords();
  //drawSingleCells();
  drawCurrentCells();

  let startX = Math.floor(Math.random()*gridSizeX);
  let startY = Math.floor(Math.random()*gridSizeY);
  changeSingleCells(startX,startY,2);
    oldDotX=startX;
    oldDotY=startY;
  lineFlag=true;
  lineStage++;
  //drawNumbers();

    startTime = Date.now();

  // Debugging output
  console.log("Rows:", rows);
  console.log("Columns:", cols);
  console.log("Blocks:", blocks);
}

init();


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

  unitColor = c;

 	unitColor2 = "#"+shiftColor(unitColor, changeColor, 'add');
	unitColor1 = "#"+shiftColor(unitColor2, changeColor, 'add');
	unitColor3 = "#"+shiftColor(unitColor, changeColor, 'sub');
	unitColor4 = "#"+shiftColor(unitColor3, changeColor, 'sub');
  //boxColor = "#"+flipColor(unitColor3);


}
