import domore from './drawable/domoreim.svg';
import './login.css';

function Header() {
  return <h1>1more TODO list</h1>;
}
function Label(props){
  return <h3>{props.label} </h3>;
}
function Input(props){
  return <input type="text" placeholder={props.text}/>;
}

function App() {
  return (
    <div className ="row">
      <div className ="block">
      <div className="content">
        <Header />
        <Label label="Email" />
        <Input text="Enter email..." />
        <Label label ="Password" />
        <Input text="Enter password..."/>
        <button className="button" onclick="/tasks">Login</button>
      </div>
      </div>
      <div clasName ="block">
        <img src={domore}/>
      </div>
    </div>
  );
}

export default App;
