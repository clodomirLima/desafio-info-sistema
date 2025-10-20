const VeiculoController = require("../../../src/controller/veiculoController");

describe("VeiculoController", () => {
  let veiculoController = new VeiculoController();
  const mockResult = {
    id: 1,
    placa: "ABC1D23",
    chassi: "9BWZZZ377VT004251",
    renavam: "12345678901",
    modelo: "Gol 1.6",
    marca: "Volkswagen",
    ano: 2019,
  };

  beforeAll(() => {
    jest.spyOn(veiculoController, "findAllVeiculos").mockImplementation(() => [
      mockResult,
    ]);

    jest
      .spyOn(veiculoController, "findByIdVeiculo")
      .mockImplementation(() => mockResult);

    const resultMockCreateVeiculo = { message: "Veículo criado com sucesso!" };
    jest
      .spyOn(veiculoController, "createVeiculo")
      .mockImplementation(() => resultMockCreateVeiculo);

    const resultMockUpdateVeiculo = { message: "Veículo atualizado com sucesso!" };
    jest
      .spyOn(veiculoController, "updateVeiculo")
      .mockImplementation(() => resultMockUpdateVeiculo);

    const resultMockDeleteVeiculo = { message: "Veículo excluído com sucesso!" };
    jest
      .spyOn(veiculoController, "deletarVeiculo")
      .mockImplementation(() => resultMockDeleteVeiculo);
  });

  describe("findAllVeiculos", () => {
    it("should call findAllVeiculos from VeiculoService and return the result", async () => {
      const result = await veiculoController.findAllVeiculos();
      expect(result).toEqual([mockResult]);
    });
  });

  describe("findByIdVeiculo", () => {
    it("should call findByIdVeiculo from VeiculoService with the provided ID and return the result", async () => {
      const id = 1;
      const result = await veiculoController.findByIdVeiculo(id);
      expect(result).toEqual(mockResult);
    });
  });

  describe("createVeiculo", () => {
    it("should call createVeiculo from VeiculoService with the provided body and return the result", async () => {
      const body = {
        placa: "ABC1D23",
        chassi: "9BWZZZ377VT004251",
        renavam: "12345678901",
        modelo: "Gol 1.6",
        marca: "Volkswagen",
        ano: 2019,
      };
      const result = await veiculoController.createVeiculo(body);
      const resultMockCreateVeiculo = { message: "Veículo criado com sucesso!" };
      expect(result).toEqual(resultMockCreateVeiculo);
    });
  });

  describe("updateVeiculo", () => {
    it("should call updateVeiculo from VeiculoService with the provided ID and body, and return the result", async () => {
      const id = 1;
      const body = {
        placa: "ABC1D23",
        chassi: "9BWZZZ377VT004251",
        renavam: "12345678901",
        modelo: "Gol 1.6",
        marca: "Volkswagen",
        ano: 2019,
      };
      const result = await veiculoController.updateVeiculo(id, body);
      const resultMockUpdateVeiculo = { message: "Veículo atualizado com sucesso!" };
      expect(result).toEqual(resultMockUpdateVeiculo);
    });
  });

  describe("deletarVeiculo", () => {
    it("should call deletarVeiculo from VeiculoService with the provided ID and return the result", async () => {
      const id = 1;
      const resultMockDeleteVeiculo = { message: "Veículo excluído com sucesso!" };
      const result = await veiculoController.deletarVeiculo(id);
      expect(result).toEqual(resultMockDeleteVeiculo);
    });
  });
});
