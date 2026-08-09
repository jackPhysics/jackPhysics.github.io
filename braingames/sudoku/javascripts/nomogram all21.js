const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
var tableSize = 2200;
var offSet = 320;
canvas.width = tableSize;
canvas.height = tableSize;

  //down the top side
  ctx.beginPath();
  ctx.fillStyle = "Black";
  ctx.fillRect(0,0,tableSize,tableSize);
  ctx.closePath();

  var changeA = ["#010100","#010100","#010100","#010000", "#000100","#010000", "#000100","#010000", "#000100","#010000", "#000100","#010000", "#000100","#010100", "#010101"];

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

let gridSizeX = 10;
let gridSizeY = 5;
const gameSize = gridSizeX * gridSizeY;
let gameDone = 0;//how much of game has been completed
let gamePc = 0;//percentage of game completed
const cellSize = 80; // Doubled from 50 to 100
const canvasSize = gridSizeY * cellSize;
const canvasSizeX = gridSizeX * cellSize;
const canvasSizeY = gridSizeY * cellSize;

const fillChance = Math.round((Math.random() * 10 + Math.random() * 10 + Math.random() * 20 + 35)) / 100;
console.log("fillChance=" + fillChance);

const wholeBoard = Array.from(
  { length: gridSizeX * gridSizeY },
  () => Math.random() < fillChance ? 1 : 0
);

// Each inner array is one horizontal row
const rows = Array.from(
  { length: gridSizeX },
  (_, row) => wholeBoard.slice(
    row * gridSizeY,
    (row + 1) * gridSizeY
  )
);

// Each inner array is one vertical column
const columns = Array.from(
  { length: gridSizeY },
  (_, column) => Array.from(
    { length: gridSizeX },
    (_, row) => wholeBoard[row * gridSizeY + column]
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
const oddBlockColors = ["#ffff99", "#ffcc66"]; // yellow and orange
const evenBlockColors = ["#ccff99", "#66cc66"]; // lime and leaf-green

// Draw background boxes with checkerboard colors
function drawCheckerboard() {
  for (let row = 0; row < gridSizeY; row++) {
    for (let col = 0; col < gridSizeX; col++) {
      const blockIndex = Math.floor(row / 5) * 5 + Math.floor(col / 5);
      const isOddBlock = blockIndex % 2 !== 0;
      const colorSet = isOddBlock ? oddBlockColors : evenBlockColors;
      const color = colorSet[(row + col) % 2];
      ctx.fillStyle = color;
      ctx.fillRect(col * cellSize+offSet, row * cellSize+offSet, cellSize, cellSize);
    }
  }
}

// Draw background boxes with checkerboard colors
function drawFilledboard() {
  for (let row = 0; row < gridSizeY; row++) {
    for (let col = 0; col < gridSizeX; col++) {
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
    + "%.\n You win if % completed > game level (and zero mistakes!)",offSet/2, gridSizeY * cellSize+offSet*1.5);
  ctx.stroke();
  ctx.closePath();
  document.getElementById("percentage").innerHTML = "" + gamePc + "% completed; game level is " + fillChRnd
    + "%.<br> You win if % completed > game level (and zero mistakes!)";
}

// Draw the grid lines
function drawGrid() {
  for (let i = 0; i <= gridSizeX; i++) {
    ctx.beginPath();
    ctx.lineWidth = (i % 5 === 0) ? 4 : 1;
    ctx.moveTo(i * cellSize + offSet, 0 + offSet);
    ctx.lineTo(i * cellSize + offSet, canvasSizeY + offSet);
    ctx.stroke();
  }

  for (let i = 0; i <= gridSizeY; i++) {
    ctx.beginPath();
    ctx.lineWidth = (i % 5 === 0) ? 4 : 1;
    ctx.moveTo(0+offSet, i * cellSize+offSet);
    ctx.lineTo(canvasSizeX+offSet, i * cellSize+offSet);
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
