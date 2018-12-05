Vue.component('post', {
  props: ['value', 'mold'], 

  methods: {
    openPost: function () {
      this.value.open = !this.value.open;
    },

    openOption: function () {
      this.$emit('open', this.value);
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
        result = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/oatmeal.jpg";
      }
      return result;
    },
    
    content() {
      var result = null;
      if (this.value.content) {
        result = _dao.mdHtml(this.value.content);
/*
        var converter = new showdown.Converter();
        //converter.setOption('tables', true);
        //converter.setOption('extensions', ['twitter']);
        result = converter.makeHtml(this.value.content);
*/
      }
      return result;
    },
    
    btnOpenClass() {
      var result = "icon far";
      
      if (this.value.open && this.value.open == true) {
        result += " fa-folder-open";
      }
      else {
        result += " fa-folder";
      }
      
      return result;
    },
    
    imgOpenClass() {
      var result = null;
      
      if (this.value.open && this.value.open == true) {
        result = "bg-header";
      }
      else {
        result = "bg-header crop";
      }
      
      return result;
    },
    
    //sentDate: '02/12/2018 08:50',
    //eventDate: '04/12/2018 17:00',
    timeFalta () {//Faltan 15 min
      var result = null;
      
      if (this.value.eventDate) {
        //new Date('2011-04-11T10:20:30Z').
        var dayHour = this.value.eventDate.split(" ");
        var day = dayHour[0].split("/");
        var textDate = day[2] + "-" + day[1] + "-" + day[0] + "T" + dayHour[1] + ":00Z";
  
        //current to eventDate
        var target_date = new Date(textDate).getTime();

        var days, hours, minutes, seconds;
        var current_date = new Date().getTime();


        var seconds_left = (target_date - current_date) / 1000;

        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);

        seconds = parseInt(seconds_left % 60);
  
        if (days > 0) {
          result = "Faltan " + days + " días";
        }
        else if (hours > 0) {
          result = "Faltan " + hours + " horas";
        }
        else if (minutes > 0) {
          result = "Faltan " + minutes + " minutos";
        }
        else {
          result = "CADUCADA";
        }
      }
      return result;
    },
    
    timeEventDate () {//03/12/2018 09:00
      var result = null;
      if (this.value.eventDate) {
        result = this.value.eventDate;
      }
      return result;
    },
    
    timeAgo () {//Enviado hace 15'
      var result = null;
      
      if (this.value.sentDate) {
        //new Date('2011-04-11T10:20:30Z').
        var dayHour = this.value.sentDate.split(" ");
        var day = dayHour[0].split("/");
        var textDate = day[2] + "-" + day[1] + "-" + day[0] + "T" + dayHour[1] + ":00Z";
      
        //sentDate to current
        var target_date = new Date(textDate).getTime();
      
        var days, hours, minutes, seconds;
        var current_date = new Date().getTime();


        var seconds_left = (current_date - target_date) / 1000;

        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);

        seconds = parseInt(seconds_left % 60);
      
        if (days > 0) {
          result = "Publicado hace " + days + " días";
        }
        else if (hours > 0) {
          result = "Publicado hace " + hours + " horas";
        }
        else if (minutes > 0) {
          result = "Publicado hace " + minutes + " minutos";
        }
      }

      return result;
    },
    
    moldHome() {
      return this.mold == "home";
    },
    
    moldDefault() {
      return this.mold == null;
    },    
    
  },

  //https://freefrontend.com/css-cards/
  //https://codepen.io/klesht/pen/pjjegK
  template: ''
    + '<template v-if="moldDefault">'
    + '<div class="recipe-card">'
    +   '<aside>'

    +     '<div v-bind:class="imgOpenClass">'
    +       '<img :src="image" :alt="value.title" />'
    +     '</div>'

//    +     '<a href="#" class="button"><span class="icon icon-play"></span></a>'
    +     '<a href="javascript:void(0)" class="button" @click="openPost()"><i v-bind:class="btnOpenClass"></i></a>'
    //<i class="far fa-folder"></i>
    //<i class="far fa-folder-open"></i>
    
    +     '<div class="footer" />'
    +   '</aside>'

    +   '<article>'

    +     '<h2>{{ value.title }}</h2>'//Chai Oatmeal
    +     '<template v-if="value.open">'
    +       '<h3>{{ value.subtitle }}</h3>'//Breakfast

    +       '<ul>'
//    +         '<li><span class="icon icon-users"></span><span>1</span></li>'
//    +         '<li><span class="icon icon-clock"></span><span>15 min</span></li>'
    +         '<li v-if="timeFalta"><i class="far fa-clock"></i> <span>{{ timeFalta }}</span></li>'
//    +         '<li><span class="icon icon-level"></span><span>Beginner level</span></li>'
//    +         '<li><span class="icon icon-calories"></span><span>248</span></li>'
    +         '<li v-if="timeEventDate"><i class="far fa-calendar-alt"></i> <span>{{ timeEventDate }}</span></li>'
    +         '<li v-if="timeAgo"><i class="fas fa-pencil-alt"></i> <span>{{ timeAgo }}</span></li>'
    +       '</ul>'

/*
    +       '<p>For an extra thick and creamy bowl, add oat bran.  It\'ll make for a hearty helping and also add more fiber to your meal.  If you love the taste of chai, you\'ll enjoy this spiced version with coriander, cinnamon, and turmeric.</p>'

    +       '<p class="ingredients"><span>Ingredients:&nbsp;</span>Milk, salt, coriander, cardamom, cinnamon, turmeric, honey, vanilla extract, regular oats, oat bran.</p>'
*/
    +       '<div class="content" v-if="content" v-html="content"></div>'

    +     '</template>'
    +   '</article>'
    + '</div>'
    + '</template>'
  
    + '<template v-else-if="moldHome">'
    + '<div class="recipe-card" @click="openOption()">'
    +   '<aside>'

    +     '<div v-bind:class="imgOpenClass">'
    +       '<img :src="image" :alt="value.title" />'
    +     '</div>'

    +     '<div class="footer" />'
    +   '</aside>'

    +   '<article>'

    +     '<h2>{{ value.title }}</h2>'//Chai Oatmeal
    +     '<template>'
    +       '<h3>{{ value.subtitle }}</h3>'//Breakfast
    +     '</template>'
    +   '</article>'
    + '</div>'
    + '</template>'
    
    
})
