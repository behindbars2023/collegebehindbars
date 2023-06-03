import AboutUsImage1 from '../images/img1.jpg'


const About = () => {
    return (
        <>

            <section className='about__Vision'>

                <div className='about_header'>
                    <h2>COME AS YOU ARE <br/> LEAVE READY TO MAKE A DIFFERENCE IN THE WORLD</h2>            
                    <h3>Prisons may seem designed to strip inhabitants of their humanity, but some individuals discover new hope and strength during their incarceration</h3>
                </div>

                <div className='container about__Vision-container'>

                    <div className='about__section-content'>
                        <h1> About Us</h1>
                        <p>
                            CBB is A web development and career-readiness program for incarcerated Africans  taught by software engineers from Grassroot software academy in collaboration  with PhD students from Universities home and abroad, online and in-person, Together, our students develop skills in digital literacy, web design, and career-readiness, building web applications to help address some of society's most pressing issues. We currently work in three African countries with plans to scale</p>
                        <p>The idea behind this initiative  is to prepare the ‘less adequate’ for the world outside,
                            to make inmates employable through  rehabilitation  and redirecting their paths towards social inclusion and  productivity,  contributing to the development of their societies and ipso facto enhancing the role of prisons in national development.</p>


                    </div>
                    <div className='about__Vision-image'>
                        <img src={AboutUsImage1} alt='About Us' />
                    </div>
                </div>
            </section>
        </>
    )
}
export default About
