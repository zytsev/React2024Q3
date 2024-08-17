import { user } from '../assets/types';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector } from '../redux/store';
import Select from 'react-select';
import { getListOfCountrie } from '../service/getListOfCountrie';
import { schema } from '../service/yup';

function Form() {
  const countries = useAppSelector((state) => state.countries.listcountries);
  const listcountries = getListOfCountrie(countries);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<user>({ resolver: yupResolver(schema), mode: 'onBlur' });

  const onSubmit = (data: user) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <h2>Control Form</h2>
      <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustom01">Name</label>
            <input
              {...register('name')}
              className="form-control"
              id="validationCustom01"
              placeholder="Name"
            />
            <div className="invalid-feedb">{errors.name?.message}</div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustom02">Age</label>
            <input
              type="number"
              {...register('age')}
              className="form-control"
              id="validationCustom02"
            />
            <div className="invalid-feedb">{errors.age?.message}</div>
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
                {...register('email')}
              />
              <div className="invalid-feedb">{errors.email?.message}</div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group mx-sm-3 mb-3 form-pass">
            <label htmlFor="inputPassword1">Password</label>
            <input
              {...register('password')}
              className="form-control"
              id="inputPassword1"
              placeholder="Password"
            />
            <div className="invalid-feedb">{errors.password?.message}</div>
            <label htmlFor="inputPassword2">Password repeat</label>
            <input
              {...register('confirmation')}
              className="form-control"
              id="inputPassword2"
              placeholder="Password"
            />
            <div className="invalid-feedb">{errors.confirmation?.message}</div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationGender">Gender</label>
            <select
              {...register('gender')}
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
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={listcountries}
                  getOptionValue={(option) => option.value}
                />
              )}
            />
            <div className="invalid-feedb">{errors.state?.value?.message}</div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">Example file input</label>
          <input
            {...register('picture')}
            type="file"
            className="form-control-file"
            id="exampleFormControlFile1"
          />
          <div className="invalid-feedb">{errors.picture?.message}</div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              {...register('terms')}
              className="form-check-input"
              type="checkbox"
              id="invalidCheck"
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedb">{errors.terms?.message}</div>
          </div>
        </div>
        <button className="btn btn-primary" type="submit" disabled={!isValid}>
          Submit htmlForm
        </button>
      </form>
    </>
  );
}

export default Form;
