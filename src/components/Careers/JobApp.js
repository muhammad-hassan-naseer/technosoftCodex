import React, { useEffect } from 'react'
import HeaderSecode from './HeaderSecode'

const JobApp = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <HeaderSecode />
      <div className="container">
        <h2>Full Stack Engineer</h2>
        <h4>Software Engineering-Westwood Office, Lahore</h4>
        <h5>Job Application</h5>
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control form-control-lg"
              id="input-tags"
              aria-describedby="emailHelp"
              placeholder="Fisr name*"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control form-control-lg"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Last Name*"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control form-control-lg"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email*"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <input
              type="numeric"
              class="form-control form-control-lg"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Phone*"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control form-control-lg"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Address*"
              multiple="true"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control form-control-lg"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="City*"
            />
          </div>
          <div class="form-group ">
            <label for="inputState">Gender*</label>
            <select id="inputState" class="form-control form-control-lg">
              <option selected>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Not to be disclosed</option>
            </select>
          </div>
          <div class="form-group  pl-0 font-weight-bold">
            <input
              type="text"
              class="form-control form-control-lg col-12"
              name="city"
              id="tags-input"
              placeholder="Skills*"
            />
          </div>
          <div class="form-group ">
            <select id="inputState" class="form-control form-control-lg">
              <option selected>Search Firm*</option>
              <option>Social Media</option>
              <option>Search Firm</option>
              <option>Job Board</option>
              <option>Company Website</option>
              <option>External Referal</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control form-control-lg"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Linked-In profile link**"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlFile1">Upload Resume</label>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default JobApp
