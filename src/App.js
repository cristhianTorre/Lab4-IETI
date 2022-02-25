import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
  return(
    <div className="App">
        <header className="App-header">
          <div>
            <TextField id="filled-basic" label="Email" variant="filled" />
          </div>
          <div>
            <TextField id="filled-basic" label="Password" variant="filled" />
          </div>
          <div>
            <Button variant="outlined">Login</Button>
          </div>
        </header>
    </div>
  );
}
export default App;
