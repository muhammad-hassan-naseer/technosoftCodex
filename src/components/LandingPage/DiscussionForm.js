import React, { Component } from "react";

const DiscussionForm = () => {
  return (
    <div className='mt-5'>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <div className="input-group input-group-lg">
              <input
                type="text"
                className="form-control form-font"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Enter Your Name"
              />
            </div>
          </div>
          <div className="form-group col-md-6">
            <div className="input-group input-group-lg">
              <input
                type="text"
                className="form-control form-font"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <div className="input-group input-group-lg">
              <select
                name="field[11]"
                id="field[11]"
                required
                data-name="which_services_are_you_interested_in"
                className="form-control form-font"
              >
                <option selected>Which Service Are You Interested In?</option>

                <option value="Dedicated Development Team">
                  BlockChain Development
                </option>
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
                <option value="Web App Development">Web App Development</option>

                <option value="UI/UX">UI/UX</option>
                <option value="Quality Assurance">Quality Assurance</option>
                <option value="Quality Assurance">Digital Marketing</option>
              </select>
            </div>
          </div>
          <div className="form-group col-md-6">
            <div className="input-group input-group-lg">
              <select
                name="field[11]"
                id="field[11]"
                required
                data-name="which_services_are_you_interested_in"
                className="form-control form-font"
              >
                <option selected>Your Estimated Budget?*?</option>
                <option value="Enterprise Software Solutions">
                  $50,000 - $100,000
                </option>
                <option value="Dedicated Development Team">
                  $100,000 - $200,000
                </option>
                <option value="Mobile App Development">
                  $200,000 - $500,000
                </option>
                <option value="Web App Development">$500,000 or above</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <div className="input-group input-group-lg">
              <input
                type="text"
                className="form-control form-font"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Enter Your Phone"
              />
            </div>
          </div>
          <div className="form-group col-md-6">
            <div className="input-group input-group-lg">
              <input
                type="text"
                className="form-control form-font"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Enter Your Organization"
              />
            </div>
          </div>
        </div>
        <div className="input-group input-group-lg">
          <textarea
            id="field[6]"
            name="field[6]"
            placeholder="Let us know a bit more about the project you have in mind..."
            required
            data-name="message"
            spellCheck="false"
            className="form-control form-font"
            defaultValue={""}
          />
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            {" "}
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Please send me a non-disclosure agreement
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-left text-md-right">
            {" "}
            <button
              type="submit"
              className="btn btn-primary p-2 p-md-3 btn-sm btn-md-lg"
            >
              LET'S Discuss
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DiscussionForm;
