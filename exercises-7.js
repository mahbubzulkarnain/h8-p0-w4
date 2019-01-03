/*
Logic Challenge - Mengurutkan Abjad

Problem
Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.

Code
function urutkanAbjad(str) {
  // you can only write your code here!
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
*/

function urutkanAbjad(str) {
    // you can only write your code here!
    if(!!!str || typeof str !== 'string') return ''

    let hasSort = false
    let temp = ''

    let input = str
    str = []
    for(let i = 0;i<input.length;i++){
        str[str.length] = input[i]
    }
    while(!hasSort){
        for(let i=0;i<str.length;i++){
            for(let j=i;j<str.length;j++){
                if(str[i]>str[j]){
                    temp = str[i]
                    str[i] = str[j]
                    str[j] = temp
                }
            }
        }

        for(let i=0;i<str.length;i++){
            for(let j=i;j<str.length;j++){
                if(str[i]>str[j]){
                    hasSort = false
                    break
                }else{
                    hasSort = true
                }
            }
        }
    }
    input = str
    str = ''
    for (let i = 0;i<input.length;i++){
        str+=input[i]
    }

    return str
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'