import React, {CSSProperties, SyntheticEvent, useContext} from 'react';
import DataContext from '../../context/dataContext';
import {IApiResponseData} from "../../models/IApi";

import './SidebarItem.css';

interface ISidebarItemProps {
    dataItem: IApiResponseData;
    disabled: boolean;
}

const selectedItemStyle: CSSProperties = {
  background: '#d8eff1',
  color: '#333'
};

const SidebarItem: React.FC<ISidebarItemProps> = ({ disabled, dataItem }) => {
    const dataContext = useContext(DataContext);
    const { selectedId } = dataContext;

    const handleSelectClick = () => {
        dataContext.selectItem(dataItem, dataItem.id)
    };

    const onDisableClick = (event: SyntheticEvent): void => {
      event.stopPropagation();

      const confirmation: boolean = window.confirm("Вы уверены?");
      if (confirmation) {
        if (dataContext.selectedId === dataItem.id) {
          dataContext.setItemId('');
          dataContext.setItem(null);
        }
        dataContext.disableItem(dataItem);
      } else {
        return;
      }
    };

    const onEnableClick = (event: SyntheticEvent): void => {
      event.stopPropagation();

      const confirmation: boolean = window.confirm("Вы уверены?");
      if (confirmation) {
        dataContext.enableItem(dataItem);
      } else {
        return;
      }
    };

    if(!disabled) {
        return (
          <div className='sidebar-item enabled' onClick={handleSelectClick} style={selectedId === dataItem.id ? selectedItemStyle : {}}>
            <div className="sidebar-item-text">
              <h3>{dataItem.name}</h3>
              <p>{dataItem.shortInfo}</p>
            </div>
            <div className="sidebar-item-button">
              <button className='btn' onClick={onDisableClick}>Disable</button>
            </div>
          </div>
        )
    } else {
        return (
          <div className='sidebar-item disabled'>
            <div className="sidebar-item-text">
              <h3>{dataItem.name}</h3>
              <p>{dataItem.shortInfo}</p>
            </div>
            <div className="sidebar-item-button">
              <button className='btn btn-disabled' onClick={onEnableClick}>Enable</button>
            </div>
          </div>
        )
    }
};

export default SidebarItem;
