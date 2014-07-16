'use strict';

module.exports = function(grunt) {
  grunt.registerTask('haven', 'Use Haven from Grunt', function() {
    var haven = require('haven').haven;
    var done = this.async();

    var callback = function(err) {
      if (err) {
        grunt.log.error(err);
      }
      done();
    }
    var commands = Array.prototype.slice.call(arguments);
    if(commands.length==1){
      var config = grunt.config.get("haven");
      if(config != null){
        var cache_path = config.cache;
        if(cache_path != null){
          haven.getConfig().local_cache = cache_path;
        }
      }
      haven.run(commands[0], callback);  
    }else if(commands.length==2){
      var config = grunt.config.get("haven")[commands[0]];
      if(config != null){
        var cache_path = config.cache;
        if(cache_path != null){
          haven.getConfig().local_cache = cache_path;
        }
      }
      haven.run(commands[1], callback);  
    }else{
      grunt.log.error("Invalid number of arguments: " + arguments);
    }
  });

};