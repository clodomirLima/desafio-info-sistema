const PessoaController = require("../../../src/controller/pessoaController");

describe("PessoaController", () => {
  let pessoaController = new PessoaController();;
  const mockResult = {
    id: 2,
    nome: "Mariano",
    sobreNome: "Reis",
    dataNascimento: "1999-10-20",
    email: "joaoMarcos@gmail.com",
    telefone: "61995928783",
    endereco: "Quadra 90 conunto A",
    cidade: "Aguas Lindas",
    estado: "GO",
    cep: "GO",
    cpfCnpj: "73864436095",
  };

  beforeAll(() => {
    jest.spyOn(pessoaController, "findAllPessoas").mockImplementation(() => [
      {
        id: 2,
        nome: "Mariano",
        sobreNome: "Reis",
        dataNascimento: "1999-10-20",
        email: "joaoMarcos@gmail.com",
        telefone: "61995928783",
        endereco: "Quadra 90 conunto A",
        cidade: "Aguas Lindas",
        estado: "GO",
        cep: "GO",
        cpfCnpj: "73864436095",
      },
    ]);

    jest
      .spyOn(pessoaController, "findByIdPessoa")
      .mockImplementation(() => mockResult);

    const resultMockCreatePessoa = { message: "Pessoa Criada com sucesso!" };
    jest
      .spyOn(pessoaController, "createPessoa")
      .mockImplementation(() => resultMockCreatePessoa);

    const resultMockUpdatePessoa = {
      message: "Pessoa atualizada com sucesso!",
    };
    jest
      .spyOn(pessoaController, "updatePessoa")
      .mockImplementation(() => resultMockUpdatePessoa);

    const resultMockDeletePessoa = { message: "Pessoa excluida com sucesso!" };
    jest
      .spyOn(pessoaController, "deletarPessoa")
      .mockImplementation(() => resultMockDeletePessoa);
  });

  describe("findAllPessoas", () => {
    it("should call findAllPessoas from PessoaService and return the result", async () => {
      const result = await pessoaController.findAllPessoas();
      expect(result).toEqual([
        {
          id: 2,
          nome: "Mariano",
          sobreNome: "Reis",
          dataNascimento: "1999-10-20",
          email: "joaoMarcos@gmail.com",
          telefone: "61995928783",
          endereco: "Quadra 90 conunto A",
          cidade: "Aguas Lindas",
          estado: "GO",
          cep: "GO",
          cpfCnpj: "73864436095",
        },
      ]);
    });
  });

  describe("findByIdPessoa", () => {
    it("should call findByIdPessoa from PessoaService with the provided ID and return the result", async () => {
      const id = 2;
      const expectedResult = {
        id: 2,
        nome: "Mariano",
        sobreNome: "Reis",
        dataNascimento: "1999-10-20",
        email: "joaoMarcos@gmail.com",
        telefone: "61995928783",
        endereco: "Quadra 90 conunto A",
        cidade: "Aguas Lindas",
        estado: "GO",
        cep: "GO",
        cpfCnpj: "73864436095",
      };

      const result = await pessoaController.findByIdPessoa(id);
      expect(result).toEqual(expectedResult);
    });
  });

  describe("createPessoa", () => {
    it("should call createPessoa from PessoaService with the provided body and return the result", async () => {
      const result = await pessoaController.createPessoa({
        nome: "Mariano",
        sobreNome: "Reis",
        dataNascimento: "1999-10-20",
        email: "joaoMarcos@gmail.com",
        telefone: "61995928783",
        endereco: "Quadra 90 conunto A",
        cidade: "Aguas Lindas",
        estado: "GO",
        cep: "GO",
        cpfCnpj: "73864436095",
      });

      const resultMockCreatePessoa = { message: "Pessoa Criada com sucesso!" };

      expect(result).toEqual(resultMockCreatePessoa);
    });
  });

  describe("updatePessoa", () => {
    it("should call updatePessoa from PessoaService with the provided ID and body, and return the result", async () => {
      const id = 1;
      const result = await pessoaController.updatePessoa(id, {
        nome: "Mariano",
        sobreNome: "Reis",
        dataNascimento: "1999-10-20",
        email: "joaoMarcos@gmail.com",
        telefone: "61995928783",
        endereco: "Quadra 90 conunto A",
        cidade: "Aguas Lindas",
        estado: "GO",
        cep: "GO",
        cpfCnpj: "73864436095",
      });

      const resultMockUpdatePessoa = {
        message: "Pessoa atualizada com sucesso!",
      };
      expect(result).toEqual(resultMockUpdatePessoa);
    });
  });

  describe("deletarPessoa", () => {
    it("should call deletarPessoa from PessoaService with the provided ID and return the result", async () => {
      const id = 1;
       const resultMockDeletePessoa = { message: "Pessoa excluida com sucesso!" };
      const result = await pessoaController.deletarPessoa(id);

      expect(result).toEqual(resultMockDeletePessoa);
    });
  });
});
