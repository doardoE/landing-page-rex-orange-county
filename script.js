function leiaMais()
{
    var pontos = document.getElementById("pontos")
    var maisTexto = document.getElementById("mais")
    var ler_mais = document.getElementById("ler_mais")
    
    if(pontos.style.display == "none")
    {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        ler_mais.innerHTML = "Leia Mais";
    }
    else
    {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        ler_mais.innerHTML = "Leia Menos";
    }
}

