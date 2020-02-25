Vue.component('app', {
  props: [], 
  
  data: function () {
    return {
      currentPage: null,
      tablones: [],
      posts: [],
      currentTablon: null,
      menuPosts: [],
      contacts: []
    }
  },

  watch: {
  },

  computed: {

    pageTitle: {
      get: function() {
        var result = null;
      
        result = "Canterbury School";
      
        var self = this;
        if (self.currentPage == 'tablones') {
          if (self.currentTablon != null) {
            result = self.currentTablon.name;
          }
          else {
            result = "Tablones";
          }
        }
        else if (self.currentPage == 'contact') {
          result = "Contactos";
        }
      
        return result;
      },
      set: function () {
      }
    },
    
  },

  created() {
    // Change style of navbar on scroll
    var self = this;
    
    self.setupBackButton();
    
    if (false) {
      window.onscroll = function() {self.changeStyleNavbar()};
    }
    
    self.menuPosts = [];
    self.menuPosts.push({
      id: 'tablones',
      title: "Tablones",
      subtitle: "Listado de tablones", 
      image: "img/pinboard.png"
    });
    self.menuPosts.push({
      id: 'contact',
      title: "Contacto",
      subtitle: "Listado de contactos", 
      image: "img/contact-us.png"
    });
    
    self.contacts = _dao.buildContacts();

    self.openOnStart();
  },

  methods: {

    //https://stackoverflow.com/questions/8038726/how-to-trigger-change-when-using-the-back-button-with-history-pushstate-and-pops
    setupBackButton: function() {
      var self = this;
      
      window.onpopstate = function(event) {
        //alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
        //self.setupOnpopState(event.originalEvent.state);
        self.setupOnpopState(event.state);
      };
      //$(window).on("popstate", function(e) {
      //  self.setupOnpopState(e.originalEvent.state);
      //});

      //$("a").click(function(e) {
      //  e.preventDefault();
      //  history.pushState({ url: "/page2" }, "/page2", "page 2");
      //});
/*
      (function(original) { // overwrite history.pushState so that it also calls
                      // the change function when called
        history.pushState = function(state) {
          //self.setupOnpopState(state);
          return original.apply(this, arguments);
        };
      })(history.pushState);
*/
    },
    
    setupOnpopState: function (state) {
      var self = this;
/*
      if(state === null) { // initial page
        
        //$("div").text("Original");
        ;
      } else { // page added with pushState
        //$("div").text(state.url);
        self.openOnStart();
        ;
      }
*/
      self.openOnStart();
    },
    
    goToTheTop: function() {
      var self = this;
      window.scrollTo(0, 0);
    },
    
    openOnStart: function () {
      var self = this;

      window.scrollTo(0, 0);

      var url_string = window.location.href;
      var url = new URL(url_string);
      var id = url.searchParams.get("id");
      if (id) {
        //console.log(id);
        var arrayId = id.split("/");
        var pageId = arrayId[0];
        if (pageId == 'tablones' && arrayId.length > 1) {
          var tablonId = arrayId[1];
          
          var onLoadPostFunction = null;
          
          if (arrayId.length > 2) {
            var postId = arrayId[2];
            onLoadPostFunction = function () {
              var i;
              var selectedPost = null;
              for (i = 0; i < self.posts.length; i++) { 
                if (self.posts[i].id == postId) {
                  selectedPost = self.posts[i];
                  self.posts[i].open = true;
                  self.posts[i].render = true;
                  self.posts[i].ignoreClose = true;
                }
                else {
                  self.posts[i].open = false;
                  self.posts[i].render = false;
                }
              }
            };
          }
          
          var onLoadTablonFunction = function() {
            var i;
            var selectedTablon = null;
            for (i = 0; i < self.tablones.length; i++) { 
              if (self.tablones[i].id == tablonId) {
                selectedTablon = self.tablones[i];
                break;
              }
            }
            self.openTablon(selectedTablon, onLoadPostFunction);
            window.scrollTo(0, 0);
          };
          
          self.openPage(pageId, onLoadTablonFunction);
        }
        else {
          self.openPage(pageId, null, true);
        }
      //alert(id);
      }
      else {
        self.openPage(null, null, true);
      }
    },
    
    addTablon: function (tablon) {
      var self = this;
      self.tablones.push(tablon);
    },
    
    addPost: function (post) {
      var self = this;
      post.open = false;
      if (self.posts.length <= 0) {
        post.open = true;
      }
      post.render = true;
      post.tablon = self.currentTablon;
      self.posts.push(post);
    },
    
    openPage: function (page, successFn, ignoreHistory) {
      var self = this;
      self.currentPage = page;
      if (page == 'tablones') {
        self.currentTablon = null;
        self.tablones = [];
        _dao.loadItems('tablones.hjson', 'tablones', self.addTablon, successFn);
      }
      window.scrollTo(0, 0);
      //document.title = self.title + " - " + self.currentPost.title;
      if (!ignoreHistory) {
        //window.history.pushState({"currentPost": self.currentPost, "currentOption": self.currentOption, "posts": self.posts}, "", null);//null=urlPath      
        var histPage = "/cs/";
        if (page != null) {
          histPage += "?id=" + page;
        }
        window.history.pushState({ url: histPage }, histPage, histPage);
      }
    },

    openPageSmall: function (page) {
      var self = this;
      self.openPage(page);
      self.toggleFunction();
    },

    openMenuOption: function (menuOption) {
      var self = this;
      self.openPage(menuOption.id);
    },

    openTablon: function (tablon, successFn) {
      var self = this;
      self.currentTablon = tablon;
      
      //window.history.pushState({"currentPost": self.currentPost, "currentOption": self.currentOption, "posts": self.posts}, "", null);//null=urlPath 
      //if (navigator.share) {
      //  navigator.share({title: tablon.name, text: tablon.description, url: window.location.href + "?id=" + tablon.id});
      //}
      
      self.posts = [];
      _dao.loadItems(tablon.id + '.hjson', 'posts', self.addPost, successFn);
      
      window.scrollTo(0, 0);
      window.history.pushState({ url: "/cs/?id=tablones/" + tablon.id }, "/cs/?id=tablones/" + tablon.id, "/cs/?id=tablones/" + tablon.id);
      //document.title = self.title + " - " + self.currentPost.title;
      //window.history.pushState({"currentPost": self.currentPost, "currentOption": self.currentOption, "posts": self.posts}, "", null);//null=urlPath      
    },

    // Modal Image Gallery
    onClick: function (element) {
      document.getElementById("img01").src = element.src;
      document.getElementById("modal01").style.display = "block";
      var captionText = document.getElementById("caption");
      captionText.innerHTML = element.alt;
    },

    changeStyleNavbar: function () {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
      } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
    },

    // Used to toggle the menu on small screens when clicking on the menu button
    toggleFunction: function () {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
      } else {
        x.className = x.className.replace(" w3-show", "");
      }
    }

  },

  template: ''
    + '<div id="__app_main__">'
    
