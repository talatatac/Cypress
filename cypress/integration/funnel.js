//describe and it come from Mocha
//expect comes from Chai

describe('Cypress', () => {
    it('Start', () => {
      expect(true).to.equal(true)
      cy.server()
    })
  })

describe('Visit Funnel Page', () => {
    it('URL Loads', () => {
        cy.visit('https://turk.net/taahhutsuz-ozgur-iletisim-abonelik')
    })
  })

  describe('Step: Information', () => {
    it('Fill the inputs', () => {
            cy.intercept('/service/SalesServ.svc/StartSale').as('StartSale')  //describe the route
            cy.get('#input-AdveSoyad').type('TurkNet Test')
            cy.get('#input-Email').type('test@gmail.com')
            cy.get('#input-Gsm').type('5555555555')
            cy.get(':nth-child(5) > label > i').click()
            cy.get('[style="max-width: 360px;"] > .btn').click()   
            cy.get('.open > :nth-child(1) > .section-footer > .gtm').click()    
            cy.wait(['@StartSale']).its('response.statusCode').should('eq', 200) //wait for fetch finished
    })
  })

  describe('Step: Address', () => {
      it('Fill the inputs', () => {
        cy.get('[style="margin-left: 16px;"] > .block-radio > input').click()
        cy.get('.open > :nth-child(1) > [style="margin-top: 11px; display: flex;"] > [style="margin-left: 16px;"] > .block-radio > input').click()   
      })
  })

  describe('Step: Address', () => {
    it('sliceGetBBKCountyList', () => {
      cy.intercept('/service/AddressServ.svc/GetBBKCountyList').as('GetBBKCountyList') 
      cy.get(':nth-child(1) > [lang="tr"] > .select-search-bbk > .search-bbk__control').click().type('İSTANBUL{enter}')
      cy.wait(['@GetBBKCountyList']).its('response.statusCode').should('eq', 200)        
    })
}) 
  
describe('Step: Address', () => {
    it('sliceGetBBKMahalleList', () => {
        cy.intercept('/service/AddressServ.svc/GetBBKBucakList').as('GetBBKBucakList')
        cy.intercept('/service/AddressServ.svc/GetBBKKoyList').as('GetBBKKoyList')
        cy.intercept('/service/AddressServ.svc/GetBBKMahalleList').as('GetBBKMahalleList')

        cy.get(':nth-child(2) > [lang="tr"] > .select-search-bbk > .search-bbk__control').type('BESİK{enter}')

        cy.wait(['@GetBBKBucakList']).its('response.statusCode').should('eq', 200)
        cy.wait(['@GetBBKKoyList']).its('response.statusCode').should('eq', 200)
        cy.wait(['@GetBBKMahalleList']).its('response.statusCode').should('eq', 200)
    })
})
describe('Step: Address', () => {
    it('sliceGetBBKCaddeList', () => {
        cy.intercept('/service/AddressServ.svc/GetBBKCaddeList').as('GetBBKCaddeList')
        cy.get(':nth-child(3) > [lang="tr"] > .select-search-bbk > .search-bbk__control').type('GAYRETTEPE{enter}')
        cy.wait(['@GetBBKCaddeList']).its('response.statusCode').should('eq', 200)
    })
})
describe('Step: Address', () => {
    it('sliceGetBBKBinaList', () => {
        cy.intercept('/service/AddressServ.svc/GetBBKBinaList').as('GetBBKBinaList')
        cy.get(':nth-child(4) > [lang="tr"] > .select-search-bbk > .search-bbk__control').type('CİMEN SOKA{enter}')
        cy.wait(['@GetBBKBinaList']).its('response.statusCode').should('eq', 200)  
    })
})
describe('Step: Address', () => {
    it('sliceGetBBKList', () => {
        cy.intercept('/service/AddressServ.svc/GetBBKList').as('GetBBKList')
        cy.get(':nth-child(5) > [lang="tr"] > .select-search-bbk > .search-bbk__control').type('GIRN{enter}')
        cy.wait(['@GetBBKList']).its('response.statusCode').should('eq', 200)  
    
    })
})
describe('Step: Address', () => {
    it('sliceGetBBK', () => {
        cy.get(':nth-child(6) > [lang="tr"] > .select-search-bbk > .search-bbk__control').type('16{enter}')
        cy.get('#Address > :nth-child(1) > .col > :nth-child(2) > :nth-child(1) > .section-footer > .gtm').click()
        
        cy.intercept('/service/SalesServ.svc/GetSmsVerificationStatus').as('GetSmsVerificationStatus')
        cy.wait(['@GetSmsVerificationStatus']).its('response.statusCode').should('eq', 200)  
    })
  })

  describe('Step: Preferences', () => {
    it('sliceGetSmsVerificationStatus', () => {    
        cy.get(':nth-child(5) > :nth-child(3) > :nth-child(1) > label > i').click() 
    })
  })