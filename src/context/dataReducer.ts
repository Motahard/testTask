import {IDataState} from "../models/IApi";

interface IAction {
    type: string;
    payload: any;
}

export default (state: IDataState, action: IAction) => {
    switch (action.type) {
        case "INIT": {
            return {
                ...state,
                data: action.payload,
                dataToShow: action.payload
            }
        }
        case "DISABLE_ITEM": {
            return {
                ...state,
                dataToHide: [...state.dataToHide, action.payload],
                dataToShow: state.dataToShow.filter(item => action.payload.id !== item.id)
            }
        }
        case "ENABLE_ITEM": {
            return {
                ...state,
                dataToShow: [...state.dataToShow, action.payload],
                dataToHide: state.dataToHide.filter(item => action.payload.id !== item.id)
            }
        }
        case "SELECTED_ID": {
            return {
                ...state,
                selectedId: action.payload
            }
        }
        case "SELECT_ITEM": {
            return {
                ...state,
                selectedItem: action.payload
            }
        }
        default: {
            return state;
        }
    }
};
