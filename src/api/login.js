import { ajax } from "../sdk/ajax";


/* 登录 */
export const reqLogin = (data) => ajax("post", "/", data)

/* 选择组织 */
export const reqOrgChoose = () => ajax("get", "/core/employ-relation/under-list")


export const reqOrganizationId = (data) => ajax("POST", "/core/auth/choose-org",data)
