import legendItems from "../entities/LegendItems";
import { features } from "../data/wilayas.json";
//    this.setState(features);

class LoadWilayasTask {
  load = (setState) => {
    setState(features);
  };
}

export default LoadWilayasTask;
