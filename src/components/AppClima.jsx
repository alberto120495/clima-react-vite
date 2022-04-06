import useClima from "../hooks/useClima";
import Formulario from "./Formulario";
import Resultado from "./Resultado";
import Spinner from "./Spinner";
function AppClima() {
  const { clima, cargando, noResultado } = useClima();
  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {cargando ? (
          <Spinner />
        ) : clima?.name ? (
          <Resultado />
        ) : noResultado ? (
          <p>No hay resultados</p>
        ) : (
          <p>El clima se va a mostrar aqui</p>
        )}
      </main>
    </>
  );
}

export default AppClima;
