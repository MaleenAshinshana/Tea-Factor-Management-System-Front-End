import usernameIMG from "../assets/images/download__13_-removebg-preview.png";
import passwordIMG from "../assets/images/download__14_-removebg-preview.png";
import Email from "../assets/images/email.png";
import {Link} from "react-router-dom";

import CustomInput from "../component/input/customInput";
import {useState} from "react";
import Swal from "sweetalert2";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import * as validator from "../util/validator";

function Register() {

    const navigate=useNavigate();

    const [username, setUserName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [errorMsg,setErrorMsg]=useState('');

    const handleSingIn=():void=>{
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

        if(isValidInput){
            const header={'Content-Type': 'application/json'}
            let body={
                username:username,
                password:password
            }
            axios.post("http://localhost:8080/user/auth",body,{headers:header}).then(r=>{
                Cookies.set("token",r.data.data.access_token);
                Cookies.set("user",JSON.stringify(r.data.data.user));
                navigate("/teaProduct");
            }).catch(e=>{
                Swal.fire({
                    icon: "error",
                    title: "Sorry!",
                    text: "Something went wrong"
                });
            })
        }
        else {
            setErrorMsg(errorMsg);
        }


    }
    const handleSingUpInput = (e: any, type: string) => {
        switch (type) {
            case 'username':
                setUserName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
        }
    }
    const singUpValidate = () => {
        if (username && email && password) {
            register();
        } else {
            Swal.fire({
                icon: "error",
                title: "Invalid Inputs",
                text: "Please enter valid inputs"
            });
        }
    }
    const register = () => {
        const headers = {'Content-Type': 'application/json'}

        let body = {
            username: username,
            email: email,
            password: password
        }
        console.log(body)
        axios.post("http://localhost:8080/user", body, {headers: headers}).then(r => {
            Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Account Created!"
            });
        }).catch(err => {
            Swal.fire({
                icon: "error",
                title: "Sorry!",
                text: "Something went wrong"
            });
        })
    }


    return <section className={'w-full h-screen  bg-gray-300 '}>
        <div className={'w-[50%] h-24 absolute left-0 right-0  top-[30px] m-auto'}>
            <h1 className={' text-[50px] font-bold font-Helvetica flex items-center justify-center text-[#98A86D]'}>Welcome
                To Evergreen</h1>
            <div className={'w-full h-[1px] bg-[#761D1E]'}></div>

        </div>
        <div
            className={'w-[40%] h-[60%] bg-white absolute top-0 bottom-0 m-auto left-[30px] rounded-[10px] shadow-2xl'}>
            <h1 className={'text-gray-300 text-[40px] font-bold flex items-center justify-center relative top-[30px] font-sans'}>Sing
                In</h1>
            <div className={'w-[70%] h-[50%] absolute left-0 right-0 top-0 bottom-0 m-auto'}>
                <CustomInput type={'text'} name={'username'} placeholder={'Enter Your User Name'} callback={handleSingUpInput}
                             className={'w-full h-full border-[2px] border-gray-300 outline outline-0 focus:outline-0'}/>
                <CustomInput type={'password'} name={'password'} placeholder={'Enter Your Password'} callback={handleSingUpInput}
                             className={'w-full h-full border-[2px] border-gray-300 outline outline-0 focus:outline-0 mt-8'}/>
                {/*<input
                    name="username"
                    type="text"
                    placeholder="Enter Your User Name"
                    className={`w-full h-[20%] border-[2px] border-gray-300 outline outline-0 focus:outline-0  `}

                />


                <input
                    name="password"
                    type="password"
                    placeholder="Enter Your Password"
                    className={`w-full h-[20%] border-[2px] border-gray-300 outline outline-0 focus:outline-0 mt-8  `}
                />*/}

                <button
                    className={'w-full h-[25%] bg-black text-white absolute bottom-[10%] left-0 text-[20px] hover:bg-[#98A86D]'} onClick={handleSingIn}>Sing
                    In
                </button>
                {
                    errorMsg &&
                    <div className={'bg-red-100 text-center p-2 m-2 absolute bottom-[-13%] left-[-2%] w-full'}>
                        { errorMsg }
                    </div>
                }
            </div>
            <img src={usernameIMG} className={'w-10 relative top-[12%] left-[6%]'}/>
            <img src={passwordIMG} className={'w-10 relative top-[20%] left-[6%]'}/>
        </div>

        <div
            className={'w-[40%] h-[60%] bg-white absolute top-0 bottom-0 m-auto right-[30px] rounded-[10px] shadow-2xl'}>
            <h1 className={'text-gray-300 text-[40px] font-bold flex items-center justify-center relative top-[30px] font-sans'}>Sing
                Up</h1>
            <div className={'w-[70%] h-[60%] absolute left-0 right-0 top-[10%] bottom-0 m-auto'}>
                <CustomInput type={'text'} name={'username'} placeholder={'Enter Your User Name'}
                             className={'w-full h-full border-[2px] border-gray-300 outline outline-0 focus:outline-0'}
                             callback={handleSingUpInput}/>
                <CustomInput type={'email'} name={'email'} placeholder={'Enter Your Email'}
                             className={'w-full h-full border-[2px] border-gray-300 outline outline-0 focus:outline-0 mt-7'}
                             callback={handleSingUpInput}/>
                <CustomInput type={'password'} name={'password'} placeholder={'Enter Your Password'}
                             className={'w-full h-full border-[2px] border-gray-300 outline outline-0 focus:outline-0 mt-16'}
                             callback={handleSingUpInput}/>

                {/*<CusInput type={'text'} name={'username'} placeholder={'Enter Your User Name'} />
                <CusInput type={'text'} name={'username'} placeholder={'Enter Your Email'}/>
                <CusInput type={'text'} name={'username'} placeholder={'Enter Your Password'}/>*/}

                {/* <input
                    name="username"
                    type="text"
                    placeholder="Enter Your User Name"
                    className={`w-full h-[20%] border-[2px] border-gray-300 outline outline-0 focus:outline-0  `}


                />

                <input
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    className={`w-full h-[20%] border-[2px] border-gray-300 outline outline-0 focus:outline-0 mt-8  `}

                />
                <input
                    name="password"
                    type="password"
                    placeholder="Enter Your Password"
                    className={`w-full h-[20%] border-[2px] border-gray-300 outline outline-0 focus:outline-0 mt-8  `}

                />*/}


            </div>
            <img src={usernameIMG} className={'w-10 relative top-[12%] left-[6%]'}/>
            <img src={Email} className={'w-10 relative top-[23%] left-[6%]'}/>
            <img src={passwordIMG} className={'w-10 relative top-[34%] left-[6%]'}/>
            <button
                className={'w-[70%] h-[13%] bg-black text-white absolute bottom-[5%] left-0 right-0 m-auto text-[20px] hover:bg-[#98A86D]'} onClick={singUpValidate}>Sing
                Up
            </button>
        </div>
        <div className={'w-[300px] h-16 absolute left-0 right-0  bottom-[5%] m-auto'}>
            <Link to={'/'}>
                <button
                    className={'w-full h-full border-[2px] border-white-500 bg-transparent text-[20px] text-white hover:text-black hover:border-black'}>Back
                    To Dash Board
                </button>
            </Link>


        </div>
    </section>
}

export default Register;