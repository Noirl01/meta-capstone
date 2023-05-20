import React from "react";

function FormThirdView({ formSuccess }) {
  return (
    <div className="reservation-successful">
      {formSuccess ? (
        <h2>Table reserved successfully.</h2>
      ) : (
        <h2 style={{ color: "red" }}>Table wasn't reserved</h2>
      )}
      {formSuccess ? (
        <p>
          Thank you for visiting our restaurant, Hope you have an overall
          perfect experience.
          <br />
          <br />
          -Little Lemon Staff
        </p>
      ) : (
        <p>
          Something went wrong while attempting to reserve a table.
          <br />
          Please try again.
        </p>
      )}
    </div>
  );
}

export default FormThirdView;
