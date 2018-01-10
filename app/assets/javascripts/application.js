// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
= require turbolinks
//= require_tree .

class Application(tornado.web.Application):
        def __init__(self):
                handlers = [
                        (r"/main", mainHandler),
                        (r"/sentPolygon", formHandler),
                        (r'/JS/(.*)', tornado.web.StaticFileHandler, {'path': 'JS/'}),
                        (r'/Libs/jquery/(.*)', tornado.web.StaticFileHandler, {'path': 'Libs/jquery/'}),
                        (r'/Libs/jquery/css/(.*)', tornado.web.StaticFileHandler, {'path': 'Libs/jquery/css/'}),
                        (r'/(.*)', tornado.web.StaticFileHandler, {'path': '/'}),
            ]