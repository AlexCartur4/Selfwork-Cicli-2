for (let i = 1; i <= 20; i++){
    if (i % 2 === 0){
        console.log(i);
    }  
}

let sommaDispari = 0;

let conteggioDispari = 0;

for (let i = 1; i<= 20; i++){
    if (i % 2 !== 0 ){
        sommaDispari +=i;

        conteggioDispari++;
    }
}

let media = sommaDispari / conteggioDispari;

console.log('La media dei numeri dispari è ' + media);
