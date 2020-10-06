import { CURRENT_WEATHER } from "../actions/types";

export const currentWeather = (weather) => ({
  type: CURRENT_WEATHER,
  weather,
});

const initialState = {
  dapi2: {
    key: "d63c7d503cfb0a45ff09fe5274c4d2ea",
    base: "https://api.openweathermap.org/data/2.5/onecall",
  },
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_WEATHER:
      {
        const fetchDatas = async () => {
          try {
            const res = await axios.get(
              `${api2.base}?lat=${Lat}&lon=${Lon}&appid=${api2.key}`
            );
            res.data;
          } catch (e) {
            e;
          }
        };
        fetchDatas();
      }
      return { ...state };
    default:
      return state;
  }
};

export default weather;
