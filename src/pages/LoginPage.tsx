import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { showNotification } from "../redux/notificationSlice";
import { ToastContainer } from "react-toastify";
import { useContext, useState } from "react";
import { NotificationContext } from "../components/context/NotificationContext";
import { transform } from "typescript";
import FormControl from "../components/core/FormControl";

const LoginPage = () => {
    const dispatch = useDispatch();
    // const handleShowNotification = () => {
    //     dispatch(showNotification("This is a toast notification!"));
    // };
    const [isFormLogin, setIsFormLogin] = useState<boolean>(true);
    const notifyContext = useContext(NotificationContext);
    if (!notifyContext) {
        throw new Error('SomeComponent must be used within a NotifyProvider');
    }
    const { notifyValue, notifyStyle, showNotification } = notifyContext;

    return (
        <>
            <div className="w-full h-full fixed bg-white flex justify-center items-center"
                style={{ backgroundImage: "url('bg.jpg')" }}>
                <div className="w-10/12 sm:w-8/12 md:w-8/12 lg:w-3/12 bg-blue-800 rounded-md min-w-[320px]
                shadow-blue-950 shadow-md max-h-[360px] h-[360px] overflow-hidden relative">
                    <div className="w-full h-full flex justify-center px-[20px] py-[20px] absolute">
                        {isFormLogin ? <p className="text-lg font-bold text-white text-center my-2 cursor-pointer
                            hover:scale-[1.01]"
                            onClick={() => setIsFormLogin(false)}>Sign up</p> : null}
                        <form className={`w-full h-full ${!isFormLogin ? '' : 'hidden'}`}>
                            <p className="text-lg font-bold text-white text-center my-2 cursor-pointer
                            hover:scale-105"
                                onClick={() => setIsFormLogin(false)}>Sign up</p>
                            <div className="my-4 flex justify-center items-center ">
                                <FormControl key={'fullname'} label="Full name" className="input_form_element"
                                    labelType={0} type="text" />
                            </div>

                            <div className="my-4 flex justify-center items-center ">
                                <FormControl key={'username'} label="User name" className="input_form_element"
                                    labelType={0} type="text" />
                            </div>

                            <div className="my-4 flex justify-center items-center ">
                                <FormControl key={'password'} label="Password " className="input_form_element"
                                    labelType={0} type="password" />
                            </div>

                            <div className="my-4 flex justify-center items-center px-4 ">
                                <button className="w-full my-2 bg-blue-600 h-[30px]
                                rounded-md hover:bg-blue-700 hover:shadow-sm shadow-blue-950
                                hover:font-bold hover:text-white">Sign up</button>
                            </div>

                        </form>
                    </div>
                    <div className={`w-full h-full flex justify-center px-[20px] py-[20px] bg-white
                    rounded-t-md
                      shadow-sm shadow-gray-400 absolute transition-transform duration-500 z-20 ease-in-out
                      ${isFormLogin ? 'transform -translate-y-[180px] mt-[250px] ' : 'mt-[290px]'} `}>
                        {!isFormLogin ? <p className="text-lg font-bold text-blue-950 text-center my-2 cursor-pointer
                            hover:scale-[1.01] "  onClick={() => setIsFormLogin(true)}>Login</p> : null}

                        <form className={`w-full h-full ${!isFormLogin ? 'hidden' : ''}`}>
                            <p className="text-lg font-bold text-blue-950 text-center my-2 cursor-pointer
                            hover:scale-105 " onClick={() => setIsFormLogin(true)}>Login</p>
                            <div className="my-4 flex justify-center items-center ">
                                <FormControl key={'username'} label="User name" className="input_form_element_v2"
                                    labelType={1} type="text" />
                            </div>

                            <div className="my-4 flex justify-center items-center ">
                                <FormControl key={'password'} label="Password " className="input_form_element_v2"
                                    labelType={1} type="password" />
                            </div>

                            <div className="my-4 flex justify-center items-center px-4 ">
                                <button className="w-full my-2 bg-blue-600 h-[30px]
                                rounded-md hover:bg-blue-700 hover:shadow-sm shadow-blue-950
                                hover:font-bold hover:text-white">Login</button>
                            </div>
                            <div className="my-4 flex justify-center items-center px-4 ">
                                <button className="hover:scale-105">Forgot password</button>
                            </div>

                        </form>
                    </div>
                </div>


                {/* <p>Login page</p>
            <button onClick={() => showNotification('aaaaa')}>toast</button>
            <Link to={'/'} onClick={() => showNotification('aaaaa')}>Home</Link> */}

            </div>


        </>
    );

}

export default LoginPage;