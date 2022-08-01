
const distDir = process.env.DEPLOY ? '.next.prod' : '.next';

module.exports = {
    distDir,
    experimental: {
        nextScriptWorkers: true,
    },
};
