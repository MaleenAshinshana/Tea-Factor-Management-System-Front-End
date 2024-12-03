// TeaItem.tsx
import {Link} from "react-router-dom";
import searchIcon from "../assets/images/magnifying-glass.png";
import { FaPen, FaTrash } from "react-icons/fa";
import {useEffect, useState} from "react";


interface TeaDetailsProps {
    image: string;
    title: string;
    price: number;
}

interface Data {
    id: number,
    name: string
    the_price_of_one: number,
    the_size_ordered: string,
    qty: number,
    price: number
}

function TeaItem(props: TeaDetailsProps) {
    const data: Data[] = [
        {
            id: 1,
            name: "item1",
            the_price_of_one: 100,
            the_size_ordered: "100g",
            qty: 2,
            price: 800
        },
        {
            id: 1,
            name: "item2",
            the_price_of_one: 100,
            the_size_ordered: "100g",
            qty: 2,
            price: 800
        },

    ]
    const [selectedOption, setSelectedOption] = useState(null);

    // Handler function to update the selected option
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
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
        backgroundColor: isScrolled ? 'rgba(164, 162, 162, 1)' : 'transparent',
        transition: 'background-color 0.3s ease', // Optional: Add a smooth transition effect
    };
    useEffect(() => {
        // Log details to the console
        console.log('TeaItem details:', {
            image: props.image,
            title: props.title,
            price: props.price,
        });

        // If you want to maintain an array of details, you can do it here
        // For example, you can dispatch an action to update the state in a Redux store
        // Or you can call a function in the parent component to update a state variable
    }, [props]);

    return <section className={'w-full h-screen bg-white'}>
        <nav
            className={'flex justify-between items-center w-full h-16 font-bold fixed  text-black z-[1000]   '}
            style={navbarStyle}
            /*style={navbarStyle}*/
        >
            {/*<img src={logo} className={'w-36 relative '}/>*/}
            <h1 className={'font-serif text-3xl'}>Evergreen</h1>
            <ul className={'flex relative left-[15%]  text-[20px] gap-[4vw]'}>
                <li>Home</li>
                <li>
                    <Link to="/teaProduct">Product</Link>
                </li>

            </ul>
            <div className={'w-[400px] h-13  relative right-[100px]  '}>
                <input type={"search"} name={'search'} placeholder={'Search Tea Products!...' }
                       className={'outline-none border-[1px] border-black w-full h-[35px] text-[18px] rounded-[50px] text-center font-mohave bg-transparent relative top-[0px] text-black'}/>
            </div>
            <img src={searchIcon} className={'w-[30px] absolute right-[55px] top-[18px]'}/>
        </nav>
        <div className={'w-full h-full bg-white absolute top-[9%] '}>
            {/*image eka load Wenna*/}
            <div className={'w-[400px] h-[300px] border-2 border-blue-500 m-5 absolute left-[25%] '}>

            </div>

            {/*item Ekata adala Nama ha price ekata*/}
            <div className={'w-[300px] h-[100px] absolute top-0 left-[53%] m-5 '}>
                <p className={'font-bold text-[20px]'}>Name :</p>
                <p className={'font-bold text-[20px] mt-5'}>Price :

                </p>

            </div>
            <div className={'w-[400px] h-[200px] absolute top-[16%] left-[54.3%] '}>
                <p className={'border-2 border-b-black border-t-white border-l-white border-r-white w-[50px] m-3'}>SIZE</p>
                <button className={'gram-btn'}>50G</button>
                <button className={'gram-btn'}>100G</button>
                <button className={'gram-btn'}>250G</button>
                <button className={'gram-btn'}>500G</button>
                <div className={'w-full h-24 border-2 border-white mt-2'}>
                    <div className={'w-24 h-20 border-[3px] border-black m-2'}>
                        <button
                            className={'w-[50%] h-[50%] border-[1px] border-s-black border-b-black relative left-[46px] font-bold text-[20px] text-center'}>+
                        </button>
                        <button
                            className={'w-[50%] h-[50%] border-[1px] border-s-black border-b-black relative left-0 top-[50%] font-bold text-[20px] text-center'}>-
                        </button>
                        {/*<div className={'w-[50%] h-[50%] border-2 border-fuchsia-200 relative left-[48px]'}>

                        </div>*/}

                    </div>
                    <button
                        className={'w-[40%] h-10 bg-[#98a86d] relative bottom-[100%] left-[45%] text-white hover:bg-black'}>Add
                        To Cart
                    </button>
                    <button
                        className={'w-[60%] h-10 bg-black relative bottom-[45%] right-[5%] text-white hover:bg-[#98a86d]'}>BY
                        IT NOW
                    </button>
                </div>
            </div>
            <div
                className={'w-[90%] h-[45%]  absolute left-0 right-0 top-[400px] bottom-0 m-auto bg-white '}>
                <table className={'w-full'}>
                    <thead className={'bg-black text-white text-center  '}>
                    <tr>
                        <th className={'py-3  border-[1px] border-r-gray-500'}>Item Name</th>
                        <th className={'py-3 border-[1px] border-r-gray-500'}>The Price Of One</th>
                        <th className={'py-3 border-[1px] border-r-gray-500'}>The Size Ordered</th>
                        <th className={'py-3 border-[1px] border-r-gray-500'}>Qty</th>
                        <th className={'py-3 border-[1px] border-r-gray-500'}>price</th>
                        <th className={'py-3 border-[1px] border-r-gray-500'}>Actions</th>
                    </tr>

                    </thead>
                    <tbody>
                    {
                        data.map((r: Data) => {
                            return <tr className={'border-b '}>
                                <td className={'w-[20%] relative left-[100px] py-3'}>{r.name}</td>
                                <td className={'w-[10%] relative left-[100px] py-3'}>{r.the_price_of_one}</td>
                                <td className={'w-[10%] relative left-[100px] py-3'}>{r.the_size_ordered}</td>
                                <td className={'w-[10%] relative left-[100px] py-3'}>{r.qty}</td>
                                <td className={'w-[12%] relative left-[100px] py-3'}>{r.price}</td>
                                <td className={'w-[15%] relative left-[100px] py-3'}>
                                   {/* <button className={'bg-blue-600 text-white p-1 rounded-full mx-2'}><FaEye/></button>*/}
                                    <button className={'bg-green-600 text-white p-1 rounded-full mx-2'}><FaPen/>
                                    </button>
                                    <button className={'bg-red-600 text-white p-1 rounded-full mx-2'}><FaTrash/>
                                    </button>
                                </td>
                            </tr>
                        })

                    }

                    </tbody>
                </table>
            </div>


        </div>
        <div className={'w-full h-screen  absolute bottom-[-111.5%] bg-white]'}>

            {/*Ithem Gogak table ekata add karanna ona unoth*/}

            <button className={'w-44 h-10 bg-[#98a86d] absolute right-4 text-white top-5 hover:bg-green-600'}>Continue Shopping</button>
            <div className={'w-56 h-16 absolute right-[20px] top-[15%]'}>
                <label className={'flex items-center justify-center font-bold text-[30px]'}>Total
                    : <span>1800</span></label>
            </div>
            <div className={'w-[400px] h-16 absolute left-[20px]  top-[20%] m-auto font-bold text-[18px]'}>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="option1"
                            checked={selectedOption === "option1"}
                            onChange={handleOptionChange}
                            className={'relative ml-5'}
                        />
                        Cash On Delivery
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="option2"
                            checked={selectedOption === "option2"}
                            onChange={handleOptionChange}
                            className={'relative ml-5'}
                        />
                        Card Payment
                    </label>

                    {/*<div>
                      Selected Option: {selectedOption}
                  </div>*/}
                </div>


            </div>
            <div className={'w-[60%] h-[60%] absolute left-0 right-0 top-[30%] bottom-0 m-auto shadow-2xl '}>
                <p className={'flex items-center justify-center font-bold text-[30px]'}> Delivery Details</p>
                <input name={'email'} type={"email"} placeholder={'Enter Your Email'}
                       className={'outline-none w-[80%] h-10 border-[1px] border-gray-300 focus:border-blue-500 mt-5 ml-20 '}/>
                <input name={'firstName'} type={"text"} placeholder={'First Name'}
                       className={'outline-none w-[35.5%] h-10 border-[1px] border-gray-300 focus:border-blue-500 mt-5 ml-20 '}/>
                <input name={'lastName'} type={"text"} placeholder={'Last Name'}
                       className={'outline-none w-[35.5%] h-10 border-[1px] border-gray-300 focus:border-blue-500 mt-5 ml-20 '}/>
                <input name={'address'} type={"text"} placeholder={'Address'}
                       className={'outline-none w-[80%] h-10 border-[1px] border-gray-300 focus:border-blue-500 mt-5 ml-20 '}/>
                <input name={'contact number 1'} type={"text"} placeholder={'Contact number 1'}
                       className={'outline-none w-[35.5%] h-10 border-[1px] border-gray-300 focus:border-blue-500 mt-5 ml-20 '}/>
                <input name={'contact number 2'} type={"text"} placeholder={'Contact number 2'}
                       className={'outline-none w-[35.5%] h-10 border-[1px] border-gray-300 focus:border-blue-500 mt-5 ml-20 '}/>
                <input name={'city'} type={"text"} placeholder={'City'}
                       className={'outline-none w-[35.5%] h-10 border-[1px] border-gray-300 focus:border-blue-500 mt-5 ml-20 '}/>
                <input name={'postalCode'} type={"text"} placeholder={'Postal Code'}
                       className={'outline-none w-[35.5%] h-10 border-[1px] border-gray-300 focus:border-blue-500 mt-5 ml-20 '}/>

                <button
                    className={'w-44 h-12 absolute left-0 right-0 m-auto bottom-[10px] bg-[#1C1F7D] rounded-[30px] text-white font-bold'}>Place
                    Order
                </button>


            </div>
            {/* <div className={'w-[80%] h-[80%] border-[1px] border-b-gray-200 border-l-gray-200 border-r-black absolute right-0 top-[9%] mt-5  border-orange-500'}>

            <input name={'email'} type={"email"} placeholder={'Enter Your Email'} className={'outline-none w-[80%] h-10 border-[1px] border-gray-300 focus:border-blue-500 mt-5 ml-20 '}/>
            <input name={'firstName'} type={"text"} placeholder={'First Name'} className={'outline-none w-[34%] h-10 border-[1px] border-gray-300 focus:border-blue-500 mt-5 ml-20 '}/>
            <input name={'lastName'} type={"text"} placeholder={'Last Name'} className={'outline-none w-[34%] h-10 border-[1px] border-gray-300 focus:border-blue-500 mt-5 ml-20 '}/>
            <input name={'address'} type={"text"} placeholder={'Address'} className={'outline-none w-[80%] h-10 border-[1px] border-gray-300 focus:border-blue-500 mt-5 ml-20 '}/>
            <input name={'city'} type={"text"} placeholder={'City'} className={'outline-none w-[34%] h-10 border-[1px] border-gray-300 focus:border-blue-500 mt-5 ml-20 '}/>
            <input name={'postalCode'} type={"text"} placeholder={'Postal Code'} className={'outline-none w-[34%] h-10 border-[1px] border-gray-300 focus:border-blue-500 mt-5 ml-20 '}/>

        </div>*/}

        </div>

    </section>;
}

export default TeaItem;
