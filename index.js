import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import {instance} from './axios.js';

const app = createApp({
    data() {
        return {
            products: [],
            selectedProduct: {},
        };
    },
    methods: {
        async checkUser(){
            try {
                const {data} = await instance.post('/api/user/check');
                if (data.success) {
                    console.log('驗證通過')
                }
            } catch (e) {
                alert('請先登入')
                console.log('驗證失敗，請重新登入')
                window.location = 'login.html';
            }
        },
        async getProducts(){
            try {
                const {data} = await instance.get('/api/frank-hex-api/admin/products');
                console.log(data)
                if (data.success) {
                    this.products = data.products;
                }
            } catch (e) {
                console.log(e)
            }
        }
    },
    async created() {
        await this.checkUser()
        await this.getProducts()
    }
})

app.mount('#app');
