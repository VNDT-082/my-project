import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { showNotification } from "../redux/notificationSlice";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { NotificationContext } from "../components/context/NotificationContext";
import { transform } from "typescript";
import FormControl from "../components/core/FormControl";

const LoginPage = () => {
    const dispatch = useDispatch();
    // const handleShowNotification = () => {
    //     dispatch(showNotification("This is a toast notification!"));
    // };

    const notifyContext = useContext(NotificationContext);
    if (!notifyContext) {
        throw new Error('SomeComponent must be used within a NotifyProvider');
    }
    const { notifyValue, notifyStyle, showNotification } = notifyContext;

    return (
        <>
            <div className="w-full h-full fixed bg-white flex justify-center items-center">
                <div className="w-10/12 sm:w-8/12 md:w-8/12 lg:w-3/12 bg-blue-800 rounded-md min-w-[320px]
                shadow-blue-950 shadow-md">
                    <div className="w-full h-full flex justify-center px-[20px] py-[20px]">
                        <form className="w-full h-full">
                            <p className="text-lg font-bold text-white text-center my-2">Sign up</p>
                            <div className="my-4 flex justify-center items-center ">
                                <FormControl key={'fullname'} label="Full name" />
                            </div>

                            <div className="my-4 flex justify-center items-center ">
                                <FormControl key={'username'} label="User name" />
                            </div>

                            <div className="my-4 flex justify-center items-center ">
                                <FormControl key={'password'} label="Password" />
                            </div>

                        </form>
                    </div>
                    <div className="bg-white">
                        <form>
                            <p>Login</p>
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