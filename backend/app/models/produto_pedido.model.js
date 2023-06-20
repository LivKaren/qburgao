const sql = require("./db.js");
//Construtor
const Produto_pedidoModel = function(produto_pedido){
   
    this.observacao = produto_pedido.observacao;
    this.produtos_idprodutos = produto_pedido.produtos_idprodutos;
    this.pedidos_idpedidos = produto_pedido.pedidos_idpedidos; 
}
//Cria novo produto no banco
Produto_pedidoModel.create = (produto_pedido, result) => {
    sql.query("insert into produtos_pedidos set ?", produto_pedido, (err,res) =>{
        if (err) {
            console.log("Erro: ", err);
            result(err,null);
            return;
        }

        console.log("Produto e pedido criado", {idprodutos_pedidos: res.insertId, ...produto_pedido})
        result(null, {idprodutos_pedidos: res.insertId, ...produto_pedido});
    })
};
//Seleciona produto por ID
Produto_pedidoModel.findById = (produto_pedidoId, result) => {
    sql.query("Select * from produtos_pedidos where idprodutos_pedidos = "+produto_pedidoId, (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null,err);
            return;
        }
        if (res.length) {
            console.log("Produto e pedido Encontrado", res[0]);
            result(null,res[0]);
        }else{
            result({type: "not_found"}, null);
            console.log("Produto e pedido não encontrado");
        }
    }) 
};
//Seleciona todos os produtos
Produto_pedidoModel.getAll = result => {
    sql.query("SELECT * FROM produtos_pedidos", (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }

        console.log("produto_pedido: ", res);
        result(null, res);
    })
};
//Atualizar produto por id
Produto_pedidoModel.updateById = (produto_pedidoId, produto_pedido, result) => {
    sql.query("UPDATE produtos_pedidos SET observacao = ?, produtos_idprodutos = ?, pedidos_idpedidos = ?  WHERE idprodutos_pedidos = ?",
               [produto_pedido.observacao, produto_pedido.produtos_idprodutos, produto_pedido.pedidos_idpedidos, produto_pedidoId], (err, res) => {
                if (err){
                    console.log("erro: ", err);
                    result(null,err);
                }else if (res.affectedRows == 0){
                    result({ type: "not_found"}, null);
                } else{
                    console.log("Produto e pedido atualizado: ", {idprodutos_pedidos: produto_pedidoId, ...produto_pedido});
                    result(null,{idprodutos_pedidos: produto_pedidoId, ...produto_pedido});
                }
         });
};

//Remover Produtos po ID
Produto_pedidoModel.remove = (produto_pedidoId, result) => {

    sql.query("DELETE FROM produtos_pedidos WHERE idprodutos_pedidos = ?", produto_pedidoId, (err, res) =>{

        if (err) {

            console.log("err: ", err);

            result(err,null);

        } else if (res.affectedRow == 0){

            result(err, null);

        }else {

            result(null, res);

        }

    });

};
//Remover todos os produtos
Produto_pedidoModel.removeAll = (result) => {
    sql.query("DELETE FROM produtos_pedidos ", produto_pedidoId, (err, res) =>{

        if (err) {

            console.log("err: ", err);

            result(err,null);

        } else if (res.affectedRow == 0){

            result(err, null);

        }else {

            result(null, res);

        }

    });
};

module.exports = Produto_pedidoModel;