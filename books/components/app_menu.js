Vue.component('app_menu', {
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
//    + '<nav class="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent " color-on-scroll="400">'
    + '<nav class="navbar navbar-expand-lg bg-primary fixed-top" color-on-scroll="400">'
    +   '<div class="container">'
    +     '<div class="navbar-translate">'
    +       '<a class="navbar-brand" href="javascript:void(0)" rel="tooltip" title="Mis libros" data-placement="bottom" target="_blank">'
    +         '<i class="fas fa-book-open"></i> Mis libros'
    +       '</a>'
    +       '<button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">'
    +         '<span class="navbar-toggler-bar top-bar"></span>'
    +         '<span class="navbar-toggler-bar middle-bar"></span>'
    +         '<span class="navbar-toggler-bar bottom-bar"></span>'
    +       '</button>'
    +     '</div>'
    +     '<div class="collapse navbar-collapse justify-content-end" id="navigation" data-nav-image="./assets/img/blurred-image-1.jpg">'
    +       '<ul class="navbar-nav">'
    +         '<li class="nav-item">'
    +           '<a class="nav-link" href="javascript:void(0)" onclick="scrollToDownload()">'
    +             '<i class="fas fa-book-reader"></i>'
    +             '<p>Mis libros</p>'
    +           '</a>'
    +         '</li>'
    +         '<li class="nav-item dropdown">'
    +           '<a href="#" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink1" data-toggle="dropdown">'
    +             '<i class="fas fa-book-open"></i>'
    +             '<p>Catálogo</p>'
    +           '</a>'
    +           '<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink1">'
    +             '<a class="dropdown-item" href="./index.html">'
    +               '<i class="now-ui-icons business_chart-pie-36"></i> Todas'
    +             '</a>'
    +             '<a class="dropdown-item" href="./index.html">'
    +               '<i class="now-ui-icons business_chart-pie-36"></i> Cuentos'
    +             '</a>'
    +             '<a class="dropdown-item" target="_blank" href="https://demos.creative-tim.com/now-ui-kit/docs/1.0/getting-started/introduction.html">'
    +               '<i class="now-ui-icons design_bullet-list-67"></i> Novelas'
    +             '</a>'
    +           '</div>'
    +         '</li>'
    +         '<li class="nav-item">'
    +           '<a class="nav-link btn btn-neutral" href="https://www.creative-tim.com/product/now-ui-kit-pro" target="_blank">'
    +             '<i class="now-ui-icons arrows-1_share-66"></i>'
    +             '<p>Buscador</p>'
    +           '</a>'
    +         '</li>'
    +         '<li class="nav-item">'
    +           '<a class="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank">'
    +             '<i class="fab fa-twitter"></i>'
    +             '<p class="d-lg-none d-xl-none">Twitter</p>'
    +           '</a>'
    +         '</li>'
    +         '<li class="nav-item">'
    +           '<a class="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank">'
    +             '<i class="fab fa-facebook-square"></i>'
    +             '<p class="d-lg-none d-xl-none">Facebook</p>'
    +           '</a>'
    +         '</li>'
    +         '<li class="nav-item">'
    +           '<a class="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank">'
    +             '<i class="fab fa-instagram"></i>'
    +             '<p class="d-lg-none d-xl-none">Instagram</p>'
    +           '</a>'
    +         '</li>'
    +       '</ul>'
    +     '</div>'
    +   '</div>'
    + '</nav>'
})
