import { useState, createContext } from "react";
import axios from "axios";
const ClimaContext = createContext();

function ClimaProvider({ children }) {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const [clima, setClima] = useState({});

  const datosBusqueda = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const consultarClima = async (datos) => {
    try {
      const { ciudad, pais } = datos;
      const appId = import.meta.env.VITE_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&limit=1&appid=${appId}`;

      const { data } = await axios(url);
      const { lat, lon } = data.coord;
      const urlClima = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${appId}`;

      const { data: datosClima } = await axios(urlClima);

      setClima(datosClima);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ClimaContext.Provider
      value={{ busqueda, datosBusqueda, consultarClima, clima }}
    >
      {children}
    </ClimaContext.Provider>
  );
}

export default ClimaContext;

export { ClimaProvider };
