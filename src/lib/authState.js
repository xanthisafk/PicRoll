const setAuthState = state => {
    localStorage.setItem("picroll_reddit_auth_state", state);
}

const getAuthState = () => {
    return localStorage.getItem("picroll_reddit_auth_state");
}

const clearAuthState = () => {
    localStorage.removeItem("picroll_reddit_auth_state");
}

export {
    setAuthState,
    getAuthState,
    clearAuthState
}