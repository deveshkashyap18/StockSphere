import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className="container mt-5">
            <div className="row">   
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p className='fs-5 text-muted mt-4'>{productDescription}</p>

                    <div>
                        <a className='text-primary' href={learnMore} >Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                    <div className="col-6">
                        <img src={imageURL} alt="" />
                    </div>
            </div>
        </div>
     );
}

export default RightSection;