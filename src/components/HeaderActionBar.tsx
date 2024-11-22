import IconConform from "./core/icons/IconConform";
import IconDelete from "./core/icons/IconDelete";
import IconEdit from "./core/icons/IconEdit";
import IconPen from "./core/icons/IconPen";
import IconSave from "./core/icons/IconSave";

const HeaderActionBar = () => {
    return (
        <div className="w-full p-2 ">
            <div className="bg-blue-800 w-[82%] h-[50px]  p-4 flex items-center  fixed  rounded-md">
                <ul className="flex flex-row">
                    <li>
                        <div className="flex flex-row text-white cursor-pointer">
                            <IconSave />
                            <p>Add</p>
                        </div>
                    </li>

                    <li>
                        <div className="flex flex-row text-white mx-4 cursor-pointer">
                            <IconPen />
                            <p>Update</p>
                        </div>
                    </li>

                    {/* <li>
                        <div className="flex flex-row text-white mx-4">
                            <IconEdit />
                            <p>Update</p>
                        </div>
                    </li> */}

                    <li>
                        <div className="flex flex-row text-white mx-4 cursor-pointer">
                            <IconDelete />
                            <p>Delete</p>
                        </div>
                    </li>

                    <li>
                        <div className="flex flex-row text-white mx-4 cursor-pointer ">
                            <IconConform />
                            <p>Conform</p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>

    )
}
export default HeaderActionBar;