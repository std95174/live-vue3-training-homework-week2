import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import {instance} from './axios.js';

const app = createApp({
    data() {
        return {
            username: '',
            password: '',
            isLoginSuccess: false,
            message: ''
        };
    },
    methods: {
        async login() {
            try {
                const {data} = await instance.post('/admin/signin', {
                    username: this.username,
                    password: this.password,
                });

                if (!!data.success) {
                    this.isLoginSuccess = true;
                    this.message = '登入成功，頁面跳轉中...'
                    document.cookie = `hexToken=${data.token}; expires=${new Date(data.expired)}; path=/`;
                    // push to home page
                    window.location = 'index.html';
                }
            } catch (e) {
                this.message = '帳號或密碼錯誤'
            }
            // write into cookie
        }
    },
    async created() {

    }
})

app.mount('#app');
