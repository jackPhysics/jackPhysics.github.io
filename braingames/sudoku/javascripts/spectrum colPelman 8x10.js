const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
var allColors = new Array();
var allColors2 = new Array();
var allColorsTx = new Array();
var allColorsTx2 = new Array();
var colorCurrent = "White";
var gameEndFlag = false;
var randomCol = false;

  var changeA = ["#010100","#010100","#010100","#010000", "#000100","#010000", "#000100","#010000", "#000100","#010000", "#000100","#010000", "#000100","#010100", "#010101"];

  //black and white removed
const htmlColorHex = [ "#F0F8FF", "#FAEBD7", "#00FFFF", "#7FFFD4", "#F0FFFF", "#F5F5DC", "#FFE4C4", "#FFEBCD", "#0000FF", "#8A2BE2", "#A52A2A", "#DEB887", "#5F9EA0", "#7FFF00", "#D2691E", "#FF7F50", "#6495ED", "#FFF8DC", "#DC143C", "#00FFFF", "#00008B", "#008B8B", "#B8860B", "#A9A9A9", "#006400", "#A9A9A9", "#BDB76B", "#8B008B", "#556B2F", "#FF8C00", "#9932CC", "#8B0000", "#E9967A", "#8FBC8F", "#483D8B", "#2F4F4F", "#2F4F4F", "#00CED1", "#9400D3", "#FF1493", "#00BFFF", "#696969", "#696969", "#1E90FF", "#B22222", "#FFFAF0", "#228B22", "#FF00FF", "#DCDCDC", "#F8F8FF", "#FFD700", "#DAA520", "#808080", "#008000", "#ADFF2F", "#808080", "#F0FFF0", "#FF69B4", "#CD5C5C", "#4B0082", "#FFFFF0", "#F0E68C", "#E6E6FA", "#FFF0F5", "#7CFC00", "#FFFACD", "#ADD8E6", "#F08080", "#E0FFFF", "#FAFAD2", "#D3D3D3", "#90EE90", "#D3D3D3", "#FFB6C1", "#FFA07A", "#20B2AA", "#87CEFA", "#778899", "#778899", "#B0C4DE", "#FFFFE0", "#00FF00", "#32CD32", "#FAF0E6", "#FF00FF", "#800000", "#66CDAA", "#0000CD", "#BA55D3", "#9370DB", "#3CB371", "#7B68EE", "#00FA9A", "#48D1CC", "#C71585", "#191970", "#F5FFFA", "#FFE4E1", "#FFE4B5", "#FFDEAD", "#000080", "#FDF5E6", "#808000", "#6B8E23", "#FFA500", "#FF4500", "#DA70D6", "#EEE8AA", "#98FB98", "#AFEEEE", "#DB7093", "#FFEFD5", "#FFDAB9", "#CD853F", "#FFC0CB", "#DDA0DD", "#B0E0E6", "#800080", "#663399", "#FF0000", "#BC8F8F", "#4169E1", "#8B4513", "#FA8072", "#F4A460", "#2E8B57", "#FFF5EE", "#A0522D", "#C0C0C0", "#87CEEB", "#6A5ACD", "#708090", "#708090", "#FFFAFA", "#00FF7F", "#4682B4", "#D2B48C", "#008080", "#D8BFD8", "#FF6347", "#40E0D0", "#EE82EE", "#F5DEB3", "#F5F5F5", "#FFFF00", "#9ACD32" ];

var colrSpecOrder = ["#FFFFF0", "#FFFFE0", "#FFFF00", "#FFFAFA", "#FFFAF0", "#FFFACD", "#FFF8DC", "#FFF5EE", "#FFF0F5", "#FFEFD5", "#FFEBCD", "#FFE4E1", "#FFE4C4", "#FFE4B5", "#FFDEAD", "#FFDAB9", "#FFD700", "#FFC0CB", "#FFB6C1", "#FFA500", "#FFA07A", "#FF8C00", "#FF7F50", "#FF69B4", "#FF6347", "#FF4500", "#FF1493", "#FF00FF", "#FF00FF", "#FF0000", "#FDF5E6", "#FAFAD2", "#FAF0E6", "#FAEBD7", "#FA8072", "#F8F8FF", "#F5FFFA", "#F5F5F5", "#F5F5DC", "#F5DEB3", "#F4A460", "#F0FFFF", "#F0FFF0", "#F0F8FF", "#F0E68C", "#F08080", "#EEE8AA", "#EE82EE", "#E9967A", "#E6E6FA", "#E0FFFF", "#DEB887", "#DDA0DD", "#DCDCDC", "#DC143C", "#DB7093", "#DAA520", "#DA70D6", "#D8BFD8", "#D3D3D3", "#D3D3D3", "#D2B48C", "#D2691E", "#CD853F", "#CD5C5C", "#C71585", "#C0C0C0", "#BDB76B", "#BC8F8F", "#BA55D3", "#B8860B", "#B22222", "#B0E0E6", "#B0C4DE", "#AFEEEE", "#ADFF2F", "#ADD8E6", "#A9A9A9", "#A9A9A9", "#A52A2A", "#A0522D", "#9ACD32", "#9932CC", "#98FB98", "#9400D3", "#9370DB", "#90EE90", "#8FBC8F", "#8B4513", "#8B008B", "#8B0000", "#8A2BE2", "#87CEFA", "#87CEEB", "#808080", "#808080", "#808000", "#800080", "#800000", "#7FFFD4", "#7FFF00", "#7CFC00", "#7B68EE", "#778899", "#778899", "#708090", "#708090", "#6B8E23", "#6A5ACD", "#696969", "#696969", "#66CDAA", "#663399", "#6495ED", "#5F9EA0", "#556B2F", "#4B0082", "#48D1CC", "#483D8B", "#4682B4", "#4169E1", "#40E0D0", "#3CB371", "#32CD32", "#2F4F4F", "#2F4F4F", "#2E8B57", "#228B22", "#20B2AA", "#1E90FF", "#191970", "#00FFFF", "#00FFFF", "#00FF7F", "#00FF00", "#00FA9A", "#00CED1", "#00BFFF", "#008B8B", "#008080", "#008000", "#006400", "#0000FF", "#0000CD", "#00008B", "#000080"];


