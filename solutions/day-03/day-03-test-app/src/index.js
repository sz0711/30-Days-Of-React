import React from 'react'
import { createRoot }  from 'react-dom/client';

class Button extends React.Component {
    render() { 
        const{
            clickEvent,
            buttonText
        } = this.props
    return(
    <button onClick={clickEvent}>{buttonText}</button>
    )}
}


const Red = () => (
  <div>
    <h1>THIS IS THE RED ONE</h1>
  </div>
)
const Normal = (props) => (
  <div>
    <h1>THIS IS THE USUALLY COMPONENT!</h1>
  </div>
)



class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        bgColor: "#FFF",
        textColor: "red"
      }
    }
  
  
    buttonClick = (e) => {
      let bg = this.state.bgColor === "#FFF" ? "red" : "#FFF";
      let font = this.state.bgColor === "#FFF" ? "#FFF" : "red";

      this.setState({
        bgColor: bg, textColor: font
      })
    }

    
    render() {
      let btnTxt;
      btnTxt = this.state.bgColor === "#FFF" ? "Turn into red!" : "Let's get back to normal...";
      let status = this.state.bgColor === "#FFF" ? (
        <Normal/>
      ) : (
        <Red/>
      )
     
      return (
        <div className="App" style={{backgroundColor: this.state.bgColor, color: this.state.textColor}}>
          {status}
          <article className='experimentsHolder'>
            <h2>Test 3</h2>
            <p>This is an example of an onClick event 'renderd' by react.</p>
            <Button clickEvent={this.buttonClick} buttonText={btnTxt} />
          </article>
  
        </div>
      );
    }
  }

const root = createRoot( document.getElementById("root") );
root.render(<App/>);