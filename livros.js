// leitura de livros 
/* 
q=  td lida por dia 
D= dias aiantados se le-se 
P= numero maior de paginas lidas no dia
d= numero de dias
q*d = ?
q*d = p*(d-D)
q*d = p*d-p*D
-(p*d) +q*d= -p*D
 d*(-p+q) = -p*D
 d= -p*D / (-p+q)
 
 d= -p*D / (-p+q)

*/

const testCase=[3,16,5]
const calculatePages = (test)=>{
  const q  = test[0]
  const D = test[1]
  const p = test[2]
const d =  -p*D / (-p+q)

  return q*d
}

console.log(calculatePages(testCase))