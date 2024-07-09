import style from './errorBtm.module.css';
import { BtnProps } from '../../assets/types/types';

const Btn = (props: BtnProps) => {
  return (
    <div className={style.errorBtn_wrapper}>
      <button onClick={props.onClick} type="button">
        {props.text}
      </button>
    </div>
  );
};

export default Btn;
