function somar() {

    var ano_at = document.getElementById("ano-at").value;
    var ano_nc = document.getElementById("ano-nc").value;
    var resultado = document.getElementById("resultado");
    var img = document.getElementById("img");

    var resul = ano_at - ano_nc;

    if (resul === 1) {
        resultado.innerHTML = "sua idade: " + resul + " ano";
        img.src = "./linkedin.svg";


    } else if (resul < 0) {

        resultado.innerHTML = "impossível alguém ter nascido";

    } else if (resul > 127) {
        resultado.innerHTML = "provavelmente essa pessoa se encontra falecida";

    } else if (resul == 0) {
        resultado.innerHTML = "provávelmente nasceu esse ano";
        img.src = "./linkedin.svg";


    } else {

        resultado.innerHTML = "sua idade: " + resul + " anos";
        img.src = "./linkedin.svg";


    }






    function carregar() {
        resultado.innerHTML = " digite suas datas";
        img.src = "./github-square.svg";
    }
    setInterval(carregar, 10000);


}