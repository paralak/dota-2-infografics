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

allHeroes = {
  'abaddon':'url("https://ru.dotabuff.com//assets/heroes/abaddon-01d9b9a7f55f569c4a81e7d5362a593a871673f91a08671ade83a0139071b47e.jpg")',
  'alchemist':'url("https://ru.dotabuff.com//assets/heroes/alchemist-6fdc0ee0f57a6d79d41a3e317674ff8493087febbb0e10b89460c8b18d0559d0.jpg")',
  'ancient-apparition':'url("https://ru.dotabuff.com//assets/heroes/ancient-apparition-a69bca6c8bcbfe0e1040bd8c57e3b281104ee3ce16f6db3783198943197f2d3a.jpg")',
  'anti-mage':'url("https://ru.dotabuff.com//assets/heroes/anti-mage-e9961542661f6f398599713b9cb8fee5aa2dd9ae12bf253f67cf484c5cdfc1ce.jpg")',
  'arc-warden':'url("https://ru.dotabuff.com//assets/heroes/arc-warden-74864301900af5691f590ac9a313967d923a0e2e1b1e707a5ab835df20763679.jpg")',
  'axe':'url("https://ru.dotabuff.com//assets/heroes/axe-f182220d6fc301a4a43ed2351e5313bd53e552c8d8645feec5721298176d0f9c.jpg")',
  'bane':'url("https://ru.dotabuff.com//assets/heroes/bane-fe919466e4795493cf6a78ae3808e55f4d39a0175aaa9ace2082063e693e888e.jpg")',
  'batrider':'url("https://ru.dotabuff.com//assets/heroes/batrider-b39d937bb72898c35e48351405531e56f7bec2267ed77673e5be8e8a4f0c8d61.jpg")',
  'beastmaster':'url("https://ru.dotabuff.com//assets/heroes/beastmaster-862e7387b9b589ccb401a7205988b65e8aaa7263a4833fb08086de9872e3cb3a.jpg")',
  'bloodseeker':'url("https://ru.dotabuff.com//assets/heroes/bloodseeker-a2e5372a2e611f1ce8cd01ecf239f210f37e9a89197c8210c04ec3f478299116.jpg")',
  'bounty-hunter':'url("https://ru.dotabuff.com//assets/heroes/bounty-hunter-f571df70829217c25e14a81b051a732a791a9c7558cf6d3a907a435206c41b7a.jpg")',
  'brewmaster':'url("https://ru.dotabuff.com//assets/heroes/brewmaster-b5478a249b90ea0aba2a5e77eff57a332f9b783c18a4993d82fdb7c8fb5c0f50.jpg")',
  'bristleback':'url("https://ru.dotabuff.com//assets/heroes/bristleback-7d4ab0005807d1e8733f4a1abd1ffa1b632900037b9949f5683b512f7eb0b08e.jpg")',
  'broodmother':'url("https://ru.dotabuff.com//assets/heroes/broodmother-c1ab348b8efb1950612fafdd68baf26e661390de87d664a8848c98247f11078b.jpg")',
  'centaur-warrunner':'url("https://ru.dotabuff.com//assets/heroes/centaur-warrunner-23562ed3be99ee78f0a6f2d2e3ac4f9962d3070907bf72d44dee87b4e386d062.jpg")',
  'chaos-knight':'url("https://ru.dotabuff.com//assets/heroes/chaos-knight-77b2b6ab77f1ebd4d01e7711b418d640f6f8c6397b189027508573b20e39e0d5.jpg")',
  'chen':'url("https://ru.dotabuff.com//assets/heroes/chen-31a4e35a27a5f642f7979d43a5dddf24bfe1a53f7301e779f5cdf19a7ca435a2.jpg")',
  'clinkz':'url("https://ru.dotabuff.com//assets/heroes/clinkz-a98eda30aa233c459a9c418ac683a174b768115583d3ed581c2257d01dc95662.jpg")',
  'clockwerk':'url("https://ru.dotabuff.com//assets/heroes/clockwerk-a74f2d01a4603389a76180022625d4ed9737f4333d01eae1319081423ffda8e6.jpg")',
  'crystal-maiden':'url("https://ru.dotabuff.com//assets/heroes/crystal-maiden-d9bf2cca2bb003ad3ad383e0ea901ac06120b9ae4e8fc9a768339768473a26cb.jpg")',
  'dark-seer':'url("https://ru.dotabuff.com//assets/heroes/dark-seer-f98af2dafa0620e9c1e2ab343801f30079b0f6343b82dea6abadccaca1b295e8.jpg")',
  'dark-willow':'url("https://ru.dotabuff.com//assets/heroes/dark-willow-f2b968afc3a7242d25ad87f7d3e512f2271a18017f0e45dbf3a6ff88c7f61edd.jpg")',
  'dawnbreaker':'url("https://ru.dotabuff.com//assets/heroes/dawnbreaker-2e73657989dc1d3d0f1bb2a63e7a94356bd0c599097004d5c8f2046ef04be8f9.jpg")',
  'dazzle':'url("https://ru.dotabuff.com//assets/heroes/dazzle-6f09dcd9997ff6ecf1e1f721088de907c7926a1d4a2bf6cabe5cb8280b237dad.jpg")',
  'death-prophet':'url("https://ru.dotabuff.com//assets/heroes/death-prophet-c9efa1965eed6e1bde1987f2f7969d59a74aae1f92329a339d00c744968b7de0.jpg")',
  'disruptor':'url("https://ru.dotabuff.com//assets/heroes/disruptor-2fb894146b9db904654d538b8b02578046585e1435728c1a205ef2db8a03746b.jpg")',
  'doom':'url("https://ru.dotabuff.com//assets/heroes/doom-a9944c121b3f00d505508f500bac1ed3bdf07c557d564eb95256f80499656436.jpg")',
  'dragon-knight':'url("https://ru.dotabuff.com//assets/heroes/dragon-knight-a42ca0a4d87678a41c0fef7c3b380075b4b8065364c1c05c342a0f1feb8fd594.jpg")',
  'drow-ranger':'url("https://ru.dotabuff.com//assets/heroes/drow-ranger-4179c7b056588755ce718f5c68a1210457cafaa75d75f7172299a4965729a001.jpg")',
  'earth-spirit':'url("https://ru.dotabuff.com//assets/heroes/earth-spirit-80aee39d52e9fbc061a740e98acb75afb3127823ed329c19e47092f486608e05.jpg")',
  'earthshaker':'url("https://ru.dotabuff.com//assets/heroes/earthshaker-215714e59ae202448c7fcaff84ff9fc7c925c30b9cb19c60d1b9aecf57bd9bf2.jpg")',
  'elder-titan':'url("https://ru.dotabuff.com//assets/heroes/elder-titan-9917dd3c3f3e5981de6e2793a27564650c44371f3f1cfa1edaf8af8559fd5614.jpg")',
  'ember-spirit':'url("https://ru.dotabuff.com//assets/heroes/ember-spirit-825d6a76c284e12247e77d2ae468f1011232e0f4babc4efd7cccab0d18c8aba7.jpg")',
  'enchantress':'url("https://ru.dotabuff.com//assets/heroes/enchantress-77ddddbbe730568c506af48adb29a1c3e96c315114ad504b726d1ad55050dc37.jpg")',
  'enigma':'url("https://ru.dotabuff.com//assets/heroes/enigma-09e57afadf9db76bad457d4e3771b9b7b294575e85c9ca1ce976dbf994d56ca3.jpg")',
  'faceless-void':'url("https://ru.dotabuff.com//assets/heroes/faceless-void-fb147350b9caed0068fbc87cdfddfd7bfe149b9f4cf9f3954fdc25b3702ce314.jpg")',
  'grimstroke':'url("https://ru.dotabuff.com//assets/heroes/grimstroke-a83ff1fed4b9254d87504ee938128e18f00df3eac3499bfde53024d41c4a53a0.jpg")',
  'gyrocopter':'url("https://ru.dotabuff.com//assets/heroes/gyrocopter-8bc551b2fc02049a49827840b07f15f73021f9611ba2f9b4f450bc66f5aec25e.jpg")',
  'hoodwink':'url("https://ru.dotabuff.com//assets/heroes/hoodwink-9e7fa68672aadeb468e0fb6931164e5a8b29e793103faa89aff8b85568788d06.jpg")',
  'huskar':'url("https://ru.dotabuff.com//assets/heroes/huskar-0c92c20c7850c207b8228c613ad02ac0ce952f66970aa9de6286bbc0ffd8ce2a.jpg")',
  'invoker':'url("https://ru.dotabuff.com//assets/heroes/invoker-55181bdbd0495d779d0d42f765fb827f06eb447dc6f35b4866d1676ca10083e8.jpg")',
  'io':'url("https://ru.dotabuff.com//assets/heroes/io-fb15f1f252244a9948b345f6a1bacaa4daabb7b49351b47992b694d07335e403.jpg")',
  'jakiro':'url("https://ru.dotabuff.com//assets/heroes/jakiro-13b27acc1302b653da64a4b6e37686189a79a525e97e12e60f2457659412dcde.jpg")',
  'juggernaut':'url("https://ru.dotabuff.com//assets/heroes/juggernaut-4ade674a70ebdbc8127bb125ae64c49ef700d9fe685eb6b094108b8f8bbceb44.jpg")',
  'keeper-of-the-light':'url("https://ru.dotabuff.com//assets/heroes/keeper-of-the-light-815b359e80c48b4fbeb15b0c838c51c3efdc12acd2161eaad2608b6663498e4c.jpg")',
  'kunkka':'url("https://ru.dotabuff.com//assets/heroes/kunkka-acc101ad9b7a74e8c1d0011323807dcb627891eeafeeb8074f6e6b18650ed42f.jpg")',
  'legion-commander':'url("https://ru.dotabuff.com//assets/heroes/legion-commander-e32e4a29b11eb2bc3e89b1dc21ffaee90f30e3949f3af95bcbc784b59428fb18.jpg")',
  'leshrac':'url("https://ru.dotabuff.com//assets/heroes/leshrac-cb17a1ccabd7a609a39fbe3cc0fa85d24766dc617ce0b1ff09455cf97abd9584.jpg")',
  'lich':'url("https://ru.dotabuff.com//assets/heroes/lich-8d1aa68eecbc77ae34b5f44641c7f2d42f347deee58b97ecc4dc3cc8bc68c677.jpg")',
  'lifestealer':'url("https://ru.dotabuff.com//assets/heroes/lifestealer-fd66cfc4ff2a0ee3919baa4df63312c3236012315c1b988ef4e3a7574719ceec.jpg")',
  'lina':'url("https://ru.dotabuff.com//assets/heroes/lina-ff20fd61ed36110b5e39103df30bdbc432c622e4c022bc7977f05ba5eec270d3.jpg")',
  'lion':'url("https://ru.dotabuff.com//assets/heroes/lion-a9212815a1d66a6478c62caa94bdaf6184ee7c7fa15e83fe65a2fb446e18d3cc.jpg")',
  'lone-druid':'url("https://ru.dotabuff.com//assets/heroes/lone-druid-1d058df2b377a59feb74d7c89fed2178beba07569a90a9bfb477980604c270ed.jpg")',
  'luna':'url("https://ru.dotabuff.com//assets/heroes/luna-33d9d63619bc21826a73cd565a8fc4df6f7b973df1bcba0a72259b262c0465d5.jpg")',
  'lycan':'url("https://ru.dotabuff.com//assets/heroes/lycan-f12b8fa2508088eea37c4ad88b94d53ea87f93c645164d079a2b1ea73e44eb74.jpg")',
  'magnus':'url("https://ru.dotabuff.com//assets/heroes/magnus-044b2cc612d1fab6490b607523a1a8c078cfa6869b8721520090b3daa9b34455.jpg")',
  'marci':'url("https://ru.dotabuff.com//assets/heroes/marci-1bc877846f3b4c9d78363b7d4b0875e49e2929fb20b27748bb63657a01120052.jpg")',
  'mars':'url("https://ru.dotabuff.com//assets/heroes/mars-6a141629d4a8923e236bbcc94044e6b63299a1c05609c253b58d243218d614c6.jpg")',
  'medusa':'url("https://ru.dotabuff.com//assets/heroes/medusa-b1ed5bf81314ba70b1724e049dfeaaceeed021e46461cbc6185684929062d77f.jpg")',
  'meepo':'url("https://ru.dotabuff.com//assets/heroes/meepo-dc3643355944d42a53540cc5c6f713ed5346cbd1c1a8267113d7dc514ed623a3.jpg")',
  'mirana':'url("https://ru.dotabuff.com//assets/heroes/mirana-b04edb4fcfb6b10f21b6a27b7f72faeb69da6bf1f854c91b2fb965e077e58fbd.jpg")',
  'monkey-king':'url("https://ru.dotabuff.com//assets/heroes/monkey-king-40005a4b84575986c587e8cede088782f79cb941ce48f51b91711ef2532ce4e9.jpg")',
  'morphling':'url("https://ru.dotabuff.com//assets/heroes/morphling-4631f7384e8a916ee233ce54674bfbd0ef432a40dddad5e305d84919b3e1bd6e.jpg")',
  'naga-siren':'url("https://ru.dotabuff.com//assets/heroes/naga-siren-bdf3debf145988ccfb8ad28e6278e8a453f617ee571bad89fc32ee34513d4fbe.jpg")',
  'natures-prophet':'url("https://ru.dotabuff.com//assets/heroes/natures-prophet-4089cb467a9b52ba5f58271181cd59d54d552fc4f16ecaec5d1d8347b0ed47aa.jpg")',
  'necrophos':'url("https://ru.dotabuff.com//assets/heroes/necrophos-731919b45d88a2e910401b4355262720eb970f0a4a08259cafb0cfb177d59a92.jpg")',
  'night-stalker':'url("https://ru.dotabuff.com//assets/heroes/night-stalker-a2f04592ad14fd748a59e6a52b59035e1c606ea5d053facdc3b8c7da53dad6f0.jpg")',
  'nyx-assassin':'url("https://ru.dotabuff.com//assets/heroes/nyx-assassin-3117b8835ed8e88ef34a6aa61705915aef2342f1cf17b421eb2a772bad72b35a.jpg")',
  'ogre-magi':'url("https://ru.dotabuff.com//assets/heroes/ogre-magi-bc5e8c0620476e51edd16fbe809afc1356346cd5bcaa4899186fc09b79a9f47b.jpg")',
  'omniknight':'url("https://ru.dotabuff.com//assets/heroes/omniknight-eae4bbe1d982c10009388a91cdb778e101768232788bf881d8306adf71e8f33d.jpg")',
  'oracle':'url("https://ru.dotabuff.com//assets/heroes/oracle-8aacd0673567081245a894c6b1dbd0e23148a9e5a6ea8bc678f5ed9ed4c2d730.jpg")',
  'outworld-destroyer':'url("https://ru.dotabuff.com//assets/heroes/outworld-destroyer-60496afd5b92709cbc2350ddd2257b1d6f0e1ce6dd5b2c6a4614e9ace6d2959e.jpg")',
  'pangolier':'url("https://ru.dotabuff.com//assets/heroes/pangolier-39345e9ff4a2eb42130db0ce2c7cb72cc6b97b8ffea1f0ce3b61bccb0a49b195.jpg")',
  'phantom-assassin':'url("https://ru.dotabuff.com//assets/heroes/phantom-assassin-4f13bdf71bf72dd8099eb7bc811a8f62d2ee02d3d0d522cc8a5b2df46e5074a7.jpg")',
  'phantom-lancer':'url("https://ru.dotabuff.com//assets/heroes/phantom-lancer-554de93dee0b9d0c80bd4536d4d777ebec1f3efb4b653673e9ba86f0dd4c10d6.jpg")',
  'phoenix':'url("https://ru.dotabuff.com//assets/heroes/phoenix-fb6b217e35b77291c7afa71781f8930481fd05ffc640b41fe3a08fc572867622.jpg")',
  'primal-beast':'url("https://ru.dotabuff.com//assets/heroes/primal-beast-bcea52e5e283f68dffa9c5409c1c0f8b2161f9ef44ac7dd58943a0849b3f5f45.jpg")',
  'puck':'url("https://ru.dotabuff.com//assets/heroes/puck-23ccda9213f256f929f85839b1a895c8202a94dc90be08c4cbff4184328d527c.jpg")',
  'pudge':'url("https://ru.dotabuff.com//assets/heroes/pudge-c0a4fce1b8a478ae8da6d61b8d514d070dc58b179abf8eee78f1ff217d14e46c.jpg")',
  'pugna':'url("https://ru.dotabuff.com//assets/heroes/pugna-df1ff85956e77c794f8b8d033bc62140903c61381bc660135a448eea804fc65e.jpg")',
  'queen-of-pain':'url("https://ru.dotabuff.com//assets/heroes/queen-of-pain-0bb30081a18b54079cbfa28e3fc3a91a4a91925c695f94fa7e70726b9acb8bec.jpg")',
  'razor':'url("https://ru.dotabuff.com//assets/heroes/razor-cbf1d076372ebdb07fda63545918b89310b103996465a11be5ed8518ed65e18b.jpg")',
  'riki':'url("https://ru.dotabuff.com//assets/heroes/riki-a085e77c15cc10d88b562f9533415f8d3d97a3b5a8dbb72b96f03ad37ff4aeb8.jpg")',
  'rubick':'url("https://ru.dotabuff.com//assets/heroes/rubick-67e61959c17ff85b4cc2946309a2033cab86b9c66675fb8d7e1b927781c86ce1.jpg")',
  'sand-king':'url("https://ru.dotabuff.com//assets/heroes/sand-king-432149fc300e872e9ef144f203997596fc7ecb8738a635c3be62d8bcb2dd2570.jpg")',
  'shadow-demon':'url("https://ru.dotabuff.com//assets/heroes/shadow-demon-12fddd4c21003d3cb9b4b598cba9a1c03a95505360a69e90166b67b18f6030cd.jpg")',
  'shadow-fiend':'url("https://ru.dotabuff.com//assets/heroes/shadow-fiend-866d2e15d0a8987f2c98518c54a6e7969a65841abca9eac2116bcfe714ce399f.jpg")',
  'shadow-shaman':'url("https://ru.dotabuff.com//assets/heroes/shadow-shaman-a254cd387d2bd8d8d89c890662589a5836ff90925bcabda8368946b822491756.jpg")',
  'silencer':'url("https://ru.dotabuff.com//assets/heroes/silencer-c084a012ecca50c7365ed68ec9acff00b3ca69acafb8770ea27df2bb732dd1c2.jpg")',
  'skywrath-mage':'url("https://ru.dotabuff.com//assets/heroes/skywrath-mage-71658cc597c3b963d7c0b832ff334ff684543098a4f80ee40c225c89c6721843.jpg")',
  'slardar':'url("https://ru.dotabuff.com//assets/heroes/slardar-a96276838f0277b9ccf6227fc2dc3231edbb03f1f70933ed6b5d37196c69c30a.jpg")',
  'slark':'url("https://ru.dotabuff.com//assets/heroes/slark-0d9524b422375535008a7de2877a2955b83b1739d88b9734b897afabe5e9f0f2.jpg")',
  'snapfire':'url("https://ru.dotabuff.com//assets/heroes/snapfire-c3b167ae75eea4193bbf5623aba8c76ecb1a62c63b70d4e78a07238753a0fc69.jpg")',
  'sniper':'url("https://ru.dotabuff.com//assets/heroes/sniper-e6d317daac186b72c8429b2ef5ad363d238ffaff7be23f45d913822434352837.jpg")',
  'spectre':'url("https://ru.dotabuff.com//assets/heroes/spectre-17399ff49990419dc69c337a81f93477f9d5ac0030a6f950ad8184e4994130a5.jpg")',
  'spirit-breaker':'url("https://ru.dotabuff.com//assets/heroes/spirit-breaker-7d79bf8f58ff849459011c40b5748cd04b7c802f2fa99c3e41f4cfaf9b289534.jpg")',
  'storm-spirit':'url("https://ru.dotabuff.com//assets/heroes/storm-spirit-75d75f7569d02c8eb78f1061e08535d3a6f1b9dfa2df0dc9f91b567a87e17932.jpg")',
  'sven':'url("https://ru.dotabuff.com//assets/heroes/sven-99ddb8061d06836e946e59110110a18e6dd6c572d5013df9bbc66930aa163101.jpg")',
  'techies':'url("https://ru.dotabuff.com//assets/heroes/techies-58f15ad2d94b54c903a73470de0233f85e3211b3190ecac86dd850044de2e34f.jpg")',
  'templar-assassin':'url("https://ru.dotabuff.com//assets/heroes/templar-assassin-98ba6e13d4ddbafe7b60cdb2f7b454c42cf667290bd74ecc90cdbc1532b46579.jpg")',
  'terrorblade':'url("https://ru.dotabuff.com//assets/heroes/terrorblade-f3df499193b9152861f33d409733d82f0ed9e3ccc94a0cb361dafc65705c3787.jpg")',
  'tidehunter':'url("https://ru.dotabuff.com//assets/heroes/tidehunter-756a926564d5630b846593e777487bc6f22c238b79fca149cd0603c9f3c4ae4e.jpg")',
  'timbersaw':'url("https://ru.dotabuff.com//assets/heroes/timbersaw-89797aee60fbd545f673815ae25157fb370f5cc92fb5a57171b45b4e0f0847ba.jpg")',
  'tinker':'url("https://ru.dotabuff.com//assets/heroes/tinker-1b7221a1c54f89b088a0f8c4ddf735aca0755b5b4a8093fc821709920274e5a8.jpg")',
  'tiny':'url("https://ru.dotabuff.com//assets/heroes/tiny-dce37f06e120325c885ffa7955f9a96473d4fb24622cee2c853fa6ff5bf4352a.jpg")',
  'treant-protector':'url("https://ru.dotabuff.com//assets/heroes/treant-protector-784fc2acb298f2c01bcc2e1918613f036b0cac15dff1f91e1bf5ac23f4f52dc6.jpg")',
  'troll-warlord':'url("https://ru.dotabuff.com//assets/heroes/troll-warlord-e7331eecfb6813bc4a290b01a6c666c20d3dc12ea3689ae10334b2f5a4c90bae.jpg")',
  'tusk':'url("https://ru.dotabuff.com//assets/heroes/tusk-8124206695c2369632918603fd991e15c9186ee22227e606139e5cc23090f2a6.jpg")',
  'underlord':'url("https://ru.dotabuff.com//assets/heroes/underlord-09ce704167b9ca67dfcfc1a27aa27e645ce2419fff66ed60ba261d42f1bd5f00.jpg")',
  'undying':'url("https://ru.dotabuff.com//assets/heroes/undying-9d40f17d0bf46fe4dbb5652a9de3759f1a75b7eced44a0c49ee7a49361977374.jpg")',
  'ursa':'url("https://ru.dotabuff.com//assets/heroes/ursa-9094c7febe300462297f31437da6815ab26a9f75fcd05182d3cf07c44000f28f.jpg")',
  'vengeful-spirit':'url("https://ru.dotabuff.com//assets/heroes/vengeful-spirit-1a72caea605d7bc98cfa9de32921ae9fd08f0dfae327026c1aec644a33077b96.jpg")',
  'venomancer':'url("https://ru.dotabuff.com//assets/heroes/venomancer-aa15409243e8a2cb27f645ee06e3a411aa5860731b130d40b616dbbe22a6f169.jpg")',
  'viper':'url("https://ru.dotabuff.com//assets/heroes/viper-acd38fa2d1a73fd0c23f363f0611235d6ebbcc869e567f2cd77a91e1f89f96d9.jpg")',
  'visage':'url("https://ru.dotabuff.com//assets/heroes/visage-cc4def230f8c1741c6d9eaa6f35e2b5d9a7437deb34bb01deedeb9e11cae8df5.jpg")',
  'void-spirit':'url("https://ru.dotabuff.com//assets/heroes/void-spirit-35ae623572b26131a54ae8761dfd5ddc208bdf79202995768c050492f1808c94.jpg")',
  'warlock':'url("https://ru.dotabuff.com//assets/heroes/warlock-8283eb871d5ee2fa73e02b2605048011d4938694beb9db97a96d310524f0c4b6.jpg")',
  'weaver':'url("https://ru.dotabuff.com//assets/heroes/weaver-5cc1a8369204ddb076b06719018d17334c3ae705eaf11f985e33db7265880f75.jpg")',
  'windranger':'url("https://ru.dotabuff.com//assets/heroes/windranger-286b62aafd8dd9bba7678509a049d98a0e9f16c2eaa301b746b6249271d3db95.jpg")',
  'winter-wyvern':'url("https://ru.dotabuff.com//assets/heroes/winter-wyvern-033edc7729d557f8e6cec262b80baa158452727e4847ff8b1ada665c5943a3d3.jpg")',
  'witch-doctor':'url("https://ru.dotabuff.com//assets/heroes/witch-doctor-3a5f9513ed4754b06371300e3f358145d85f45b0aecab1fc1ec683f8242d350a.jpg")',
  'wraith-king':'url("https://ru.dotabuff.com//assets/heroes/wraith-king-bde5d019af5e734332b2e049e4d1eecc8dafed1a5fd053edc82f79330ed0a27b.jpg")',
  'zeus':'url("https://ru.dotabuff.com//assets/heroes/zeus-4a52e78fb6223e960a7d806c33774ba8d5a83131c1c5868e459d5e665bf9c077.jpg")',
}



let games1 = games[prompt('Выберите команду:')];
let coef = prompt('Количество игр с героем, чтобы он отобразился на схеме');




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
