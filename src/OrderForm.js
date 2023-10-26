import "./App.css";
import React, { useState } from "react";

function OrderForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numberOfCards, setNumberOfCards] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [totalAmount, setTotalAmount] = useState(1000);

  const handleFormSubmit = (event) => {
    event.preventDefault();

   
    alert(
      "Thank you for your order!An Email has been sent for payment details!."
    );
    // form fields
    setName("");
    setEmail("");
    setNumberOfCards(1);
    setShowForm(false);
  };

  const handleNumberOfCardsChange = (event) => {
    const value = parseInt(event.target.value);
    setNumberOfCards(value);
    setTotalAmount(value * 1000);
  };

  return (
    <div>
      <button className="btnintro" onClick={() => setShowForm(true)}>
        TRY ROCKS PLAYCARDS
      </button>

      {showForm && (
        <div className="form-overlay">
          <div className="form-container">
            <h3 className="orderheading">ORDER ROCKS PLAYCARDS</h3>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <br />
              <br />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
              <br />
              <label htmlFor="numberOfCards">Number:</label>
              <input
                type="number"
                id="numberOfCards"
                min="1"
                value={numberOfCards}
                onChange={handleNumberOfCardsChange}
                required
              />

              <p>Total Amount: {totalAmount} ksh</p>

              <button className="btnsubmit" type="submit">
                ORDER
                
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderForm;
