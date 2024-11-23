import { useState } from "react";
import AbpMenu from "../interface/AbpMenu";
import IconHome from "./core/icons/IconHome";
import IconSearch from "./core/icons/IconSearch";
import IconBar from "./core/icons/IconBar";
import IconBarFromLeft from "./core/icons/IconBarFromLeft";
import IconLable from "./core/icons/IconLable";

const SlideBar = () => {

    const listMenu: AbpMenu[] = [
        { menu_name: 'Quản trị hệ thống' },
        { menu_name: 'Thông tin trang' },
        { menu_name: 'Quyền hệ thống' },
        { menu_name: 'Thông tin người dùng' },
        { menu_name: 'Quản lý danh mục' },
        { menu_name: 'Quyền hệ thống1' },
        { menu_name: 'Thông tin người dùng1' },
        { menu_name: 'Quản lý danh mục1' },
        { menu_name: 'Danh mục vùng miền' },
        { menu_name: 'Danh mục phòng' }];

    const [isActive, setIsActive] = useState<string>("");
    const [showFullBar, setShowFullBar] = useState<boolean>(true);
    const [showMenuName, setShowMenuName] = useState<boolean>(true);
    //style={{ transition: 'width 0.3s ease', transform: '0.3s ease' }}
    const handleChangeWidthSlideBar = (showFullBar: boolean) => {
        setShowFullBar(showFullBar);
        setTimeout(() => { setShowMenuName(showFullBar) }, showFullBar ? 270 : 50);
    }
    return (
        <div className={`${showFullBar ? 'w-full' : 'w-[50px]'} transform 
        duration-500 max-w-[320px] bg-blue-800 transition-all `}
        >
            <div className="h-[60px]">VNDT</div>
            <ul className={`${showMenuName ? 'max-h-screen' : ''} scroll-smooth overflow-y-scroll`}>
                <li>
                    <div className="flex flex-row w-full px-3 py-2 items-center justify-end
                    text-white font-bold"
                        onClick={() => handleChangeWidthSlideBar(!showFullBar)}>
                        <p className="w-11/12">{showFullBar ? 'Menu' : ''}</p>
                        {showFullBar ?
                            <IconBar /> : <IconBarFromLeft />}
                    </div>
                </li>

                <li>
                    <div className="flex flex-row w-full px-3 py-2 items-center" onClick={() => { handleChangeWidthSlideBar(true) }}>
                        <div className="absolute">
                            <IconSearch />
                        </div>

                        <input className="w-full h-[25px] text-lg outline-[0.5px] pl-[25px]
                         outline-cyan-400 rounded-sm focus:outline-none" type="text" placeholder="Search..." />
                    </div>
                </li>
                {listMenu.map(item => {
                    return <li className={`text-lg text-white font-bold w-full border-b border-t  hover:scale-105
                         transform 
        duration-1000 transition-all 
                    cursor-pointer ${isActive == item.menu_name ? 'bg-white' : 'bg-transparent'}`}
                        onClick={() => { setIsActive(item.menu_name); handleChangeWidthSlideBar(true); }}>
                        <div className={`h-[4px] w-full rounded-br-full
                            ${isActive == item.menu_name ? 'bg-blue-800' : 'bg-transparent'}`}></div>

                        <p className={`inline-flex w-full  flex-row  px-3 py-2 ${isActive == item.menu_name ? 'font-bold text-blue-950 bg-white' : 'text-white bg-transparent'}  overflow-hidden`}>
                            <IconLable />{showMenuName ? item.menu_name : ''}</p>
                        {isActive == item.menu_name ?
                            <ul>
                                {listMenu.map(subItem => (
                                    <p className={`inline-flex w-full  flex-row  px-3 py-2 ${isActive == item.menu_name ? 'font-bold text-blue-950 bg-white' : 'text-white bg-transparent'}  overflow-hidden`}>
                                        {subItem.menu_name} </p>
                                ))}
                            </ul>
                            : null}
                        <div className={`h-[4px] w-full rounded-tr-full 
                             ${isActive == item.menu_name ? 'bg-blue-800' : 'bg-transparent'}`}></div>
                    </li>
                }
                )}
            </ul>
        </div>
    );
}
export default SlideBar;