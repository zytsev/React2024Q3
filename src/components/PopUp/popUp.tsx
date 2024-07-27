import style from './popUp.module.css';
import {
  useAppSelector,
  useAppDispatch,
} from '../../services/redux/store/store';
import Btn from '../../components/Btn/Btn';
import { clearAllCheckedCards } from '../../services/redux/slice/checkCardSlice';
import { toCsv } from '../../services/downloadCSV/downloadCSV';
import { Context } from '../../components/Context/Context';
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
