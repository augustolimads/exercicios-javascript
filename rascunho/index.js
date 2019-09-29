class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        console.log(`Olá me chamo ${this.nome} e tenho ${this.idade} anos.`);
    }

    status(){
        console.log(`nome: ${this.nome} | idade: ${this.idade}`);
    }
}

class Mago extends Pessoa{
    constructor(nome, idade, poder){
        super(nome, idade);
        this.poder = poder;
        console.log(poder);
    }
}
//------------------------------------------------------------------------------
let novaPessoa = new Mago("Augusto", 27, "fogo");
novaPessoa.status();


//------------------------------------------------------------------------------

/*let pessoa = {
    primeiroNome : 'Augusto',
    segundoNome : 'Lima',
    get nomeCompleto(){
        return `${this.primeiroNome} ${this.segundoNome}`;
    },
    set nomeCompleto(valor){
        const partes = valor.split(' ');
        this.primeiroNome = partes[0];
        this.segundoNome = partes[1];
    }
}

console.log(pessoa.nomeCompleto);
pessoa.nomeCompleto = 'Rafael Silva';
console.log(pessoa.nomeCompleto);*/


