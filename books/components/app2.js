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
