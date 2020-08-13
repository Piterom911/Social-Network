import React from "react";

const Header = () => {
    return (
        <header>
            <div className="container container_header">
                <a href="#main" className="logo">
                    <img src="https://lh3.googleusercontent.com/proxy/3uTDRI_01tT9C1LtM3oLGqjSDTHCPkDySZ8XFnzoZ_Y94ESymCQ4WrTuRMngK0NVF57Vv5U1gE41b8OwNStgCEG3GDWE8xvE17F_cftZlwyaP3a5IeV49w" alt="logo"/>
                </a>
                <nav>
                    <ul>
                        <li><a href="#notNow">Something 1</a></li>
                        <li><a href="#notNow">Something 2</a></li>
                        <li><a href="#notNow">Something 3</a></li>
                        <li><a href="#notNow">Something 4</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;