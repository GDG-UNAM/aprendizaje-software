var lista= ['Azul','Verde','Rojo','Gris','Negro'];
 
 for(var contador = 0; contador < lista.length; contador ++){

 document.getElementById("colores").innerHTML = lista;
}

 function changeColor(x)

{

    if(x.style.background=="rgb(247, 211, 88)")

    {

        x.style.background="green";

    }else{

        x.style.background="green";

    }

    return false;

}