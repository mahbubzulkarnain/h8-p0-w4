/*
Logic Challenge - Faktor Persekutuan Terbesar

Problem
Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.

Code
function fpb(angka1, angka2) {
  // you can only write your code here!
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
*/

function fpb(angka1, angka2) {
    // you can only write your code here!
    if(!!!angka1 || !!!angka2) return -1

    let max = (angka1 < angka2 ? angka1 : angka2)
    let result = -1

    for(let i=2;i <= max; i++){
        if(angka1 % i == 0 && angka2 % i == 0){
            result = i;
        }
    }

    return result
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1