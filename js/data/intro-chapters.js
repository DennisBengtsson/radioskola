// Data för introduktionskapitlen
const introChapters = [
    {
        id: 'intro-1',
        slug: 'intro-1-vad-ar-radio',
        number: 1,
        title: 'Vad är radio egentligen?',
        icon: '🌊',
        description: 'Osynliga vågor som färdas genom luften – låter det som magi? Här förklarar vi hur det fungerar!',
        difficulty: 'easy',
        estimatedTime: 15,
        topics: [
            'Radiovågor – osynlig energi',
            'Hur en sändare och mottagare fungerar',
            'Varför radio fungerar utan kablar',
            'Radio i vardagen (mobil, wifi, tv)'
        ],
        exercises: [
            {
                id: 'i1-e1',
                type: 'multiple-choice',
                question: 'Vad är radiovågor egentligen?',
                options: [
                    'Ljudvågor som färdas genom luften',
                    'Elektromagnetiska vågor som färdas med ljusets hastighet',
                    'Elektrisk ström som flyger genom luften',
                    'Osynliga partiklar som studsar mellan sändare och mottagare'
                ],
                correct: 1,
                explanation: 'Radiovågor är elektromagnetiska vågor, precis som ljus, men med längre våglängd. De färdas med ljusets hastighet – cirka 300 000 km/s!'
            },
            {
                id: 'i1-e2',
                type: 'true-false',
                question: 'Radiovågor kan färdas genom tomma rymden (vakuum).',
                correct: true,
                explanation: 'Ja! Till skillnad från ljudvågor behöver inte radiovågor något medium. Därför kan vi kommunicera med satelliter och rymdsonder.'
            },
            {
                id: 'i1-e3',
                type: 'multiple-choice',
                question: 'Vilken av dessa använder INTE radiovågor?',
                options: [
                    'Mobiltelefon',
                    'WiFi-router',
                    'Hörlurar med sladd',
                    'Fjärrkontroll till TV:n (de flesta)'
                ],
                correct: 2,
                explanation: 'Hörlurar med sladd använder elektrisk kabel för att överföra ljud – inga radiovågor behövs! De flesta fjärrkontroller använder däremot infrarött ljus, som tekniskt sett är elektromagnetiska vågor.'
            },
            {
                id: 'i1-e4',
                type: 'fill-blank',
                question: 'En radiosändare omvandlar elektriska signaler till _______ som skickas ut via antennen.',
                answer: 'radiovågor',
                alternatives: ['elektromagnetiska vågor', 'radiofrekvent energi'],
                hint: 'Vad har vi pratat om i hela kapitlet?'
            },
            {
                id: 'i1-e5',
                type: 'ordering',
                question: 'Sätt stegen i rätt ordning: Hur når din röst från din radio till en kompis radio?',
                items: [
                    'Du pratar i mikrofonen',
                    'Rösten omvandlas till elektriska signaler',
                    'Sändaren modulerar radiovågen med signalen',
                    'Antennen skickar ut radiovågor',
                    'Din kompis antenn tar emot vågorna',
                    'Mottagaren omvandlar tillbaka till ljud',
                    'Din kompis hör dig i högtalaren'
                ],
                correctOrder: [0, 1, 2, 3, 4, 5, 6]
            }
        ]
    },
    {
        id: 'intro-2',
        slug: 'intro-2-radiohistoria',
        number: 2,
        title: 'Radions fascinerande historia',
        icon: '📜',
        description: 'Från Marconis första experiment till dagens rymdkommunikation.',
        difficulty: 'easy',
        estimatedTime: 20,
        topics: [
            'Heinrich Hertz bevisar radiovågor',
            'Marconi – radions fader',
            'Radioamatörernas gyllene era',
            'Från rörradio till smartphone'
        ],
        exercises: [
            {
                id: 'i2-e1',
                type: 'multiple-choice',
                question: 'Vem bevisade först att elektromagnetiska vågor existerar?',
                options: [
                    'Guglielmo Marconi',
                    'Heinrich Hertz',
                    'Nikola Tesla',
                    'Alexander Graham Bell'
                ],
                correct: 1,
                explanation: 'Heinrich Hertz bevisade 1887 att elektromagnetiska vågor existerar. Därför kallas enheten för frekvens "Hertz" (Hz) efter honom!'
            },
            {
                id: 'i2-e2',
                type: 'multiple-choice',
                question: 'Vilket år lyckades Marconi skicka radiosignaler över Atlanten?',
                options: ['1895', '1901', '1912', '1920'],
                correct: 1,
                explanation: 'Den 12 december 1901 tog Marconi emot bokstaven "S" (tre punkter i morsekod) som skickats från England till Newfoundland i Kanada – över 3000 km!'
            },
            {
                id: 'i2-e3',
                type: 'timeline',
                question: 'Ordna händelserna kronologiskt (äldst först):',
                items: [
                    'Hertz bevisar elektromagnetiska vågor (1887)',
                    'Marconi skickar signal över Atlanten (1901)',
                    'Titanic förliser (1912)',
                    'Transistorn uppfinns (1947)',
                    'Första amatörsatelliten OSCAR 1 (1961)'
                ],
                correctOrder: [0, 1, 2, 3, 4]
            },
            {
                id: 'i2-e4',
                type: 'matching',
                question: 'Para ihop personen med deras bidrag:',
                pairs: [
                    { left: 'Heinrich Hertz', right: 'Bevisade radiovågor existerar' },
                    { left: 'Guglielmo Marconi', right: 'Första praktiska radiosystemet' },
                    { left: 'Nikola Tesla', right: 'Bidrog till trådlös energiöverföring' },
                    { left: 'Reginald Fessenden', right: 'Första röstradiosändningen' }
                ]
            },
            {
                id: 'i2-e5',
                type: 'true-false',
                question: 'Radioamatörer var de första att upptäcka att kortvåg kunde användas för långdistans-kommunikation.',
                correct: true,
                explanation: 'Stämmer! På 1920-talet trodde experterna att kortvåg var värdelöst. Men amatörerna experimenterade och upptäckte att kortvåg kunde studsa mot jonosfären och nå runt hela jorden!'
            },
            {
                id: 'i2-e6',
                type: 'fill-blank',
                question: 'Nödsignalen ___ blev internationell standard efter Titanic-katastrofen.',
                answer: 'SOS',
                alternatives: ['sos'],
                hint: 'Tre korta, tre långa, tre korta i morsekod...',
                explanation: 'SOS (· · · — — — · · ·) valdes för att det är lätt att sända och känna igen i morsekod, inte för att det är en förkortning av något.'
            }
        ]
    },
    {
        id: 'intro-3',
        slug: 'intro-3-nar-radio-raddade-liv',
        number: 3,
        title: 'När radion räddade liv',
        icon: '🆘',
        description: 'Verkliga berättelser där radiokommunikation var skillnaden mellan liv och död.',
        difficulty: 'easy',
        estimatedTime: 25,
        topics: [
            'Titanic – katastrofen som ändrade allt',
            'Tsunamin 2004 – amatörer i krisen',
            'Orkaner och naturkatastrofer',
            'Svenska radioamatörer i räddningsinsatser'
        ],
        exercises: [
            {
                id: 'i3-e1',
                type: 'multiple-choice',
                question: 'Hur kunde fartyget Carpathia rädda 710 personer från Titanic?',
                options: [
                    'De såg nödraketer på himlen',
                    'De fick ett radiomeddelande med SOS-signal',
                    'En flygare såg olyckan och landade',
                    'De var redan på väg till samma hamn'
                ],
                correct: 1,
                explanation: 'Titanics radiooperatörer skickade nödsignaler som plockades upp av Carpathia, som ändrade kurs och räddade 710 överlevande ur livbåtarna.'
            },
            {
                id: 'i3-e2',
                type: 'fill-blank',
                question: 'Efter Titanic-katastrofen infördes krav på att alla passagerarfartyg måste ha _______ bemannad radiostation.',
                answer: 'dygnet-runt',
                alternatives: ['24 timmars', '24h', 'kontinuerlig'],
                explanation: 'Ett närliggande fartyg, SS Californian, hade stängt av sin radio för natten och hörde aldrig nödsignalerna. Detta ledde till nya säkerhetskrav.'
            },
            {
                id: 'i3-e3',
                type: 'multiple-choice',
                question: 'Varför var radioamatörer så viktiga under tsunamin i Sydostasien 2004?',
                options: [
                    'De varnade människor innan vågen kom',
                    'De kunde kommunicera när telefon- och mobilnäten var utslagna',
                    'De hade båtar som kunde rädda folk',
                    'De var de enda med tillgång till internet'
                ],
                correct: 1,
                explanation: 'Katastrofen slog ut i princip all modern kommunikation. Radioamatörer kunde upprätta nödkommunikation med enkel utrustning och ofta batteri- eller generatordrift.'
            },
            {
                id: 'i3-e4',
                type: 'true-false',
                question: 'I Sverige finns en organisation av radioamatörer som tränar för att hjälpa till vid kriser.',
                correct: true,
                explanation: 'FRO (Frivilliga Radioorganisationen) samlar radioamatörer som kan hjälpa myndigheter med kommunikation vid större olyckor och katastrofer.'
            },
            {
                id: 'i3-e5',
                type: 'reflection',
                question: 'Fundera på: Vad tror du händer med mobilnätet om strömmen är borta i flera dagar? Hur skulle du kunna kommunicera?',
                hints: [
                    'Mobilmaster behöver el för att fungera',
                    'De flesta har bara batterireserv i några timmar',
                    'Radioamatörer kan köra på batteri och solceller'
                ]
            }
        ]
    },
    {
        id: 'intro-4',
        slug: 'intro-4-matematik-fysik',
        number: 4,
        title: 'Matematik & fysik från grunden',
        icon: '🔢',
        description: 'All matte du behöver, förklarad så att alla förstår.',
        difficulty: 'medium',
        estimatedTime: 35,
        topics: [
            'Stora och små tal (prefix)',
            'Enheter: Volt, Ampere, Ohm, Watt',
            'Ohms lag – den viktigaste formeln',
            'Effekt och energi',
            'Decibel'
        ],
        exercises: [
            {
                id: 'i4-e1',
                type: 'matching',
                question: 'Para ihop prefixet med rätt värde:',
                pairs: [
                    { left: 'milli (m)', right: '0,001 (en tusendel)' },
                    { left: 'kilo (k)', right: '1 000 (tusen)' },
                    { left: 'mega (M)', right: '1 000 000 (en miljon)' },
                    { left: 'giga (G)', right: '1 000 000 000 (en miljard)' }
                ]
            },
            {
                id: 'i4-e2',
                type: 'calculation',
                question: 'En radio sänder på 145 MHz. Hur många Hz är det?',
                answer: 145000000,
                unit: 'Hz',
                hint: 'Mega (M) betyder miljon. 145 MHz = 145 × 1 000 000 Hz',
                steps: [
                    '145 MHz = 145 megahertz',
                    'Mega = 1 000 000',
                    '145 × 1 000 000 = 145 000 000 Hz'
                ]
            },
            {
                id: 'i4-e3',
                type: 'calculation',
                question: 'Om spänningen är 12 V och resistansen är 4 Ω, hur stor är strömmen? (Använd Ohms lag: I = U / R)',
                answer: 3,
                unit: 'A',
                hint: 'Ohms lag: Ström = Spänning delat med Resistans',
                steps: [
                    'Vi vet: U = 12 V, R = 4 Ω',
                    'Ohms lag: I = U / R',
                    'I = 12 / 4 = 3 A'
                ]
            },
            {
                id: 'i4-e4',
                type: 'multiple-choice',
                question: 'Vad mäter vi i Watt (W)?',
                options: [
                    'Spänning – hur hårt elektriciteten "trycker"',
                    'Ström – hur mycket elektricitet som flödar',
                    'Resistans – hur svårt elektriciteten har att flöda',
                    'Effekt – hur mycket energi som används per sekund'
                ],
                correct: 3,
                explanation: 'Watt mäter effekt, alltså hur mycket energi som omvandlas varje sekund. En 60W lampa använder 60 joule energi per sekund.'
            },
            {
                id: 'i4-e5',
                type: 'calculation',
                question: 'En radiosändare har effekten 5 W. Du förstärker signalen så att du ökar med 10 dB. Vilken effekt har du nu?',
                answer: 50,
                unit: 'W',
                hint: '+10 dB betyder 10 gånger så hög effekt',
                steps: [
                    '+3 dB = dubbel effekt',
                    '+10 dB = 10 gånger effekten',
                    '5 W × 10 = 50 W'
                ]
            },
            {
                id: 'i4-e6',
                type: 'fill-blank',
                question: 'Ohms lag säger att spänning (U) = ström (I) × _______',
                answer: 'resistans',
                alternatives: ['resistansen', 'R', 'motstånd'],
                explanation: 'U = I × R är grundformeln. Om du vet två värden kan du räkna ut det tredje!'
            },
            {
                id: 'i4-e7',
                type: 'multiple-choice',
                question: 'Hur många milliampere (mA) är 2,5 A?',
                options: ['0,0025 mA', '25 mA', '250 mA', '2500 mA'],
                correct: 3,
                explanation: '1 A = 1000 mA. Så 2,5 A = 2,5 × 1000 = 2500 mA'
            }
        ]
    },
    {
        id: 'intro-5',
        slug: 'intro-5-frekvensbanden',
        number: 5,
        title: 'Alla frekvensband förklarade',
        icon: '📊',
        description: 'Vem använder vad och varför? En komplett översikt.',
        difficulty: 'medium',
        estimatedTime: 30,
        topics: [
            'Vad är frekvens och våglängd?',
            'Radiospektrumet',
            'Amatörbanden: HF, VHF, UHF',
            'Varför finns det regler?'
        ],
        exercises: [
            {
                id: 'i5-e1',
                type: 'multiple-choice',
                question: 'Vad mäter frekvens?',
                options: [
                    'Hur långt en radiovåg når',
                    'Hur många vågor som passerar per sekund',
                    'Hur stark signalen är',
                    'Hur snabbt vågen rör sig'
                ],
                correct: 1,
                explanation: 'Frekvens mäts i Hertz (Hz) och anger hur många vågor som passerar en punkt varje sekund. 1 MHz = 1 miljon vågor per sekund!'
            },
            {
                id: 'i5-e2',
                type: 'true-false',
                question: 'Hög frekvens betyder kort våglängd.',
                correct: true,
                explanation: 'Stämmer! Frekvens och våglängd hänger ihop omvänt. Radiovågor med hög frekvens (många svängningar) har kortare avstånd mellan vågorna.'
            },
            {
                id: 'i5-e3',
                type: 'matching',
                question: 'Para ihop frekvensbandet med typisk användning:',
                pairs: [
                    { left: 'Kortvåg (HF, 3-30 MHz)', right: 'Kommunikation runt hela världen' },
                    { left: 'VHF (30-300 MHz)', right: 'FM-radio, flygtrafik, lokal amatörradio' },
                    { left: 'UHF (300-3000 MHz)', right: 'TV, mobiltelefoner, WiFi' },
                    { left: 'Mikrovågor (>3 GHz)', right: 'Radar, satelliter, 5G' }
                ]
            },
            {
                id: 'i5-e4',
                type: 'multiple-choice',
                question: '2-metersbandet är ett populärt amatörband. Vilken frekvens ligger det på (ungefär)?',
                options: ['2 MHz', '50 MHz', '145 MHz', '440 MHz'],
                correct: 2,
                explanation: '2-metersbandet ligger runt 144-146 MHz. Namnet kommer från att radiovågorna på denna frekvens är ungefär 2 meter långa!'
            },
            {
                id: 'i5-e5',
                type: 'ordering',
                question: 'Ordna frekvensbanden från lägst till högst frekvens:',
                items: [
                    'Långvåg (LF)',
                    'Mellanvåg (MF)',
                    'Kortvåg (HF)',
                    'VHF',
                    'UHF',
                    'Mikrovågor'
                ],
                correctOrder: [0, 1, 2, 3, 4, 5]
            },
            {
                id: 'i5-e6',
                type: 'multiple-choice',
                question: 'Varför finns det strikta regler om vem som får sända på vilka frekvenser?',
                options: [
                    'Så att staten kan tjäna pengar på licenser',
                    'För att förhindra störningar mellan olika användare',
                    'Så att inte för många blir radioamatörer',
                    'För att radiovågor är farliga'
                ],
                correct: 1,
                explanation: 'Radiospektrumet är en begränsad resurs. Utan regler skulle flygledning, ambulanser, mobilnät och radioamatörer störa varandra – kaos!'
            }
        ]
    },
    {
        id: 'intro-6',
        slug: 'intro-6-vad-gor-radioamatorer',
        number: 6,
        title: 'Vad gör radioamatörer egentligen?',
        icon: '🌍',
        description: 'Mer än att bara prata i radio! Upptäck alla spännande möjligheter.',
        difficulty: 'easy',
        estimatedTime: 25,
        topics: [
            'DX – jaga länder runt världen',
            'Tävlingar och contest',
            'Bygga egen utrustning',
            'Satelliter och rymden',
            'Nödkommunikation',
            'Digital radio'
        ],
        exercises: [
            {
                id: 'i6-e1',
                type: 'multiple-choice',
                question: 'Vad betyder "DX" inom amatörradio?',
                options: [
                    'Digital eXperiment',
                    'Distans – att kommunicera med stationer långt bort',
                    'En typ av antenn',
                    'En digital radiomode'
                ],
                correct: 1,
                explanation: 'DX kommer från "distance" och handlar om att försöka nå så långt bort som möjligt. Många samlar på bekräftade kontakter med olika länder!'
            },
            {
                id: 'i6-e2',
                type: 'true-false',
                question: 'Radioamatörer har skickat upp egna satelliter.',
                correct: true,
                explanation: 'Absolut! Sedan 1961 har amatörer byggt och skickat upp över 100 satelliter. OSCAR-programmet började med amatörsatelliter och fortsätter än idag.'
            },
            {
                id: 'i6-e3',
                type: 'multiple-choice',
                question: 'Vad är en "contest" inom amatörradio?',
                options: [
                    'En tävling där man försöker prata med så många stationer som möjligt på en viss tid',
                    'En pristävling för vackraste radioutrustning',
                    'En kunskapstävling om radioteknik',
                    'En tävling i morsekod'
                ],
                correct: 0,
                explanation: 'Contest är tidsbegränsade tävlingar där man försöker göra så många kontakter som möjligt, ofta med poäng för längre distanser.'
            },
            {
                id: 'i6-e4',
                type: 'matching',
                question: 'Para ihop aktiviteten med beskrivningen:',
                pairs: [
                    { left: 'SOTA', right: 'Radio från bergstoppar' },
                    { left: 'FT8', right: 'Digital mode med svaga signaler' },
                    { left: 'EME', right: 'Studsning av signaler mot månen' },
                    { left: 'Fox hunting', right: 'Leta efter dold sändare med pejl' }
                ]
            },
            {
                id: 'i6-e5',
                type: 'multiple-choice',
                question: 'Vilken är den internationella nödsignalen som alla radioamatörer känner till?',
                options: ['HELP', 'SOS', 'MAYDAY', '911'],
                correct: 2,
                explanation: 'MAYDAY används för röstradio vid livshotande nödsituationer. SOS används i morsekod. Båda är internationellt erkända.'
            },
            {
                id: 'i6-e6',
                type: 'reflection',
                question: 'Vilken av aktiviteterna låter mest spännande för dig? Varför?',
                options: [
                    'DX – prata med folk i andra länder',
                    'Tävlingar – spänning och utmaning',
                    'Bygga egen radio – teknik och hantverk',
                    'Nödkommunikation – hjälpa andra',
                    'Satelliter – rymden lockar!',
                    'Digital radio – ny teknik'
                ]
            }
        ]
    }
];

// Exportera för användning
if (typeof module !== 'undefined' && module.exports) {
    module.exports = introChapters;
}
