import {IDataStateFunctions} from "./IApi";

export const url: string = 'https://mrsoft.by/tz20/list.json';
export const basepath: string = 'https://mrsoft.by/tz20';
export const corsAnywhere: string = 'https://cors-anywhere.herokuapp.com/';

export const initialState: IDataStateFunctions = {
  data: [],
  dataToShow: [],
  dataToHide: [],
  selectedId: '',
  selectedItem: null,
  initData() {},
  disableItem() {},
  enableItem() {},
  selectItem() {},
  setItemId() {},
  setItem() {}
};
