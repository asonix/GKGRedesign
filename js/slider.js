function Slider (delay) {

  function duplicateSlides (slides, container) {
    const q = slides.length;
    for (var i = 0; i < q; i++) {
      container.appendChild (slides[i].cloneNode (true));
    }
  }

  this.slider;
  this.running = false;
  this.custom = function () {};
  var sl = this;
  var i = [-1, 0, 1, -3, -2];
  var slides;
  var container;

  this.setup = function () {
    slides = document.getElementsByClassName ('slide');
    container = document.getElementsByTagName ('section')[0];

    while (slides.length < 5) {
      duplicateSlides (slides, container);
      slides = document.getElementsByClassName('slide');
    }

    for (var i = 0; i < slides.length; i++) {
      slides[i].className = "slide off";
    }
    slides[0].className = "slide center";
    slides[1].className = "slide right";
    slides[2].className = "slide offtwo";
    slides[slides.length-2].className = "slide offone";
    slides[slides.length-1].className = "slide left";
    for (var i = 0; i < slides.length; i++) {
    }
  }

  this.run = function () {
    for (var j = 0; j < i.length; j++) {
      i[j]++;
      if (i[j] == slides.length) {
        i[j] = 0;
      }
      else if (i[j] < 0) {
        i[j] += slides.length;
      }
    }
    slides[i[0]].className = "slide center";
    slides[i[1]].className = "slide right";
    slides[i[2]].className = "slide offtwo";
    slides[i[3]].className = "slide offone";
    slides[i[4]].className = "slide left";
    sl.custom();
  }

  this.start = function () {
    if (sl.running == false) {
      sl.running = true;
      sl.slider = setInterval (function () {
        sl.run();
      }, delay*1000);
    }
  }

  this.stop = function () {
    sl.running = false;
    clearInterval(sl.slider);
  }

  this.left = function () {
    clearInterval (sl.slider);
    for (var j = 0; j < i.length; j++) {
      i[j]-= 2;
      if (i[j] == slides.length) {
        i[j] = 0;
      }
      else if (i[j] < 0) {
        i[j] += slides.length;
      }
    }
    sl.run();
  }

  this.right = function () {
    clearInterval (sl.slider);
    sl.run();
  }

  this.setup ();
}
