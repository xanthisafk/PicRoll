const uuidGenerator = () => {
  return 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, (c) => {
    const pre = Math.floor(Math.random() * 16);
    const post = Math.floor(new Date('2012.08.10').getTime() / 1000);
    return `${pre.toString(16)}-${post.toString(16)}`;
});
}

export {
    uuidGenerator
}