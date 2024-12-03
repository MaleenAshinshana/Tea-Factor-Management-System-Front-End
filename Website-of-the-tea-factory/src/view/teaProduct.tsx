import {Link} from "react-router-dom";
import searchIcon from "../assets/images/magnifying-glass.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import all from "../assets/images/collection1.1-_1_.jpg";
import Earl_GreyS from "../assets/images/collection1.2.jpg";
import whiteTea from "../assets/images/White-Tea_1.jpg";
import green_Tea from "../assets/images/collection1.4.jpg";
import Matcha from "../assets/images/collection1.5.jpg";
import OlongTea from "../assets/images/collection1.7.jpg";
import blackPeral from "../assets/images/blackTea/110269-removebg-preview.png";
import React, {useEffect, useState} from "react";
import TeaProducts from "../component/card/teaProducts.tsx";
import logo from "../assets/images/Evergreen_Logo_Primary_Full_4Col.png";
import axios from "axios";
import Swal from "sweetalert2";
import Card from "../component/card/teaProducts.tsx";

interface Data {
    id:number,
    item_name:string,
    type:string,
    price:number,
    img:string,
}
function TeaProduct() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        getAllItem();
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };


    }, []);


    const getAllItem=()=>{
        const header={'Content-Type': 'application/json'}
        axios.get("http://localhost:8080/teaPowder/all",{headers:header}).then(r=>{
            console.log(r.data.data);
            setData(r.data.data);
        }).catch(e=>{
            Swal.fire({
                icon: "error",
                title: "Sorry!",
                text: "Something went wrong"
            });
        })
    }

    const navbarStyle = {
        backgroundColor: isScrolled ? 'rgba(164, 162, 162, 0.25)' : 'transparent',
        transition: 'background-color 0.3s ease', // Optional: Add a smooth transition effect
    };
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    const [isEarlDivVisible, setIsEarlDivVisible] = useState(false);
    const [isBlackTeaDivVisible, setIsBlackTeaDivVisible] = useState(false);
    const [isGreenTeaDivVisible, setIsGreenTeaDivVisible] = useState(false);
    const [isMatchaTeaDivVisible, setIsMatchaTeaDivVisible] = useState(false);
    const [isOOlongTeaDivVisible, setIsOOlongTeaDivVisible] = useState(false);
    const [isWhiteTeaDivVisible, setIsWhiteTeaDivVisible] = useState(false);

    // Function to handle the click event and set isEarlDivVisible to true
    const handleEarlDiv = () => {
        setIsEarlDivVisible(true);
        setIsBlackTeaDivVisible(false);
        setIsGreenTeaDivVisible(false);
        setIsMatchaTeaDivVisible(false);
        setIsOOlongTeaDivVisible(false);
        setIsWhiteTeaDivVisible(false);

    };
    const handleBlackTeaDiv = () => {
        setIsBlackTeaDivVisible(true);
        setIsEarlDivVisible(false);
        setIsGreenTeaDivVisible(false);
        setIsMatchaTeaDivVisible(false);
        setIsOOlongTeaDivVisible(false);
        setIsWhiteTeaDivVisible(false);
    };
    const handleGreenTealDiv = () => {
        setIsBlacwkTeaDivVisible(false);
        setIsEarlDivVisible(false);
        setIsGreenTeaDivVisible(true);
        setIsMatchaTeaDivVisible(false);
        setIsOOlongTeaDivVisible(false);
        setIsWhiteTeaDivVisible(false);
    };
    const handleMatchaTealDiv = () => {
        setIsBlackTeaDivVisible(false);
        setIsEarlDivVisible(false);
        setIsGreenTeaDivVisible(false);
        setIsMatchaTeaDivVisible(true);
        setIsOOlongTeaDivVisible(false);
        setIsWhiteTeaDivVisible(false);
    };
    const handleOolongTealDiv = () => {
        setIsBlackTeaDivVisible(false);
        setIsEarlDivVisible(false);
        setIsGreenTeaDivVisible(false);
        setIsMatchaTeaDivVisible(false);
        setIsOOlongTeaDivVisible(true);
        setIsWhiteTeaDivVisible(false);
    };

    const handleWhiteTealDiv = () => {
        setIsBlackTeaDivVisible(false);
        setIsEarlDivVisible(false);
        setIsGreenTeaDivVisible(false);
        setIsMatchaTeaDivVisible(false);
        setIsOOlongTeaDivVisible(false);
        setIsWhiteTeaDivVisible(true);
    };


    return <section className={'w-full h-screen'}>
        <nav
            className={'flex justify-between items-center w-full h-16 font-bold fixed  text-black z-[1000]  '}
            style={navbarStyle}
            /*style={navbarStyle}*/
        >
            {/*<img src={logo} className={'w-36 relative '}/>*/}
            <h1 className={'font-serif text-3xl'}>Evergreen</h1>
            <ul className={'flex relative left-[15%]  text-[20px] gap-[4vw]'}>
                <Link to={"/tea"}>
                    <li>Home</li>
                </Link>

                <li>
                    <Link to="/teaProduct">Product</Link>
                </li>

            </ul>
            <div className={'w-[400px] h-13  relative right-[100px]  '}>
                <input type={"search"} name={'search'} placeholder={'Search Tea Products!...'}
                       className={'outline-none border-[1px] border-black w-full h-[35px] text-[18px] rounded-[50px] text-center font-mohave bg-transparent relative top-[0px]'}/>
            </div>
            <img src={searchIcon} className={'w-[30px] absolute right-[55px] top-[18px]'}/>
        </nav>
        <div className={'w-full h-[80%]  absolute top-[62px] bg-[#DCDCDC] bg-opacity-50'}>
            <p className={'text-[50px] flex items-center justify-center relative top-[140px] text-black opacity-100'}>Products</p>
            <div
                className={' w-[60%] h-[40%]  absolute left-0 right-0 top-0 bottom-0 m-auto '}>

                <Carousel responsive={responsive}
                          className={'absolute left-0 right-0 top-[10px] bottom-[0%] m-auto opacity-100  w-full'}>
                    <div className={' h-[200px]  w-40 relative '}>
                        <img src={all}
                             className={'absolute left-0 right-0 top-0 bottom-0 m-auto w-32 h-32 rounded-[100px] hover:border-[5px] hover:border-[#9baa71]'}
                             onClick={handleBlackTeaDiv}/>
                        <p className={' absolute left-[30%] bottom-0'}>Black Tea</p>
                    </div>
                    <div className={'  h-[200px] w-40 relative left-[-35%]'}>
                        <img src={Earl_GreyS}
                             className={'absolute left-0 right-0 top-0 bottom-0 m-auto w-32 h-32 rounded-[100px] hover:border-[5px] hover:border-[#9baa71]'}
                             onClick={handleEarlDiv}/>
                        <p className={'absolute left-[25%] bottom-0'}>EARL GREYS</p>
                    </div>
                    {/*<div className={' h-[200px] border-2 border-green-400 w-40 relative left-[-75%]'}>
                        <img src={masalaChai}
                             className={'absolute left-0 right-0 top-0 bottom-0 m-auto w-32 h-32 rounded-[100px] hover:border-[5px] hover:border-[#9baa71]'}/>
                        <p className={'absolute left-[23%] bottom-0'}>MASALA CHAI</p>
                    </div>*/}
                    <div className={' h-[200px]  w-40  relative left-[-75%]'}>
                        <img src={green_Tea}
                             className={'absolute left-0 right-0 top-0 bottom-0 m-auto w-32 h-32 rounded-[100px] hover:border-[5px] hover:border-[#9baa71]'}
                             onClick={handleGreenTealDiv}/>
                        <p className={'absolute left-[25%] bottom-0'}>GREEN TEA</p>
                    </div>
                    <div className={' h-[200px]  w-40    relative left-[-115%]'}>
                        <img src={Matcha}
                             className={'absolute left-0 right-0 top-0 bottom-0 m-auto w-32 h-32 rounded-[100px] hover:border-[5px] hover:border-[#9baa71]'}
                             onClick={handleMatchaTealDiv}/>
                        <p className={'absolute left-[35%] bottom-0'}>MATCHA</p>
                    </div>
                    {/*<div className={' h-[200px] /!*border-2 border-y-amber-500*!/ w-40  relative '}>*/}
                    {/*    <img src={Sencha}*/}
                    {/*         className={'absolute left-0 right-0 top-0 bottom-0 m-auto w-32 h-32 rounded-[100px] hover:border-[5px] hover:border-[#9baa71]'}onClick={handleEarlDiv}/>*/}
                    {/*    <p className={'absolute left-[40%] bottom-0'}>SENCHA</p>*/}
                    {/*</div>*/}
                    <div className={' h-[200px] w-40   relative left-[-155%]'}>
                        <img src={OlongTea}
                             className={'absolute left-0 right-0 top-0 bottom-0 m-auto w-32 h-32 rounded-[100px] hover:border-[5px] hover:border-[#9baa71]'}
                             onClick={handleOolongTealDiv}/>
                        <p className={'absolute left-[22%] bottom-0'}>OOLONG TEA</p>
                    </div>
                    <div className={' h-[200px]  w-40   relative left-[-195%]'}>
                        <img src={whiteTea}
                             className={'absolute left-0 right-0 top-0 bottom-0 m-auto w-32 h-32 rounded-[100px] hover:border-[5px] hover:border-[#9baa71]'}
                             onClick={handleWhiteTealDiv}/>
                        <p className={'absolute left-[30%] bottom-0'}>White TEA</p>
                    </div>
                </Carousel>


                {/*<button className={'text-[50px] relative top-[30%]'}>{'<'}</button>*/}

                {/*<button className={'text-[50px] relative left-[92%] top-[30%]'}>{'>'}</button>*/}
            </div>
        </div>

        <div className={'w-full h-[80%] bg-white absolute bottom-[-68%]'}>


            <div className={'w-full h-screen  relative top-12 '} id={'blackTeaDiv'}>
                <h1 className={'flex items-center justify-center relative top-0 text-[25px]'}>Black Tea</h1>

              {/*  data.map((r:Data,index:number))={
                <TeaProducts image={blackPeral} title={'Black Peral'} price={100}/>
                    }*/}
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {data.map((r:Data,index:number) => (
                        <Card key={r.type}   price={r.price} title={r.item_name} image={r.img} />
                    ))}
                </div>

                <TeaProducts image={blackPeral} title={'Black Peral'} price={100}/>
                {/*<TeaProducts image={blackPeral} title={"Black Peral"} price={100} />
                    <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                    <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                    <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                    <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                    <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                    <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                    <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                    <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>*/}

            </div>


        </div>
        {isEarlDivVisible && (
            <div className={'w-full h-screen bg-white absolute top-[94.5%]'} id={'earlDiv'}>
                <h1 className={'flex items-center justify-center relative top-0 text-[25px]'}>Earl Gayes Tea</h1>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>


            </div>
        )}

        {isGreenTeaDivVisible && (
            <div className={'w-full h-screen bg-white absolute top-[94.5%]'} id={'greenTeaDiv'}>
                <h1 className={'flex items-center justify-center relative top-0 text-[25px]'}>Green Tea</h1>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>


            </div>
        )}

        {isMatchaTeaDivVisible && (
            <div className={'w-full h-screen bg-white absolute top-[94.5%]'} id={'matchaTeaDiv'}>
                <h1 className={'flex items-center justify-center relative top-0 text-[25px]'}>Matcha Tea</h1>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>


            </div>
        )}

        {isOOlongTeaDivVisible && (
            <div className={'w-full h-screen bg-white absolute top-[94.5%]'} id={'OOLongTeaDiv'}>
                <h1 className={'flex items-center justify-center relative top-0 text-[25px]'}>OOLONG Tea</h1>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>


            </div>
        )}
        {isWhiteTeaDivVisible && (
            <div className={'w-full h-screen bg-white absolute top-[94.5%]'} id={'whiteTeaDiv'}>
                <h1 className={'flex items-center justify-center relative top-0 text-[25px]'}>White Tea</h1>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>
                <TeaProducts image={blackPeral} title={"Black Peral"} price={100}/>


            </div>
        )}
        {/*{isEarlDivVisible && (
            <div className={'w-full h-[80%] bg-green-600 absolute bottom-[-68%] '} id={'earlDiv'}>
                 Content of your earlDiv
            </div>
        )}*/}
        <div className={'w-full h-[200px]  bg-[#f2f2f2] absolute bottom-[-120%]'}>
            <img src={logo} className={'w-40 relative top-[20px] left-[20px]'}/>
            <div className={'w-[200px] h-[150px]  text-[18px] block m-5'}>
                <span>+94 758965845</span><br/>
                <span>+94 758965845</span><br/>
                <span>evergreen@gmail.com</span>
            </div>

            <p className={'text-[15px] flex items-center justify-center relative bottom-[70px] '}>Copyright © 2023 Blog
                LK</p>
        </div>


    </section>

}

export default TeaProduct;