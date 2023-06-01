import React from 'react';

const about = () => {
  return (
    <>
    <section id="description">
        {/* Medium Devices */}
        <div className="hidden container flex flex-col pt-12 py-5 md:mx-auto md:flex md:flex-row">
            <div className="lg:w-2/12 md:px-6">
                <img src="../assets/me.png" className="w-1/2 mx-auto md:w-auto"></img>
            </div>
            <div className="w-full lg:px-0 lg:w-8/12">
                <h1 className="section-title text-xl text-deepBlue font-semibold mb-3">Full Stack Software Developer</h1>
                <p className="text-base">With a strong foundation in PHP/Laravel, React, NodeJS, and Angular, I am a versatile web developer ready to embark on new challenges. I possess comprehensive knowledge and hands-on experience in crafting dynamic and efficient web applications. My expertise extends to developing robust back-end solutions using PHP/Laravel and NodeJS, while my proficiency in front-end technologies such as React and Angular enables me to create captivating user interfaces and seamless user experiences. With a keen eye for detail and a passion for clean, maintainable code, I am committed to delivering high-quality solutions that exceed expectations.</p>
                <a href="#" className="inline-block mt-3 text-mutedWhite hover:text-customWhite">View Resume <img src="../assets/resume-icon.svg" className="inline-block"></img></a>
            </div>
        </div>
        {/*  Small devices */}
        <div className="container mx-auto px-6 py-5 mt-20 md:hidden">
            <img src="../assets/me.png" className="w-1/2 mx-auto mb-5"></img>
            <div className="mt-10">
                <h1 className="section-title text-center text-xl text-deepBlue font-semibold mb-3">Full Stack Software Developer</h1>
                <p className="text-base">With a strong foundation in PHP/Laravel, React, NodeJS, and Angular, I am a versatile web developer ready to embark on new challenges. I possess comprehensive knowledge and hands-on experience in crafting dynamic and efficient web applications. My expertise extends to developing robust back-end solutions using PHP/Laravel and NodeJS, while my proficiency in front-end technologies such as React and Angular enables me to create captivating user interfaces and seamless user experiences. With a keen eye for detail and a passion for clean, maintainable code, I am committed to delivering high-quality solutions that exceed expectations.</p>
                <a href="#" className="inline-block mt-3 text-mutedWhite hover:text-customWhite">View Resume <img src="../assets/resume-icon.svg" className="inline-block"></img></a>
            </div>
        </div>
    </section>

    <section id="techstack">
        <div className="container flex mx-auto px-6 pt-6 py-5 lg:px-0">
            <div className="w-full lg:w-8/12 lg:mx-auto">
                <h1 className="section-title text-xl text-deepBlue font-semibold mb-3">Tech Stack</h1>
                <div id="stacks">
                    <div><img src="../assets/nodejs.png"></img></div>
                    <div><img src="../assets/laravel.png"></img></div>
                    <div><img src="../assets/git.png"></img></div>
                    <div><img src="../assets/postman.png"></img></div>
                    <div><img src="../assets/mysql.png"></img></div>
                    <div><img src="../assets/mongodb.png"></img></div>
                    <div><img src="../assets/react.png"></img></div>
                    <div><img src="../assets/bootstrap.png"></img></div>
                    <div><img src="../assets/tailwind.png"></img></div>
                    <div><img src="../assets/svg.png"></img></div>
                    <div><img src="../assets/figma.png"></img></div>
                    <div><img src="../assets/xd.png"></img></div>
                </div>
            </div>
        </div>
    </section>

    <section id="testimonials">
        <div className="container flex mx-auto px-6 pt-6 py-5 lg:px-0">
            <div className="w-full lg:w-8/12 lg:mx-auto">
                <h1 className="section-title text-xl text-deepBlue font-semibold mb-3">Testimonials</h1>
                <div className="testimonial-item mb-24">
                    <p className="text-base mb-4">"I had the pleasure of working with Deilon Cutamora during their time at our bootcamp, and I was impressed with 
                        their dedication to learning and their willingness to take on challenging projects. They were able to quickly pick up new technologies and 
                        apply them to real-world problems. I have no doubt that Deilon will be a successful full stack developer."
                    </p>
                    <span className="block text-end text-lg">Sir Alfren Cabuquit</span>
                    <span className="block text-end text-sm text-mutedWhite">Bootcamp Instructor, Software developer</span>
                </div>
                <div className="testimonial-item mb-24">
                    <p className="text-base mb-4">"It's been inspiring to see Deilon master PHP/Laravel, React, NodeJS, and Angular with such dedication and passion. 
                        Despite not having had the opportunity to work together professionally, I've had the privilege of seeing his projects firsthand, 
                        has an innate talent for crafting dynamic web applications and creating seamless user experiences."
                    </p>
                    <span className="block text-end text-lg">Jonathan Lazar</span>
                    <span className="block text-end text-sm text-mutedWhite">Wishland Java Developer</span>
                </div>
                <div className="testimonial-item mb-24">
                    <p className="text-base mb-4">"Throughout our bootcamp journey, I had the pleasure of witnessing Deilon's growth as a web developer. 
                        His knowledge in PHP/Laravel, React, NodeJS is truly remarkable. His dedication to mastering these technologies 
                        and his ability to apply them in real-world projects was impressive. He consistently brought fresh ideas to the table and demonstrated 
                        strong problem-solving skills. It was a privilege to collaborate with Deilon, and I have no doubt that he will continue to thrive 
                        in his future endeavors."
                    </p>
                    <span className="block text-end text-lg">Charles Heculi</span>
                    <span className="block text-end text-sm text-mutedWhite">Fellow Bootcampers, Developer</span>
                </div>
                <div className="testimonial-item mb-24">
                    <p className="text-base mb-4">"Deilon was an invaluable team member during our bootcamp. His proficiency in PHP/Laravel, React, NodeJS played 
                        a vital role in the success of our group projects. Deilon was always ready to lend a helping hand, offering insightful solutions and 
                        contributing to the overall development process. His strong work ethic and collaborative spirit made our team dynamic and efficient. 
                        I'm grateful to have had Deilon as a fellow bootcamper, and I'm confident that his skills and determination will take him far in his 
                        web development career"
                    </p>
                    <span className="block text-end text-lg">Bryle Gregorio</span>
                    <span className="block text-end text-sm text-mutedWhite">Fellow Bootcampers, Developer</span>
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <div className="container flex mx-auto px-6 pt-6 py-5 lg:px-0">
            <div className="w-full lg:w-8/12 lg:mx-auto">
                <h1 className="section-title text-xl font-semibold mb-3">Got an Idea? Let’s make it Happen together!</h1>
                <p>If you need a developer for your website, web app, or even a full-time position, don't hesitate to reach out! I'm always up for a chat and excited to hear about new projects.</p>
                <p className="text-lg font-regular underline mt-2"><a href="mailto:deiloncutamora@gmail.com">deiloncutamora@gmail.com</a></p>
            </div>
        </div>
    </section>

    <section id="social">
        <div className="container flex flex-col mx-auto px-6 pt-6 py-5 lg:px-0">
            <div className="w-full lg:w-8/12 lg:mx-auto">
                <h1 className="section-title text-xl text-deepBlue font-semibold mb-3">Social links</h1>
                <div className="coffee-context flex flex-col space-y-3">
                    <a href="#" className="text-lg underline">Linkedin</a>
                    <a href="#" className="text-lg underline">Github</a>
                    <a href="#" className="text-lg underline">Facebook</a>
                    <a href="#" className="text-lg underline">Twitter</a>
                </div>
            </div>
        </div>
    </section>

    <footer className="mt-auto">
        <div className="container mx-auto px-6 py-12 lg:px-0">
            <div className="w-full lg:w-8/12 lg:mx-auto">
                <div className="text-sm space-x-6 md:flex">
                    <a href="#" className="hover:text-customWhite">About</a>
                    <a href="#" className="hover:text-customWhite">Projects</a>
                    <a href="#" className="hover:text-customWhite">Contact</a>
                </div>
                <p className="text-sm text-mutedWhite">&#169; 2023 Deilon Cutamora. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default about