var colrSpecOrderBU = ["#FFFFF0", "#FFFFE0", "#FFFF00", "#FFFAFA", "#FFFAF0", "#FFFACD", "#FFF8DC", "#FFF5EE", "#FFF0F5", "#FFEFD5", "#FFEBCD", "#FFE4E1", "#FFE4C4", "#FFE4B5", "#FFDEAD", "#FFDAB9", "#FFD700", "#FFC0CB", "#FFB6C1", "#FFA500", "#FFA07A", "#FF8C00", "#FF7F50", "#FF69B4", "#FF6347", "#FF4500", "#FF1493", "#FF00FF", "#FF00FF", "#FF0000", "#FDF5E6", "#FAFAD2", "#FAF0E6", "#FAEBD7", "#FA8072", "#F8F8FF", "#F5FFFA", "#F5F5F5", "#F5F5DC", "#F5DEB3", "#F4A460", "#F0FFFF", "#F0FFF0", "#F0F8FF", "#F0E68C", "#F08080", "#EEE8AA", "#EE82EE", "#E9967A", "#E6E6FA", "#E0FFFF", "#DEB887", "#DDA0DD", "#DCDCDC", "#DC143C", "#DB7093", "#DAA520", "#DA70D6", "#D8BFD8", "#D3D3D3", "#D3D3D3", "#D2B48C", "#D2691E", "#CD853F", "#CD5C5C", "#C71585", "#C0C0C0", "#BDB76B", "#BC8F8F", "#BA55D3", "#B8860B", "#B22222", "#B0E0E6", "#B0C4DE", "#AFEEEE", "#ADFF2F", "#ADD8E6", "#A9A9A9", "#A9A9A9", "#A52A2A", "#A0522D", "#9ACD32", "#9932CC", "#98FB98", "#9400D3", "#9370DB", "#90EE90", "#8FBC8F", "#8B4513", "#8B008B", "#8B0000", "#8A2BE2", "#87CEFA", "#87CEEB", "#808080", "#808080", "#808000", "#800080", "#800000", "#7FFFD4", "#7FFF00", "#7CFC00", "#7B68EE", "#778899", "#778899", "#708090", "#708090", "#6B8E23", "#6A5ACD", "#696969", "#696969", "#66CDAA", "#663399", "#6495ED", "#5F9EA0", "#556B2F", "#4B0082", "#48D1CC", "#483D8B", "#4682B4", "#4169E1", "#40E0D0", "#3CB371", "#32CD32", "#2F4F4F", "#2F4F4F", "#2E8B57", "#228B22", "#20B2AA", "#1E90FF", "#191970", "#00FFFF", "#00FFFF", "#00FF7F", "#00FF00", "#00FA9A", "#00CED1", "#00BFFF", "#008B8B", "#008080", "#008000", "#006400", "#0000FF", "#0000CD", "#00008B", "#000080"]

var brightnessOrder = [ "#FFFFF0", "#FFFFE0", "#F5FFFA", "#F0FFFF", "#FFFAFA", "#F0FFF0", "#FFFAF0", "#F8F8FF", "#E0FFFF", "#FFFACD", "#FFF8DC", "#FAFAD2", "#F0F8FF", "#FFF5EE", "#FDF5E6", "#F5F5F5", "#FFF0F5", "#F5F5DC", "#FAF0E6", "#FFEFD5", "#FFEBCD", "#FAEBD7", "#FFFF00", "#FFE4E1", "#E6E6FA", "#FFE4C4", "#FFE4B5", "#EEE8AA", "#F0E68C", "#FFDEAD", "#7FFFD4", "#AFEEEE", "#F5DEB3", "#FFDAB9", "#98FB98", "#ADFF2F", "#DCDCDC", "#B0E0E6", "#90EE90", "#D3D3D3", "#D3D3D3", "#7FFF00", "#FFD700", "#ADD8E6", "#7CFC00", "#FFC0CB", "#00FFFF", "#00FFFF", "#FFB6C1", "#D8BFD8", "#87CEFA", "#B0C4DE", "#87CEEB", "#C0C0C0", "#00FF7F", "#00FA9A", "#40E0D0", "#DEB887", "#D2B48C", "#9ACD32", "#00FF00", "#66CDAA", "#48D1CC", "#BDB76B", "#FFA07A", "#DDA0DD", "#F4A460", "#8FBC8F", "#FFA500", "#A9A9A9", "#A9A9A9", "#DAA520", "#E9967A", "#00CED1", "#32CD32", "#EE82EE", "#00BFFF", "#FF8C00", "#FA8072", "#BC8F8F", "#F08080", "#FF7F50", "#3CB371", "#20B2AA", "#6495ED", "#5F9EA0", "#e48319", "#CD853F", "#FF69B4", "#DA70D6", "#DB7093", "#B8860B", "#778899", "#778899", "#FF6347", "#808080", "#808080", "#1E90FF", "#9370DB", "#6B8E23", "#708090", "#708090", "#D2691E", "#4682B4", "#808000", "#7B68EE", "#CD5C5C", "#BA55D3", "#2E8B57", "#008B8B", "#228B22", "#4169E1", "#696969", "#696969", "#FF4500", "#6A5ACD", "#008080", "#556B2F", "#A0522D", "#008000", "#9932CC", "#8B4513", "#FF1493", "#8A2BE2", "#FF00FF", "#FF00FF", "#2F4F4F", "#2F4F4F", "#006400", "#663399", "#483D8B", "#A52A2A", "#C71585", "#DC143C", "#B22222", "#FF0000", "#9400D3", "#8B008B", "#800080", "#191970", "#8B0000", "#800000", "#4B0082", "#0000FF", "#0000CD", "#00008B", "#000080"]

