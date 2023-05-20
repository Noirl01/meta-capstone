import React, { useEffect, useState } from "react";
import FormFirstView from "./FormFirstView";
import FormSecondView from "./FormSecondView";
import FormThirdView from "./FormThirdView";
import { useTime } from "../Context/TimeContext";
import { ReactComponent as GuestsIcon } from "../assets/guests.svg";
import { ReactComponent as BranchIcon } from "../assets/branch.svg";
import { ReactComponent as TimeIcon } from "../assets/time.svg";
import { ReactComponent as DateIcon } from "../assets/date.svg";
import { ReactComponent as SeatingIcon } from "../assets/seating.svg";
import { ReactComponent as OccasionIcon } from "../assets/occasion.svg";
import { fetchAPI, submitAPI } from "../api.js";

function ReservationForm({ currentView, setCurrentView, children }) {
  const [nextButtonText, setNextButtonText] = useState("Next");
  const [avaliableTimes, dispatchTime] = useTime();
  const [formSuccess, setFormSuccess] = useState(false);
  const nextButtonClick = (e) => {
    e.preventDefault();
    if (currentView === 1) {
      const userReservation = {
        guests: guests.currentValue,
        date: date.rawDate,
        time: time.currentValue,
        branch: branch.currentValue,
        occasion: occasion.currentValue,
        seating: seating.currentValue,
        name: name.currentValue,
        phoneNumber: phoneNumber.currentValue,
        comment: comment.currentValue,
      };
      const requestCondition = submitAPI(userReservation);
      if (requestCondition) {
        console.log(
          requestCondition,
          "Reservation Successful",
          userReservation
        );
        const action = {
          type: "UPDATETIMES",
          payload: time.currentValue,
        };
        dispatchTime(action);
        setFormSuccess(true);
        setCurrentView((prevState) => prevState + 1);
      }
    } else {
      setCurrentView((prevState) => prevState + 1);
    }
  };

  const prevButtonClick = (e) => {
    e.preventDefault();
    setCurrentView((prevState) => prevState - 1);
  };

  const [guests, setGuests] = useState({
    icon: <GuestsIcon />,
    placeHolder: "Guests",
    firstList: [1, 2, 3, 4, 5],
    secondList: [6, 7, 8, 9, 10],
    currentValue: "",
  });
  const [branch, setBranch] = useState({
    icon: <BranchIcon />,
    placeHolder: "Branch",
    firstList: ["Chicago", "New York"],
    currentValue: "",
  });

  const [time, setTime] = useState({
    icon: <TimeIcon />,
    placeHolder: "Time",
    currentValue: "",
    dispatchTime,
  });
  const [date, setDate] = useState({
    icon: <DateIcon />,
    placeHolder: "Date",
    firstList: [],
    currentValue: "",
    rawDate: "",
  });
  const [seating, setSeating] = useState({
    icon: <SeatingIcon />,
    placeHolder: "Seating",
    firstList: ["Inside", "Outside"],
    currentValue: "",
  });
  const [occasion, setOccasion] = useState({
    icon: <OccasionIcon />,
    placeHolder: "Occasion",
    firstList: ["Birthday", "Anniversary", "Engagement"],
    currentValue: "",
  });
  const [name, setName] = useState({
    placeHolder: "Name",
    currentValue: "",
    isValid: false,
  });
  const [phoneNumber, setPhoneNumber] = useState({
    placeHolder: "Phone Number",
    currentValue: "",
    isValid: false,
  });
  const [comment, setComment] = useState({
    placeHolder: "Additional Comment",
    currentValue: "",
  });

  const [buttonEnabled, setButtonEnabled] = useState(false);

  // initializeTime useEffect
  useEffect(() => {
    if (date.rawDate) {
      const data = fetchAPI(date.rawDate);
      const action = { type: "INITIALIZETIME", payload: data };
      dispatchTime(action);
    }
  }, [date.rawDate, dispatchTime]);
  useEffect(() => {
    setTime((prevState) => {
      return { ...prevState, ...avaliableTimes };
    });
  }, [avaliableTimes]);
  useEffect(() => {
    if (currentView === 0) setNextButtonText("Next");
    if (
      currentView === 0 &&
      guests.currentValue &&
      branch.currentValue &&
      time.currentValue &&
      date.currentValue &&
      seating.currentValue &&
      occasion.currentValue
    )
      setButtonEnabled(true);
    if (currentView === 1) {
      setButtonEnabled(false);
      setNextButtonText("Reserve");
    }
    if (
      currentView === 1 &&
      name.currentValue &&
      name.isValid &&
      phoneNumber.currentValue &&
      phoneNumber.isValid
    )
    setButtonEnabled(true);
  }, [
    currentView,
    guests,
    branch,
    time,
    date,
    seating,
    occasion,
    avaliableTimes,
    name,
    phoneNumber,
  ]);
  return (
    <div className="reservation-form">
      {children}
      {currentView === 0 ? (
        <FormFirstView
          formData={{ guests, branch, date, time, seating, occasion }}
          setFormData={{
            setGuests,
            setBranch,
            setDate,
            setTime,
            setSeating,
            setOccasion,
          }}
        />
      ) : (
        ""
      )}
      {currentView === 1 ? (
        <FormSecondView
          formData={{ name, phoneNumber, comment }}
          setFormData={{ setName, setPhoneNumber, setComment }}
        />
      ) : (
        ""
      )}
      {currentView === 2 ? <FormThirdView formSuccess={formSuccess} /> : ""}

      <div className="reservation-buttons">
        {currentView === 1 ? (
          <button onClick={prevButtonClick}>Previous</button>
        ) : (
          ""
        )}
        {currentView < 2 ? (
          <button
            onClick={nextButtonClick}
            disabled={buttonEnabled ? "" : "disabled"}
          >
            {nextButtonText}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ReservationForm;
