import Footer from "../Footer";
import Header from "../Header";
import HeaderActionBar from "../HeaderActionBar";
import SlideBar from "../SlideBar";



const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="w-full flex flex-col min-h-screen">
            <main className=" flex flex-row">
                <div className="w-2/12 h-screen fixed">
                    <SlideBar />
                </div>
                <div className="w-2/12 h-screen">
                </div>
                <div className="flex flex-col w-10/12">
                    <HeaderActionBar />
                    <div className="p-4 h-[1500px] mt-[60px]">
                        {children}
                    </div>
                    <Footer />
                </div>

            </main>

        </div>
    );
};

export default BaseLayout;