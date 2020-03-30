export interface IApiResponse {
    basepath: string;
    data: IApiResponseData[];
}

export interface IApiResponseID {
    id: string;
}

export interface IApiResponseData extends IApiResponseID{
    name: string;
    shortInfo: string;
    more: string;
}

export interface IApiResponseMoreData extends IApiResponseID{
    bio: string;
    pic: string;
}

export interface IDataState {
    data: IApiResponseData[];
    dataToShow: IApiResponseData[];
    dataToHide: IApiResponseData[];
    selectedId: string;
    selectedItem: IApiResponseData & IApiResponseMoreData | null;
}

export interface IDataStateFunctions extends IDataState{
    initData: Function;
    disableItem: Function;
    enableItem: Function;
    selectItem: Function;
    setItemId: Function;
    setItem: Function;
}

