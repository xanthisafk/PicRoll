const getColorScheme = () => {
    if (typeof window !== 'undefined') {
        return localStorage?.getItem("defaultColorScheme") ?? "orange";
    }
    return "orange";
}

const setColorScheme = (color) => {
    window !== undefined && localStorage.setItem("defaultColorScheme", color);
}

export {
    getColorScheme, setColorScheme
}