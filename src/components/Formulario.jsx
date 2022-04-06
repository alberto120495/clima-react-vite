function Formulario() {
  return (
    <div className="contenedor">
      <form action="">
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input type="text" id="campo" name="ciudad" />
        </div>
        <div className="campo">
          <label htmlFor="pais">País</label>
          <select name="pais" id="pais">
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
