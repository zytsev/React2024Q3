import style from './popUp.module.css';
import { useAppSelector, useAppDispatch } from '../../services/redux/store';
import { clearAllCheckedCards } from '../../services/redux/slice/checkCardSlice';
import { toCsv } from '../../services/downloadCSV/downloadCSV';
import  useCoffee  from '../../services/context/useCoffee';

const PopUp = () => {
  const { isDark } = useCoffee();
  const checkedCards = useAppSelector((state) => state.checkCard.checkedCards);
  const dispatch = useAppDispatch();
  return (
    checkedCards &&
    checkedCards.length > 0 && (
      <footer className={`${style.popUp_wrapper} ${isDark && 'backgr-dark'}`}>
        <button onClick={() => toCsv(checkedCards)}>Download</button>
        <span>{`${checkedCards.length} items are selected`}</span>
        <button onClick={() => dispatch(clearAllCheckedCards())}>
          Unselect all
        </button>
      </footer>
    )
  );
};

export default PopUp;
