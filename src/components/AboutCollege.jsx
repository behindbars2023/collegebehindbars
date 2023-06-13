import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import MakeDonation from "./makeDonation";
import States from "./states";


// Email Config
import { useRef } from 'react';
import emailjs from 'emailjs-com';

import AboutUsImage1 from '../images/img3.jpg'


const AboutCollege = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_603troq', 'template_swlyqkl', form.current, 'UvWQTJzb_i8apdc8o')

        e.target.reset()
    };

    return (
        <div>
            <Navbar />
            {/* <SmallerHeader title ="ABOUT GRASSROOT" image={HeaderImage}>
    Grassroot is run by an open community of experienced software engineers from Havard and universities around the world.
    </SmallerHeader> */}
            <section className='about__Vision about-page'>
                <div className='container about__Vision-container'>

                    <div className='about__section-content'>
                        <h1 className="about-heading"> About College Behind Bars</h1>
                        <p>
                            CBB is A web development and career-readiness program for incarcerated Africans  taught by software engineers from Grassroot software academy in collaboration  with PhD students from Universities home and abroad, online and in-person, Together, our students develop skills in digital literacy, web design, and career-readiness, building web applications to help address some of society's most pressing issues. We currently work in three African countries with plans to scale
                        </p>
                        <p>
                            The idea behind this initiative  is to prepare the ‘less adequate’ for the world outside,
                            to make inmates employable through  rehabilitation  and redirecting their paths towards social inclusion and  productivity,  contributing to the development of their societies and ipso facto enhancing the role of prisons in national development.
                        </p>                        


                        <h1 className="sub_heading">Why It Matters</h1>
                        <p>
                            Africa has the highest incarceration rate in the world,  These high rates are partly caused by recidivism: those who are released from prison almost always return. Educational programs have been shown to drastically reduce recidivism, but educational opportunities fall below demand and often don't equip students with employable skills. At College Behind Bars, we address this challenge by helping incarcerated people develop the technical skills and self-efficacy needed to thrive post-release.
                        </p>

                        <States />

                        <h1 className="sub_heading">CURRICULUM</h1>
                        <p>College behind Bars is designed to teach incarcerated students  the most in-demand skills in web development, developing their technical skills, building projects, from simple scripts to full web apps and deployed systems, improving the skills they need to excel in the global job market. It has three main parts: core technical skills, career-readiness, and a capstone project.</p>

                        <h3 className="sub_heading">Core technical skills</h3>
                        <p>During the full-time technical curriculum, student inmates spend 6 to 9 months learning the most in-demand skills in web development, developing their technical skills, building projects, from simple scripts to full web apps and deployed systems, improving the skills they need to excel in the global job marke</p>

                        <h3 className="sub_heading">Career-readiness</h3>
                        <p>The class includes dedicated lectures on CV writing, presentation and public speaking. Students are also introduced to relevant technology-facing career paths by guest lecturers. They  learn where to find jobs, how to do great interviews, and the best strategies to launch your career.</p>


                        <br />

                        <MakeDonation />


                        <br />

                        <h3 className="dontate__physical-items">For Physical items like food, computers, and computer accessories, please fill out the form below and  a CBB ambassador will get in touch</h3>


                        <form ref={form} onSubmit={sendEmail}>
                            <input type='text' name='name' placeholder='Full Name' required />
                            <input type='email' name='email' placeholder='Email' required />
                            <input type='tel' name='telephone' placeholder='Phone Number' required />
                            <textarea name='message' rows='7' placeholder='Drop your message' required />
                            <button type='submit' className='btnStart'>Submit</button>
                        </form>

                    </div>
                    <div className='about__Vision-image'>
                        <img src={AboutUsImage1} alt='About Us' />
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    )
}

export default AboutCollege
