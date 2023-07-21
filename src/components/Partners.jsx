import sam from "../images/sam.jpg"
import david from "../images/david.png"
import merisa from "../images/merisa.jpg"
import engr from "../images/engr.jpg"

const Partners = () => {
    return (
        <>
            <div className="sponsors" id="partners">
                {/* <h1>PARTNERS</h1>              
                <div className='partners_cta sponsors_description'>
                    <h3>GRASSROOT  ACADEMY </h3>
                    <p>Our curriculum was developed by Grassroot Software Academy, an Online school  for web engineering where young Africans are trained and connected to a network of employers home and abroad.  At Grassroot, there are no tuition fees for all Africans until they  graduate and start working.</p>
                    <br />
                    <p>Grassroot Academy  helps provide teaching staff for the college behind Bars initiative without which we would not exist.</p>
                </div> */}
                <div className='partners_cta sponsors_description'>
                    <h3>OUR TEAM</h3>
                    <p>College Behind Bars was launched by Engr Sampson, Marisa, Dr David, and Engr Abha in September 2021 Since then, we have been joined by a dozen affiliates who volunteer to instruct and coach student inmates.</p>
                </div>

                <div className='team_cta sponsors_description'>
                    <h2>Team</h2>
                    <br />

               <div className="team_item">
               <div className="team_cta_item sponsors_description">
                    <h4>Engr Sampson</h4>
                    <img src={sam} alt="" />
                    <p>Engr Sampson is  A Bsc holder In computer software engineering from MiddleSex University, London. 
Entrepreneurship and business development from standford University. A Technocrat and change  maker </p>
                </div>
                <div className="team_cta_item sponsors_description">
                    <h4>Dr David </h4>
                    <img src={david} alt="" />
                    <p>David is a Cardiologist at shape healthcare center in brussels. Apart from been a  Cardiologist,  he  works on solutions to mass incarceration  via education and technology.</p>
                </div>
                <div className="team_cta_item sponsors_description">
                    <h4>Merisa</h4>
                    <img src={merisa} alt="" />
                    <p>Dr. Merisa is dedicated to helping women build coding skills for social impact, she is passionate about building tech to foster connectedness.  She's a Former employee at Facebook and EF. She has her Ph.D. in Technology & Social Behavior from Northwestern, and B.A. in Psychology from Harvard. </p>
                </div>
                <div className="team_cta_item sponsors_description">
                    <h4>Engr Ahba</h4>
                    <img src={engr} alt="" />
                    <p>A PhD student in Artificial Intelligence at MIT. His work centers on democratizing technology, both hardware and software. </p>
                </div>
               </div>
                </div>

            </div>
        </>
    )
}

export default Partners;