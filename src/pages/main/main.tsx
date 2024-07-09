import style from './main.module.css';
import Card from '../../components/Card/Card';
import { MainProps } from '../../assets/types/types';

const Main = (props: MainProps) => {
  const arrFromApi = props.arr;

  return (
    <div className={style.main_wrapper}>
      {arrFromApi && arrFromApi.map((item) => <Card key={item.id} {...item} />)}
    </div>
  );
};

export default Main;
