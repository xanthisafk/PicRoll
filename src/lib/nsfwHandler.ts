const setNsfw = (state: boolean) => {
    window !== undefined && localStorage.setItem("picroll_is_nsfw_enabled", state ? `1` : `0`);
}

const getNsfw = (): boolean => {
    const item = window !== undefined && localStorage.getItem("picroll_is_nsfw_enabled");
    if (item && item === `1`) {
        return true
    } else {
        return false
    }
}

export {
    setNsfw,
    getNsfw
}