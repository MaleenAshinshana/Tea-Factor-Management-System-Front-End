import main
    from "../assets/images/plants-for-all-seasons-fertilizing-trees-shrubs-granulated-fertilizer-tree-trunk.jpg";
import logo from "../assets/images/Evergreen_Logo_Primary_Full_4Col.png";
import {Link} from "react-router-dom";
import logOut from "../assets/images/images-removebg-preview.png";
import SearchBar from "../component/input/searchBar.tsx";
import searchIcon from "../assets/images/magnifying-glass.png";
import Card from "../component/card/card.tsx";
import TSP from "../assets/images/TSP.png";
import SOP from "../assets/images/SOP.png";
import STUM from "../assets/images/STUM-400.png";
import SOA from "../assets/images/Sulphate-of-Ammonia.png";
import T65 from "../assets/images/T-65.png";
import T200 from "../assets/images/T-200.png";
import T750 from "../assets/images/T-750.png";
import TU from "../assets/images/TU-709.png";

function Fertilizer(){
    return <section className={'bg-gray-200 w-full h-screen'}>
         <div className={' w-full h-full'}>
             <img src={main} className={'w-full h-full relative top-0'}/>
             <nav className={' flex justify-between items-center  w-full h-12 font-bold relative bottom-[100%] text-white  border-b-2'}>
                 <img src={logo} className={'w-36 relative '}/>
                 <ul className={'flex gap-[4vw]'}>
                     <Link to={"/user-tea-leaves"}>
                         <li>Home</li>
                     </Link>
                     <li>Fertilize</li>
                     <img src={logOut} className={'w-[30px] relative left-[45px]'}/>
                     <Link to={"/user-sing-in"}>
                         <li className={'relative right-[10px]'}>Log Out</li>
                     </Link>
                 </ul>
             </nav>
             <SearchBar type={'search'} name={'search'} placeholder={'Search the fertilizer type...'}/>
             <img src={searchIcon} className={'w-[30px] absolute right-[55px] top-[70px]'}/>
             <div className={' w-full h-[50%] absolute top-[150px]'}>
                 <h1 className={'font-bold text-white text-center text-5xl font-inter'}>Tea leaf nutrition (fertilizer)</h1>
                 <div className={'w-[80%] h-40 absolute left-0 right-0 top-0 bottom-[60px] m-auto'}>
                     <p className={'text-white text-2xl font-inriaSans font-bold relative top-[20px] '}>
                         We supply specially formulated fertilizer mixes and specialty fertilizers for tea crops grown in Sri
                         Lanka.These are supplied to various tea growing regions of the country and help the tea growers to
                         achieve a consistent yield through sustainable tea cultivation.</p>
                 </div>

             </div>
             {/*<svg className="animate-bounce w-6 h-6 ...">*/}
             
             {/*</svg>*/}
             
         </div>
        <div className={'  bg-gray-200'}>
            <Card title={'Triple Super Phosphate – TSP'} price={'Rs.1500'} imgsrc={TSP}/>
            <Card title={'SOP'} price={'Rs.1800'} imgsrc={SOP}/>
            <Card title={'Sulphate-of-Ammonia'} price={'Rs.1900'} imgsrc={SOA}/>
            <Card title={'STUM-400'} price={'Rs.2000'} imgsrc={STUM}/>
            <Card title={'T 65'} price={'Rs.2100'} imgsrc={T65}/>
            <Card title={'T 750'} price={'Rs.1800'} imgsrc={T750}/>
            <Card title={'TU  709'} price={'Rs.1800'} imgsrc={TU}/>
            <Card title={'T 200'} price={'Rs.1800'} imgsrc={T200}/>
        </div>
    </section>

}
export default Fertilizer;