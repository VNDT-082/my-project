import AbpMenu from "../interface/AbpMenu";

const SlideBar = () => {

    const listMenu: AbpMenu[] = [
        { menu_name: 'Quản trị hệ thống' },
        { menu_name: 'Thông tin trang' },
        { menu_name: 'Quyền hệ thống' },
        { menu_name: 'Thông tin người dùng' },
        { menu_name: 'Quản lý danh mục' },
        { menu_name: 'Danh mục vùng miền' },
        { menu_name: 'Danh mục phòng' }];
    return (
        <div className="w-full h-full max-w-[320px] bg-blue-800">
            <div className="h-[60px]">VNDT</div>
            <ul>
                {listMenu.map(item => {
                    return <li className="text-lg text-white font-bold my-0
                    px-3 py-2 w-full border-b border-t hover:scale-105 cursor-pointer">
                        <p >
                            {item.menu_name}
                        </p>
                    </li>
                }
                )}
            </ul>
        </div>
    );
}
export default SlideBar;