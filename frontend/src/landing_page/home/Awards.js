import React from 'react';
function Awards() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg" alt="Largest Broker" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>Largest Stock Broker in India</h1>
                    <p className='mb-5'>2+ Million StockSphere Client Contirbute to over 15% of all retail order volume in India daily by trading and investing in :</p>
                    <div className="row">
                        <div className="col-6">
                        <ul>
                            <li><p>Future and Optiond</p></li>
                            <li><p>Commodity Derivatives</p></li>
                            <li>Currency Derivatives<p></p></li>
                        </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                            <li><p>Stocks and IPOs</p></li>
                            <li><p>Direct Mutual Funds</p></li>
                            <li>Bonds and Govt. Securities<p></p></li>
                        </ul>
                        </div>
                    </div>
                        <img src="media\images\pressLogos.png" alt="PressLogo Image" style={{width:"90%"}} />
                </div>
            </div>
        </div>
     );
}

export default Awards;