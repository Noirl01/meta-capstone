import React from "react";
import DropDown from "./DropDown";
import DropDownDatePicker from "./DropDownDatePicker";
import "./DropDown.css";

function FormFirstView({ formData, setFormData }) {
  return (
    <div className="form-view1">
      <div className="form-row">
        <DropDown data={formData.guests} setData={setFormData.setGuests} />
        <DropDown data={formData.branch} setData={setFormData.setBranch} />
      </div>
      <div className="form-row">
        <DropDown data={formData.date} setData={setFormData.setDate}>
        <DropDownDatePicker data={formData.date} setData={setFormData.setDate} data-testid="date-picker"/></DropDown>
        <DropDown data={formData.time} setData={setFormData.setTime} />
      </div>
      <div className="form-row">
        <DropDown data={formData.seating} setData={setFormData.setSeating} />
        <DropDown data={formData.occasion} setData={setFormData.setOccasion} />
      </div>
    </div>
  );
}

export default React.memo(FormFirstView);
