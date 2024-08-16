import Login from "./loginFunction";
describe("Landing Page Test Suite", function () {
  it("Test case 1", function () {
    cy.visit(
      "https://auth.ultimatix.net/utxLogin/login?TYPE=33554432&REALMOID=06-9ed1ab3e-4343-420c-b058-68beeef4c9ff&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=-SM-EdbHMX6T%2bWb8DN7DVmL5sbY%2bn%2b30S7n%2fgIBptYa9dLbudResX4AYm9ObPeNozoDH&TARGET=-SM-https%3a%2f%2fwww%2eultimatix%2enet%2f"
    );
    cy.title().should("eq", "Ultimatix - Digitally Connected!");

    const ln = new Login();
    ln.setEmpId("2063772");
    ln.clickProceed();
    ln.selectAuth();
  });
});
