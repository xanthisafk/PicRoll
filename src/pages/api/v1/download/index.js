import api from '../../../../data/api.json';

const handler = async (_, res) => {
    res.status(200).send(api.docs[2])
}

export default handler