function pick () {
  this.classList.add("picked")
  this.lines.forEach((item, i) => {
    item.style.borderColor = "#0f0";
  });
};

function ban () {
  this.classList.add("banned")
  this.lines.forEach((item, i) => {
    item.remove(item);
  });
};

function onDragStart (event) {
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

function onDragEnd (event) {
  targetEl = null;
};

let targetEl = null;




let games1 = games[prompt('Выберите команду:')];
let coef = prompt('Количество игр с героем, чтобы он отобразился на схеме');
let fp = prompt('Кто пикает первым (radiant - 1; dire - 2):');
let lineGameCount = prompt('Количество совместных игр, для отображения связи:');
const heroes = {};

games1.forEach((item,i) => {
  item.forEach((her,i) => {
    if (!(her in heroes)) {
      heroes[her] = {}}
    item.forEach((her2,i) => {
      if (!(her2 in heroes[her])) {
        heroes[her][her2] = 0
      }
      heroes[her][her2]+=1
    })
  })
});

const heroes2 = {};

for (let i in heroes) {
  if (heroes[i][i]>=coef) {
    heroes2[i] = heroes[i];
  };
};

const pickPhase = {
  fpban:[1,3,9,11,13,19,21],
  fppick:[5,8,16,18,23],
  lpban:[2,4,10,12,14,20,22],
  lppick:[6,7,15,17,24]
};

if (fp == "2") {
  var pickPhase2 = {
    rp:pickPhase.lppick,
    rb:pickPhase.lpban,
    dp:pickPhase.fppick,
    db:pickPhase.fpban
  }
} else {
  var pickPhase2 = {
    dp:pickPhase.lppick,
    db:pickPhase.lpban,
    rp:pickPhase.fppick,
    rb:pickPhase.fpban
  }
}

for (let t in pickPhase2) {
  pickPhase2[t].forEach((item, i) => {
    let el = document.createElement("li");
    el.classList.add(t);
    el.innerText = item.toString();
    document.getElementById(t).appendChild(el);
  });}

let field = document.getElementById("field1");

field.ondragover = function (event) {//field onDregOver event
  if (!targetEl) return 0;
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

for (let i in heroes2) {//create hero cyrcles
  let el = document.createElement("div");
  el.classList.add("cyrcle");
  el.classList.add("hero-" + i);
  el.style.backgroundImage = allHeroes[i];
  el.style.height = (40 + heroes2[i][i]*7).toString() + "px";
  el.style.width = (40 + heroes2[i][i]*7).toString() + "px";
  el.style.backgroundPosition = "-10px " + ((40 + heroes2[i][i]*7)*0.12680487804878).toString() + "px";

  el.r = (40 + heroes2[i][i]*7)/2;
  el.x = el.r + Math.random() * (screen.availWidth - el.r*5);
  el.y = el.r + Math.random() * (screen.availHeight - el.r*5 - 250) + 200;
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
for (let i in heroes2) {//create lines
  heroes3[i] = {};
  for (let j in heroes2[i]) {
    if (j!=i && j in heroes2 && !(j in heroes3) && (heroes2[i][j]>=lineGameCount)) {
      let line = document.createElement("div");
      line.style.height = (1.6 + heroes2[i][j]*0.8).toString() + "px";
      line.style.backgroundColor = "rgba(255, 255, 255, " + (heroes2[i][j]/(1+heroes2[i][j]*2)*2-0.2).toString() + ")"
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
