
const download = require('download');


// const fontList = require('../pages/api/pcui/template/font3').data.list;
// const list = require('../pages/api/pcui/template/stroke2').data.list;
// const list = require('../pages/api/pcui/template/paster2').data.list;
const list = require('../pages/api/pcui/template/templateee').data.list;
const elementlist = [...list.map(item => item.element.filter(el => el.src).map(el => el.src))];
// console.log(elementlist.flat(2).length)

list.forEach((item, i) => {
    const fileName = item.preview.match(/\/(\w+\.\w+)$/i)[1];
    console.log(i, fileName);
    
    download(item.preview + '@w_204', './public/template/preview/', {filename: fileName});
})
