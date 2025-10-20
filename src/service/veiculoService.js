const Veiculo = require("../models/veiculo");
const Database = require("../database/conectDB");

class VeiculoService {
  async findAllVeiculos() {
    const db = new Database();
    db.init();
    try {
      const result = await Veiculo.findAll();
      return result;
    } catch (error) {
      throw new Error(error.message);
    } finally {
      db.close();
    }
  }

  async findByIdVeiculo(id, res) {
    const db = new Database();
    db.init();
    try {
      const result = await Veiculo.findOne({
        where: { id },
      });

      if (!result) {
        return res.status(400).send({ message: "Veículo não encontrado" });
      }

      return result;
    } catch (error) {
      throw new Error(error.message);
    } finally {
      db.close();
    }
  }

  async createVeiculo(body, res) {
    const db = new Database();
    db.init();
    try {
      const { placa, chassi, renavam, modelo, marca, ano } = body;

      // Validação simples (pode ser expandida)
      if (!placa || !chassi || !renavam || !modelo || !marca || !ano) {
        return res.status(400).send({ message: "Campos obrigatórios ausentes" });
      }

      const created = await Veiculo.findOrCreate({
        where: { placa },
        defaults: {
          placa,
          chassi,
          renavam,
          modelo,
          marca,
          ano,
        },
      });

      if (created[1]) {
        return { message: "Veículo criado com sucesso!" };
      }

      return res.status(400).send({ message: "Esse veículo já está cadastrado!" });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      db.close();
    }
  }

  async updateVeiculo(id, body, res) {
    const db = new Database();
    db.init();
    try {
      const { placa, chassi, renavam, modelo, marca, ano } = body;

      const result = await Veiculo.update(
        {
          placa,
          chassi,
          renavam,
          modelo,
          marca,
          ano,
        },
        { where: { id } }
      );

      if (result[0] > 0) {
        return { message: "Veículo atualizado com sucesso!" };
      }

      return res.status(404).send({ message: "Veículo não encontrado!" });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      db.close();
    }
  }

  async deletarVeiculo(id, res) {
    const db = new Database();
    db.init();
    try {
      const result = await Veiculo.destroy({
        where: { id },
      });

      if (result) {
        return { message: "Veículo excluído com sucesso!" };
      }

      return res.status(404).send({ message: "Veículo não encontrado!" });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      db.close();
    }
  }
}

module.exports = VeiculoService;
