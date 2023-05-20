import React from "react";
function FormSecondView({ formData, setFormData }) {
  return (
    <div className="reservation-contact">
      <div className="input-box">
        <input
          type="text"
          id="reserve-name"
          name="name"
          onChange={(e) =>
            setFormData.setName((prevState) => {
              return { ...prevState, currentValue: e.target.value };
            })
          }
          autoComplete="off" 
          required
          aria-label="name"
          aria-required="true"
        />
        <label htmlFor="reserve-name">{formData.name.placeHolder}</label>
      </div>
      <div className="input-box">
        <input
          type="tel"
          id="reserve-phone"
          name="phone"
          onChange={(e) =>
            setFormData.setPhoneNumber((prevState) => {
              return { ...prevState, currentValue: e.target.value };
            })
          }
          autoComplete="off" 
          required
          aria-label="phone number"
          aria-required="true"
        />
        <label htmlFor="reserve-phone">{formData.phoneNumber.placeHolder}</label>
      </div>
      <div className="input-box">
        <input
          type="tel"
          id="reserve-comment"
          name="comment"
          onChange={(e) =>
            setFormData.setComment((prevState) => {
              return { ...prevState, currentValue: e.target.value };
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
