const gradientHelper = (colorScheme) => {
    let from, to;
    switch (colorScheme) {
        case "red":
            from = "#ff7878";
            to = "#ff0000";
            break;
        case "orange":
            from = "#EC9F05";
            to = "#FF4E00";
            break;
        case "yellow":
            from = "#FFDD00";
            to = "#FBB034";
            break;
        case "green":
            from = "#5AFF15";
            to = "#00B712";
            break;
        case "blue":
            from = "#009FFD";
            to = "#2A2A72";
            break;
        case "purple":
            from = "#994ECC";
            to = "#3E187A";
            break;
        case "pink":
            from = "#E58C8A";
            to = "#EEC0C6";
            break;
        case "teal":
            from = "#05E8BA"
            to = "#44B09E"
            break;
        case "cyan":
            from = "#48A9FE"
            to = "#0BEEF9"
            break;
        default: // gray
            from = "#b8c6db"
            to = "#f5f7fa"
            break;
    }

    return `linear-gradient(315deg, ${from} 0%, ${to} 74%)`
}

export { gradientHelper }