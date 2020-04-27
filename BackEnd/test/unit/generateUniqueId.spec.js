
const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID',() =>{
    it('deve retornar um Id unico',()=>{
        const id = generateUniqueId()

        expect(id).toHaveLength(8)
    })
})