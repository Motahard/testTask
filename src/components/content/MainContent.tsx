import React, {useContext} from 'react';
import DataContext from '../../context/dataContext';
import Loading from "../layout/Loading";
import {basepath} from "../../models";

import './MainContent.css';

const MainContent: React.FC = () => {
  const dataContext = useContext(DataContext);
  const { selectedId, selectedItem } = dataContext;

  if (selectedId === selectedItem?.id) {
    return (
      <div className='main-content'>
        <div className="main-content-img">
          <img src={basepath + selectedItem?.pic} alt=""/>
        </div>
        <div className="main-content-text">
          <h2>{selectedItem?.name}</h2>
          <h5>{selectedItem?.shortInfo}</h5>
          <p>{selectedItem?.bio}</p>
        </div>
      </div>
    )
  } else if (selectedId && !selectedItem) {
    return (<Loading/>);
  } else {
    return null;
  }
};

export default MainContent;
