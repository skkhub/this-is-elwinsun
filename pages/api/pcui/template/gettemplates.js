
export default function handler(req, res) {
    // console.log('req=', req.body);
    let response = {
        errno: 0,
        errmsg: '自定义参数错误'
    };
    const param = req.body;
    if (param.type === 'cover' && param.tag === 'personal') {
        response = require('./template3');
    }
    if (param.type === 'cover' && param.tag === 'recent') {
        response = require('./template2');
    }
    else if (param.type === 'cover') {
        response = require('./template');
    }
    else if (param.type === 'element') {
        if (param.element === 'font') {
            response = require('./font');
        }
        else if (param.element === 'stroke') {
            response = require('./stroke');
        }
        else if (param.element === 'paster') {
            response = require('./paster');
        }
    }
    
    res.status(200).json(response);
  }