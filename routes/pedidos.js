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
    res.status(200).send({
        mensagem:'Faz um pedido'
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
        mensagem:'Pedido excluido'
    });
});


module.exports = router;