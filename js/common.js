new Vue({
    el: '#app',
    data: {
        number: 0
    }
})

new Vue({
    el: '#function',
    data: {
        number: 0
    },
    methods: {
        countUp: function () {
            this.number += 1
        }
    }
})
