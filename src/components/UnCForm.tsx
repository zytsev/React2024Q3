import React from 'react';
import SelectCountrie from '../service/getListOfCountrie';

function UnCForm() {
  return (
    <>
      <h2>UnControl Form</h2>
      <form className="needs-validation">
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustom01">Name</label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              placeholder="Name"
              value="Mark"
              required
            />
            <div className="invalid-feedb">
              Required! First uppercased letter!
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustom02">Age</label>
            <input
              type="number"
              className="form-control"
              id="validationCustom02"
              placeholder="17"
              min="1"
              max="150"
              required
            />
            <div className="invalid-feedb"></div>
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
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedb">Should be e-mail.</div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group mx-sm-3 mb-3">
            <label htmlFor="inputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword1"
              placeholder="Password"
            />
            <div className="invalid-feedb">
              1 number, 1 uppercased letter, 1 lowercased letter, 1 special
              character
            </div>
            <label htmlFor="inputPassword2">Password repeat</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword2"
              placeholder="Password"
            />
            <div className="invalid-feedb">Should match!</div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationGender">Gender</label>
            <select id="validationGender" className="form-control">
              <option selected>Male</option>
              <option>Female</option>
            </select>
            <div className="invalid-feedb"></div>
          </div>

          <div className="col-md-3 mb-3">
            <label htmlFor="inputCountrie">Countrie</label>
            <SelectCountrie aria-labelledby="inputCountrie" />
            <div className="invalid-feedb">Please provide a valid state.</div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">Example file input</label>
          <input
            type="file"
            className="form-control-file"
            id="exampleFormControlFile1"
          />
          <div className="invalid-feedb">Please provide a valid File.</div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedb">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit htmlForm
        </button>
      </form>
    </>
  );
}

export default UnCForm;
