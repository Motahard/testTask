import DataContext from "./dataContext";
import React, {useReducer} from "react";
import dataReducer from "./dataReducer";
import {IApiResponseData, IDataStateFunctions} from "../models/IApi";
import {basepath, corsAnywhere, initialState} from "../models";

const DataState: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(dataReducer, initialState);

    const initData = (data: IApiResponseData[]): void => {
        dispatch({
            type: "INIT",
            payload: data
        });
    };

    const getAndSetSelectedItem = (item: IApiResponseData) => {
        fetch(corsAnywhere + basepath + item.more)
          .then(res => res.json())
          .then(data => {
              return  {
                  ...item,
                  ...data
              };
          })
          .then(selectedItem => {
              setItem(selectedItem);
          })
          .catch(error => window.alert(error.message))
    };

    const setItemId = (id: string) => {
        dispatch({
            type: "SELECTED_ID",
            payload: id
        });
    };

    const setItem = (item: IApiResponseData | null) => {
        dispatch({
            type: "SELECT_ITEM",
            payload: item
        });
    };

    const selectItem = (item: IApiResponseData, id: string) => {
        setItemId(id);

        if (!state.selectedItem) {
            getAndSetSelectedItem(item);
        } else if (state.selectedId !== item.id) {
            getAndSetSelectedItem(item);
        }
    };

    const disableItem = (item: IApiResponseData): void => {
        dispatch({
            type: "DISABLE_ITEM",
            payload: item
        });
    };

    const enableItem = (item: IApiResponseData): void => {
        dispatch({
            type: "ENABLE_ITEM",
            payload: item
        });
    };

    const valueState: IDataStateFunctions= {
        data: state.data,
        dataToShow: state.dataToShow,
        dataToHide: state.dataToHide,
        selectedId: state.selectedId,
        selectedItem: state.selectedItem,
        initData,
        disableItem,
        enableItem,
        selectItem,
        setItemId,
        setItem
    };

    return (
        <DataContext.Provider value={valueState}>
            {children}
        </DataContext.Provider>
    )
};

export default DataState;
