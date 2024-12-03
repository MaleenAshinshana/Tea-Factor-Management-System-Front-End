import logo from "../assets/images/Evergreen_Logo_Primary_Full_4Col.png"
import main from "../assets/images/regulaar.jpg"
import Input from "../component/input/input.tsx";
import {Link} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import {useState} from "react";
import * as validator from "../util/validator";

function UserSingIn():JSX.Element {
    const  navigate=useNavigate();
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
            axios.post("http://localhost:8080/owner/auth",body,{headers:header}).then(r=>{
                Cookies.set("token",r.data.access_token);
                Cookies.set("owner",JSON.stringify(r.data.data.user));
                navigate("/user-tea-leaves");
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
        <img src={logo} className={'w-48 relative top-[5px] '}/>
        <p className={'font-bold text-gray-500 text-4xl font-mono relative left-[40%] top-[30px] w-[50%]'}>Welcome To
            Evergreen</p>
        <div
            className={'bg-white w-[60%] h-[65%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl   drop-shadow-2xl '}>
            <div className={'w-[50%]  h-[80%] bg-gray-600 relative left-[20px] top-[50px] rounded-[7px]'}>
                <img src={main} className={'w-screen h-full '}/>
            </div>
            <div className={' w-[48%] h-full absolute right-0 top-0 '}>
                <p className={' text-gray-500 text-center relative top-[80px] font-bold font-mono text-[40px]'}>Sing
                    In</p>
                <div className={'w-full h-[60%] relative top-[20%]'}>
                    <Input type={'username'} name={'username'} placeholder={''} label={'username'} callBack={handleInput}/>
                    <Input type={'password'} name={'password'} placeholder={''} label={'Password'} callBack={handleInput}/>
                    {/*<button className={'min-btn left-[35%]'}>Sing In</button>*/}
                    {/*<Link to={"/user-tea-leaves"}>*/}
                        <button className={'min-btn left-[35%] bottom-[-5%]'} onClick={handleLogin}>Sing In</button>
                   {/* </Link>*/}
                    {
                        errorMsg &&
                        <div className={'bg-red-100 text-center p-2 m-2 absolute bottom-[45%] left-[-2%] w-full'}>
                            { errorMsg }
                        </div>
                    }

                </div>
                <span className={'absolute bottom-[12%] left-[20%]'}>Don You Have An Account?
                   <Link to={"/user-sing-up"}>
                       <span className={'text-blue-700 relative left-[10px]'}>Sing Up</span>
                   </Link>

               </span>
            </div>
        </div>

    </section>
}

export default UserSingIn;