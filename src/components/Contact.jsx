import React from "react";

function Contact () {
    return (
        <div id="Contact" className="contact">
            <div className="left">
                <img src="./images/contact.png" alt="" />
            </div>
            <div className="right">
            <h6>Contact</h6>
                <div className="services__box">
                    <form class="form">
                        <input type="text" placeholder="Email" />
                        <br />
                        <textarea placeholder="Message"></textarea>
                        <br />
                        <button type="submit" className="btn btn-outline">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;