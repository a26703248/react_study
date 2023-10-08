// ResultComponent.js
import React from 'react';

function ResultComponent({ result }) {
  return result && <div className="centered-text">BMI: {result}</div>;
}

export default ResultComponent;
