import { BtnProps } from '../../../src/assets/types/types';

const Btn = (props: BtnProps) => {
  return (
    <div>
      <button onClick={props.onClick} type="button">
        {props.text}
      </button>
    </div>
  );
};

export default Btn;
