const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
var colorsDone = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,
  false,false,false,false,false,false,false,false,false,false,false,false,false,false];;//false=no colour, true = colour

  //down the background
  ctx.beginPath();
  ctx.fillStyle = "#999999";
  ctx.fillRect(0,0,1000,920);
  ctx.closePath();

  var changeA = ["#010100","#010100","#010100","#010000", "#000100","#010000", "#000100","#010000", "#000100","#010000", "#000100","#010000", "#000100","#010100", "#010101"];

    const colors = [
      "#ffff99",  // yellow
      "#ffd0db",  // pink
      "#add8e6",  // pale blue
      "#98fb98",  // pale green
      "#c0c0c0",  // silver
      "#d2b48c",  // light brown
      "#ff6666",  // red
      "#dda0dd",   // violet
      "#ddff00",  // yellow2
      "#ffb0bb",  // pink2
      "#9df8ff",  // pale blue2
      "#80ffdd",  // pale green2
      "#909090",  // silver2
      "#e3c57b",  // light brown2
      "#ee5555",  // red2
      "#ff90ff",  // violet2
      "#582C1D",  // Chocolate Fondant
      "#9DA59D",  // Aqua Gray
      "#B25E2C",  // Caramelized
      "#B3D6DE",   // Moonlight Haze
      "#E8B336"   // Golden Acacia
    ];

  if(true){//add patterns to the background
    var randCol1 = Math.floor(Math.random()*colors.length);
    var colorNowH = colors[randCol1];//"Green";//col2Hex(baseColor);
    for(tx=0;tx<1000;tx++){//extra colours
      var dirColor = "add";
      if(Math.random()<0.5){dirColor="sub"}
      var randColChange1 = Math.floor(Math.random()*changeA.length);
      var randColChange2 = changeA[randColChange1];
      //var randColChange2 = "#010000";
      colorNow = shiftColor(colorNowH, randColChange2, dirColor);
      colorNowH = colorNow;
      colorNow = "#"+colorNow;
        var texWd_x = 0 +Math.round(Math.random()*(1000));
        var texWd_y = 0 +Math.round(Math.random()*(1000));
        //var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
        //var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
      ctx.fillStyle = colorNow;
    ctx.beginPath();
    ctx.globalAlpha = 0.2;
    //different styles of patterning
    if(Math.random()<0.2){
    var randradius = Math.round(Math.random()*100)+1;}
    else if(Math.random()<0.2){
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

  const cols = 8;
  const rows = 7;
  const cellSize = 80;
  /*
  var wallsA0 = [0,0,0,0,0,0,0,0,0];
  var wallsA1 = [0,0,0,0,0,0,0,0,0];
  var wallsA2 = [0,0,0,0,0,0,0,0,0];
  var wallsA3 = [0,0,0,0,0,0,0,0,0];
  var wallsA4 = [0,0,0,0,0,0,0,0,0];
  var wallsA5 = [0,0,0,0,0,0,0,0,0];
  var wallsA6= [0,0,0,0,0,0,0,0,0];
  var wallsA7 = [0,0,0,0,0,0,0,0,0];
  var wallsA = [wallsA0,wallsA1,wallsA2,wallsA3,wallsA4,wallsA5,wallsA6,wallsA7];
  */
  var wallsA = Array.from({ length: (rows+1)*2+1 }, () => Array((cols+1)*2+1).fill(0));
  //var wallsA = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
  //[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
  /*
  for(r=0;r<rows+1;r++){
    for(c=0;c<cols+1;c++){
      wallsA[r][c]=0;
    }
  }
  */
  //const colorBtn = document.getElementById("colorBtn");
  //const displayBtn = document.getElementById("displayBtn");

  let grid;
  let dominoColors = [];
  let colorsOn = false;
  let showDots = true;

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  function generateDominoes() {
    const dominoes = [];
    for (let i = 0; i <= 6; i++) {
      for (let j = i; j <= 6; j++) {
        dominoes.push([i, j]);
      }
    }
    shuffle(dominoes);
    return dominoes;
  }

  function generateDominoPositions() {
    const used = Array.from({ length: rows }, () => Array(cols).fill(false));
    const dominoPositions = [];

    const inBounds = (r, c) => r >= 0 && r < rows && c >= 0 && c < cols;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (used[r][c]) continue;

        const directions = [
          [0, 1], // right
          [1, 0]  // down
        ];
        shuffle(directions);

        let placed = false;
        for (let [dr, dc] of directions) {
          const nr = r + dr, nc = c + dc;
          if (inBounds(nr, nc) && !used[nr][nc]) {
            used[r][c] = true;
            used[nr][nc] = true;
            dominoPositions.push([[r, c], [nr, nc]]);
            placed = true;
            break;
          }
        }

        if (!placed) {
          console.error("Failed to tile domino at:", r, c);
        }
      }
    }

    return dominoPositions;
  }

  function assignDominoesToGrid(dominoes, positions) {
    const g = Array.from({ length: rows }, () => Array(cols).fill(null));

    for (let i = 0; i < 28; i++) {
      const [[r1, c1], [r2, c2]] = positions[i];
      const [a, b] = dominoes[i];
      g[r1][c1] = { value: a, pair: b, other: [r2, c2], index: i };
      g[r2][c2] = { value: b, pair: a, other: [r1, c1], index: i };
    }

    //console.log("dominoes="+dominoes+" positions="+positions);
    return g;
  }

  function drawPips(value, x, y) {
    const pipRadius = 5;
    const centerX = x + cellSize / 2;
    const centerY = y + cellSize / 2;
    const offset = 20;

    const positions = {
      1: [[0, 0]],
      2: [[-offset, -offset], [offset, offset]],
      3: [[-offset, -offset], [0, 0], [offset, offset]],
      4: [[-offset, -offset], [offset, -offset], [-offset, offset], [offset, offset]],
      5: [[-offset, -offset], [offset, -offset], [0, 0], [-offset, offset], [offset, offset]],
      6: [[-offset, -offset], [offset, -offset], [-offset, offset], [offset, offset], [-offset, 0], [offset, 0]]
    };

    if (value === 0) return;

    ctx.fillStyle = "black";
    for (const [dx, dy] of positions[value]) {
      ctx.beginPath();
      ctx.arc(centerX + dx, centerY + dy, pipRadius, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  function drawNumber(value, x, y) {
    ctx.fillStyle = "black";
    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(value, x + cellSize / 2, y + cellSize / 2);
  }

  function drawDots(xd, yd){
        //var xd = xd*1.5*boardSize/4;
        //var yd = yd*1.5*boardSize/4;
            ctx.fillStyle = "Red";
            ctx.fillRect(xd-3, yd-3, 6, 6);
            console.log("xd="+xd+" yd="+yd);
  }

    function drawDots2(xd2, yd2){

      //var xd2 = xd2;
      //var yd2 = yd2*1.5*boardSize;

              //ctx.fillStyle = "Green";
              //ctx.fillRect(xd2-3, yd2-3, 6, 6);
              //console.log("new click:");
              //console.log("xd2="+xd2+" yd2="+yd2);

              var xWall = (xd2-180)%80;
              var yWall = (yd2-180)%80;
              var xWall2 = Math.round((xd2-160)/80);
              var yWall2 = Math.round((yd2-160)/80);
              var xWall2f = Math.floor((xd2-160)/80);
              var yWall2f = Math.floor((yd2-160)/80);
              var xWall2b = 0;
              var yWall2b = 0;
              if(xWall<60&&xWall>20){xWall2=xWall2f*2+1;xWall2b=0;}
              else{xWall2b=5000;xWall2=xWall2*2;}
              if(yWall<60&&yWall>20){yWall2=yWall2f*2+1;yWall2b=0;}
              else{yWall2b=5000;yWall2=yWall2*2;}
              //console.log("x %="+xWall+" y %="+yWall);
              //console.log("x /80r="+xWall2+" y /80r="+yWall2);
              //console.log("x /80f="+xWall2f+" y /80f="+yWall2f);
              //console.log("x centre="+xWall2b+" y centre="+yWall2b);

              if(xWall2b==5000&&yWall2b==5000){}
              else{
                if(xWall2b==5000){//horizontal wall
              if(wallsA[xWall2][yWall2]==0){//draw wall
                xWall2=(xWall2)/2;yWall2=(yWall2-1)/2;
              const x1 = xWall2 * cellSize +180, y1 = yWall2 * cellSize +180;
              ctx.beginPath();
              ctx.strokeStyle = "orange";
              ctx.lineWidth = 4;
              ctx.moveTo(x1, y1+2);
              ctx.lineTo(x1, y1+cellSize-2);
              ctx.stroke();
              ctx.closePath();
                xWall2=xWall2*2;yWall2=yWall2*2+1;
              wallsA[xWall2][yWall2]=1;}
            else{//wipe wall
              xWall2=(xWall2)/2;yWall2=(yWall2-1)/2;
            const x1 = xWall2 * cellSize +180, y1 = yWall2 * cellSize +180;
            ctx.beginPath();
            ctx.strokeStyle = "white";//to wipe out orange
            ctx.lineWidth = 4;
            ctx.moveTo(x1, y1+2);
            ctx.lineTo(x1, y1+cellSize-2);
            ctx.stroke();
            ctx.closePath();
            ctx.strokeStyle = "black";//draw
            ctx.lineWidth = 2;
            ctx.moveTo(x1, y1+2);
            ctx.lineTo(x1, y1+cellSize-2);
            ctx.stroke();
            ctx.closePath();
              xWall2=xWall2*2;yWall2=yWall2*2+1;
            wallsA[xWall2][yWall2]=0;}
            }
              else if(yWall2b==5000){//vertical wall
            if(wallsA[xWall2][yWall2]==0){
              xWall2=(xWall2-1)/2;yWall2=(yWall2)/2;
            const x1 = xWall2 * cellSize +180, y1 = yWall2 * cellSize +180;
            ctx.beginPath();
            ctx.strokeStyle = "orange";
            ctx.lineWidth = 4;
            ctx.moveTo(x1+2, y1);
            ctx.lineTo(x1+cellSize-2, y1);
            ctx.stroke();
            ctx.closePath();
            ctx.strokeStyle = "red";
              xWall2=xWall2*2+1;yWall2=yWall2*2;
            wallsA[xWall2][yWall2]=1;}
          else{
            xWall2=(xWall2-1)/2;yWall2=(yWall2)/2;
          const x1 = xWall2 * cellSize +180, y1 = yWall2 * cellSize +180;
          ctx.beginPath();
          ctx.strokeStyle = "white";//to wipe out orange
          ctx.lineWidth = 4;
          ctx.moveTo(x1+2, y1);
          ctx.lineTo(x1+cellSize-2, y1);
          ctx.stroke();
          ctx.closePath();
          ctx.strokeStyle = "black";//draw
          ctx.lineWidth = 2;
          ctx.moveTo(x1+2, y1);
          ctx.lineTo(x1+cellSize-2, y1);
          ctx.stroke();
          ctx.closePath();
            xWall2=xWall2*2+1;yWall2=yWall2*2;
          wallsA[xWall2][yWall2]=0;}}
            }
    }

  function drawGrid() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    const drawn = Array.from({ length: rows }, () => Array(cols).fill(false));

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (drawn[r][c]) continue;

        const cell = grid[r][c];
        const [r2, c2] = cell.other;
        const x1 = c * cellSize +180, y1 = r * cellSize +180;
        const x2 = c2 * cellSize +180, y2 = r2 * cellSize +180;

        const index = cell.index;
        //var index2 =
        var color = colorsOn ? dominoColors[index] : "#ffffff";
        //console.log("4:color-->"+index);
        if(!colorsOn&&colorsDone[index]){//if colors switched off but tile is colored
          color = dominoColors[index];
        //console.log("3:color-->"+index+" dominoColors[index]="+dominoColors[index]);
        }
        else{
          //let color = "#ffffff";
        }

        ctx.fillStyle = color;
        ctx.fillRect(x1, y1, cellSize, cellSize);
        ctx.fillRect(x2, y2, cellSize, cellSize);
        //console.log("x1="+x1+" y1="+y1);
        //console.log("x2="+x2+" y2="+y2);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.strokeRect(x1, y1, cellSize, cellSize);
        ctx.strokeRect(x2, y2, cellSize, cellSize);

        if (showDots) {
          drawPips(cell.value, x1, y1);
          drawPips(cell.pair, x2, y2);
        } else {
          drawNumber(cell.value, x1, y1);
          drawNumber(cell.pair, x2, y2);
        }

        drawn[r][c] = true;
        drawn[r2][c2] = true;
      }
    }
  }

  function oneColor(){
    var doneFlag = false;
    var doneCount=0;
    while(!doneFlag&&doneCount<10){//randomly look for uncoloured, try 10 times
      var goToTile = Math.floor(Math.random()*28);
      doneCount++;
      if(!colorsDone[goToTile]){//it's false
        colorsDone[goToTile] = true;
        //console.log("1:color-->"+goToTile);
        doneFlag=true;
        doneCount=0;
      }
    }
    if(doneCount==10){//if tried 10 times then colour next uncoloured
      doneCount=0;
      doneFlag = false;
      while(!doneFlag&&doneCount<28){
      if(!colorsDone[doneCount]){//it's false
        colorsDone[doneCount] = true;
        //console.log("2:color-->"+goToTile);
        doneFlag=true;
        doneCount=0;
      }
        doneCount++;
      }
    }
    drawGrid();
  }

  function toggleColors() {
    if (!colorsOn) {
      /*
      const startIndex = Math.floor(Math.random() * colors.length);
      dominoColors = Array.from({ length: 28 }, (_, i) =>
        colors[(startIndex + i) % colors.length]
      );
  */
      colorsOn = true;
    } else {
      colorsOn = false;
    }
    drawGrid();
  }


    function toggleColors2() {
      if (!colorsOn) {
        const startIndex = Math.floor(Math.random() * colors.length);
        dominoColors = Array.from({ length: 28 }, (_, i) =>
          colors[(startIndex + i) % colors.length]
        );
        colorsOn = false;
      }
    }

  function toggleDisplayMode() {
    showDots = !showDots;
    drawGrid();
  }

  function tryGenerateGrid(maxAttempts = 3) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      const dominoes = generateDominoes();
      const positions = generateDominoPositions();

      if (positions.length < 28) {
        console.warn(`Attempt ${attempt}: Failed to generate full tiling`);
        continue;
      }

      try {
        grid = assignDominoesToGrid(dominoes, positions);
        return true;  // Success
      } catch (err) {
        console.warn(`Attempt ${attempt}: Error assigning dominoes`, err);
      }
    }
    return false; // All attempts failed
  }

  function init() {
    const success = tryGenerateGrid();

    if (!success) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "24px Arial";
      ctx.fillStyle = "red";
      ctx.textAlign = "center";
      ctx.fillText("Failed to generate domino layout after 3 attempts", canvas.width / 2, canvas.height / 2);
      return;
    }

    colorsOn = false;
    toggleColors2();
    drawGrid();
  }

  //colorBtn.addEventListener("click", toggleColors);
  //displayBtn.addEventListener("click", toggleDisplayMode);

  init();
