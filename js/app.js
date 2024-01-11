const container = document.querySelector(".container");



function startDrag(e) {
this.ontouchmove = this.onmspointermove = moveDrag;

this.ontouchend = this.onmspointerup = function () {
  this.ontouchmove = this.onmspointermove = null;
      this.ontouchend = this.onmspointerup = null;
}

var pos = [this.offsetLeft, this.offsetTop];
var that = this;
var origin = getCoors(e);

function moveDrag(e) {
  var currentPos = getCoors(e);
  var deltaX = currentPos[0] - origin[0];
  var deltaY = currentPos[1] - origin[1];
  this.style.left = (pos[0] + deltaX) + 'px';
  this.style.top = (pos[1] + deltaY) + 'px';
  return false; // cancels scrolling
}

function getCoors(e) {
  var coors = [];
  if (e.targetTouches && e.targetTouches.length) {
  var thisTouch = e.targetTouches[0];
  coors[0] = thisTouch.clientX;
  coors[1] = thisTouch.clientY;
  } else {
      coors[0] = e.clientX;
      coors[1] = e.clientY;
  }
  return coors;
}

  }

var elements = document.querySelectorAll('.test-element');
[].forEach.call(elements, function (element) {
  element.ontouchstart = element.onmspointerdown = startDrag;
  });

  document.ongesturechange = function () {
                            return false;
}




document.getElementById("addLaneBtn").addEventListener("click", addLane);

  function addLane() {
    var kanbanBoard = document.getElementById("kanbanBoard");
    var lane = document.createElement("div");
    lane.className = "lane";
    var laneHeader = document.createElement("div");
    laneHeader.className = "lane-header";
    laneHeader.textContent = "New Lane";
    laneHeader.onclick = function() { editLaneHeader(this); };
    lane.appendChild(laneHeader);
    kanbanBoard.appendChild(lane);
  }

  function editLaneHeader(header) {
    var input = document.createElement("input");
    input.type = "text";
    input.value = header.textContent;
    input.className = "lane-header-input"; // Add a class for styling
    input.onblur = function() { updateLaneHeader(header, this); };
    header.innerHTML = ''; // Clear the header
    header.appendChild(input); // Add the input field to the header
    input.focus(); // Automatically focus the input field
  }

  function updateLaneHeader(header, input) {
    header.textContent = input.value;
  }


if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
     .register("./serviceWorker.js",{ scope: "./" })
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
