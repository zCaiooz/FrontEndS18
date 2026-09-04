function calcularTotal(preco, quantidade) {
    return preco * quantidade;
}

// Permite usar a função nos testes com Jest
if (typeof module !== "undefined") {
    module.exports = { calcularTotal };
}