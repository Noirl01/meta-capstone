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
          required
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
          required
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
        />
        <label htmlFor="reserve-comment">{formData.comment.placeHolder}</label>
      </div>
    </div>
  );
}

export default FormSecondView;
