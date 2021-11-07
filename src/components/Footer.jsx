import React from "react";



function Footer (){
    return(
        <footer>
            <p className='Nig-txt'>Nigeria</p>
            <hr />
            <div className="flex-item">
                <div className='first-section'>
                    <p className='first-section-txt1'>Advice</p>
                    <p className='first-section-txt2'>Advertising</p>
                    <p className='first-section-txt3'>Business</p>
                    <p className='first-section-txt4'>How search works</p>
                </div>
                <div className='second-section'>
                    <p className='second-section-txt'>Carbon neutral since 2007</p>
                
                </div>
                <div className='third-section'>
                    <p  className='third-section-txt1'>Privacy</p>
                    <p  className='third-section-txt2'>Terms</p>
                    <p  className='third-section-txt3'>Settings</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;