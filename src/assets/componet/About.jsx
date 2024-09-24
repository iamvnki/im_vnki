import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'


export const About = () => {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-6">
       <h1>About me</h1>
               </div>
        <div className="col-6 text-end pt-5">
          <Link to='/'><p className='btn btn-danger'>Go Back</p></Link>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="box">
            <img src="gamer.png" className='' alt="profile" width={70} /><br />
            Hey there! 👋 I'm Venkatesh, hailing from the vibrant streets of Pondicherry 🌴. I recently completed my BCA 🎓 from Rajiv Gandhi Arts and Science College, and now I'm on a mission to turn caffeine ☕ and code 💻 into creative solutions. Fresh out of college, but ready to conquer the tech world 🌐—one line of code (and the occasional debugging marathon 🐞) at a time!

          </div>
        </div>
        <div className="col-lg-4">
         <div className="box">
              <img src="competence.png" className='' alt="profile" width={70} /><br />
              On the technical front, I’m well-versed in the world of code! 💻 I have a solid grasp of Java, C, and C++, diving into the intermediate concepts of each. When it comes to front-end magic, I have deep expertise in HTML, CSS, JavaScript, and Bootstrap 🎨. Lately, I’ve been exploring the exciting world of React and Vite.js 🚀, leveling up my skills even further.

I also hold certifications in Java Full Stack Development 🧑‍💻 and Graphic Design 🎨, giving me the perfect blend of coding and creativity to tackle both development and design challenges with ease!
            
         </div>
        </div>
        <div className="col-lg-4">
         <div className="box">
              <img src="hobi.png" className='' alt="profile" width={70} /><br />
              When I'm not coding, you’ll likely find me binge-watching my favorite series 🎬—because who can resist a good storyline? I also love staying active by hitting the court for a game of badminton 🏸 or showing my strength on the kabaddi field 🤼. It’s all about balancing the mind and body!
            
         </div>
        </div>
      </div>
    </div>
  )
}
