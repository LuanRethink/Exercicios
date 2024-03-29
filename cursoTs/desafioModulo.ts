// Exercício 1 - Classe

class Moto {
    nome: string
    velocidade: number
    
    constructor(nome: string){
        this.nome = nome;
        this.velocidade = 0;
    }
     acelerar(delta:number) {
        this.velocidade += delta;
    }
    buzinar(){
        console.log('Buzina')
    }
}


// function Moto(nome) {
//     this.nome = nome
//     this.velocidade = 0
 
//     this.buzinar = function() {
//         console.log('Toooooooooot!')
//     }
 
//     this.acelerar= function(delta) {
//         this.velocidade = this.velocidade + delta
//     }
// }
 
// var moto = new Moto('Ducati')
// moto.buzinar()
// console.log(moto.velocidade)
// moto.acelerar(30)
// console.log(moto.velocidade)
 

// Exercício 2 - Herança

abstract class Objeto2D{
    constructor(public base:number=0, public altura:number=0){

    }
    abstract area(): number
}

class Retangulo extends Objeto2D{
    area(): number{
        return this.base * this.altura;
    }
}

const retangulo = new Retangulo(3,5);

//console.log(retangulo.area())
 
// Exercício 3 - Getters & Setters

class Estagiario {
    private _primeiroNome: string=""
    get primeiroNome(){
        return this._primeiroNome
    }
    set primeiroNome(valor:string){
        if (valor.length >= 3) {
        this._primeiroNome = valor
            } else {
            this._primeiroNome = ''
        }
    }
}

const estagiario = new Estagiario()


// var estagiario = {
//     _primeiroNome: ''
// }
 
// Object.defineProperty(estagiario, 'primeiroNome', {
//     get: function () {
//         return this._primeiroNome
//     },
//     set: function (valor) {
//         if (valor.length >= 3) {
//             this._primeiroNome = valor
//         } else {
//             this._primeiroNome = ''
//         }
//     },
//     enumerable: true,
//     configurable: true
// })
 
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Le'
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Leonardo'
// console.log(estagiario.primeiroNome)