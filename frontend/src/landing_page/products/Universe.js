import React from 'react';

function Universe({imageURL}) {
    return ( 
        <div className="container mt-5">
            <div className="row text-center">  
                <h1>The StockSphere Universe</h1>
                <p className='mt-2'>Extend your trading and investment experience even further with our partner platforms</p> 
                <div className="col-4 p-3 mt-5">
                    <img src="media\images\smallcaseLogo.png" alt="" />
                    <p className='text-muted text-small'>Thematic investing platform
                    that helps you invest in diversified
                    baskets of stocks on ETFs.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media\images\streakLogo.png" alt="" style={{width:"120px",height:"50px"}}/>
                    <p className='text-muted text-small'>Systematic trading platform
                    that allows you to create and backtest
                    strategies without coding.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media\images\sensibullLogo.svg" alt=""/>
                    <p className='text-muted text-small'>Options trading platform that lets you
                    create strategies, analyze positions, and examine
                    data points like open interest, FII/DII, and more.</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="media\images\tijori.svg" alt="" style={{width:"170px",height:"40px"}}/>
                    <p className='text-muted text-small'>Investment research platform
                    that offers detailed insights on stocks,
                    sectors, supply chains, and more.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media\images\goldenpiLogo.png" alt="" />
                    <p className='text-muted text-small'>Systematic trading platform
                    that allows you to create and backtest
                    strategies without coding.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media\images\dittoLogo.png" alt="" style={{width:"120px",height:"40px"}}/>
                    <p className='text-muted text-small'>Personalized advice on life
                    and health insurance. No spam
                    and no mis-selling.</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mt-4 mb-5' style={{width:"20%", margin:"0 auto", borderRadius:"15px"}}>Signup for Free</button>
            </div>
        </div>
     );
}

export default Universe;