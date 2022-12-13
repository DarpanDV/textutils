// import logo from './logo.svg';
import './App.css';
// import About from './component/About';
import NAvbar from './component/NAvbar';
import Textarea from './component/Textarea';

function App() {
  return (
    <>
    <NAvbar textutils="TextUtils2"/>
    <div className="container">
    <Textarea />
    </div>
    {/* <About/> */}
    </>
  );
}

export default App;
