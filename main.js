/**
 * Função para validar o número do cartão de crédito e identificar a bandeira.
 */
function validateCard() {
    // Obtém o valor do campo de entrada do número do cartão e remove espaços em branco
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s+/g, ''); 
    let result = 'Bandeira desconhecida'; // Valor padrão para bandeira desconhecida

    // Verifica se o número do cartão corresponde ao padrão Visa
    if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(cardNumber)) {
        result = 'Visa';
    } 
    // Verifica se o número do cartão corresponde ao padrão MasterCard
    else if (/^5[1-5][0-9]{14}$/.test(cardNumber)) {
        result = 'MasterCard';
    } 
    // Verifica se o número do cartão corresponde ao padrão Diners
    else if (/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(cardNumber)) {
        result = 'Diners';
    } 
    // Verifica se o número do cartão corresponde ao padrão American Express
    else if (/^3[47][0-9]{13}$/.test(cardNumber)) {
        result = 'American Express';
    } 
    // Verifica se o número do cartão corresponde ao padrão Discover
    else if (/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(cardNumber)) {
        result = 'Discover';
    } 
    // Verifica se o número do cartão corresponde ao padrão Hipercard
    else if (/^(606282\d{10}(\d{3})?)|(3841\d{15})$/.test(cardNumber)) {
        result = 'Hipercard';
    } 
    // Verifica se o número do cartão corresponde ao padrão Elo
    else if (/^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})$/.test(cardNumber)) {
        result = 'Elo';
    } 
    // Verifica se o número do cartão corresponde ao padrão JCB
    else if (/^(?:2131|1800|35\d{3})\d{11}$/.test(cardNumber)) {
        result = 'JCB';
    } 

    // Exibe o resultado da validação no elemento com id 'result'
    document.getElementById('result').textContent = result;
}
