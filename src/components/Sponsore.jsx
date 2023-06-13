import logo1 from '../images/logo1.jpg'
import logo2 from '../images/logo2.png'
import spon from '../images/spon.jpg'

import ReactPlayer from "react-player"


const Sponsore = () => {
    return (
        <>
            <div className="sponsors" id='sponsors'>
                <h1>SPONSORS</h1>
                <div className="sponsors_logos">
                </div>
                <div className='sponsors_description'>
                    <p>We are incredibly grateful for our sponsors, who make our work possible. For Now, Grassroot Academy  and The PBS learning foundation are the only support systems we have  without which our work will not be possible </p>
                    <div className='sponsors-img'>        
                        <img src={logo1} className="img-custom-border" alt="" />
                        <a target="_blank" className='v-bpi' href="https://grassroot.academy/">visit Grassroot</a>

                        <img src={logo2} className="img-custom-border" alt="" />
                        <a target="_blank"  className='v-bpi' href="https://www.pbs.org/show/college-behind-bars/">visit PBS</a>

                        <img src={spon} className="img-custom-border" alt="" />
                        <a target="_blank"  className='v-bpi' href="https://bpi.bard.edu/">visit BPI</a>
                    </div>

                    <div className='react-player'>
                        <ReactPlayer
                            url="https://vimeo.com/728147749"
                            controls="true"
                            width='100%'
                            height='100%'
                        />
                    </div>

                    <br />
                    <p>We  solicit support from agencies, companies and individuals.</p>
                    <br />
                    <p>Our dream is for  a day where no one in Africa will lack access to high quality technical education no matter their situation in life.</p>
                    <br />
                    <h5>And your support fuels the Effort </h5>
                </div>
            </div>
        </>
    )
}

export default Sponsore;
