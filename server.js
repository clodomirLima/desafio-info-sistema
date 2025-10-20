const express = require("express");
const app = express();
const pessoaRoutes = require("./src/routes/routes");
const veiculoRoutes = require("./src/routes/veiculoRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(pessoaRoutes);
app.use(veiculoRoutes);

function normalizaPort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}

const port = normalizaPort(process.env.PORT || 3000);

app.listen(port, function () {
  console.log(`🚀 Aplicação rodando na porta: ${port}`);
});

module.exports = app;
