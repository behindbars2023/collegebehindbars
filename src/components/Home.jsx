import React from "react";
import Navbar from "./Navbar";
import MainHeader from "./MainHeader";
import About from "./About"
import HowItWorks from "./HowItWorks"
import Challenges from "./Challenges"
import FormCustom from "./FormCustom"
import Testimonials from "./Testimonials";
import Sample from "./Sample";
import Partners from "./Partners";
import Sponsore from "./Sponsore";
import Programs from "./Programs"
import Donate from "./Donate"
import Footer from "./Footer"

const Home = () => {
    return (
        <div>
            <Navbar />
            <MainHeader />
            <About />
            {/* <HowItWorks /> */}
            <Sample />
            <Programs />
            {/* <Challenges /> */}
            <Partners />
            <Testimonials />
            <Sponsore />
            <FormCustom />
            <Footer />            
        </div>
    )
}

export default Home