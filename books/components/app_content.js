Vue.component('app_content', {
  props: [], 
  
  data: function () {
    return {
      books: []
    }
  },

  watch: {
  },

  computed: {

  },

  created() {
    var self = this;
    self.books = [];
    var urlBooks = "https://api.apify.com/v2/key-value-stores/EjCix12SYKQpYbdf5/records/OUTPUT?disableRedirect=true";
    _dao.loadData(urlBooks, function (data) { 
		self.books = data["books"];
	});
  },

  methods: {


  },

  template: ''
    + '<div class="main">'
//    +   '<app_content_topImage />'
    +   '<app_content_carousel />'

    +   '<div class="row">'
    +     '<div class="col-md-offset-2 col-md-2 col-sm-3 col-xs-4" v-for="item in books">'
    +       '<book v-bind:value="item" :key="item.id" mold="home" />'
    +     '</div>'
    +   '</div>'

/*
    +   '<div class="col-sm-10 col-sm-offset-1">'
    +   '<div class="col-md-4 col-sm-6">'
    +   '<book />'
    +   '</div>'
    +   '</div>'

    +   '<div class="col-sm-10 col-sm-offset-1">'
    +   '<div class="col-md-4 col-sm-6">'
    +   '<book />'
    +   '</div>'
    +   '</div>'
*/

    +   '<app_content_basic />'
    +   '<app_content_navbars />'
    +   '<app_content_tabs />'
    +   '<app_content_pagination />'
    +   '<app_content_notifications />'
    +   '<app_content_typography />'
    +   '<app_content_javascript />'
    +   '<app_content_carousel />'
    +   '<app_content_nucleo />'
    +   '<app_content_examples />'
    +   '<app_content_signup />'
    +   '<app_content_examples2 />'
    +   '<app_content_download />'
    + '</div>'

})
