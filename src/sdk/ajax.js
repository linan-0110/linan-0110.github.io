import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import config from './config'

const { serverAddress } = config

// import DEV from "@/dev_config"; // 导入上线配置
// const { ONLINE_BASE_HREF, SERVER_HREF } = DEV;

Vue.use(VueAxios, axios)


/* 常用ajax封装 （固定URL） */
export const ajax = function (type = "post", url, params) {
    return new Promise((resole, reject) => {
        axios({
            method: type,
            url: serverAddress + url,
            params,
            headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded',
				'x-auth-token': localStorage.getItem("token")
            }
        }).then((res) => {
            resole(res.data);
        }).catch((err) => {
            reject(err);
        });
    });
}
