import logo from './logo.svg';
import './App.css';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
      {/* adds the Nav */}
     <Nav></Nav>
     {/* adds the h3 */}
     <div id='login'>
      <h3>Log In</h3>     
     </div>
     {/* adds the log in form */}
     <div id='log'>
      <label>Username:</label><input type='text' ></input>
      <label>Password</label><input type='text'></input>
     </div>
    </div>
   
  );
}

export default App;
