$(function () {
    $('.tracks').hide();
    $('.albums').hide();
    $('.bands').hide();
    const api = '/api/v1'
    let vue = new Vue({
        el: '#app',
        data: {
            message: '123',
            bands: [],
            albums: [],
            tracks: [],
            current: ''
        },
        methods: {
            getBands: function () {
                $(vue.current).toggle();
                console.log(vue.current);
                vue.current = '.bands'
                $(vue.current).show();
                axios.get(api + '/bands')
                    .then(data => {
                        vue.bands = data.data;
                    })
                    .catch(err => {
                        alert('err');
                        console.log(err);
                    });
            },
            getAlbums: function () {
                $(vue.current).hide();
                vue.current = '.albums'
                $(vue.current).show(); 
                axios.get(api + '/albums')
                    .then(data => {
                        vue.albums = data.data;
                    })
                    .catch(err => {
                        alert('err');
                        console.log(err);
                    });
            },
            getTracks: function () {
                $(vue.current).hide();
                vue.current = '.tracks'
                $(vue.current).show();
                axios.get(api + '/tracks')
                    .then(data => {
                        vue.tracks = data.data;
                    })
                    .catch(err => {
                        alert('err');
                        console.log(err);
                    });
            }
        }
    });
})