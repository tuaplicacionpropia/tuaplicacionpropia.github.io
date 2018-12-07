Vue.component('contact', {
  props: ['value', 'mold'], 

  computed: {
    hrefTel() {
        return "tel:" + this.value.tlf
    },
    hrefFax() {
        return "fax:" + this.value.fax
    },
    hrefEmail() {
        return "mailto:" + this.value.email
    },
    moldModern() {
      //return this.mold = "modern"
      return true
    },
    moldClassic() {
      //return this.mold == null || this.mold = "classic"
      return false
    }
  },

  template: ''
    +  '<div v-if="moldClassic" class="well profile_view">'
    +    '<div class="col-sm-12">'
    +      '<a v-bind:href="hrefTel" target="_blank">'
    +        '<div class="row">'
    +          '<div class="col-sm-9">'
    +            '<h4 class="brief"><b>{{ value.title }}</b></h4>'
    +            '<h4 class="brief"><small><i>{{ value.subtitle }}</i></small></h4>'
    +          '</div>'

    +          '<div class="col-sm-3">'
    +            '<div class="text-center">'
    +              '<img v-bind:src="value.icon" alt="" class="img-circle img-responsive">'
    +            '</div>'
    +          '</div>'
    +        '</div>'
    +      '</a>'
    
    +      '<div class="left col-sm-12">'
    +        '<ul class="list-unstyled">'
    +          '<li><a v-bind:href="value.mapUrl" target="_blank"><i class="fa fa-map-marker"></i> {{ value.address1 }} <br> {{ value.address2 }} </a></li>'
    +          '<li>'
    +            '<div class="row">'
    +              '<div class="col-sm-6"><a v-bind:href="hrefTel" target="_blank"><i class="fa fa-phone"></i> {{ value.tlf }} </a></div>'
    +              '<div class="col-sm-6"><a v-bind:href="hrefFax" target="_blank"><i class="fa fa-fax"></i> {{ value.fax }} </a></div>'
    +            '</div>'
    +          '</li>'
    +          '<li><a v-bind:href="hrefEmail" target="_blank"><i class="fa fa-envelope"></i> {{ value.email }} </a></li>'
    +          '<li><a v-bind:href="value.web" target="_blank"><i class="fa fa-cloud"></i> {{ value.web }} </a></li>'
    +        '</ul>'
    +      '</div>'
    
    +    '</div>'
    +  '</div>'
    
    +  '<div v-else-if="moldModern" class="recipe-card">'
    +    '<aside>'
    +      '<img src="statics/logo_menu.png" style="position: absolute; width: 48px; top: 3%; left: 3%;" />'
    +      '<img v-bind:src="value.icon" v-bind:alt="value.title" />'
    +      '<a v-bind:href="hrefTel" class="contact_phone" target="_blank" style="padding-top:6px; padding-left:2px;">'
//    +        '<span class="icon icon-play"></span>'
    +        '<i class="fa fa-phone" style="color: #ffffff; font-size: 24px;"></i>'
    +      '</a>'
    +      '<a v-bind:href="hrefEmail" class="contact_phone2" target="_blank" style="">'
//    +        '<span class="icon icon-play"></span>'
    +        '<i class="fa fa-envelope" style="color: #ffffff; font-size: 12px;"></i>'
    +      '</a>'
    +      '<div class="footer"></div>'
    +    '</aside>'
    +    '<article>'
    +      '<h2>{{ value.title }}</h2>'
    +      '<h3>{{ value.subtitle }}</h3>'

    +      '<p><a v-bind:href="value.mapUrl" target="_blank" style="cursor: pointer;"><i class="fa fa-map-marker" style="color: #0f76b3;"></i> {{ value.address1 }} <br> {{ value.address2 }} </a></p>'
    +      '<p><span><a v-bind:href="hrefTel" target="_blank" style="cursor: pointer;"><i class="fa fa-phone" style="color: #3fb30f;"></i> {{ value.tlf }} </a></span><span style="margin-left: 32px;"><a v-bind:href="hrefFax" target="_blank" style="cursor: pointer;"><i class="fa fa-fax" style="color: #6c0fb3;"></i> {{ value.fax }} </a></span></p>'
    +      '<p><a v-bind:href="hrefEmail" target="_blank" style="cursor: pointer;"><i class="fa fa-envelope" style="color: #dc0d33;"></i> {{ value.email }} </a></p>'
    +      '<p><a v-bind:href="value.web" target="_blank" style="cursor: pointer;"><i class="fa fa-cloud" style="color: #830ddc;"></i> {{ value.web }} </a></p>'
    +    '</article>'
    +  '</div>'    
})
