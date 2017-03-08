"use strict";

let wdinstagramData = [
  { title: "Hey", author: "Me", img_url:"http://media-cache-ak0.pinimg.com/736x/02/b9/4e/02b94e2ce1c16f5a61a4f0cf249e5919.jpg" },
  { title: "Howdy", author: "Me Again", img_url:"https://img.memesuper.com/8961722642cca2b10c217d1646e850a6_star-trek-tng-memes-star-trek-tng-memes_1280-961.jpeg" },
  { title: "Aloha", author: "Yep.  Me.", img_url:"http://img14.deviantart.net/c3ed/i/2015/181/4/a/star_trek_tng_hd_meme_05_by_gutgutgut-d8zft7s.jpg" },
]

angular
  .module("wdinstagramApp", [
    "ui.router"
  ])
  .controller("wdinstagramCtrl", [ wdinstagramController])

  function wdinstagramController () {
    this.wdinstagrams = wdinstagramData;
  }
