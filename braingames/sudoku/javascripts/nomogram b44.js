const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
var tableSize = 2200;
var offSet = 320;
canvas.width = tableSize;
canvas.height = tableSize;
var allColors = new Array();
var colorCurrent = "White";

  //down the top side
  ctx.beginPath();
  ctx.fillStyle = "Black";
  ctx.fillRect(0,0,tableSize,tableSize);
  ctx.closePath();

  var changeA = ["#010100","#010100","#010100","#010000", "#000100","#010000", "#000100","#010000", "#000100","#010000", "#000100","#010000", "#000100","#010100", "#010101"];

    //black and white removed
  const htmlColorHex = [ "#F0F8FF", "#FAEBD7", "#00FFFF", "#7FFFD4", "#F0FFFF", "#F5F5DC", "#FFE4C4", "#FFEBCD", "#0000FF", "#8A2BE2", "#A52A2A", "#DEB887", "#5F9EA0", "#7FFF00", "#D2691E", "#FF7F50", "#6495ED", "#FFF8DC", "#DC143C", "#00FFFF", "#00008B", "#008B8B", "#B8860B", "#A9A9A9", "#006400", "#A9A9A9", "#BDB76B", "#8B008B", "#556B2F", "#FF8C00", "#9932CC", "#8B0000", "#E9967A", "#8FBC8F", "#483D8B", "#2F4F4F", "#2F4F4F", "#00CED1", "#9400D3", "#FF1493", "#00BFFF", "#696969", "#696969", "#1E90FF", "#B22222", "#FFFAF0", "#228B22", "#FF00FF", "#DCDCDC", "#F8F8FF", "#FFD700", "#DAA520", "#808080", "#008000", "#ADFF2F", "#808080", "#F0FFF0", "#FF69B4", "#CD5C5C", "#4B0082", "#FFFFF0", "#F0E68C", "#E6E6FA", "#FFF0F5", "#7CFC00", "#FFFACD", "#ADD8E6", "#F08080", "#E0FFFF", "#FAFAD2", "#D3D3D3", "#90EE90", "#D3D3D3", "#FFB6C1", "#FFA07A", "#20B2AA", "#87CEFA", "#778899", "#778899", "#B0C4DE", "#FFFFE0", "#00FF00", "#32CD32", "#FAF0E6", "#FF00FF", "#800000", "#66CDAA", "#0000CD", "#BA55D3", "#9370DB", "#3CB371", "#7B68EE", "#00FA9A", "#48D1CC", "#C71585", "#191970", "#F5FFFA", "#FFE4E1", "#FFE4B5", "#FFDEAD", "#000080", "#FDF5E6", "#808000", "#6B8E23", "#FFA500", "#FF4500", "#DA70D6", "#EEE8AA", "#98FB98", "#AFEEEE", "#DB7093", "#FFEFD5", "#FFDAB9", "#CD853F", "#FFC0CB", "#DDA0DD", "#B0E0E6", "#800080", "#663399", "#FF0000", "#BC8F8F", "#4169E1", "#8B4513", "#FA8072", "#F4A460", "#2E8B57", "#FFF5EE", "#A0522D", "#C0C0C0", "#87CEEB", "#6A5ACD", "#708090", "#708090", "#FFFAFA", "#00FF7F", "#4682B4", "#D2B48C", "#008080", "#D8BFD8", "#FF6347", "#40E0D0", "#EE82EE", "#F5DEB3", "#F5F5F5", "#FFFF00", "#9ACD32" ];

  var colrSpecOrder = ["#FFFFF0", "#FFFFE0", "#FFFF00", "#FFFAFA", "#FFFAF0", "#FFFACD", "#FFF8DC", "#FFF5EE", "#FFF0F5", "#FFEFD5", "#FFEBCD", "#FFE4E1", "#FFE4C4", "#FFE4B5", "#FFDEAD", "#FFDAB9", "#FFD700", "#FFC0CB", "#FFB6C1", "#FFA500", "#FFA07A", "#FF8C00", "#FF7F50", "#FF69B4", "#FF6347", "#FF4500", "#FF1493", "#FF00FF", "#FF00FF", "#FF0000", "#FDF5E6", "#FAFAD2", "#FAF0E6", "#FAEBD7", "#FA8072", "#F8F8FF", "#F5FFFA", "#F5F5F5", "#F5F5DC", "#F5DEB3", "#F4A460", "#F0FFFF", "#F0FFF0", "#F0F8FF", "#F0E68C", "#F08080", "#EEE8AA", "#EE82EE", "#E9967A", "#E6E6FA", "#E0FFFF", "#DEB887", "#DDA0DD", "#DCDCDC", "#DC143C", "#DB7093", "#DAA520", "#DA70D6", "#D8BFD8", "#D3D3D3", "#D3D3D3", "#D2B48C", "#D2691E", "#CD853F", "#CD5C5C", "#C71585", "#C0C0C0", "#BDB76B", "#BC8F8F", "#BA55D3", "#B8860B", "#B22222", "#B0E0E6", "#B0C4DE", "#AFEEEE", "#ADFF2F", "#ADD8E6", "#A9A9A9", "#A9A9A9", "#A52A2A", "#A0522D", "#9ACD32", "#9932CC", "#98FB98", "#9400D3", "#9370DB", "#90EE90", "#8FBC8F", "#8B4513", "#8B008B", "#8B0000", "#8A2BE2", "#87CEFA", "#87CEEB", "#808080", "#808080", "#808000", "#800080", "#800000", "#7FFFD4", "#7FFF00", "#7CFC00", "#7B68EE", "#778899", "#778899", "#708090", "#708090", "#6B8E23", "#6A5ACD", "#696969", "#696969", "#66CDAA", "#663399", "#6495ED", "#5F9EA0", "#556B2F", "#4B0082", "#48D1CC", "#483D8B", "#4682B4", "#4169E1", "#40E0D0", "#3CB371", "#32CD32", "#2F4F4F", "#2F4F4F", "#2E8B57", "#228B22", "#20B2AA", "#1E90FF", "#191970", "#00FFFF", "#00FFFF", "#00FF7F", "#00FF00", "#00FA9A", "#00CED1", "#00BFFF", "#008B8B", "#008080", "#008000", "#006400", "#0000FF", "#0000CD", "#00008B", "#000080"];


  var colrSpecOrderBU = ["#FFFFF0", "#FFFFE0", "#FFFF00", "#FFFAFA", "#FFFAF0", "#FFFACD", "#FFF8DC", "#FFF5EE", "#FFF0F5", "#FFEFD5", "#FFEBCD", "#FFE4E1", "#FFE4C4", "#FFE4B5", "#FFDEAD", "#FFDAB9", "#FFD700", "#FFC0CB", "#FFB6C1", "#FFA500", "#FFA07A", "#FF8C00", "#FF7F50", "#FF69B4", "#FF6347", "#FF4500", "#FF1493", "#FF00FF", "#FF00FF", "#FF0000", "#FDF5E6", "#FAFAD2", "#FAF0E6", "#FAEBD7", "#FA8072", "#F8F8FF", "#F5FFFA", "#F5F5F5", "#F5F5DC", "#F5DEB3", "#F4A460", "#F0FFFF", "#F0FFF0", "#F0F8FF", "#F0E68C", "#F08080", "#EEE8AA", "#EE82EE", "#E9967A", "#E6E6FA", "#E0FFFF", "#DEB887", "#DDA0DD", "#DCDCDC", "#DC143C", "#DB7093", "#DAA520", "#DA70D6", "#D8BFD8", "#D3D3D3", "#D3D3D3", "#D2B48C", "#D2691E", "#CD853F", "#CD5C5C", "#C71585", "#C0C0C0", "#BDB76B", "#BC8F8F", "#BA55D3", "#B8860B", "#B22222", "#B0E0E6", "#B0C4DE", "#AFEEEE", "#ADFF2F", "#ADD8E6", "#A9A9A9", "#A9A9A9", "#A52A2A", "#A0522D", "#9ACD32", "#9932CC", "#98FB98", "#9400D3", "#9370DB", "#90EE90", "#8FBC8F", "#8B4513", "#8B008B", "#8B0000", "#8A2BE2", "#87CEFA", "#87CEEB", "#808080", "#808080", "#808000", "#800080", "#800000", "#7FFFD4", "#7FFF00", "#7CFC00", "#7B68EE", "#778899", "#778899", "#708090", "#708090", "#6B8E23", "#6A5ACD", "#696969", "#696969", "#66CDAA", "#663399", "#6495ED", "#5F9EA0", "#556B2F", "#4B0082", "#48D1CC", "#483D8B", "#4682B4", "#4169E1", "#40E0D0", "#3CB371", "#32CD32", "#2F4F4F", "#2F4F4F", "#2E8B57", "#228B22", "#20B2AA", "#1E90FF", "#191970", "#00FFFF", "#00FFFF", "#00FF7F", "#00FF00", "#00FA9A", "#00CED1", "#00BFFF", "#008B8B", "#008080", "#008000", "#006400", "#0000FF", "#0000CD", "#00008B", "#000080"]

  var colrSpecLen = colrSpecOrder.length;
  const colNo = 2;
  var colJump = Math.floor(colrSpecLen / colNo);


  if(true){
    var colorNowH = "Green";//col2Hex(baseColor);
    for(tx=0;tx<10000;tx++){//extra colours
      var dirColor = "add";
      if(Math.random()<0.45){dirColor="sub"}
      var randColChange1 = Math.floor(Math.random()*changeA.length);
      var randColChange2 = changeA[randColChange1];
      /*
      if(Math.random()<0.25){
        randColChange2 = "#010000";}
      else if(Math.random()<0.3333){
        randColChange2 = "#000100";}
      else if(Math.random()<1.5){
        randColChange2 = "#000001";}
      else{
        randColChange2 = "#010101";}
      */
      colorNow = shiftColor(colorNowH, randColChange2, dirColor);
      colorNowH = colorNow;
      colorNow = "#"+colorNow;
        var texWd_x = 0 +Math.round(Math.random()*(tableSize));
        var texWd_y = 0 +Math.round(Math.random()*(tableSize));
        //var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
        //var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
      ctx.fillStyle = colorNow;
    ctx.beginPath();
    ctx.globalAlpha = 0.1;
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

let gridSizeX = 20;
let gridSizeY = 20;
var changeColor = "#333333";
const gameSize = gridSizeX * gridSizeY;
let gameDone = 0;//how much of game has been completed
let gamePc = 0;//percentage of game completed
const cellSize = 80; // Doubled from 50 to 100
const canvasSize = gridSizeX * cellSize;

//holds what user has clicked/filled
let board = Array.from({ length: gridSizeX }, () => Array(gridSizeY).fill(2));//2=empty; 0=no; 1=yes
//holds the real picture
//let board2 = Array.from({ length: gridSizeX }, () => Array(gridSizeY).fill(0));//holds if num displayed

// Arrays to hold rows, columns, and 3x3 blocks
//let rows = Array.from({ length: gridSizeY }, () => []);
//let cols = Array.from({ length: gridSizeX }, () => []);

const fillChance = Math.round((Math.random() * 20 + Math.random() * 20 + Math.random() * 20 + 35)) / 100;
console.log("fillChance=" + fillChance);

const wholeBoard = Array.from(
  { length: gridSizeX * gridSizeY },
  () => Math.random() < fillChance ? 1 : 0
);

// Each inner array is one horizontal row
const rows = Array.from(
  { length: gridSizeY },
  (_, row) => wholeBoard.slice(
    row * gridSizeX,
    (row + 1) * gridSizeX
  )
);

// Each inner array is one vertical column
const columns = Array.from(
  { length: gridSizeX },
  (_, column) => Array.from(
    { length: gridSizeY },
    (_, row) => wholeBoard[row * gridSizeX + column]
  )
);


// Count consecutive groups of 1s in a single line
function countConsecutiveOnes(line) {
  const groups = [];
  let count = 0;

  for (const cell of line) {
    if (cell === 1) {
      count++;
    } else if (count > 0) {
      groups.push(count);
      count = 0;
    }
  }

  if (count > 0) {
    groups.push(count);
  }

  return groups;
}

// Create the two new irregular 2D arrays
const rowGroups = rows.map(countConsecutiveOnes);
const columnGroups = columns.map(countConsecutiveOnes);

const reversedColumnGroups = columnGroups.map(
  column => [...column].reverse()
);

const reversedRowGroups = rowGroups.map(
  column => [...column].reverse()
);

console.log("Whole board:", wholeBoard);
console.log("Rows:", rows);
console.log("Columns:", columns);
console.log("Consecutive 1s in rows:", rowGroups);
console.log("Consecutive 1s in columns:", columnGroups);

/*
let wholeBoard = new Array();
for (i = 0; i < gridSizeX * gridSizeY; i++){
  wholeBoard[i] = 0;
  if (Math.random() < 0.5) { wholeBoard[i] = 1; }
}
*/

/*
// Sudoku board
let board = Array.from({ length: gridSizeX }, () => Array(gridSizeX).fill(0));
let board50pc = Array.from({ length: gridSizeY }, () => Array(gridSizeY).fill(0));//holds if num displayed

// Arrays to hold rows, columns, and 3x3 blocks
let rows = Array.from({ length: gridSizeX }, () => []);
let cols = Array.from({ length: gridSizeY }, () => []);
let blocks = Array.from({ length: 4 }, () => []);
*/

// Define colors
//const oddBlockColors = ["#ffff99", "#ffcc66"]; // yellow and orange
//const evenBlockColors = ["#ccff99", "#66cc66"]; // lime and leaf-green

const oddBlockColors = ["#ffebcd", "#ffebcd"]; // yellow and orange
const evenBlockColors = ["#ffebcd", "#ffebcd"]; // lime and leaf-green

//colours from each section of spectrum
var colDummy2 = Math.floor(Math.random() * colJump);
for (cl = 0; cl < colNo; cl++){
  colDummy2 = colJump*cl+Math.floor(Math.random() * colJump);
  allColors[cl] = colrSpecOrder[colDummy2];//makeColor2();
}
allColors[colNo]="#ffebcd";

// Draw background boxes with checkerboard colors
function drawCheckerboard() {
  for (let row = 0; row < gridSizeX; row++) {
    for (let col = 0; col < gridSizeY; col++) {
      const blockIndex = Math.floor(row / 5) * 5 + Math.floor(col / 5);
      const isOddBlock = blockIndex % 2 !== 0;
      const colorSet = isOddBlock ? oddBlockColors : evenBlockColors;
      const color = colorSet[(row + col) % 2];
      ctx.fillStyle = color;
      ctx.fillRect(col * cellSize+offSet, row * cellSize+offSet, cellSize, cellSize);
    }
  }
}


// Draw single cell
function changeSingleCells(x0,y0) {

  let col = x0;
  let row = y0;

      //var colDummy = col;
      //var color = allColors[colDummy];
      ctx.beginPath();
      //2=empty; 0=no; 1=yes
      if(board[row][col]==2){
        colorCurrent = allColors[1];
        board[row][col]=1;
        gameDone++;
      }
      else if(board[row][col]==1){
        colorCurrent = allColors[0];
        board[row][col]=0;
      }
      else{
        colorCurrent = allColors[2];
        board[row][col]=2;
        gameDone--;
      }
      ctx.fillStyle = colorCurrent;
      //console.log("colorCurrent="+colorCurrent);
      ctx.fillRect(col * cellSize + 320, row * cellSize + 320, cellSize, cellSize);
      ctx.closePath();
      if(board[row][col]!=2){
        changeColor = "#333333";
      makeUnitColor2(colorCurrent);//(color);
     //**top edge
   	  ctx.lineWidth = "1";
   	  ctx.fillStyle = unitColor1;
   	  ctx.beginPath();
    		ctx.moveTo(col * cellSize + 320, row * cellSize + 320);
    		ctx.lineTo(col * cellSize + 320+edgeSize, row * cellSize + 320+edgeSize);
    		ctx.lineTo(col * cellSize + 320 + cellSize-edgeSize,  row * cellSize + 320+edgeSize);
    		ctx.lineTo(col * cellSize + 320 + cellSize, row * cellSize + 320);
    		ctx.lineTo(col * cellSize + 320, row * cellSize + 320);
    		ctx.closePath();
    		//ctx.stroke();
      ctx.fill();

      //**left edge
		  ctx.lineWidth = "1";
		  ctx.fillStyle = unitColor2;
		  ctx.beginPath();
			ctx.moveTo(col * cellSize + 320, row * cellSize + 320);
			ctx.lineTo(col * cellSize + 320+edgeSize, row * cellSize + 320+edgeSize);
			ctx.lineTo(col * cellSize + 320+edgeSize,  row * cellSize + 320+ cellSize-edgeSize);
			ctx.lineTo(col * cellSize + 320,  row * cellSize + 320+ cellSize);
			ctx.lineTo(col * cellSize + 320, row * cellSize + 320);
			ctx.closePath();
			//ctx.stroke();
			ctx.fill();

			//**bottom edge
			  ctx.lineWidth = "1";
			  ctx.fillStyle = unitColor4;
			  ctx.beginPath();
				ctx.moveTo(col * cellSize + 320, row * cellSize + 320+ cellSize);
				ctx.lineTo(col * cellSize + 320+edgeSize, row * cellSize + 320+ cellSize-edgeSize);
				ctx.lineTo(col * cellSize + 320+ cellSize-edgeSize,  row * cellSize + 320+ cellSize-edgeSize);
				ctx.lineTo(col * cellSize + 320+ cellSize,  row * cellSize + 320+ cellSize);
				ctx.lineTo(col * cellSize + 320, row * cellSize + 320+ cellSize);
				ctx.closePath();
				//ctx.stroke();
				ctx.fill();

				//**right edge
				  ctx.lineWidth = "1";
				  ctx.fillStyle = unitColor3;
				  ctx.beginPath();
					ctx.moveTo(col * cellSize + 320+ cellSize, row * cellSize + 320+ cellSize);
					ctx.lineTo(col * cellSize + 320+ cellSize-edgeSize, row * cellSize + 320+ cellSize-edgeSize);
					ctx.lineTo(col * cellSize + 320+ cellSize-edgeSize,  row * cellSize + 320+edgeSize);
					ctx.lineTo(col * cellSize + 320+ cellSize,  row * cellSize + 320);
					ctx.lineTo(col * cellSize + 320+ cellSize, row * cellSize + 320+ cellSize);
					ctx.closePath();
					//ctx.stroke();
					ctx.fill();}
    }

// Draw background boxes with checkerboard colors
function drawFilledboard() {
  for (let row = 0; row < gridSizeX; row++) {
    for (let col = 0; col < gridSizeY; col++) {
      let boxNow = wholeBoard[col * gridSizeY + row];
      if(boxNow == 1){
      ctx.fillStyle = "Gray";}
      else{
      ctx.fillStyle = "White";}
      ctx.fillRect(col * cellSize+offSet, row * cellSize+offSet, cellSize, cellSize);
    }
  }
  ctx.closePath();
  ctx.beginPath();
  ctx.font = "bold 36px Arial";
  ctx.fillStyle = "White";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  var fillChRnd = Math.round(fillChance * 100);
  ctx.fillText("" + gamePc + "% completed; game level is " + fillChRnd
    + "%.\n You win if % completed > game level (and zero mistakes!)",offSet/2, gridSizeX * cellSize+offSet*1.5);
  ctx.stroke();
  ctx.closePath();
  document.getElementById("percentage").innerHTML = "" + gamePc + "% completed; game level is " + fillChRnd
    + "%.<br> You win if % completed > game level (and zero mistakes!)";
}


// Draw background boxes with checkerboard colors
function drawFilledboard2() {
  for (let row = 0; row < gridSizeX; row++) {
    for (let col = 0; col < gridSizeY; col++) {
      let boxNow = wholeBoard[col * gridSizeY + row];
      if(boxNow == 0){
      ctx.fillStyle = "Black";}
      else{
      ctx.fillStyle = "White";}
      //ctx.fillRect(col * cellSize+offSet, row * cellSize+offSet, cellSize, cellSize);
      ctx.beginPath();
      ctx.arc(col * cellSize+offSet+cellSize/2, row * cellSize+offSet+cellSize/2, cellSize/3+1, 0, Math.PI*2);
      ctx.fill();
      ctx.closePath();
      if(boxNow == 1){
      ctx.fillStyle = "Black";}
      else{
      ctx.fillStyle = "White";}
      //ctx.fillRect(col * cellSize+offSet, row * cellSize+offSet, cellSize, cellSize);
      ctx.beginPath();
      ctx.arc(col * cellSize+offSet+cellSize/2, row * cellSize+offSet+cellSize/2, cellSize/3, 0, Math.PI*2);
      ctx.fill();
      ctx.closePath();
    }
  }
  ctx.closePath();
  ctx.beginPath();
  ctx.font = "bold 36px Arial";
  ctx.fillStyle = "White";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  var fillChRnd = Math.round(fillChance * 100);
  ctx.fillText("" + gamePc + "% completed; game level is " + fillChRnd
    + "%.\n You win if % completed > game level (and zero mistakes!)",offSet/2, gridSizeX * cellSize+offSet*1.5);
  ctx.stroke();
  ctx.closePath();
  document.getElementById("percentage").innerHTML = "" + gamePc + "% completed; game level is " + fillChRnd
    + "%.<br> You win if % completed > game level (and zero mistakes!)";
}


// Draw the grid lines
function drawGrid() {
  for (let i = 0; i <= gridSizeX; i++) {
    ctx.beginPath();
    ctx.lineWidth = (i % 5 === 0) ? 6 : 1;
    ctx.moveTo(i * cellSize + offSet, 0 + offSet);
    ctx.lineTo(i * cellSize + offSet, canvasSize + offSet);
    ctx.stroke();
  }

  for (let i = 0; i <= gridSizeY; i++) {
    ctx.beginPath();
    ctx.lineWidth = (i % 5 === 0) ? 6 : 1;
    ctx.moveTo(0+offSet, i * cellSize+offSet);
    ctx.lineTo(canvasSize+offSet, i * cellSize+offSet);
    ctx.stroke();
    ctx.closePath();
  }
}

// Find the nomogram code
function drawNumbers() {
  ctx.font = "40px Arial";
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "Yellow";

  for (let col = 0; col < gridSizeY; col++) {
    let num = columnGroups[col];
    if (num == "") { num = "0"; }
       ctx.beginPath();
        ctx.fillText(num, -0.5 * cellSize + cellSize / 2+offSet, col * cellSize + cellSize / 2+offSet);
        ctx.closePath();
  }

  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  for (let row = 0; row < gridSizeX; row++) {
       let num = reversedRowGroups[row];
       if (num == "") { num = "0"; }
       ctx.beginPath();
       ctx.translate(offSet+row * cellSize+ cellSize / 2, offSet);
       ctx.rotate(-Math.PI/2);
       ctx.translate(-offSet-row * cellSize- cellSize / 2, -offSet);
        ctx.fillText(num, row * cellSize + cellSize / 2+offSet, -0.5 * cellSize + cellSize / 2+offSet);
        ctx.translate(offSet+row * cellSize+ cellSize / 2, offSet);
        ctx.rotate(Math.PI/2);
        ctx.translate(-offSet-row * cellSize- cellSize / 2, -offSet);
        ctx.closePath();
  }
}

/*
function drawNomoCode() {
    ctx.beginPath();
    ctx.font = "bold 42px Arial";
    ctx.fillStyle = "White";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = "4";
    ctx.fillText("B:"+blackPegs+" W:"+whitePegs, leftMargin/2,  (turnNumbRow-2)*cellSize+205, 250);
    ctx.closePath();
    if(winFlag){
        ctx.beginPath();
        ctx.font = "bold 42px Arial";
        ctx.fillStyle = "Yellow";
        ctx.textAlign = "left";
        ctx.textBaseline = "centre";
        ctx.lineWidth = "3";
        for(w=0;w<noOfColumns;w++){
          if(codeArray[w]=="-"){
            ctx.strokeStyle = "black";
            ctx.strokeRect(w * cellSize+leftMargin+10, (turnNumbRow-1)*cellSize+205-35, 60, 60);
            //ctx.stroke();
          }
          else{
            ctx.fillStyle = ""+codeArray[w];
            ctx.fillRect(w * cellSize+leftMargin+10, (turnNumbRow-1)*cellSize+205-35, 60, 60);
          }
        }
        ctx.fillStyle = "Yellow";
        ctx.fillRect(leftMargin, (turnNumbRow)*cellSize+205-40, noOfColumns*80, 80)
        ctx.fillStyle = "Black";
        ctx.fillText(""+codeArray, leftMargin,  (turnNumbRow)*cellSize+205, noOfColumns*80);
        ctx.closePath();
        if(turnNumbRow>gridSizeY){alert("Out of turns!\n"+codeArray);}
        else{
        alert("CODE CRACKED!\n"+codeArray);}
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

  for (let row = 0; row < gridSizeX; row++) {
    for (let col = 0; col < gridSizeY; col++) {
      const num = board[row][col];
      board50pc[row][col] = 0;
      if (num !== 0 && Math.random() < 0.5) { // 50% chance to display
        ctx.fillText(num, col * cellSize + cellSize / 2+offSet, row * cellSize + cellSize / 2+offSet);
        board50pc[row][col] = 1;
      }
    }
  }
}

function rerandomNumbers() {
  drawCheckerboard();
  drawGrid();
  ctx.font = "40px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "black";
  for (let row = 0; row < gridSizeX; row++) {
    for (let col = 0; col < gridSizeY; col++) {
      const num = board[row][col];
      board50pc[row][col] = 0;
      if (num !== 0 && Math.random() < 0.5) { // 50% chance to display
        ctx.fillText(num, col * cellSize + cellSize / 2+offSet, row * cellSize + cellSize / 2+offSet);
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

  for (let row = 0; row < gridSizeX; row++) {
    for (let col = 0; col < gridSizeY; col++) {
      const num = board[row][col];
      if (board50pc[row][col] == 1) { // 50% chance to display
        ctx.fillText(num, col * cellSize + cellSize / 2+offSet, row * cellSize + cellSize / 2+offSet);
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
  for (let row = 0; row < gridSizeX; row++) {
    for (let col = 0; col < gridSizeY; col++) {
      const num = board[row][col];
      if (num !== 0) {
        ctx.fillText(num, col * cellSize + cellSize / 2+offSet, row * cellSize + cellSize / 2+offSet);
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
  for (let row = 0; row < gridSizeX; row++) {
    for (let col = 0; col < gridSizeY; col++) {
      const num = board[row][col];
      if (num !== 0) {
        ctx.fillText(num, col * cellSize + cellSize / 2+offSet, row * cellSize + cellSize / 2+offSet);
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

// Extract rows, cols, blocks
function makePicture(board) {
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

function init() {
  //fillSudoku(board);
  //extractArrays(board);
  drawCheckerboard();
  drawGrid();
  drawNumbers();

  /*
  // Debugging output
  console.log("Rows:", rows);
  console.log("Columns:", cols);
  console.log("Blocks:", blocks);
  */
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
