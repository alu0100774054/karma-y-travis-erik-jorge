var expect = chai.expect;

describe("Conversor", function () {
  describe("Constructor de la clase Medida", function() {
      it("Debería tener un Constructor", function() {
        var medida = new Medida(1, 'f');
        expect(medida.valor).to.equal(1);
      });
      it("Deberia poder recibir un solo parametro", function() {
        var medida = new Medida ('23e-1 c');
        expect(medida.valor).to.equal(23e-1);
        expect(medida.tipo).to.equal('c');
    });
  })
});
