import React, { Component } from "react";
import axios from "axios";

class DatosApi extends Component {
  constructor(props) {
    super(props);

    this.state = {
        characters: [],
    };
  }

  componentDidMount(){
      axios.get('https://my-json-server.typicode.com/cristiancamilo03/dataJSON/characters')
      .then(resp => {
          this.setState({characters: resp.data})
        })
    }

  // componentDidMount(){
  //     fetch('https://jsonplaceholder.typicode.com/posts', {method: 'get'})
  //     .then(response => response.json())
  //     .then(dataResponse => {
  //         this.setState({
  //             posts: dataResponse
  //         })
  //     });
  // }

  render() {
    const { characters } = this.state;
    return (
      <>
        <div>
          {characters.map((u) => (
            <>
              <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top" src={u.imagen} alt={u.nombre}/>
                <div className="card-body" key={u.id}>
                  <h5 className="card-title">{u.nombre}</h5>
                  <p className="card-text">Edad: {u.edad}.</p>
                  <p className="card-text">Genero: {u.genero}.</p>
                  <p className="card-text">Posicion: {u.posicion}.</p>
                  <p className="card-text">Equipo: {u.equipo}.</p>
                  <p className="card-text">Padres: {u.padres}.</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </>
    );
  }
}

export default DatosApi;
