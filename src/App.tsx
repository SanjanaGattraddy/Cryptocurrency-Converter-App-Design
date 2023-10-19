import { useState } from "react";
import "./App.css";

function Cpp() {

    const [isOpen, setIsOpen] = useState(false);
    const [text_1, setText] = useState('ENF');
    const [url_1, setUrl] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Dollar_sign_in_circle_cleaned_%28PD_version%29.green.svg/64px-Dollar_sign_in_circle_cleaned_%28PD_version%29.green.svg.png")

    const [data, setData] = useState([
        "item:1","item2","item3","item4","item5"

    ]);

    const switchx = (event2) => {
        // setUrl(event1)
        setText(event2)
    };






    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <body>
            <div className="x1">
                <div className="x_new">
                    <div className="x2">
                        <div className="x4">
                            <div className="x6">From</div>
                            <div className="x6">Balance: 52.6453</div>
                        </div>
                        <div className="x10">
                            <h2>50.0</h2>
                            <div className="x12">
                                <div className="x13">MAX</div>
                                <div className="x14">
                                    <img
                                        className="svg-image"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Dollar_sign_in_circle_cleaned_%28PD_version%29.green.svg/64px-Dollar_sign_in_circle_cleaned_%28PD_version%29.green.svg.png"
                                        alt="SVG Image"
                                    ></img>
                                    <p className="cc">UNDC</p>
                                    <button className="change">

                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="x2">
                        <div className="x4">
                            <div className="x6">To (estimated)</div>
                            <div className="x6">Balance: 52.6453</div>
                        </div>
                        <div className="x10">
                            <h2>21.7394</h2>
                            <div className="x12">
                                <div className="x13">MAX</div>
                                <div className="x15">
                                    <div className="x14">

                                        <img
                                            className="svg-image"
                                            src={url_1}
                                            alt="SVG Image"
                                        ></img>
                                        <p className="cc">{text_1}</p>
                                        <button className="change" onClick={toggleMenu}></button>
                                    </div>
                                    <div className={`x16-toggle ${isOpen ? 'open' : ''}`}>
                                        <div className={`x17-items ${isOpen ? 'open' : ''}`}>
                                            {
                                                data.map((x) => (
                                                    <button className="x18" onClick={() => switchx(x)}>


                                                        

                                                        <div>
                                                            {x}
                                                        </div>
                                                    </button>

                                                ))
                                            }


                                        </div>

                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="x4">
                    <div className="x6">Price</div>
                    <div className="x6">2.33668 USD per ETF</div>
                </div>
                <button className="x5">
                    <div className="x7">Swap to ETF</div>
                </button>

                <div className="x4">
                    <div className="x6">Minimum recieved</div>
                    <div className="x6">21.28 ETH</div>
                </div>
                <div className="x4">
                    <div className="x6">Price Impact</div>
                    <div className="x6">
                        0.01%
                        {/* <span className="mirror-image">&#x5E;</span> */}
                    </div>
                </div>
                <div className="x4">
                    <div className="x6">Liquidity Provider Fee</div>
                    <div className="x6">0.15 USDC</div>
                </div>
            </div>
        </body>
    );
}

export default Cpp;
