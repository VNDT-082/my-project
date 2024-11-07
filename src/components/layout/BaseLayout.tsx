import Footer from "../Footer";
import Header from "../Header";



const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="w-full flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-4">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default BaseLayout;