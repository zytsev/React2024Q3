import style from './popUp.module.css';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import Btn from '../../../app/components/btn/btn';
import { clearAllCheckedCards } from '../../redux/slice/checkCardSlice';
import { toCsv } from '../../services/downloadCSV/downloadCSV';
import { Context } from '../../../app/components/Context/Context';
import { useContext } from 'react';

const PopUp = () => {
  const context = useContext(Context);
  const checkedCards = useAppSelector((state) => state.checkCard.checkedCards);
  const dispatch = useAppDispatch();
  return (
    <div
      className={`${style.popUp_wrapper} ${context?.isDark && 'backgr-dark'}`}
    >
      <Btn onClick={() => toCsv(checkedCards)} text="Download" />
      <span>{`${checkedCards.length} items are selected`}</span>
      <Btn
        onClick={() => dispatch(clearAllCheckedCards())}
        text="Unselect all"
      />
    </div>
  );
};

export default PopUp;
