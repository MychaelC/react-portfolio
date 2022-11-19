import React from "react";

const Resume = () => {
    return (
        <div id="resume">
            <h1 id="main-section-header">Resume</h1>
            <hr id="main-section-hr" />
            <a
            id="resume-link"
            href={`./Assets/Resume/Mychael Contreras - Resume 2022-1.pdf`}
            download
            >
                Download My Resume
            </a>
            <div id="resume-wrapper">
                <div id="backend">
                    <h1>Back-End Proficiencies</h1>
                    <ul>
                        <li>Express</li>
                        <li>GraphQL</li>
                        <li>Heroku</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>SQLite</li>
                        <li>NoSQL</li>
                        <li>IndexedDB</li>
                        <li>LocalStorage</li>
                        <li>Service Worker</li>
                        <li>PWA, OOP, ORM</li>
                        <li>MVC, MERN Stack</li>
                    </ul>
                    </div>
                    <div id="frontend">
                    <h1>Front-End Proficiencies</h1>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Materialize</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                        <li>Handlebars</li>
                        <li>Tailwind</li>
                    </ul>
                    </div>
                    <div id="dev-tools">
                    <h1>Web Development Tools</h1>
                    <ul>
                        <li>Git</li>
                        <li>Node</li>
                        <li>Jest</li>
                        <li>GitHub</li>
                        <li>Visual Studio Code</li>
                        <li>Webpack</li>
                        <li>NoSQL</li>
                        <li>IndexedDB</li>
                        <li>LocalStorage</li>
                        <li>Service Worker</li>
                        <li>PWA, OOP, ORM</li>
                        <li>MVC, MERN Stack</li>
                    </ul>
                    </div>
                    </div>
                    </div>

    );
};

export default Resume;