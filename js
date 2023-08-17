function calcular() {
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);

    var media = (n1+n2)/2;
    document.getElementById('resultado').innerText = "media = " + media.toFixed(2);

    if (media <= 50 ){
        document.body.style.backgroundColor = "darkred"
        document.body.style.color = "wheat"
        document.getElementById('imagem').src = "image3.png"

    } else if (media <= 75){
        document.body.style.backgroundColor = "green"
        document.body.style.color = "wheat"
        document.getElementById('imagem').src = "image2.png"

    } else     if (media <= 95 ){
        document.body.style.backgroundColor = "blue"
        document.body.style.color = "wheat"
        document.getElementById('imagem').src = "image1.png"

    } else     if (media <= 100 ){
        document.body.style.backgroundColor = "purple"
        document.body.style.color = "wheat"
        document.getElementById('imagem').src = "image.png"

    } 
}
    function dmode() {

        if (document.body.style.backgroundColor === 'white'){
            document.body.style.backgroundColor = "black";
            document.body.style.color ="white";
        } else {
            document.body.style.backgroundColor ="white";
            document.body.style.color="white";
        }

        if (document.body.style.backgroundColor=='white'){
            document.getElementById('img').src = "luaclara.png";
        }else {
                document.body.style.backgroundColor='black';
                document.getElementById('img').src = "sol.png";
            }
    }
