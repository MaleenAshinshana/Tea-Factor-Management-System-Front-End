import Logo from "../assets/images/Evergreen_Logo_Primary_Full_4Col.png";

import Input from "../component/input/input.tsx";
/*import {Link} from "react-router-dom";*/
import adminImg from "../assets/images/businessman_6997519-removebg-preview.png";
import usernameIMG from "../assets/images/download__13_-removebg-preview.png";
import passwordIMG from "../assets/images/download__14_-removebg-preview.png";
import Email from "../assets/images/email.png";
import phone from "../assets/images/phone.png";
import Branch from "../assets/images/branch.png";
import Type from "../assets/images/type.png";
import axios from "axios";
import Swal from "sweetalert2"
import {useState} from "react";


function UserSingUp(): JSX.Element {
    const [username, setUserName] = useState<string>("");
    const [usertype, setUserType] = useState<string>("");
    const [branch, setBranch] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [contact_number1, setContact_number1] = useState<string>("");
    const [contact_number2, setContact_number2] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleInput = (e: any, type: string) => {
        switch (type) {
            case 'name':
                setUserName(e.target.value);
                break;
            case 'type':
                setUserType(e.target.value);
                break;
            case 'branch':
                setBranch(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'contact1':
                setContact_number1(e.target.value);
                break;
            case 'contact2':
                setContact_number2(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;

        }
    }
    /*const handleSelector = (e: any, type: string) => {
        switch (type) {
            case 'type':
                setUserType(e.target.value);
                break;
            case 'branch':
                setBranch(e.target.value);
                break;
        }
    }*/
    const saveValidate = () => {
        if (username && usertype && branch && contact_number1 && contact_number2 && email && password) {
            createAccount();
        } else {
            Swal.fire({
                icon: "error",
                title: "Invalid Inputs",
                text: "Please enter valid inputs"
            });
        }
    }
    const createAccount = () => {
        const headers = {'Content-Type': 'application/json'}
        let body = {
            username: username,
            usertype: usertype,
            branch: branch,
            email: email,
            contact_number1: contact_number1,
            contact_number2: contact_number2,
            password: password
        }
        console.log(body);
        axios.post("http://localhost:8080/owner/save", body, {headers: headers}).then(r => {
            Swal.fire({
                icon: "success",
                title: "Success!",
                text: "User saved successfully!"
            });
        }).catch(err => {
            Swal.fire({
                icon: "error",
                title: "Sorry!",
                text: "Something went wrong"
            });
        })

    }


    return <section className={'bg-gray-200 w-full h-screen'}>
        <img src={Logo} className={'w-56 p-2'}/>
        {/*<p className={'text-5xl font-bold font-inter absolute left-[32%] p-7 text-gray-400 top-[25px]'}>Welcome To
            Evergreen</p>*/}
        <div
            className={'bg-white w-[50%] h-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl   drop-shadow-2xl '}>
            {/*<p className={'font-bold text-black text-2xl flex items-center justify-center relative top-[20px] font-mono'}>Sing
                Up</p>*/}
            {/* <label className={'font-bold text-[20px] relative left-[10px] top-[10px]'}>Register Number :
                <label className={' relative left-[5%]'}>0001</label>
            </label>*/}
            <div className={' w-[70%] h-full  absolute left-0 right-0 top-0 bottom-0 m-auto'}>
                <img src={adminImg} className={'w-[24%] absolute left-0 right-0 m-auto mt-2'}/>
                <img src={usernameIMG} className={'w-[5%] absolute top-[22%] left-[10%]'}/>
                <img src={Type} className={'w-[5%] absolute top-[33%] left-[10%]'}/>
                <img src={Branch} className={'w-[5%] absolute top-[43%] left-[10%]'}/>
                <img src={phone} className={'w-[5%] absolute top-[53%] left-[10%]'}/>
                <img src={phone} className={'w-[5%] absolute top-[63%] left-[10%]'}/>
                <img src={Email} className={'w-[5%] absolute top-[74%] left-[10%]'}/>
                <img src={passwordIMG} className={'w-[5%] absolute top-[85%] left-[10%]'}/>
                <div className={'w-full h-[83%] absolute left-0 right-0 bottom-0 m-auto'}>
                    <Input type={'name'} name={'name'} placeholder={''} label={'Name'} callBack={handleInput}/>
                    <Input type={'type'} name={'type'} placeholder={''} label={'Type'} callBack={handleInput}/>
                    <Input type={'branch'} name={'branch'} placeholder={''} label={'Branch'} callBack={handleInput}/>
                   {/*  <select className={' outline-none w-80 h-9 mt-[30px] relative left-[20%] bg-gray-200 rounded-[7px]'} onChange={(e) => handleSelector(e, 'type')}
                            id={'type'}>
                        <option disabled>Select The Type</option>
                        <option>Galle</option>
                    </select>
                    <select className={' outline-none w-80 h-9 mt-[30px] relative left-[20%] bg-gray-200 rounded-[7px]'} onChange={(e) => handleSelector(e, 'branch')}
                            id={'branch'}>
                        <option disabled>Select The Branch</option>
                        <option>Galle</option>
                    </select>*/}
                    <Input type={'contact1'} name={'contact1'} placeholder={''} label={'contact number 1'}
                           callBack={handleInput}/>
                    <Input type={'contact2'} name={'contact2'} placeholder={''} label={'contact number 2'}
                           callBack={handleInput}/>
                    <Input type={'email'} name={'email'} placeholder={''} label={'email'} callBack={handleInput}/>
                    <Input type={'password'} name={'password'} placeholder={''} label={'password'}
                           callBack={handleInput}/>
                </div>
                {/*<Input type={'name'} name={'name'} placeholder={''} label={'Name'}/>
                <select className={' outline-none w-80 h-9 mt-[30px] relative left-[20.5%] bg-gray-200 rounded-[7px]'}
                        id={'type'}>
                    <option selected>Select The Type</option>
                    <option>#</option>
                    <option>Galle</option>
                </select>
                <select className={' outline-none w-80 h-9 mt-[30px] relative left-[20.5%] bg-gray-200 rounded-[7px]'}
                        id={'branch'}>
                    <option selected>Select The Branch</option>
                    <option>#</option>
                    <option>Galle</option>
                </select>
                <Input type={'contact1'} name={'contact1'} placeholder={''} label={'contact number 1'}/>
                <Input type={'contact2'} name={'contact2'} placeholder={''} label={'contact number 2'}/>*/}
                {/*<Link to={"/user-sing-in"}>*/}
                <button className={'min-btn absolute left-0 right-0 m-auto'} onClick={saveValidate}>Sing Up</button>
                {/*  </Link>*/}


            </div>


        </div>
    </section>
}

export default UserSingUp;