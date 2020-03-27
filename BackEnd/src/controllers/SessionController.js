const connection = require('../database/connection')


let create = async (req, res) => {

    const {id} = req.body;


    const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first()
    if (!ong) {

        console.log(!ong)

        return res.status(400).json({
            error: 'No ONG found with this ID'
        })
    }

    return res.json(ong)
}


module.exports = {
    create
}