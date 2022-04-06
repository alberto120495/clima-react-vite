import { useState, createContext } from "react";

const ClimaContext = createContext();

function ClimaProvider({ children }) {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const datosBusqueda = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const consultarClima = (datos) => {
    console.log(datos);
  };

  return (
    <ClimaContext.Provider value={{ busqueda, datosBusqueda, consultarClima }}>
      {children}
    </ClimaContext.Provider>
  );
}

export default ClimaContext;

export { ClimaProvider };
