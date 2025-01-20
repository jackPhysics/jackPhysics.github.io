var printArmiesFlag = false;//needs to be defined here, too late in newJS module
var hopperHTMLcode = '<table class="mover" id="keyPressTable"><tr>'+
'<td class="button" width="20%" onclick="virtualKey(22)">rL</td>'+
'<td class="button"  width="20%" onclick="virtualKey(1)">M</td>'+
'<td class="button"  width="20%" onclick="virtualKey(11)">&nbsp;&nbsp;&nbsp;&nbsp;^&nbsp;&nbsp;&nbsp;&nbsp;</td>'+
'<td class="button"  width="20%" onclick="virtualKey(4)">D</td>'+
'<td class="button"  width="20%" onclick="virtualKey(44)">rR</td></tr>'+
'<tr><td class="button" onclick="virtualKey(2)">X</td>'+
'<td class="button" onclick="virtualKey(13)">&lt;</td>'+
'<td class="button6" onclick="virtualKey(3)" id="diceResult">dice</td>'+
'<td class="button" onclick="virtualKey(14)">&gt;</td>'+
'<td class="button" onclick="virtualKey(6)">S</td></tr>'+
'<tr><td class="button" onclick="virtualKey(86)">B</td>'+
'<td class="button" onclick="virtualKey(87)">Z</td>'+
'<td class="button" onclick="virtualKey(12)">&nbsp;&nbsp;&nbsp;&nbsp;v&nbsp;&nbsp;&nbsp;&nbsp;</td>'+
'<td class="button" onclick="virtualKey(8)">F</td>'+
'<td class="button" onclick="virtualKey(7)">R</td></tr>'+
'<tr><td colspan=5 class="button" onclick="virtualKey(88)">Jump hopper</td></tr>'+
'<td class="button5" rowspan=2 colspan=5 id="timebox" onclick="virtualKey(99)">&lt;</td>'+
'<tr></tr><tr><td class="button1" colspan=5 id="hopText" onclick="virtualKey(33)"></td></tr></table>';

var table1HTMLcode = '<table id="bigTable" cellpadding="2" cellspacing="0" bgcolor="gray">'+

'<tr id="terrainrow">'+
'<td>&nbsp;&nbsp;<a  class="mca" href="javascript:moveBoard(2)"  id="btnbr2"  >x-5</a></td>'+
'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:moveBoard(1)"  id="btnbr1"  >x+5</a></td>'+
'<td>&nbsp;&nbsp;<a class="mca" href="javascript:moveBoard(4)"  id="btnbr4"  >y-5</a></td>'+
'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:moveBoard(3)"  id="btnbr3"  >y+5</a></td>'+
'<td>&nbsp;&nbsp;<a  class="mca" href="javascript:shiftBoard(2)"  id="btnsh2"  >width--</a></td>'+
'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:shiftBoard(1)"  id="btnsh1"  >width++</a></td>'+
'<td>&nbsp;&nbsp;<a class="mca" href="javascript:shiftBoard(4)"  id="btnsh4"  >height--</a></td>'+
'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:shiftBoard(3)"  id="btnsh3"  >height++</a></td>'+
'</tr>'+

