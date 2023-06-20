module.exports = app => {
    const pedidoController = require("../controllers/pedido.controller");

    //Rota para criar um novo registro Produto
    app.post("/pedidos", pedidoController.create);

    //Buscar todos os registros de Produtos
    app.get("/pedidos", pedidoController.findAll);

    //Buscar apenas um registro de Produto
    app.get("/pedidos/:pedidoId", pedidoController.findById);

    //Alterar um registro de Produto
    app.put("/pedidos/:pedidoId", pedidoController.update);

    //Excluir um registro de Produto
    app.delete("/pedidos/:pedidoId", pedidoController.delete);

    //Excluir todos os registros de Produto
    app.delete("/pedidos", pedidoController.deleteAll);
}