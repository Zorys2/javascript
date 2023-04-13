var num = [5, 8 ,4 , 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`nosso vetor tem ${num.length} de tamanho`)
console.log(`nosso vetor é ${num[0]}`)
let pos = num.indexOf(20)

if(pos == -1) {
    console.log('tá moscano menó?')
} else {
    console.log(`O valor 8 está na posiçã0 ${pos}`)
}

