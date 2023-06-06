//import React from 'react'
import './getQuote.scss'

export default function GetQuote() {
  return (
    <div className="get-qoute">
      <h3>Get a Free Quote</h3>
      <p>
        Ready to bring your vision to life? Contact us today for a free quote
        and let's get started!
      </p>
      <form action="">
        <input type="text" placeholder="Name" required />
        <input type="number" placeholder="Phone" required />
        <input type="number" placeholder="Post Code" required />
        <select className="select" required>
          <option value="">--Please choose an option--</option>
          <option value="interior-painting">Interior Painting</option>
          <option value="exterior-painting">Exterior Painting</option>
          <option value="commercial-painting">Commercial Painting</option>
          <option value="strata-painting">Strata Painting</option>
          <option value="roof-painting">Roof Painting</option>
        </select>
        <input type="number" placeholder="Start Date" required />
        <button type="submit">Get a Free Qoute</button>
      </form>
    </div>
  );
}