import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/intro"
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact"
import "./App.scss"
import Menu from "./components/menu/menu"
import Helmet from 'react-helmet'
function App() {

  return (
    <div className="App" id="App">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Agustín Fabio,Motta</title>
    </Helmet>
        <Topbar />
        <Menu/>
        <div className="sections">
          <Intro className="inside-section"/>
          <Portfolio  className="inside-section"/>
          <Works  className="inside-section"/>
          
          <Contact  className="inside-section"/>
        </div>
    </div>
  );
}

export default App;
