import React from 'react'

const Projects = () => {
  return (
    <>
    <section id="projects">
        {/* Aim corner */}
        <div className="container mx-auto pt-12 py-5 px-6">
            <div className="w-full mb-15 lg:w-8/12">
                <h1 className="text-xl text-deepBlue mb-5 font-semibold">Aim Corner</h1>
                <img src="assets/projects/aimcorner.jpg" className="mb-5"></img>
                <p className="mb-5">This is "Aim Corner," an engaging web application crafted with Laravel and Tailwind CSS. 
                    It was conceived during our school's ICT Week Hackathon, and I'm thrilled to announce that my group emerged 
                    as the victorious team. The web application boasts essential features such as Upvote and Downvote 
                    functionality, along with comprehensive CRUD operations. These capabilities enable users to actively 
                    participate in conversations and exchange tech-related topics, facilitating the formation of consensus. 
                    The entire experience was filled with excitement as we dedicated ourselves to developing this project 
                    within a span of just one week.
                </p>
                <a href="https://github.com/deilon/aim-corner" target="_blank" className="read-exp font-semibold hover:underline">Github Repository <i class="bi bi-github"></i></a>
            </div>
        </div>
        {/* Book Storage */}
        <div className="container mx-auto pt-12 py-5 px-6">
            <div className="w-full mb-15 lg:w-8/12">
                <h1 className="text-xl text-deepBlue mb-5 font-semibold">Book Storage (Hands on code)</h1>
                <img src="assets/projects/nodejs-express-mongodb.jpg" className="mb-5"></img>
                <p className="mb-5">"Book Storage" is the name I gave to our hands-on code project during the NodeJS series of our Kodego Bootcamp. 
                    Through this practice, I had the opportunity to learn ExpressJS, MongoDB, and essential fundamentals in NodeJS. 
                    The experience provided valuable insights into various aspects, including installation, authentication, package management, 
                    and effective Mongodb management using Mongoose.
                </p>
                <a href="https://github.com/deilon/book-storage" target="_blank" className="read-exp font-semibold hover:underline">Github Repository <i class="bi bi-github"></i></a>
            </div>
        </div>
        {/* Apex estate */}
        <div className="container mx-auto pt-12 py-5 px-6">
            <div className="w-full mb-15 lg:w-8/12">
                <h1 className="text-xl text-deepBlue mb-5 font-semibold">Apex Estate (Group capstone)</h1>
                <img src="assets/projects/apexestate.jpg" className="mb-5"></img>
                <p className="mb-5">"Apex Estate" was the captivating result of our group capstone project during the KodeGo Bootcamp. With a focus on 
                    developing a dynamic Real Estate website, we harnessed the power of React and Refine to meet the demands of a challenging deadline. 
                    Our extensive knowledge of React, gained from the bootcamp, proved invaluable, enabling us to effectively craft and refine the various 
                    features of this project.
                </p>
                <div className="flex space-x-5">
                    <a href="https://github.com/deilon/apexestate" target="_blank" className="read-exp font-semibold hover:underline">Github Repository <i class="bi bi-github"></i></a>
                    <a href="https://apex-estate.devph.space/" target="_blank" className="read-exp font-semibold hover:underline">Live link <i class="bi bi-globe"></i></a>
                </div>
            </div>
        </div>
        {/* Newsnub */}
        <div className="container mx-auto pt-12 py-5 px-6">
            <div className="w-full mb-15 lg:w-8/12">
                <h1 className="text-xl text-deepBlue mb-5 font-semibold">Newsnub</h1>
                <img src="assets/projects/newsnub.png" className="mb-5"></img>
                <p className="mb-5">I developed "Newsnub" my personal news web app with Angular and Bootstrap 5 and various third-party 
                    packages to meet the project's requirements. My proficiency in Sass and Responsive Web Design 
                    enabled me to integrate these technologies effectively, resulting in a dynamic and visually 
                    convincing user interface. This project was an adventure for me as i learn along the way while 
                    creating it, and I'm pleased with the outcome.
                </p>
                <div className="flex space-x-5">
                    <a href="https://github.com/deilon/newsnub" target="_blank" className="read-exp font-semibold hover:underline">Github Repository <i class="bi bi-github"></i></a>
                    <a href="https://newsnub-32a58.web.app/" target="_blank" className="read-exp font-semibold hover:underline">Live link <i class="bi bi-globe"></i></a>
                </div>
            </div>
        </div>
        {/* Microsoft TO-DO UI Clone*/}
        <div className="container mx-auto pt-12 py-5 px-6">
            <div className="w-full mb-15 lg:w-8/12">
                <h1 className="text-xl text-deepBlue mb-5 font-semibold">Microsoft TO-DO UI Clone</h1>
                <img src="assets/projects/ms-to-do-clone-ui.jpg" className="mb-5"></img>
                <p className="mb-5">This project holds great significance in my journey of comprehensive learning. It served as an immersive practice experiment 
                    through which I delved deep into understanding the inner workings of flexbox. To elevate the visual aesthetics, I embraced the power of Sass, 
                    a versatile CSS preprocessor, and skillfully incorporated the iconic Microsoft Fluent system iconography. The final outcome flawlessly emulates 
                    the responsive design principles observed in Microsoft's popular to-do app, seamlessly adapting to varying screen sizes. Undoubtedly, 
                    this endeavor has been a rich source of knowledge, equipping me with valuable expertise in Sass and Responsive Web Design.
                </p>
                <div className="flex space-x-5">
                    <a href="https://github.com/deilon/ms-to-do-clone-ui" target="_blank" className="read-exp font-semibold hover:underline">Github Repository <i class="bi bi-github"></i></a>
                    <a href="https://deilon.github.io/ms-to-do-clone-ui/" target="_blank" className="read-exp font-semibold hover:underline">Live link <i class="bi bi-globe"></i></a>
                </div>
            </div>
        </div>
    </section>
    
    <footer className="mt-auto">
        <div className="container mx-auto px-6 py-12">
            <div className="text-sm space-x-6 md:flex">
                <a href="/about" className="hover:text-customWhite">About</a>
                <a href="/projects" className="hover:text-customWhite">Projects</a>
                <a href="/contact" className="hover:text-customWhite">Contact</a>
            </div>
            <p className="text-sm text-mutedWhite">&#169; 2023 Deilon Cutamora. All Rights Reserved.</p>
        </div>
    </footer>
    </>
  )
}

export default Projects