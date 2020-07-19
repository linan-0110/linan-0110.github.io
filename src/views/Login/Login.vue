<template>
    <div class="login">
        <div class="shade">
            <header class="header">
                <img class="logo" src="../../assets/logo.png"/>
                某某科技公司
            </header>
            <article class="article">
                <h1>登录界面</h1>
                <el-form label-position="right" label-width="80px" :model="form">
                    <el-form-item label="账号：">
                        <el-input v-model="form.userName" placeholder="请输入账号"></el-input>
                    </el-form-item>
                    <el-form-item label="密码：">
                        <el-input v-model="form.userPwd" placeholder="请输入密码" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSignIn">登录</el-button>
                    </el-form-item>
                </el-form>
            </article>
        </div>
    </div>
</template>
<script>
// import { reqLogin } from "@/api/login";

export default {
    name: "login",
    data() {
        return {
            form: {
                userName: "yjj",
                userPwd: "147414"
            }
        };
    },
    created() {},
    mounted() {},
    methods: {
        /* 登录按钮 */
        onSignIn() {
            console.log(this.form);
            // reqLogin(this.form)
            //     .then(res => {
            //         console.log(res);
            //         localStorage.setItem("token", res.token);
            //     })
            //     .catch(err => {
            //         console.log("登录失败", err);
            //     });

            this.$router.push("/home");
        }
    }
};
</script>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100%;
    background: url(../../assets/login_bg.jpg) 0 0 no-repeat;
    background-size: 100%;
    .shade {
        height: 100%;
        width: 100%;
        background-color: #8899aa44;
        display: flex;
        flex-direction: column;
        align-items: center;
        .header {
            font-size: 60px;
            color: #eee;
            margin: 180px 0 50px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            .logo {
                height: 70px;
                width: 70px;
                margin-right: 20px;
            }
        }
        .article {
            width: 400px;
            background-color: #ffffff44;
            padding: 20px 60px 40px 20px;
            border-radius: 20px;
            h1 {
                font-size: 20px;
                color: #eee;
                margin-left: 25px;
            }
            // /deep/ .el-form-item .el-form-item__label {
            //     color: #eee;
            // }
        }
    }
}
</style>