var fullSpectrumOrder = ["#010000", "#020000", "#030000", "#040000", "#050000", "#060000", "#070000", "#080000", "#090000", "#0A0000", "#0B0000", "#0C0000", "#0D0000", "#0E0000", "#0F0000", "#100000", "#110000", "#120000", "#130000", "#140000", "#150000", "#160000", "#170000", "#180000", "#190000", "#1A0000", "#1B0000", "#1C0000", "#1D0000", "#1E0000", "#1F0000", "#200000", "#210000", "#220000", "#230000", "#240000", "#250000", "#260000", "#270000", "#280000", "#290000", "#2A0000", "#2B0000", "#2C0000", "#2D0000", "#2E0000", "#2F0000", "#300000", "#310000", "#320000", "#330000", "#340000", "#350000", "#360000", "#370000", "#380000", "#390000", "#3A0000", "#3B0000", "#3C0000", "#3D0000", "#3E0000", "#3F0000", "#400000", "#410000", "#420000", "#430000", "#440000", "#450000", "#460000", "#470000", "#480000", "#490000", "#4A0000", "#4B0000", "#4C0000", "#4D0000", "#4E0000", "#4F0000", "#500000", "#510000", "#520000", "#530000", "#540000", "#550000", "#560000", "#570000", "#580000", "#590000", "#5A0000", "#5B0000", "#5C0000", "#5D0000", "#5E0000", "#5F0000", "#600000", "#610000", "#620000", "#630000", "#640000", "#650000", "#660000", "#670000", "#680000", "#690000", "#6A0000", "#6B0000", "#6C0000", "#6D0000", "#6E0000", "#6F0000", "#700000", "#710000", "#720000", "#730000", "#740000", "#750000", "#760000", "#770000", "#780000", "#790000", "#7A0000", "#7B0000", "#7C0000", "#7D0000", "#7E0000", "#7F0000", "#800000", "#810000", "#820000", "#830000", "#840000", "#850000", "#860000", "#870000", "#880000", "#890000", "#8A0000", "#8B0000", "#8C0000", "#8D0000", "#8E0000", "#8F0000", "#900000", "#910000", "#920000", "#930000", "#940000", "#950000", "#960000", "#970000", "#980000", "#990000", "#9A0000", "#9B0000", "#9C0000", "#9D0000", "#9E0000", "#9F0000", "#A00000", "#A10000", "#A20000", "#A30000", "#A40000", "#A50000", "#A60000", "#A70000", "#A80000", "#A90000", "#AA0000", "#AB0000", "#AC0000", "#AD0000", "#AE0000", "#AF0000", "#B00000", "#B10000", "#B20000", "#B30000", "#B40000", "#B50000", "#B60000", "#B70000", "#B80000", "#B90000", "#BA0000", "#BB0000", "#BC0000", "#BD0000", "#BE0000", "#BF0000", "#C00000", "#C10000", "#C20000", "#C30000", "#C40000", "#C50000", "#C60000", "#C70000", "#C80000", "#C90000", "#CA0000", "#CB0000", "#CC0000", "#CD0000", "#CE0000", "#CF0000", "#D00000", "#D10000", "#D20000", "#D30000", "#D40000", "#D50000", "#D60000", "#D70000", "#D80000", "#D90000", "#DA0000", "#DB0000", "#DC0000", "#DD0000", "#DE0000", "#DF0000", "#E00000", "#E10000", "#E20000", "#E30000", "#E40000", "#E50000", "#E60000", "#E70000", "#E80000", "#E90000", "#EA0000", "#EB0000", "#EC0000", "#ED0000", "#EE0000", "#EF0000", "#F00000", "#F10000", "#F20000", "#F30000", "#F40000", "#F50000", "#F60000", "#F70000", "#F80000", "#F90000", "#FA0000", "#FB0000", "#FC0000", "#FD0000", "#FE0000", "#FF0000", "#FF0100", "#FF0200", "#FF0300", "#FF0400", "#FF0500", "#FF0600", "#FF0700", "#FF0800", "#FF0900", "#FF0A00", "#FF0B00", "#FF0C00", "#FF0D00", "#FF0E00", "#FF0F00", "#FF1000", "#FF1100", "#FF1200", "#FF1300", "#FF1400", "#FF1500", "#FF1600", "#FF1700", "#FF1800", "#FF1900", "#FF1A00", "#FF1B00", "#FF1C00", "#FF1D00", "#FF1E00", "#FF1F00", "#FF2000", "#FF2100", "#FF2200", "#FF2300", "#FF2400", "#FF2500", "#FF2600", "#FF2700", "#FF2800", "#FF2900", "#FF2A00", "#FF2B00", "#FF2C00", "#FF2D00", "#FF2E00", "#FF2F00", "#FF3000", "#FF3100", "#FF3200", "#FF3300", "#FF3400", "#FF3500", "#FF3600", "#FF3700", "#FF3800", "#FF3900", "#FF3A00", "#FF3B00", "#FF3C00", "#FF3D00", "#FF3E00", "#FF3F00", "#FF4000", "#FF4100", "#FF4200", "#FF4300", "#FF4400", "#FF4500", "#FF4600", "#FF4700", "#FF4800", "#FF4900", "#FF4A00", "#FF4B00", "#FF4C00", "#FF4D00", "#FF4E00", "#FF4F00", "#FF5000", "#FF5100", "#FF5200", "#FF5300", "#FF5400", "#FF5500", "#FF5600", "#FF5700", "#FF5800", "#FF5900", "#FF5A00", "#FF5B00", "#FF5C00", "#FF5D00", "#FF5E00", "#FF5F00", "#FF6000", "#FF6100", "#FF6200", "#FF6300", "#FF6400", "#FF6500", "#FF6600", "#FF6700", "#FF6800", "#FF6900", "#FF6A00", "#FF6B00", "#FF6C00", "#FF6D00", "#FF6E00", "#FF6F00", "#FF7000", "#FF7100", "#FF7200", "#FF7300", "#FF7400", "#FF7500", "#FF7600", "#FF7700", "#FF7800", "#FF7900", "#FF7A00", "#FF7B00", "#FF7C00", "#FF7D00", "#FF7E00", "#FF7F00", "#FF8000", "#FF8100", "#FF8200", "#FF8300", "#FF8400", "#FF8500", "#FF8600", "#FF8700", "#FF8800", "#FF8900", "#FF8A00", "#FF8B00", "#FF8C00", "#FF8D00", "#FF8E00", "#FF8F00", "#FF9000", "#FF9100", "#FF9200", "#FF9300", "#FF9400", "#FF9500", "#FF9600", "#FF9700", "#FF9800", "#FF9900", "#FF9A00", "#FF9B00", "#FF9C00", "#FF9D00", "#FF9E00", "#FF9F00", "#FFA000", "#FFA100", "#FFA200", "#FFA300", "#FFA400", "#FFA500", "#FFA600", "#FFA700", "#FFA800", "#FFA900", "#FFAA00", "#FFAB00", "#FFAC00", "#FFAD00", "#FFAE00", "#FFAF00", "#FFB000", "#FFB100", "#FFB200", "#FFB300", "#FFB400", "#FFB500", "#FFB600", "#FFB700", "#FFB800", "#FFB900", "#FFBA00", "#FFBB00", "#FFBC00", "#FFBD00", "#FFBE00", "#FFBF00", "#FFC000", "#FFC100", "#FFC200", "#FFC300", "#FFC400", "#FFC500", "#FFC600", "#FFC700", "#FFC800", "#FFC900", "#FFCA00", "#FFCB00", "#FFCC00", "#FFCD00", "#FFCE00", "#FFCF00", "#FFD000", "#FFD100", "#FFD200", "#FFD300", "#FFD400", "#FFD500", "#FFD600", "#FFD700", "#FFD800", "#FFD900", "#FFDA00", "#FFDB00", "#FFDC00", "#FFDD00", "#FFDE00", "#FFDF00", "#FFE000", "#FFE100", "#FFE200", "#FFE300", "#FFE400", "#FFE500", "#FFE600", "#FFE700", "#FFE800", "#FFE900", "#FFEA00", "#FFEB00", "#FFEC00", "#FFED00", "#FFEE00", "#FFEF00", "#FFF000", "#FFF100", "#FFF200", "#FFF300", "#FFF400", "#FFF500", "#FFF600", "#FFF700", "#FFF800", "#FFF900", "#FFFA00", "#FFFB00", "#FFFC00", "#FFFD00", "#FFFE00", "#FFFF00", "#FEFF00", "#FDFF00", "#FCFF00", "#FBFF00", "#FAFF00", "#F9FF00", "#F8FF00", "#F7FF00", "#F6FF00", "#F5FF00", "#F4FF00", "#F3FF00", "#F2FF00", "#F1FF00", "#F0FF00", "#EFFF00", "#EEFF00", "#EDFF00", "#ECFF00", "#EBFF00", "#EAFF00", "#E9FF00", "#E8FF00", "#E7FF00", "#E6FF00", "#E5FF00", "#E4FF00", "#E3FF00", "#E2FF00", "#E1FF00", "#E0FF00", "#DFFF00", "#DEFF00", "#DDFF00", "#DCFF00", "#DBFF00", "#DAFF00", "#D9FF00", "#D8FF00", "#D7FF00", "#D6FF00", "#D5FF00", "#D4FF00", "#D3FF00", "#D2FF00", "#D1FF00", "#D0FF00", "#CFFF00", "#CEFF00", "#CDFF00", "#CCFF00", "#CBFF00", "#CAFF00", "#C9FF00", "#C8FF00", "#C7FF00", "#C6FF00", "#C5FF00", "#C4FF00", "#C3FF00", "#C2FF00", "#C1FF00", "#C0FF00", "#BFFF00", "#BEFF00", "#BDFF00", "#BCFF00", "#BBFF00", "#BAFF00", "#B9FF00", "#B8FF00", "#B7FF00", "#B6FF00", "#B5FF00", "#B4FF00", "#B3FF00", "#B2FF00", "#B1FF00", "#B0FF00", "#AFFF00", "#AEFF00", "#ADFF00", "#ACFF00", "#ABFF00", "#AAFF00", "#A9FF00", "#A8FF00", "#A7FF00", "#A6FF00", "#A5FF00", "#A4FF00", "#A3FF00", "#A2FF00", "#A1FF00", "#A0FF00", "#9FFF00", "#9EFF00", "#9DFF00", "#9CFF00", "#9BFF00", "#9AFF00", "#99FF00", "#98FF00", "#97FF00", "#96FF00", "#95FF00", "#94FF00", "#93FF00", "#92FF00", "#91FF00", "#90FF00", "#8FFF00", "#8EFF00", "#8DFF00", "#8CFF00", "#8BFF00", "#8AFF00", "#89FF00", "#88FF00", "#87FF00", "#86FF00", "#85FF00", "#84FF00", "#83FF00", "#82FF00", "#81FF00", "#80FF00", "#7FFF00", "#7EFF00", "#7DFF00", "#7CFF00", "#7BFF00", "#7AFF00", "#79FF00", "#78FF00", "#77FF00", "#76FF00", "#75FF00", "#74FF00", "#73FF00", "#72FF00", "#71FF00", "#70FF00", "#6FFF00", "#6EFF00", "#6DFF00", "#6CFF00", "#6BFF00", "#6AFF00", "#69FF00", "#68FF00", "#67FF00", "#66FF00", "#65FF00", "#64FF00", "#63FF00", "#62FF00", "#61FF00", "#60FF00", "#5FFF00", "#5EFF00", "#5DFF00", "#5CFF00", "#5BFF00", "#5AFF00", "#59FF00", "#58FF00", "#57FF00", "#56FF00", "#55FF00", "#54FF00", "#53FF00", "#52FF00", "#51FF00", "#50FF00", "#4FFF00", "#4EFF00", "#4DFF00", "#4CFF00", "#4BFF00", "#4AFF00", "#49FF00", "#48FF00", "#47FF00", "#46FF00", "#45FF00", "#44FF00", "#43FF00", "#42FF00", "#41FF00", "#40FF00", "#3FFF00", "#3EFF00", "#3DFF00", "#3CFF00", "#3BFF00", "#3AFF00", "#39FF00", "#38FF00", "#37FF00", "#36FF00", "#35FF00", "#34FF00", "#33FF00", "#32FF00", "#31FF00", "#30FF00", "#2FFF00", "#2EFF00", "#2DFF00", "#2CFF00", "#2BFF00", "#2AFF00", "#29FF00", "#28FF00", "#27FF00", "#26FF00", "#25FF00", "#24FF00", "#23FF00", "#22FF00", "#21FF00", "#20FF00", "#1FFF00", "#1EFF00", "#1DFF00", "#1CFF00", "#1BFF00", "#1AFF00", "#19FF00", "#18FF00", "#17FF00", "#16FF00", "#15FF00", "#14FF00", "#13FF00", "#12FF00", "#11FF00", "#10FF00", "#0FFF00", "#0EFF00", "#0DFF00", "#0CFF00", "#0BFF00", "#0AFF00", "#09FF00", "#08FF00", "#07FF00", "#06FF00", "#05FF00", "#04FF00", "#03FF00", "#02FF00", "#01FF00", "#00FF00", "#00FF01", "#00FF02", "#00FF03", "#00FF04", "#00FF05", "#00FF06", "#00FF07", "#00FF08", "#00FF09", "#00FF0A", "#00FF0B", "#00FF0C", "#00FF0D", "#00FF0E", "#00FF0F", "#00FF10", "#00FF11", "#00FF12", "#00FF13", "#00FF14", "#00FF15", "#00FF16", "#00FF17", "#00FF18", "#00FF19", "#00FF1A", "#00FF1B", "#00FF1C", "#00FF1D", "#00FF1E", "#00FF1F", "#00FF20", "#00FF21", "#00FF22", "#00FF23", "#00FF24", "#00FF25", "#00FF26", "#00FF27", "#00FF28", "#00FF29", "#00FF2A", "#00FF2B", "#00FF2C", "#00FF2D", "#00FF2E", "#00FF2F", "#00FF30", "#00FF31", "#00FF32", "#00FF33", "#00FF34", "#00FF35", "#00FF36", "#00FF37", "#00FF38", "#00FF39", "#00FF3A", "#00FF3B", "#00FF3C", "#00FF3D", "#00FF3E", "#00FF3F", "#00FF40", "#00FF41", "#00FF42", "#00FF43", "#00FF44", "#00FF45", "#00FF46", "#00FF47", "#00FF48", "#00FF49", "#00FF4A", "#00FF4B", "#00FF4C", "#00FF4D", "#00FF4E", "#00FF4F", "#00FF50", "#00FF51", "#00FF52", "#00FF53", "#00FF54", "#00FF55", "#00FF56", "#00FF57", "#00FF58", "#00FF59", "#00FF5A", "#00FF5B", "#00FF5C", "#00FF5D", "#00FF5E", "#00FF5F", "#00FF60", "#00FF61", "#00FF62", "#00FF63", "#00FF64", "#00FF65", "#00FF66", "#00FF67", "#00FF68", "#00FF69", "#00FF6A", "#00FF6B", "#00FF6C", "#00FF6D", "#00FF6E", "#00FF6F", "#00FF70", "#00FF71", "#00FF72", "#00FF73", "#00FF74", "#00FF75", "#00FF76", "#00FF77", "#00FF78", "#00FF79", "#00FF7A", "#00FF7B", "#00FF7C", "#00FF7D", "#00FF7E", "#00FF7F", "#00FF80", "#00FF81", "#00FF82", "#00FF83", "#00FF84", "#00FF85", "#00FF86", "#00FF87", "#00FF88", "#00FF89", "#00FF8A", "#00FF8B", "#00FF8C", "#00FF8D", "#00FF8E", "#00FF8F", "#00FF90", "#00FF91", "#00FF92", "#00FF93", "#00FF94", "#00FF95", "#00FF96", "#00FF97", "#00FF98", "#00FF99", "#00FF9A", "#00FF9B", "#00FF9C", "#00FF9D", "#00FF9E", "#00FF9F", "#00FFA0", "#00FFA1", "#00FFA2", "#00FFA3", "#00FFA4", "#00FFA5", "#00FFA6", "#00FFA7", "#00FFA8", "#00FFA9", "#00FFAA", "#00FFAB", "#00FFAC", "#00FFAD", "#00FFAE", "#00FFAF", "#00FFB0", "#00FFB1", "#00FFB2", "#00FFB3", "#00FFB4", "#00FFB5", "#00FFB6", "#00FFB7", "#00FFB8", "#00FFB9", "#00FFBA", "#00FFBB", "#00FFBC", "#00FFBD", "#00FFBE", "#00FFBF", "#00FFC0", "#00FFC1", "#00FFC2", "#00FFC3", "#00FFC4", "#00FFC5", "#00FFC6", "#00FFC7", "#00FFC8", "#00FFC9", "#00FFCA", "#00FFCB", "#00FFCC", "#00FFCD", "#00FFCE", "#00FFCF", "#00FFD0", "#00FFD1", "#00FFD2", "#00FFD3", "#00FFD4", "#00FFD5", "#00FFD6", "#00FFD7", "#00FFD8", "#00FFD9", "#00FFDA", "#00FFDB", "#00FFDC", "#00FFDD", "#00FFDE", "#00FFDF", "#00FFE0", "#00FFE1", "#00FFE2", "#00FFE3", "#00FFE4", "#00FFE5", "#00FFE6", "#00FFE7", "#00FFE8", "#00FFE9", "#00FFEA", "#00FFEB", "#00FFEC", "#00FFED", "#00FFEE", "#00FFEF", "#00FFF0", "#00FFF1", "#00FFF2", "#00FFF3", "#00FFF4", "#00FFF5", "#00FFF6", "#00FFF7", "#00FFF8", "#00FFF9", "#00FFFA", "#00FFFB", "#00FFFC", "#00FFFD", "#00FFFE", "#00FFFF", "#00FEFF", "#00FDFF", "#00FCFF", "#00FBFF", "#00FAFF", "#00F9FF", "#00F8FF", "#00F7FF", "#00F6FF", "#00F5FF", "#00F4FF", "#00F3FF", "#00F2FF", "#00F1FF", "#00F0FF", "#00EFFF", "#00EEFF", "#00EDFF", "#00ECFF", "#00EBFF", "#00EAFF", "#00E9FF", "#00E8FF", "#00E7FF", "#00E6FF", "#00E5FF", "#00E4FF", "#00E3FF", "#00E2FF", "#00E1FF", "#00E0FF", "#00DFFF", "#00DEFF", "#00DDFF", "#00DCFF", "#00DBFF", "#00DAFF", "#00D9FF", "#00D8FF", "#00D7FF", "#00D6FF", "#00D5FF", "#00D4FF", "#00D3FF", "#00D2FF", "#00D1FF", "#00D0FF", "#00CFFF", "#00CEFF", "#00CDFF", "#00CCFF", "#00CBFF", "#00CAFF", "#00C9FF", "#00C8FF", "#00C7FF", "#00C6FF", "#00C5FF", "#00C4FF", "#00C3FF", "#00C2FF", "#00C1FF", "#00C0FF", "#00BFFF", "#00BEFF", "#00BDFF", "#00BCFF", "#00BBFF", "#00BAFF", "#00B9FF", "#00B8FF", "#00B7FF", "#00B6FF", "#00B5FF", "#00B4FF", "#00B3FF", "#00B2FF", "#00B1FF", "#00B0FF", "#00AFFF", "#00AEFF", "#00ADFF", "#00ACFF", "#00ABFF", "#00AAFF", "#00A9FF", "#00A8FF", "#00A7FF", "#00A6FF", "#00A5FF", "#00A4FF", "#00A3FF", "#00A2FF", "#00A1FF", "#00A0FF", "#009FFF", "#009EFF", "#009DFF", "#009CFF", "#009BFF", "#009AFF", "#0099FF", "#0098FF", "#0097FF", "#0096FF", "#0095FF", "#0094FF", "#0093FF", "#0092FF", "#0091FF", "#0090FF", "#008FFF", "#008EFF", "#008DFF", "#008CFF", "#008BFF", "#008AFF", "#0089FF", "#0088FF", "#0087FF", "#0086FF", "#0085FF", "#0084FF", "#0083FF", "#0082FF", "#0081FF", "#0080FF", "#007FFF", "#007EFF", "#007DFF", "#007CFF", "#007BFF", "#007AFF", "#0079FF", "#0078FF", "#0077FF", "#0076FF", "#0075FF", "#0074FF", "#0073FF", "#0072FF", "#0071FF", "#0070FF", "#006FFF", "#006EFF", "#006DFF", "#006CFF", "#006BFF", "#006AFF", "#0069FF", "#0068FF", "#0067FF", "#0066FF", "#0065FF", "#0064FF", "#0063FF", "#0062FF", "#0061FF", "#0060FF", "#005FFF", "#005EFF", "#005DFF", "#005CFF", "#005BFF", "#005AFF", "#0059FF", "#0058FF", "#0057FF", "#0056FF", "#0055FF", "#0054FF", "#0053FF", "#0052FF", "#0051FF", "#0050FF", "#004FFF", "#004EFF", "#004DFF", "#004CFF", "#004BFF", "#004AFF", "#0049FF", "#0048FF", "#0047FF", "#0046FF", "#0045FF", "#0044FF", "#0043FF", "#0042FF", "#0041FF", "#0040FF", "#003FFF", "#003EFF", "#003DFF", "#003CFF", "#003BFF", "#003AFF", "#0039FF", "#0038FF", "#0037FF", "#0036FF", "#0035FF", "#0034FF", "#0033FF", "#0032FF", "#0031FF", "#0030FF", "#002FFF", "#002EFF", "#002DFF", "#002CFF", "#002BFF", "#002AFF", "#0029FF", "#0028FF", "#0027FF", "#0026FF", "#0025FF", "#0024FF", "#0023FF", "#0022FF", "#0021FF", "#0020FF", "#001FFF", "#001EFF", "#001DFF", "#001CFF", "#001BFF", "#001AFF", "#0019FF", "#0018FF", "#0017FF", "#0016FF", "#0015FF", "#0014FF", "#0013FF", "#0012FF", "#0011FF", "#0010FF", "#000FFF", "#000EFF", "#000DFF", "#000CFF", "#000BFF", "#000AFF", "#0009FF", "#0008FF", "#0007FF", "#0006FF", "#0005FF", "#0004FF", "#0003FF", "#0002FF", "#0001FF", "#0000FF", "#0100FF", "#0200FF", "#0300FF", "#0400FF", "#0500FF", "#0600FF", "#0700FF", "#0800FF", "#0900FF", "#0A00FF", "#0B00FF", "#0C00FF", "#0D00FF", "#0E00FF", "#0F00FF", "#1000FF", "#1100FF", "#1200FF", "#1300FF", "#1400FF", "#1500FF", "#1600FF", "#1700FF", "#1800FF", "#1900FF", "#1A00FF", "#1B00FF", "#1C00FF", "#1D00FF", "#1E00FF", "#1F00FF", "#2000FF", "#2100FF", "#2200FF", "#2300FF", "#2400FF", "#2500FF", "#2600FF", "#2700FF", "#2800FF", "#2900FF", "#2A00FF", "#2B00FF", "#2C00FF", "#2D00FF", "#2E00FF", "#2F00FF", "#3000FF", "#3100FF", "#3200FF", "#3300FF", "#3400FF", "#3500FF", "#3600FF", "#3700FF", "#3800FF", "#3900FF", "#3A00FF", "#3B00FF", "#3C00FF", "#3D00FF", "#3E00FF", "#3F00FF", "#4000FF", "#4100FF", "#4200FF", "#4300FF", "#4400FF", "#4500FF", "#4600FF", "#4700FF", "#4800FF", "#4900FF", "#4A00FF", "#4B00FF", "#4C00FF", "#4D00FF", "#4E00FF", "#4F00FF", "#5000FF", "#5100FF", "#5200FF", "#5300FF", "#5400FF", "#5500FF", "#5600FF", "#5700FF", "#5800FF", "#5900FF", "#5A00FF", "#5B00FF", "#5C00FF", "#5D00FF", "#5E00FF", "#5F00FF", "#6000FF", "#6100FF", "#6200FF", "#6300FF", "#6400FF", "#6500FF", "#6600FF", "#6700FF", "#6800FF", "#6900FF", "#6A00FF", "#6B00FF", "#6C00FF", "#6D00FF", "#6E00FF", "#6F00FF", "#7000FF", "#7100FF", "#7200FF", "#7300FF", "#7400FF", "#7500FF", "#7600FF", "#7700FF", "#7800FF", "#7900FF", "#7A00FF", "#7B00FF", "#7C00FF", "#7D00FF", "#7E00FF", "#7F00FF", "#8000FF", "#8100FF", "#8200FF", "#8300FF", "#8400FF", "#8500FF", "#8600FF", "#8700FF", "#8800FF", "#8900FF", "#8A00FF", "#8B00FF", "#8C00FF", "#8D00FF", "#8E00FF", "#8F00FF", "#9000FF", "#9100FF", "#9200FF", "#9300FF", "#9400FF", "#9500FF", "#9600FF", "#9700FF", "#9800FF", "#9900FF", "#9A00FF", "#9B00FF", "#9C00FF", "#9D00FF", "#9E00FF", "#9F00FF", "#A000FF", "#A100FF", "#A200FF", "#A300FF", "#A400FF", "#A500FF", "#A600FF", "#A700FF", "#A800FF", "#A900FF", "#AA00FF", "#AB00FF", "#AC00FF", "#AD00FF", "#AE00FF", "#AF00FF", "#B000FF", "#B100FF", "#B200FF", "#B300FF", "#B400FF", "#B500FF", "#B600FF", "#B700FF", "#B800FF", "#B900FF", "#BA00FF", "#BB00FF", "#BC00FF", "#BD00FF", "#BE00FF", "#BF00FF", "#C000FF", "#C100FF", "#C200FF", "#C300FF", "#C400FF", "#C500FF", "#C600FF", "#C700FF", "#C800FF", "#C900FF", "#CA00FF", "#CB00FF", "#CC00FF", "#CD00FF", "#CE00FF", "#CF00FF", "#D000FF", "#D100FF", "#D200FF", "#D300FF", "#D400FF", "#D500FF", "#D600FF", "#D700FF", "#D800FF", "#D900FF", "#DA00FF", "#DB00FF", "#DC00FF", "#DD00FF", "#DE00FF", "#DF00FF", "#E000FF", "#E100FF", "#E200FF", "#E300FF", "#E400FF", "#E500FF", "#E600FF", "#E700FF", "#E800FF", "#E900FF", "#EA00FF", "#EB00FF", "#EC00FF", "#ED00FF", "#EE00FF", "#EF00FF", "#F000FF", "#F100FF", "#F200FF", "#F300FF", "#F400FF", "#F500FF", "#F600FF", "#F700FF", "#F800FF", "#F900FF", "#FA00FF", "#FB00FF", "#FC00FF", "#FD00FF", "#FE00FF", "#FF00FF", "#FE00FE", "#FD00FD", "#FC00FC", "#FB00FB", "#FA00FA", "#F900F9", "#F800F8", "#F700F7", "#F600F6", "#F500F5", "#F400F4", "#F300F3", "#F200F2", "#F100F1", "#F000F0", "#EF00EF", "#EE00EE", "#ED00ED", "#EC00EC", "#EB00EB", "#EA00EA", "#E900E9", "#E800E8", "#E700E7", "#E600E6", "#E500E5", "#E400E4", "#E300E3", "#E200E2", "#E100E1", "#E000E0", "#DF00DF", "#DE00DE", "#DD00DD", "#DC00DC", "#DB00DB", "#DA00DA", "#D900D9", "#D800D8", "#D700D7", "#D600D6", "#D500D5", "#D400D4", "#D300D3", "#D200D2", "#D100D1", "#D000D0", "#CF00CF", "#CE00CE", "#CD00CD", "#CC00CC", "#CB00CB", "#CA00CA", "#C900C9", "#C800C8", "#C700C7", "#C600C6", "#C500C5", "#C400C4", "#C300C3", "#C200C2", "#C100C1", "#C000C0", "#BF00BF", "#BE00BE", "#BD00BD", "#BC00BC", "#BB00BB", "#BA00BA", "#B900B9", "#B800B8", "#B700B7", "#B600B6", "#B500B5", "#B400B4", "#B300B3", "#B200B2", "#B100B1", "#B000B0", "#AF00AF", "#AE00AE", "#AD00AD", "#AC00AC", "#AB00AB", "#AA00AA", "#A900A9", "#A800A8", "#A700A7", "#A600A6", "#A500A5", "#A400A4", "#A300A3", "#A200A2", "#A100A1", "#A000A0", "#9F009F", "#9E009E", "#9D009D", "#9C009C", "#9B009B", "#9A009A", "#990099", "#980098", "#970097", "#960096", "#950095", "#940094", "#930093", "#920092", "#910091", "#900090", "#8F008F", "#8E008E", "#8D008D", "#8C008C", "#8B008B", "#8A008A", "#890089", "#880088", "#870087", "#860086", "#850085", "#840084", "#830083", "#820082", "#810081", "#800080", "#7F007F", "#7E007E", "#7D007D", "#7C007C", "#7B007B", "#7A007A", "#790079", "#780078", "#770077", "#760076", "#750075", "#740074", "#730073", "#720072", "#710071", "#700070", "#6F006F", "#6E006E", "#6D006D", "#6C006C", "#6B006B", "#6A006A", "#690069", "#680068", "#670067", "#660066", "#650065", "#640064", "#630063", "#620062", "#610061", "#600060", "#5F005F", "#5E005E", "#5D005D", "#5C005C", "#5B005B", "#5A005A", "#590059", "#580058", "#570057", "#560056", "#550055", "#540054", "#530053", "#520052", "#510051", "#500050", "#4F004F", "#4E004E", "#4D004D", "#4C004C", "#4B004B", "#4A004A", "#490049", "#480048", "#470047", "#460046", "#450045", "#440044", "#430043", "#420042", "#410041", "#400040", "#3F003F", "#3E003E", "#3D003D", "#3C003C", "#3B003B", "#3A003A", "#390039", "#380038", "#370037", "#360036", "#350035", "#340034", "#330033", "#320032", "#310031", "#300030", "#2F002F", "#2E002E", "#2D002D", "#2C002C", "#2B002B", "#2A002A", "#290029", "#280028", "#270027", "#260026", "#250025", "#240024", "#230023", "#220022", "#210021", "#200020", "#1F001F", "#1E001E", "#1D001D", "#1C001C", "#1B001B", "#1A001A", "#190019", "#180018", "#170017", "#160016", "#150015", "#140014", "#130013", "#120012", "#110011", "#100010", "#0F000F", "#0E000E", "#0D000D", "#0C000C", "#0B000B", "#0A000A", "#090009", "#080008", "#070007", "#060006", "#050005", "#040004", "#030003", "#020002", "#010001"]

