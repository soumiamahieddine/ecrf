import React from "react";
import NavTop from "../components/NavTop";
import styled from "styled-components";
import DashboardButton from "../components/DashboardButton";
import plus from "../img/PlusLogo.svg";
import modify from "../img/modify.svg";
import { useState } from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { DateRangePickerCalendar, START_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import "./style.scss";
import Title from "../components/Inscreptiontitle";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const startDate = new Date("2022-01-01");
  const endDate = new Date("2022-01-25");
  const [focus, setFocus] = useState(START_DATE);
  const handleFocusChange = (newFocus) => {
    setFocus(newFocus || START_DATE);
  };
  const navigate = useNavigate();
  return (
    <StyledDiv>
      <NavTop />
      <Title title="Dashboard" />
      <div className="widgets">
        <div id="firstWidget" className=" widget">
          <div className="buttons">
            <DashboardButton
              onClick={() => {
                navigate("/donneesDemograghiques");
              }}
              imgName={plus}
              name="Ajouter un Patient"
            />
            <DashboardButton
              imgName={modify}
              name="Modifier un Patient"
              onClick={() => {
                navigate("/listPatients");
              }}
            />
          </div>
          <div className="datePickerWrapper" className="date-input-field">
            <DateRangePickerCalendar
              startDate={startDate}
              endDate={endDate}
              focus={focus}
              onFocusChange={handleFocusChange}
              locale={enGB}
            />
          </div>
        </div>
        <div className="widget widgetOther"></div>
        <div className="widget widgetOther"></div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 80vw;
  height: 100vh;

  .widgets {
    display: flex;
    margin: 2rem 5rem;
    justify-content: space-between;
  }
  .widget {
    flex: 1 1 45rem;
    height: 70vh;
    margin: 2rem 1rem;
  }
  .widgetOther {
    height: 70vh;
    border: solid 2px #243153;
    border-radius: 25px;
  }
  .datePickerWrapper {
  }
  #firstWidget {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .buttons {
    margin-bottom: 1rem;
  }
`;
