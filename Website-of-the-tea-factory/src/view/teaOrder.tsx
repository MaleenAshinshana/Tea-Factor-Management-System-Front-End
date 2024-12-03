import mainImage from "../assets/images/slide1.1.jpg";
import logo from '../assets/images/Evergreen_Logo_Primary_Full_4Col.png'
import greenTea from "../assets/images/collection1.4.jpg";
import blackTea from "../assets/images/collection1.1-_1_.jpg";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
/*import img from "../assets/images/best-teas-for-weight-loss-hero_source-istock.png";*/
/*import img2 from "../assets/images/Green-tea-extract-improves-gut-health-glucose-levels-1.jpg";
import img3 from "../assets/images/Screenshot_2023-02-10_at_10.12.58_AM_1000x_crop_center.jpg";*/
import right from "../assets/images/right (2).png";
import aboutImg from "../assets/images/image0.jpg";
import email from "../assets/images/email.png";
import facebook from "../assets/images/facebook (1).png";
import fax from "../assets/images/fax.png";
import ins from "../assets/images/instagram (1).png";
import address from "../assets/images/pin.png";
import phone from "../assets/images/telephone.png";
import ac from "../assets/images/ac.png";


function TeaOrder() {


    // const [showSeparateDiv, setShowSeparateDiv] = useState(false);
    //
    // const handleAdd1Click = () => {
    //     setShowSeparateDiv(true);
    // };

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarStyle = {
        backgroundColor: isScrolled ? 'rgba(164, 162, 162, 0.80)' : 'transparent',
        transition: 'background-color 0.3s ease', // Optional: Add a smooth transition effect
    };


    return <section className={'w-full h-full'}>

        <nav
            className={'flex justify-between items-center w-full h-16 font-bold fixed  text-white z-[1000]'}
            style={navbarStyle}
        >
            {/*<img src={logo} className={'w-36 relative '}/>*/}

            <h1 className={'font-serif text-2xl p-7'}>
                <Link to={'/admin-sing-in'}>
                    Admin
                </Link>

            </h1>
            <ul className={'flex relative right-[10%] text-[20px] gap-[4vw]'}>
                <li>Home</li>
                <li>
                    <Link to="/teaProduct">Product</Link>
                </li>
                <Link to={'/register'}>
                    <li  className="cursor-pointer">Register</li>
                </Link>

                <li>
                    <Link to={'/user-sing-in'}>
                        <img src={ac} className={'w-10'}/>
                    </Link>
                </li>

            </ul>
        </nav>

        <div className={'w-full h-full '}>

            <img src={mainImage} className={'w-full h-full xl:w-full md:w-full sm:w-full sm:h-screen '}

            />

            <p className={'absolute top-[30%] left-[44%]  text-white text-[20px] font-sans lg:text-left  '}> HEALTH BENEFITS OF
                TEA</p>

            <p className={'absolute top-[33%] left-[40%] text-white text-[75px] font-serif '}>Evergreen</p>
            <p className={'absolute top-[43%] left-[40.5%] text-white text-[75px] font-serif '}>Sri Lanka</p>
            <p className={'absolute bottom-[38%] text-white font-bold text-[30px] left-[36%]  w-[470px]'}>Sri Lanka's
                Largest Tea Producer</p>


            {/* <button
                className={'w-36 h-10 border-2 border-white absolute bottom-[260px] left-[45%] text-white hover:bg-white hover:text-black'}>SHOP
                NOW
            </button>*/}
           {/* <button className="w-44 h-14 bg-gradient-to-r from-[#19ce47] to-[#116a29] fixed right-[5%] bottom-[5%] text-white text-[20px] rounded-[30px] z-[1000] hover:bg-transparent hover:text-black hover:border-[1px] border-black">
                Register
            </button>*/}

        </div>
        <div className={'w-full h-screen '}>
            <h1 className={'text-[40px]  w-[430px]  relative left-0 right-0 top-5 m-auto italic font-bold'}>Welcome To
                Evergreen</h1>


            <div
                className={'w-[90%] h-[80%] relative left-0 right-0 top-[10%] m-auto mt-[-40px] shadow-2xl {/*border-2 border-black*/} rounded-[10px]'}>
                <div
                    className={'w-[800px] h-[565px] absolute left-[3%]  top-3  {/*border-2 border-black*/} rounded-[10px]'}>
                    <img src={aboutImg} className={'w-full h-full rounded-[10px]'}/>

                </div>
                <div className={'w-[37%] h-[90%] {/*border-2 border-blue-500*/} absolute right-0 top-2'}>
                    <div className={'w-[100%] h-[40%] {/*border-2 border-black*/}'}>
                        <p className={'text-[18px]'}>
                            Being the oldest member of Evergreen tea factories, the Evergreen Tea Factory, has been
                            gradually evolved into the leading tea factory of the Galle district. Having fully equipped
                            with
                            modern machinery with a qualified workforce, at present, Evergreen Tea Factory holds about
                            190,000 kg of made tea production with the capacity of handling 6,300 kg of green leaf per
                            day.
                        </p>
                    </div>
                    <div className={'w-[100%] h-[20%] {/*border-2 border-orange-500*/}'}>
                        <p className={'text-[18px]'}>Similar to all other low grown producers, Evergreen is famous for
                            its leafy grade teas, which
                            makes a strong brew, and has a continuous demand mainly from Middle East countries and
                            Russia.</p>
                    </div>
                    <div className={'w-full h-[40%] {/*border-2 border-green-400*/}'}>
                        <p className={'text-[18px] '}>
                            Evergreen Tea Factory is mainly based on bought leaf of smallholders and in turn serves them
                            with a competitive price, loans for replanting on installment basis pay-backs, fertilizer
                            issuing on an installment basis pay-backs, good quality tea nursery plants from sister tea
                            gardens based on an easy pay scheme etc.
                        </p>

                    </div>

                </div>
                <button
                    className={'w-44 h-[50px] bg-green-600  absolute right-[10%] bottom-2 rounded-[150px] text-white font-bold text-[20px] hover:border-2 hover:border-green-400  hover:bg-transparent hover:text-green-400'}>Learn
                    More
                    <img src={right} className={'w-[30px]  absolute top-0 bottom-0 m-auto right-1.5 '}/>
                </button>

            </div>


            {/*<div className={'w-[60%] h-[45%]  m-[20px] rounded-[10px] hover:shadow-2xl '}>
                <img src={greenTea} className={'w-[400px] h-full relative left-[56%] rounded-r-[10px]'}/>
                <div className={'w-[56%] h-full bg-[#b7c499]  relative bottom-[100%] rounded-l-[10px]'}>
                    <p className={'text-white font-bold text-[35px] flex items-center justify-center'}>Green Tea</p>
                    <div className={'h-[82%] w-[95%]  relative left-[10px] '}>
                        <p className={'text-white relative left-[10px] text-[17px]'}>Green tea lovers raise your hands!
                            The many health benefits and most importantly its role in
                            aiding weight loss has made green tea one of the most popular beverages of the millennium.
                            While
                            the beverage is relatively new and just about picking up in India, green tea has been
                            consumed
                            in Japan and China for centuries.</p>
                        <button
                            className={'w-36 h-10 border-2 border-white bg-white flex items-center justify-center relative left-[30%] top-[20%] text-black hover:bg-transparent hover:text-white hover:border-2 hover:border-white'}>SHOP
                            NOW
                        </button>
                    </div>

                    <img src={greenTea} className={'w-[400px] h-full relative left-[56%] rounded-r-[10px]'}/>
                </div>
            </div>
            <div className={'w-[60%] h-[45%]  m-[20px]  absolute right-0 rounded-[10px] hover:shadow-2xl'}>
                <img src={blackTea} className={'w-[400px] h-full relative left-[0%] rounded-l-[10px]'}/>
                <div className={'w-[56%] h-full bg-[#b7a790]  relative left-[43.9%] bottom-[100%] rounded-r-[10px]'}>
                    <p className={'text-white font-bold text-[35px] flex items-center justify-center'}>Black Tea</p>
                    <div className={'h-[82%] w-[95%]  relative left-[10px] '}>
                        <p className={'text-white relative left-[10px] text-[17px]'}>Black tea lovers raise your
                            hands!It has many health benefits and most importantly can improve heart health and has
                            antioxidant properties. Black Tea has been consumed in Sri Lanka for centuries, so this
                            drink is a famous drink among many countries.</p>
                        <button
                            className={'w-36 h-10 border-2 border-white bg-white flex items-center justify-center relative left-[35%] top-[20%] text-black hover:bg-transparent hover:text-white hover:border-2 hover:border-white'}>SHOP
                            NOW
                        </button>
                    </div>

                    <img src={greenTea} className={'w-[400px] h-full relative left-[56%] rounded-r-[10px]'}/>
                </div>

            </div>*/}

        </div>
        <div className={'w-full h-screen'}>
            <div className={'w-[60%] h-[45%]  m-[20px] rounded-[10px] hover:shadow-2xl '}>
                <img src={greenTea} className={'w-[400px] h-full relative left-[56%] rounded-r-[10px]'}/>
                <div className={'w-[56%] h-full bg-[#b7c499]  relative bottom-[100%] rounded-l-[10px]'}>
                    <p className={'text-white font-bold text-[35px] flex items-center justify-center'}>Green Tea</p>
                    <div className={'h-[82%] w-[95%]  relative left-[10px] '}>
                        <p className={'text-white relative left-[10px] text-[17px]'}>Green tea lovers raise your hands!
                            The many health benefits and most importantly its role in
                            aiding weight loss has made green tea one of the most popular beverages of the millennium.
                            While
                            the beverage is relatively new and just about picking up in India, green tea has been
                            consumed
                            in Japan and China for centuries.</p>
                        <button
                            className={'w-36 h-10 border-2 border-white bg-white flex items-center justify-center relative left-[30%] top-[20%] text-black hover:bg-transparent hover:text-white hover:border-2 hover:border-white'}>SHOP
                            NOW
                        </button>
                    </div>

                    {/* <img src={greenTea} className={'w-[400px] h-full relative left-[56%] rounded-r-[10px]'}/>*/}
                </div>
            </div>

            <div className={'w-[60%] h-[45%]  m-[20px]  relative left-[37%] top-0 rounded-[10px] hover:shadow-2xl'}>
                <img src={blackTea} className={'w-[400px] h-full relative left-[0%] rounded-l-[10px]'}/>
                <div className={'w-[56%] h-full bg-[#b7a790]  relative left-[43.9%] bottom-[100%] rounded-r-[10px]'}>
                    <p className={'text-white font-bold text-[35px] flex items-center justify-center'}>Black Tea</p>
                    <div className={'h-[82%] w-[95%]  relative left-[10px] '}>
                        <p className={'text-white relative left-[10px] text-[17px]'}>Black tea lovers raise your
                            hands!It has many health benefits and most importantly can improve heart health and has
                            antioxidant properties. Black Tea has been consumed in Sri Lanka for centuries, so this
                            drink is a famous drink among many countries.</p>
                        <button
                            className={'w-36 h-10 border-2 border-white bg-white flex items-center justify-center relative left-[35%] top-[20%] text-black hover:bg-transparent hover:text-white hover:border-2 hover:border-white'}>SHOP
                            NOW
                        </button>
                    </div>

                    {/*<img src={greenTea} className={'w-[400px] h-full relative left-[56%] rounded-r-[10px]'}/>*/}
                </div>

            </div>

        </div>


        <div className={'w-full h-[300px]  bg-[#f2f2f2]'}>
            <img src={logo} className={'w-40 relative left-[88%] top-[85%]'}/>
            <div className={'w-[200px] h-[300px] relative top-[-13%] left-10'}>
                <p className={'text-[25px] w-20 font-mono border-[1px] border-b-black  border-t-white border-l-white border-r-white absolute left-0 right-0 m-auto hover:text-[#b7c499]'}>About</p>
                <div className={'w-full h-[50%]  relative top-[18%]'}>
                    <p className={'mt-3 hover:text-[#b7c499]'}>Help Center</p>
                    <p className={'mt-3 hover:text-[#b7c499]'}>Address Store</p>
                    <p className={'mt-3 hover:text-[#b7c499]'}>Privacy Policy</p>
                    <p className={'mt-3 hover:text-[#b7c499]'}>Receivers & Amplifiers</p>
                </div>


            </div>
            <div className={'w-[300px] h-[300px] relative bottom-[113%] left-[18%]  '}>
                <p className={'text-[25px] w-[150px] font-mono border-[1px] border-b-black  border-t-white border-l-white border-r-white absolute left-0 right-0 m-auto hover:text-[#b7c499]'}>Follow Us</p>
                <div className={'w-full h-[32%] relative top-[18%]'}>
                    <div className={'w-full h-[30px] '}>
                        <img src={phone} className={'w-[25px] '}/>
                        <p className={'relative bottom-[25px] left-[35px] hover:text-[#b7c499]'}>+94 54554545454</p>

                    </div>
                    <div className={'w-full h-[30px]'}>
                        <img src={fax} className={'w-[25px]  '}/>
                        <p className={'relative bottom-[25px] left-[35px] hover:text-[#b7c499]'}>+94 54554545454</p>

                    </div>
                    <div className={'w-full h-[30px]'}>
                        <img src={email} className={'w-[25px] '}/>
                        <p className={'relative bottom-[25px] left-[35px] hover:text-[#b7c499]'}>evergreen@gmail.com</p>

                    </div>
                    <div className={'w-full h-[30px]'}>

                        <img src={address} className={'w-[30px] '}/>
                        <p className={'relative bottom-[25px] left-[35px] hover:text-[#b7c499]'}>evergreen@gmail.com</p>

                    </div>
                    <div className={'w-full h-[40px] mt-5'}>
                        <img src={facebook} className={'w-[35px] inline-block ml-3 '}/>
                        <img src={ins} className={'w-[35px] inline-block ml-3 '}/>

                    </div>

                </div>
            </div>


               <p className={'text-[15px] flex items-center justify-center relative bottom-[125%]'}>Copyright © 2023 Blog
                LK</p>
        </div>

        {/*<div className={'w-full h-full bg-green-600'}>*/}
        {/*    <button className={'w-28 h-16 bg-gray-600 relative m-5'} >Add1</button>*/}
        {/*    <button className={'w-28 h-16 bg-gray-600 relative m-5'}>Add2</button>*/}


        {/*</div>*/}
        {/*<div className={'w-full h-full bg-green-600'}>*/}
        {/*    <button*/}
        {/*        className={'w-28 h-16 bg-gray-600 relative m-5'}*/}
        {/*        onClick={handleAdd1Click}*/}
        {/*    >*/}
        {/*        Add1*/}
        {/*    </button>*/}
        {/*    /!* Additional div to be displayed when Add1 button is clicked *!/*/}
        {/*    {showSeparateDiv && (*/}
        {/*        <div className={'w-64 h-32 bg-blue-400 absolute top-20 left-20'}>*/}
        {/*            /!* Add content for the separate div here *!/*/}
        {/*            This is the separate div content.*/}
        {/*        </div>*/}
        {/*    )}*/}
        {/*</div>*/}


    </section>


}

export default TeaOrder;