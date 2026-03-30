import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src={imageURL} alt="" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p className='fs-5 text-muted mt-4'>{productDescription}</p>

                    <div>
                        <a className='text-primary' href={tryDemo} >Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                        <a className='text-primary' href={learnMore} style={{marginLeft:"50px"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src="media\images\googlePlayBadge.svg" alt="Google Play" /></a>
                        <a href={appStore}><img src="media\images\appstoreBadge.svg" alt="App Store" style={{marginLeft:"50px"}} /></a>
                    </div>
 
                </div>
            </div>
        </div>
     );
}

export default LeftSection;