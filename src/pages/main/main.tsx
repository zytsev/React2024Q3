import style from './main.module.css';
import React from 'react';
import Card from '../../components/card/card';

interface item {
  id: number;
  raiting: number;
  category: string;
  imgClass: string;
  title: string;
  text: string;
  price: number;
}
interface PropsMain {
  arr: item[];
}

class Main extends React.Component<PropsMain> {
  render(): React.ReactNode {
    const arrFromApi = this.props.arr;
    return (
      <div className={style.main_wrapper}>
        {arrFromApi && arrFromApi.map((item, i) => <Card key={i} {...item} />)}
      </div>
    );
  }
}

export default Main;
