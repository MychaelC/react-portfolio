import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";

function App() {
  const [activePage, setActivePage] = useState("About");

  const [activeNav, setActiveNav] = useState(false);
  function renderpage() {
    if (activePage === "About") {
      return <About />;
    } else if (activePage === "Portfolio") {
      return <Portfolio />;
    } else if (activePage === "Contact") {
      return <Contact />;
    } else if (activePage === "Resume") {
      return <Resume />;
    }
  }
  return (
    <main
      onClick={(e) => {
        if (
          e.target.className === "" ||
          !e.target.className === "nav-stack active" ||
          !e.target.className === "nav-stack" ||
          !e.target.className === "mobile-nav active" ||
          e.target.className === "subject" ||
          e.target.className === "name" ||
          e.target.className === "email"
        ) {
          return setActiveNav(false);
        }
        if (e.target.className === "mobile-nav active") {
          return setActiveNav(true);
        }
      }}
    >
      <nav>
        <Navigation
          activePage={activePage}
          setActivePage={setActivePage}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
        />
        {/* <Header /> */}
      </nav>
      <section>{renderpage()}</section>
      <Footer />
    </main>
  );
}

export default App;

//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
