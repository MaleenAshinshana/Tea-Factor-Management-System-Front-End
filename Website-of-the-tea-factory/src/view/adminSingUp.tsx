import Logo from "../assets/images/Evergreen_Logo_Primary_Full_4Col.png"
import CustomInput from "../component/input/customInput.tsx";
import axios from "axios";
import Swal from "sweetalert2"
import {useState} from "react";

function AdminSingUp(): JSX.Element {
    /*const [username, setUserName] = useState()<string>("");
    const [email, setEmail] = useState()<string>("");
    const [password, setPassword] = useState()<string>("");*/

    const [username, setUserName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleInput = (e: any, type: string) => {
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
    const saveValidate = () => {
        if (username && email && password) {
            createAdmin();
        } else {
            Swal.fire({
                icon: "error",
                title: "Invalid Inputs",
                text: "Please enter valid inputs"
            });
        }
    }

    const createAdmin = () => {
        const headers = {'Content-Type': 'application/json'}

        let body = {
            username: username,
            email: email,
            password: password
        }
        console.log(body)
        axios.post("http://localhost:8080/admin", body, {headers: headers}).then(r => {
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
        <p className={'text-5xl font-bold font-inter absolute left-[32%] p-7 text-gray-400 top-[25px]'}>Welcome To
            Evergreen</p>
        <div
            className={'bg-white w-[50%] h-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl   drop-shadow-2xl '}>
            <CustomInput type={'username'}
                         name={'username'}
                         label={'username : '} callback={handleInput}
                         placeholder={'Enter Your User Name'}
                         className={'bg-gray-200  w-80 h-10 relative left-[35%] mt-[30px] top-[70px] rounded-[3px] outline-none border focus:border-gray-500'}/>
            <CustomInput type={'email'} name={'email'} label={'email : '} placeholder={'Enter Your Email'}
                         className={'bg-gray-200  w-80 h-10 flex  relative left-[35%] mt-[30px] top-[70px] rounded-[3px] outline-none border focus:border-gray-500'}
                         callback={handleInput}/>
            <CustomInput type={'password'} name={'password'} label={'password : '} placeholder={'Enter Your Password'}
                         className={'bg-gray-200  w-80 h-10 flex   relative left-[35%] mt-[30px] top-[70px] rounded-[3px] outline-none border focus:border-gray-500'}
                         callback={handleInput}/>

            <button className={'min-btn  left-[43%] top-[20%]'} onClick={saveValidate}>Sing Up</button>
        </div>
    </section>
}

export default AdminSingUp;