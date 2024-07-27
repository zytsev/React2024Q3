import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../Context/Context';

export const DetailedCard = () => {
  const context = useContext(Context);

  return (
    <section className={`modale ${context?.isDark && 'backgr-dark'}`}>
      <div className="left-container">
        <img id="modal-img" className={context?.checkedProduct?.imgClass} />
        <div className="alert-wrapper">
          <img src="/info-empty.svg" alt="info" />
          <p className="caption">
            The cost is not final. Download our mobile app to see the final
            price and place your order. Earn loyalty points and enjoy your
            favorite coffee with up to 20% discount.
          </p>
        </div>
      </div>
      <div className="modale-colum">
        <h3 id="name" className="heading-3">
          {context?.checkedProduct?.title}
        </h3>
        <p id="description" className="medium">
          {context?.checkedProduct?.text}
        </p>
        <div className="size-wrapper">
          <p id="sizes" className="medium">
            Size
          </p>
          <div className="modal-buttons switch">
            <div className="modal-button SML color-branco backgr-dark">
              <div className="modal-circle color-dark">S</div>
              <p className="modal-text linkandbutton">200 ml</p>
            </div>
            <div className="modal-button SML">
              <div className="modal-circle">M</div>
              <p className="modal-text linkandbutton">300 ml</p>
            </div>
            <div className="modal-button SML">
              <div className="modal-circle">L</div>
              <p className="modal-text linkandbutton">400 ml</p>
            </div>
          </div>
        </div>
        <div className="size-wrapper">
          <p id="additives" className="medium">
            Additives
          </p>
          <div className="modal-buttons switch">
            <div className="modal-button added">
              <div className="modal-circle">1</div>
              <p className="modal-text linkandbutton">Sugar</p>
            </div>
            <div className="modal-button added">
              <div className="modal-circle">2</div>
              <p className="modal-text linkandbutton">Cinnamon</p>
            </div>
            <div className="modal-button added">
              <div className="modal-circle">3</div>
              <p className="modal-text linkandbutton">Syrup</p>
            </div>
          </div>
        </div>
        <div className="price-wrapper">
          <p className="heading-3">Total:</p>
          <p id="price" className="heading-3">
            {context?.checkedProduct?.price}
          </p>
        </div>
        <Link to={'/main'}>
          <p id="close-modal" className="linkandbutton">
            Close
          </p>
        </Link>
      </div>
    </section>
  );
};
