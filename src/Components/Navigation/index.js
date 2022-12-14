import React from "react";


const Navigation = ({ setActivePage, activePage, activeNav, setActiveNav }) => {
  const handlePage = (e) => {
    if (
      e.target.innerText === "About me" ||
      e.target.innerText === "Mychael Contreras"
    ) {
      document.title = `Main - ${e.target.innerText}`;
      setActivePage("About");
    } else if (e.target.innerText === "Portfolio") {
      document.title = e.target.innerText;
      setActivePage("Portfolio");
    } else if (e.target.innerText === "Contact") {
      document.title = e.target.innerText;
      setActivePage("Contact");
    } else if (e.target.innerText === "Resume") {
      document.title = e.target.innerText;
      setActivePage("Resume");
    }
    setActiveNav(false);
  };
console.log(activePage)
  return (
    // <div class = "navbar navbar-expand-lg bg-light">
    //   <ul id="desktop-nav">
    //     <li>
    //       <a
    //         className={activePage === 'About' ? 'nav-link active' : 'nav-link'}
    //         href="#About"
    //         onClick={(e) => handlePage(e)}
    //       >
    //         About me
    //       </a>
    //     </li>
    //     <p>/</p>
    //     <li>
    //       <a
    //         className={activePage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
    //         href="#Portfolio"
    //         onClick={(e) => handlePage(e)}
    //       >
    //         Portfolio
    //       </a>
    //     </li>
    //     <p>/</p>
    //     <li>
    //       <a
    //         className={activePage === 'Contact' ? 'nav-link active' : 'nav-link'}
    //         href="#Contact"
    //         onClick={(e) => handlePage(e)}
    //       >
    //         Contact
    //       </a>
    //     </li>
    //     <p>/</p>
    //     <li>
    //       <a
    //         className={activePage === 'Resume' ? 'nav-link active' : 'nav-link'}
    //         href="#Resume"
    //         onClick={(e) => handlePage(e)}
    //       >
    //         Resume
    //       </a>
    //     </li>
    //   </ul>
    //   <img
    //     onClick={() => setActiveNav(!activeNav)}
    //     className={`nav-stack ${activeNav ? 'active' : ''}`}
    //     src="https://i.imgur.com/BZVQpUd.png"
    //     alt="Navigation Icon"
    //   ></img>
    //   <div>
    //     <ul className={`mobile-nav ${activeNav ? 'active' : ''}`}>
    //       <li>
    //         <a
    //           className={`navItem ${activePage ? "active" : ""}`}
    //           href="#About"
    //           onClick={(e) => handlePage(e)}
    //         >
    //           About me
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           className={`navItem ${activePage ? 'active' : ''}`}
    //           href="#Portfolio"
    //           onClick={(e) => handlePage(e)}
    //         >
    //           Portfolio
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           className={`navItem ${activePage ? 'active' : ''}`}
    //           href="#Contact"
    //           onClick={(e) => handlePage(e)}
    //         >
    //           Contact
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           className={`navItem ${activePage ? 'active' : ''}`}
    //           href="#Resume"
    //           onClick={(e) => handlePage(e)}
    //         >
    //           Resume
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>

<nav class="navbar navbar-expand-lg bg-red">
<div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
      <a
            className={activePage === 'About' ? 'nav-link active' : 'nav-link'}
            href="#About"
            onClick={(e) => handlePage(e)}
          >
            About me
          </a>
      </li>
      <li class="nav-item">
      <a
            className={activePage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            href="#Portfolio"
            onClick={(e) => handlePage(e)}
          >
            Portfolio
          </a>
      </li>
      <li class="nav-item">
      <a
            className={activePage === 'Contact' ? 'nav-link active' : 'nav-link'}
            href="#Contact"
            onClick={(e) => handlePage(e)}
          >
            Contact
          </a>
      </li>
      <li class="nav-item">
      <a
            className={activePage === 'Resume' ? 'nav-link active' : 'nav-link'}
            href="#Resume"
            onClick={(e) => handlePage(e)}
          >
            Resume
          </a>
      </li>
    </ul>
  </div>
</div>
</nav>
  );
};

export default Navigation;
