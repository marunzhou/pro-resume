<template>
    <Layout description="vue server side render" keywords="sb">
        <div class="formBox">
            <div>
                <label for="">用户名</label>
                <input type="text" v-model="username">
            </div>
            <div>
                <label for="">密码</label>
                <input type="text" v-model="password">
            </div>
            <div>
                <label for="">邮箱</label>
                <input type="text" v-model="email">
            </div>
            <button @click="saveData">提交sb</button>
        </div>
    </Layout>
</template>

<script type="text/babel">
    export default{
        components: {

        },
        data() {
            return {
                username: '',
                password: '',
                email: ''
            }
        },
        methods: {
            saveData(){
                console.log(1111)
                this.$http.get(`${location.origin}/addUser?username=${this.username}&password=${this.password}&email=${this.email}`).then(res=> {
                    console.log('res', res);
                });
            }
        }
    }
</script>