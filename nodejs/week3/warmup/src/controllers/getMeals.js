import fs from 'fs/promises'

const filePath = new URL('../../documents.json', import.meta.url)
export const getMealSearch = async (req, res) => {
    const query = req.query.q
    const parsedContent = JSON.parse(await fs.readFile(filePath, { encoding: 'utf-8' }))
    const result = searchFunction(parsedContent, query)

    res.send(result)

}
function searchFunction(array, query) {
    if (!query) {
        return array
    } else {
        return array.filter(item => {
            return Object.values(item).some(value => {
                return String(value).toLowerCase().includes(query)
            })
        })
    }

}
function searchByID(array, id) {
    if (!id) {
        return array
    } else {
        return array.filter(item => item.id === Number(id) ? item : null)
    }


}
export const getDoccumnetsbyID = async (req, res) => {
    const id = req.params.id
    const parsedFile = JSON.parse(await fs.readFile(filePath, { encoding: 'utf-8' }))
    const result = searchByID(parsedFile, id)
    res.send(result)

}
export const SeachPostMethod = async (req, res) => {
    const query = req.query.q
    const fields = req.body.fields
    const { price } = fields

    if (query && fields) {
        res.status(400).json({ error: 'BAd Request Cannot have both query and fields' })
        return
    }
    const parsedContent = JSON.parse(await fs.readFile(filePath, { encoding: 'utf-8' }))
    const result = searchFunction(parsedContent, price)
    res.send(result)

}