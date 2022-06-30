import React from "react";
import NavTop from "../../components/NavTop";
import styled from "styled-components";
import DashboardButton from "../../components/DashboardButton";
import plus from "../../img/PlusLogo.svg";
import modify from "../../img/modify.svg";
import { useState } from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { DateRangePickerCalendar, START_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import "./NiceDatesStyle.scss";
//import Covid19 from "../../components/WilayasData";
import PageTitle from "../../components/PageTitle";
import HistListPatients from "../HistListPatients";
import dates from "../../data/dates";
import { useNavigate } from "react-router-dom";

export default function DashboardAdmin() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [focus, setFocus] = useState(START_DATE);
  const handleFocusChange = (newFocus) => {
    setFocus(newFocus || START_DATE);
  };

  return (
    <StyledDiv>
      <NavTop />
      <PageTitle title="Accueil" />
      <div className="widgets">
        <div id="firstWidget" className=" widget">
          <div className="buttons">
            <DashboardButton
              imgName={"fa-solid fa-circle-plus"}
              name="Ajouter Medecin"
              onClick={() => {
                navigate("/addDoctor");
              }}
            />
            <DashboardButton
              imgName={"fa-solid fa-list-ul"}
              name="Liste des medecins"
              onClick={() => {
                navigate("/listmedecins");
              }}
            />
          </div>
          <div className="infos-datePicker">
            <p>
              Date début d'étude séléctionnée :
              {startDate
                ? format(startDate, "dd MMM yyyy", { locale: enGB })
                : " Auccune"}
              .
            </p>
            <p>
              Date fin d'étude séléctionnée :
              {endDate
                ? format(endDate, "dd MMM yyyy", { locale: enGB })
                : " Auccune"}
              .
            </p>
            <p>
              actuellement vous aller selectionner :
              {focus === "startDate" ? " Date Début" : " Date Fin"}.
            </p>
          </div>
          <div className="datePickerWrapper date-input-field">
            <DateRangePickerCalendar
              startDate={startDate}
              endDate={endDate}
              onStartDateChange={setStartDate}
              onEndDateChange={setEndDate}
              focus={focus}
              onFocusChange={handleFocusChange}
              locale={enGB}
            />
          </div>
        </div>
        {/* <div className="widget widgetOther">
          <Covid19 />
        </div> */}
        <div id="historique" className="widget widgetOther">
          <h3>Historique</h3>
          <HistListPatients />
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 79vw;
  height: 100vh;

  .widgets {
    display: flex;
    margin-left: 5rem;
    margin-right: 5rem;
    justify-content: space-around;
  }
  .widget {
    width: 100%;
    height: 70vh;
    margin: 2rem 1rem;
  }
  .widgetOther {
    height: 70vh;
    border: solid 2px #243153;
    border-radius: 25px;
    overflow: hidden;

    &.historique {
      cursor: pointer;
    }
  }

  #firstWidget {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
  }
  /* #historique {
    overflow-y: scroll;
  } */
  .buttons {
    margin-bottom: 1rem;
  }
  h3 {
    padding: 0.8rem;
  }
  .infos-datePicker {
    padding-bottom: 2rem;
  }
  p {
    margin-bottom: 5px;
  }
`;
