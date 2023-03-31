import { saveAs } from "file-saver";

const downloadImage = async (url, setter, toast) => {
    setter(() => true);
    const name = url.split("/");
    await fetch(`/api/v1/download/${encodeURIComponent(url)}`)
        .then(res => res.blob())
        .then(blob => {
            saveAs(blob, name[name.length - 1]);
        }
    );
    toast({
        title: "Image downloaded.",
        status: "success",
        duration: 3000,
        isClosable: true
    })
    setTimeout(() => setter(() => false), 3000);
}

export default downloadImage;