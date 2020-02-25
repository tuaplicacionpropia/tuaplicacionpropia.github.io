Vue.component('app_content_pagination', {
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
    + '<div class="section section-pagination">'
    + '<div class="container">'
    + '<div class="row">'
    + '<div class="col-md-6">'
    + '<h4>Progress Bars</h4>'
    + '<div class="progress-container">'
    + '<span class="progress-badge">Default</span>'
    + '<div class="progress">'
    + '<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 25%;">'
    + '<span class="progress-value">25%</span>'
    + '</div>'
    + '</div>'
    + '</div>'
    + '<div class="progress-container progress-primary">'
    + '<span class="progress-badge">Primary</span>'
    + '<div class="progress">'
    + '<div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">'
    + '<span class="progress-value">60%</span>'
    + '</div>'
    + '</div>'
    + '</div>'
    + '<br>'
    + '<h4>Navigation Pills</h4>'
    + '<ul class="nav nav-pills nav-pills-primary nav-pills-just-icons" role="tablist">'
    + '<li class="nav-item">'
    + '<a class="nav-link" data-toggle="tab" href="#active" role="tablist">'
    + '<i class="far fa-gem"></i>'
    + '</a>'
    + '</li>'
    + '<li class="nav-item">'
    + '<a class="nav-link active" data-toggle="tab" href="#link" role="tablist">'
    + '<i class="fa fa-thermometer-full"></i>'
    + '</a>'
    + '</li>'
    + '<li class="nav-item">'
    + '<a class="nav-link" data-toggle="tab" href="#link" role="tablist">'
    + '<i class="fa fa-suitcase"></i>'
    + '</a>'
    + '</li>'
    + '<li class="nav-item">'
    + '<a class="nav-link disabled" data-toggle="tab" href="#disabled" role="tablist">'
    + '<i class="fa fa-exclamation"></i>'
    + '</a>'
    + '</li>'
    + '</ul>'
    + '</div>'
    + '<div class="col-sm-6">'
    + '<h4>Pagination</h4>'
    + '<ul class="pagination pagination-primary">'
    + '<li class="page-item active">'
    + '<a class="page-link" href="#">1</a>'
    + '</li>'
    + '<li class="page-item">'
    + '<a class="page-link" href="#link">2</a>'
    + '</li>'
    + '<li class="page-item">'
    + '<a class="page-link" href="#link">3</a>'
    + '</li>'
    + '<li class="page-item">'
    + '<a class="page-link" href="#link">4</a>'
    + '</li>'
    + '<li class="page-item">'
    + '<a class="page-link" href="#link">5</a>'
    + '</li>'
    + '</ul>'
    + '<ul class="pagination">'
    + '<li class="page-item">'
    + '<a class="page-link" href="#link" aria-label="Previous">'
    + '<span aria-hidden="true"><i class="fa fa-angle-double-left" aria-hidden="true"></i></span>'
    + '</a>'
    + '</li>'
    + '<li class="page-item">'
    + '<a class="page-link" href="#link">1</a>'
    + '</li>'
    + '<li class="page-item active">'
    + '<a class="page-link" href="#link">2</a>'
    + '</li>'
    + '<li class="page-item">'
    + '<a class="page-link" href="#link">3</a>'
    + '</li>'
    + '<li class="page-item">'
    + '<a class="page-link" href="#link" aria-label="Next">'
    + '<span aria-hidden="true"><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>'
    + '</a>'
    + '</li>'
    + '</ul>'
    + '<br>'
    + '<h4>Labels</h4>'
    + '<span class="badge badge-default">Default</span>'
    + '<span class="badge badge-primary">Primary</span>'
    + '<span class="badge badge-success">Success</span>'
    + '<span class="badge badge-info">Info</span>'
    + '<span class="badge badge-warning">Warning</span>'
    + '<span class="badge badge-danger">Danger</span>'
    + '<span class="badge badge-neutral">Neutral</span>'
    + '</div>'
    + '</div>'
    + '<br>'
    + '<div class="space"></div>'
    + '<h4>Notifications</h4>'
    + '</div>'
    + '</div>'
    

})