/*
    +   '<!-- Navbar (sit on top) -->'
    +   '<div class="w3-top top_nav">'
    +     '<div class="w3-bar nav_menu border_menu" id="myNavbar">'
    +       '<a class="w3-bar-item w3-right title_option" href="javascript:void(0);" @click="toggleFunction()" title="Toggle Navigation Menu">'
    +         '<i class="fa fa-bars"></i>'
    +       '</a>'
    +       '<a href="javascript:void(0)" class="w3-bar-item title_option" @click="openPage(\'home\')"><img src="img/logo_icon.png" style="height: 24px; vertical-align: middle;" /> {{ pageTitle }}</a>'
    +     '</div>'

    +     '<!-- Navbar on small screens -->'
    +     '<div id="navDemo" class="w3-bar-block w3-white w3-hide">'
    +       '<a href="javascript:void(0)" class="w3-bar-item w3-button" @click="openPageSmall(\'home\')"><i class="fas fa-home"></i> Inicio</a>'
    +       '<a href="javascript:void(0)" class="w3-bar-item w3-button" @click="openPageSmall(\'tablones\')"><i class="far fa-envelope"></i> Tablones</a>'
    +       '<a href="javascript:void(0)" class="w3-bar-item w3-button" @click="openPageSmall(\'contact\')"><i class="fas fa-phone"></i> Contacto</a>'
    +     '</div>'
    +   '</div>'
*/

    +   '<!-- Navbar -->'
    +   '<nav class="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent " color-on-scroll="400">'
    +   '<div class="container">'
    +   '<div class="navbar-translate">'
    +   '<a class="navbar-brand" href="https://demos.creative-tim.com/now-ui-kit/index.html" rel="tooltip" title="Designed by Invision. Coded by Creative Tim" data-placement="bottom" target="_blank">'
    +   'Now Ui Kit'
    +   '</a>'
    +   '<button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">'
    +   '<span class="navbar-toggler-bar top-bar"></span>'
    +   '<span class="navbar-toggler-bar middle-bar"></span>'
    +   '<span class="navbar-toggler-bar bottom-bar"></span>'
    +   '</button>'
    +   '</div>'
    +   '<div class="collapse navbar-collapse justify-content-end" id="navigation" data-nav-image="./assets/img/blurred-image-1.jpg">'
    +   '<ul class="navbar-nav">'
    +   '<li class="nav-item">'
    +   '<a class="nav-link" href="javascript:void(0)" onclick="scrollToDownload()">'
    +   '<i class="now-ui-icons arrows-1_cloud-download-93"></i>'
    +   '<p>Download</p>'
    +   '</a>'
    +   '</li>'
    +   '<li class="nav-item dropdown">'
    +   '<a href="#" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink1" data-toggle="dropdown">'
    +   '<i class="now-ui-icons design_app"></i>'
    +   '<p>Components</p>'
    +   '</a>'
    +   '<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink1">'
    +   '<a class="dropdown-item" href="./index.html">'
    +   '<i class="now-ui-icons business_chart-pie-36"></i> All components'
    +   '</a>'
    +   '<a class="dropdown-item" target="_blank" href="https://demos.creative-tim.com/now-ui-kit/docs/1.0/getting-started/introduction.html">'
    +   '<i class="now-ui-icons design_bullet-list-67"></i> Documentation'
    +   '</a>'
    +   '</div>'
    +   '</li>'
    +   '<li class="nav-item">'
    +   '<a class="nav-link btn btn-neutral" href="https://www.creative-tim.com/product/now-ui-kit-pro" target="_blank">'
    +   '<i class="now-ui-icons arrows-1_share-66"></i>'
    +   '<p>Upgrade to PRO</p>'
    +   '</a>'
    +   '</li>'
    +   '<li class="nav-item">'
    +   '<a class="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank">'
    +   '<i class="fab fa-twitter"></i>'
    +   '<p class="d-lg-none d-xl-none">Twitter</p>'
    +   '</a>'
    +   '</li>'
    +   '<li class="nav-item">'
    +   '<a class="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank">'
    +   '<i class="fab fa-facebook-square"></i>'
    +   '<p class="d-lg-none d-xl-none">Facebook</p>'
    +   '</a>'
    +   '</li>'
    +   '<li class="nav-item">'
    +   '<a class="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank">'
    +   '<i class="fab fa-instagram"></i>'
    +   '<p class="d-lg-none d-xl-none">Instagram</p>'
    +   '</a>'
    +   '</li>'
    +   '</ul>'
    +   '</div>'
    +   '</div>'
    +   '</nav>'
    +   '<!-- End Navbar -->'




    +   '<template v-if="currentPage === \'tablones\'">'
    +     '<template v-if="currentTablon">'
    +       '<template v-for="post in posts">'
    +         '<post v-bind:value="post" v-if="post.render" :key="post.id" />'
    +       '</template>'
    +     '</template>'
    +     '<template v-else>'
    +       '<div style="margin-top: 120px;"></div>'
    +       '<tablon v-for="tablon in tablones" v-bind:value="tablon" :key="tablon.id" @open="openTablon(tablon)" />'
    +     '</template>'
    +   '</template>'
  
    +   '<template v-else-if="currentPage === \'contact\'">'
    +     '<contact v-for="contacto in contacts" v-bind:value="contacto" :key="contacto.id" />'
    +   '</template>'
  
    +   '<template v-else>'
    +     '<template v-for="post in menuPosts">'
    +       '<post v-bind:value="post" mold="home" @open="openMenuOption(post)" :key="post.id" />'
    +     '</template>'
    +   '</template>'
    
  
    +   '<!-- Footer -->'
    +   '<footer class="w3-center w3-light-grey w3-padding-64 w3-opacity w3-hover-opacity-off">'
    +     '<a href="javascript:void(0)" class="w3-button w3-grey" @click="goToTheTop()"><i class="fa fa-arrow-up w3-margin-right"></i>Inicio</a>'
    +     '<div class="w3-xlarge w3-section">'
  
    +       '<a href="https://www.canterburyschool.com/" target="_blank"><i class="fas fa-globe"></i></a>'
    +       '<a href="http://www.facebook.com/pages/Canterbury-School-of-Gran-Canaria/173817925970861" target="_blank"><i class="fab fa-facebook"></i></a>'
    +       '<a href="https://www.youtube.com/user/GCCanterburySchool" target="_blank"><i class="fab fa-youtube"></i></a>'
//    +       '<i class="fa fa-instagram w3-hover-opacity"></i>'
//    +       '<i class="fab fa-instagram"></i>'
//    +       '<i class="fa fa-snapchat w3-hover-opacity"></i>'
//    +       '<i class="fa fa-pinterest-p w3-hover-opacity"></i>'
//    +       '<i class="fa fa-twitter w3-hover-opacity"></i>'
      +     '<a href="https://plus.google.com/101905536662106236803?hl=en-GB" target="_blank"><i class="fab fa-google-plus-g"></i></a>'
      +     '<a href="https://twitter.com/CanterburyGC" target="_blank"><i class="fab fa-twitter"></i></a>'
      +     '<a href="https://www.canterburyschool.com/index.php/es/home?format=feed" target="_blank"><i class="fas fa-rss"></i></a>'
//    +       '<i class="fa fa-linkedin w3-hover-opacity"></i>'
    +     '</div>'
//    +     '<p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">w3.css</a></p>'
    +   '</footer>'

    + '</div>'

})


var app = new Vue({
  el: '#app'
})
