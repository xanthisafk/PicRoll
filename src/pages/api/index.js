import api from '../../data/api.json'

const handler = async (_, res) => {
    res.status(200).json(api)
}

export default handler