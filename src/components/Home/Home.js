import React from 'react'

const Home = () => {
  return (
    <>
    <section id="introduction">
        <div className="container mx-auto px-6 pt-12 py-5">
            <h1 className="text-xl text-mutedGreen font-semibold">Hi! Call me Dei!</h1>
            <p className="text-base mt-4 w-full lg:w-7/12">I'm a full-stack software developer passionate about creating digital solutions that make life easier and more enjoyable. With a keen eye for design and a love for writing clean, efficient code, I strive to build web applications that are both functional and aesthetically pleasing. Take a look around and let's connect if you think I could be a good fit for your next project!</p>
            <a href="/about" className="inline-block cursor-pointer text-lg mt-5 py-1 px-4 border-2 border-customWhite">Learn more</a>
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

export default Home