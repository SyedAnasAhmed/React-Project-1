function Hero() {


    return (
        <main className="Hero">
            <div className="Herocontent">
                <h1>YOUR FEET DESERVE THE BEST</h1>

                <p>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>

                <div className="Herobuttons">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div className="shopon">
                    <p>Also Available On</p>

                    <div className="brandicons">
                        <img src="/imgs/amazon.png" alt="Amazon " />
                        <img src="/imgs/flipkart.png" alt="Flipkart" />
                    </div>
                </div>
            </div>

            <div className="Heroimage">
            <img src="/imgs/shoe_image.png" alt="Hero" />
            </div>


        </main>
    )
}


export default Hero