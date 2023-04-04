const handler = async (_, res) => {
    return res.redirect(308, "/api/")
}

export default handler