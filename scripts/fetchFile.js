const fs = require('fs');
const { request } = require('http');
const path = require('path');
const download = require('download');

function getFileByUrl(url, fileName, dir) {
    let stream = fs.createWriteStream(path.join(dir, fileName));
    request(url).pipe(stream).on('close', err => {
        console.log('文件' + fileName + "下载完毕");
    });
}

function makeDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        let pathTmp;
        dirPath.split('/').forEach(dirName => {
            if (pathTmp) {
                pathTmp = path.join(pathTmp, dirName);
            }
            else {
                if (dirName) {
                    pathTmp = dirName;
                }
                else {
                    pathTmp = '/';
                }
            }
            if (!fs.existsSync(pathTmp)) {
                if (!fs.mkdirSync(pathTmp)) {
                    return false;
                }
            }
        })
    }
    else {
        // deleteFolderFiles(dirPath);
    }
}

// const fontList = require('../pages/api/pcui/template/font3').data.list;
// const list = require('../pages/api/pcui/template/stroke2').data.list;
// const list = require('../pages/api/pcui/template/paster2').data.list;
const list = require('../pages/api/pcui/template/template').data.list;
const elementlist = [...list.map(item => item.element.filter(el => el.src).map(el => el.src))];
// console.log(elementlist.flat(2).length)

list.forEach((item, i) => {
    console.log(i);
    download(item.preview, './public/template/preview');
})
