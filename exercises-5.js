/*
Logic Challenge - Ubah Huruf

Problem
Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya. Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.

Code
function ubahHuruf(kata) {
  // you can only write your code here!
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
*/

function ubahHuruf(kata) {
    // you can only write your code here!
    kata.replace(/[^a-z]/g, '')
    if(!!!kata || typeof kata!= 'string') return ''
    let listKata = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''
    for(let i = 0;i < kata.length; i++){
        for(let j=0;j < listKata.length;j++){
            if(kata[i] == listKata[j]){
                result+= listKata[(j == listKata.length-1 ? 0 : j+1 )]
                break;
            }
        }
    }
    return result
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu