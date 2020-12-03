const express = require('express');
const router = express.Router();

// LISTAR TODOS PEDIDOS
router.get('/',( req,res,next ) => {
    res.status(200).send({
        mensagem:'Retorna os pedidos'
    });
});

// CADASTRAR PEDIDOS
router.post('/',( req,res,next ) => {

    const pedido = {
        id_produto:req.body.id_produto,
        quantidade:req.body.quantidade
    };

    res.status(201).send({
        mensagem:'O pedido foi criado',
        pedidoCriado:pedido
    });
});

// LISTAR PEDIDO POR ID
router.get('/:id_pedido',( req,res,next ) => {

    const id = req.params.id_pedido;

    res.status(200).send({
        mensagem: 'Detalhes do pedido',
        id:id
    })  
   
});

// APAGAR PEDIDO
router.delete('/',( req,res,next ) => {
    res.status(200).send({
        mensagem:'Pedido excluido!'
    });
});


module.exports = router;