Vue.component('tablon', {
  props: ['value', 'mold'], 

  methods: {
    openTablon: function () {
      this.$emit('open', this.value);
    },
    
    clickSubscribe: function () {
      event.stopPropagation();
      this.value.suscrito = !this.value.suscrito;
    },
  },
  
  created() {
  },
  
  computed: {
    image() {
      var result = null;
      if (this.value.image) {
        result = this.value.image;
      }
      else {
        result = "https://s5.postimg.cc/j9r8yf9gn/sws1.png";
      }
      return result;
    },
    
    btnSubscribe() {
      var result = "product-price";
/*
      var result = {
        'product-price': true,
        'subscribe_green': true
      };
*/
      if (this.value.suscrito && this.value.suscrito == true) {
        result += " subscribe_gray";
      }
      else {
        result += " subscribe_green";
      }
      
      return result;
    },
    
    btnSubscribe2() {
      var result = {};
/*
      var result = {
        'product-price': true,
        'subscribe_green': true
      };
*/
      result['product-price'] = true;
      
      if (this.value.suscrito && this.value.suscrito == true) {
        result['subscribe_gray'] = true;
      }
      else {
        result['subscribe_green'] = true;
      }
      
      return result;
    },
    
    labelSubscribe () {
      var result = null;
      if (this.value.suscrito && this.value.suscrito == true) {
        result = "SUSCRITO";
      }
      else {
        result = "SUSCRÍBETE";
      }
      return result;
    },

  },

  //https://freefrontend.com/css-cards/
  //https://codepen.io/CodeFrogShow/pen/rWjYrP
  template: ''
    + '<div class="container" v-on:click="openTablon()">'
    +   '<div class="card">'
    +     '<div class="card-head">'
//    +       '<img src="https://s5.postimg.cc/wy79025cz/nike_Logo_White.png" alt="logo" class="card-logo">'
    +       '<img :src="value.logo" alt="logo" class="card-logo">'
    +       '<img :src="image" :alt="value.name" class="product-img">'
/*
    +       '<div class="product-detail">'
    +         '<h2>Hartbeespoort</h2> Support and Nike Zoom Air come together for a more supportive feel with high-speed responsiveness'
    +       '</div>'
    +       '<span class="back-text">'
    +         'FAS'
    +       '</span>'
*/
    +     '</div>'
    +     '<div class="card-body">'
    +       '<div class="product-desc">'
    +         '<span class="product-title">'
    +           '{{ value.name }}'//'Hartbee<b>spoort</b>'
/*
    +           '<span class="badge">'
    +             'New'
    +           '</span>'
*/
    +         '</span>'
    +         '<span class="product-caption">'
    +           '{{ value.description }}'//'Basket Ball Collection'
    +         '</span>'
/*
    +         '<span class="product-rating">'
    +           '<i class="fa fa-star"></i>'
    +           '<i class="fa fa-star"></i>'
    +           '<i class="fa fa-star"></i>'
    +           '<i class="fa fa-star"></i>'
    +           '<i class="fa fa-star grey"></i>'
    +         '</span>'
*/
    +       '</div>'
    +       '<div class="product-properties">'
/*
    +         '<span class="product-size">'
    +           '<h4>Size</h4>'
    +           '<ul class="ul-size">'
    +             '<li><a href="#">7</a></li>'
    +             '<li><a href="#">8</a></li>'
    +             '<li><a href="#">9</a></li>'
    +             '<li><a href="#" class="active">10</a></li>'
    +             '<li><a href="#">11</a></li>'
    +           '</ul>'
    +         '</span>'
    +         '<span class="product-color">'
    +           '<h4>Colour</h4>'
    +           '<ul class="ul-color">'
    +             '<li><a href="#" class="orange active"></a></li>'
    +             '<li><a href="#" class="green"></a></li>'
    +             '<li><a href="#" class="yellow"></a></li>'
    +           '</ul>'
    +         '</span>'
*/
    +         '<span v-bind:class="btnSubscribe" @click="clickSubscribe()">'
    +           '<i class="far fa-bell"></i> {{ labelSubscribe }}'
    +         '</span>'
    +       '</div>'
    +     '</div>'
    +   '</div>'
    + '</div>'




/*
    + '<div class="yt">'
    +   '<a href="https://www.youtube.com/watch?v=jYAmKNOJ4Ck" target="_blank">'
    +     '<img width="151" src="https://s5.postimg.cc/vzwuxmw87/template.png" alt="" />'
    +   '</a>'
    + '</div>'
*/
  
    
    
    
})
