import React, { useEffect, useState } from "react";
import FormFirstView from "./FormFirstView";
import FormSecondView from "./FormSecondView";
import FormThirdView from "./FormThirdView";
import { ReactComponent as GuestsIcon } from "../assets/guests.svg";
import { ReactComponent as BranchIcon } from "../assets/branch.svg";
import { ReactComponent as TimeIcon } from "../assets/time.svg";
import { ReactComponent as DateIcon } from "../assets/date.svg";
import { ReactComponent as SeatingIcon } from "../assets/seating.svg";
import { ReactComponent as OccasionIcon } from "../assets/occasion.svg";

function ReservationForm({ currentView, setCurrentView, children }) {
  const [nextButtonText, setNextButtonText] = useState("Next");

  const nextButtonClick = (e) => {
    e.preventDefault();
    if (currentView === 1) {
      console.log("Request Recieved");
      setCurrentView((prevState) => prevState + 1);
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
    firstList: ["17:00", "18:00", "19:00"],
    secondList: ["20:00", "21:00", "22:00"],
    currentValue: "",
  });
  const [date, setDate] = useState({
    icon: <DateIcon />,
    placeHolder: "Date",
    firstList: ["17:00", "18:00", "19:00"],
    currentValue: "",
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
  });
  const [phoneNumber, setPhoneNumber] = useState({
    placeHolder: "Phone Number",
    currentValue: "",
  });
  const [comment, setComment] = useState({
    placeHolder: "Additional Comment",
    currentValue: "",
  });

  const [buttonEnabled, setButtonEnabled] = useState(false);

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
    if (currentView === 1 && name.currentValue && phoneNumber.currentValue)
      setButtonEnabled(true);
    console.log(phoneNumber);
  }, [
    currentView,
    guests,
    branch,
    time,
    date,
    seating,
    occasion,
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
      {currentView === 2 ? (
        <FormThirdView formData={"formData"} setFormData={"setFormData"} />
      ) : (
        ""
      )}

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
