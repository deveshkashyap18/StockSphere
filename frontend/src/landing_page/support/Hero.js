import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid" id='supportHero'>
            <div className="p-4" id='supportWrapper'>
                    <h3>Support Portal</h3>
                    <a className='text-primary text-white text-decoration-underline' href="">Track Ticket</a>
            </div>  
            <div className="row p-4 m-3">
                <div className="col-6 p-5">
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input className='mb-4 mt-4' type="text" placeholder='Eg: How do I open my account, How to I activate F&Q...'/> <br />
                    <a href="">Track account opening</a>
                    <a href="">Track segment activation</a>
                    <a href="">Intraday margins</a>
                    <a href="">Kite user manual</a>
                    <a href="">Learn how to create a ticket</a>
                </div>
                <div className="col-6 p-5">
                    <h1 className='fs-3 '>Featured</h1>
                    <ol>
                        <li><a href="">Revision in commodity market trading hours from March 09, 2026</a></li>
                        <li><a href="">Rights Entitlements listing in March 2026</a></li>
                    </ol>
                </div>     
            </div>   
        </section>
       
     );
}

export default Hero;