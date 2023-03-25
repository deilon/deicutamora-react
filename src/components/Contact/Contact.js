import React from 'react'

const Contact = () => {
  return (
    <>
    <section id="contact">
        <div className="container flex mx-auto px-6 pt-6 py-5 lg:px-0">
            <div className="w-full lg:px-6 lg:w-8/12">
                <h1 className="section-title text-xl font-semibold mb-3">Got an Idea? Let’s make it Happen together!</h1>
                <p>If you need a developer for your website, web app, or even a full-time position, don't hesitate to reach out! I'm always up for a chat and excited to hear about new projects.</p>
                <p className="text-lg font-regular underline mt-2"><a href="mailto:deiloncutamora@gmail.com">deiloncutamora@gmail.com</a></p>
            </div>
        </div>
    </section>

    <section id="social">
        <div className="container flex flex-col mx-auto px-6 pt-6 py-5 lg:px-0">
            <div className="w-full lg:px-6 lg:w-8/12">
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

export default Contact