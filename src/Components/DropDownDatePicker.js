import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./DropDown.css";
import "react-datepicker/dist/react-datepicker.css";

function DropDownDatePicker({ data, setData }) {
  const [selected, setSelected] = useState(new Date());

  return (
    <DatePicker
      selected={selected}
      onChange={(date) => {
        setSelected(date);
        setData((prevState) => {
          return {
            ...prevState,
            currentValue: date.toLocaleDateString(),
            rawDate: date,
          };
        });
      }}
      className="reservation-datepicker"
    />
  );
}

export default DropDownDatePicker;
