import { Link } from "react-router-dom";
import BaseLayout from "../components/layout/BaseLayout";
import SlideBar from "../components/SlideBar";

const HomePage = () => {
    return (
        <BaseLayout>
            <p>Home page</p>
            <Link to="/login">Login</Link>
        </BaseLayout>
    );

}

export default HomePage;