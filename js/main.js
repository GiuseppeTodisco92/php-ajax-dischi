const app = new Vue({
    el: '#app',
    data: {
        albums: [],
    },
    created(){
        axios.get('http://localhost/php-ajax-dischi/server/api.php')
        .then((response) => {
            this.albums = response.data;
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    },
});