var clicks = 0;
var extraClicks = 0;
var secondClicks = 1;
var autoClicks = false;
var rebirths = 0;
var timeoutSecs = 10000;
var timeoutAmount = 5;
onEvent("button4","click", function() { 
  clicks = 10000000;
});
onEvent("button2","click", function() {
  setScreen("shop");
  setProperty("label10", "text", clicks + " Clicks");
});
onEvent("backBtn","click", function() {
  setScreen("screen1");
});
onEvent("purch1", "click", function() {
if (clicks >= 10) { 
extraClicks = extraClicks + 1;
clicks = clicks - 10;
setProperty("purch1", "hidden", true);
setProperty("label2", "hidden", false);
setProperty("label3", "hidden", false);
setProperty("label10", "text", clicks + " Clicks");
setProperty("clickNumber", "text", clicks);
setProperty("label3", "text", extraClicks + 1 + rebirths + " Clicks / " +  secondClicks + " Seconds");
} else {}
});
onEvent("button8", "click", function( ) {
  setProperty("clickNumber", "text", "Refreshed!");
  setProperty("clickNumber", "text", clicks);
});
onEvent("purch2", "click", function() {
if (clicks >= 35) {
extraClicks = extraClicks + 2;
clicks = clicks - 35;
setProperty("purch2", "hidden", true);
setProperty("label6", "hidden", false);
setProperty("label6", "hidden", false);
setProperty("label10", "text", clicks + " Clicks");
setProperty("clickNumber", "text", clicks);
setProperty("label3", "text", extraClicks + 1 + rebirths + " Clicks / " +  secondClicks + " Seconds");
} else {}
});
onEvent("purch3", "click", function() {
if (clicks >= 65) {
extraClicks = extraClicks + 10;
clicks = clicks - 65;
setProperty("purch3", "hidden", true);
setProperty("label8", "hidden", false);
setProperty("label8", "hidden", false);
setProperty("label10", "text", clicks + " Clicks");
setProperty("clickNumber", "text", clicks);
setProperty("label3", "text", extraClicks + 1 + rebirths + " Clicks / " +  secondClicks + " Seconds");

} else {

}
});
onEvent("button5", "click", function() { // auto clicks purchase
if (clicks >= 5000) {
setProperty("button5", "hidden", true);
setProperty("label5", "hidden", false);
autoClicks = true;
console.log(autoClicks);
clicks = clicks - 5000;
timedLoop(2000, function() {
  if (autoClicks === true) {
  if (secondClicks === 0) {
setProperty("clickNumber", "text", clicks);
clicks = clicks + 1 + extraClicks + rebirths;
setProperty("clickNumber", "text", clicks);
} else {
  setProperty("mainBtn", "hidden", true);
  setProperty("loadingGif", "hidden", false);
  setProperty("clickNumber", "text", clicks);
  setProperty("label10", "text", clicks);
  console.log(clicks);
  setTimeout(function() {
setProperty("loadingGif", "hidden", true);
  setProperty("mainBtn", "hidden", false);
clicks = clicks + 1 + extraClicks + rebirths;
setProperty("clickNumber", "text", clicks);
setProperty("label10", "text", clicks);
}, 2000);}
} else {
    stopTimedLoop();}
});
} else {}
});
onEvent("infClicksBtn", "click", function() {
if (clicks >= 1000) {
secondClicks = 0;
clicks = clicks - 1000;
setProperty("infClicksBtn", "hidden", true);
setProperty("button1", "hidden", false);
setProperty("clickNumber", "text", clicks);
setProperty("label10", "text", clicks + " Clicks");
setProperty("label3", "text", extraClicks + 1 + rebirths + " Clicks / " +  secondClicks + " Seconds");
} else {}
});
onEvent("mainBtn", "mousedown", function( ){
    playSound("sound://default.mp3", false);
  if (secondClicks === 0) {
setProperty("clickNumber", "text", clicks);
clicks = clicks + 1 + extraClicks + rebirths;
setProperty("clickNumber", "text", clicks);
} else {
  setProperty("mainBtn", "hidden", true);
  setProperty("loadingGif", "hidden", false);
  setProperty("clickNumber", "text", clicks);
  setProperty("label10", "text", clicks);
  console.log(clicks);
  setTimeout(function() {
setProperty("loadingGif", "hidden", true);
  setProperty("mainBtn", "hidden", false);
clicks = clicks + 1 + extraClicks + rebirths;
setProperty("clickNumber", "text", clicks);
setProperty("label10", "text", clicks);
}, 2000);}
});
onEvent("rebirthBtn", "click", function(){
if (clicks >= 100000) {
rebirths = rebirths + 2;
clicks = 0;
extraClicks = 0;
secondClicks = 1;
autoClicks = false;
setProperty("purch3", "hidden", false);
setProperty("label8", "hidden", true);
setProperty("label8", "hidden", true);
setProperty("purch2", "hidden", false);
setProperty("label6", "hidden", true);
setProperty("label6", "hidden", true);
setProperty("purch1", "hidden", false);
setProperty("label2", "hidden", true);
setProperty("button5", "hidden", false);
setProperty("label5", "hidden", true);
setProperty("infClicksBtn", "hidden", false);
setProperty("button1", "hidden", true);
setProperty("label10", "text", clicks + " Clicks");
setProperty("clickNumber", "text", clicks);
setProperty("label3", "text", rebirths + 1 + " Click / 2 Second");
setProperty("label12", "text", rebirths - 1 + " Rebirths");
}
});
onEvent("giftBtn","click", function() {
   setProperty("giftBtn","hidden", true);
   setProperty("button7","hidden", false);
  clicks = clicks + timeoutAmount;
  setProperty("clickNumber", "text", clicks);
  setProperty("label15","text", timeoutAmount + " From Gift");
setTimeout(function() {
setProperty("giftBtn","hidden", false);
   setProperty("button7","hidden", true);
timeoutSecs = timeoutSecs + 10000;
timeoutAmount = timeoutAmount + 2;
setProperty("label15","text", timeoutAmount + " From Gift");
}, timeoutSecs); });