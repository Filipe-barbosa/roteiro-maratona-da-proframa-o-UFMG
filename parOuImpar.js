// Par ou Impar

const testCase = [
  { nomes:['pedro','paulo'], input:[[2,4],[3,5],[1,0]]},
  { nomes:['claudio','carlos'],input:[[1,5],[2,3]] },
];

const evenOrOdd = (round)=>{
  if ((round[0]+round[1]) % 2 === 0 ){
    return  1  
  } else {
    return 0 
  }
}
let i=1
for (const test of testCase) {
    console.log (`teste ${i}`)
  for (const round of test.input){
     if(evenOrOdd(round)===1){
       console.log(test.nomes[0])
     } else{
     console.log(test.nomes[1])}
  }
  i++ 
}