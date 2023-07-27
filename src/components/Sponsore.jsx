import logo1 from '../images/logo1.jpg'
import logo2 from '../images/logo2.png'
import spon from '../images/spon.jpg'

import ReactPlayer from "react-player"


const Sponsore = () => {
    return (
        <>
            { /*  <div className="sponsors" id='sponsors'>
                <h1>MENTORS</h1>
                <div className="sponsors_logos">
                </div>
                <div className='sponsors_description'>
                    <p>We are incredibly grateful to our Mentors  who make our work possible.</p>
                    <br /><br />
                    <div className='sponsors-img'>   
                        <h3>GRASSROOT ACADEMY</h3>     
                        <img src={logo1} className="img-custom-border" alt="" />
                        <p>The Grassroot Academy is our support system without which our work will not be possible. Grassroot provide access to a world class  curriculum and much needed academic support. </p>
                        <a target="_blank" className='v-bpi' href="https://grassroot.academy/">Click here to Learn more about Grassroot</a>

<br /><br />
                        <h3>BARD PRISON INITIATIVE</h3>
                        <img src={spon} className="img-custom-border" alt="" />
                        <p>BPI is the source of Our inspiration. We are exceededingly grateful to BPI for thier continous investment in people,  reinventing  institutions and making genuine education more accessible. </p>
                    </div> */}

                    <div className='react-player'>
                        <ReactPlayer
                            url="https://vimeo.com/728147749"
                            controls="true"
                            width='100%'
                            height='100%'
                        />
                    </div>
                        <a target="_blank"  className='v-bpi' href="https://bpi.bard.edu/">Click here to learn more about BPI </a>
                    <br />
                    <p> Our believe is that bringing the  traditions of college into a prison is transformative. Giving the people within,  the opportunity to reinvent themselves, to change their life trajectory and contribute to society..</p>
                    <br /> {/*
                    <h5> your support fuels the Effort </h5>
                </div> */}
            </div>
        </>
    )
}

export default Sponsore;
