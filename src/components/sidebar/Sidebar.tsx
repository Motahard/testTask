import React, { useContext } from 'react';
import DataContext from "../../context/dataContext";
import SidebarItem from "../sidebar-item/SidebarItem";

import "./Sidebar.css"

const Sidebar: React.FC = () => {
    const dataContext = useContext(DataContext);
    const { dataToShow, dataToHide } = dataContext;

    return (
        <div className='sidebar'>
            { dataToShow.map(dataItem => (
              <SidebarItem key={dataItem.id} disabled={false} dataItem={dataItem}/>
            )) }
            { dataToHide.map(dataItem => (
              <SidebarItem key={dataItem.id} disabled={true} dataItem={dataItem}/>
            )) }
        </div>
    )
};

export default Sidebar;
