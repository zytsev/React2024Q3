import React from 'react';
import Header from './pages/header/header';
import Main from './pages/main/main';

import './App.css';
interface card {
  id: number;
  raiting: number;
  category: string;
  imgClass: string;
  title: string;
  text: string;
  price: number;
}
type StateArrCard = {
  arrCard: card[] | null;
};
class App extends React.Component<StateArrCard> {
  state = { arrCard: [] };

  getArrFromApi = (searchParam: string) => {
    const searchBy = searchParam ? `?search=${searchParam}` : '';
    const url = `https://66716cbfe083e62ee43b8e10.mockapi.io/books${searchBy}`;
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ arrCard: result });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  render(): React.ReactNode {
    return (
      <>
        <Header func={this.getArrFromApi} />
        <Main arr={this.state.arrCard} />
      </>
    );
  }
}

export default App;
