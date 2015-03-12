var slider = new Slider (10);
slider.custom = function () {
  document.getElementsByClassName ('right')[0].onclick = function () {
    slider.stop ();
    slider.right ();
    slider.start ();
  };
  document.getElementsByClassName ('left')[0].onclick = function () {
    slider.stop ();
    slider.left ();
    slider.start ();
  };
  document.getElementsByClassName ('center')[0].onclick = function () {};
};

window.onresize = function () {
  sectionResize (16, 9, 300, 400);
}
sectionResize (16, 9, 300, 400);
slider.run ();
slider.start ();

navDropdown ();
