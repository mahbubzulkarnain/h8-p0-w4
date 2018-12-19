/*
Logic Challenge - Password Generator

Problem
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga

function changeVocals (str) {
  //code di sini
}

function reverseWord (str) {
  //code di sini
}

function setLowerUpperCase (str) {
  //code di sini
}

function removeSpaces (str) {
  //code di sini
}

function passwordGenerator (name) {
  //code di sini
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

*/

function changeVocals (str) {
    //code di sini
    if(!!!str) return ''

    let listKata = 'abcdefghijklmnopqrstuvwxyz'
    let listVocal = 'aiueo'
    str = str.split('')

    for(let i=0;i<str.length;i++){
        for(let j=0;j<listVocal.length;j++){
            for(let k = 0;k<listKata.length;k++){
                if(str[i].toLowerCase()===listVocal[j].toLowerCase()){
                    if(str[i] === listKata[k].toLowerCase()){
                        str[i] = (k == listKata.length - 1 ? listKata[0] : listKata[k+1]).toLowerCase()
                        break
                    } else if(str[i] === listKata[k].toUpperCase()){
                        str[i] = (j == listKata.length - 1 ? listKata[0] : listKata[k+1]).toUpperCase()
                        break
                    }
                }
            }
        }
    }

    return str.join('')
}

function reverseWord (str) {
    //code di sini
    if(!!!str) return ''

    let result = ''

    for(let i=str.length-1;i>=0;i--){
        result += str[i]
    }

    return result
}

function setLowerUpperCase (str) {
    //code di sini
    if(!!!str) return ''

    let result = ''
    for(let i=0;i<str.length;i++){
        result+= (str[i] === str[i].toUpperCase() ? str[i].toLowerCase() : str[i].toUpperCase())
    }

    return result
}

function removeSpaces (str) {
    //code di sini
    if(!!!str) return ''
    
    return str.replace(/\s+/g, '')
}

function passwordGenerator (name) {
    //code di sini
    if(!!!name || name.length < 5) return "'Minimal karakter yang diinputkan adalah 5 karakter'"
    name = changeVocals(name)
    name = reverseWord(name)
    name = setLowerUpperCase(name)
    name = removeSpaces(name)
    return name
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
