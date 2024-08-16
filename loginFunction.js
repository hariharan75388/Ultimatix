class Login {
  setEmpId(empId) {
    cy.get('#form1[name="form1"]').type(empId);
  }

  clickProceed() {
    cy.get('#proceed-button[type="button"]').click();
  }

  selectAuth() {
    cy.get("#easyAuth-btn").click();
  }
}

export default Login;
