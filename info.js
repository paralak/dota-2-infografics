const games = {
  gg:[
    ['enchantress', 'tiny', 'bane', 'tidehunter', 'snapfire'],
    ['keeper-of-the-light', 'mars', 'bane', 'tiny', 'mirana'],
    ['io', 'tidehunter', 'ember-spirit', 'weaver', 'chaos-knight'],
    ['io', 'storm-spirit', 'keeper-of-the-light', 'mars', 'meepo'],
    ['weaver', 'tidehunter', 'ember-spirit', 'grimstroke', 'phantom-assassin'],
    ['enchantress', 'weaver', 'mars', 'jakiro', 'anti-mage'],
    ['weaver', 'tidehunter', 'enchantress', 'phantom-assassin', 'mars'],
    ['enchantress', 'tiny', 'bane', 'legion-commander', 'leshrac'],
    ['weaver', 'tidehunter', 'crystal-maiden', 'tiny', 'mars'],
    ['mars', 'enchantress', 'timbersaw', 'bane', 'bristleback'],
    ['mars', 'enchantress', 'shadow-demon', 'storm-spirit', 'razor'],
    ['mars', 'grimstroke', 'bloodseeker', 'weaver', 'underlord'],
    ['pugna', 'sand-king', 'grimstroke', 'mars', 'underlord'],
    ['pugna', 'mars', 'weaver', 'tidehunter', 'templar-assassin'],
    ['io', 'chaos-knight', 'pugna', 'leshrac', 'legion-commander'],
    ['io', 'storm-spirit', 'pangolier', 'vengeful-spirit', 'wraith-king'],
    ['io', 'mars', 'chaos-knight', 'techies', 'ember-spirit'],
    ['io', 'ember-spirit', 'earth-spirit', 'jakiro', 'ursa'],
    ['chen', 'chaos-knight', 'shadow-demon', 'bloodseeker', 'lina'],
    ['sand-king', 'grimstroke', 'chen', 'underlord', 'sniper'],
    ['io', 'tiny', 'shadow-demon', 'legion-commander', 'void-spirit'],
    ['pugna', 'tiny', 'enchantress', 'anti-mage', 'razor'],
    ['io', 'pugna', 'leshrac', 'gyrocopter', 'night-stalker'],
    ['mars', 'bane', 'invoker', 'weaver', 'bloodseeker'],
    ['pugna', 'storm-spirit', 'underlord', 'grimstroke', 'razor'],
    ['io', 'chaos-knight', 'enchantress', 'invoker', 'underlord'],
    ['mars', 'grimstroke', 'bane', 'timbersaw', 'tiny'],
    ['sand-king', 'mirana', 'invoker', 'chen', 'wraith-king'],
    ['pangolier', 'witch-doctor', 'outworld-destroyer', 'phantom-lancer', 'ancient-apparition']
  ],

  betboom: [
    ['storm-spirit', 'visage', 'underlord', 'ancient-apparition', 'chen'],
    ['mars', 'visage', 'storm-spirit', 'shadow-demon', 'jakiro'],
    ['mars', 'visage', 'shadow-demon', 'bane', 'windranger'],
    ['mars', 'visage', 'grimstroke', 'pangolier', 'chen'],
    ['storm-spirit', 'visage', 'mars', 'jakiro', 'undying'],
    ['io', 'leshrac', 'pangolier', 'chen', 'terrorblade'],
    ['dragon-knight', 'grimstroke', 'pugna', 'necrophos', 'leshrac'],
    ['natures-prophet', 'bane', 'grimstroke', 'spirit-breaker', 'snapfire'],
    ['io', 'kunkka', 'mars', 'skywrath-mage', 'visage'],
    ['io', 'chaos-knight', 'puck', 'hoodwink', 'underlord'],
    ['storm-spirit', 'bane', 'skywrath-mage', 'dragon-knight', 'lifestealer'],
    ['io', 'leshrac', 'grimstroke', 'dragon-knight', 'axe'],
    ['storm-spirit', 'io', 'chaos-knight', 'grimstroke', 'necrophos'],
    ['bane', 'natures-prophet', 'kunkka', 'skywrath-mage', 'dragon-knight'],
    ['pangolier', 'natures-prophet', 'hoodwink', 'pugna', 'necrophos'],
    ['pangolier', 'natures-prophet', 'pudge', 'skywrath-mage', 'timbersaw'],
    ['io', 'storm-spirit', 'hoodwink', 'chaos-knight', 'necrophos'],
    ['death-prophet', 'pangolier', 'clockwerk', 'templar-assassin', 'underlord'],
    ['pangolier', 'death-prophet', 'techies', 'oracle', 'huskar'],
    ['pugna', 'storm-spirit', 'grimstroke', 'spirit-breaker', 'visage']
  ],

  eg: [
    ['storm-spirit', 'medusa', 'jakiro', 'mars', 'io'],
    ['storm-spirit', 'medusa', 'death-prophet', 'tidehunter', 'grimstroke'],
    ['viper', 'tusk', 'pugna', 'phantom-assassin', 'night-stalker'],
    ['pugna', 'dragon-knight', 'medusa', 'tusk', 'ember-spirit'],
    ['dragon-knight', 'pugna', 'techies', 'natures-prophet', 'night-stalker'],
    ['viper', 'tusk', 'shadow-demon', 'medusa', 'dragon-knight'],
    ['enchantress', 'chaos-knight', 'dragon-knight', 'techies', 'invoker'],
    ['death-prophet', 'terrorblade', 'storm-spirit', 'timbersaw', 'techies'],
    ['enchantress', 'tiny', 'razor', 'chaos-knight', 'ember-spirit'],
    ['bane', 'timbersaw', 'storm-spirit', 'io', 'medusa'],
    ['pugna', 'sand-king', 'skywrath-mage', 'terrorblade', 'invoker'],
    ['death-prophet', 'mars', 'ember-spirit', 'dark-willow', 'templar-assassin'],
    ['bane', 'mars', 'io', 'troll-warlord', 'leshrac'],
    ['enchantress', 'ember-spirit', 'lina', 'naga-siren', 'night-stalker'],
    ['enchantress', 'terrorblade', 'viper', 'pangolier', 'kunkka'],
    ['weaver', 'wraith-king', 'dragon-knight', 'hoodwink', 'razor'],
    ['weaver', 'tusk', 'puck', 'anti-mage', 'viper'],
    ['enchantress', 'tiny', 'tidehunter', 'rubick', 'void-spirit'],
    ['storm-spirit', 'tusk', 'mars', 'disruptor', 'morphling']
  ]

}





let games1 = games[prompt('tima')];
let coef = prompt('kolvo');




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

console.log("done 1")


//mas = document.getElementsByClassName("picks-inline")
//mas1 = []
//for (let i = 0; i<34; i+=4) {mas1.push(mas[i])}
// r = []
// mas1.forEach((item, i) => {let u = []; item.children.forEach((item,i) => {u.push(item.children[0].children[0].children[0].href.split("/")[4])}); r.push(u);})
