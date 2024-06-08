const boleto = 'regular';

// let codigoAcceso;

/* if(boleto == 'vip'){
    codigoAcceso = 'VIP-123'
} else {
    codigoAcceso = 'REGULAR-456'
}; */

// let codigoAcceso = boleto == 'vip' ? 'VIP-123' : 'REGULAR-456';

// console.log(codigoAcceso);

const codigoDeAcceso = boleto === 'vip' ? 'VIP-123-456' : 'REGULAR-456-789';

boleto === 'vip' ? console.log('Tu boleto es de tipo VIP') : console.log('Tu boleto es de tipo REGULAR');