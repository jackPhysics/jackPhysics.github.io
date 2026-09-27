

function chooseColors(n){

  var noColors = n;

  if(noColors==2){
    if(Math.random()<0.2){
      allColors[0] = "#000080";
      allColors[2] = "#FFFFE0";}
    else if(Math.random()<0.25){
      allColors[0] = "#800080";
      allColors[2] = "#90EE90";}
    else if(Math.random()<0.3333){
      allColors[0] = "#800000";
      allColors[2] = "#FFE4B5";}
    else if(Math.random()<0.5){
      allColors[0] = "#0000FF";
      allColors[2] = "#FFA500";}
    else if(Math.random()<1){
      allColors[0] = "#FF0000";
      allColors[2] = "#B0E0E6";}
  }
  else if(noColors==3){
    if(Math.random()<0.2){
    allColors[0] = "#FF0000";
    allColors[1] = "#00FF00";
    allColors[2] = "#0000FF";}
      else if(Math.random()<0.25){
      allColors[0] = "#800000";
      allColors[1] = "#B8860B";
      allColors[2] = "#FFEFD5";}
        else if(Math.random()<0.3333){
        allColors[0] = "#8B0000";
        allColors[1] = "#FF0000";
        allColors[2] = "#FFFF00";}
          else if(Math.random()<0.5){
          allColors[0] = "#DCDCDC";
          allColors[1] = "#A9A9A9";
          allColors[2] = "#696969";}
            else if(Math.random()<1){
            allColors[0] = "#C0C0C0";
            allColors[1] = "#808080";
            allColors[2] = "#404040";}
    }
    else if(noColors==4){
      if(Math.random()<0.3333){
      allColors[0] = "#FF0000";
      allColors[1] = "#FFFF00";
      allColors[1] = "#00FF00";
      allColors[3] = "#0000FF";}
        else if(Math.random()<0.5){
        allColors[0] = "#8B0000";
        allColors[1] = "#FF0000";
        allColors[2] = "#FFA500";
        allColors[3] = "#FFFF00";}
          else if(Math.random()<1){
          allColors[0] = "#333333";
          allColors[1] = "#666666";
          allColors[2] = "#999999";
          allColors[3] = "#DDDDDD";}
    }
  else if(noColors==5){
    if(Math.random()<0.3333){
      allColors[0] = "#FF0000";
      allColors[1] = "#FFFF00";
      allColors[2] = "#00FF00";
      allColors[3] = "#0000FF";
      allColors[4] = "#FF00FF";}
    else if(Math.random()<0.5){
      allColors[0] = "#000000";
      allColors[1] = "#8B0000";
      allColors[2] = "#FF0000";
      allColors[3] = "#FFA500";
      allColors[4] = "#FFFF00";
    }
  else if(Math.random()<1){
    allColors[0] = "#8B0000";
    allColors[1] = "#FF0000";
    allColors[2] = "#FFA500";
    allColors[3] = "#FFFF00";
    allColors[4] = "#FFFFE0";
  }
  }



}
