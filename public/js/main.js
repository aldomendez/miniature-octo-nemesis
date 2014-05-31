(function() {
  var ProgressBar,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  ProgressBar = (function() {
    function ProgressBar() {
      this.tick = __bind(this.tick, this);
      this.percent = 0;
    }

    ProgressBar.prototype.start = function() {
      var program;
      clearInterval(this.tickerId);
      program = app.get('plasma.program');
      switch (program) {
        case 1:
          this.minutes = 15;
          break;
        case 3:
          this.minutes = 2.5;
          break;
        case 5:
          this.minutes = 15;
      }
      this.inicio = new Date();
      this.final = new Date();
      this.final = new Date(this.final.setSeconds(this.final.getSeconds() + this.minutes * 60));
      this.tickCounter = 0;
      return this.tickerId = setInterval(this.tick, 1600);
    };

    ProgressBar.prototype.tick = function() {
      var now;
      this.tickCounter++;
      now = new Date();
      if (now > this.final) {
        this.cancel();
        step.next();
      }
      this.percent = Math.floor(((now - this.inicio) / (this.final - this.inicio)) * 100);
      console.log(this.percent);
      return app.set('pBar.percent', this.percent);
    };

    ProgressBar.prototype.cancel = function() {
      clearInterval(this.tickerId);
      return app.set('pBar.percent', '');
    };

    return ProgressBar;

  })();

  window.ProgressBar = ProgressBar;

}).call(this);
