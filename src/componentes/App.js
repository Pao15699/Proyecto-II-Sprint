import Display from "./display"
import PanelDeBotones from "./PanelDeBotones"
import component from "react"
import operaciones from "../logic/operaciones"
import "./App.css"

class App extends component {

state = {
  total: null,
  siguiente: null,
  operador: null
}

handleClick =nombreDeBoton => this.setState(operaciones(this.state, nombreDeBoton))


  render() {
  return (
    <div className="comoponent-app"> 
    <h1> Bienvenidos</h1>
    <Display value={this.state.siguiente || this.state.total || "0"} />
    <PanelDeBotones clickHandle={this.clickHandle} />
    </div>
  );
} 
}

export default App;