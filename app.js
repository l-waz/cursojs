let titulo = document.querySelector('h1');
titulo.innerHTML = 'Aula de Lógica da Programação';

function Aprovado(){
        alert(`Hoje você não precisa estudar para o vestibular, você foi aprovado em Direito na UFPR, meus parabéns`);
}


function resultadoSoma(){
    let numero1 = parseInt(prompt('Informe um número.'));
    let numero2 = parseInt(prompt('Informe um número.'));

    let soma = numero1 + numero2;

    alert(`A soma de ${numero1} e ${numero2} é igual a: ${soma}`);
}


function imc(){

    let peso = prompt('informe o seu peso em quiligramas')
    let alturaMetros = prompt('informe sua altura em metros separado por ponto ex 1.83')
    let imc = peso / (alturaMetros * alturaMetros);
    alert(`seu imc é ${imc}`)

  }
  
