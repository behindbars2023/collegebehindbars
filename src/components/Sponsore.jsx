import logo1 from '../images/logo1.jpg'
import logo2 from '../images/logo2.png'
import spon from '../images/spon.jpg'

const Sponsore = () => {
    return (
        <>
            <div className="sponsors" id='sponsors'>
                <h1>SPONSORS</h1>
                <div className="sponsors_logos">
                </div>
                <div className='sponsors_description'>
                    <p>We are incredibly grateful for our sponsors, who make our work possible. For Now, Grassroot Academy  and The PBS learning foundation are the only support systems we have  without which our work will not be possible </p>
                    <img src={logo1} className="img-custom-border" alt="" />
                    <img src={logo2} className="img-custom-border" alt="" />
                    <img src={spon} className="img-custom-border" alt="" />
                    <br />
                    <p>We  solicit support from agencies, companies and individuals.</p>
                    <br />
                    <p>Our dream is for  a day where no one in Africa will lack access to high quality technical education no matter thier situation in life.</p>
                    <br />
                    <h5>And your support fuels the Effort </h5>
                </div>
            </div>
        </>
    )
}

export default Sponsore;
