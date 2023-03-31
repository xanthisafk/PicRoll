const copyToClipboard = (data, setter, toast) => {
    navigator.clipboard.writeText(data);
    setter(() => true);
    toast({
        title: "Image URL copied.",
        status: "success",
        duration: 3000,
        isClosable: true
    })
    setTimeout(() => setter(() => false), 3000);
}

export default copyToClipboard;