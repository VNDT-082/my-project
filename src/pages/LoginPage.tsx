import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { showNotification } from "../redux/notificationSlice";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { NotificationContext } from "../components/context/NotificationContext";

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
            <p>Login page</p>
            <button onClick={() => showNotification('aaaaa')}>toast</button>
            <Link to={'/'} onClick={() => showNotification('aaaaa')}>Home</Link>
        </>
    );

}

export default LoginPage;