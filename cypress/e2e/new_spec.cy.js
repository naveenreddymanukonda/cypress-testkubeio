describe('TA_',function(){

  it('TS_TC01',function(){
      cy.visit('https://testkube.io');
  })

  it('TS_TC02',function(){
      cy.contains('Easily store and download files generated by your tests from your Kubernetes cluster')
  })
  
   it('TS_TC03',function(){
      cy.get('#start_home').click();
  })
  
})
