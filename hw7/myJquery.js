var my_$ = (function() {
  'use strict';
  
  function Func(selector) {
    var Obj = function(selector) {
      this.nodes = document.querySelectorAll(selector);
      this.length = this.nodes.length;
    };
    
    Obj.prototype.width = function(w) {
      var result = [];
      for (var i=0; i<this.length; i++) {
        if (typeof w !== 'undefined') this.nodes[i].style.width = w;
        result.push(this.nodes[i].style.width || '0px');
      }
      return (typeof w !== 'undefined' ? this : result);
    };
    
    Obj.prototype.height = function(h) {
      var result = [];
      for (var i=0; i<this.length; i++) {
        if (typeof h !== 'undefined') this.nodes[i].style.height = h;
        result.push(this.nodes[i].style.height || '0px');
      }
      return (typeof h !== 'undefined' ? this : result);
    };
    
    Obj.prototype.setCss = function(param1, param2) {
      if (param1 instanceof Object) {
        for (var prop in param1) {
          if (param1.hasOwnProperty(prop)) {  
            for (var j=0; j<this.length; j++) {
              this.nodes[j].style[prop] = param1[prop];
            }
          }
        }
      }
      else {
        for (var i=0; i<this.length; i++) {
          this.nodes[i].style[param1] = param2;
        }
      }
    };
    
    Obj.prototype.css = function(param1, param2, param3) {
      var self = this;
      
      if (typeof param3 !== 'undefined') {
        setTimeout(function() {self.setCss(param1, param2);}, param3);
      }
      
      else {
        if (param1 instanceof Object && typeof param2 !== 'undefined') {
          setTimeout(function() {self.setCss(param1, param2);}, param2);
        }
        else {
          this.setCss(param1, param2);
        }
      }
      return this;
    };

    return new Obj(selector);
  }
  
  return Func;
})();