import './App.css';
import Section1 from '../src/components/Section1/Section1.js';
import Section2 from '../src/components/Section2/Section2.js';
import Section3 from '../src/components/Section3/Section3.js';
import Section4 from '../src/components/Section4/Section4.js';
import Section5 from '../src/components/Section5/Section5.js';
import Section6 from '../src/components/Section6/Section6.js';
import Section7 from '../src/components/Section7/Section7.js';
import Footer from '../src/components/Footer/Footer.js';
import Footerlast from './components/Footerlastpart/Footerlast';
function App() {
  return (
    <div className="App">
    <Section1></Section1> 
    <Section2></Section2> 
    <Section3></Section3>
    <Section4></Section4>   
    <Section5></Section5>
    {/* <Section7></Section7> */}
    <Section6></Section6>
    <Footer></Footer>
    <Footerlast></Footerlast>
    </div>
  );
}

export default App;
