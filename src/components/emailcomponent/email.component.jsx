import emailjs from 'emailjs-com';
import React from 'react';



const EmailComponent = () => {

    function sendEmail (e)
        {

        }
        
        return(
            <div>
                <div className='container'>
                    <form onSubmit={sendEmail}>
                    
                    </form>
                </div>
            </div>
        );
}



export default EmailComponent;