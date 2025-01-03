
var hopperHTMLcode = '<table class="mover" id="keyPressTable"><tr>'+
'<td class="button" width="20%" onclick="virtualKey(22)">rL</td>'+
'<td class="button"  width="20%" onclick="virtualKey(1)">M</td>'+
'<td class="button"  width="20%" onclick="virtualKey(11)">^</td>'+
'<td class="button"  width="20%" onclick="virtualKey(4)">D</td>'+
'<td class="button"  width="20%" onclick="virtualKey(44)">rR</td></tr>'+
'<tr><td class="button" onclick="virtualKey(2)">X</td>'+
'<td class="button" onclick="virtualKey(13)">&lt;</td>'+
'<td class="button6" onclick="virtualKey(3)" id="diceResult">dice</td>'+
'<td class="button" onclick="virtualKey(14)">&gt;</td>'+
'<td class="button" onclick="virtualKey(6)">S</td></tr>'+
'<tr><td class="button" onclick="virtualKey(86)">B</td>'+
'<td class="button" onclick="virtualKey(9)">C</td>'+
'<td class="button" onclick="virtualKey(12)">v</td>'+
'<td class="button" onclick="virtualKey(8)">F</td>'+
'<td class="button" onclick="virtualKey(7)">R</td></tr>'+
'<tr><td colspan=5 class="button" onclick="virtualKey(88)">Jump hopper</td></tr>'+
'<tr></tr><tr><td class="button1" colspan=5 id="hopText" onclick="virtualKey(33)"></td></tr></table>';

var table1HTMLcode = '<table id="bigTable" cellpadding="2" cellspacing="0" bgcolor="gray"><tr id="pbrow">'+
'<td>&nbsp;&nbsp;<a href="javascript:tec_window()"id="btn1"  >Terrain Effects Chart</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:crt_window()"  id="btn2"  >Combat Results Table</a></td>'+
'<td>&nbsp;&nbsp;<a class="neut" href="javascript:d6_window()"  id="btn3"  >Six Sided Die</a></td>'+
'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:unmarkAll()"  id="btn4"  >unmark all units</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:crt2_window()"  id="btn5"  >CRT + d6</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:makeSmaller()"  id="btn6"  >ZOOM OUT</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:disruptionNumber()"  id="btn7"  >double D</a></td>'+
'</tr>'+
'<tr id="aiwrow">'+
'<td>&nbsp;&nbsp;<a href="javascript:supply_window()"  id="btn8"  >Weapons matrix</a></td>'+
'<td>&nbsp;&nbsp;<a class="neut" href="javascript:vp_window()"  id="btn9"  >Situation</a></td>'+
'<td>&nbsp;&nbsp;<a  class="neut" href="javascript:crtKey_window()"  id="btn10"  >Seq. of play</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:unfireA()"  id="btn11"   >unfire A</a></td>'+
'<td>&nbsp;&nbsp;<a class="neut" href="javascript:victoryPoints()"  id="btn12"  >Victory Points</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:makeBigger()"  id="btn13"  >ZOOM IN</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:showBoard()"  id="btn26"  >show board</a></td>'+
'</tr>'+
'<tr id="neutrow">'+
'<td>&nbsp;&nbsp;<a  class="neut" href="javascript:rules_window()"  id="btn14"  >Game Rules</a></td>'+
'<td>&nbsp;&nbsp;<a class="mca" href="javascript:RotSideA()"  id="btn15"  >Rotate A</a></td>'+
'<td>&nbsp;&nbsp;<a  class="mca" href="javascript:RotSideB()"  id="btn16"  >Rotate B</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:unfireB()"  id="btn11"   >unfire B</a></td>'+
'<td>&nbsp;&nbsp;<a class="neut" href="javascript:d100_window()"  id="btn18"  >d100</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:pieceShrink=2;changeSize()"  id="btn19"  >half size</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:zombies()"  id="btn27"  >zombies</a></td>'+
'</tr>'+
'<tr id="mcarow">'+
'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:reloadSetup()"  id="btn20"  >SETUP GAME</a></td>'+
'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:getCookie()"  id="btn21"  >RELOAD GAME</a></td>'+
'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:reloadReset()"  id="btn22"  >RESET GAME</a></td>'+
'<td>&nbsp;&nbsp;<a class="mca" href="javascript:noCommandSideA()"  id="btn23"  >No Comms A</a></td>'+
'<td>&nbsp;&nbsp;<a class="mca" href="javascript:noCommandSideB()"  id="btn24"  >No Comms B</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:pieceShrink=1;changeSize()"  id="btn25"  >full size</a></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:help_window()"  id="btn17"  >Help window</a></td>'+
'</tr>'+
'<tr id="mcarow">'+
'<td>&nbsp;&nbsp;<table><tr><td><a class="mini" href="javascript:reloadSetupSizeUp()"  id="btn20a"  >+</a>'+
'</td><td><a class="mini" href="javascript:reloadSetupSizeDown()"  id="btn20b"  >-</a></td></tr></table></td>'+
'<td>&nbsp;&nbsp;<a href="javascript:crtNap_window()"  id="btn2b"  >NAW CRT</a></td>'+
'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:changeDice()"  id="btn612"  >now: d2</a></td>'+
'<td>&nbsp;&nbsp;</td>'+
'<td>&nbsp;&nbsp;</td>'+
'<td>&nbsp;&nbsp;</td>'+
'<td>&nbsp;&nbsp;</td>'+
'</tr></table>';

