function calcularMedia() {
    // Obter os valores dos inputs
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    var num3 = parseFloat(document.getElementById('number3').value);
    var num4 = parseFloat(document.getElementById('number4').value);
    var num5 = parseFloat(document.getElementById('number5').value);

    // Calcular a média
    var media = (num1 + num2 + num3 + num4 + num5) / 5;

    // Exibir o resultado
    document.getElementById('resultado'). innerHTML= 'A média aritmética é: ' + media.toFixed(2);
}
