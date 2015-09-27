'use strict';
var Toggle = function Toggle(trigger, target) {
	var reset = arguments.length <= 2 || arguments[2] === undefined ? 'false' : arguments[2];
	var klass = arguments.length <= 3 || arguments[3] === undefined ? 'active' : arguments[3];

	this.isActive = false;
	this.trigger = $(trigger);
	this.target = $(target);
	this.klass = klass;
	this.reset = reset;
	self.timer;
	this.bindClicks();
};
Toggle.prototype = {
	bindClicks: function bindClicks() {
		var self = this;
		$(this.trigger).click(function (e) {
			e.preventDefault();
			self.toggleClass();
		});
	},
	addClassSVG: function addClassSVG() {
		var $el = $(this.target);
		if ($el.length > 0) {
			this.addMultipleClasses($el);
		} else {
			this.addSingularClass($el);
		}
		this.isActive = true;
		if (this.reset == true) {
			var self = this;
			this.wait().then(function (id) {
				if (self.timer === id) {
					self.removeClassSVG();
				}
			})['catch'](function () {
				console.log('not active');
			});
		}
	},
	removeClassSVG: function removeClassSVG() {
		var $el = $(this.target);
		if ($el.length > 0) {
			this.removeMultipleClasses($el);
		} else {
			this.removeSingularClass($el);
		}
		this.isActive = false;
	},
	toggleClass: function toggleClass() {
		if (this.isActive) {
			this.removeClassSVG();
			return;
		}
		this.addClassSVG();
	},
	wait: function wait() {
		var self = this;
		return new Promise(function (resolve, reject) {
			var timer = setTimeout(function () {
				if (self.isActive) {
					resolve(timer);
				} else {
					reject();
				}
			}, 2000);
			self.timer = timer;
		});
	},
	removeSingularClass: function removeSingularClass(elem) {
		var tempClass = $(elem).attr('class');
		var newClass = tempClass.replace(' ' + this.klass, '');
		$(elem).attr('class', newClass);
	},
	removeMultipleClasses: function removeMultipleClasses(elems) {
		var tempClass, newClass;
		for (var i = 0; i < elems.length; i++) {
			tempClass = $(elems[i]).attr('class');
			newClass = tempClass.replace(' ' + this.klass, '');
			$(elems[i]).attr('class', newClass);
		}
	},
	addSingularClass: function addSingularClass(elem) {
		var tempClass = $(elem).attr('class');
		$(elem).attr('class', tempClass + ' ' + this.klass);
	},
	addMultipleClasses: function addMultipleClasses(elems) {
		var tempClass;
		for (var i = 0; i < elems.length; i++) {
			tempClass = $(elems[i]).attr('class');
			$(elems[i]).attr('class', tempClass + ' ' + this.klass);
		}
	}
};
var toggleable = new Toggle('.js-guide-button', '.logo-guide');
var toggleable2 = new Toggle('.js-animate-button', '.js-animated', true);