import React from 'react';
import '../styling-components/form-section.css';

export default function Form(props) {
    return (
        <form>
          <input
            type="number"
            name="userGuess"
            id="userGuess"
            className="text"
            required
          />
          <button 
            type="submit"
            name="submit"
            id="guessButton" 
            className="form-button"
          >
            Guess
          </button>
        </form>
    )
};