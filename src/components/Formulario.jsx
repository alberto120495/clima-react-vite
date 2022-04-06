import { useState } from "react";
import useClima from "../hooks/useClima";

function Formulario() {
  const { busqueda, datosBusqueda, consultarClima } = useClima();

  const [alerta, setAlerta] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son obligatorios");
      return;
    }
    consultarClima(busqueda);
    setAlerta("");
  };
  return (
    <div className="contenedor">
      {alerta && <p>{alerta}</p>}

      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="campo"
            name="ciudad"
            value={busqueda.ciudad}
            onChange={datosBusqueda}
          />
        </div>
        <div className="campo">
          <label htmlFor="pais">País</label>
          <select
            name="pais"
            id="pais"
            value={busqueda.pais}
            onChange={datosBusqueda}
          >
            <option value="">Seleccione un país</option>
            <option value="MX">Mexico</option>
            <option value="US">Estados Unidos</option>
            <option value="AR">Argentina</option>
            <option value="CR">Colombia</option>
            <option value="ES">España</option>
            <option value="PE">Peru</option>
          </select>
        </div>

        <input type="submit" value="Consultar clima" />
      </form>
    </div>
  );
}

export default Formulario;
