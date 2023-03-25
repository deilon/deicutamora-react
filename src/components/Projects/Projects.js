import React from 'react'

const Projects = () => {
  return (
    <>
    <section id="projects">
        <div className="container mx-auto pt-12 py-5 px-6">
            <div className="w-full mb-20 lg:w-8/12">
                <h1 className="text-xl text-deepBlue mb-5 font-semibold">Newsnub</h1>
                <img src="assets/projects/newsnub.png" className="mb-5"></img>
                <p className="mb-5">I developed Newsnub with Angular and various third-party packages to meet the project's requirements. My proficiency in Sass and Responsive Web Design enabled me to integrate these technologies effectively, resulting in a dynamic and visually convincing user interface. This project was an adventure for me as i learn along the way while creating it, and I'm pleased with the outcome. </p>
                <a href="#" className="read-exp font-semibold">Read my experience <img src="assets/icon _arrow right_.svg" alt="right arrow icon" className="inline-block"></img></a>
            </div>
            <div className="w-full mb-20 lg:w-8/12">
                <h1 className="text-xl text-deepBlue mb-5 font-semibold">Newsnub</h1>
                <img src="assets/projects/newsnub.png" className="mb-5"></img>
                <p className="mb-5">I developed Newsnub with Angular and various third-party packages to meet the project's requirements. My proficiency in Sass and Responsive Web Design enabled me to integrate these technologies effectively, resulting in a dynamic and visually convincing user interface. This project was an adventure for me as i learn along the way while creating it, and I'm pleased with the outcome. </p>
                <a href="#" className="read-exp font-semibold">Read my experience <img src="assets/icon _arrow right_.svg" alt="right arrow icon" className="inline-block"></img></a>
            </div>
        </div>
    </section>
    
    <footer className="mt-auto">
        <div className="container mx-auto px-6 py-12">
            <div className="text-sm space-x-6 md:flex">
                <a href="#" className="hover:text-customWhite">About</a>
                <a href="#" className="hover:text-customWhite">Projects</a>
                <a href="#" className="hover:text-customWhite">Contact</a>
            </div>
            <p className="text-sm text-mutedWhite">&#169; 2023 Deilon Cutamora. All Rights Reserved.</p>
        </div>
    </footer>
    </>
  )
}

export default Projects