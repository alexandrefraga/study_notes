const partners = [
    { name: 'Pedro'},
    { name: 'Alexandre'}
]

const contract = {
    id: 1,
    provider: { name: 'joao'},
    receiver: { name: 'Pedro'},
    contractualObject: {
        description: '30 aulas de música',
        initialDate: '14/06/2022',
        finalDate: '31/12/2022',
    },
    payment: { price: 30.00, dueDate: '31/07/2022' },
    rules: ['isReceiverPartner']
}

class RulesBuilder {
    constructor(contract){
        this._contract = contract
        this._rules = []
    }

    static of(contract){
        return new RulesBuilder(contract);
    }
    
    transform(){
        this._rules = this._contract.rules.map(rule => this[rule]())
        return this
    }

    async exec(){
        return await Promise.all(this._rules);
    }

    isReceiverPartner(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = partners.some(p => p.name === this._contract.receiver.name);
                console.log(`${this._contract.rules}: ${result}`)
                resolve(result)
            }, 1000)
        })
    }   

}


RulesBuilder.of(contract).transform().exec();