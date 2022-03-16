const app = new Vue (
    {
        el: '#app',
        data: {
            message: 'Hello Vue js',
            myClass: '',
            linkImg: 'https://picsum.photos/seed/picsum/200/300',
        },

        methods: {
            saluta: function() {
                console.log('Hello vue js')
            }
        }
    }
)