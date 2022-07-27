import {useEffect, useState} from 'react';
import 'pic-editor/lib/css/react.editor.css';
// import configJSON from './config';
import style from './pic-editor.module.scss';

const configJSON = {
    quality: 1, // 设置为jpeg时的压缩比，这个只对jpeg生效，canvas的方式调用toDataurl，默认是0.92的压缩比
    format: 'jpeg', // 点击完成时输出的图片格式
    theme: '#3855d5',
    // backgroundColor: 'transparent',
    backgroundColor: '#333', // canvas背景色
    layerColor: 'rgba(0,0,0,0.2)', // 蒙层颜色，目前用在2个地方：元素超出图片区域的地方，裁剪框外
    track: function (action) { // 打点函数，可以由外部传入
        console.log(action);
    },
    message: function(info) {
        const {type, message} = info;
        console.log(type + ' ' + message);
    },
    width: 500, // canvas宽
    height: 281, // canvs高
    // image: 'https://p1.pstatp.com/origin/dfic-imagehandler/fa00d42f-d50e-4439-bab6-2c310e908e1d?timestamp=1608101875695',
    // image: 'https://pic1.zhimg.com/v2-514596bfb7c60cc8c2272f6d3c622331_720w.jpg?source=172ae18b', // 除了image可以响应外部的变化外，其余配置目前不做响应
    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F020R1102U0%2F21020Q02U0-11-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661442555&t=78b996d95c5e7ab6adc0e64bb923e074',
    cancelText: '取消', // 取消按钮文本
    sureText: '完成', // 完成按钮文本
    cancel: function(a,b,c) {
        console.log(a,b,c);
        console.log('cancel');
    },
    sure: function(a,b,c) {
        console.log(a,b,c);
        console.log('sure');
        // if (a && !confirm('有初始态文字，要继续吗？')) {
        //     return;
        // }
        typeof c === 'function' && c();
        let img = document.getElementById('base64-img');
        img.src = b.base64;
    },
    // 裁剪比例列表，自带一个默认的列表，也可以自己传入
    // ratioList: [
    //     {
    //         name: '固定比例',
    //         ratio: 16 / 9
    //     }
    // ],
    limit: {
        // isLegal: true, // 是否正版图片，正版图片只支持裁剪，不支持模板、贴纸、文字、滤镜、翻转、旋转
        // 当设置了limit.ratio时，表示要限制图片裁剪比例。ratioList和limit.ratio都配置时，会忽略ratioList
        // ratio: {
        //     name: '固定比例',
        //     minWidth: 180,
        //     minHeight: 68
        // },
        count: 10, // 元素限制的添加上限，超过这个数会提示元素过多
        memorySize: 0 // 单位：MB 生成图片的大小最大限制，若超过，会尝试递归压缩，直到低于这个值，或者压缩到0.05也不行，则报错；当为0时，没有大小限制
    }
};

let Editor;

export default function Index() {
    let editor;
    useEffect(() => {
        Editor = require('pic-editor').default;
    }, []);
    const [config, setConfig] = useState(JSON.stringify(configJSON));
    const onInput = e => {
        console.log(e.target.value);
        setConfig(e.target.value);
    }
    const onUpload = e => {
        console.log(e.target.value);
        // editor.loadImage(e.target.value);
    }

    const genEditor = () => {
        console.log(Editor);
        editor = new Editor('#editor', JSON.parse(config));
    }
    return (
        <div className={style['container']}>
            <div className={style['config-container']}>
            <textarea className={style['config']} value={config} onChange={onInput}></textarea>
            <input className={style['upload']} type="file" accept="images/*" onChange={onUpload} />
            <button className={style['inst']} onClick={genEditor}>实例化编辑器</button>
            </div>
            <div id="editor" className={style['editor']}></div>
        </div>
    )
}

