
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const adequacao =  ((circunferencia/percentil) * 100).toFixed(2);
});


if (sexo === 'feminino') {
    if (idade >= 1 && idade <= 1.9) {
            adequacao = (circunferencia/15.7) * 100
    } else if (idade >= 2 && idade <= 2.9) {
        adequacao = (circunferencia/16.1) * 100
    } else if (idade >= 3 && idade <= 3.9) {
        adequacao = (circunferencia/16.6) * 100
    } else if (idade >= 4 && idade <= 4.9) {
        adequacao = (circunferencia/17.0) * 100
    } else if (idade >= 5 && idade <= 5.9) {
        adequacao = (circunferencia/17.5) * 100
    } else if (idade >= 6 && idade <= 6.9) {
        adequacao = (circunferencia/17.8) * 100
    } else if (idade >= 7 && idade <= 7.9) {
        adequacao = (circunferencia/18.6) * 100
    } else if (idade >= 8 && idade <= 8.9) {
        adequacao = (circunferencia/19.5) * 100
    } else if (idade >= 9 && idade <= 9.9) {
        adequacao = (circunferencia/20.6) * 100
    }



}
