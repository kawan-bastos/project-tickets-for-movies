

function comprar() {
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let qtdDeIngresso = Number(document.getElementById("qtd").value);
    let pista = Number(document.getElementById("qtd-pista").innerText);
    let superior = Number(document.getElementById("qtd-superior").innerText);
    let inferior = Number(document.getElementById("qtd-inferior").innerText);  
    console.log(tipoIngresso);
    console.log(qtdDeIngresso);
    
    if (!verificar(qtdDeIngresso, tipoIngresso)) {
        return;
    }
    
    if (tipoIngresso === "pista") {
       pista = pista - qtdDeIngresso;
         document.getElementById("qtd-pista").innerText = pista;
    
    } else if (tipoIngresso === "superior") {
       superior = superior - qtdDeIngresso;
         document.getElementById("qtd-superior").innerText = superior;
    
    } else if (tipoIngresso === "inferior") {
       inferior = inferior - qtdDeIngresso;
         document.getElementById("qtd-inferior").innerText = inferior;
    } else {
       alert("Tipo de ingresso inválido");
    };

    
   

}  


function verificar(qtd, tipoIngresso) {
    let pista = Number(document.getElementById("qtd-pista").innerText);
    let superior = Number(document.getElementById("qtd-superior").innerText);
    let inferior = Number(document.getElementById("qtd-inferior").innerText);
    
    if ( tipoIngresso === "pista" && qtd > pista) {
        alert("Verique a quantidade de ingressos disponíveis");
        return false;
    }
    if (tipoIngresso === "superior" && qtd > superior  ) {
        alert("Verique a quantidade de ingressos disponíveis");
        return false;
    }
    if ( tipoIngresso === "inferior" && qtd > inferior ) {
        alert("Verique a quantidade de ingressos disponíveis");
        return false;
    }
    return true;
}        