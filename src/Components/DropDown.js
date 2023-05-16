import React, { useRef } from "react";
import { ReactComponent as DropDownArrow } from "../assets/dropdownarrow.svg";
function DropDown({ data, setData }) {
  const dropDownMenu = useRef(null);
  const toggleDropDown = () => {
    if (dropDownMenu.current.classList.contains("dropdown-hidden")) {
      dropDownMenu.current.classList.remove("dropdown-hidden");
    } else {
      dropDownMenu.current.classList.add("dropdown-hidden");
    }
  };
  const clickHandler = (event)=>{
    setData((prevState)=>{
      return {...prevState, currentValue: event.target.innerText}
    })
  }

  return (
    <div
      className={
        !!data.currentValue
          ? "dropdown drop-down--selected"
          : "dropdown"
      }
      onClick={toggleDropDown}
    >
      <div className="dropdown-select">
        <div
          className={
            !!data.currentValue
              ? "drop-down--icon drop-down--icon--active"
              : "drop-down--icon"
          }
        >
          {data.icon}
        </div>
        <div
          className={
             !!data.currentValue
              ? "drop-title drop-down--title-selected"
              : "drop-title"
          }
        >
          {!!data.currentValue ? data.currentValue : data.placeHolder}
        </div>
        <div
          className={
            !!data.currentValue
              ? "drop-arrow drop-arrow--rotate"
              : "drop-arrow"
          }
        >
          <DropDownArrow />
        </div>
      </div>
      <ul className="dropdown-hidden dropdown-menu" ref={dropDownMenu}>
        <div className="dropdown-menu--section1">{Array.from(data.firstList).map((e,i)=><li key={e} value={i} onClick={clickHandler}>{e}</li>)}</div>
        {data.secondList ? (
          <div className="dropdown-menu--section2">{Array.from(data.secondList).map((e, i)=><li key={e} value={i+data.firstList.length} onClick={clickHandler}>{e}</li>)}</div>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

export default React.memo(DropDown);
