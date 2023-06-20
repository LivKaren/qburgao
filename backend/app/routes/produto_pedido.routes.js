module.exports = app => {
    const produto_pedidoController = require("../controllers/produto_pedido.controller");

    //Rota para criar um novo registro Produto
    app.post("/produtos_pedidos", produto_pedidoController.create);

    //Buscar todos os registros de Produtos
    app.get("/produtos_pedidos", produto_pedidoController.findAll);

    //Buscar apenas um registro de Produto
    app.get("/produtos_pedidos/:produto_pedidoId", produto_pedidoController.findById);

    //Alterar um registro de Produto
    app.put("/produtos_pedidos/:produto_pedidoId", produto_pedidoController.update);

    //Excluir um registro de Produto
    app.delete("/produtos_pedidos/:produto_pedidoId", produto_pedidoController.delete);

    //Excluir todos os registros de Produto
    app.delete("/produtos_pedidos", produto_pedidoController.deleteAll);
}