export function maskNumber(number: number){
    return `R$ ${(number.toFixed(2)).replace('.', ',')}`;
}