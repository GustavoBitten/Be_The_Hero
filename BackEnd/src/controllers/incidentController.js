const connection = require('../database/connection')


let index = async (req, res) => {
    const {page= 1 } = req.query

    const [count] = await connection('incidents')
    .count('*')
    

    console.log(count)

    const incidents = await connection('incidents')

    .limit(5)
    .offset((page -1)*5)
    .select('*')

    res.header('X-Total-Count', count['count(*)'] )

    return res.json(incidents)
}



let create = async (req, res) => {

    const {
        title,
        description,
        value
    } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await connection('incidents').insert({
        title,
        description,
        value,
        ong_id,
    })


    return res.json({
        id
    })
}

let delet = async (req, res) => {
    const {id} = req.params;
    const ong_id = req.headers.authorization;


    const incidents = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

    if(incidents.ong_id != ong_id){
        return res.status(401).json({error: 'Operação não permitida'})
    }

    await connection('incidents').where('id',id).delete()

    return res.status(204).send()

}

module.exports = {
    index,
    create,
    delet
}