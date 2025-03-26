const notaPrimeiroBim = 8;
const notaSegundoBom = 6.3;
const notaTerceiroBim = 7;
const notaQuartoBim = 9.3;

let media = (notaPrimeiroBim + notaSegundoBom + notaTerceiroBim + notaQuartoBim) / 4;

if(media >= 7){
    media += media * 0.1;
}

console.log(`a media é ${media.toFixed[2]}`);
