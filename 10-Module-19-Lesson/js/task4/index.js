/**
 * Using jQuery create on click "Hello button" show "hello" text and hide "good bye"
 */
const helloBtn = $('#hello-btn');
const goodbyeBtn = $('#goodbye-btn');
const helloImg = $('#hello-img');
const goodbyeImg = $('#goodbye-img');

helloImg.hide();
goodbyeImg.hide();

helloBtn.click(function () {
  goodbyeImg.hide();
  helloImg.show();
});

goodbyeBtn.click(function () {
  helloImg.hide();
  goodbyeImg.show();
});
