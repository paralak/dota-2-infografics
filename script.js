function pick () {
    this.classList.add("picked");
    this.lines.forEach((item, i) => {
        item.status = "picked";
    });
};

function ban () {
    this.classList.add("banned");
    this.lines.forEach((item, i) => {
        item.status = "banned";
    });
};

function onDragStart (event) {
    targetEl = this;
};

const Cyrcle = class HeroCyrcle {

}

const Line = class LinkBetweenCyrcles {
    #parentCyrcle1;
    #parentCyrcle2;
    #parentField;
    #DOMElement;
    #alpha;
    #power;
    constructor (parentDOM, cyrcle1, cyrcle2, power) {
        if (parentDOM===undefined||cyrcle1===undefined||cyrcle2===undefined||power===undefined) throw "LinkBetweenCyrcles: whrong args";
        this.#DOMElement = document.createElement("div");
        this.#parentCyrcle1 = cyrcle1;
        cyrcle1.lines.push(this);
        this.#parentCyrcle2 = cyrcle2;
        cyrcle2.lines.push(this);
        this.#parentField = parentDOM;
        this.#parentField.appendChild(this.#DOMElement);
        this.#power = power;
        this.style.height = (1.6 + power*0.8).toString() + "px";
        this.#alpha = (power/(1+power*2)*2-0.35);
        this.status = "normal";
        this.classList.add("line");
        this.update();
    };

    update () {
        this.pos = this.c1.pos;
        this.style.width = (((this.c1.x-this.c2.x)**2 + (this.c1.y-this.c2.y)**2)**0.5).toString() + "px";
        this.rotate = ((this.c1.x>=this.c2.x) * Math.PI)+Math.atan((this.c1.y-this.c2.y)/(this.c1.x-this.c2.x));
    };

    set status (val) {switch (val) {
        case "picked":
            this.style.backgroundColor = "rgba(0, 255, 0, " + this.a.toString() + ")";
            break;
        case "banned":
            this.style.visibility = "hidden";
            break;
        case "normal":
            this.style.backgroundColor = "rgba(255, 255, 255, " + this.a.toString() + ")";
            break;
    }};

    get c1 () {return this.#parentCyrcle1};
    get c2 () {return this.#parentCyrcle2};
    get field () {return this.#parentField};
    get a () {return this.#alpha};
    get DOM () {return this.#DOMElement};
    get style () {return this.#DOMElement.style};
    get classList () {return this.#DOMElement.classList};
    set pos (val) {this.style.left = val[0]+"px"; this.style.top = val[1]+"px"};
    set rotate (val) {this.style.transform = "rotate(" + val.toString() + "rad)"};
};

function onDragEnd (event) {
    targetEl = null;
};

function onDragOverEvent (event) {//field onDragOver event
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
    targetEl.pos[0] = targetEl.x, targetEl.pos[1] = targetEl.y;
    targetEl.lines.forEach((item, i) => {
        item.update();
    });

};

function selectOnChange () {
    this.style.backgroundImage = allHeroes[this.value];
    this.style.fontSize = "0px";

    console.log(document.getElementsByClassName("hero-" + this.value));
    console.log(this.phase);
    console.log(this);
    if (this.phase=="rb"||this.phase=="db"||this.phase=="dp") {
        targetEl = document.getElementsByClassName("hero-" + this.value)[0];
        onDragOverEvent({altKey:1,ctrlKey:0,x:0,y:0});
    };
    if (this.phase=="rp" && document.getElementsByClassName("hero-" + this.value)[0]) {
        targetEl = document.getElementsByClassName("hero-" + this.value)[0];
        targetEl.style.visibility = "hidden";
        let r = this.getBoundingClientRect();
        onDragOverEvent({altKey:0,ctrlKey:1,x:r.x+r.width/2,y:r.y+r.height/2})
    }
};

let targetEl = null;

let games1 = games[prompt('Выберите команду:')];
let coef = prompt('Количество игр с героем, чтобы он отобразился на схеме');
let fp = prompt('Кто пикает первым (radiant - 1; dire - 2):');
let lineGameCount = prompt('Количество совместных игр, для отображения связи:');
const heroes = {};

games1.forEach((item,i) => {
    item.forEach((her,i) => {
        if (!(her in heroes)) {heroes[her] = {}};
        item.forEach((her2,i) => {
            if (!(her2 in heroes[her])) {
                heroes[her][her2] = 0;
            };
            heroes[her][her2]+=1;
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
};

for (let t in pickPhase2) {
    pickPhase2[t].forEach((item, i) => {
        let el = document.createElement("li");
        document.getElementById(t).appendChild(el);
        let el2 = document.createElement("select");
        el2.classList.add("select-in-picks");
        el2.phase = t;
        el2.onchange = selectOnChange;
        //el2.style.display = "none";
        let el4 = document.createElement("option");
        el4.value = "none";
        el4.innerText = item.toString();
        el2.appendChild(el4);
        for (let j in allHeroes) {
            let el3 = document.createElement("option");
            el3.value = j;
            el3.innerText = j;
            el2.appendChild(el3);
        };
        el.appendChild(el2);
        el.optionEl = el2;
    });
};

let field = document.getElementById("field1");

field.ondragover = onDragOverEvent;

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
    el.pos = [el.x, el.y];
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
            let parentDOM=field, cyrcle1=field[i], cyrcle2=field[j], power=heroes2[i][j];
            new Line(parentDOM, cyrcle1, cyrcle2, power);
        }
    }
};