'<tr id="pbrow"><td>&nbsp;&nbsp;<a href="javascript:tec_window()"id="btn1"  >Terrain Effects Chart</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:crt_window()"  id="btn2"  >Original CRT</a></td>'+
'<td>&nbsp;&nbsp;<a class="neut" href="javascript:d6_window()"  id="btn3"  >Six Sided Die</a></td>'+
'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:unmarkAll()"  id="btn4"  >unmark all units</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:crt2_window()"  id="btn5"  >CRT + d6</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:makeSmaller()"  id="btn6"  >ZOOM OUT</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:disruptionNumber()"  id="btn7"  >double D</a></td>'+
'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:changeDice()"  id="btn612"  >now: d2</a></td>'+
'</tr>'+
'<tr id="aiwrow">'+
'<td>&nbsp;&nbsp;<a href="javascript:supply_window()"  id="btn8"  >Weapons matrix</a></td>'+
'<td>&nbsp;&nbsp;<a class="neut" href="javascript:crt2_window()"  id="btn9"  >Modified CRT</a></td>'+
'<td>&nbsp;&nbsp;<a  class="neut" href="javascript:crtKey_window()"  id="btn10"  >Seq. of play</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:unfireA()"  id="btn11"   >unfire A</a></td>'+
'<td>&nbsp;&nbsp;<a class="neut" href="javascript:victoryPoints()"  id="btn12"  >Victory Points</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:makeBigger()"  id="btn13"  >ZOOM IN</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:showBoard()"  id="btn26"  >show board</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:crtNap_window()"  id="btn2b"  >NAW CRT</a></td>'+
'</tr>'+
'<tr id="neutrow">'+
'<td>&nbsp;&nbsp;<a  class="neut" href="javascript:rules_window()"  id="btn14"  >Game Rules</a></td>'+
'<td>&nbsp;&nbsp;<a class="mca" href="javascript:RotSideA()"  id="btn15"  >Rotate A</a></td>'+
'<td>&nbsp;&nbsp;<a  class="mca" href="javascript:RotSideB()"  id="btn16"  >Rotate B</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:unfireB()"  id="btn11"   >unfire B</a></td>'+
'<td>&nbsp;&nbsp;<a class="neut" href="javascript:d100_window()"  id="btn18"  >d100</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:pieceShrink=2;changeSize()"  id="btn19"  >half size</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:zombies()"  id="btn27"  >zombies</a></td>'+
'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:hideTerrain(50)"  id="btnTr50"  >coordinates</a></td>'+
'</tr>'+
'<tr id="mcarow">'+
'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:reloadSetup()"  id="btn20"  >SETUP GAME</a></td>'+
'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:getCookie()"  id="btn21"  >RELOAD GAME</a></td>'+
'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:reloadReset()"  id="btn22"  >RESET GAME</a></td>'+
'<td>&nbsp;&nbsp;<a class="mca" href="javascript:noCommandSideA()"  id="btn23"  >No Comms A</a></td>'+
'<td>&nbsp;&nbsp;<a class="mca" href="javascript:noCommandSideB()"  id="btn24"  >No Comms B</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:pieceShrink=1;changeSize()"  id="btn25"  >full size</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:help_window()"  id="btn17"  >Help window</a></td>'+
'<td>&nbsp;&nbsp;<a  class="mca" href="javascript:hideTerrain(51)"  id="btnTr51"  >center dot</a></td>'+
'</tr>'+
'<tr id="terrainrow">'+
'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:hideTerrain(7)"  id="btnTr7"  >Hills Y/N</a></td>'+
'<td>&nbsp;&nbsp;<a  class="mca" href="javascript:hideTerrain(1)"  id="btnTr1"  >Woods Y/N</a></td>'+
'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:hideTerrain(10)"  id="btnTr10"  >Rivers Y/N</a></td>'+
'<td>&nbsp;&nbsp;<a class="mca" href="javascript:hideTerrain(9)"  id="btnTr9"  >Roads Y/N</a></td>'+
'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:hideTerrain(3)"  id="btnTr3"  >Lakes Y/N</a></td>'+
'<td>&nbsp;&nbsp;<a  class="mca" href="javascript:hideTerrain(5)"  id="btnTr5"  >Swamps Y/N</a></td>'+
'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:hideTerrain(6)"  id="btnTr6"  >Towns Y/N</a></td>'+
'<td>&nbsp;&nbsp;<a class="mca" href="javascript:hideTerrain(12)"  id="btnTr12"  >Letters Y/N</a></td>'+
'</tr>'+
+'</tr><tr id="mcarow">'
+'<td>&nbsp;&nbsp;<a class="neut" href="javascript:colorRed()"  id="btn23"  >Color Red</a></td>'
+'<td>&nbsp;&nbsp;<a href="javascript:colorBlack()"  id="btn24"  >Color Black</a></td>'
+'<td>&nbsp;&nbsp;<a class="neut" href="javascript:hideToggle()"  id="btn25"  >Show B./Hide R.</a></td>'
+'<td>&nbsp;&nbsp;<a href="javascript:hideRusF()"  id="btn15"  >Hide B.</a></td>'
+'<td>&nbsp;&nbsp;<a class="neut" href="javascript:hideGerF()"  id="btn16"  >Hide R.</a></td>'
+'<td>&nbsp;&nbsp;<a href="javascript:pieceShrink=1;changeSize()"  id="btn18"  >full size</a></td>'
+'<td>&nbsp;&nbsp;<a class="neut" href="javascript:mouseOverFlip()"  id="btn28"  >unit Zoom</a></td>'
+'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:"  id="btnxx"  >-</a></td>'
+'</tr></table>';

