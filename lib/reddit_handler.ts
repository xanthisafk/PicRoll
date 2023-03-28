import Snoowrap from "snoowrap"

const handler = async () => {
    const {
        USRNAMEE, PASSWORD, USRAGENT, CLIENTID, CLIENTSC
    } = process.env;

    const snoo = new Snoowrap({
        userAgent: USRAGENT!,
        clientId: CLIENTID!,
        clientSecret: CLIENTSC!,
        username: USRNAMEE!,
        password: PASSWORD!
    });

    return snoo;
}

export default handler