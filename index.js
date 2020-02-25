import $ from 'jquery';
import 'super-simple-jquery-slideshow/slideshow.css';

window.jQuery = $;

$('document').ready(function() {
  require('super-simple-jquery-slideshow');
  $('#gallery').slideShow();
});
