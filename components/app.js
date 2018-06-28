Vue.component('app', {
  props: ['title', 'subtitle1', 'subtitle2'], 
  
  data: function () {
    return {
      title: '',
      currentPost: null,
      postsWeek: [],
      quickLinks: [],
      tags: [],
      mainPost: null,
      currentOption: {},
      posts: [],
      options: []
    }
  },

  watch: {
    posts: function (val) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },

  computed: {
    showMainPost() {
      var result = false;
      if (this.mainPost != null && this.currentPost == null) {
        result = true;
      }
      return result;
    }
  },

  created() {
//alert(window.location.search);
    var self = this;
    self.posts = [];
    
    window.onpopstate = function (e) {
      if (e.state) {
        self.currentPost = e.state.currentPost;
        self.currentOption = e.state.currentOption;
        self.posts = e.state.posts;
      }
    };
    
//    var url_string = "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5"; //window.location.href
    var url_string = window.location.href;
var url = new URL(url_string);
var page = url.searchParams.get("page");
//console.log(page);
//alert(page);
//?page=design/design1    
    if (page != null && page.indexOf('/') >= 0) {
      _dao.loadData('posts/' + page + '.hjson', function (post) {
        post['id'] = page;
        self.currentPost = post;
        document.title = self.title + " - " + self.currentPost.title;
        console.log(">>>>currentPost POST<<<<");
        console.log(Hjson.stringify(post));
      });
    }
    else {
      var menu = 'index.hjson';
      if (page != null) {
        menu = 'posts/' + page + '.hjson';
      }
      _dao.loadPosts(menu, function (posts) { self.posts.push(posts);/*console.log(">>>>posts<<<<"); console.log(Hjson.stringify(posts)); self.posts = posts;*/ });
    }
    
    self.options = [];
    _dao.loadOptions(function (data) { 
      var options = data['options'];
      self.options = options; 
      console.log(">>>>options<<<<"); 
      console.log(Hjson.stringify(options)); 
      self.selectMenu('index');
      self.title = data['title'];
      self.quickLinks = data['quickLinks'];
      self.tags = data['tags'];
      
      document.title = self.title;
      if (self.currentPost != null) {
        document.title = self.title + " - " + self.currentPost.title;
      }

      self.postsWeek = [];
      var refPostsWeek = data['postsWeek'];
      
      var i;
      for (i = 0; i < refPostsWeek.length; i++) { 
        var index = i;
        var postId = refPostsWeek[i];
        _dao.loadData('posts/' + postId + '.hjson', function (post) {
          post['id'] = postId;
          console.log("LOADED POST = " + postId);
          self.postsWeek.push(post);
        });
      }
      
      var refMainPost = 'posts/' + data['mainPost'] + '.hjson';
      //refMainPost = 'culture/culture1' + '.hjson';
      _dao.loadData(refMainPost, function (post) {
        post['id'] = data['mainPost'];
        self.mainPost = post;
        console.log(">>>>MAIN POST<<<<"); 
        console.log(Hjson.stringify(post)); 
      });
      
    });
    
    //window.scrollTo(0, 100);
/*
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': document.body.offsetTop
    });
*/
  },

  methods: {
    openPost: function (post) {
      var self = this;
      self.currentPost = post;
      document.title = self.title + " - " + self.currentPost.title;

      window.history.pushState({"currentPost": self.currentPost, "currentOption": self.currentOption, "posts": self.posts}, "", null);//null=urlPath      
    },

    openOption: function (option) {
      var self = this;
      //this.$emit('open', menu)
      //alert(menu)
      alert(option.id);
      self.openMenu(option.id);
    },
    
    selectMenu: function (id) {
      var self = this;
      if (self.options) {
        var i = 0;
        for (i = 0; i < self.options.length; i++) {
          var option = self.options[i];
          if (id == option.id) {
            self.currentOption = option;
            window.history.pushState({"currentPost": self.currentPost, "currentOption": self.currentOption, "posts": self.posts}, "", null);//null=urlPath      
            break;
          }
        }
      }
    },
    
    isCurrentMenu: function (option) {
      var result = false;
      var self = this;
      if (option.id && self.currentOption && option.id == self.currentOption.id) {
        result = true;
      }
      return result;
    },
    
    openMenu: function (id) {
      var self = this;
      self.posts = [];
      _dao.loadPosts('posts/' + id + '.hjson', function (posts) { console.log('>>>>>>>>>>>>>>>> POST ID = ' + posts.id); self.posts.push(posts);/*console.log(">>>>posts<<<<"); console.log(Hjson.stringify(posts)); self.posts = posts;*/ });
      self.selectMenu(id);
      self.currentPost = null;
      window.history.pushState({"currentPost": self.currentPost, "currentOption": self.currentOption, "posts": self.posts}, "", null);//null=urlPath      
    }
    
  },

  template: ''
    + '<div id="__app_main__">'
    
//<!--start-main-->
    +   '<div class="header">'
    +     '<div class="header-top">'
    +       '<div class="container">'
    +         '<div class="logo">'
    +           '<a href="index.html"><h1>{{ title }}</h1></a>'
    +         '</div>'
    +         '<div class="search">'
    +           '<form>'
    +             '<input type="text" value="Search">'
    +             '<input type="submit" value="">'
    +           '</form>'
    +         '</div>'
    +         '<div class="social">'
    +           '<ul>'
    +             '<li><a href="#" class="facebook"> </a></li>'
    +             '<li><a href="#" class="facebook twitter"> </a></li>'
    +             '<li><a href="#" class="facebook chrome"> </a></li>'
    +             '<li><a href="#" class="facebook in"> </a></li>'
    +             '<li><a href="#" class="facebook beh"> </a></li>'
    +             '<li><a href="#" class="facebook vem"> </a></li>'
    +             '<li><a href="#" class="facebook yout"> </a></li>'
    +           '</ul>'
    +         '</div>'
    +         '<div class="clearfix"></div>'
    +       '</div>'
    +     '</div>'

//<!--head-bottom-->
    +     '<div class="head-bottom">'
    +       '<div class="container">'
    +         '<div class="navbar-header">'
    +           '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">'
    +             '<span class="sr-only">Toggle navigation</span>'
    +             '<span class="icon-bar"></span>'
    +             '<span class="icon-bar"></span>'
    +             '<span class="icon-bar"></span>'
    +           '</button>'
    +         '</div>'
    +         '<div id="navbar" class="navbar-collapse collapse">'
    +           '<ul class="nav navbar-nav">'
//TOP MENU
    +             '<template v-for="option in options" :key="option.id">'
    +               '<li v-if="!option.options || option.options.length <= 0" v-bind:class="{\'active\': isCurrentMenu(option)}"><a href="#" v-bind:title="option.label" v-on:click="openOption(option)">{{ option.label }}</a></li>'
    +               '<li v-if="option.options && option.options.length > 0" class="dropdown">'
    +                 '<a href="#" v-bind:title="option.label" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ option.label }} <span class="caret"></span></a>'
    +                 '<ul class="dropdown-menu">'
    +                   '<template v-for="suboption in option.options" :key="suboption.id">'
    +                     '<li><a href="#" v-on:click="openOption(suboption)">{{ suboption.label }}</a></li>'
    +                   '</template>'
    +                 '</ul>'
    +               '</li>'
    +             '</template>'
    
/*
    +             '<li class="active"><a href="index.html">Home</a></li>'
    +             '<li><a href="videos.html">Videos</a></li>'
    +             '<li><a href="reviews.html">Reviews</a></li>'
    +             '<li class="dropdown">'
    +               '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tech <span class="caret"></span></a>'
    +               '<ul class="dropdown-menu">'
    +                 '<li><a href="tech.html">Action</a></li>'
    +                 '<li><a href="tech.html">Action</a></li>'
    +                 '<li><a href="tech.html">Action</a></li>'
    +               '</ul>'
    +             '</li>'
    +             '<li class="dropdown">'
    +               '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Culture <span class="caret"></span></a>'
    +               '<ul class="dropdown-menu">'
    +                 '<li><a href="singlepage.html">Action</a></li>'
    +                 '<li><a href="singlepage.html">Action</a></li>'
    +                 '<li><a href="singlepage.html">Action</a></li>'
    +               '</ul>'
    +             '</li>'
    +             '<li class="dropdown">'
    +               '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Science <span class="caret"></span></a>'
    +               '<ul class="dropdown-menu">'
    +                 '<li><a href="singlepage.html">Action</a></li>'
    +                 '<li><a href="singlepage.html">Action</a></li>'
    +                 '<li><a href="singlepage.html">Action</a></li>'
    +               '</ul>'
    +             '</li>'
    +             '<li><a href="design.html">Design</a></li>'
    +             '<li><a href="business.html">Business</a></li>'
    +             '<li><a href="world.html">World</a></li>'
    +             '<li><a href="forum.html">Forum</a></li>'
    +             '<li><a href="contact.html">Contact</a></li>'
*/
    +           '</ul>'
    +         '</div><!--/.nav-collapse -->'
    +       '</div>'
    +     '</div>'
    +   '</div>'
//<!--head-bottom-->
    
    
//<!-- banner -->
//    +   '<div class="banner" v-if="mainPost">'
    +   '<post v-bind:value="mainPost" mold="banner" @open="openPost(mainPost)" v-if="showMainPost" />'
/*
    +     '<div class="container">'
    +       '<h2>Contrary to popular belief, Lorem Ipsum simply</h2>'
    +       '<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s</p>'
    +       '<a href="#">READ ARTICLE</a>'
    +     '</div>'
*/
//    +   '</div>'

    

//<!-- technology -->
    +   '<div class="technology">'
    +     '<div class="container">'
    +       '<div class="col-md-9 technology-left">'
//    +         '<div v-if="!currentPost" class="tech-no">'
    +         '<div v-if="!currentPost">'
    +           '<post v-for="item in posts" v-bind:value="item" :key="item.id" mold="home" @open="openPost(item)" />'
//    +         '<!-- technology-top -->'
    +           '<div class="clearfix"></div>'
//    +         '<!-- technology-top -->'
    +   '<!-- technology-top -->'
    +         '</div>'
    +         '<post v-if="currentPost" v-bind:value="currentPost" mold="full" />'
    +       '</div>'
//    +   '<!-- technology-right -->'
    +       '<div class="col-md-3 technology-right">'
/*
    +         '<div class="blo-top">'
    +           '<div class="tech-btm">'
    +             '<img src="images/banner1.jpg" class="img-responsive" alt=""/>'
    +           '</div>'
    +         '</div>'
*/
    +         '<div class="blo-top">'
    +           '<div class="tech-btm">'
    +             '<h4>Sign up to our newsletter</h4>'
    +             '<p>Pellentesque dui, non felis. Maecenas male</p>'
    +             '<div class="name">'
    +               '<form>'
    +                 '<input type="text" placeholder="Email" required="">'
    +               '</form>'
    +             '</div>'
    +             '<div class="button">'
    +               '<form>'
    +                 '<input type="submit" value="Subscribe">'
    +               '</form>'
    +             '</div>'
    +             '<div class="clearfix"> </div>'
    +           '</div>'
    +         '</div>'
    +         '<div class="blo-top">'
    +           '<div class="tech-btm">'
    +             '<h4>Top stories of the week (Popular posts) (Last posts) (Recomendaciones)</h4>'
    +             '<post v-for="item in postsWeek" v-bind:value="item" :key="item.id" mold="top" @open="openPost(item)" />'
/*
    +             '<div class="blog-grids">'
    +               '<div class="blog-grid-left">'
    +                 '<a href="singlepage.html"><img src="images/6.jpg" class="img-responsive" alt=""/></a>'
    +               '</div>'
    +               '<div class="blog-grid-right">'
    +                 '<h5><a href="singlepage.html">Pellentesque dui, non felis. Maecenas male</a> </h5>'
    +               '</div>'
    +               '<div class="clearfix"> </div>'
    +             '</div>'
    +             '<div class="blog-grids">'
    +               '<div class="blog-grid-left">'
    +                 '<a href="singlepage.html"><img src="images/7.jpg" class="img-responsive" alt=""/></a>'
    +               '</div>'
    +               '<div class="blog-grid-right">'
    +                 '<h5><a href="singlepage.html">Pellentesque dui, non felis. Maecenas male</a> </h5>'
    +               '</div>'
    +               '<div class="clearfix"> </div>'
    +             '</div>'
    +             '<div class="blog-grids">'
    +               '<div class="blog-grid-left">'
    +                 '<a href="singlepage.html"><img src="images/11.jpg" class="img-responsive" alt=""/></a>'
    +               '</div>'
    +               '<div class="blog-grid-right">'
    +                 '<h5><a href="singlepage.html">Pellentesque dui, non felis. Maecenas male</a> </h5>'
    +               '</div>'
    +               '<div class="clearfix"> </div>'
    +             '</div>'
    +             '<div class="blog-grids">'
    +               '<div class="blog-grid-left">'
    +                 '<a href="singlepage.html"><img src="images/9.jpg" class="img-responsive" alt=""/></a>'
    +               '</div>'
    +               '<div class="blog-grid-right">'
    +                 '<h5><a href="singlepage.html">Pellentesque dui, non felis. Maecenas male</a> </h5>'
    +               '</div>'
    +               '<div class="clearfix"> </div>'
    +             '</div>'
    +             '<div class="blog-grids">'
    +               '<div class="blog-grid-left">'
    +                 '<a href="singlepage.html"><img src="images/10.jpg" class="img-responsive" alt=""/></a>'
    +               '</div>'
    +               '<div class="blog-grid-right">'
    +                 '<h5><a href="singlepage.html">Pellentesque dui, non felis. Maecenas male</a> </h5>'
    +               '</div>'
    +               '<div class="clearfix"> </div>'
    +             '</div>'
*/
    +           '</div>'
    +         '</div>'

//POPULAR TAGS    
    +         '<div class="blo-top">'
    +           '<div class="tech-btm">'
    +             '<h4>Popular tags</h4>'
    +             '<p>'
    
    +               '<span v-for="(item, key) in tags" :key="key" class="w3-tag w3-grey w3-margin-bottom">{{ item.label }}</span>'
    
/*
    +               '<span class="w3-tag w3-black w3-margin-bottom">Travel</span>'
    +               '<span class="w3-tag w3-grey w3-margin-bottom">New York</span>'
    +               '<span class="w3-tag w3-black w3-margin-bottom">Travel</span>'
    +               '<span class="w3-tag w3-grey w3-margin-bottom">New York</span>'
    +               '<span class="w3-tag w3-black w3-margin-bottom">Travel</span>'
    +               '<span class="w3-tag w3-grey w3-margin-bottom">New York</span>'
    +               '<span class="w3-tag w3-black w3-margin-bottom">Travel</span>'
    +               '<span class="w3-tag w3-grey w3-margin-bottom">New York</span>'
    +               '<span class="w3-tag w3-black w3-margin-bottom">Travel</span>'
    +               '<span class="w3-tag w3-grey w3-margin-bottom">New York</span>'
    +               '<span class="w3-tag w3-black w3-margin-bottom">Travel</span>'
    +               '<span class="w3-tag w3-grey w3-margin-bottom">New York</span>'
    +               '<span class="w3-tag w3-black w3-margin-bottom">Travel</span>'
    +               '<span class="w3-tag w3-grey w3-margin-bottom">New York</span>'
    +               '<span class="w3-tag w3-black w3-margin-bottom">Travel</span>'
    +               '<span class="w3-tag w3-grey w3-margin-bottom">New York</span>'
*/
    +             '</p>'
    +           '</div>'
    +         '</div>'
    
    +       '</div>'
    +       '<div class="clearfix"></div>'
    +     '<!-- technology-right -->'
    +     '</div>'
    +   '</div>'
    +   '<!-- technology -->'



//<!-- footer -->
    +   '<div class="footer">'
    +     '<div class="container">'
    +       '<div class="col-md-4 footer-left">'
    +         '<h6>THIS LOOKS GREAT</h6>'
    +         '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>'
    +         '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt consectetur adipisicing elit,</p>'
    +       '</div>'
    +       '<div class="col-md-4 footer-middle">'
    +         '<h4>Twitter Feed</h4>'
    +         '<div class="mid-btm">'
    +           '<p>Consectetur adipisicing</p>'
    +           '<p>Sed do eiusmod tempor</p>'
    +           '<a href="https://w3layouts.com/">https://w3layouts.com/</a>'
    +         '</div>'
    +         '<p>Consectetur adipisicing</p>'
    +         '<p>Sed do eiusmod tempor</p>'
    +         '<a href="https://w3layouts.com/">https://w3layouts.com/</a>'
    +       '</div>'
    +       '<div class="col-md-4 footer-right">'
    +         '<h4>Quick Links</h4>'
    
    +         '<li v-for="item in quickLinks" :key="item.url"><a v-bind:href="item.url" target="_blank">{{ item.label }}</a></li>'
    
/*
    +         '<li><a href="#">Eiusmod tempor</a></li>'
    +         '<li><a href="#">Consectetur </a></li>'
    +         '<li><a href="#">Adipisicing elit</a></li>'
    +         '<li><a href="#">Eiusmod tempor</a></li>'
    +         '<li><a href="#">Consectetur </a></li>'
    +         '<li><a href="#">Adipisicing elit</a></li>'
*/
    +       '</div>'
    +       '<div class="clearfix"></div>'
    +     '</div>'
    +   '</div>'
//    +   '<!-- footer -->'
//    +   '<!-- footer-bottom -->'
    +   '<div class="foot-nav">'
    +     '<div class="container">'
    +       '<ul>'
//BOTTOM MENU
    +         '<template v-for="option in options" :key="option.id">'
    +           '<li><a href="#" v-bind:title="option.label" v-on:click="openOption(option)">{{ option.label }}</a></li>'
    +         '</template>'
/*
    +         '<li><a href="index.html">Home</a></li>'
    +         '<li><a href="videos.html">Videos</a></li>'
    +         '<li><a href="reviews.html">Reviews</a></li>'
    +         '<li><a href="tech.html">Tech</a></li>'
    +         '<li><a href="singlepage.html">Culture</a></li>'
    +         '<li><a href="singlepage.html">Science</a></li>'
    +         '<li><a href="design.html">Design</a></li>'
    +         '<li><a href="business.html">Business</a></li>'
    +         '<li><a href="world.html">World</a></li>'
    +         '<li><a href="forum.html">Forum</a></li>'
    +         '<li><a href="contact.html">Contact</a></li>'
*/
    +         '<div class="clearfix"></div>'
    +       '</ul>'
    +     '</div>'
    +   '</div>'
//<!-- footer-bottom -->
    +   '<div class="copyright">'
    +     '<div class="container">'
    +       '<p>© 2016 Business_Blog. All rights reserved | Template by <a href="http://w3layouts.com/">W3layouts</a></p>'
    +     '</div>'
    +   '</div>'

    + '</div>'

})


var app = new Vue({
  el: '#app'
})
