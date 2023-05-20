import React, { useState } from "react";
function FormSecondView({ formData, setFormData }) {
  const [validName, setValidName] = useState(true);
  const [validNumber, setValidNumber] = useState(true);
  const namePattern = /^[A-Za-z]+$/;
  const numberPattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

  const checkName = (e) => {
    if (namePattern.test(e.target.value)) {
      setValidName(true);
    } else {
      setValidName(false);
      e.target.value = "";
    }
  };
  const checkPhoneNumber = (e) => {
    if (numberPattern.test(e.target.value)) {
      setValidNumber(true);
    } else {
      setValidNumber(false);
      e.target.value = "";
    }
  };
  return (
    <div className="reservation-contact">
      <div className="input-box">
        <input
          type="text"
          id="reserve-name"
          name="name"
          onChange={(e) =>
            setFormData.setName((prevState) => {
              return {
                ...prevState,
                currentValue: e.target.value,
                isValid: namePattern.test(e.target.value),
              };
            })
          }
          autoComplete="off"
          required
          aria-label="name"
          aria-required="true"
          onBlur={checkName}
        />
        <label htmlFor="reserve-name">{formData.name.placeHolder}</label>
        {validName ? (
          ""
        ) : (
          <p style={{ color: "red" }}>Entered name is invalid.</p>
        )}
      </div>
      <div className="input-box">
        <input
          type="tel"
          id="reserve-phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          maxLength="12"
          minLength="10"
          onChange={(e) =>
            setFormData.setPhoneNumber((prevState) => {
              return { ...prevState, currentValue: e.target.value, isValid: numberPattern.test(e.target.value) };
            })
          }
          autoComplete="off"
          required
          aria-label="phone number"
          aria-required="true"
          onBlur={checkPhoneNumber}
        />
        <label htmlFor="reserve-phone">
          {formData.phoneNumber.placeHolder}
        </label>
        <p>Format 515-123-1234</p>
        {validNumber ? (
          ""
        ) : (
          <p style={{ color: "red" }}>Entered name is invalid.</p>
        )}
      </div>
      <div className="input-box">
        <input
          type="text"
          id="reserve-comment"
          name="comment"
          onChange={(e) =>
            setFormData.setComment((prevState) => {
              return {
                ...prevState,
                currentValue: e.target.value
              };
            })
          }
          autoComplete="off"
          aria-label="additional comment"
          aria-required="false"
        />
        <label htmlFor="reserve-comment">{formData.comment.placeHolder}</label>
      </div>
    </div>
  );
}

export default FormSecondView;