var table2HTMLcode = '<table BORDER="2" id="saveTable" bgcolor="silver">'+
'<tr align="center"><td><h1 style="width:600">SAVING AND LOADING GAMES</H1></td><td> </td></tr>'+
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
'</td><td align="left" style="width:200">&LT;--REMEMBER TO PICK APPROPRIATE TURN BUTTON BEFORE CREATING SAVE DATA</tr>'+
'<tr><td colspan="2" align="center">&nbsp;&nbsp;<a class="save" style="color:black" href="javascript:saveWindow()"  id="btn10">create save-data</a></td></tr>'+
'<tr><td rowspan="3"><textarea rows=15 columns=120 name="box" id="textbox1"></textarea></td>'+
'<td colspan="2" align="left"><b>1) Paste \'saved data\' into the box...</b> <br>&nbsp;&nbsp;2) Choose type of movement...<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;visible<input id="vis" type=radio onClick="fogOfWar(1)" checked> hidden<input id="hid" type=radio onClick="fogOfWar(2)">'+
'</td></tr>'+
'<tr><td colspan="2" align="left">3) <input type=button style="color:red" value="PRESS TO LOAD" onClick="reload()"></td></tr>'+
'<tr> <td colspan="2"><input type=button value="press to clear box" onClick="clearBox()"></td></tr>'+
'<tr> <td colspan="2" align="center">&nbsp;&nbsp;<a class="save" href="javascript:help2_window()"  id="btn2"  >Saving and loading help</a></td>'+
'</table>'+
'</td><td valign=top></td>'+
'<td align="center"><a class="save" href="javascript:normBoard()"  id="btn30">Normal Board</a>'+
'<br><br>'+
'<a class="save" href="javascript:setupBoard()"  id="btnB1">Set-up Board</a>'+
'<br><br>'+
'<a class="save" href="javascript:noHexBoard()"  id="btnB2">Board 2</a>'+
'<br><br>'+
'<a class="save" href="javascript:no3Board()"  id="btnB3">Board 3</a>'+
'<br><br>'+
'<textarea rows=1 columns=5 name="box" id="sizebox">1</textarea>'+
'<a class="save" href="javascript:boardUp()"  id="btnBS">set size above</a>'+
'<br><br></td>'+
'</td></tr></table>';
