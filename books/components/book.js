Vue.component('book', {
  props: ['value', 'mold'], 
  
  data: function () {
    return {
    }
  },

  watch: {
  },

  computed: {
    bookCover() {
      var result = "";
      if (this.value["id"] != null) {
        var valueBackground = 'url(http://covers.feedbooks.net/book/' + this.value["id"] + '.jpg?size=large)';
        result = { 'backgroundImage': valueBackground };
      }
      return result;
    },

    bookUrl() {
      var result = "";
      if (this.value["id"] != null) {
        result = "http://es.feedbooks.com/book/" + this.value["id"] + ".epub";
      }
      return result;
    },

    bookHome() {
      var result = "";
      if (this.value["id"] != null) {
        result = "http://es.feedbooks.com/book/" + this.value["id"] + "?locale=es";
      }
      return result;
    },

    bookDesc() {
      var result = "";
      if (this.value["description"] != null) {
        result = this.value["description"];
        if (result.length > 512) {
			result = result.substring(0, 512) + " ...";
		}
      }
      return result;
    },

    bookTag1() {
      return (this.value["etiquetas"] != null && this.value["etiquetas"].length > 0 ? this.value["etiquetas"][0] : "");
    },
    
    bookTag2() {
      return (this.value["etiquetas"] != null && this.value["etiquetas"].length > 1 ? this.value["etiquetas"][1] : "");
    },
    
    bookTag3() {
      return (this.value["etiquetas"] != null && this.value["etiquetas"].length > 2 ? this.value["etiquetas"][2] : "");
    },
    
    bookTag4() {
      return (this.value["etiquetas"] != null && this.value["etiquetas"].length > 3 ? this.value["etiquetas"][3] : "");
    },
    
    bookTag5() {
      return (this.value["etiquetas"] != null && this.value["etiquetas"].length > 4 ? this.value["etiquetas"][4] : "");
    },
    
    bookTag6() {
      return (this.value["etiquetas"] != null && this.value["etiquetas"].length > 5 ? this.value["etiquetas"][5] : "");
    }
    
  },

  created() {
    var self = this;
    if (this.mold == "full") {
    }
  },

  methods: {
    readBook: function () {
      this.$emit('open', this.value)
    }
  },

	//https://codepen.io/choogoor/pen/YWBxAg
	//https://codepen.io/veronicadev/full/WJyOwG
	//https://www.creative-tim.com/product/rotating-css-card

  template: ''
    + '<div class="card-container">'
//    + '<div class="card-container manual-flip">'    
    +   '<div class="card">'
    +     '<div class="front">'
    
    
    + '<div class="example-2 card">'
    //+ '<div class="wrapper" style="background-image: url(https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg);">'
    //+ '<div class="wrapper" style="background-image: url(http://covers.feedbooks.net/book/6174.jpg?size=large&t=1549045903);">'
    + '<div class="wrapper" v-bind:style="bookCover">'
    
/*
    + '<div class="header">'
    + '<ul class="menu-content">'
    + '<li><a href="#" class="fa fa-heart-o"><span>18</span></a></li>'
    + '</ul>'
    + '</div>'
*/
//    + '<div class="data">'
//    + '<div class="content">'
//    + '<span class="author">{{ value.author }}</span>'
//    + '<h1 class="title"><a href="#">Stranger Things: The sound of the Upside Down</a></h1>'
//    + '<h1 class="title"><a href="#">{{ value.title }}</a></h1>'
    
/*
    + '<p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>'
    + '<a href="#" class="button">Read more</a>'
*/
//    + '</div>'
//    + '</div>'
    + '</div>'
    + '</div>'
    
/*
    +       '<div class="cover">'
    +         '<img src="img/rotating_card_thumb3.png"/>'
    +       '</div>'
    +       '<div class="user">'
    +         '<img class="img-circle" src="img/rotating_card_profile.png"/>'
    +       '</div>'
    +       '<div class="content">'
    +         '<div class="main">'
    +           '<h3 class="name">Inna Corman</h3>'
    +           '<p class="profession">Product Manager</p>'
    +           '<p class="text-center">"I\'m the new Sinatra, and since I made it here I can make it anywhere, yeah, they love me everywhere"</p>'
    +         '</div>'
    +         '<div class="footer">'
//    +           '<button class="btn btn-simple" onclick="rotateCard(this)">'
//    +             '<i class="fa fa-mail-forward"></i> Manual Rotation'
//    +           '</button>'
    +           '<div class="rating">'
    +             '<i class="fa fa-mail-forward"></i> Auto Rotation'
    +           '</div>'
    +         '</div>'
    +       '</div>'
*/

    +     '</div> <!-- end front panel -->'
    +     '<div class="back">'
    +       '<div class="header">'
//    +         '<h5 class="motto">"To be or not to be, this is my awesome motto!"</h5>'
    +         '<h5 class="motto">{{ value.author }}</h5>'
    +       '</div>'
    +       '<div class="content">'
    +         '<div class="main">'
    +           '<h4 class="text-center">{{ value.title }}</h4>'
    +           '<p class="text-center">{{ bookDesc }}</p>'
    
    +           '<button type="button" class="btn btn-primary btn-round"><i class="fas fa-book"></i> LEER</button>'
    
    +           '<div class="stats-container">'
    +             '<div class="stats">'
    +               '<h4>{{ bookTag1 }}</h4>'
    +               '<p>'
    +                 '{{ bookTag4 }}'
    +               '</p>'
    +             '</div>'
    +             '<div class="stats">'
    +               '<h4>{{ bookTag2 }}</h4>'
    +               '<p>'
    +                 '{{ bookTag5 }}'
    +               '</p>'
    +             '</div>'
    +             '<div class="stats">'
    +               '<h4>{{ bookTag3 }}</h4>'
    +               '<p>'
    +                 '{{ bookTag6 }}'
    +               '</p>'
    +             '</div>'
    +           '</div>'
    +         '</div>'
    +       '</div>'
    +       '<div class="footer">'
    +         '<div class="social-links text-center">'
//    +           '<a href="https://creative-tim.com" class="facebook"><i class="fab fa-facebook fa-fw"></i></a>'
    +           '<a :href="bookHome" class="google" target="_blank"><i class="fas fa-home"></i></a>'
    +           '<a :href="bookUrl" class="twitter" target="_blank"><i class="fas fa-download"></i></a>'
    +         '</div>'
    +       '</div>'
    +     '</div> <!-- end back panel -->'
    +   '</div> <!-- end card -->'
    + '</div> <!-- end card-container -->'

})
