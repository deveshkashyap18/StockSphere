import React from 'react';

function Hero() {
    return ( 
        <div className="container border-bottom mt-5">
            <div className="text-center mt-5 p-5 ">
            <h1>StockSphere Products</h1>
            <h5 className='text-muted mt-3'>Sleek, modern, and intuitive trading platforms</h5>
            <p className='text-muted mt-3'>Check out our <a href="" className='text-primary' style={{textDecoration:"none"}}>investment offerings <i class="fa-solid fa-arrow-right"></i></a>
            </p>
            </div>
        </div>
     );
}

export default Hero;