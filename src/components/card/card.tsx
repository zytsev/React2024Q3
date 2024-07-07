import style from './card.module.css';
import React from 'react';

type card = {
  id: number;
  imgClass: string;
  title: string;
  text: string;
  price: number;
};

class Card extends React.Component<card> {
  render(): React.ReactNode {
    return (
      <div className="list_container">
        <div className={this.props.imgClass}></div>
        <h3 className={style.list_title}>{this.props.title}</h3>
        <p className={style.list_text}>{this.props.text}</p>
        <p className={style.list_price}>${this.props.price}</p>
      </div>
    );
  }
}

export default Card;
