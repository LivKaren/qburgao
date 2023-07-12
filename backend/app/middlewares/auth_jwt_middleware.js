const jwt = require("jsonwebtoken");
const config = require("../configs/auth.config.js");
const usuarioModel = require("../models/usuario.model.js");

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token){
        return res.status(403).send({
            message: "Não possui token para autenticação."
        });
    } else {
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err){
                res.status(401).send({
                    message: "Acesso não autorizado. Credenciais inválidas"
                });
            } else {
                req.usuarioId = decoded.id;
                next();
            }

        });
    }
}

isAdmin = (req, res, next) => {
    usuarioModel.findById(req.usuarioId, (err,data) =>{
        if (data.tipo == 1){
            next();
        } else {
            res.status(401).send({
                message: "Você precisa ser administrator para executar a ação!"
            })
        }
    });
}

isBalcao = (req, res, next) => {
    usuarioModel.findById(req.usuarioId, (err,data) =>{
        if (data.tipo == 2){
            next();
        } else {
            res.status(401).send({
                message: "Você precisa ser do balcão de atendimento para executar a ação!"
            })
        }
    });
}

isCozinha = (req, res, next) => {
    usuarioModel.findById(req.usuarioId, (err,data) =>{
        if (data.tipo == 3){
            next();
        } else {
            res.status(401).send({
                message: "Você precisa ser da cozinha para executar a ação!"
            })
        }
    });
}




module.exports = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
    isBalcao: isBalcao,
    isCozinha: isCozinha
}