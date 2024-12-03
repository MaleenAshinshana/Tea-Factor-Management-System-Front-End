import logo from "../assets/images/Evergreen_Logo_Primary_Full_4Col.png"
import logOut from "../assets/images/download (7).png";
import addPng from "../assets/images/download__10_-removebg-preview.png";
import {Link} from "react-router-dom";
import SearchBar from "../component/input/searchBar.tsx";
import searchIcon from "../assets/images/magnifying-glass.png";

interface Data {
    id: number,
    date: string
    tea_type: string,
    qty: number,
    price: number
}

const data: Data[] = [
    {
        id: 1,
        date: "2023-1-2",
        tea_type: "super",
        qty: 25,
        price: 1300
    },
    {
        id: 2,
        date: "2023-1-5",
        tea_type: "normal",
        qty: 15,
        price: 900
    },
    {
        id: 3,
        date: "2023-2-2",
        tea_type: "super",
        qty: 38,
        price: 1500
    },
    {
        id: 4,
        date: "2023-3-2",
        tea_type: "super",
        qty: 18,
        price: 500
    },
    {
        id: 5,
        date: "2023-2-2",
        tea_type: "super",
        qty: 38,
        price: 1500
    },
    {
        id: 6,
        date: "2023-2-2",
        tea_type: "super",
        qty: 38,
        price: 1500
    },
    {
        id: 3,
        date: "2023-2-2",
        tea_type: "super",
        qty: 38,
        price: 1500
    }
]
// const  data:Data[]={
//  {
//      id:1,
//          date,"2023-1-2",
//          tea_type:"super",
//          qty:25,
//          price:1300
//  }
// }
function UserTeaLeaves() {
    return <section className={'bg-white w-full h-screen'}>
        <header>
            <nav className={' flex justify-between items-center bg-gray-400 w-full h-12 font-bold'}>
                <img src={logo} className={'w-36 relative '}/>
                <ul className={'flex gap-[4vw]'}>
                    <Link to={"/user-tea-leaves"}>
                        <li>Home</li>
                    </Link>

                    <Link to={"/user-tea-powder"}>
                        <li>Ordering Tea Powder</li>
                    </Link>
                    <Link to={"/user-tea-fertilize"}>
                        <li>Ordering Tea Fertilizer</li>
                    </Link>


                    <img src={logOut} className={'w-[30px] relative left-[45px]'}/>
                    <Link to={"/user-sing-in"}>
                        <li className={'relative right-[10px]'}>Log Out</li>
                    </Link>

                </ul>
            </nav>
        </header>

        <div className={'w-full h-[93.5%] border-2  bg-[#ffffff]'}>
            <div className={' w-[30%] h-[15%] '}>
                <p className={'relative m-[10px]'}>UserName :
                    <label className={'font-bold '}>Maleen</label>
                </p>

                <p className={'relative m-[10px]'}>Price of 1kg of normal tea leaves :
                    <label className={'font-bold '}>RS.200</label>
                </p>

                <p className={'relative m-[10px]'}>Price of 1kg of Super tea leaves :
                    <label className={'font-bold '}>RS.250</label>
                </p>
            </div>
            <SearchBar type={'search'} name={'search'} placeholder={'Search The day tea leaves were given....'}/>
            <img src={searchIcon} className={'w-[30px] absolute right-[55px] top-[70px]'}/>

            <div className={' w-40 h-36 absolute right-[50px] top-[150px] font-bold text-[20px] text-white '}>
                <Link to={"/fertilize"}>
                    <button className={'w-full h-[35%] bg-red-600 rounded-[10px]'}>Fertilize</button>
                    <img src={addPng} className={'w-[25px] h-[25px] relative bottom-[38px]'}/>
                </Link>

                <button className={'w-full h-[35%] bg-green-600 rounded-[10px]'}> Tea Powder</button>
                <img src={addPng} className={'w-[25px] h-[25px] relative bottom-[38px]'}/>
            </div>
            <h1 className={'relative left-[200px] top-[120px] font-bold text-[30px] w-[50%]'}>Tea Leaves</h1>

            <div className={'w-[70%] h-[45%]  absolute left-0 right-0 top-[300px] bottom-0 m-auto'}>
                <table>
                    <thead className={'bg-[#dcdcdc]'}>
                    <tr>
                        <th className={'py-3'}>Date</th>
                        <th className={'py-3'}>Tea Leaves Type</th>
                        <th className={'py-3'}>Qty(kg)</th>
                        <th className={'py-3'}>Price(RS.)</th>
                    </tr>

                    </thead>
                    <tbody>
                    {
                        data.map((r: Data) => {
                            return <tr className={'border-b  '}>
                                <td className={'w-[10%] relative left-[100px]'}>{r.date}</td>
                                <td className={'w-[10%] relative left-[100px]'}>{r.tea_type}</td>
                                <td className={'w-[10%] relative left-[100px]'}>{r.qty}</td>
                                <td className={'w-[10%] relative left-[100px]'}>{r.price}</td>
                            </tr>
                        })

                    }

                    </tbody>
                </table>
            </div>

        </div>
    </section>

}

export default UserTeaLeaves;