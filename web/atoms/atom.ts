import { atom } from "recoil"
import { deleteData, getData, listData, postData, updateData } from "../pages/api/axios"

export const isMonthState = atom({
    key: "isMonthState",
    default: false
})

export const sideBarState = atom<boolean>({
    key: "sideBarState",
    default: false,
})

export const changeValueState = atom<boolean>({
    key: "changeValue",
    default: false,
})

export const postState = atom<postData>({
    key: "postState",
    default: {
        Payer: "",
        Month:0,
        Food: "",
        Method: "Cash",
        Expense: 0,
    }
})

export const getState = atom<getData>({
    key: "getState",
    default: {ID: 0},
})

export const getAllState = atom({
    key: "getAllState",
    default: [],
})

export const getMonthState = atom({
    key: "getMonthState",
    default: []
})

export const listState = atom<listData>({
    key: "listState",
    default: {
        Limit: 5,
        Offset: 0,
    },
})

export const updateState = atom<updateData>({
    key: "updateState",
    default: {
        ID: 0,
        Expense: 0,
    },
})

export const deleteState = atom<deleteData>({
    key: "deleteState",
    default: {
        ID: 0,
    },
})