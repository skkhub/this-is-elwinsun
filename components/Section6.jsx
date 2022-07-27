import style from './Section6.module.scss';

const Section = props => {
    
    return <>
      <div className={style["section6"]} id="section6">
        <p className={style['email']}>Email: 291742496@qq.com</p>
        <div className={style['textarea']}>
          <textarea name="" id="" placeholder="有什么想对我说的，可以留言（当前暂不支持留言）"></textarea>
          {/* <button>完成</button> */}
        </div>
        <footer>
          <p>Developed by Elwin Sun.</p>
          <p>Copyright © 2022. All Rights Reserved.</p>
        </footer>
      </div>
    </>
};

export default Section;
