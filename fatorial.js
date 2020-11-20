// Dado um inteiro n<13, calcule n!.

const  fatorial = (number)=>{
  let result = 1
  for( let i = number; i>0;i--){
   result = result *i  
  }
  return result
}

console.log(fatorial(10))