const connection = require('../database/connection')


let index = async (req, res) => {
    const incidents = await connection('incidents').select('*')

    return res.json(incidents)
}



let create = async (req, res) => {

    const { title,   description,    value    } = req.body;
    const ong_id = req.headers.authorization;

      const [id] = await connection('incidents').insert({
        title,
        description,
        value,
        ong_id,
    })


    return res.json({ id })
}

module.exports = {
    index,
    create
}