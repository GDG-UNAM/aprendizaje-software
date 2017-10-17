function tamaño() {
  var largo = Math.ceil(Math.random()*900)
  var ancho = Math.ceil(Math.random()*2000)
  console.log("largo: "+largo+", ancho: "+ancho);
  document.getElementById('Botton').style.width = (ancho+"px")
  document.getElementById('Botton').style.height = (largo+"px")

}
