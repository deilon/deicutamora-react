import React from 'react'

const Certificates = () => {
  return (
    <>
        <section id="certificates">
            {/* KodeGO */}
            <div className="container mx-auto pt-12 py-5 px-6">
                <div className="w-full mb-15 lg:w-5/12">
                    <h1 className="text-xl text-deepBlue mb-5 font-semibold">KodeGO award</h1>
                    <img src="assets/certificates/deilon5star.png" className="mb-5 w-full"></img>
                </div>
            </div>
            {/* ICT week participation */}
            <div className="container mx-auto pt-12 py-5 px-6">
                <div className="w-full mb-15 lg:w-5/12">
                    <h1 className="text-xl text-deepBlue mb-5 font-semibold">ICT Week Participation</h1>
                    <img src="assets/certificates/participation.png" className="mb-5 w-full"></img>
                </div>
            </div>
            {/* BSIS1 */}
            <div className="container mx-auto pt-12 py-5 px-6">
                <div className="w-full mb-15 lg:w-5/12">
                    <h1 className="text-xl text-deepBlue mb-5 font-semibold">Hackathon</h1>
                    <img src="assets/certificates/bsis1-hackathon.png" className="mb-5 w-full"></img>
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

export default Certificates