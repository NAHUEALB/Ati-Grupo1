import React from "react";
import "./Formulario.css";

class Formulario extends React.Component {
  onChange = (e) => {
    console.log(e.target.value);
    this.setState({
      nombre: e.target.value,
      jugadores: e.target.value,
    });
  };

  state = {
    nombre: "",
    jugadores: "",
  };
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-9 centrar ">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Hostname"
                  value={this.props.nombre}
                  onChange={this.onChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Max Players"
                  value={this.props.jugadores}
                  onChange={this.onChange}
                />
              </div>

              <div className="">
                <button className="btng" type="submit">
                  {" "}
                  CREAR SALA
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Formulario;
