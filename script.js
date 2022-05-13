function onDragStart (event) {
  console.log(this);
  targetEl = this;
};

function lineUpdate() {
  this.style.left = (this.foc[0].x).toString() + "px";
  this.style.top = (this.foc[0].y).toString() + "px";
  let l = ((this.foc[0].x-this.foc[1].x)**2 + (this.foc[0].y-this.foc[1].y)**2)**0.5;
  this.style.width = l.toString() + "px";
  let p = ((this.foc[0].x>=this.foc[1].x) * Math.PI)  +
    Math.atan( (this.foc[0].y-this.foc[1].y)  /
    (this.foc[0].x-this.foc[1].x) );
  this.style.transform = "rotate(" + p.toString() + "rad)";
};

// let el1 = document.getElementById("o1");
// el1.r = 50;
// el1.x = 50;
// el1.y = 50;
//
// let el2 = document.getElementById("o2");
// el2.r = 30;
// el2.x = 30;
// el2.y = 30;
//
// let el3 = document.getElementById("o3");
// el3.r = 40;
// el3.x = 40;
// el3.y = 40;
//
// let el4 = document.getElementById("o4");
// el4.r = 33;
// el4.x = 33;
// el4.y = 33;

var targetEl = null;

// let line1 = document.getElementById("l1");
// line1.foc = [el1,el2];
// line1.update1 = lineUpdate;
// setInterval(() => line1.update1(), 1);
//
// let line2 = document.getElementById("l2");
// line2.foc = [el1,el3];
// line2.update1 = lineUpdate;
// setInterval(() => line2.update1(), 1);
//
// let line3 = document.getElementById("l3");
// line3.foc = [el1,el4];
// line3.update1 = lineUpdate;
// setInterval(() => line3.update1(), 1);
//
// let line4 = document.getElementById("l4");
// line4.foc = [el3,el4];
// line4.update1 = lineUpdate;
// setInterval(() => line4.update1(), 1);


function onDragEnd (event) {
  targetEl = null;
};

let field = document.getElementById("field1")
field.ondragover = function (event) {
  if (event.altKey) {
    targetEl.ban();
  };
  if (event.ctrlKey) {
    targetEl.pick();
  };
  targetEl.x = event.x;
  targetEl.style.left = (targetEl.x - targetEl.r).toString() + "px";
  targetEl.y = event.y;
  targetEl.style.top = (targetEl.y - targetEl.r).toString() + "px";
  targetEl.lines.forEach((item, i) => {
    item.update1();
  });

};

for (let i in heroes2) {
  let el = document.createElement("div");
  el.classList.add("cyrcle");
  el.classList.add("hero-" + i);
  el.style.height = (40 + heroes2[i][i]*7).toString() + "px";
  el.style.width = (40 + heroes2[i][i]*7).toString() + "px";
  el.style.backgroundPosition = "-10px " + ((40 + heroes2[i][i]*7)*0.12680487804878).toString() + "px";

  el.r = (40 + heroes2[i][i]*7)/2;
  el.x = el.r + Math.random() * (screen.availWidth - el.r*5);
  el.y = el.r + Math.random() * (screen.availHeight - el.r*5);
  el.style.left = (el.x - el.r).toString() + "px";
  el.style.top = (el.y - el.r).toString() + "px";
  el.draggable = true;
  el.ondragstart = onDragStart;
  el.ondragend = onDragEnd;
  el.lines = [];
  el.ban = ban;
  el.pick = pick;
  field.appendChild(el);
  field[i] = el;
};


let heroes3 = {};
for (let i in heroes2) {
  heroes3[i] = {};
  for (let j in heroes2[i]) {
    if (j!=i && j in heroes2 && !(j in heroes3)) {
      let line = document.createElement("div");
      line.classList.add("line");
      field.appendChild(line);
      line.foc = [field[i],field[j]];
      field[i].lines.push(line)
      field[j].lines.push(line)
      line.update1 = lineUpdate;
      line.update1();
    }
  }
};

function ban () {
  this.classList.add("banned")
  this.lines.forEach((item, i) => {
    item.remove(item);
  });
};

function pick () {
  this.classList.add("picked")
  this.lines.forEach((item, i) => {
    item.style.borderColor = "#0f0";
  });
};


// let cyrcles = [el1,el2,el3,el4]
// cyrcles.forEach((el, i) => {
//   el.ondragstart = onDragStart;
//   el.ondragend = onDragEnd;
// });

console.log("done 2")
