import React from "react";
import AmigosHeader from "./AmigosHeader";
import AmigosHero from "./AmigosHero";
import About from "./About";
import HowItWorks from "./HowItWorks";
import Events from "./Events";
import Footer from "./Footer";



function WangaAmigosHome(){
    return(
        <div className="wanga_amigos">
          
            <AmigosHeader />
            <AmigosHero />
            <About />
            <HowItWorks />
            <Events />
            <Footer />
        </div>
    )
}
export default WangaAmigosHome;