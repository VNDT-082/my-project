import { useState } from "react";
import AbpMenu from "../interface/AbpMenu";
import IconHome from "./core/icons/IconHome";
import IconSearch from "./core/icons/IconSearch";
import IconBar from "./core/icons/IconBar";
import IconBarFromLeft from "./core/icons/IconBarFromLeft";

const SlideBar = () => {

    const listMenu: AbpMenu[] = [
        { menu_name: 'Quản trị hệ thống' },
        { menu_name: 'Thông tin trang' },
        { menu_name: 'Quyền hệ thống' },
        { menu_name: 'Thông tin người dùng' },
        { menu_name: 'Quản lý danh mục' },
        { menu_name: 'Danh mục vùng miền' },
        { menu_name: 'Danh mục phòng' }];

    const [isActive, setIsActive] = useState<string>("");
    const [showFullBar, setShowFullBar] = useState<boolean>(false)

    return (
        <div className="w-full h-full max-w-[320px] bg-blue-800">
            <div className="h-[60px]">VNDT</div>
            <ul>
                <li>
                    <div className="flex flex-row w-full px-3 py-2 items-center justify-end
                    text-white font-bold"
                        onClick={() => setShowFullBar(!showFullBar)}>
                        <p className="w-11/12">Menu</p>
                        {showFullBar ?
                            <IconBar /> : <IconBarFromLeft />}
                    </div>
                </li>

                <li>
                    <div className="flex flex-row w-full px-3 py-2 items-center">
                        <div className="absolute">
                            <IconSearch />
                        </div>

                        <input className="w-full h-[25px] text-lg outline-[0.5px] pl-[25px]
                         outline-cyan-400 rounded-sm focus:outline-none" type="text" placeholder="Search..." />
                    </div>
                </li>
                {listMenu.map(item => {
                    return <li className={`text-lg text-white font-bold w-full border-b border-t 
                    cursor-pointer ${isActive == item.menu_name ? 'bg-white' : 'bg-transparent'}`}
                        onClick={() => setIsActive(item.menu_name)}>
                        <div className={`h-[4px] w-full rounded-br-full
                            ${isActive == item.menu_name ? 'bg-blue-800' : 'bg-transparent'}`}></div>

                        <p className={`hover:scale-105 flex flex-row  px-3 py-2 ${isActive == item.menu_name ? 'font-bold text-blue-950 bg-white' : 'text-white bg-transparent'}`}>
                            <IconHome />{item.menu_name}</p>
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