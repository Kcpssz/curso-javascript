/*quando utilizamos apenas dois == para comparar, estamos comparando apenas o valor
mas quando utilizamos 3 === ele nao cmopara apenas o conteudo e valor ele tbm ta comparando o TIPO de dado inserido*/

//DICA, sempre utilizar os tres igual === pois gera um resultado de uma comparação mais precisa e evita futuros bugs

const aprovado = true;

if(aprovado === true){
    console.log('aprovado');
    
}

if('0' === 0){

    console.log('passou na comparação');

}else{
    console.log('nao passou na comparação');
    
}