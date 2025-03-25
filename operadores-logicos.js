// lembrar que os || significam ou e && significa E 
const notaFinal = 7;
const faltas = 5;
const advertencias = 0; 

if(notaFinal < 7 || faltas > 4){
    console.log('reprovado, boas festas !');
    
} else {
    console.log('nao foi reprovado por falta, boas festas !');
    
}

if(faltas >= 2 && !advertencias){
    console.log('Aprovado, boas festas !');
    
}