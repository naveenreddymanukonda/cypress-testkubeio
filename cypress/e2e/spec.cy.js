

 describe('cypress test suite sample',function(){

  it('CTSS_TS01_TC01',function(){
      cy.visit('https://testkube.io');
  })

  it('CTSS_TS01_TC02',function(){
      cy.contains('Easily store and download files generated by your tests from your Kubernetes cluster')
  })
  
   it('CTSS_TS01_TC03',function(){
      cy.get('#start_home').click();
  })
  
})
