import {useEffect, useState} from 'react';
import 'pic-editor/lib/css/react.editor.css';
import configJSON from './config';
import style from './pic-editor.module.scss';

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