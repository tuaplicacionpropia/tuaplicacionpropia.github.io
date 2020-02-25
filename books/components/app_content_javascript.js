Vue.component('app_content_javascript', {
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
    + '<div class="section section-javascript" id="javascriptComponents">'
    + '<div class="container">'
    + '<h3 class="title">Javascript components</h3>'
    + '<div class="row" id="modals">'
    + '<div class="col-md-6">'
    + '<h4>Modal</h4>'
    + '<button class="btn btn-primary" data-toggle="modal" data-target="#myModal">'
    + 'Launch Modal'
    + '</button>'
    + '<button class="btn btn-warning" data-toggle="modal" data-target="#myModal1">'
    + 'Launch Modal Mini'
    + '</button>'
    + '</div>'
    + '<div class="col-md-6">'
    + '<h4>Popovers</h4>'
    + '<button type="button" class="btn btn-default" data-container="body" data-original-title="Popover On Left" data-toggle="popover" data-placement="left" data-content="Here will be some very useful information about his popover." data-color="primary">'
    + 'On left'
    + '</button>'
    + '<button type="button" class="btn btn-default" data-container="body" data-original-title="Popover on Top" data-toggle="popover" data-placement="top" data-content="Here will be some very useful information about his popover.">'
    + 'On top'
    + '</button>'
    + '<button type="button" class="btn btn-default" data-container="body" data-original-title="Popover on Right" data-toggle="popover" data-placement="right" data-content="Here will be some very useful information about his popover.<br> Here will be some very useful information about his popover.">'
    + 'On right'
    + '</button>'
    + '<button type="button" class="btn btn-default" data-container="body" data-original-title="Popover on Bottom" data-toggle="popover" data-placement="bottom" data-content="Here will be some very useful information about his popover.">'
    + 'On bottom'
    + '</button>'
    + '</div>'
    + '<br />'
    + '<br />'
    + '<div class="col-md-6">'
    + '<h4>Datepicker</h4>'
    + '<div class="row">'
    + '<div class="col-md-6">'
    + '<div class="datepicker-container">'
    + '<div class="form-group">'
    + '<input type="text" class="form-control date-picker" value="10/05/2016" data-datepicker-color="primary">'
    + '</div>'
    + '</div>'
    + '</div>'
    + '</div>'
    + '</div>'
    + '<div class="col-md-6">'
    + '<h4>Tooltips</h4>'
    + '<button type="button" class="btn btn-default btn-tooltip" data-toggle="tooltip" data-placement="left" title="Tooltip on left" data-container="body" data-animation="true" data-delay="100">On left</button>'
    + '<button type="button" class="btn btn-default btn-tooltip" data-toggle="tooltip" data-placement="top" title="Tooltip on top" data-container="body" data-animation="true">On top</button>'
    + '<button type="button" class="btn btn-default btn-tooltip" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom" data-container="body" data-animation="true">On bottom</button>'
    + '<button type="button" class="btn btn-default btn-tooltip" data-toggle="tooltip" data-placement="right" title="Tooltip on right" data-container="body" data-animation="true">On right</button>'
    + '<div class="clearfix"></div>'
    + '<br>'
    + '<br>'
    + '</div>'
    + '</div>'
    + '</div>'
    + '</div>'
    

})
