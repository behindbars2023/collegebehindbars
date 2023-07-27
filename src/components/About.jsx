import AboutUsImage1 from '../images/img1.jpg'
import States from "./states";
import abt1 from "../images/abt1.jpg"
import abt2 from "../images/abt2.jpg"
import abt3 from "../images/abt3.jpg"


const About = () => {
    return (
        <>

            <section className='about__Vision'>

                <div className='about_header'>
                    <h2>COME AS YOU ARE <br /> LEAVE READY TO MAKE A DIFFERENCE IN THE WORLD</h2>
                    <h3>Prisons may seem designed to strip inhabitants of their humanity, but some individuals discover new hope and strength during their incarceration</h3>
                </div>

                 <div className='container about__Vision-container'>

                    <div className='about__section-content' id="about">
                        <h1> About Us</h1>
                        <p>
                            CBB is a prison education initiative in computing. </p>
                        <p>We train incarcerated inmates in  Africa with marketable and employable skills and connect them to employers home and abroad </p>

                        <p>Student inmates Receive support  from our dedicated Student Success Team, mentors, a personal career coach, and more</p>

                        <p>They owe us nothing until they get a job and decide  to donate</p>
                        <img src={abt1} className="img-custom" alt="" />
                        <i className='i-c'>Our believe is that bringing the  traditions of college into a prison is transformative. Giving the people within,  the opportunity to reinvent themselves and to change their life trajectory.</i>
                        <p className='c-p'>making them highly employable home and abroad thereby enhancing the role of prisons in national development.</p>

                    </div>

                    <div className='about__section-content' id='why_it_matters'>
                        <h1>Why It Matters</h1>
                        <p>Africa has the highest incarceration rate in the world,  These high rates are partly caused by recidivism: those who are released from prison almost always return. Educational programs have been shown to drastically reduce recidivism, but educational opportunities fall below demand and often don't equip students with employable skills. At College Behind Bars, we address this challenge by helping incarcerated people develop the technical skills and self-efficacy needed to thrive post-release.
                        </p>
                        <img src={abt2} className="img-custom" alt="" />
                    </div>

                    <States />

                    <div className='about__section-content' id='curriculum'>
                        <h1>A World-Class Curriculum</h1>
                        <p>College behind Bars is designed to teach incarcerated students  the most in-demand skills in web development, developing their technical skills, building projects, from simple scripts to full web apps and deployed systems, improving the skills they need to excel in the global job market. It has three main parts: core technical skills, career-readiness, and a capstone project.</p>
                        <img src={abt3} className="img-custom" alt="" />
                    </div>

                    <div className='about__section-content'>
                        <h1>Core technical skills</h1>
                        <p>During the full-time technical curriculum, student inmates spend 6 to 9 months learning the most in-demand skills in web development, developing their technical skills, building projects, from simple scripts to full web apps and deployed systems, improving the skills they need to excel in the global job marke</p>
                    </div>

                    <div className='about__section-content'>
                        <h1>Career-readiness</h1>
                        <p>The class includes dedicated lectures on CV writing, presentation and public speaking. Students are also introduced to relevant technology-facing career paths by guest lecturers. They  learn where to find jobs, how to do great interviews, and the best strategies to launch your career.</p>
                    </div>

                    <div className='abt_img about__Vision-image'>
                        <img className='abt-image-first' src={AboutUsImage1} alt='About Us' />
                    </div>
                </div> 
            </section>
        </>
    )
}
export default About
