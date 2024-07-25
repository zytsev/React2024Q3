import style from './popUp.module.css';
import { useAppSelector, useAppDispatch } from '../../store/store';
import Btn from '../../components/Btn/Btn';
import { clearAllCheckedCard } from '../../slice/checkCardSlice';
import { toCsv } from '../../services/downloadCSV/downloadCSV';
import { card } from '../../assets/types/types';
interface propsPopUp {
  allProd: card[];
}
const PopUp = (props: propsPopUp) => {
  const idCheckedCard = useAppSelector(
    (state) => state.checkCard.idCheckedCard
  );
  const dispatch = useAppDispatch();
  return (
    <>
      <div className={style.popUp_wrapper}>
        <Btn
          onClick={() => toCsv(props.allProd, idCheckedCard)}
          text="Download"
        />
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
