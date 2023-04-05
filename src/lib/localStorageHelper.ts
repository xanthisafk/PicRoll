type Token =
    "reddit-access-token" 
    | "reddit-token-expiry-date" 
    | "reddit-refresh-token"
    | "picroll-reddit-auth-state"
    | "picroll-default-color-scheme"
    | "picroll_is_nsfw_enabled"
    

const getLocalStorageItem = (type: Token) => {
    return window !== undefined && localStorage.getItem(type);
}

const setLocalStorageItem = (type: Token, token: string) => {
    window !== undefined && localStorage.setItem(type, token);
}

const resetLocalStorageItem = (type: Token) => {
    window !== undefined && localStorage.removeItem(type);
}

export {
    getLocalStorageItem,
    setLocalStorageItem,
    resetLocalStorageItem
}