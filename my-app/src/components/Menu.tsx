import { DataNode } from "../interfaces";
import SubMenu from "./SubMenu";

type MenuProps = {
    data: DataNode[];
};

const SideBar = (props: MenuProps) => {
    return (
        <>
         <div className="w-250 bg-grey-800 flex-shrink-0 h-full overflow-auto">
            {props.data.map((item, index) => (
                <SubMenu key={index} item={item} />
            ))}
         </div>
        </>
    );
};

export default SideBar;