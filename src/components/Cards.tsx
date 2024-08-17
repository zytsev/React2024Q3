import { useEffect, useState } from 'react';
import { useAppSelector } from '../redux/store';

function Cards() {
  const users = useAppSelector((state) => state.users.users);
  const [isBorderRed, setIsBorderRed] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsBorderRed(false);
    }, 3000);
  }, []);

  return (
    <main className="cards">
      {users.map((user, i) => (
        <div
          key={user.email}
          className={`local_card card bg-light ${i === users.length - 1 && isBorderRed && 'border-red'} mb-3`}
        >
          <div className="card-header">{user.gender}</div>
          <div className="card-body text-dark">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">{`Age: ${user.age}`}</p>
            <p className="card-text">{`E-mail: ${user.email}`}</p>
            <p className="card-text">{`Password: ${user.password}`}</p>
            <p className="card-text">{`Country: ${user.state}`}</p>
            <img
              src={typeof user.picture === 'string' ? user.picture : undefined}
              width="246px"
            />
          </div>
        </div>
      ))}
    </main>
  );
}

export default Cards;
