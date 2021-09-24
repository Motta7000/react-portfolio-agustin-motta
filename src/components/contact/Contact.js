import { React, useState } from 'react'
import "./contact.scss"
function Contact() {
    const [message, setMessage] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <div className="imgContainer">
                    <img src="./assets/shake.svg" />
                </div>
            </div>
            <div className="right">
                <h1>Contact.</h1>
               {/* <form action="https://formsubmit.co/motta.agustin6@gmail.com" onSubmit={handleSubmit} method="POST">
                    <input type="text" name="name" required />
                    <input type="email" name="email" required />
                    <button type="submit" >Send</button>
                    {(message) && <span>Message sended, I'll reply ASAP</span>}
                </form>*/}
                <form action="https://formsubmit.co/motta.agustin6@gmail.com" method="POST">
                    <textarea type="text" name="name" required placeholder="Message" />
                    <input type="email" name="email" required placeholder="Your Email" />
                    <button type="submit">Send</button>
                </form>
            </div>

        </div>
    )
}

export default Contact
/*<ul>
<li>
    <h1>Contact</h1>
</li>
<li>
    <input type="text" name="name" placeholder="Email" />
</li>
<li>
    <textarea type="text" name="name" placeholder="Email" />
</li>
<li className="button">
    <div className="container">
        <h4>Send</h4>
    </div>

</li>
</ul>
*/