import style from './popUp.module.css';

import Btn from '../../components/Btn/Btn';

const PopUp = () => {
  return (
    <>
      <div className={style.popUp_wrapper}>
        <Btn text="Download" />
        <span>3 items are selected</span>
        <Btn text="Unselect all" />
      </div>
    </>
  );
};

export default PopUp;
