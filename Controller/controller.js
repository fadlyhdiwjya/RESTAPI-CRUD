const productsDB = require('../Model/product');


exports.createProducts = ( req, res ) => {
    if(!req.body){
        res.send({ message: "Error!"})
    }else{
        
        const product = new productsDB({
            nama: req.body.nama,
            desc: req.body.desc,
            harga: req.body.harga
        })

        product.save().then( data => {
            res.send({ message: "Success, data was add!"})
        }).catch(err => {
            res.status(500).send({
                message: "Sorry, data failed add"
            })
        })
    }
}

exports.readProducts = (req , res ) => {
    if(!req.body){
        res.send({ message: "error!"})
    } else {
        const product = productsDB.find().then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({message: "Sorry, data error"});
        })
    }
}


exports.FindById = ( req, res ) => {
    if(!req.body){
        res.send({message: "error"})
    }else{

        const id = req.params.id

        productsDB.findById(id).then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({message: err});
        })





    }
}