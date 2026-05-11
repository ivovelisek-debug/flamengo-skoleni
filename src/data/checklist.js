export const checklistSections = [
  {
    id: 'zazemí',
    title: 'Zázemí & Čistota',
    emoji: '🧹',
    items: [
      { id: 'box', text: 'Chladící box čistý, voda čerstvá, zboží popsáno datumem' },
      { id: 'zazemí-floor', text: 'Zázemí uspořádané, podlaha čistá' },
      { id: 'pult', text: 'Pult čistý — přední i zadní strana' },
      { id: 'pokladna', text: 'Pokladní šuplík zavřený, klíč zapečetěn' },
      { id: 'uctenky', text: 'Všechny účtenky namarkované, žádné odložené' },
    ],
  },
  {
    id: 'rezane',
    title: 'Řezaná kytice',
    emoji: '🌸',
    items: [
      { id: 'vazy', text: 'Vázy čisté, voda čerstvá, kondicionér přidán', important: true },
      { id: 'pocet', text: 'Dostatečný počet kytic — doplněno dle standardu', important: true },
      { id: 'cerstvost', text: 'Kytice čerstvé — žádné uvadlé nebo žloutnoucí' },
      { id: 'kaskada', text: 'Kaskáda ŘK čistá, bez substrátu a kapek' },
      { id: 'cenovky-rk', text: 'Každá kytice má viditelnou cenovku' },
      { id: 'smxl', text: 'Vystavení kytic odpovídá standardu S/M/L/XL' },
      { id: 'flowerbox', text: 'Flower box — min. 3 ks připraveny' },
    ],
  },
  {
    id: 'vystaveni',
    title: 'Vystavení & Standard',
    emoji: '🏪',
    items: [
      { id: 'velikosti', text: '4 velikosti na výdeji — S, M, L, XL', important: true },
      { id: 'dominance', text: 'Řezanka dominuje — doplňky nejsou v první linii' },
      { id: 'zabal', text: 'Zábal: hnědý papír nebo fólie v tlumených barvách' },
      { id: 'zapichy', text: 'Zápichy pouze sezónně dle aktuálního sortimentu' },
      { id: 'regaly', text: 'Regály doplňků čisté, zboží označeno cenou' },
      { id: 'hk-kaskada', text: 'Hrnková kytice — kaskáda čistá, pravidlo 51/49' },
      { id: 'hk-folie', text: 'HK bez fólie ze skladu, čisté vázy' },
    ],
  },
  {
    id: 'vazba',
    title: 'Vazba & Čerstvost',
    emoji: '💐',
    items: [
      { id: 'min-kytic', text: 'Vazba ŘK — Po–St min. 12 ks, Čt–Ne min. 15 ks · všechny 4 velikosti', important: true },
      { id: 'spirala', text: 'Spirálová technika, dominant nahoře, zeleň 3–5 druhů' },
      { id: 'zabal-vazba', text: 'Zábal: hnědý papír nebo floristická fólie v tlumených barvách' },
      { id: 'fifo', text: 'FIFO — nové zboží dozadu, starší zpracuj do vitrínních kytic' },
      { id: 'uvafle', text: 'Uvadlé okamžitě ven — zapsáno do waste' },
      { id: 'zrala', text: 'Zralou kytici nabídni zákazníkovi aktivně dnes' },
    ],
  },
  {
    id: 'obsluha',
    title: 'Obsluha & Zákazník',
    emoji: '🤝',
    items: [
      { id: 'obleceni', text: 'Pracovní oblečení čisté, zástěra na místě' },
      { id: 'pritomnost', text: 'Floristka viditelná u prodejny, připravena' },
      { id: 'pozdrav', text: 'Aktivní pozdrav zákazníka s úsměvem' },
      { id: 'pomoc', text: 'Zákazníkovi nabídnuta pomoc s výběrem' },
      { id: 'upsell', text: 'Upsell nabídnut — zábal, ošetření květin, kartička', important: true },
      { id: 'reklamace', text: 'Reklamace řešena okamžitě — výměna nebo doplněk zdarma' },
    ],
  },
]

export const weeklyItems = [
  { id: 'sanony', text: 'Šanony a dokumenty uspořádány' },
  { id: 'objednavka', text: 'Objednávka zkontrolována a odeslána' },
  { id: 'odpis', text: 'Odpis zkontrolován a zapsán' },
]
