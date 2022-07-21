import {useState} from 'react'
export default function Index() {
    const [name, setName] = useState('elwin');
    const changeName = (str) => setName(str);
    return (
        <div>about
            <p>{name}</p>
            <button onClick={changeName.bind(null, 'skk')}>click me</button>
        </div>
    )
}