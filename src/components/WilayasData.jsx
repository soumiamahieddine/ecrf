import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import WilayasMap from "./WilayasMap";
import LoadWilayasTask from "../tasks/LoadWilayasTask";
import Legend from "./Legend";
import legendItems from "../entities/LegendItems";

const WilayasData = () => {
  const [wilayas, setWilayas] = useState([]);

  const load = () => {
    console.log("load");
    const loadWilayasTask = new LoadWilayasTask();
    loadWilayasTask.load((wilayas) => setWilayas(wilayas));
  };

  useEffect(load, []);

  return (
    <div>
      {wilayas.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <WilayasMap wilayas={wilayas} />
        </div>
      )}
    </div>
  );
};

export default WilayasData;
