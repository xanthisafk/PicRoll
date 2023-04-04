const getColorScheme = () => {
    if (typeof window !== 'undefined') {
        return localStorage?.getItem("defaultColorScheme") ?? "gray";
    }
    return "gray";
}

const setColorScheme = (color) => {
    window !== undefined && localStorage.setItem("defaultColorScheme", color);
}

export {
    getColorScheme, setColorScheme
}