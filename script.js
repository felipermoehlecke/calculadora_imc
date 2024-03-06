const resultado = document.querySelector('#resultado');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');

const calcIMC = () => {
  const alturaValue = parseFloat(altura.value);
  const pesoValue = parseFloat(peso.value);

  if (isNaN(alturaValue) || isNaN(pesoValue)) {
    resultado.innerHTML = 'Por favor, insira valores numéricos válidos.';
    return;
  }

  const imc = (pesoValue / (alturaValue * alturaValue)).toFixed(2);
  const classificationMessages = {
    18.5: 'Abaixo do peso',
    25: 'Peso normal',
    30: 'Acima do peso',
    35: 'Obesidade Grau I',
    41: 'Obesidade Grau II',
    Infinity: 'Obesidade Grau III'
  };

  let classification = '';
  for (const threshold in classificationMessages) {
    if (imc < parseFloat(threshold)) {
      classification = classificationMessages[threshold];
      break;
    }
  }

  resultado.innerHTML = `IMC: ${imc} (${classification})`;
};

