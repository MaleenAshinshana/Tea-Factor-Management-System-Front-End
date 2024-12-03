import logo from '../assets/images/Evergreen_Logo_Primary_Full_4Col.png'
import Input from "../component/input/input.tsx";
import {Link} from "react-router-dom";
import usernameIMG from "../assets/images/download__13_-removebg-preview.png";
import passwordIMG from "../assets/images/download__14_-removebg-preview.png";
import adminImg from "../assets/images/businessman_6997519-removebg-preview.png";
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import {useState} from "react";
import * as validator from "../util/validator";




function AdminSingIn():JSX.Element {

    const navigate=useNavigate();

    const [username,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [errorMsg,setErrorMsg]=useState('');

    const handleInput=(e,type):void =>{
        switch (type){
            case 'username':
                setUserName(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break
        }
    }
    const handleLogin=():void=>{
        let isValidInput=true;
        let errorMsg="";

        if (!validator.validUsername(username)){
            isValidInput=false;
            errorMsg="> Invalid User Name";
        }
        if (!validator.validatePassword(password)){
            isValidInput=false;
            errorMsg=errorMsg + ">Invalid Password";
        }
        if (isValidInput){
            const header={'Content-Type': 'application/json'}
            let body={
                username:username,
                password:password
            }
            axios.post("http://localhost:8080/admin/auth",body,{headers:header}).then(r=>{
                Cookies.set("token",r.data.data.access_token);
                Cookies.set("user",JSON.stringify(r.data.data.user));
                navigate("/dash-board");
            }).catch(e=>{
                Swal.fire({
                    icon: "error",
                    title: "Sorry!",
                    text: "Something went wrong"
                });
            })
        }else {
            setErrorMsg(errorMsg);
        }
    }
    return <section className={'bg-gray-200 w-full h-screen'}>
        <div className={' w-[20%] h-[10%] absolute left-0 right-0 m-auto mt-5'}>
            <img src={logo} className={'w-full h-full'} title="logo" alt="logo"/>
        </div>
        <div
            className={'bg-white w-[70%] h-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl   drop-shadow-2xl overflow-hidden'}>
            {/*<p className={'text-5xl font-bold font-inter absolute left-[28%] p-7 text-gray-400 '}>Welcome To
                Evergreen</p>*/}
            {/*<div className={' w-[25%] h-[12%] absolute left-[-5%] right-0 m-auto mt-2 border-2 border-blue-500'}>
                <img src={logo} className={'w-full h-full'} title="logo" alt="logo"/>
            </div>*/}
         {/*   <div className={'w-[150px] h-[140%] rounded-[10px] bg-gray-500  absolute top-[-10%] border-2 border-black rotate-12 z-[1000]'} style={{ clipPath: 'polygon(0 0, 50% 0, 100% 100%, 10% 100%)' }}></div>
            <div className={'w-20 h-[70%] rounded-[10px] bg-red-500 z-[1000]'}></div>
            <div className={'w-40 h-[70%] rounded-[10px] bg-green-600 absolute bottom-[-10%] -rotate-45 '}></div>*/}
            {/*<div className="w-20 h-10 bg-blue-500 rounded-full">
                <div className="w-full h-full rounded-full overflow-hidden flex">
                    <div className="w-1/2 h-full bg-white rounded-r-full"></div>
                </div>
            </div>*/}

           {/* <div className="relative w-44 h-44">
                <div className="absolute top-0 left-0 w-full h-22 rounded-t-[100px] bg-gray-600"></div>
                <div className="absolute bottom-0 left-0 w-full h-22 rounded-b-[100px] bg-blue-600"></div>
            </div>*/}
            {/*<div className={'w-40 h-full bg-green-600 rounded-[10px]  '}></div>*/}
            {/*<div className={'h-full bg-green-600 rounded-[10px] rotate-45 relative top-[60%] left-[-10%]'} style={{ clipPath: 'polygon(0 0, 10% 0, 30% 100%, 10% 100%)' }}></div>*/}

            <div className={' w-[42%] h-full absolute left-0 right-0 top-0 bottom-0 m-auto'}>
<img src={adminImg} className={'w-44 absolute left-0 right-0 m-auto mt-3'}/>
                <p className={'font-bold text-[30px] flex items-center justify-center p-7 text-gray-400 relative top-[170px]'}>Admin
                    </p>

                {/*<select className={'  outline-none w-80 h-9 mt-[30px] relative left-[19%] bg-gray-200 rounded-[7px]'}
                        id={'owner_type'}>
                    <option selected>Select Type</option>
                    <option>Admin</option>
                    <option>Branch Owner</option>
                </select>*/}
               {/* <select className={' outline-none w-80 h-9 mt-[30px] relative left-[19%] bg-gray-200 rounded-[7px]'}
                        id={'branch'}>
                    <option selected>Select The Branch</option>
                    <option>Panadura</option>
                    <option>Galle</option>
                </select>*/}
<img src={usernameIMG} className={'w-8 relative top-[31.5%] left-[5%] '}/>
<img src={passwordIMG} className={'w-8 relative top-[40%] left-[5%]'}/>
                <div className={'w-[80%] h-40 absolute left-0 right-0  top-[45%] m-auto'}>
                    <Input type={'username'} name={'username'} label={'username'} placeholder={''} callBack={handleInput} />
                    <Input type={'password'} name={'password'} placeholder={''} label={'password'} callBack={handleInput}/>
                </div>
                {/*<Input type={'username'} name={'username'} label={'username'} placeholder={''} />
                <Input type={'password'} name={'password'} placeholder={''} label={'password'}/>*/}
                <button className="min-btn absolute left-[37%]  bottom-[11%]" onClick={handleLogin}>Sing In</button>
                {
                    errorMsg &&
                    <div className={'bg-red-100 text-center p-2 m-2 absolute bottom-[18%] left-[0%] w-full'}>
                        { errorMsg }
                    </div>
                }
                <span className={'absolute left-[100px] bottom-[20px]'}>Don You Have An Account ?
                    <Link to={"/admin-sing-up"}>
                            <span className={'absolute right-[-32%] top-0 text-blue-700'}>Sing Up</span>
                    </Link>
                </span>
            </div>
        </div>
    </section>
}

export default AdminSingIn;