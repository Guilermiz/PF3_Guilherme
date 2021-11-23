function simular(){
    let valorAplicado = document.getElementById('inputValorAplicado').value;
    let taxaJuros = (document.getElementById('inputTaxaJuros').value) / 100;
    let qtdParcelas = document.getElementById('inputQtdParcelas').value;

    let operacao = valorAplicado * (((1 + taxaJuros) ** qtdParcelas - 1) / taxaJuros);
    let resultado = operacao.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    let mensagem = `Se você aplicar R$ ${valorAplicado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})},` + 
    ` à taxa de juros de ${taxaJuros * 100}% ao mês, durante ${qtdParcelas} meses, acumulará uma poupança de ${resultado}`

    alert(mensagem);
}