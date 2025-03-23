
function calcular() {
   
   
   //let num1 = parseFloat(prompt('Write the first number'));
   let num1 = parseFloat(document.getElementById('num1').value);
   //let num2 = parseFloat(prompt('Write the second number'));
   let num2 = parseFloat(document.getElementById('num2').value);
   
   //let operacion = prompt('Shoose a operation : suma, resta, multiplicacion,  division');
   let operacion = document.getElementById('operacion').value;
   
   let resultado ;
   
   if (operacion === 'suma') {
      resultado = num1 + num2
   }else if (operacion === 'resta') {
      resultado = num1 - num2;
   }else if (operacion === 'multiplicacion') {
      resultado = num1 * num2;
   }else if (operacion === 'division') {
      if (num2 !== 0) {
         resultado = num1 / num2;
      }else{ resultado = 'Error no se puede dividir entre 0' }
   }else{
      resultado = 'Operacion no valida';
   }

   document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
   
   //console.log('Resultado' , resultado);

   
}

const reset = ()=> {

   document.getElementById('num1').value = '';
   document.getElementById('num2').value = '';
   document.getElementById('operacion').value = 'suma';
   document.getElementById('resultado').textContent = 'Resultado: '

}