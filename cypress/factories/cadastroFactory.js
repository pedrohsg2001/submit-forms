// https://github.com/faker-js/faker
const {faker} = require('@faker-js/faker')
//https://www.npmjs.com/package/gerador-validador-cpf
var cpf = require('gerador-validador-cpf')

export default {
    cadastro: function() {

        var primeiroNome = faker.name.firstName()
        var segundoNome = faker.name.lastName()

        var dados = {
            name: `${primeiroNome} ${segundoNome}`,
            email: faker.internet.email(primeiroNome),
            telefone: 	faker.phone.phoneNumber('48 99###-####'),
            cpf: cpf.generate(),
            cep: '88115210',
            numero: faker.phone.number('###'),
            complemento: faker.phone.number('AP ##'),
            cnh: 'cnh-digital.jpg'
        }

        return dados
    }
}