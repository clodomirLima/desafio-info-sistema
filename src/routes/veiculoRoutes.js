const express = require("express");
const app = express();
const VeiculoController = require("../controller/veiculoController");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const veiculoController = new VeiculoController();

app.get("/veiculos", async function (req, res, next) {
  try {
    const result = await veiculoController.findAllVeiculos();
    return res.json(result);
  } catch (error) {
    next(error.message);
  }
});

app.get("/veiculos/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const result = await veiculoController.findByIdVeiculo(id, res);
    return res.json(result);
  } catch (error) {
    next(error.message);
  }
});

// 🔹 Criar novo veículo
app.post("/veiculos", async function (req, res, next) {
  try {
    const body = req.body;
    const result = await veiculoController.createVeiculo(body, res);
    return res.json(result);
  } catch (error) {
    next(error);
  }
});

app.put("/veiculos/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await veiculoController.updateVeiculo(id, body, res);
    return res.json(result);
  } catch (error) {
    next(error.message);
  }
});

// 🔹 Excluir veículo
app.delete("/veiculos/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const result = await veiculoController.deletarVeiculo(id, res);
    return res.json(result);
  } catch (error) {
    next(error.message);
  }
});

module.exports = app;
