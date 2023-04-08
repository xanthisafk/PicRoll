type Token =
    "reddit-access-token" 
    | "reddit-token-expiry-date" 
    | "reddit-refresh-token"
    | "picroll-reddit-auth-state"
    | "picroll-default-color-scheme"
    | "picroll_is_nsfw_enabled"
    

const getItem = (type: Token) => {
    return window !== undefined && localStorage.getItem(type);
}

const setToken = (type: Token, token: string) => {
    window !== undefined && localStorage.setItem(type, token);
}

const resetToken = (type: Token) => {
    window !== undefined && localStorage.removeItem(type);
}

export {
    getItem,
    setToken,
    resetToken
}