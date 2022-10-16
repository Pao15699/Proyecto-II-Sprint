import Display from "./display"
import PanelDeBotones from "./PanelDeBotones"
import {component} from "react"

class App extends component {

state = {
  total: null,
  siguiente: null,
  operador: null
}

  render() {
  return (
    <div>
    <h1> Bienvenidos</h1>
    <Display value={this.state.siguiente || this.state.total || "0"} />
    <PanelDeBotones/>
    </div>
  );
} 
}

export default App;