var usedColours = new Array();

switch(Math.floor(Math.random()*9)){//Math.floor(Math.random()*4)
  case 0:
  var colrSpecLen = htmlColorHex.length;
  usedColours = htmlColorHex;
  break;
    case 1:
    var colrSpecLen = colrSpecOrder.length;
    usedColours = colrSpecOrder;
    break;
      case 2:
      var colrSpecLen = brightnessOrder.length;
      usedColours = brightnessOrder;
      break;
        case 3:
        case 4:
        case 5:
        var colrSpecLen = brightnessOrder.length;
        usedColours = brightnessOrder;
        break;
        default:
        //var colrSpecLen = fullSpectrumOrder.length;
        //usedColours = fullSpectrumOrder;
        randomCol = true;
        break;
}



let colNo = (8*10)/2;
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

const gridSizeX = 8;
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
  if(randomCol){
  //var colDummy2 = Math.floor(Math.random() * htmlColorHex.length);
  for (cl = 0; cl < colNo; cl++){
    //colDummy2 = Math.floor(Math.random() * htmlColorHex.length);
    allColors[cl] = makeColor2();
  }
    //console.log("allColors="+allColors);
  }
  //colours from each section of spectrum
  else{
  colJump = Math.floor(colrSpecLen / colNo);

  var colDummy2 = Math.floor(Math.random() * colJump);
  //using ordered colours
  var oldCol=colDummy2;
  var colDiff = colDummy2-oldCol;

  for (cl = 0; cl < colNo; cl++){
    colDummy2 = Math.floor(colJump*(cl+0.5)+(Math.random() * colJump/2));
    allColors[cl] = usedColours[colDummy2];//makeColor2();
    //allColorsTx[cl] = ""+colDummy2;//makeColor2();
    colDiff = colDummy2-oldCol;
    oldCol=colDummy2;
    //console.log("colDiff="+colDiff);
  }
  }
  var allColorsLen = allColors.length;
  var allColors2Len = allColorsLen*2;
  for(cl1=0;cl1<2;cl1++){
  for(cl2=0;cl2<allColorsLen;cl2++){
    allColors2[cl1*allColorsLen+cl2] = allColors[cl2];
    //allColorsTx2[cl1*allColorsLen+cl2] = allColorsTx[cl2];
  }
  }

  //using random colours
  /*
  for (cl = 0; cl < colNo; cl++){
    var colDummy3 = makeColor2();
    allColors[cl] = colDummy3;
    console.log("allColors="+allColors);
  }
  */

  for (let row = 0; row < gridSizeY; row++) {
    for (let col = 0; col < gridSizeX; col++) {

      var colDummy = Math.floor(Math.random() * allColors2Len);
      var color = allColors2[colDummy];
      var textC = allColorsTx2[colDummy];
      board[col][row]=allColors2[colDummy];
      allColors2Len--;
      allColors2[colDummy] = allColors2[allColors2Len];
      allColorsTx2[colDummy] = allColorsTx2[allColors2Len];
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.fillRect(col * cellSize + 140, row * cellSize + 140, cellSize, cellSize);
      ctx.closePath();
      /*
      ctx.beginPath();
      ctx.font = "12px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "White";
      ctx.fillText(""+textC,col * cellSize + 140+cellSize/2, row * cellSize + 140+cellSize/2);
      ctx.closePath();
      ctx.beginPath();
      ctx.fillStyle = "Black";
      ctx.fillText(""+textC,col * cellSize + 139+cellSize/2, row * cellSize + 139+cellSize/2);
      ctx.closePath();
      */
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

function markCell(x0,y0){

      let col = x0;
      let row = y0;
if(Math.random()<0.3){
      // Create linear gradient
      let grad=ctx.createLinearGradient(col * cellSize+140, row * cellSize+140,col * cellSize+140+cellSize, row * cellSize+140+cellSize);
      switch(Math.floor(Math.random()*4)){
      case 0://NW2SE
        grad=ctx.createLinearGradient(col * cellSize+140, row * cellSize+140,col * cellSize+140+cellSize, row * cellSize+140+cellSize);
        break;
        case 1://SW2NE
          grad=ctx.createLinearGradient(col * cellSize+140, row * cellSize+140+cellSize,col * cellSize+140+cellSize, row * cellSize+140);
          break;
          case 2://NE2SW
            grad=ctx.createLinearGradient(col * cellSize+140+cellSize, row * cellSize+140+cellSize,col * cellSize+140, row * cellSize+140);
            break;
            case 3://SE2NW
              grad=ctx.createLinearGradient(col * cellSize+140+cellSize, row * cellSize+140,col * cellSize+140, row * cellSize+140+cellSize);
              break;
      }
      //const grad=ctx.createLinearGradient(col * cellSize+140, row * cellSize+140,col * cellSize+140+cellSize, row * cellSize+140+cellSize);
      switch(Math.floor(Math.random()*4)){
      case 0://NW2SE
      grad.addColorStop(0, "Red");
      grad.addColorStop(0.2, "Red");
      grad.addColorStop(0.3, "Orange");
      grad.addColorStop(0.4, "Yellow");
      grad.addColorStop(0.5, "Lime");
      grad.addColorStop(0.6, "Cyan");
      grad.addColorStop(0.7, "Indigo");
      grad.addColorStop(0.8, "Violet");
      grad.addColorStop(1, "Violet");
        break;
        case 1://NW2SE
      grad.addColorStop(0, "Red");
      grad.addColorStop(0.3, "Red");
      grad.addColorStop(0.5, "Lime");
      grad.addColorStop(0.8, "Blue");
      grad.addColorStop(1, "Blue");
        break;
        case 2://NW2SE
        grad.addColorStop(0, "Black");
        grad.addColorStop(0.3, "Black");
        grad.addColorStop(0.4, "Brown");
        grad.addColorStop(0.5, "Red");
        grad.addColorStop(0.6, "Orange");
        grad.addColorStop(0.7, "Yellow");
        grad.addColorStop(0.8, "White");
        grad.addColorStop(1, "White");
          break;
          case 3://NW2SE
        grad.addColorStop(0, "Red");
        grad.addColorStop(0.3, "Yellow");
        grad.addColorStop(0.5, "Lime");
        grad.addColorStop(0.8, "Cyan");
        grad.addColorStop(1, "Blue");
            break;
      }
      // Fill circle with gradient
      ctx.beginPath();
      ctx.arc(col * cellSize+140+cellSize/2, row * cellSize+140+cellSize/2, cellSize/3+1, 0, Math.PI*2);
      //ctx.arc(col * cellSize+140+cellSize/2, row * cellSize+140+cellSize/2, cellSize/3+1, 0, Math.PI*2);
      ctx.fillStyle = grad;
      ctx.fill();
      //ctx.fillStyle = "Black";
      //ctx.beginPath();
      //ctx.arc(col * cellSize+140+cellSize/2, row * cellSize+140+cellSize/2, cellSize/3+1, 0, Math.PI*2);
      //ctx.fill();
      ctx.closePath();
    }
else{
      //archery target
      var ringUnit = (cellSize/3+1)/5;
      ctx.beginPath();
      ctx.fillStyle = "White";
      ctx.arc(col * cellSize+140+cellSize/2, row * cellSize+140+cellSize/2, ringUnit*5, 0, Math.PI*2);
      ctx.fill();
      ctx.closePath();
      ctx.beginPath();
      ctx.fillStyle = "Black";
      ctx.arc(col * cellSize+140+cellSize/2, row * cellSize+140+cellSize/2, ringUnit*4, 0, Math.PI*2);
      ctx.fill();
      ctx.closePath();
      ctx.beginPath();
      ctx.fillStyle = "Cyan";
      ctx.arc(col * cellSize+140+cellSize/2, row * cellSize+140+cellSize/2, ringUnit*3, 0, Math.PI*2);
      ctx.fill();
      ctx.closePath();
      ctx.beginPath();
      ctx.fillStyle = "Red";
      ctx.arc(col * cellSize+140+cellSize/2, row * cellSize+140+cellSize/2, ringUnit*2, 0, Math.PI*2);
      ctx.fill();
      ctx.closePath();
      ctx.beginPath();
      ctx.fillStyle = "Yellow";
      ctx.arc(col * cellSize+140+cellSize/2, row * cellSize+140+cellSize/2, ringUnit, 0, Math.PI*2);
      ctx.fill();
      ctx.closePath();
    }
}


function unmarkCell(x0,y0){

      let col = x0;
      let row = y0;
      ctx.fillStyle = board[col][row];
      ctx.beginPath();
      ctx.arc(col * cellSize+140+cellSize/2, row * cellSize+140+cellSize/2, cellSize/3+2, 0, Math.PI*2);
      ctx.fill();
      ctx.closePath();
}

function compareCells(x0,y0){

        let col = x0;
        let row = y0;
        var color2nd = board[col][row];
        if(color2nd == firstColor){
          removeSingleCells(col,row);
          removeSingleCells(oldCellX,oldCellY);
          board[col][row] = "0";
          board[oldCellX][oldCellY] = "0";
          doneNo++;
        }
        else{
          unmarkCell(oldCellX,oldCellY);
          overTurnNo++;
        }
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

        function numberOfClicks(){
              ctx.beginPath();
              ctx.fillStyle = "Black";
              ctx.fillRect(1.5 * cellSize, 0 * cellSize + 20, cellSize*2, cellSize);
              ctx.closePath();
              ctx.beginPath();
              ctx.fillStyle = "White";
              ctx.font = "36px Arial";
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillText("turns: "+turnNo,cellSize + 120, 0 * cellSize + 60);
              ctx.closePath();

              let donePc = Math.round(doneNo/colNo*100);
              ctx.beginPath();
              ctx.fillStyle = "Black";
              ctx.fillRect(4 * cellSize, 0 * cellSize + 20, cellSize*3.1, cellSize);
              ctx.closePath();
              ctx.beginPath();
              ctx.fillStyle = "White";
              ctx.fillText(""+donePc+"% complete",4 *cellSize + 120, 0 * cellSize + 60);
              ctx.closePath();

              let donePc2 = Math.round(doneNo/(colNo+overTurnNo)*100);
              ctx.beginPath();
              ctx.fillStyle = "Black";
              ctx.fillRect(7.5 * cellSize, 0 * cellSize + 20, cellSize*3.2, cellSize);
              ctx.closePath();
              ctx.beginPath();
              ctx.fillStyle = "White";
              ctx.fillText("score: "+donePc2+"%",7.5 *cellSize + 120, 0 * cellSize + 60);
              ctx.closePath();


                            if(donePc==100){//gameEnd
                              if(Math.random()*100<donePc2){
                                gameEndFlag = 1;//Richard wins
                              }
                              else{
                                gameEndFlag = 2;//Henry wins
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
            if(noOfEachColPc[i]==1){alert("GAME COMPLETED!\nYOU WIN!\nIn "+turnNo+" turns.\n\n'I am glad to see you well, Horatio!'");
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
var letArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
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
    //coordX = i;
    //console.log("x"+i);
    ctx.fillText(""+ coordX, i * cellSize+100+cellSize,  cellSize+40, 150);
    ctx.fillText(""+ coordX, i * cellSize+100+cellSize,  (gridSizeY+1)*cellSize+85, 150);
    //ctx.fillText("X", i * cellSize + cellSize / 2+140, 1 * cellSize + cellSize / 2+140);
    ctx.closePath();
  }

  for (let i = 1; i < gridSizeY+1; i++) {
      ctx.beginPath();
      ctx.font = "bold 36px Arial";
      ctx.fillStyle = "Yellow";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.lineWidth = "4";
      var coordX = +gridSizeY-i+1; //to count down from top
      //console.log("x"+i);
      ctx.fillText(""+ coordX, 120,  (i-1)*cellSize+185, 150);
      ctx.fillText(""+ coordX, (gridSizeX+1) * cellSize+80,   (i-1)*cellSize+185, 150);
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
