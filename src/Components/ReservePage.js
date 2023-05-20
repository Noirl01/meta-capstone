import React, {  useState } from "react";
import restaurantImg from "../assets/restaurant.jpg";
import ReservationForm from "./BookingForm";

function ReservePage() {
  const viewsArray = [
    "Reservation",
    "Contact Information",
    "Reservation Complete",
  ];
  const [currentView, setCurrentView] = useState(0);
  return (
    <div className="reservation">
      <div className="reservation-section1">
        <ReservationForm
          currentView={currentView}
          setCurrentView={setCurrentView}
        >
          <h2 className="reservation-title">{viewsArray[currentView]}</h2>
        </ReservationForm>
      </div>
      <div className="reservation-section2">
        <img src={restaurantImg} alt="restaurant" />
      </div>
    </div>
  );
}

export default ReservePage;
