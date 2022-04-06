import { createContext } from "react";

const ClimaContext = createContext();

function ClimaProvider({ children }) {
  return <ClimaContext.Provider value={{}}>{children}</ClimaContext.Provider>;
}

export default ClimaContext;

export { ClimaProvider };
