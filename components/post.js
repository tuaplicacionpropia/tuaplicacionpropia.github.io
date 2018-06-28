Vue.component('post', {
  props: ['value', 'mold'], 

  methods: {
    readArticle: function () {
      this.$emit('open', this.value)
    }
  },
  
  created() {
    var self = this;
    if (this.mold == "full") {
/*
      var disqus_config = function () {
        this.page.url = "url";
        this.page.identifier = "iden";
      };
      var d = document, s = d.createElement('script');
      s.src = 'https://quefacilito.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      //(d.head || d.body).appendChild(s);
      d.body.appendChild(s);
*/
    }
//    + '  <script>'

//    + '  /**'
//    + '   *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.'
//    + '   *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/'
//    + '  /*'
//    + '  var disqus_config = function () {'
//    + '    this.page.url = "url";  // Replace PAGE_URL with your page\'s canonical URL variable'
//    + '    this.page.identifier = "iden"; // Replace PAGE_IDENTIFIER with your page\'s unique identifier variable'
//    + '  };'
//    + '  */'
//    + '  (function() { // DON\'T EDIT BELOW THIS LINE'
//    + '    var d = document, s = d.createElement(\'script\');'
//    + '    s.src = \'https://quefacilito.disqus.com/embed.js\';'
//    + '    s.setAttribute(\'data-timestamp\', +new Date());'
//    + '    (d.head || d.body).appendChild(s);'
//    + '  })();'
    
//    + '  </script>'

  },
  
  computed: {
    lines() {
      var result = null;
      if (this.value.description) {
        result = this.value.description.split("\n");
      }
      return result;
    },
    
    linesTwo() {
      var result = null;
      if (this.value.description) {
        var lines = this.value.description.split("\n");
        result = [];
        var i = 0;
        for (i = 0; i < Math.min(lines.length, 2); i++) {
          result.push(lines[i]);
        }
      }
      return result;
    },
    
    fullTitle() {
      var result = null;
      if (this.value.title != null) {
        result = this.value.title;
      }
      if (this.value.subtitle != null) {
        if (result != null) {
          result = result + ": " + this.value.subtitle;
        }
        else {
          result = this.value.subtitle;
        }
      }
      return result;
    },
    
    bannerBackground() {
      var result = "";
      if (this.value.image != null) {
        var valueBackground = 'url(' + this.value.image + ') no-repeat center 0px';
        result = { 'background': valueBackground };
      }
      return result;
    },
    
    content() {
      var result = null;
      if (this.value.content) {
        result = _dao.mdHtml(this.value.content);
      }
      return result;
    },
    
    image () {
      var result = null;
      if (this.value.image) {
        result = 'posts/' + this.value.image;
      }
      return result;
    },
    
    tagLabel() {
      var result = null;
      result = this.value.tag.charAt(0).toUpperCase() + this.value.tag.slice(1);
      return result;
    },
    
    moldHome() {
      return this.mold == "home" || this.mold == null;
    },
    
    moldTop() {
      return this.mold == "top";
    },
    
    moldResume() {
      return this.mold == "resume";
    },

    moldFull() {
      return this.mold == "full";
    },

    moldBanner() {
      return this.mold == "banner";
    }
  },
  
  template: ''
    + '<div v-if="moldHome">'
    +   '<div class="soci">'
    +     '<ul>'
    +       '<li><a href="#" class="facebook-1"> </a></li>'
    +       '<li><a href="#" class="facebook-1 twitter"> </a></li>'
    +       '<li><a href="#" class="facebook-1 chrome"> </a></li>'
    +       '<li><a href="#"><i class="glyphicon glyphicon-envelope"> </i></a></li>'
    +       '<li><a href="#"><i class="glyphicon glyphicon-print"> </i></a></li>'
    +       '<li><a href="#"><i class="glyphicon glyphicon-plus"> </i></a></li>'
    +     '</ul>'
    +   '</div>'
    +   '<div class="tc-ch">'

    +     '<div class="tch-img postImg postImg_horizontal">'
    +       '<a href="#" v-on:click="readArticle()">'
    +         '<img v-if="!image" src="images/2.jpg" class="img-responsive" alt=""/>'
    +         '<img v-if="image" v-bind:src="image" class="img-responsive" alt=""/>'
    +         '<div class="postBorder"></div>'
    +         '<div class="postDescription">'
    +           '<div class="postTitle hit-the-floor">{{ value.title }}'
    +           '<div class="postSeparator" v-if="value.subtitle"></div>'
    +           '<div class="postSubtitle" v-if="value.subtitle">{{ value.subtitle }}</div>'
    +           '</div>'
    +         '</div>'
    +         '<div class="postLogo"><img src="logo.png" /></div>'
    +       '</a>'
    +     '</div>'
    +     '<a v-if="value.tag" class="blog pink" href="singlepage.html">{{ tagLabel }}</a>'
//    +     '<h3><a href="singlepage.html">{{ value.title }}</a></h3>'
    +     '<h3 v-if="value.title"><a href="#" v-on:click="readArticle()">{{ value.title }}</a></h3>'
    +     '<p v-for="line in lines">{{ line }}</p>'
    +     '<p v-if="content" v-html="content"></p>'

/*
    +     '<p v-if="value.subtitle1">{{ value.subtitle1 }}</p>'
    +     '<p v-if="value.subtitle2">{{ value.subtitle2 }}</p>'
*/
    +     '<div class="blog-poast-info">'
    +       '<ul>'
    +         '<li><i class="glyphicon glyphicon-user"> </i><a class="admin" href="#"> Admin </a></li>'
    +         '<li><i class="glyphicon glyphicon-calendar"> </i>30-12-2015</li>'
/*
    +         '<li><i class="glyphicon glyphicon-comment"> </i><a class="p-blog" href="#">3 Comments </a></li>'
    +         '<li><i class="glyphicon glyphicon-heart"> </i><a class="admin" href="#">5 favourites </a></li>'
    +         '<li><i class="glyphicon glyphicon-eye-open"> </i>1.128 views</li>'
*/
    +       '</ul>'
    +     '</div>'
    +   '</div>'
    + '</div>'
    
    + '<div v-else-if="moldTop" class="blog-grids" v-on:click="readArticle()">'
    +   '<div class="blog-grid-left">'
    +     '<a href="#">'
//    +       '<img src="images/6.jpg" class="img-responsive" alt=""/>'
    +       '<img v-if="!image" src="images/2.jpg" class="img-responsive" alt=""/>'
    +       '<img v-if="image" v-bind:src="image" class="img-responsive" alt=""/>'
    +     '</a>'
    +   '</div>'
    +   '<div class="blog-grid-right" v-if="fullTitle">'
    +     '<h5><a href="#">{{ fullTitle }}</a></h5>'
    +   '</div>'
    +   '<div class="clearfix"> </div>'
    + '</div>'
    
    + '<div v-else-if="moldResume" class="tech-btm">'
//    +   '<img src="images/banner1.jpg" class="img-responsive" alt=""/>'
    +   '<img v-if="!image" src="images/banner1.jpg" class="img-responsive" alt=""/>'
    +   '<img v-if="image" v-bind:src="image" class="img-responsive" alt=""/>'
    + '</div>'
    
//background: url(../images/2.jpg) no-repeat 0px 0px
    + '<div v-else-if="moldBanner" class="banner"  v-bind:style="bannerBackground">'
    +   '<div class="container">'
    +     '<h2>{{ value.title }}</h2>'
    +     '<p v-for="line in linesTwo">{{ line }}</p>'
    +     '<a v-on:click="readArticle()" href="#">READ ARTICLE</a>'
    +   '</div>'
    + '</div>'
    
    + '<div v-else-if="moldFull" class="business">'
    + '  <div class=" blog-grid2">'
    +     '<div class="tch-img postImg postImg_horizontal">'
    +       '<a href="#" v-on:click="readArticle()">'
    +         '<img v-if="!image" src="images/2.jpg" class="img-responsive" alt=""/>'
    +         '<img v-if="image" v-bind:src="image" class="img-responsive" alt=""/>'
    +         '<div class="postBorder"></div>'
    +         '<div class="postDescription">'
    +           '<div class="postTitle hit-the-floor">{{ value.title }}'
    +           '<div class="postSeparator" v-if="value.subtitle"></div>'
    +           '<div class="postSubtitle" v-if="value.subtitle">{{ value.subtitle }}</div>'
    +           '</div>'
    +         '</div>'
    +         '<div class="postLogo"><img src="logo.png" /></div>'
    +       '</a>'
    +     '</div>'
/*    
    + '    <img v-if="!value.image" src="images/1.jpg" class="img-responsive" alt="">'
    + '    <img v-if="value.image" v-bind:src="value.image" class="img-responsive" alt="">'
*/
    + '    <div class="blog-text">'
    +       '<h5>{{ value.title }}</h5>'
    +       '<p v-for="line in lines">{{ line }}</p>'
    +       '<p v-if="content" v-html="content"></p>'
    + '    </div>'
    + '  </div>'
    
//    + '  <div id="disqus_thread"></div>'
    
//    + '  <script>'

//    + '  /**'
//    + '   *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.'
//    + '   *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/'
//    + '  /*'
//    + '  var disqus_config = function () {'
//    + '    this.page.url = "url";  // Replace PAGE_URL with your page\'s canonical URL variable'
//    + '    this.page.identifier = "iden"; // Replace PAGE_IDENTIFIER with your page\'s unique identifier variable'
//    + '  };'
//    + '  */'
//    + '  (function() { // DON\'T EDIT BELOW THIS LINE'
//    + '    var d = document, s = d.createElement(\'script\');'
//    + '    s.src = \'https://quefacilito.disqus.com/embed.js\';'
//    + '    s.setAttribute(\'data-timestamp\', +new Date());'
//    + '    (d.head || d.body).appendChild(s);'
//    + '  })();'
    
//    + '  </script>'
//    + '  <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>'

/*
    + '  <div class="comment-top">'
    + '    <h2>Comment</h2>'
    + '    <div class="media-left">'
    + '      <a href="#">'
    + '        <img src="images/si.png" alt="">'
    + '      </a>'
    + '    </div>'
    + '    <div class="media-body">'
    + '      <h4 class="media-heading">Richard Spark</h4>'
    + '      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>'
    + '      <!-- Nested media object -->'
    + '      <div class="media">'
    + '        <div class="media-left">'
    + '          <a href="#">'
    + '            <img src="images/si.png" alt="">'
    + '          </a>'
    + '        </div>'
    + '        <div class="media-body">'
    + '          <h4 class="media-heading">Joseph Goh</h4>'
    + '          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>'
    + '          <!-- Nested media object -->'
    + '          <div class="media">'
    + '            <div class="media-left">'
    + '              <a href="#">'
    + '                <img src="images/si.png" alt="">                 '
    + '              </a>'
    + '            </div>'
    + '            <div class="media-body">'
    + '              <h4 class="media-heading">Melinda Dee</h4>'
    + '              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>'
    + '            </div>'
    + '          </div>'
    + '        </div>'
    + '      </div>'
    + '      <!-- Nested media object -->'
    + '      <div class="media">'
    + '        <div class="media-left">'
    + '          <a href="#">'
    + '            <img src="images/si.png" alt="">'
    + '          </a>'
    + '        </div>'
    + '        <div class="media-body">'
    + '          <h4 class="media-heading">Rackham</h4>'
    + '          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>'
    + '        </div>'
    + '      </div>'
    + '    </div>'
    + '  </div>'
    + '  <div class="comment">'
    + '    <h3>Leave a Comment</h3>'
    + '    <div class=" comment-bottom">'
    + '      <form>'
    + '        <input type="text" placeholder="Name">'
    + '        <input type="text" placeholder="Email">'
    + '        <input type="text" placeholder="Subject">'
    + '        <textarea placeholder="Message" required=""></textarea>'
    + '        <input type="submit" value="Send">'
    + '      </form>'
    + '    </div>'
    + '  </div>'
*/
    + '</div>'
    
    
    
})
