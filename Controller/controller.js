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
            res.send(data)
        }).catch(err => {
            res.status(500).send({
                message: "Sorry, data failed add"
            })
        })
    }
}