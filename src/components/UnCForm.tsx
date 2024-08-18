import { useAppSelector } from '../redux/store';
import Select from 'react-select';
import { getListOfCountrie } from '../service/getListOfCountrie';
import { schema } from '../service/schemaForUnCForm';
import { useAppDispatch } from '../redux/store';
import { addUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { convertBase64 } from '../service/convertBase64';
import { useState } from 'react';
import { ValidationError } from 'yup';

function Form() {
  const countries = useAppSelector((state) => state.countries.listcountries);
  const listcountries = getListOfCountrie(countries);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getError = (name: string) => {
    let res = '';
    error.forEach((elem) => {
      elem.name === name ? (res += elem.message) : (res += '');
    });
    return res;
  };
  const [error, setError] = useState<
    { name: string | unknown; message: string }[]
  >([]);

  async function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData.entries());

    try {
      const validForm = await schema.isValid(formObj);
      if (validForm) {
        const file = formData.get('picture1') as File;
        const base64 = await convertBase64(file);
        const value = {
          name: formObj.name as string,
          age: Number(formObj.age),
          email: formObj.email as string,
          password: formObj.password as string,
          gender: formObj.gender as string,
          state: formObj.state1 as string,
          picture: base64,
        };
        dispatch(addUser(value));

        navigate('/');
      } else {
        await schema.validate(formObj, { abortEarly: false });
      }
    } catch (err) {
      if (err instanceof ValidationError) {
        const arrErr: { name: string | unknown; message: string }[] = [];
        err.inner.forEach((elem) => {
          arrErr.push({ name: elem.params?.path, message: elem.message });
        });
        setError(arrErr);
      }
    }
  }

  return (
    <>
      <h2>Uncontrol Form</h2>
      <form className="needs-validation" onSubmit={(e) => handleForm(e)}>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustom01">Name</label>
            <input
              name="name"
              className="form-control"
              id="validationCustom01"
              placeholder="Name"
            />
            <div className="invalid-feedb">{getError('name')}</div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustom02">Age</label>
            <input
              type="number"
              name="age"
              className="form-control"
              id="validationCustom02"
            />
            <div className="invalid-feedb">{getError('age')}</div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustomUsername">Email</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupPrepend">
                  @
                </span>
              </div>
              <input
                type="e-mail"
                className="form-control"
                id="validationCustomUsername"
                placeholder="mail@example.com"
                name="email"
              />
              <div className="invalid-feedb">{getError('email')}</div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group mx-sm-3 mb-3 form-pass">
            <label htmlFor="inputPassword1">Password</label>
            <input
              name="password"
              className="form-control"
              id="inputPassword1"
              placeholder="Password"
            />
            <div className="invalid-feedb">{getError('password')}</div>
            <label htmlFor="inputPassword2">Password repeat</label>
            <input
              name="confirmation"
              className="form-control"
              id="inputPassword2"
              placeholder="Password"
            />
            <div className="invalid-feedb">{getError('confirmation')}</div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationGender">Gender</label>
            <select
              name="gender"
              id="validationGender"
              className="form-control"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
            <div className="invalid-feedb"></div>
          </div>

          <div className="col-md-3 mb-3">
            <label htmlFor="inputCountrie">Countrie</label>

            <Select name="state1" options={listcountries} />

            <div className="invalid-feedb">{getError('state1')}</div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">Example file input</label>
          <input
            name="picture1"
            type="file"
            className="form-control-file"
            id="exampleFormControlFile1"
          />
          <div className="invalid-feedb">{getError('picture1')}</div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              name="terms1"
              className="form-check-input"
              type="checkbox"
              id="invalidCheck"
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedb">{getError('terms1')}</div>
          </div>
        </div>

        <button className="btn btn-primary" type="submit">
          Submit htmlForm
        </button>
      </form>
    </>
  );
}

export default Form;
