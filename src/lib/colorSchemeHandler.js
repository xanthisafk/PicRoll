import { defaultColorScheme } from '../data/meta.json'

const getColorScheme = () => {
    // if (typeof window !== 'undefined') {
    //     return localStorage?.getItem("defaultColorScheme") ?? defaultColorScheme;
    // }
    return defaultColorScheme;
}

const setColorScheme = (color) => {
    localStorage?.setItem("defaultColorScheme", color);
}

module.exports = {
    getColorScheme, setColorScheme
}