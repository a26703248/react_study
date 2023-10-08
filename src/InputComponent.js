// InputComponent.js
import React from 'react';

function InputComponent({ value, onChange, placeholder }) {
    return (
      <div>
        <input
            className="centered-input"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
        <p />
      </div>
    );
}

export default InputComponent;
