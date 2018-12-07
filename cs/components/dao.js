var DAO;

/*
 * DATABASE:
 *  tablones
 *  mensajes
 *  usuarios
 *  version
*/

var DB_VERSION = "0.26";

function DAO () {

  this._buildPosts = function () {
    var result = [];
    result.push({
      id: 1,
      title: "ERROR333",
      created: "20/04/2018T01:27",
      subtitle1: "1If you want to enable the fading transition effect while closing the alert boxes, apply the classes <code>.fade</code> and <code>.in</code> to them along with the contextual class.",
      subtitle2: "2If you want to enable the fading transition effect while closing the alert boxes, apply the classes <code>.fade</code> and <code>.in</code> to them along with the contextual class.",
      type: "error"
    });
    result.push({
      id: 2,
      title: "2ERROR333",
      created: "20/04/2018T01:27",
      subtitle1: "3If you want to enable the fading transition effect while closing the alert boxes, apply the classes <code>.fade</code> and <code>.in</code> to them along with the contextual class.",
      subtitle2: "4If you want to enable the fading transition effect while closing the alert boxes, apply the classes <code>.fade</code> and <code>.in</code> to them along with the contextual class.",
      type: "error"
    });

    return result;
  };

  this.buildContacts = function() {
    var result = [];
    
    result.push({
      title: "Administración", 
      subtitle: "Oficina principal", 
      address1: "c/ Lomo del Diviso s/n, C.P. 35018",
      address2: "Las Palmas de Gran Canaria",
      mapUrl: "https://goo.gl/maps/GyHCGHvvzd82",
      tlf: "828 113 400",
      fax: "928 43 98 19",
      email: "info@canterburyschool.com",
      web: "http://www.canterburyschool.com",
      icon: "statics/oficina_big.jpg"
    });
/*
    result.push({
      title: "Rubén Darío", 
      subtitle: "Infantil", 
      address1: "c/ Rubén Darío, 4, C.P. 35005",
      address2: "Las Palmas de Gran Canaria",
      mapUrl: "https://goo.gl/maps/A8yhucZeH5A2",
      tlf: "928 24 00 94",
      fax: "928 43 98 19",
      email: "rubendario@canterburyschool.com",
      web: "http://www.canterburyschool.com",
      icon: "statics/rubendario_big.jpg"
    });
*/
    result.push({
      title: "Milton", 
      subtitle: "Infantil", 
      address1: "c/ Plaza Milton, 3, C.P. 35005",
      address2: "Las Palmas de Gran Canaria", 
      mapUrl: "https://goo.gl/maps/ry8gpKHu3Xy",
      tlf: "828 11 30 23",
      fax: "928 43 98 19",
      email: "milton@canterburyschool.com",
      web: "http://www.canterburyschool.com",
      icon: "statics/milton.jpg"
    });
    result.push({
      title: "Maspalomas", 
      subtitle: "Infantil y Primaria", 
      address1: "Ctra. a Palmitos Park, 8, C.P. 35100",
      address2: "Maspalomas, Las Palmas",
      mapUrl: "https://goo.gl/maps/TotnCW4RKNP2",
      tlf: "928 14 28 89",
      fax: "928 14 28 89",
      email: "maspalomas@canterburyschool.com",
      web: "http://www.canterburyschool.com",
      icon: "statics/maspalomas_big.jpg"
    });
    result.push({
      title: "San Lorenzo", 
      subtitle: "Primaria y Secundaria", 
      address1: "Lomo del Diviso s/n, C.P. 35018",
      address2: "San Lorenzo, Las Palmas de Gran Canaria",
      mapUrl: "https://goo.gl/maps/GyHCGHvvzd82",
      tlf: "828 11 34 00",
      fax: "928 43 98 19",
      email: "info@canterburyschool.com",
      web: "http://www.canterburyschool.com",
      icon: "statics/sanlorenzo_big.jpg"
    });
    
    return result;
  };
  
  
  
  
  
  this.loadItems = function (fileAddr, attr, callback) {
    var _callback = callback;
    var _attr = attr;
    var self = this;
    self.loadData(fileAddr, function (data) {
      var postsId = data[_attr];
      var i;
      for (i = 0; i < postsId.length; i++) { 
        var index = i;
        var post = postsId[i];
        _callback(post);
      }
    });
  };
  
  this.loadPosts2 = function (menuId, callback) {
    var _callback = callback;
    var self = this;
    self.loadData(menuId, function (data) {
      var postsId = data['posts'];
      var realPosts = new Array(postsId.length);
      var i;
      for (i = 0; i < postsId.length; i++) { 
        var index = i;
        var postId = postsId[i];
        self.loadData('posts/' + postId + '.hjson', function (post) {
          post['id'] = postId;
          console.log("LOADED POST = " + postId);
          _callback(post);
          //realPosts[index] = post;
        });
      }
      
      //_callback(realPosts);
    });
  };

  this.loadOptions = function (callback) {
    var _callback = callback;
    var self = this;
    self.loadData('index.hjson', function (data) {
      _callback(data);
    });
  };

  this.mdHtml = function (text) {
    var result = null;
    var converter = new showdown.Converter();
    //var converter = new showdown.Converter({extensions: ['targetblank']});
    //converter.setOption('tables', true);
    //converter.setOption('extensions', ['twitter']);
    result = converter.makeHtml(text);
    return result;
  };

  //chromium-browser --disable-web-security --user-data-dir
  //https://stackoverflow.com/questions/45894871/get-request-leads-to-response-to-preflight-request-doesnt-pass-access-control
  //https://stackoverflow.com/questions/35588699/response-to-preflight-request-doesnt-pass-access-control-check
  //Use Any Javascript Library With Vue.js: https://vuejsdevelopers.com/2017/04/22/vue-js-libraries-plugins/
  this.loadData = function (res, callback) {
    //Vue.http.options.root = 'https://my-json-server.typicode.com/tuaplicacionpropia/mydbjson';
    //https://github.com/tuaplicacionpropia/mydbjson/raw/master/index.hjson
    //Vue.http.options.root = 'https://github.com/tuaplicacionpropia/mydbjson/raw/master';
    //Vue.http.options.root = 'https://raw.githubusercontent.com/tuaplicacionpropia/mydbjson/master';
    //Vue.http.options.root = 'https://github.com/tuaplicacionpropia/tuaplicacionpropia.github.io/raw/master';
//    Vue.http.options.root = 'https://raw.githubusercontent.com/tuaplicacionpropia/tuaplicacionpropia.github.io/master';
    Vue.http.options.root = 'https://raw.githubusercontent.com/tuaplicacionpropia/tuaplicacionpropia.github.io/master/cs/data';
    //Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';
    //Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
    
    console.log("loading data " + res + " ...");
    var _callback = callback;
    Vue.http.get(res, {responseType: 'text'}).then(response => {
      var rawText = response.body;
      console.log(rawText);
      var obj = Hjson.parse(rawText);
      //console.log("obj = " + Hjson.stringify(obj));
      //console.log("title = " + obj['title']);
      _callback(obj);
    }, response => {
      console.log(response);
    });
    
    //Vue.prototype.$loadData = _loadData
  };

}

var _dao = new DAO();
