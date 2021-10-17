describe('verify the checkout functionality', () => {

    it('validate the add to cart functionality', () => {

        cy.visit('/')

        cy.fixture('example').then(function (data) {

            cy.get('.hamburger-icon > .icon-nav').click()
            cy.wait(3000)
            cy.get('.site-nav > :nth-child(2)').click()
            cy.wait(2000)
            cy.get(':nth-child(2) > .sub-menu-mobile > .site-nav-dropdown > :nth-child(3) > a').click()
            cy.url().should('contain', 'seasonal')
            cy.get('.product-grid-image').eq(4).click()

            cy.get('.groups-btn > .checkbox-group > .title').click()
            cy.get('#product-add-to-cart').click()
            cy.get('.btn-go-to-cart').click()
            cy.get('h1').should('contain', 'My Cart')
            cy.get('.btn-actions > .checkbox-group > .title').click()
            cy.wait(10000)
            cy.get(':nth-child(4) > :nth-child(2) > .ui-state-default').click()
            cy.get('.btn-actions > .btn-checkout').click()
            cy.get('.step__footer__previous-link-content').should('contain', 'Return to cart')



            
             cy.shipping(data)
            //  cy.get('#continue_button').click()

        })



    })


})