//document.querySelector(".total").textContent=document.querySelector(".unitario").textContent*document.querySelector(".qtde").textContent

// 1° Captura as encomendas da tabela
var clientes = document.querySelectorAll(".cliente");

// 2° Passa for todas as encomendas e calcula o valor total
/*for (var count=0; count < clientes.length; count++){
    clientes[count].querySelector(".total").textContent = clientes[count].querySelector(".unitario").textContent*clientes[count].querySelector(".qtde").textContent;

}*/

for (var count=0; count < clientes.length; count++){
    // Quantidade da encomenda
    var qtde = clientes[count].querySelector(".qtde").textContent ;
    // Valor unitário da encomenda 
    var unitario = clientes[count].querySelector(".unitario").textContent ;
    // Verificar se a encomenda é válida
    if (qtde < 1 || isNaN(qtde)){
        // A quantidade é menos que 1 ou não é numérica
        clientes[count].querySelector(".qtde").textContent = "Quantidade inválida!";
        /*clientes[count].querySelector(".qtde").style.color = "red"; //linha */
        /*clientes[count].style.color = "red"; // coluna */
        clientes[count].style.backgroundColor = "red"; // toda coluna
        clientes[count].style.color = "white";
    }else{
        // Calcula e exibe o total
        clientes[count].querySelector(".total").textContent = calculaTotal(qtde,unitario); /*qtde * unitario*/ 
    }

    if (unitario < 1 || isNaN(unitario)) {
        clientes[count].querySelector(".qtde").textContent = "Quantidade inválida!";
        clientes[count].style.backgroundColor = "red";
        clientes[count].style.color = "white";
    } else {
        // Calcula e exibe o total
        clientes[count].querySelector(".total").textContent = calculaTotal(qtde, unitario);

        // Formata e exibe o valor unitário
        clientes[count].querySelector(".unitario").textContent = formataValor(unitario);
    }
}

// Função que calcula o total
function calculaTotal(qtde, unit) {
    var total = qtde * unit;
    return formataValor(total);
}

// Função que formata valores com R$
function formataValor(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

