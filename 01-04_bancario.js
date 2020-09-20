//conta bancaria
const user = {
    name: 'Wendell',
    transactions:[],
    balance:0
}

//adicionar transaçoes
function createTransaction(transaction) {
    user.transactions.push(transaction)
    if (transaction.type === 'credit') {
        user.balance += transaction.value
    } else {
        user.balance -= transaction.value
    }
}

//RELATÓRIOS
//retorna o objeto da transaçao  de maior valor com aquele tipo
function getHigherTransactionByType(type){
    let higherTransaction
    let higherValue = 0 
    for(transaction of user.transactions){
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }
    return higherTransaction
} 

//retorna o valor medio das transaçoes
function getAverageTransactionValue() {
    let soma = 0
    for (transaction of user.transactions){
        soma += transaction.value
    }
    return soma / user.transactions.length
}

//retorna o numero de transaçoes de cada tipo
function getTransactionsCount() {
    let conta = {
        credit: 0,
        debit: 0
    }
    for(transaction of user.transactions){
        if (transaction.type === 'credit') {
            conta.credit++
        }else{
            conta.debit++
        }
    }
    return conta
}

//chamada da criaçao de transaçao
createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

//chamada do saldo
console.log(`O saldo de ${user.name} é de $ ${user.balance}`)

//chamada das funçoes
console.log('Transações mais altas:')
console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))

console.log('O valor médio das transações é de $',getAverageTransactionValue())

console.log('A conta tem um total de: ',getTransactionsCount())