function BG() {
  document.getElementById('body').style.backgroundColor = clr()
}
var clr = function color() {
  var cat = "#"
  var letters = new Array("0","1","2","3", "4", "5","6","7", "8", "9","A","B","C","D","E", "F")
  var inf= 0
  var sup= letters.length -1
  for (var i = 0; i < 6; i++) {
    cat += letters[numRam(sup, inf)]
  }
  return cat
}

function numRam(sup, inf) {
  var numPos = (sup+1) - inf
  var hs = Math.random()* numPos
  hs = Math.floor(hs)
  return parseInt(inf)+ hs
}
