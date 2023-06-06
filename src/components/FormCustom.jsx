// Email Config
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';


const FormCustom = () => {
   
    const [from_name, setFromName] = useState("")
    const [from_last, setFromLast] = useState("")
    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("")
    const [category, setCategory] = useState("")
    const [heard, setHeard] = useState("")
    const [phone, setPhone] = useState("")
    const [submit, setSubmit] = useState("Submit");


    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmit("Wait ...")
        
        const sendEmail = (e) => {
            // Send mail here
            var templateParams = {
                from_name: from_name + ' ' + from_last,
                message: message,
                from_email: email,
                from_hear: heard,
                from_potential: category,
                from_phone: phone
            }
            emailjs.send('service_0mcfmwp', 'template_tj504tu', templateParams, 's0FLFeKbLc9PuH-nc')
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    setSubmit("Done")
                })
                .catch(function (error) {
                    console.log('FAILED...', error);
                });
        }; sendEmail();
    }


    return (
        <>
            <div className="p-form" id='contact'>
                <div className="form-head">
                    <h1>CONTACT US</h1>
                    <h4>We would love to hear from you! </h4>
                    <p>Fill out the form below, or contact us directly at the email given below  and a representative will get in touch </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='name' placeholder='First Name *' onChange={(e) => setFromName(e.target.value)} required />
                    <input type='text' name='name' placeholder='Last Name *' onChange={(e) => setFromLast(e.target.value)} required />
                    <input id="email" name="email" type="email" placeholder="Your Email *" onChange={(e) => setEmail(e.target.value)} required></input>
                    <select className='sl' id="category" name="category" onChange={(e) => setCategory(e.target.value)} form="contactForm">
                        <option value="" disabled="" selected="">I am a potential...</option>
                        <option value="Potential Student">Student</option>
                        <option value="Potential Instructor">Instructor</option>
                        <option value="Potential Partner">Partner</option>
                        <option value="Potential Donor">Donor</option>
                        <option value="Other">Other</option>
                    </select>
                    <select className='sl' id="heard about us" name="heard about us" onChange={(e) => setHeard(e.target.value)} form="contactForm">
                        <option value="" disabled="" selected="">How did you hear about us?</option>
                        <option value="TEJI's website">From TEJI's website</option>
                        <option value="Online search">FrMan je vais revenri sur me Mackbook hein apparement mon lenovo la c'est un soucis de carte mere donc les gars disent ils vont faire venir une autre carte mere mais d'ici la je vais aller recuperer le mac me defendre avec ça om an online search</option>
                        <option value="Article or video">From an article or video</option>
                        <option value="Word of mouth">By word of mouth</option>
                        <option value="Other">Other</option>
                    </select>
                    <input type='tel' name='telephone' placeholder='Phone Number' onChange={(e) => setPhone(e.target.value)} required />
                    <textarea name='message' rows='7' placeholder='Drop your message' onChange={(e) => setMessage(e.target.value)} required />
                    <button type='submit' className='btnStart'>{submit}</button>
                </form>
            </div>
        </>
    )
}

export default FormCustom;