'</table>';
//'<td>&nbsp;&nbsp;<a class="mca" href="javascript:RotSideA()"  id="btn15"  >Rotate A</a></td>'
//'<td>&nbsp;&nbsp;<a class="mca" href="javascript:RotSideB()"  id="btn16"  >Rotate B</a></td>'

var table2HTMLcode = '<table BORDER="2" id="saveTable" bgcolor="silver">'+
'<tr align="center"><td><h1 style="width:600">SAVING AND LOADING GAMES</H1></td><td> </td>'+
'<td><input type="button" id="saveButton" value="Save image"></td></tr>'+
'<tr><td><table style="margin-left:0" cellspacing="20">'+
'<tr align="center"><td id="nameOfA"></td><td id="nameOfB"></td></tr>'+
'<tr align="right"><td>'+
'<table><tr align="center"><td>Turn Now is...</td></tr>'+
'<tr align="center"><td id="turnBox" style="font-size:0.7cm; color:black; background-color:yellow">A00</td></tr>'+
'<tr align="center"><td><input type="button" id="turnNow" value="press for next turn..." onClick="nextTurn()"></td></tr>'+
'<tr align="center"><td><input type="button" id="turnNow" value="press for last turn..." onClick="lastTurn()"></td></tr>'+
'</table></td><td>'+
'<table><tr align="right">'+
'<td>A turn<input type=radio id="rT" onClick="whoseTurn(1)" checked></td></tr>'+
'<tr align="right"><td><p style="width:60px">end of A turn<input id="erT" type=radio onClick="whoseTurn(2)"></p></td></tr>'+
'<tr align="right"><td>B turn<input id="gT" type=radio onClick="whoseTurn(3)"></td></tr>'+
'<tr align="right"><td>end of B turn<input id="egT" type=radio onClick="whoseTurn(4)"></td>'+
'</tr></table>'+
'</td><td align="left" style="width:200">&LT;--REMEMBER TO PICK <br>APPROPRIATE TURN BUTTON <br>BEFORE CREATING <br>SAVE DATA</tr>'+
'<tr><td colspan="2" align="center">&nbsp;&nbsp;<a class="save" style="color:black" href="javascript:saveWindow()"  id="btn10">create save-data</a></td></tr>'+
'<tr><td rowspan="3"><textarea rows=15 columns=120 name="box" id="textbox1"></textarea></td>'+
'<td colspan="2" align="left"><b>1) Paste \'saved data\' into the box...</b> <br>&nbsp;&nbsp;2) Choose type of movement...<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;visible<input id="vis" type=radio onClick="fogOfWar(1)" checked> hidden<input id="hid" type=radio onClick="fogOfWar(2)">'+
'</td></tr>'+
'<tr><td colspan="2" align="left">3) <input type=button style="color:red" value="PRESS TO LOAD" onClick="reload()"></td></tr>'+
'<tr> <td colspan="2"><input type=button value="press to clear box" onClick="clearBox()"></td></tr>'+
'<tr> <td colspan="2" align="center">&nbsp;&nbsp;<a class="save" href="javascript:help2_window()"  id="btn2"  >Saving and loading help</a></td>'+
'</table>'+
'</td><td valign=top></td>'+
'<td  valign="top" align="center">'+
'<br><br>'+
'<p id="boardNameB">Board #0u</p>'+
'<br><br>'+
'<div class="dropdown">'+
  '<button class="dropbtn">choose Board</button>'+
  '<div id="boardMenu1" class="dropdown-content">'+
  '</div>'+
'</div></td>'+
'<td  valign="top">'+
'<br><br>'+
'<p id="armyNameR">Red Army #0</p>'+
'<br><br>'+
'<div class="dropdown">'+
  '<button class="dropbtn">choose Red army</button>'+
  '<div id="armyMenu2" class="dropdown-content">'+
  '</div>'+
'</div></td>'+
'<td  valign="top">'+
  '<br><br>'+
  '<p id="armyNameB">Black Army #0</p>'+
  '<br><br>'+
  '<div class="dropdown">'+
    '<button class="dropbtn">choose Black army</button>'+
    '<div id="armyMenu1" class="dropdown-content">'+
    '</div>'+
'</div></td>'+
'<td>'+
'<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>'+
'<a class="save" href="javascript:supplyUnitsYesNo()"  id="btnSupply">Supply Units - No</a>'+
'<br><br>'+
'<a class="save" href="javascript:blankUnitsYesNo()"  id="btnBlank">Blank Units - No</a>'+
'<br><br>'+
'<br><br></td>'+
'</td></tr></table>';
