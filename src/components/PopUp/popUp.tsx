import style from './popUp.module.css';
import { useAppSelector, useAppDispatch } from '../../store/store';
import Btn from '../../components/Btn/Btn';
import { clearAllCheckedCard } from '../../slice/checkCardSlice';

const PopUp = () => {
  const idCheckedCard = useAppSelector(
    (state) => state.checkCard.idCheckedCard
  );
  const dispatch = useAppDispatch();
  return (
    <>
      <div className={style.popUp_wrapper}>
        <Btn text="Download" />
        <span>{`${idCheckedCard.length} items are selected`}</span>
        <Btn
          onClick={() => dispatch(clearAllCheckedCard())}
          text="Unselect all"
        />
      </div>
    </>
  );
};

export default PopUp;
