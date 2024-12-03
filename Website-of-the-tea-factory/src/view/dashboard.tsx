import logOut from "../assets/images/logout.png";
import fertilizer from "../assets/images/fertilizer.png";
import teaLeves from "../assets/images/leaves.png";
import dashBoard from "../assets/images/dashboard-32.png";
import teaItem from "../assets/images/download__11_-removebg-preview (1).png";
import orderIcon from "../assets/images/shopping-bag.png";
import customer from "../assets/images/download__5_-removebg-preview.png";
import owner from "../assets/images/download__11_-removebg-preview.png";
import CustomInput from "../component/input/customInput.tsx";
import menuIcon from "../assets/images/menu.png";
import Earl_GreyS from "../assets/images/collection1.2.jpg";
import whiteTea from "../assets/images/White-Tea_1.jpg";
import green_Tea from "../assets/images/collection1.4.jpg";
import all from "../assets/images/collection1.1-_1_.jpg";
import OlongTea from "../assets/images/collection1.7.jpg";
import Matcha from "../assets/images/collection1.5.jpg";
import DashBoardCard from "../component/card/dashBoardCard.tsx";


import {
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from "chart.js";
import {Bar} from "react-chartjs-2";
import React, {useEffect, useState} from "react";
import axios from "axios";
import ImageUploader from "../component/img/imageUploader.tsx";
import Swal from "sweetalert2";


function Dashboard() {
    /*-------------Image Save-------------------*/
    const handle = (image, name) => {
        setImage(image)
    }

    useEffect(() => {
        setItems(false);
    }, []);


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [buttonText, setButtonText] = useState('Save');
    const [buttonColor, setButtonColor] = useState('bg-gray-400');

    const handleUpdateClick = () => {
        setButtonText('Update');
        setButtonColor('bg-green-500'); // Change to the desired green color class
    };

    const handleDeleteClick = () => {
        setButtonText('Delete');
        setButtonColor('bg-red-500'); // Change to the desired red color class
    };


    const handleMenu = () => {
        setButtonText('Save');
        setButtonColor("bg-gray-400");
        // Toggle the state to open/close the menu
        setIsMenuOpen(!isMenuOpen);
    };

    /*----------------------Save Data ------------------------------*/
    const [item_name, setItem_name] = useState<string>("");
    const [type, setType] = useState<string>("");
    const [qty, setQty] = useState<number>();
    const [price, setPrice] = useState<number>();
    const [image, setImage] = useState<string>("");


    const handleSaveData = (e: any, type: any) => {
        switch (type) {
            case 'item_name':
                setItem_name(e.target.value);
                break;
            case 'type':
                setType(e.target.value);
                break;
            case 'qty':
                setQty(e.target.value);
                break
            case 'price':
                setPrice(e.target.value);
                break
        }
    }

    /*const saveValidation = () => {
        if (item_name && type && qty && price) {
            saveItem();
        } else {
            Swal.fire({
                icon: "error",
                title: "Invalid Inputs",
                text: "Please enter valid inputs"
            });
        }
    }*/


    const saveItem = () => {
        const headers = {
            'Content-Type': 'application/json',
        }
        let body = {
            item_name: item_name,
            type: type,
            qty: qty,
            price: price,
            image: image
        }
        console.log(body)
        axios.post("http://localhost:8080/teaPowder/save", body, {headers: headers}).then(r => {
            Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Item Created successfully!"
            });
        }).catch(err => {
            Swal.fire({
                icon: "error",
                title: "Sorry!",
                text: "Something went wrong"
            });
            console.log(err)
        })
    }

    ChartJs.register(
        BarElement,
        CategoryScale,
        LinearScale,
        Tooltip,
        Legend
    )
    const data = {
        labels: ['Jun', 'feb', 'mar', 'api', 'may', 'jun', 'jul', 'aug', 'sep', 'otc', 'nov', 'dec'],
        datasets: [
            {
                label: 'Green Tea ',
                data: [3, 6, 9],
                backgroundColor: 'green',
                boarderColor: 'black',
                boarderWidth: 1,
                left: '500px'
            },
            {
                label: 'Black Tea',
                data: [3, 6, 9],
                backgroundColor: 'black',
                boarderColor: 'black',
                boarderWidth: 1,
            },
            {
                label: 'White Tea',
                data: [3, 6, 9],
                backgroundColor: '#cfcfcf',
                boarderColor: 'black',
                boarderWidth: 1,
            },
            {
                label: 'Oloong Tea',
                data: [3, 6, 9],
                backgroundColor: 'orange',
                boarderColor: 'black',
                boarderWidth: 1,
            },
            {
                label: 'Early Tea',
                data: [3, 6, 9],
                backgroundColor: '#b32222',
                boarderColor: 'black',
                boarderWidth: 1,
            },
            {
                label: 'Matcha Tea',
                data: [5, 10, 15],
                backgroundColor: '#98e86e',
                boarderColor: 'black',
                boarderWidth: 1,
            }

        ]
    }
    const option = {}
    const [showItems, setItems] = useState(true);
    const handleItemsDiv = () => {
        setItems(true);
    }
    const handleDashBoard = () => {
        setItems(false);
    }

    return <section className={'w-full h-full '}>
        <div className={'w-full h-14 bg-white'}>
            <p className={'flex items-center justify-center font-bold text-[30px] relative top-[8px] '}>Admin Dash
                Board</p>

        </div>
        {/* <nav
            className={'flex justify-between items-center w-[82%] h-16 right-0 font-bold fixed text-black z-[1000]'}

        >
            <img src={logo} className={'w-36 relative '}/>
            <h1 className={'font-serif text-3xl pl-4'}>Evergreen</h1>
            <ul className={'flex relative right-[10%] text-[20px] gap-[4vw]'}>
                 <li>Home</li>
                <li>
                    <Link to="/teaProduct">Product</Link>
                </li>

                <li className={'relative left-[130px]'}>log out</li>
                <li><img src={logOut} className={'w-8 relative left-[100px]'}/></li>
            </ul>
        </nav>*/}
        <div className={'w-[18%] h-screen bg-[#16B757] fixed '}>
            {/* <div className={'w-full h-[8.5%] bg-[#037616]'}>
                <p className={'text-white font-mono text-[30px] font-bold flex items-center justify-center'}>Admin</p>
            </div>*/}
            <div className={'w-full h-[7%] {/*border-2 border-black*/} mt-3 hover:bg-[#20c763] cursor-pointer'}
                 onClick={handleDashBoard}>
                <div className={'w-[25%] h-full {/*border-2 border-blue-500*/} ml-2'}>
                    <img src={dashBoard} className={'w-12 relative left-[10%]'}/>
                </div>
                <p className={'relative bottom-[82%] left-[35%] text-white text-[20px] '}>Dash Board</p>
            </div>
            <div className={'w-full h-[7%] {/*border-2 border-black*/} mt-3 hover:bg-[#20c763] cursor-pointer'}>
                <div className={'w-[25%] h-full {/*border-2 border-blue-500*/} ml-2'}>
                    <img src={teaLeves} className={'w-12 relative left-[10%]'}/>
                </div>
                <p className={'relative bottom-[82%] left-[35%] text-white text-[20px] '}>Tea Levers</p>
            </div>
            <div className={'w-full h-[7%] {/*border-2 border-black*/} mt-3 hover:bg-[#20c763] cursor-pointer'}>
                <div className={'w-[25%] h-full {/*border-2 border-blue-500*/} ml-2'}>
                    <img src={fertilizer} className={'w-12 relative left-[10%]'}/>
                </div>
                <p className={'relative bottom-[82%] left-[35%] text-white text-[20px] '}>Tea Fertilizer</p>
            </div>

            <div className={'w-full h-[7%] {/*border-2 border-black*/} mt-3 hover:bg-[#20c763] cursor-pointer '}
                 onClick={handleItemsDiv}>
                <div className={'w-[25%] h-full {/*border-2 border-blue-500*/} ml-2'}>
                    <img src={teaItem} className={'w-12 relative left-[10%]'}/>
                </div>
                <p className={'relative bottom-[82%] left-[35%] text-white text-[20px] '}>Tea
                    Item</p>
            </div>
            <div className={'w-full h-[7%] mt-3 hover:bg-[#20c763] absolute bottom-[8%] cursor-pointer'}>
                <div>
                    <img src={logOut} className={'w-6 relative left-[20px] top-[15px]'}/>
                </div>
                <p className={'relative bottom-[30%] left-[30%] text-black text-[20px] '}>Log Out</p>

            </div>
        </div>
        <div className={'w-[82%] h-[92%] bg-[#f0f0f0] absolute right-0 top-[8%]'}>

            <label
                className={'/*border-2 border-black*/ w-[170px] inline-block text-[20px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 absolute right-[17%] mt-5'}>Date
                : <p className={'inline-block'}>2024/2/2</p></label>
            <label
                className={'{/*border-2 border-black*/} w-[200px] inline-block text-[20px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 absolute right-0 mt-5'}>Time
                : <p className={'inline-block'}>15.30pm</p></label>

            <div className={'bg-white w-[25%] h-[20%] absolute top-[15%] ml-10 rounded-[10px] shadow-2xl'}>
                <img src={orderIcon} className={'w-16 absolute left-5 top-0 bottom-0 m-auto '}/>
                <p className={'text-[18px] absolute left-[130px] top-[20%] text-gray-400'}>Orders</p>
                <label className={'font-bold text-[28px] absolute right-[120px] bottom-[40px]'}>1,000</label>
            </div>
            <div
                className={'bg-white w-[25%] h-[20%] absolute top-[15%] left-[30%] ml-10 rounded-[10px] shadow-2xl inline-block'}>
                <img src={customer} className={'w-16 absolute left-5 top-0 bottom-0 m-auto '}/>
                <p className={'text-[18px] absolute left-[130px] top-[20%] text-gray-400'}>Customers</p>
                <label className={'font-bold text-[28px] absolute right-[120px] bottom-[40px]'}>1,000</label>
            </div>
            <div className={'bg-white w-[25%] h-[20%] absolute top-[15%] right-[12%]  ml-10 rounded-[10px] shadow-2xl'}>
                <img src={owner} className={'w-16 absolute left-5 top-0 bottom-0 m-auto '}/>
                <p className={'text-[18px] absolute left-[130px] top-[20%] text-gray-400'}>Tea Owners</p>
                <label className={'font-bold text-[28px] absolute right-[120px] bottom-[40px]'}>1,000</label>
            </div>
            {/*       <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
  Your text goes here
</span>*/}
            {/*  <DashBoardCard itemName={'Green Tea'} qty={10} imgSrc={green_Tea}/>
            <DashBoardCard itemName={'Black Tea'} qty={10} imgSrc={all}/>
            <DashBoardCard itemName={'White Tea'} qty={10} imgSrc={whiteTea}/>
            <DashBoardCard itemName={'Oloong Tea'} qty={10} imgSrc={OlongTea}/>
            <DashBoardCard itemName={'Early Tea'} qty={10} imgSrc={Earl_GreyS}/>
            <DashBoardCard itemName={'Matcha Tea'} qty={10} imgSrc={Matcha}/>*/}
            {/*<div className={'w-[95%] h-[13%] bg-white relative top-[10%] left-[40px] rounded-t-[10px]'}>
                <p className={'flex items-center justify-center text-[30px] font-bold relative top-[20px]'}>Order Chart</p>

            </div>*/}

            <div className={'w-[95%] h-[50%] bg-white relative top-[47%] left-[40px] rounded-[10px] shadow-2xl'}>
                <p className={'flex items-center justify-center text-[30px] font-bold'}>Order Chart</p>
                <Bar width={1500}
                     height={370}
                     data={data}
                     options={option}
                     style={{
                         width: '95%',
                         height: '30%',
                         position: 'relative',
                         top: '5px'
                     }}
                />
            </div>
        </div>
        {showItems && (
            <div className={'w-[82%] h-[92.5%] bg-[#f0f0f0] absolute right-0 top-[56px]'}>
                <div className={'w-full h-[30%]'}>
                    <DashBoardCard itemName={'Green Tea'} qty={10} imgSrc={green_Tea}/>
                    <DashBoardCard itemName={'Black Tea'} qty={10} imgSrc={all}/>
                    <DashBoardCard itemName={'White Tea'} qty={10} imgSrc={whiteTea}/>
                    <DashBoardCard itemName={'Oloong Tea'} qty={10} imgSrc={OlongTea}/>
                    <DashBoardCard itemName={'Early Tea'} qty={10} imgSrc={Earl_GreyS}/>
                    <DashBoardCard itemName={'Matcha Tea'} qty={10} imgSrc={Matcha}/>
                </div>

                <div
                    className={'w-[90%] h-[55%] bg-white absolute left-0 right-0 bottom-[5%] m-auto rounded-[10px] shadow-2xl'}>
                    <img src={menuIcon} className={'w-6 absolute right-[3%]'} onClick={handleMenu}/>
                    <div className={'w-[50%] h-full absolute left-[3%] border-2 border-black'}>
                        {/*<IMG/>*/}
                        {/* <p>https://dog.ceo/api/breeds/list/all
                        </p>*/}

                        <ImageUploader getImage={handle} image={" "}/>

                    </div>

                    <div className={'w-[40%] h-[80%] absolute right-[5%] top-0 bottom-0 m-auto'}>
                        <div className={'w-full h-[70%]  absolute top-[5%]'}>
                            <CustomInput type={'text'} name={'item_name'} placeholder={"Item Name"}
                                         className={'outline outline-none w-[90%] h-[20%] border-2 border-gray-400 absolute left-0 right-0 m-auto'}
                                         callback={handleSaveData}/>
                            <CustomInput type={'text'} name={'type'} placeholder={"Item Type"}
                                         className={'outline outline-none w-[90%] h-[20%] border-2 border-gray-400 mt-3 absolute left-0 right-0 m-auto'}
                                         callback={handleSaveData}/>
                            <CustomInput type={'text'} name={'qty'} placeholder={"Item Qty"}
                                         className={'outline outline-none w-[90%] h-[20%] border-2 border-gray-400 mt-5 absolute left-0 right-0 m-auto'}
                                         callback={handleSaveData}/>
                            <CustomInput type={'text'} name={'price'} placeholder={"Item Price"}
                                         className={'outline outline-none w-[90%] h-[20%] border-2 border-gray-400 mt-8 absolute left-0 right-0 m-auto'}
                                         callback={handleSaveData}/>
                        </div>
                        <div className={'w-full h-[25%] absolute bottom-0'}>
                            {/*<button
                                className={'w-[50%] h-[65%] bg-gray-400 absolute left-0 right-0 top-0 bottom-0 m-auto  text-white text-[20px] rounded-[40px]'}>
                                {buttonText}
                            </button>*/}

                            <button
                                className={`w-[50%] h-[65%] absolute left-0 right-0 top-0 bottom-0 m-auto text-white text-[20px] rounded-[40px] ${buttonColor}`}
                                onClick={saveItem}>
                                {buttonText}
                            </button>

                        </div>


                    </div>
                    {isMenuOpen && (
                        <div className="h-[80px] w-24 bg-gray-200 p-4 absolute top-7 right-[-3%] rounded-[10px]">
                            {/* Add your menu items here */}
                            <p className={'cursor-pointer'} onClick={handleUpdateClick}>Update</p>
                            <p className={'cursor-pointer'} onClick={handleDeleteClick}>Delete</p>
                            {/* ... */}
                        </div>
                    )}

                </div>


            </div>
        )}


    </section>
}

export default Dashboard;