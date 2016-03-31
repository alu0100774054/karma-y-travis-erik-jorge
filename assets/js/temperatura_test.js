var expect = require('chai').expect

describe("Medida", function () {
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
  describe("funcion match", function () {
    it("debería cazar bien", function () {
      var valor = Medida.match('1e-1 f to c');
      expect(parseFloat(valor.val)).to.equal(1e-1);
      expect(valor.tip).to.equal('f');
      expect(valor.para).to.equal('c');
    });
  });
  describe("funcion convertir", function () {
    it("deberia convertir correctamente", function() {
      var conv = Medida.convertir('1e-1 f to c');
      expect(conv).to.equal('-17.72 Celsius');
    });
  });
});

describe("Clase Temperatura", function () {
  describe("constructor temperatura", function() {
    it("deberia tener un constructor", function() {
      var temperatura = new Temperatura (10, 'c');
      expect(temperatura.valor).to.equal(10);
    });
    it("deberia poder recibir un solo parametro", function() {
      var temperatura = new Temperatura ('10 c');
      expect(temperatura.valor).to.equal(10);
      expect(temperatura.tipo).to.equal('c');
    });
  });
  describe("Clase Fahrenheit", function () {
    describe("constructor fahrenheit", function () {
      it("deberia tener un constructor", function () {
        var far = new Fahrenheit (10e-1);
        expect(far.valor).to.equal(10e-1);
      });
    });
  });
  describe("funciones de fahrenheit", function () {
    it("debe convertir a celsius", function () {
      var far = new Fahrenheit (32);
      expect(far.toCelsius()).to.equal(0);
    });
    it("debe convertir a kelvin", function () {
      var far = new Fahrenheit (5);
      expect(far.toKelvin()).to.equal(258.15);
    });
  });
});

describe("Clase Celsius", function () {
  describe("constructor celsius", function () {
    it("deberia tener un constructor", function () {
      var cel = new Celsius (32);
      expect(cel.valor).to.equal(32);
    });
  });
  describe("funciones de celsius", function () {
    it("debe convertir a fahrenheit", function () {
      var cel = new Celsius (0);
      expect(cel.toFahrenheit()).to.equal(32);
    });
    it("debe convertir a kelvin", function () {
      var cel = new Celsius (0);
      expect(cel.toKelvin()).to.equal(273.15);
    });
  });
});

describe("Clase Kelvin", function () {
  describe("constructor kelvin", function () {
    it("deberia tener un constructor", function () {
      var kel = new Kelvin (880e-1);
      expect(kel.valor).to.equal(880e-1);
    });
  });
  describe("funciones de kelvin", function () {
    it("debe convertir a celsius", function () {
      var kel = new Kelvin (880e-1);
      expect(parseFloat(kel.toCelsius().toFixed(2))).to.equal(-185.15);
    });
    it("debe convertir a fahrenheit", function () {
      var kel = new Kelvin (880e-1);
      expect(parseFloat(kel.toFahrenheit().toFixed(2))).to.equal(-301.27);
    });
  });
});
