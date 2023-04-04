type TokenType = "reddit_access_token" | "reddit_token_expiry_date" | "reddit_refresh_token"

const getToken = (type: TokenType) => {
    return window !== undefined && localStorage.getItem(type);
}

const setToken = (type: TokenType, token: string) => {
    window !== undefined && localStorage.setItem(type, token);
}

const resetToken = () => {
    const tokenTypes: Array<TokenType> = [
        "reddit_access_token",
        "reddit_refresh_token",
        "reddit_token_expiry_date"
    ]

    tokenTypes.forEach((type, _) => {
        window !== undefined && localStorage.removeItem(type);
    })
}

export {
    getToken,
    setToken,
    resetToken
}