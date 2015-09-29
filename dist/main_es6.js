'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

console.log('test');

var SVGClassToggler = (function () {
  function SVGClassToggler() {
    var trigger = arguments.length <= 0 || arguments[0] === undefined ? 'js-toggle-trigger' : arguments[0];
    var target = arguments.length <= 1 || arguments[1] === undefined ? 'js-toggle-target' : arguments[1];

    _classCallCheck(this, SVGClassToggler);

    this.isActive = false;
    this.trigger = $(trigger);
    this.target = $(target);
    this.klass = 'active';
  }

  _createClass(SVGClassToggler, [{
    key: 'bindClicks',
    value: function bindClicks() {
      var _this = this;

      $(this.trigger).click(function (e) {
        e.preventDefault();
        _this.toggleClass();
      });
    }
  }, {
    key: 'addClassSVG',
    value: function addClassSVG() {
      var $el = $(this.target);
      if ($el.length > 1) {
        this.addMultipleClasses($el);
      } else {
        this.addSingularClass($el);
      }
    }
  }, {
    key: 'removeClassSVG',
    value: function removeClassSVG() {
      var $el = $(this.target);
      if ($el.length > 1) {
        this.removeMultipleClasses($el);
      } else {
        this.removeSingularClass($el);
      }
    }
  }, {
    key: 'removeSingularClass',
    value: function removeSingularClass(elem) {
      var tempClass = $(elem).attr('class');
      var newClass = tempClass.replace(' ' + this.klass, '');
      $(elem).attr('class', newClass);
    }
  }, {
    key: 'removeMultipleClasses',
    value: function removeMultipleClasses(elems) {
      var self = this;
      $(elems).each(function () {
        self.removeSingularClass($(this));
      });
    }
  }, {
    key: 'addSingularClass',
    value: function addSingularClass(elem) {
      var tempClass = $(elem).attr('class');
      $(elem).attr('class', tempClass + ' ' + this.klass);
    }
  }, {
    key: 'addMultipleClasses',
    value: function addMultipleClasses(elems) {
      var self = this;
      $(elems).each(function () {
        self.addSingularClass($(this));
      });
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass() {
      if (this.isActive) {
        this.removeClassSVG();
        return;
      }
      this.addClassSVG();
    }
  }]);

  return SVGClassToggler;
})();
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToggleDebouncer = (function (_SVGClassToggler) {
  _inherits(ToggleDebouncer, _SVGClassToggler);

  function ToggleDebouncer(toggleClass, targetClass) {
    _classCallCheck(this, ToggleDebouncer);

    _get(Object.getPrototypeOf(ToggleDebouncer.prototype), "constructor", this).call(this, toggleClass, targetClass);
    this.timer;
    this.bindClicks();
  }

  _createClass(ToggleDebouncer, [{
    key: "addClassSVG",
    value: function addClassSVG() {
      var _this = this;

      _get(Object.getPrototypeOf(ToggleDebouncer.prototype), "addClassSVG", this).call(this);
      this.isActive = true;
      this.checkIfActiveIn(2000).then(function (id) {
        return _this.checkIfShouldDeactivate(id);
      });
    }
  }, {
    key: "removeClassSVG",
    value: function removeClassSVG() {
      _get(Object.getPrototypeOf(ToggleDebouncer.prototype), "removeClassSVG", this).call(this);
      this.isActive = false;
    }
  }, {
    key: "checkIfShouldDeactivate",
    value: function checkIfShouldDeactivate(id) {
      if (this.timer === id) {
        this.removeClassSVG();
      }
    }
  }, {
    key: "checkIfActiveIn",
    value: function checkIfActiveIn(ms) {
      var newTimer,
          promise = new Promise(function (resolve) {
        newTimer = setTimeout(function () {
          resolve(newTimer);
        }, ms);
      });
      this.timer = newTimer;
      return promise;
    }
  }]);

  return ToggleDebouncer;
})(SVGClassToggler);