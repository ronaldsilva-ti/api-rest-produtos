const express = require('express');
const router = express.Router();

// LISTAR TODOS PRODUTOS
router.get('/',( req,res,next ) => {
    res.status(200).send({
        mensagem:'Retorna os produtos'
    });
});

// CADASTRAR PRODUTOS
router.post('/',( req,res,next ) => {
    res.status(200).send({
        mensagem:'Insere um produto'
    });
});

// LISTAR PRODUTO POR ID
router.get('/:id_produto',( req,res,next ) => {

    const id = req.params.id_produto;

    if(id === 'especial'){
        res.status(200).send({
            mensagem: 'Você descobriu o id ESPECIAL'
        })
    }else{
        res.status(200).send({
            mensagem: 'Usando GET produto exclusivo',
            id:id
        })        
    }
});

// EDITAR PRODUTO
router.patch('/',( req,res,next ) => {
    res.status(200).send({
        mensagem:'Edita um produto'
    });
});

// APAGAR PRODUTO
router.delete('/',( req,res,next ) => {
    res.status(200).send({
        mensagem:'Produto excluido'
    });
});


module.exports = router;