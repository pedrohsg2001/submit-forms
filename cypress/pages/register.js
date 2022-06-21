import cadastroFactory from '../factories/cadastroFactory'
class registerPage{

    visit(){
        cy.visit('/')
        cy.get('#root h1').should('be.visible')
        cy.get('main a[href="/deliver"]').click()
    }
    
    account(){
        var cadastro = cadastroFactory.cadastro()

        cy.get('input[name="name"]').type(cadastro.name)
        cy.get('input[name="cpf"]').type(cadastro.cpf)
        cy.get('input[name="email"]').type(cadastro.email)
        cy.get('input[name="whatsapp"]').type(cadastro.telefone)
        cy.get('input[name="postalcode"]').type(cadastro.cep)
        cy.get('input[value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(cadastro.numero)
        cy.get('input[name="address-details"]').type(cadastro.complemento)
        cy.get('img[alt="Moto"]').click()
        cy.get('input[type="file"]').attachFile(cadastro.cnh)
        cy.get('button[type="submit"]').click()
        cy.get('div[class="swal2-success-ring"]').should('be.visible')
    }  
}

export default new registerPage;