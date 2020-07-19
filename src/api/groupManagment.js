import { ajax } from "../sdk/ajax";
// groupManagment

/* 个体数据 */
export const reqReportList = (data) => ajax("post", "/analyse/eartag/reportList", data)
