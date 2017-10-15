function myFunction() {
    lista = ["blue", "red", "green", "gray", "black"]

    for (var i = 0; i < lista.length; i++) {
        var color = Math.floor(Math.random()*5)
        document.getElementById('demo').innerHTML = (lista[color])
        if (i == 4){
        document.getElementById('demo').style.color = (lista[color])
        }
    }

}
