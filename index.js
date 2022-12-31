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
            } catch (e) {
                alert('請先登入')
                console.log(e)
                window.location = 'login.html';
            }
        },
        async getProducts(){
            try {
                const {data} = await instance.get('/api/frank-hex-api/admin/products');
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
