// get 'hexToken' from cookie if it existed
const cookie = document.cookie;
const cookieArray = cookie.split(';');
const hexToken = cookieArray.find(item => item.includes('hexToken'));
const token = hexToken.split('=')[1];

export const instance = axios.create({
    baseURL: 'https://vue3-course-api.hexschool.io/v2',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token
    }
});
