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

    goToTheTop: function() {
      var self = this;
      window.scrollTo(0, 0);
    },
    
    openOnStart: function () {
      var self = this;
      
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
                  self.posts[i].closeable = false;
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
          };
          
          self.openPage(pageId, onLoadTablonFunction);
        }
        else {
          self.openPage(pageId);
        }
      //alert(id);
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
    
    openPage: function (page, successFn) {
      var self = this;
      self.currentPage = page;
      if (page == 'tablones') {
        self.currentTablon = null;
        self.tablones = [];
        _dao.loadItems('tablones.hjson', 'tablones', self.addTablon, successFn);
      }
      window.scrollTo(0, 0);
      //document.title = self.title + " - " + self.currentPost.title;
      //window.history.pushState({"currentPost": self.currentPost, "currentOption": self.currentOption, "posts": self.posts}, "", null);//null=urlPath      
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
      
      //if (navigator.share) {
      //  navigator.share({title: tablon.name, text: tablon.description, url: window.location.href + "?id=" + tablon.id});
      //}
      
      self.posts = [];
      _dao.loadItems(tablon.id + '.hjson', 'posts', self.addPost, successFn);
      
      window.scrollTo(0, 0);
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
    

    +   '<!-- Navbar (sit on top) -->'
    +   '<div class="w3-top top_nav">'
    +     '<div class="w3-bar nav_menu border_menu" id="myNavbar">'
//    +       '<a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" @click="toggleFunction()" title="Toggle Navigation Menu">'
//    +       '<a class="w3-bar-item w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" @click="toggleFunction()" title="Toggle Navigation Menu">'
    +       '<a class="w3-bar-item w3-right title_option" href="javascript:void(0);" @click="toggleFunction()" title="Toggle Navigation Menu">'
    +         '<i class="fa fa-bars"></i>'
    +       '</a>'
//    +       '<a href="javascript:void(0)" class="w3-bar-item w3-button title_option" @click="openPage(\'home\')"><img src="img/logo_icon.png" style="height: 24px; vertical-align: middle;" /> {{ pageTitle }}</a>'
    +       '<a href="javascript:void(0)" class="w3-bar-item title_option" @click="openPage(\'home\')"><img src="img/logo_icon.png" style="height: 24px; vertical-align: middle;" /> {{ pageTitle }}</a>'
//    +       '<a href="#about" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-user"></i> ABOUT</a>'
//    +       '<a href="javascript:void(0)" class="w3-bar-item w3-button w3-hide-small" @click="openPage(\'tablones\')"><i class="fa fa-th"></i> Tablones</a>'
//    +       '<a href="javascript:void(0)" class="w3-bar-item w3-button w3-hide-small" @click="openPage(\'contact\')"><i class="fa fa-envelope"></i> Contacto</a>'
//    +       '<a href="#" class="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">'
//    +         '<i class="fa fa-search"></i>'
//    +       '</a>'
    +     '</div>'

    +     '<!-- Navbar on small screens -->'
//    +     '<div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">'
    +     '<div id="navDemo" class="w3-bar-block w3-white w3-hide">'
//    +       '<a href="#about" class="w3-bar-item w3-button" @click="toggleFunction()">ABOUT</a>'
    +       '<a href="javascript:void(0)" class="w3-bar-item w3-button" @click="openPageSmall(\'home\')"><i class="fas fa-home"></i> Inicio</a>'
    +       '<a href="javascript:void(0)" class="w3-bar-item w3-button" @click="openPageSmall(\'tablones\')"><i class="far fa-envelope"></i> Tablones</a>'
    +       '<a href="javascript:void(0)" class="w3-bar-item w3-button" @click="openPageSmall(\'contact\')"><i class="fas fa-phone"></i> Contacto</a>'
//    +       '<a href="#" class="w3-bar-item w3-button">SEARCH</a>'
    +     '</div>'
    +   '</div>'


/*
    +   '<!-- First Parallax Image with Logo Text -->'
    +   '<div class="bgimg-1 w3-display-container w3-opacity-min" id="home">'
    +     '<div class="w3-display-middle" style="white-space:nowrap;">'
    +       '<span class="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">MY <span class="w3-hide-small">WEBSITE</span> LOGO</span>'
    +     '</div>'
    +   '</div>'

    +   '<!-- Container (About Section) -->'
    +   '<div class="w3-content w3-container w3-padding-64" id="about">'
    +     '<h3 class="w3-center">ABOUT ME</h3>'
    +     '<p class="w3-center"><em>I love photography</em></p>'
    +     '<p>We have created a fictional "personal" website/blog, and our fictional character is a hobby photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
    +     'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa'
    +     'qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
    +     '<div class="w3-row">'
    +       '<div class="w3-col m6 w3-center w3-padding-large">'
    +         '<p><b><i class="fa fa-user w3-margin-right"></i>My Name</b></p><br>'
    +         '<img src="w3images/avatar_hat.jpg" class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="500" height="333">'
    +       '</div>'

    +       '<!-- Hide this text on small devices -->'
    +       '<div class="w3-col m6 w3-hide-small w3-padding-large">'
    +         '<p>Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure'
    +         'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor'
    +         'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
    +       '</div>'
    +     '</div>'
    +     '<p class="w3-large w3-center w3-padding-16">Im really good at:</p>'
    +     '<p class="w3-wide"><i class="fa fa-camera"></i>Photography</p>'
    +     '<div class="w3-light-grey">'
    +       '<div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:90%">90%</div>'
    +     '</div>'
    +     '<p class="w3-wide"><i class="fa fa-laptop"></i>Web Design</p>'
    +     '<div class="w3-light-grey">'
    +       '<div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:85%">85%</div>'
    +     '</div>'
    +     '<p class="w3-wide"><i class="fa fa-photo"></i>Photoshop</p>'
    +     '<div class="w3-light-grey">'
    +       '<div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:75%">75%</div>'
    +     '</div>'
    +   '</div>'

    +   '<div class="w3-row w3-center w3-dark-grey w3-padding-16">'
    +     '<div class="w3-quarter w3-section">'
    +       '<span class="w3-xlarge">14+</span><br>'
    +       'Partners'
    +     '</div>'
    +     '<div class="w3-quarter w3-section">'
    +       '<span class="w3-xlarge">55+</span><br>'
    +       'Projects Done'
    +     '</div>'
    +     '<div class="w3-quarter w3-section">'
    +       '<span class="w3-xlarge">89+</span><br>'
    +       'Happy Clients'
    +     '</div>'
    +     '<div class="w3-quarter w3-section">'
    +       '<span class="w3-xlarge">150+</span><br>'
    +       'Meetings'
    +     '</div>'
    +   '</div>'


    +   '<!-- Second Parallax Image with Portfolio Text -->'
    +   '<div class="bgimg-2 w3-display-container w3-opacity-min">'
    +     '<div class="w3-display-middle">'
    +       '<span class="w3-xxlarge w3-text-white w3-wide">PORTFOLIO</span>'
    +     '</div>'
    +   '</div>'


    +   '<!-- Container (Portfolio Section) -->'
    +   '<div class="w3-content w3-container w3-padding-64" id="portfolio">'
    +     '<h3 class="w3-center">MY WORK</h3>'
    +     '<p class="w3-center"><em>Here are some of my latest lorem work ipsum tipsum.<br> Click on the images to make them bigger</em></p><br>'

    +     '<!-- Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) -->'
    +     '<div class="w3-row-padding w3-center">'
    +       '<div class="w3-col m3">'
    +         '<img src="w3images/p1.jpg" style="width:100%" @click="onClick($event.target)" class="w3-hover-opacity" alt="The mist over the mountains">'
    +       '</div>'

    +       '<div class="w3-col m3">'
    +         '<img src="w3images/p2.jpg" style="width:100%" @click="onClick($event.target)" class="w3-hover-opacity" alt="Coffee beans">'
    +       '</div>'

    +       '<div class="w3-col m3">'
    +         '<img src="w3images/p3.jpg" style="width:100%" @click="onClick($event.target)" class="w3-hover-opacity" alt="Bear closeup">'
    +       '</div>'

    +       '<div class="w3-col m3">'
    +         '<img src="w3images/p4.jpg" style="width:100%" @click="onClick($event.target)" class="w3-hover-opacity" alt="Quiet ocean">'
    +       '</div>'
    +     '</div>'

    +     '<div class="w3-row-padding w3-center w3-section">'
    +       '<div class="w3-col m3">'
    +         '<img src="w3images/p5.jpg" style="width:100%" @click="onClick($event.target)" class="w3-hover-opacity" alt="The mist">'
    +       '</div>'

    +       '<div class="w3-col m3">'
    +         '<img src="w3images/p6.jpg" style="width:100%" @click="onClick($event.target)" class="w3-hover-opacity" alt="My beloved typewriter">'
    +       '</div>'

    +       '<div class="w3-col m3">'
    +         '<img src="w3images/p7.jpg" style="width:100%" @click="onClick($event.target)" class="w3-hover-opacity" alt="Empty ghost train">'
    +       '</div>'

    +       '<div class="w3-col m3">'
    +         '<img src="w3images/p8.jpg" style="width:100%" @click="onClick($event.target)" class="w3-hover-opacity" alt="Sailing">'
    +       '</div>'
    
    +       '<button class="w3-button w3-padding-large w3-light-grey" style="margin-top:64px">LOAD MORE</button>'
    
    +     '</div>'
    +   '</div>'



    +   '<!-- Modal for full size images on click-->'
    +   '<div id="modal01" class="w3-modal w3-black" onclick="this.style.display=\'none\'">'
    +     '<span class="w3-button w3-large w3-black w3-display-topright" title="Close Modal Image"><i class="fa fa-remove"></i></span>'
    +     '<div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">'
    +       '<img id="img01" class="w3-image">'
    +       '<p id="caption" class="w3-opacity w3-large"></p>'
    +     '</div>'
    +   '</div>'

    +   '<!-- Third Parallax Image with Portfolio Text -->'
    +   '<div class="bgimg-3 w3-display-container w3-opacity-min">'
    +     '<div class="w3-display-middle">'
    +       '<span class="w3-xxlarge w3-text-white w3-wide">CONTACT</span>'
    +     '</div>'
    +   '</div>'

    +   '<!-- Container (Contact Section) -->'
    +   '<div class="w3-content w3-container w3-padding-64" id="contact">'
    +     '<h3 class="w3-center">WHERE I WORK</h3>'
    +     '<p class="w3-center"><em>I\'d love your feedback!</em></p>'

    +     '<div class="w3-row w3-padding-32 w3-section">'
    +       '<div class="w3-col m4 w3-container">'
    +         '<img src="w3images/map.jpg" class="w3-image w3-round" style="width:100%">'
    +       '</div>'
    +       '<div class="w3-col m8 w3-panel">'
    +         '<div class="w3-large w3-margin-bottom">'
    +           '<i class="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Chicago, US<br>'
    +           '<i class="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone: +00 151515<br>'
    +           '<i class="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Email: mail@mail.com<br>'
    +         '</div>'
    +         '<p>Swing by for a cup of <i class="fa fa-coffee"></i>, or leave me a note:</p>'
    +         '<form action="/action_page.php" target="_blank">'
    +           '<div class="w3-row-padding" style="margin:0 -16px 8px -16px">'
    +             '<div class="w3-half">'
    +               '<input class="w3-input w3-border" type="text" placeholder="Name" required name="Name">'
    +             '</div>'
    +             '<div class="w3-half">'
    +               '<input class="w3-input w3-border" type="text" placeholder="Email" required name="Email">'
    +             '</div>'
    +           '</div>'
    +           '<input class="w3-input w3-border" type="text" placeholder="Message" required name="Message">'
    +           '<button class="w3-button w3-black w3-right w3-section" type="submit">'
    +             '<i class="fa fa-paper-plane"></i> SEND MESSAGE'
    +           '</button>'
    +         '</form>'
    +       '</div>'
    +     '</div>'
    +   '</div>'
*/

    +   '<template v-if="currentPage === \'tablones\'">'
    +     '<template v-if="currentTablon">'
    +       '<template v-for="post in posts" :key="post.id">'
    +         '<post v-bind:value="post" v-if="post.render" />'
    +       '</template>'
//    +       '<post v-for="post in posts" v-bind:value="post" :key="post.id" />'
    +     '</template>'
    +     '<template v-else>'
    +       '<tablon v-for="tablon in tablones" v-bind:value="tablon" :key="tablon.id" @open="openTablon(tablon)" />'
    +     '</template>'
    +   '</template>'
  
    +   '<template v-else-if="currentPage === \'contact\'">'
    +     '<contact v-for="contacto in contacts" v-bind:value="contacto" :key="contacto.id" />'
    +   '</template>'
  
    +   '<template v-else>'
    +     '<template v-for="post in menuPosts" :key="post.id">'
    +       '<post v-bind:value="post" mold="home" @open="openMenuOption(post)" />'
    +     '</template>'
//    +     '<post v-for="post in menuPosts" v-bind:value="post" :key="post.id" mold="home" @open="openMenuOption(post)" />'
    +   '</template>'
    
  
    +   '<!-- Footer -->'
    +   '<footer class="w3-center w3-light-grey w3-padding-64 w3-opacity w3-hover-opacity-off">'
    +     '<a href="javascript:void(0)" class="w3-button w3-grey" @click="goToTheTop()"><i class="fa fa-arrow-up w3-margin-right"></i>Inicio</a>'
    +     '<div class="w3-xlarge w3-section">'
//    +       '<i class="fa fa-facebook-official w3-hover-opacity"></i>'
  
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
