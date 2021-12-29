import Head from 'next/head';
import Navy from '../components/navy'
import Tilt from 'react-parallax-tilt';
import emailjs from 'emailjs-com';


export default function Contact() {

      function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_9d88w6r', 'template_ezo6woj', e.target,'user_xHxzMi4Pxy0pO9pOBbpzB')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        })
        e.target.reset();
      }

      return (
      	<>
        <div className="m-2 bg-gray-200 h-screen relative overflow-hidden flex justify-center items-center">
          <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
          <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
            <Tilt>
              <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
                <form onSubmit={sendEmail} className='h-full flex flex-col justify-evenly items-center'>
                  <div className='text-grey text-2xl uppercase tracking-widest'>Contact Me</div>
                  <input name="name" type="text" placeholder='Your name' className='capitalize bg-transparent border border-t-0 border-l-0 border-r-0 focus:outline-none text-grey tracking-wide'/>
                  <input name="message" type="text" placeholder='message' className='capitalize bg-transparent border border-t-0 border-l-0 border-r-0 focus:outline-none text-grey tracking-wide'/>
                  <input value="Send it" type="Submit" className='cursor-pointer uppercase rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 '/>
                </form>
              </div>
            </Tilt>
        </div>
        </>	
      	)
  }