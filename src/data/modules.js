export const modules = [
  {
    id: 1,
    title: 'DNA Flamengo',
    subtitle: 'Kdo jsme a na čem záleží',
    emoji: '🌹',
    accentColor: '#C4963A',
    estimatedMinutes: 8,
    sections: [
      {
        title: 'Základní filozofie',
        blocks: [
          {
            type: 'quote',
            text: 'Řezané kytice jsou naše srdce. Zákazník nekupuje kytici — kupuje pocit. My jsme ti, kdo ten pocit vytváříme.',
          },
          {
            type: 'text',
            text: 'Flamengo je síť 270 prodejen s řezanými a hrnkovými květinami. Jsme přítomni v hypermarketech, kde zákazník přichází nečekaně — kdykoli. Naším úkolem je být vždy připraveni a nechat ho odejít spokojený.',
          },
          {
            type: 'list',
            title: '5 věcí, na nichž záleží:',
            items: [
              { bold: 'Kytice jsou středobod prodejny.', text: ' Vždy na nejlepším místě. Vždy plné. Vždy čerstvé. Kytice vede — všechno ostatní ji doplňuje.' },
              { bold: 'Čerstvost je slib zákazníkovi.', text: ' Není to jen standard. Je to slib. Zákazník to pozná hned — a řekne to dál.' },
              { bold: 'Prodejna mluví dřív než ty.', text: ' Zákazník vidí prodejnu dřív než tě slyší. Prázdná váza nebo uvadlá kytice říká víc než cokoli, co řekneš.' },
              { bold: 'Zákazník kupuje pocit — ne kytici.', text: ' Pomáháš — neprodáváš. Výsledek je stejný — zákazník je spokojený a vrátí se.' },
              { bold: 'Stálost buduje důvěru.', text: ' Stejná prodejna v úterý i v pátek. Ráno i před zavřením. Zákazník si pamatuje, když je vždy dobře.' },
            ],
          },
        ],
      },
      {
        title: '10 pravidel DNA',
        blocks: [
          {
            type: 'text',
            text: 'Tato pravidla musíš znát nazpaměť. Jsou základem práce každé floristky Flamengo.',
          },
          {
            type: 'numbered',
            items: [
              'Kytice jsou v první linii — vždy v pohledu zákazníka, hned u vstupu.',
              'Minimum 12–15 hotových kytic — plná nabídka = vyšší konverze.',
              '4 velikosti S/M/L/XL — vždy všechny najednou. Každá velikost osloví jiného zákazníka.',
              'Každá kytice má viditelnou cenovku — bez cenovky zákazník nesáhne.',
              'Čisté vázy, čerstvá voda — každý den. Špinavá voda je vidět i cítit.',
              'Každého zákazníka pozdravíš aktivně — s úsměvem, přirozeně — ne čekáním.',
              'Pomáháš — neprodáváš. Zeptej se na příležitost, ne na rozpočet.',
              'FIFO — starší kytice zpracuj do vitrínních kytic. Odpis pod 10 % je náš cíl.',
              'Spirálová vazba — 3–5 druhů zeleně. Zábal: hnědý papír nebo fólie v tlumených barvách.',
              'Zavřená prodejna musí vypadat lépe — zákazník kolem chodí celý den.',
            ],
          },
        ],
      },
      {
        title: 'Co nikdy neděláme',
        blocks: [
          {
            type: 'text',
            text: 'Stejně důležité jako vědět, co dělat — je vědět, co nikdy neudělat. Každé porušení níže snižuje důvěru zákazníka.',
          },
          {
            type: 'donts',
            items: [
              'Plastový obal — není Flamengo. Hnědý papír nebo manžeta, vždy.',
              'Uvadlé kytice v prodejním prostoru. Ani jedna.',
              'Kytice bez cenovky — zákazník nesáhne po tom, co nemá cenu.',
              'Doplňky v první linii — kytice jsou na prvním místě vždy.',
              'Hrnkové rostliny ve fólii ze skladu — fólii vždy sundej před vyložením.',
              'Ručně psané cenovky — pouze tištěné, vždy.',
              'Slevy na čerstvé kytice — čerstvá kytice má plnou cenu vždy.',
              'Zápichy mimo sezónu — povoleny výhradně na Valentýna.',
            ],
          },
          {
            type: 'callout',
            text: '„Zákazník si pamatuje pocit ze setkání s tebou — ne cenu na cenovce."',
          },
        ],
      },
    ],
    quiz: [
      {
        question: 'Co říká základní filozofie Flamengo?',
        options: [
          'Zákazník nekupuje kytici — kupuje pocit',
          'Zákazník kupuje kytici za nejnižší cenu',
          'Prodáváme zboží nejlepší kvality v síti',
          'Kytice jsou jeden z produktů jako každý jiný',
        ],
        correct: 0,
        explanation: 'Základní filozofie říká: "Zákazník nekupuje kytici — kupuje pocit. My jsme ti, kdo ten pocit vytváříme."',
      },
      {
        question: 'Kolik hotových kytic musí být minimum vždy na prodejně?',
        options: ['5–7 kusů', '8–10 kusů', '12–15 kusů', '20 a více kusů'],
        correct: 2,
        explanation: 'Minimum je 12–15 hotových kytic. Plná nabídka = vyšší konverze zákazníků.',
      },
      {
        question: 'Jaký zábal NIKDY nepoužíváme?',
        options: ['Hnědý papír', 'Pastelový papír v tlumených barvách', 'Plastový obal', 'Barevnou manžetu'],
        correct: 2,
        explanation: 'Plastový obal není Flamengo. Vždy hnědý papír nebo manžeta/fólie v tlumených barvách.',
      },
      {
        question: 'Kdy jsou zápichy povoleny?',
        options: ['Vždy, pro všechny kytice', 'Jen pro velké kytice L a XL', 'Výhradně na Valentýna', 'Nikdy'],
        correct: 2,
        explanation: 'Zápichy jsou povoleny výhradně na Valentýna. Mimo toto datum se nepoužívají.',
      },
      {
        question: 'Co platí o čerstvých kyticích a slevách?',
        options: [
          'Na konci dne je smíme zlevnit',
          'Čerstvá kytice má vždy plnou cenu',
          'Zákazník si může cenu sjednat',
          'Slevy jsou možné při nákupu 3 a více kytic',
        ],
        correct: 1,
        explanation: 'Čerstvá kytice má vždy plnou cenu. Zralou kytici prodáváme aktivním nabízením — ne slevou.',
      },
    ],
  },

  {
    id: 2,
    title: 'Standard prodejny',
    subtitle: 'Zákazník se rozhodne za 5 vteřin',
    emoji: '🏪',
    accentColor: '#2C5040',
    estimatedMinutes: 7,
    sections: [
      {
        title: 'Zákazník se rozhodne za 5 vteřin',
        blocks: [
          {
            type: 'text',
            text: 'Zákazník projde kolem a za 5 vteřin se rozhodne — vejít, nebo jít dál. To rozhodnutí uděláš ty správným vystavením. Doplněná a čistá prodejna prodává i tehdy, kdy jsi zaneprázdněna jinou prací.',
          },
          {
            type: 'two-col',
            left: {
              title: '✓ Co zákazník musí vidět',
              items: [
                'Kytice — barevné, čerstvé, plné',
                'Objem — nic prázdného, nic díra',
                'Všechny 4 velikosti — S, M, L, XL',
                'Cenovka u každé kytice — viditelně',
                'Čistota — vázy, voda, pult v pořádku',
              ],
              positive: true,
            },
            right: {
              title: '✗ Co nesmí dominovat',
              items: [
                'Hrnkové rostliny v první linii',
                'Doplňky před kyticemi',
                'Prázdné vázy — díra je vidět',
                'Uvadlé nebo žloutnoucí kusy',
                'Plastové obaly nebo fólie',
              ],
              positive: false,
            },
          },
          {
            type: 'alert',
            text: 'Prodejna musí být připravena vždy — zákazník v hypermarketu přichází nečekaně, kdykoliv. Nikdy nečekáme na „lepší chvíli".',
          },
        ],
      },
      {
        title: '6 pravidel — každý den, bez výjimky',
        blocks: [
          {
            type: 'rules-cards',
            items: [
              { num: '01', title: 'Dost kytic na prodej', text: 'Prázdná prodejna = zákazník odejde. Doplňuj průběžně — ne jen ráno.' },
              { num: '02', title: 'Všechny 4 velikosti: S, M, L, XL', text: 'Zákazník musí vidět celou nabídku najednou. Každá velikost je pro jiného zákazníka.' },
              { num: '03', title: 'Min. 2 vysoké kytice každý den', text: 'Slavnostnější pohled, vyšší cena. Zákazník je vidí z dálky — zastaví se.' },
              { num: '04', title: 'Cenovka u každé kytice', text: 'Bez cenovky zákazník nesáhne — nikdy. Zákazník se na cenu neptá.' },
              { num: '05', title: 'Čisté vázy, čerstvá voda — každé ráno', text: 'Špinavá voda je vidět i cítit. Zákazník odejde. Voda každý den — bez výjimky.' },
              { num: '06', title: 'Žádné uvadlé kytice na prodej', text: 'Jedna vadnoucí kytice znehodnotí celou vitrínu. Okamžitě ven — zapsat do záznamu.' },
            ],
          },
          {
            type: 'alert-red',
            text: 'Pokud prodejna nesplňuje standard před otevřením — otevřít ji nesmíš. Zavolej nadřízeného.',
          },
        ],
      },
      {
        title: 'Struktura prodejny a role',
        blocks: [
          {
            type: 'text',
            text: 'Každá prodejna má jasnou strukturu. Vedoucí odpovídá za celek — za výsledek, standard i tým. Každý zaměstnanec ví, co jeho role obnáší.',
          },
          {
            type: 'role-card',
            title: 'Florista / Prodavač',
            items: [
              'Péče o vázy — čistá voda každý den',
              'Vázání kytic, doplňování výdeje',
              'Kontrola čerstvosti, odstraňování uvadlých',
              'Obsluha zákazníka, upsell, zábal',
              'Doplňování cenovek a označení zboží',
              'Čistota prodejny a zázemí',
            ],
          },
          {
            type: 'text',
            text: 'Pravidlo eskalace: Nejprve se pokus problém vyřešit sám. Pokud to nejde — kontaktuj OBM. Nepřehlížej problémy se zásobami, čerstvostí nebo chováním zákazníka. Včasná informace je vždy lepší než tichá krize.',
          },
        ],
      },
    ],
    quiz: [
      {
        question: 'Za kolik vteřin se zákazník rozhodne, zda vejde do prodejny?',
        options: ['2 vteřiny', '5 vteřin', '15 vteřin', '1 minutu'],
        correct: 1,
        explanation: 'Zákazník projde kolem a za 5 vteřin se rozhodne — vejít, nebo jít dál. Proto musí prodejna být vždy připravena.',
      },
      {
        question: 'Co nesmí dominovat v první linii prodejny?',
        options: ['Řezané kytice', 'Cenovky', 'Hrnkové rostliny a doplňky', '4 velikosti kytic'],
        correct: 2,
        explanation: 'Hrnkové rostliny a doplňky nesmí být v první linii. Kytice jsou na prvním místě vždy.',
      },
      {
        question: 'Kolik vysokých kytic musíme mít na prodejně každý den?',
        options: ['Aspoň 1', 'Minimálně 2', 'Minimálně 5', 'Neřeší se'],
        correct: 1,
        explanation: 'Minimálně 2 vysoké kytice každý den — slavnostnější pohled, vyšší cena. Zákazník je vidí z dálky.',
      },
      {
        question: 'Co uděláš, pokud prodejna nesplňuje standard před otevřením?',
        options: [
          'Otevřeš a doplníš za chodu',
          'Otevřeš a doufáš, že zákazník nic nepozoruje',
          'Neotvíráš — zavoláš nadřízeného',
          'Počkáš hodinu a pak otevřeš',
        ],
        correct: 2,
        explanation: 'Pokud prodejna nesplňuje standard — neotvíráš ji. Zavoláš nadřízeného (OBM).',
      },
      {
        question: 'Proč je důležité doplňovat kytice průběžně — ne jen ráno?',
        options: [
          'Kvůli předpisům vedoucího',
          'Doplněná a čistá prodejna prodává i tehdy, kdy jsi zaneprázdněna jinou prací',
          'Aby vedoucí viděl, že pracuješ',
          'Ráno to stačí, zákazníci přicházejí jen ráno',
        ],
        correct: 1,
        explanation: 'Zákazník v hypermarketu přichází nečekaně, kdykoliv — ráno i odpoledne. Proto doplňujeme průběžně.',
      },
    ],
  },

  {
    id: 3,
    title: 'Kytice a vázání',
    subtitle: '4 velikosti, technika spirály, zábal',
    emoji: '💐',
    accentColor: '#5C8A6B',
    estimatedMinutes: 10,
    sections: [
      {
        title: '4 velikosti — vždy všechny najednou',
        blocks: [
          {
            type: 'text',
            text: 'Zákazník se rozhoduje očima. Vidí-li jen jednu velikost, koupí tu jednu — nebo odejde. Vidí-li čtyři, vybere si.',
          },
          {
            type: 'sizes',
            items: [
              { size: 'S', name: 'Malá', length: 'do 30 cm', wrap: 'jen v papírovém obalu', price: '350–499 Kč', flowers: '5–7 květů, 3–4 druhy zeleně' },
              { size: 'M', name: 'Střední', length: '30–45 cm', wrap: 'papír nebo manžeta', price: '500–749 Kč', flowers: '9–12 květů, 4–5 druhů zeleně' },
              { size: 'L', name: 'Velká', length: '45–60 cm', wrap: 'manžeta nebo barevný papír', price: '750–949 Kč', flowers: '14–18 květů, 5–6 druhů zeleně' },
              { size: 'XL', name: 'Velkolepá', length: '60+ cm', wrap: 'hnědý nebo přírodní papír', price: '950+ Kč', flowers: '20+ květů, 6–8 druhů zeleně' },
            ],
          },
        ],
      },
      {
        title: 'Jak vázat kytici — 6 kroků',
        blocks: [
          {
            type: 'steps',
            items: [
              { step: 1, title: 'Odlistuj a zastřihni', text: 'Odlisti spodních 15 cm. Šikmý řez ostrým nožem — ne nůžkami, ne rukama. Čistý řez = více vody = kytice vydrží déle.' },
              { step: 2, title: 'Vezmi hlavní květ — dominant', text: 'Do levé ruky. Drž šikmo. Dominant = nejkrásnější květ, ne nutně největší. Vše ostatní stavíš kolem něj.' },
              { step: 3, title: 'Přidávej vždy ze stejné strany', text: 'Každý stonek pod úhlem 45° ze stejné strany. Kytice se otáčí přirozeně — ty ji neotáčíš. Střídání stran = nejčastější chyba.' },
              { step: 4, title: 'Střídej květ a zeleň', text: 'Květ → zeleň → květ. Použij 3–5 druhů zeleně rovnoměrně po celém obvodu. Různorodá zeleň = vyšší vnímaná hodnota.' },
              { step: 5, title: 'Zkontroluj tvar', text: 'Drž kytici ve výšce očí. Musí být kulatá ze všech stran. Dominant mírně výš — vše ostatní kolem něj.' },
              { step: 6, title: 'Svaž, zastřihni, zabal', text: 'Stonky rovně. Kytice stojící ve váze bez opory = správně vázaná.' },
            ],
          },
        ],
      },
      {
        title: 'Zábal — co používáme',
        blocks: [
          {
            type: 'table',
            headers: ['Zábal', 'Kdy', 'Poznámka'],
            rows: [
              ['Hnědý papír', 'VŽDY', 'Základní zábal. Malé kytice (S) výhradně v papíru.'],
              ['Pastelový papír', 'ANO', 'Tlumené barvy — bílá, krémová, šedá, béžová. Ladí s kyticí.'],
              ['Barevná manžeta', 'ANO', 'M a větší. Ladí s kyticí.'],
              ['Rafie nebo stuha', 'ANO', 'Různé barvy — vždy laděné s kyticí.'],
              ['Zápichy', 'SEZÓNA', 'Sezónní doplněk — Valentýn.'],
              ['Plastový obal', 'NIKDY', 'Není Flamengo. Bez výjimky.'],
            ],
            highlight: [5],
          },
          {
            type: 'callout',
            text: 'Zábal zákazník skoro vždy přijme — stačí ho fyzicky ukázat. Ukázat fyzicky = 3× vyšší šance prodeje zábalového doplňku.',
          },
        ],
      },
    ],
    quiz: [
      {
        question: 'Jaký zábal vždy používáme jako základ?',
        options: ['Plastový obal', 'Hnědý papír', 'Fólie ze skladu', 'Celofán'],
        correct: 1,
        explanation: 'Hnědý papír je základní zábal — používáme vždy. Malé kytice (S) výhradně v hnědém papíru.',
      },
      {
        question: 'Co je dominant v kytici?',
        options: ['Nejdražší květ', 'Nejkrásnější květ — ne nutně největší', 'Největší květ v kytici', 'Zeleň, která rámuje kytici'],
        correct: 1,
        explanation: 'Dominant = nejkrásnější květ, ne nutně největší. Vše ostatní stavíš kolem něj.',
      },
      {
        question: 'Jak přidáváme stonky při vázání spirálovou technikou?',
        options: [
          'Ze střídavých stran, kytici otáčíme',
          'Všechny rovně, bez otáčení',
          'Vždy ze stejné strany pod úhlem 45°',
          'Shora dolů, bez úhlu',
        ],
        correct: 2,
        explanation: 'Každý stonek přidáváme pod úhlem 45° ze stejné strany. Kytice se otáčí přirozeně. Střídání stran je nejčastější chyba.',
      },
      {
        question: 'Kolik druhů zeleně používáme v kyticích?',
        options: ['1 druh — jednoduchý styl', '2 druhy', '3–5 druhů', '6 a více druhů'],
        correct: 2,
        explanation: '3–5 druhů zeleně rovnoměrně po celém obvodu. Různorodá zeleň = vyšší vnímaná hodnota zákazníkem.',
      },
      {
        question: 'Jak poznáme, že je kytice správně vázaná?',
        options: [
          'Je pevně svázaná provázkem',
          'Je zabalená v papíru',
          'Stojí ve váze bez opory',
          'Má cenovku a název',
        ],
        correct: 2,
        explanation: 'Správně vázaná kytice stojí ve váze bez opory — stonky drží tvar díky spirální technice.',
      },
    ],
  },

  {
    id: 4,
    title: 'Čerstvost a FIFO',
    subtitle: 'Čerstvost je náš slib — každý den',
    emoji: '🌿',
    accentColor: '#3D7A5A',
    estimatedMinutes: 8,
    sections: [
      {
        title: 'Čerstvost je náš slib',
        blocks: [
          {
            type: 'text',
            text: 'Zákazník pozná čerstvost na první pohled. A zapamatuje si ji — nebo nezapamatuje. Na tobě záleží.',
          },
          {
            type: 'steps',
            items: [
              { step: 1, title: 'Zastřihni hned při příjmu', text: 'Šikmý řez 45° ostrým nožem ihned po příjmu. Ne nůžkami, ne rukama. Čistý řez = více vody = kytice vydrží déle.' },
              { step: 2, title: 'Kondicionér vždy', text: 'Chrysal nebo Floralife — do každé čerstvé vody. Bez výjimky. Kondicionér = o 2–3 dny delší čerstvost.' },
              { step: 3, title: 'FIFO — starší dopředu', text: 'Nové zboží vždy dozadu. Starší kytice do přední linie. Nikdy naopak. Starší kytice → zpracuj do výlohy.' },
              { step: 4, title: 'Vadnoucí ven okamžitě', text: 'Jedna vadnoucí kytice poškodí celou vitrínu. Nepřemýšlej — vyhoď a zapiš do záznamu odpisů.' },
            ],
          },
          {
            type: 'alert',
            text: 'Chladící box: teplota 4–8 °C — kontroluj každé ráno. Teplota mimo rozsah = hlášení okamžitě.',
          },
          {
            type: 'callout',
            text: 'Zralou kytici nabídni aktivně: „Tuhle máme dnes — je plně rozkvétlá, dnes je její nejlepší den." Zdůrazni krásu — žádná sleva, jen nabídnutí.',
          },
        ],
      },
      {
        title: 'Principy FIFO',
        blocks: [
          {
            type: 'text',
            text: 'FIFO = First In, First Out. Starší zboží jde na výdej jako první. Nové zboží vždy dozadu nebo dolů.',
          },
          {
            type: 'steps',
            items: [
              { step: 1, title: 'Příjem závoz', text: 'Nové zboží VŽDY dozadu. Zkontroluj kvalitu při příjmu — poškozené nebo nekvalitní hlásíš okamžitě řidiči nebo Storge.' },
              { step: 2, title: 'Označení skupiny', text: 'Každá skupina označena: název druhu + datum přijetí + interní číslo. Bez označení = nelze správně řídit FIFO.' },
              { step: 3, title: 'Denní rotace', text: 'Ráno zkontroluj box. Přesuň starší dopředu. Odstraň vše, co nevydrží do konce dne.' },
              { step: 4, title: 'Waste zápis', text: 'Každý odpis zapsat — datum, druh, množství, důvod. Bez zápisu není zpětná kontrola ani možnost zlepšení.' },
            ],
          },
          {
            type: 'stats',
            items: [
              { value: '<10 %', label: 'Cíl odpisu CZ' },
              { value: '<9 %', label: 'Cíl odpisu SK' },
              { value: '4–8 °C', label: 'Teplota boxu' },
              { value: '1×', label: 'Výměna vody denně' },
            ],
          },
        ],
      },
      {
        title: 'Kontrola kvality při příjmu závozu',
        blocks: [
          {
            type: 'two-col',
            left: {
              title: '✓ Při každém závozu dělám',
              items: [
                'Překontroluju každou bednu hned',
                'Poškozené nebo plesnivé vracím řidiči ihned',
                'Špatnou kvalitu řeším okamžitě — ne po hodině',
                'Zapíšu co bylo vráceno a proč',
              ],
              positive: true,
            },
            right: {
              title: '✗ Co nesmím udělat',
              items: [
                'Přijmout vadné zboží a reklamovat ho dodatečně',
                'Vyložit HK rostlinu ve fólii ze skladu',
                'Vyložit vadné kytice na prodej — ani dočasně',
                'Přijmout závoze mlčky bez kontroly',
              ],
              positive: false,
            },
          },
          {
            type: 'alert',
            text: 'Pokud přijde závoze zboží špatné kvality — okamžitě nafotit, zapsat a nahlásit OBM nebo přímo Storge. Nekvalitní zboží neprodáváme.',
          },
        ],
      },
    ],
    quiz: [
      {
        question: 'Co znamená FIFO?',
        options: [
          'Formát interních formulářů objednávek',
          'First In, First Out — starší zboží jde na výdej první',
          'First In, First Out — nové zboží jde na výdej první',
          'Systém hodnocení poboček',
        ],
        correct: 1,
        explanation: 'FIFO = First In, First Out. Starší zboží jde na výdej jako první. Nové zboží vždy dozadu.',
      },
      {
        question: 'Jaká je správná teplota v chladícím boxu?',
        options: ['0–2 °C', '4–8 °C', '10–15 °C', 'Pokojová teplota'],
        correct: 1,
        explanation: 'Chladící box udržuje teplotu 4–8 °C. Teplota mimo rozsah se hlásí okamžitě.',
      },
      {
        question: 'Jak přistřihujeme stonky kytic?',
        options: [
          'Rovně nůžkami',
          'Šikmý řez 45° ostrým nožem',
          'Odlomíme rukou',
          'Nepřistřihujeme — zbytečné',
        ],
        correct: 1,
        explanation: 'Šikmý řez 45° ostrým nožem ihned po příjmu. Čistý řez = více vody = kytice vydrží déle.',
      },
      {
        question: 'Co uděláme s vadnoucí kyticí na prodejně?',
        options: [
          'Dáme ji na slevu 50 %',
          'Přesuneme ji dozadu, aby nebyla vidět',
          'Okamžitě ven a zapíšeme do záznamu odpisů',
          'Přidáme kondicionér a necháme',
        ],
        correct: 2,
        explanation: 'Vadnoucí kytici okamžitě odstraníme z prodeje a zapíšeme do záznamu. Jedna vadnoucí kytice poškodí celou vitrínu.',
      },
      {
        question: 'Co musí obsahovat označení skupiny zboží v boxu?',
        options: [
          'Jen cenu',
          'Jen datum příjmu',
          'Název druhu + datum přijetí + interní číslo',
          'Jméno floristky, která zboží přijala',
        ],
        correct: 2,
        explanation: 'Každá skupina musí být označena: název druhu + datum přijetí + interní číslo. Bez označení nelze správně řídit FIFO.',
      },
    ],
  },

  {
    id: 5,
    title: 'Zákazník a prodej',
    subtitle: 'Pomáháš — neprodáváš',
    emoji: '🤝',
    accentColor: '#8B6F47',
    estimatedMinutes: 9,
    sections: [
      {
        title: 'Pomáháš — neprodáváš',
        blocks: [
          {
            type: 'text',
            text: 'Floristka která pomáhá prodá víc než ta, která prodává. Zákazník to vycítí. Nabídni jednou, upřímně — a nech ho rozhodnout.',
          },
          {
            type: 'list',
            title: '4 otázky, které fungují:',
            items: [
              { bold: '„Je to pro nějakou příležitost?"', text: ' Odhalí kontext — narozeniny, pohřeb, gratulace. Každý případ je jiný.' },
              { bold: '„Máte oblíbenou barvu?"', text: ' Zákazník se zapojí. Kytice pak není tvoje volba — je to jejich volba.' },
              { bold: '„Jak velkou kytici si představujete?"', text: ' Ukotví cenu přirozeně — bez nepříjemné situace.' },
              { bold: '„Přidáme přáníčko?"', text: ' Malý doplněk, velký emoční dopad. Zákazník skoro vždy řekne ano.' },
            ],
          },
          {
            type: 'list',
            title: 'Proč zákazník přichází:',
            items: [
              { bold: 'Radost —', text: ' narozeniny, svátek, gratulace' },
              { bold: 'Poděkování —', text: ' pro kolegyni, učitelku' },
              { bold: 'Láska —', text: ' výročí, Valentýn, romantika' },
              { bold: 'Návštěva —', text: ' k přátelům, rodičům' },
              { bold: 'Omluva —', text: ' pro usmíření' },
              { bold: 'Smutek —', text: ' kondolence, pohřeb' },
            ],
          },
        ],
      },
      {
        title: '4 způsoby jak přirozeně zvýšit nákup',
        blocks: [
          {
            type: 'rules-cards',
            items: [
              {
                num: '01',
                title: 'Ukaž větší kytici',
                text: '„Mám tu ještě jednu o stupeň větší — chcete vidět?" Funguje jen pokud ji fyzicky ukážeš. Zákazník musí vidět — ne jen slyšet.',
              },
              {
                num: '02',
                title: 'Nabídni zábal nebo stuhu',
                text: '„Chcete to zabalit? Máme hnědý nebo pastelové barvy." Ukázat fyzicky = 3× vyšší šance. Zábal zákazník skoro vždy přijme.',
              },
              {
                num: '03',
                title: 'Nabídni ošetření květin',
                text: '„Přidám kondicionér — kytice vydrží o 2–3 dny déle." U připravené kytice zahrni přímo do kompozice.',
              },
              {
                num: '04',
                title: 'Nabídni přáníčko nebo doplněk',
                text: '„Přidáme přáníčko?" Malý doplněk — velký emoční dopad. Zákazník cítí kompletní dárek.',
              },
            ],
          },
          {
            type: 'stats',
            items: [
              { value: '750 Kč', label: 'Průměrná účtenka — cíl' },
              { value: '20 %', label: 'Zákazníků s doplňkem' },
              { value: '2/10', label: 'Zákazníci přejdou na větší kytici' },
            ],
          },
          {
            type: 'callout',
            text: 'Když každá prodavačka v síti 270 prodejen zvýší průměrný nákup o 100 Kč — to jsou miliony korun ročně navíc.',
          },
        ],
      },
      {
        title: 'Prodejní postup a reklamace',
        blocks: [
          {
            type: 'steps',
            items: [
              { step: 1, title: 'Aktivní pozdrav', text: 'Zákazníka pozdrav s úsměvem jako první. Florista je přítomna u prodejny, viditelná zákazníkovi. Nikdy nesleduj zákazníka mlčky.' },
              { step: 2, title: 'Nabídni pomoc s výběrem', text: '„Hledáte něco konkrétního, nebo mohu poradit?" Zákazník ocení kompetenci. Neváhej doporučit kytici měsíce.' },
              { step: 3, title: 'Ukaž větší kytici', text: 'Pokud zákazník zvažuje mezi malou a střední — ukaž větší. Rozdíl v ceně je malý, zážitek větší.' },
              { step: 4, title: 'Upsell — zábal, ošetření, kartička', text: 'Nabídni zábal nebo stužku. Nabídni kondicionér (+2–3 dny čerstvosti). Nabídni přání nebo doplněk.' },
              { step: 5, title: 'Pokladna a rozloučení', text: 'Přejdi k pokladně přirozeně. Zákazníkovi poděkuj a rozluč se. Spokojenost = opakovaný nákup.' },
            ],
          },
          {
            type: 'list',
            title: 'Reklamace — 3 kroky, vždy v tomto pořadí:',
            items: [
              { bold: '1. Nech zákazníka domluvit.', text: ' Nepřerušuj. Zákazník chce být slyšen — ne hned vysvětlení.' },
              { bold: '2. Omluvte se.', text: ' „Omlouvám se, to je nepříjemné." Nezáleží na tom kdo má pravdu. Omluva snižuje napětí.' },
              { bold: '3. Navrhni řešení sám — nečekej.', text: ' Výměna nebo nová kytice zdarma. Konkrétní nabídka situaci uzavře.' },
            ],
          },
          {
            type: 'callout',
            text: '„Spokojený zákazník se vrátí. Nespokojený zákazník řekne 10 lidem."',
          },
        ],
      },
    ],
    quiz: [
      {
        question: 'Jak pozdravíme zákazníka?',
        options: [
          'Počkáme, až přijde k pultu a sám osloví',
          'Aktivně s úsměvem jako první',
          'Mlčky sledujeme a čekáme na dotaz',
          'Zeptáme se na věrnostní kartu',
        ],
        correct: 1,
        explanation: 'Zákazníka pozdravíš aktivně s úsměvem jako první. Florista je přítomna u prodejny, viditelná zákazníkovi.',
      },
      {
        question: 'Která otázka funguje nejlépe pro zjištění kontextu nákupu?',
        options: [
          '„Kolik chcete utratit?"',
          '„Je to pro nějakou příležitost?"',
          '„Víte, co chcete?"',
          '„Berete to pro sebe?"',
        ],
        correct: 1,
        explanation: '„Je to pro nějakou příležitost?" odhalí kontext — narozeniny, pohřeb, gratulace. Každý případ je jiný.',
      },
      {
        question: 'Jak nabídneme zábal, aby zákazník přijal?',
        options: [
          'Zmíníme to jen slovně při pokladně',
          'Fyzicky ukážeme a nabídneme',
          'Zabalíme automaticky bez ptaní',
          'Nenabízíme — zákazník si řekne sám',
        ],
        correct: 1,
        explanation: 'Ukázat fyzicky = 3× vyšší šance. Zábal zákazník skoro vždy přijme, když vidí možnosti.',
      },
      {
        question: 'Kolik zákazníků z 10 by mělo koupit doplněk?',
        options: ['1 z 10', '2 z 10', '5 z 10', 'Každý zákazník'],
        correct: 1,
        explanation: 'Cíl je 20 % zákazníků s doplňkem — tedy 2 z 10. Nabídni každému, 2 řeknou ano — tím splníš cíl.',
      },
      {
        question: 'Jaký je správný první krok při reklamaci?',
        options: [
          'Vysvětlíme zákazníkovi proč se to stalo',
          'Okamžitě nabídneme slevu',
          'Nech zákazníka domluvit — opravdu naslouchej',
          'Zavoláme vedoucího',
        ],
        correct: 2,
        explanation: 'Prvním krokem je nechat zákazníka domluvit. Nepřerušovat. Zákazník chce být slyšen — ne hned vysvětlení.',
      },
    ],
  },

  {
    id: 6,
    title: 'Denní rutina',
    subtitle: 'Ráno a večer — každý den stejně',
    emoji: '☀️',
    accentColor: '#B8860B',
    estimatedMinutes: 7,
    sections: [
      {
        title: 'Ranní rutina — otevření prodejny',
        blocks: [
          {
            type: 'text',
            text: 'Prodejna musí být připravena před otevřením hypermarketu. Zákazník přichází hned po otevření — a první dojem nelze opakovat. Ranní rutina zabere při správném zvyku 20–30 minut.',
          },
          {
            type: 'alert',
            text: 'Prodejna se nikdy neotvírá s prázdnými vázami, bez cenovek nebo s uvadlým zbožím na výdeji.',
          },
          {
            type: 'checklist-display',
            title: 'Ranní postup (7 kroků):',
            items: [
              'Přejímka zázemí — box, voda, teplota, stav zboží, FIFO',
              'Čerstvá voda do váz — každý den, kondicionér ke stvolovým kyticím',
              'Doplnění výdeje — 4 velikosti S/M/L/XL, řezanka dominuje',
              'Kaskáda ŘK — čistá, spirálová technika, zábal hnědý nebo pastelový',
              'Cenovky a označení — každá kytice má viditelnou cenovku',
              'Čistota a pult — podlaha zametena, pult čistý přední i zadní',
              'Pracovní oblečení — čisté, zástěra na místě, vlasy upraveny',
            ],
          },
        ],
      },
      {
        title: 'Večerní rutina — zavření prodejny',
        blocks: [
          {
            type: 'text',
            text: 'Co uděláš dnes večer, ušetříš zítra ráno. Prodejna uzavřená správně = prodejna připravená snadno otevřít.',
          },
          {
            type: 'checklist-display',
            title: 'Večerní postup (7 kroků):',
            items: [
              'Kontrola čerstvosti — uvadlé ven a do waste, zapsat',
              'Voda a zázemí — zkontroluj hladinu vody ve vázách, box uzavři',
              'Prodejní plocha — podlaha, pult, vázy, cenovky',
              'Zboží do boxu — citlivé ŘK přes noc do chladícího boxu (zejm. v létě)',
              'Pokladna a systém — uzavření v WinShop, šuplík uzamčen',
              'Denní hlášení — vyplnit report, waste zapsán, mimořádnosti zapsány',
              'Uzamčení a odchod — osvětlení, klíče, předávací deník',
            ],
          },
          {
            type: 'callout',
            text: 'Zákazník hypermarketu přichází hned ráno. Prodejna která vypadá jako „před chvílí otevřena" prodává víc. Večerní rutina je investice do ranních tržeb.',
          },
        ],
      },
      {
        title: 'Předání směny a zázemí',
        blocks: [
          {
            type: 'text',
            text: 'Pokud předáváš kolegovi — informuj ho o stavu zboží, čerstvosti, mimořádnostech. Ústně i zapsáno. Žádné tiché přebírání.',
          },
          {
            type: 'list',
            title: 'Zázemí — základní pravidla:',
            items: [
              { bold: 'Čistota se nedohání — udržuje.', text: ' Každý zaměstnanec průběžně. 5 minut každou hodinu je lepší než hodina na konci dne.' },
              { bold: 'Box — max. 5 °C,', text: ' dveře zavírány okamžitě, nové zboží vždy vzadu.' },
              { bold: 'Uvadlé ven okamžitě', text: ' — zapsáno do waste. Zákazník který koupí špatnou kytici se nevrátí.' },
              { bold: 'Zákaznická zóna', text: ' — bez soukromých věcí personálu.' },
            ],
          },
          {
            type: 'stats',
            items: [
              { value: '20–30 min', label: 'Ranní rutina' },
              { value: '1×', label: 'Voda denně' },
              { value: '2×', label: 'Podlaha denně' },
              { value: '∞', label: 'Uvadlé ven' },
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        question: 'Jak dlouho trvá ranní rutina při správném zvyku?',
        options: ['5–10 minut', '20–30 minut', '1 hodinu', 'Záleží na náladě'],
        correct: 1,
        explanation: 'Ranní rutina zabere při správném zvyku 20–30 minut — při dodržování postupu je to zvladatelné.',
      },
      {
        question: 'Kdy vyměňujeme vodu ve vázách?',
        options: [
          '1× týdně',
          'Každý den ráno',
          'Jen při závozu nového zboží',
          'Voda se jen doplňuje, nevyměňuje',
        ],
        correct: 1,
        explanation: 'Voda ve vázách se vyměňuje každý den ráno. Čistá voda = základ čerstvosti kytic.',
      },
      {
        question: 'Proč je večerní rutina důležitá?',
        options: [
          'Jen kvůli předpisům OBM',
          'Aby vedoucí viděl, že pracuješ',
          'Prodejna dobře připravená večer = snazší a rychlejší ranní otevření',
          'Večerní rutina není důležitá — důležitá je jen ranní',
        ],
        correct: 2,
        explanation: 'Co uděláš dnes večer, ušetříš zítra ráno. Prodejna uzavřená správně = prodejna připravená snadno otevřít.',
      },
      {
        question: 'Co je povinné při předání směny kolegovi?',
        options: [
          'Nic — každý se zorientuje sám',
          'Jen ústní informace',
          'Informace o stavu zboží, čerstvosti a mimořádnostech — ústně i zapsáno',
          'Jen zapsaná poznámka v sešitě',
        ],
        correct: 2,
        explanation: 'Předání směny musí být ústně i zapsáno — stav zboží, čerstvost, mimořádnosti. Žádné tiché přebírání.',
      },
      {
        question: 'Kdy dáme citlivé řezané kytice přes noc do chladícího boxu?',
        options: [
          'Nikdy — kytice jsou v pořádku při pokojové teplotě',
          'Jen v zimě',
          'Pokud hrozí úhyn — zejména v létě',
          'Vždy, každý den bez výjimky',
        ],
        correct: 2,
        explanation: 'Citlivé ŘK z výdeje dáváme přes noc do boxu, pokud hrozí úhyn — platí zejména v létě.',
      },
    ],
  },

  {
    id: 7,
    title: 'Cenovky a KPIs',
    subtitle: 'Čísla která rozhodují — a proč',
    emoji: '📊',
    accentColor: '#5B4A8A',
    estimatedMinutes: 8,
    sections: [
      {
        title: 'Pravidla cenovek',
        blocks: [
          {
            type: 'text',
            text: 'Ceny jsou nastaveny centrálně. Vedoucí pobočky nemůže měnit ceny bez souhlasu OBM. Každé zboží musí mít viditelnou cenovku — to je zákonná povinnost i náš standard.',
          },
          {
            type: 'list',
            title: 'Pravidla cenovek:',
            items: [
              { bold: 'Každá kytice má cenovku.', text: ' Bez cenovky zákazník nesáhne — nikdy. Cenovka musí být viditelná z pohledu zákazníka.' },
              { bold: 'Jen tištěné cenovky.', text: ' Ručně psané cenovky nepoužíváme. Každá musí mít název, cenu.' },
              { bold: 'Cena za jednotku u doplňků.', text: ' U vína: cena za litr. U čokolády/bonboniér: cena za kilogram. Povinné ze zákona.' },
              { bold: 'Nikdy neslevuj čerstvé kytice.', text: ' Čerstvá kytice má vždy plnou cenu. Zralou kytici prodej aktivním nabízením — ne slevou.' },
            ],
          },
          {
            type: 'table',
            headers: ['Zboží', 'Povinné info'],
            rows: [
              ['Řezaná kytice', 'Cena, název, velikost'],
              ['Sezónní kytica', 'Cena + POS materiál centrály'],
              ['Hrnková kytice', 'Cena, název, piktogram péče'],
              ['Víno', 'Cena, záruční datum, 18+'],
              ['Bonboniéra', 'Cena, záruční datum, 18+'],
              ['Doplňky', 'Cena'],
            ],
          },
          {
            type: 'alert-red',
            text: 'Zboží bez cenovky neprodáváme! Prodej zboží bez cenovky je zákonné porušení. Pokud cenovka chybí — okamžitě doplnit nebo zboží stáhnout z výdeje.',
          },
        ],
      },
      {
        title: 'KPIs pobočky — co se měří a proč',
        blocks: [
          {
            type: 'text',
            text: 'KPIs (klíčové ukazatele výkonu) jsou čísla, která říkají, jak si pobočka vede. Vedoucí pobočky je zná, sleduje je a rozumí jim. Každé číslo má svůj příběh — a my ho chceme zlepšovat.',
          },
          {
            type: 'kpi-cards',
            items: [
              { icon: '💰', title: 'TRŽBA', text: 'Celkový obrat pobočky za den/týden/měsíc.', goal: 'Cíl: +10 % LfL v 2026 vs. 2025.' },
              { icon: '🛒', title: 'PRŮMĚRNÝ KOŠ', text: 'Průměrná útrata zákazníka. Roste upsellem — větší kytice, zábal, doplněk.', goal: 'Cíl: rostoucí trend, CZ ~750 Kč.' },
              { icon: '🗑️', title: 'ODPIS', text: 'Procento zboží odepsaného (waste). Snižuje se FIFO a správnými objednávkami.', goal: 'Cíl: pod 10 % v CZ, pod 9 % v SK.' },
              { icon: '👥', title: 'POČET ZÁKAZNÍKŮ', text: 'Kolik zákazníků nakoupí. Roste připraveností prodejny.', goal: 'Cíl: zákazník se vrátí.' },
            ],
          },
          {
            type: 'callout',
            text: 'LfL = Like for Like. Srovnáváme výkon letošního týdne vs. stejný týden loni. LfL +10 % = prodali jsme o 10 % více než loni ve stejném období. To je náš cíl pro 2026.',
          },
        ],
      },
      {
        title: 'Store Index a hodnocení',
        blocks: [
          {
            type: 'text',
            text: 'Store Index je hodnocení provozního standardu pobočky na škále 1–5. Vyplňuje ho vedoucí sám každý den a OBM při storechecku 2× měsíčně.',
          },
          {
            type: 'table',
            headers: ['Body', 'Co to znamená'],
            rows: [
              ['1–2', 'Nedoplněno, špína, chybí cenovky. Prodejna nepřipravena. Zákazník odchází bez nákupu.'],
              ['3', 'Průměr, doplněno ~75 %. Zákazník nakoupí, ale není přesvědčen, že se vrátí.'],
              ['4', 'Doplněno, čisto, dobrý dojem. Zákazník se rád vrátí. Toto je náš denní cíl.'],
              ['5', 'Nadstandard. 15+ kytic, profesionální. Zákazník nadšen. Základ pro mimořádnou odměnu.'],
            ],
          },
          {
            type: 'alert',
            text: 'Cíl každý den: minimálně 4 body. Dny s hodnocením 3 nebo níže jsou dny, kde jsme zákazníkovi dlužili víc.',
          },
          {
            type: 'stats',
            items: [
              { value: '4', label: 'Denní cíl Store Indexu' },
              { value: '5', label: 'Nadstandard = odměna' },
              { value: '2×', label: 'Storecheck OBM měsíčně' },
              { value: '+10 %', label: 'Cíl tržeb LfL 2026' },
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        question: 'Jaké cenovky smíme používat?',
        options: [
          'Ručně psané — jsou osobnější',
          'Jen tištěné cenovky',
          'Libovolné — hlavně aby byla vidět cena',
          'Digitální displeje nebo papírové',
        ],
        correct: 1,
        explanation: 'Jen tištěné cenovky. Ručně psané cenovky nepoužíváme. Každá musí mít název a cenu.',
      },
      {
        question: 'Jaká je cílová průměrná účtenka v CZ?',
        options: ['350 Kč', '500 Kč', '~750 Kč', '1 200 Kč'],
        correct: 2,
        explanation: 'Cílová průměrná účtenka v CZ je ~750 Kč. Základ kytice 550 Kč + zábal + přáníčko = 750 Kč.',
      },
      {
        question: 'Kdy smíme dát slevu na čerstvé kytice?',
        options: [
          'Vždy, když o to zákazník požádá',
          'Na konci dne, abychom snížili odpis',
          'Nikdy — čerstvá kytice má vždy plnou cenu',
          'Při nákupu 2 a více kytic',
        ],
        correct: 2,
        explanation: 'Čerstvá kytice má vždy plnou cenu. Zralou kytici prodáváme aktivním nabízením — ne slevou.',
      },
      {
        question: 'Co znamená LfL +10 % v roce 2026?',
        options: [
          'Prodali jsme o 10 % více než plán',
          'Prodali jsme o 10 % více než loni ve stejném období',
          'Snížili jsme odpis o 10 %',
          'Zvýšili jsme počet zákazníků o 10 %',
        ],
        correct: 1,
        explanation: 'LfL = Like for Like. LfL +10 % znamená: prodali jsme o 10 % více než loni ve stejném týdnu/měsíci.',
      },
      {
        question: 'Jaký je denní cíl Store Indexu?',
        options: ['Minimálně 2 body', 'Minimálně 3 body', 'Minimálně 4 body', 'Přesně 5 bodů'],
        correct: 2,
        explanation: 'Denní cíl je minimálně 4 body. 5 bodů = nadstandard, základ pro mimořádnou odměnu. 3 a méně = nestačí.',
      },
    ],
  },
]
