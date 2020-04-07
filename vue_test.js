alert('aaaaa')

const app = new Vue({
    el: '#app',
    data: {
      message: ''
    },
    methods: {
      display : function () {
        this.message = "Hello World!!";
      }
    }

})