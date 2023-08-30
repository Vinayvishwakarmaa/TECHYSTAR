import React from 'react';
import vg from '../assets/2.webp';    
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai';


const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>TechyStar</h1>
        <p>Solution all your problems</p>
      </main>
      </div>
      
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>Computer programming is the process of telling a computer to do certain things by giving it instructions. These instructions are called programs. A person who writes instructions is a computer programmer. The instructions come in different languages; they are called programming languages.</p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>Bill Gates, Steve Jobs, and Mark Zuckerberg. These three men all have one thing in common, they became very wealthy from investing in the future of computers. A person may decide to go to college and make a career out of working with computers because of the potential earnings and consistent need of individuals who have studied computer sciences. This paper is going to inform you on what an individual does with a Computer Science degree, education needed to work in this field, and why we need people to do this kind of work.It then proceeds to examine the need for these skills in the real world and the need for these skills to be taught at university level. It starts by examining the general case of all students arriving in college for the first time and by the end gets to the particular needs of computer science students and others in the more practical disciplines.</p>
         </div>
      </div>
      
      <div className='home4' id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{animationDelay:"0.3s"}}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div style={{animationDelay:"0.5s"}}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div style={{animationDelay:"0.7s"}}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
            <div style={{animationDelay:"1s"}}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>

          </article>
        </div>
      </div>
    </>
  )
}

export default Home;