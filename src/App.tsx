import React, { useContext, useEffect } from "react";
import DataContext from "./context/dataContext";
import {corsAnywhere, url} from "./models";
import {IApiResponse} from "./models/IApi";
import Sidebar from "./components/sidebar/Sidebar";
import MainContent from "./components/content/MainContent";
import './App.css';

const App: React.FC = () => {
  const dataContext = useContext(DataContext);

  useEffect(() => {
          fetch(corsAnywhere + url)
              .then<IApiResponse>(resFetch => resFetch.json())
              .then(res => res.data)
              .then(arr => dataContext.initData(arr));
          //eslint-disable-next-line
  }, []);

  return (
      <div className='container'>
          <Sidebar/>
          <MainContent/>
      </div>
  );
};

export default App;
