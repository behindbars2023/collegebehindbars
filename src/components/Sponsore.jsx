import logo1 from '../images/logo1.jpg'
import logo2 from '../images/logo2.png'

const Sponsore = () => {
    return (
        <>
            <div className="sponsors">
                <h1>SPONSORS</h1>
                <div className="sponsors_logos">
                </div>
                <div className='sponsors_description'>
                    <p>We are incredibly grateful for our sponsors, who make our work possible. For Now, Grassroot Academy  and The PBS learning foundation are the only support systems we have  without which our work will not be possible </p>
                    <img src={logo1} alt="" />
                    <br />
                    <p>We hereby solicit support from agencies, companies and individuals.</p>
                    <br />
                    <p>We dream of a day where no one in Africa lack access to high quality technical education. Our hope is for a world where each of us gets an opportunity to quality education  no matter our situations in life.</p>
                    <img src={logo2} alt="" />
                    <br />
                    <h5>And your support fuels the Effort </h5>
                </div>
            </div>
        </>
    )
}

export default Sponsore;