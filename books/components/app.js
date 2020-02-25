Vue.component('app', {
  props: [], 
  
  data: function () {
    return {
    }
  },

  watch: {
  },

  computed: {

  },

  created() {
    var self = this;
  },

  methods: {


  },

  template: ''
    + '<div id="__app_main__">'
    +   '<app_menu />'
    +   '<!-- Body -->'
    +   '<div class="wrapper">'
//    +     '<app_filter />'
    +     '<app_content />'
    +     '<app_modal1 />'
    +     '<app_modal2 />'
    +     '<app_footer />'
    +   '</div>'
    + '</div>'

})


var app = new Vue({
  el: '#app'
})
