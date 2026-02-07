// ============================================
// CERTIFIKATSKAPITEL MED DELKAPITEL OCH ÖVNINGAR
// ============================================
// Varje kapitel har delkapitel med 10 övningsfrågor vardera
// Måste ha 80% rätt för att "klara" ett delkapitel

const certChapters = [
    {
        id: 1,
        number: 1,
        title: 'Grundläggande Elektronik',
        slug: 'kapitel-1-grundlaggande-elektronik',
        icon: '⚡',
        subchapters: [
            {
                id: '1.1',
                title: 'Elektrisk ström och spänning',
                slug: 'strom-spanning',
                description: 'Lär dig om ström, spänning, enheter och grundläggande begrepp',
                estimatedTime: 15,
                exercises: [
                    {
                        id: 'c1-1-e1',
                        type: 'multiple-choice',
                        question: 'Vad mäts elektrisk ström i?',
                        options: ['Volt (V)', 'Ampere (A)', 'Ohm (Ω)', 'Watt (W)'],
                        correct: 1,
                        explanation: 'Elektrisk ström mäts i Ampere (A), uppkallat efter André-Marie Ampère.'
                    },
                    {
                        id: 'c1-1-e2',
                        type: 'multiple-choice',
                        question: 'Vad är enheten för elektrisk spänning?',
                        options: ['Ampere (A)', 'Ohm (Ω)', 'Volt (V)', 'Watt (W)'],
                        correct: 2,
                        explanation: 'Spänning mäts i Volt (V), uppkallat efter Alessandro Volta.'
                    },
                    {
                        id: 'c1-1-e3',
                        type: 'calculation',
                        question: 'Hur många milliampere (mA) är 2,5 A?',
                        answer: 2500,
                        unit: 'mA',
                        hint: '1 A = 1000 mA',
                        explanation: '1 A = 1000 mA, så 2,5 A = 2,5 × 1000 = 2500 mA'
                    },
                    {
                        id: 'c1-1-e4',
                        type: 'true-false',
                        question: 'Likström (DC) ändrar riktning periodiskt.',
                        correct: false,
                        explanation: 'Falskt. Likström flyter alltid i samma riktning. Det är växelström (AC) som ändrar riktning.'
                    },
                    {
                        id: 'c1-1-e5',
                        type: 'multiple-choice',
                        question: 'Vilken är den typiska matningsspänningen för amatörradioutrustning?',
                        options: ['9 V', '12 V', '13,8 V', '24 V'],
                        correct: 2,
                        explanation: '13,8 V är standardspänningen för amatörradioutrustning, vilket motsvarar ett fulladdat 12V bilbatteri.'
                    },
                    {
                        id: 'c1-1-e6',
                        type: 'fill-blank',
                        question: 'Växelström förkortas _____ på engelska.',
                        answer: 'AC',
                        alternatives: ['ac'],
                        explanation: 'AC står för Alternating Current (växelström). DC står för Direct Current (likström).'
                    },
                    {
                        id: 'c1-1-e7',
                        type: 'multiple-choice',
                        question: 'Vad är 500 µA i milliampere?',
                        options: ['0,5 mA', '5 mA', '50 mA', '500 mA'],
                        correct: 0,
                        explanation: '1 mA = 1000 µA, så 500 µA = 500/1000 = 0,5 mA'
                    },
                    {
                        id: 'c1-1-e8',
                        type: 'true-false',
                        question: 'Spänningar över 50V kan vara livsfarliga.',
                        correct: true,
                        explanation: 'Sant. Spänningar över 50V AC eller 120V DC anses vara potentiellt livsfarliga.'
                    },
                    {
                        id: 'c1-1-e9',
                        type: 'multiple-choice',
                        question: 'Vilken frekvens har nätspänningen i Sverige?',
                        options: ['50 Hz', '60 Hz', '100 Hz', '230 Hz'],
                        correct: 0,
                        explanation: 'Nätspänningen i Sverige är 230V, 50 Hz. I USA är det 110V, 60 Hz.'
                    },
                    {
                        id: 'c1-1-e10',
                        type: 'matching',
                        question: 'Para ihop spänningen med användningsområdet:',
                        pairs: [
                            { left: '1,5 V', right: 'AA-batteri' },
                            { left: '9 V', right: 'Transistorbatteri' },
                            { left: '12 V', right: 'Bilbatteri' },
                            { left: '230 V', right: 'Hushållsel' }
                        ]
                    }
                ]
            },
            {
                id: '1.2',
                title: 'Resistans och Ohms lag',
                slug: 'ohms-lag',
                description: 'Förstå resistans och den viktigaste formeln inom elektronik',
                estimatedTime: 20,
                exercises: [
                    {
                        id: 'c1-2-e1',
                        type: 'multiple-choice',
                        question: 'Vad mäts resistans i?',
                        options: ['Volt (V)', 'Ampere (A)', 'Ohm (Ω)', 'Watt (W)'],
                        correct: 2,
                        explanation: 'Resistans mäts i Ohm (Ω), uppkallat efter Georg Ohm.'
                    },
                    {
                        id: 'c1-2-e2',
                        type: 'calculation',
                        question: 'Om spänningen är 12V och resistansen är 4Ω, vad är strömmen?',
                        answer: 3,
                        unit: 'A',
                        hint: 'Använd Ohms lag: I = U / R',
                        steps: [
                            'Ohms lag: I = U / R',
                            'I = 12V / 4Ω',
                            'I = 3A'
                        ],
                        explanation: 'Med Ohms lag: I = U/R = 12V/4Ω = 3A'
                    },
                    {
                        id: 'c1-2-e3',
                        type: 'calculation',
                        question: 'En resistor på 470Ω har 20 mA genom sig. Vilken spänning ligger över resistorn?',
                        answer: 9.4,
                        unit: 'V',
                        tolerance: 0.1,
                        hint: 'U = R × I. Kom ihåg att omvandla mA till A',
                        steps: [
                            '20 mA = 0,020 A',
                            'U = R × I',
                            'U = 470Ω × 0,020A = 9,4V'
                        ],
                        explanation: 'U = R × I = 470Ω × 0,020A = 9,4V'
                    },
                    {
                        id: 'c1-2-e4',
                        type: 'fill-blank',
                        question: 'Enligt Ohms lag är spänning (U) lika med resistans (R) multiplicerat med _______.',
                        answer: 'ström',
                        alternatives: ['strömmen', 'I'],
                        explanation: 'Ohms lag: U = R × I (spänning = resistans × ström)'
                    },
                    {
                        id: 'c1-2-e5',
                        type: 'multiple-choice',
                        question: 'Vilken formel används för att beräkna resistans när spänning och ström är kända?',
                        options: ['R = U × I', 'R = U / I', 'R = I / U', 'R = U + I'],
                        correct: 1,
                        explanation: 'R = U / I (resistans = spänning delat med ström)'
                    },
                    {
                        id: 'c1-2-e6',
                        type: 'calculation',
                        question: 'En krets har 9V och strömmen är 45 mA. Vad är resistansen?',
                        answer: 200,
                        unit: 'Ω',
                        hint: 'R = U / I',
                        steps: [
                            '45 mA = 0,045 A',
                            'R = U / I',
                            'R = 9V / 0,045A = 200Ω'
                        ],
                        explanation: 'R = U/I = 9V/0,045A = 200Ω'
                    },
                    {
                        id: 'c1-2-e7',
                        type: 'true-false',
                        question: 'Om resistansen ökar i en krets med konstant spänning, ökar också strömmen.',
                        correct: false,
                        explanation: 'Falskt. Om resistansen ökar medan spänningen är konstant, MINSKAR strömmen (I = U/R).'
                    },
                    {
                        id: 'c1-2-e8',
                        type: 'multiple-choice',
                        question: 'Vad är 2,2 kΩ i ohm?',
                        options: ['220 Ω', '2200 Ω', '22000 Ω', '220000 Ω'],
                        correct: 1,
                        explanation: '1 kΩ = 1000 Ω, så 2,2 kΩ = 2200 Ω'
                    },
                    {
                        id: 'c1-2-e9',
                        type: 'multiple-choice',
                        question: 'I URI-triangeln, om du täcker över R, vilken formel ser du?',
                        options: ['R = U × I', 'I = U / R', 'U = I / R', 'U = R × I'],
                        correct: 1,
                        explanation: 'Om du täcker R i triangeln ser du U över I, vilket betyder I = U/R'
                    },
                    {
                        id: 'c1-2-e10',
                        type: 'calculation',
                        question: 'En LED-lampa har resistansen 100Ω och ansluts till 12V. Hur stor blir strömmen i mA?',
                        answer: 120,
                        unit: 'mA',
                        hint: 'I = U / R, och omvandla sedan till mA',
                        steps: [
                            'I = U / R',
                            'I = 12V / 100Ω = 0,12A',
                            '0,12A = 120 mA'
                        ],
                        explanation: 'I = 12V/100Ω = 0,12A = 120 mA'
                    }
                ]
            },
            {
                id: '1.3',
                title: 'Effekt och energi',
                slug: 'effekt',
                description: 'Lär dig om elektrisk effekt, watt och decibel',
                estimatedTime: 20,
                exercises: [
                    {
                        id: 'c1-3-e1',
                        type: 'multiple-choice',
                        question: 'Vad mäts elektrisk effekt i?',
                        options: ['Volt (V)', 'Ampere (A)', 'Ohm (Ω)', 'Watt (W)'],
                        correct: 3,
                        explanation: 'Effekt mäts i Watt (W), uppkallat efter James Watt.'
                    },
                    {
                        id: 'c1-3-e2',
                        type: 'calculation',
                        question: 'En transceiver drar 20A vid 13,8V. Vilken effekt förbrukar den?',
                        answer: 276,
                        unit: 'W',
                        hint: 'P = U × I',
                        steps: [
                            'P = U × I',
                            'P = 13,8V × 20A',
                            'P = 276W'
                        ],
                        explanation: 'P = U × I = 13,8V × 20A = 276W'
                    },
                    {
                        id: 'c1-3-e3',
                        type: 'fill-blank',
                        question: 'Formeln för elektrisk effekt är P = U × _____',
                        answer: 'I',
                        alternatives: ['ström', 'strömmen'],
                        explanation: 'P = U × I (effekt = spänning × ström)'
                    },
                    {
                        id: 'c1-3-e4',
                        type: 'multiple-choice',
                        question: 'Hur många dB motsvarar en fördubbling av effekten?',
                        options: ['1 dB', '3 dB', '6 dB', '10 dB'],
                        correct: 1,
                        explanation: '+3 dB = dubbel effekt, -3 dB = halva effekten'
                    },
                    {
                        id: 'c1-3-e5',
                        type: 'multiple-choice',
                        question: 'Hur många dB är 10 gånger effekten?',
                        options: ['3 dB', '6 dB', '10 dB', '20 dB'],
                        correct: 2,
                        explanation: '+10 dB = 10 gånger effekten, +20 dB = 100 gånger effekten'
                    },
                    {
                        id: 'c1-3-e6',
                        type: 'calculation',
                        question: 'Om du har 100W och ökar med 3 dB, vilken effekt har du nu?',
                        answer: 200,
                        unit: 'W',
                        hint: '+3 dB = dubbel effekt',
                        explanation: '+3 dB betyder dubbel effekt, så 100W × 2 = 200W'
                    },
                    {
                        id: 'c1-3-e7',
                        type: 'true-false',
                        question: 'QRP betyder max 5W uteffekt.',
                        correct: true,
                        explanation: 'Sant. QRP är en stil inom amatörradio som använder max 5W effekt.'
                    },
                    {
                        id: 'c1-3-e8',
                        type: 'multiple-choice',
                        question: 'Vilken är maximal tillåten effekt i Sverige för de flesta amatörband?',
                        options: ['100 W', '500 W', '1000 W', '1500 W'],
                        correct: 2,
                        explanation: '1000W (1 kW) är maximal tillåten effekt i Sverige för amatörer med HAREC-certifikat.'
                    },
                    {
                        id: 'c1-3-e9',
                        type: 'calculation',
                        question: 'En resistor med 50Ω har 2A genom sig. Hur stor effekt utvecklas? (P = I² × R)',
                        answer: 200,
                        unit: 'W',
                        hint: 'P = I² × R',
                        steps: [
                            'P = I² × R',
                            'P = 2² × 50',
                            'P = 4 × 50 = 200W'
                        ],
                        explanation: 'P = I² × R = 2² × 50Ω = 4 × 50 = 200W'
                    },
                    {
                        id: 'c1-3-e10',
                        type: 'multiple-choice',
                        question: 'Om du minskar effekten från 1000W till 100W, hur många dB har du minskat?',
                        options: ['-3 dB', '-6 dB', '-10 dB', '-20 dB'],
                        correct: 2,
                        explanation: '100W är 1/10 av 1000W. -10 dB = en tiondel av effekten.'
                    }
                ]
            },
            {
                id: '1.4',
                title: 'Kondensatorer',
                slug: 'kondensatorer',
                description: 'Förstå hur kondensatorer fungerar och används',
                estimatedTime: 20,
                exercises: [
                    {
                        id: 'c1-4-e1',
                        type: 'multiple-choice',
                        question: 'Vad mäts kapacitans i?',
                        options: ['Henry (H)', 'Farad (F)', 'Ohm (Ω)', 'Hertz (Hz)'],
                        correct: 1,
                        explanation: 'Kapacitans mäts i Farad (F), uppkallat efter Michael Faraday.'
                    },
                    {
                        id: 'c1-4-e2',
                        type: 'true-false',
                        question: 'En kondensator blockerar likström (efter uppladdning).',
                        correct: true,
                        explanation: 'Sant. Efter uppladdning fungerar kondensatorn som ett avbrott för likström.'
                    },
                    {
                        id: 'c1-4-e3',
                        type: 'multiple-choice',
                        question: 'Vad händer med en kondensators reaktans när frekvensen ökar?',
                        options: ['Den ökar', 'Den minskar', 'Den är konstant', 'Den försvinner'],
                        correct: 1,
                        explanation: 'Reaktansen MINSKAR när frekvensen ökar. Kondensatorer "gillar" höga frekvenser.'
                    },
                    {
                        id: 'c1-4-e4',
                        type: 'fill-blank',
                        question: 'Kondensatorer lagrar energi i ett _______ fält.',
                        answer: 'elektriskt',
                        alternatives: ['elektrisk'],
                        explanation: 'Kondensatorer lagrar energi i ett elektriskt fält mellan plattorna.'
                    },
                    {
                        id: 'c1-4-e5',
                        type: 'multiple-choice',
                        question: 'Hur många nanofarad är 0,001 µF?',
                        options: ['1 nF', '10 nF', '100 nF', '1000 nF'],
                        correct: 0,
                        explanation: '1 µF = 1000 nF, så 0,001 µF = 1 nF'
                    },
                    {
                        id: 'c1-4-e6',
                        type: 'true-false',
                        question: 'Elektrolytkondensatorer har polaritet och måste anslutas rätt.',
                        correct: true,
                        explanation: 'Sant. Elektrolytkondensatorer har + och - och kan explodera om de kopplas fel.'
                    },
                    {
                        id: 'c1-4-e7',
                        type: 'multiple-choice',
                        question: 'Vilken kondensatortyp används vanligen i RF-kretsar?',
                        options: ['Elektrolytkondensatorer', 'Keramiska kondensatorer', 'Film-kondensatorer', 'Variabla kondensatorer'],
                        correct: 1,
                        explanation: 'Keramiska kondensatorer är stabila och har små värden (pF-nF) lämpliga för RF.'
                    },
                    {
                        id: 'c1-4-e8',
                        type: 'multiple-choice',
                        question: 'Vad händer med totalkapacitansen när två kondensatorer på 10µF vardera kopplas parallellt?',
                        options: ['5 µF', '10 µF', '20 µF', '100 µF'],
                        correct: 2,
                        explanation: 'Vid parallellkoppling ADDERAS kapacitansen: 10µF + 10µF = 20µF'
                    },
                    {
                        id: 'c1-4-e9',
                        type: 'multiple-choice',
                        question: 'Vad händer med totalkapacitansen när två kondensatorer på 10µF vardera kopplas i serie?',
                        options: ['5 µF', '10 µF', '20 µF', '100 µF'],
                        correct: 0,
                        explanation: 'Vid seriekoppling: 1/C_tot = 1/C₁ + 1/C₂. För lika kondensatorer: C_tot = C/2 = 5µF'
                    },
                    {
                        id: 'c1-4-e10',
                        type: 'matching',
                        question: 'Para ihop kondensatortypen med användningsområdet:',
                        pairs: [
                            { left: 'Keramisk', right: 'RF-kretsar, små värden' },
                            { left: 'Elektrolyt', right: 'Nätaggregat, stora värden' },
                            { left: 'Film', right: 'Precision, låga förluster' },
                            { left: 'Variabel', right: 'Avstämning' }
                        ]
                    }
                ]
            },
            {
                id: '1.5',
                title: 'Spolar och induktans',
                slug: 'spolar',
                description: 'Lär dig om spolar, induktans och magnetiska fält',
                estimatedTime: 20,
                exercises: [
                    {
                        id: 'c1-5-e1',
                        type: 'multiple-choice',
                        question: 'Vad mäts induktans i?',
                        options: ['Farad (F)', 'Henry (H)', 'Ohm (Ω)', 'Hertz (Hz)'],
                        correct: 1,
                        explanation: 'Induktans mäts i Henry (H), uppkallat efter Joseph Henry.'
                    },
                    {
                        id: 'c1-5-e2',
                        type: 'true-false',
                        question: 'En spole släpper igenom likström (efter uppstart).',
                        correct: true,
                        explanation: 'Sant. Efter att magnetfältet byggts upp fungerar spolen som en ledare för likström.'
                    },
                    {
                        id: 'c1-5-e3',
                        type: 'multiple-choice',
                        question: 'Vad händer med en spoles reaktans när frekvensen ökar?',
                        options: ['Den ökar', 'Den minskar', 'Den är konstant', 'Den försvinner'],
                        correct: 0,
                        explanation: 'Reaktansen ÖKAR när frekvensen ökar. Spolar "ogillar" höga frekvenser.'
                    },
                    {
                        id: 'c1-5-e4',
                        type: 'fill-blank',
                        question: 'Spolar lagrar energi i ett _______ fält.',
                        answer: 'magnetiskt',
                        alternatives: ['magnetisk'],
                        explanation: 'Spolar lagrar energi i ett magnetiskt fält runt ledaren.'
                    },
                    {
                        id: 'c1-5-e5',
                        type: 'multiple-choice',
                        question: 'Hur många mikrohenry är 0,001 mH?',
                        options: ['1 µH', '10 µH', '100 µH', '1000 µH'],
                        correct: 0,
                        explanation: '1 mH = 1000 µH, så 0,001 mH = 1 µH'
                    },
                    {
                        id: 'c1-5-e6',
                        type: 'true-false',
                        question: 'Kondensatorer och spolar är varandras motsatser vad gäller frekvensberoende.',
                        correct: true,
                        explanation: 'Sant. Kondensatorer har låg reaktans vid hög frekvens, spolar har hög reaktans vid hög frekvens.'
                    },
                    {
                        id: 'c1-5-e7',
                        type: 'multiple-choice',
                        question: 'Vad ökar induktansen hos en spole?',
                        options: ['Färre varv', 'Mer avstånd mellan varven', 'Fler varv', 'Mindre diameter'],
                        correct: 2,
                        explanation: 'Fler varv ger högre induktans. Järnkärna ökar också induktansen kraftigt.'
                    },
                    {
                        id: 'c1-5-e8',
                        type: 'multiple-choice',
                        question: 'Vad händer med totalinduktansen när två spolar på 10µH vardera kopplas i serie?',
                        options: ['5 µH', '10 µH', '20 µH', '100 µH'],
                        correct: 2,
                        explanation: 'Vid seriekoppling ADDERAS induktansen: 10µH + 10µH = 20µH'
                    },
                    {
                        id: 'c1-5-e9',
                        type: 'multiple-choice',
                        question: 'Formeln för induktiv reaktans är:',
                        options: ['X_L = 2πfL', 'X_L = 1/(2πfL)', 'X_L = 2πf/L', 'X_L = L/(2πf)'],
                        correct: 0,
                        explanation: 'X_L = 2πfL (induktiv reaktans ökar med frekvensen)'
                    },
                    {
                        id: 'c1-5-e10',
                        type: 'matching',
                        question: 'Para ihop komponenten med dess beteende vid hög frekvens:',
                        pairs: [
                            { left: 'Kondensator', right: 'Låg reaktans (släpper igenom)' },
                            { left: 'Spole', right: 'Hög reaktans (blockerar)' },
                            { left: 'Resistor', right: 'Konstant resistans' },
                            { left: 'Ledare', right: 'Låg impedans' }
                        ]
                    }
                ]
            },
            {
                id: '1.6',
                title: 'Serie- och parallellkoppling',
                slug: 'serie-parallell',
                description: 'Lär dig räkna med komponenter i serie och parallellt',
                estimatedTime: 20,
                exercises: [
                    {
                        id: 'c1-6-e1',
                        type: 'calculation',
                        question: 'Tre resistorer på 100Ω, 220Ω och 330Ω kopplas i serie. Vad blir totalresistansen?',
                        answer: 650,
                        unit: 'Ω',
                        hint: 'I serie: R_tot = R₁ + R₂ + R₃',
                        steps: [
                            'R_tot = R₁ + R₂ + R₃',
                            'R_tot = 100 + 220 + 330',
                            'R_tot = 650Ω'
                        ],
                        explanation: 'Vid seriekoppling adderas resistanserna: 100 + 220 + 330 = 650Ω'
                    },
                    {
                        id: 'c1-6-e2',
                        type: 'calculation',
                        question: 'Två resistorer på 100Ω vardera kopplas parallellt. Vad blir totalresistansen?',
                        answer: 50,
                        unit: 'Ω',
                        hint: 'För lika resistorer: R_tot = R/2',
                        steps: [
                            'För två lika resistorer parallellt: R_tot = R/2',
                            'R_tot = 100Ω / 2',
                            'R_tot = 50Ω'
                        ],
                        explanation: 'Två lika resistorer parallellt ger hälften: 100Ω/2 = 50Ω'
                    },
                    {
                        id: 'c1-6-e3',
                        type: 'true-false',
                        question: 'Kondensatorer beter sig "tvärtom" mot resistorer vid serie/parallellkoppling.',
                        correct: true,
                        explanation: 'Sant. Kondensatorer ökar i parallellt men minskar i serie - motsatsen till resistorer.'
                    },
                    {
                        id: 'c1-6-e4',
                        type: 'multiple-choice',
                        question: 'Två kondensatorer på 10µF vardera kopplas parallellt. Vad blir totalkapacitansen?',
                        options: ['5 µF', '10 µF', '20 µF', '100 µF'],
                        correct: 2,
                        explanation: 'Kondensatorer parallellt: C_tot = C₁ + C₂ = 10 + 10 = 20µF'
                    },
                    {
                        id: 'c1-6-e5',
                        type: 'multiple-choice',
                        question: 'Två spolar på 10µH vardera kopplas parallellt. Vad blir totalinduktansen?',
                        options: ['5 µH', '10 µH', '20 µH', '100 µH'],
                        correct: 0,
                        explanation: 'Spolar parallellt: 1/L_tot = 1/L₁ + 1/L₂. För lika spolar: L_tot = L/2 = 5µH'
                    },
                    {
                        id: 'c1-6-e6',
                        type: 'fill-blank',
                        question: 'I en seriekoppling är _______ samma genom alla komponenter.',
                        answer: 'strömmen',
                        alternatives: ['ström', 'strömstyrkan', 'I'],
                        explanation: 'I serie är strömmen densamma genom alla komponenter, men spänningen fördelas.'
                    },
                    {
                        id: 'c1-6-e7',
                        type: 'fill-blank',
                        question: 'I en parallellkoppling är _______ samma över alla komponenter.',
                        answer: 'spänningen',
                        alternatives: ['spänning', 'U'],
                        explanation: 'I parallellt är spänningen densamma över alla komponenter, men strömmen fördelas.'
                    },
                    {
                        id: 'c1-6-e8',
                        type: 'multiple-choice',
                        question: 'Tre kondensatorer på 30µF, 60µF och 90µF kopplas i serie. Vad blir totalkapacitansen (närmevärde)?',
                        options: ['16 µF', '20 µF', '60 µF', '180 µF'],
                        correct: 0,
                        explanation: '1/C_tot = 1/30 + 1/60 + 1/90 ≈ 0,0611. C_tot ≈ 16,4µF'
                    },
                    {
                        id: 'c1-6-e9',
                        type: 'true-false',
                        question: 'När resistorer kopplas parallellt blir totalresistansen alltid lägre än den minsta enskilda resistorn.',
                        correct: true,
                        explanation: 'Sant. Parallellkoppling ger alltid lägre total resistans än den minsta komponenten.'
                    },
                    {
                        id: 'c1-6-e10',
                        type: 'matching',
                        question: 'Para ihop kopplingstypen med vad som är konstant:',
                        pairs: [
                            { left: 'Serie', right: 'Strömmen är samma' },
                            { left: 'Parallell', right: 'Spänningen är samma' },
                            { left: 'Serie-resistorer', right: 'Adderas direkt' },
                            { left: 'Parallell-resistorer', right: 'Inverteras och adderas' }
                        ]
                    }
                ]
            },
            {
                id: '1.7',
                title: 'Växelström och impedans',
                slug: 'vaxelstrom',
                description: 'Förstå växelström, fas och impedans',
                estimatedTime: 25,
                exercises: [
                    {
                        id: 'c1-7-e1',
                        type: 'multiple-choice',
                        question: 'Vad mäts frekvens i?',
                        options: ['Volt (V)', 'Ampere (A)', 'Hertz (Hz)', 'Ohm (Ω)'],
                        correct: 2,
                        explanation: 'Frekvens mäts i Hertz (Hz) - antal svängningar per sekund.'
                    },
                    {
                        id: 'c1-7-e2',
                        type: 'calculation',
                        question: 'Nätspänningen är 230V (effektivvärde). Vad är toppvärdet? (U_topp = U_eff × 1,414)',
                        answer: 325,
                        unit: 'V',
                        tolerance: 5,
                        hint: 'U_topp = U_eff × √2 ≈ U_eff × 1,414',
                        steps: [
                            'U_topp = U_eff × 1,414',
                            'U_topp = 230 × 1,414',
                            'U_topp ≈ 325V'
                        ],
                        explanation: 'U_topp = 230V × 1,414 ≈ 325V'
                    },
                    {
                        id: 'c1-7-e3',
                        type: 'multiple-choice',
                        question: 'Vilken frekvens har nätspänningen i Sverige?',
                        options: ['50 Hz', '60 Hz', '100 Hz', '230 Hz'],
                        correct: 0,
                        explanation: 'Nätspänningen i Sverige är 230V, 50Hz.'
                    },
                    {
                        id: 'c1-7-e4',
                        type: 'true-false',
                        question: 'I en kondensator släpar strömmen efter spänningen.',
                        correct: false,
                        explanation: 'Falskt. I en kondensator FÖREGÅR strömmen spänningen med 90°. Minnesregel: "ICE".'
                    },
                    {
                        id: 'c1-7-e5',
                        type: 'true-false',
                        question: 'I en spole släpar strömmen efter spänningen.',
                        correct: true,
                        explanation: 'Sant. I en spole släpar strömmen efter spänningen med 90°. Minnesregel: "ELI".'
                    },
                    {
                        id: 'c1-7-e6',
                        type: 'fill-blank',
                        question: 'Impedans betecknas med bokstaven _____ och mäts i ohm.',
                        answer: 'Z',
                        alternatives: ['z'],
                        explanation: 'Impedans betecknas Z och är det totala "motståndet" i en växelströmskrets.'
                    },
                    {
                        id: 'c1-7-e7',
                        type: 'multiple-choice',
                        question: 'Minnesregeln "ELI the ICE man" hjälper oss komma ihåg:',
                        options: [
                            'Vilka komponenter som används i en krets',
                            'Fasförhållandet mellan ström och spänning',
                            'Hur man räknar ut impedans',
                            'Skillnaden mellan AC och DC'
                        ],
                        correct: 1,
                        explanation: 'ELI: E (spänning) före I (ström) i L (spole). ICE: I (ström) före E (spänning) i C (kondensator).'
                    },
                    {
                        id: 'c1-7-e8',
                        type: 'multiple-choice',
                        question: 'Vad är perioden (T) om frekvensen är 50 Hz?',
                        options: ['0,02 s', '0,05 s', '0,5 s', '5 s'],
                        correct: 0,
                        explanation: 'T = 1/f = 1/50 = 0,02 sekunder = 20 millisekunder'
                    },
                    {
                        id: 'c1-7-e9',
                        type: 'true-false',
                        question: 'Effektivvärdet (RMS) är lägre än toppvärdet för en sinusvåg.',
                        correct: true,
                        explanation: 'Sant. U_eff = U_topp / √2 ≈ U_topp × 0,707'
                    },
                    {
                        id: 'c1-7-e10',
                        type: 'multiple-choice',
                        question: 'I en resistor är fasförskjutningen mellan ström och spänning:',
                        options: ['0°', '45°', '90°', '180°'],
                        correct: 0,
                        explanation: 'I en resistor är det ingen fasförskjutning - ström och spänning är i fas (0°).'
                    }
                ]
            },
            {
                id: '1.8',
                title: 'Filter och resonanskretsar',
                slug: 'filter',
                description: 'Lär dig om filter, resonans och Q-värde',
                estimatedTime: 25,
                exercises: [
                    {
                        id: 'c1-8-e1',
                        type: 'multiple-choice',
                        question: 'Vad händer vid resonans i en LC-krets?',
                        options: [
                            'X_L och X_C är lika stora',
                            'Impedansen blir oändlig',
                            'Strömmen blir noll',
                            'Spänningen blir noll'
                        ],
                        correct: 0,
                        explanation: 'Vid resonans är X_L = X_C, och reaktanserna tar ut varandra.'
                    },
                    {
                        id: 'c1-8-e2',
                        type: 'multiple-choice',
                        question: 'Vilket filter släpper igenom låga frekvenser och dämpar höga?',
                        options: ['Högpassfilter', 'Lågpassfilter', 'Bandpassfilter', 'Bandspärrfilter'],
                        correct: 1,
                        explanation: 'Ett lågpassfilter släpper igenom låga frekvenser och dämpar höga.'
                    },
                    {
                        id: 'c1-8-e3',
                        type: 'multiple-choice',
                        question: 'Varför används lågpassfilter efter en radiosändare?',
                        options: [
                            'För att öka effekten',
                            'För att dämpa övertoner',
                            'För att förbättra modulationen',
                            'För att sänka frekvensen'
                        ],
                        correct: 1,
                        explanation: 'Lågpassfilter dämpar övertoner (harmoniska) för att undvika störningar.'
                    },
                    {
                        id: 'c1-8-e4',
                        type: 'true-false',
                        question: 'Ett högpassfilter blockerar likström och släpper igenom växelström.',
                        correct: true,
                        explanation: 'Sant. Ett högpassfilter (t.ex. en kondensator i serie) blockerar DC men släpper igenom AC.'
                    },
                    {
                        id: 'c1-8-e5',
                        type: 'multiple-choice',
                        question: 'I en seriekrets vid resonans är impedansen:',
                        options: ['Maximal', 'Minimal', 'Noll', 'Oändlig'],
                        correct: 1,
                        explanation: 'I en seriekrets vid resonans är impedansen MINIMAL (endast R kvarstår).'
                    },
                    {
                        id: 'c1-8-e6',
                        type: 'multiple-choice',
                        question: 'I en parallellkrets vid resonans är impedansen:',
                        options: ['Maximal', 'Minimal', 'Noll', 'Lika som R'],
                        correct: 0,
                        explanation: 'I en parallellkrets vid resonans är impedansen MAXIMAL.'
                    },
                    {
                        id: 'c1-8-e7',
                        type: 'fill-blank',
                        question: 'Q-värdet anger hur _______ resonansen är.',
                        answer: 'skarp',
                        alternatives: ['smal', 'spetsig', 'selektiv'],
                        explanation: 'Q-värdet (kvalitetsfaktor) anger hur skarp/smal resonansen är. Högt Q = smal bandbredd.'
                    },
                    {
                        id: 'c1-8-e8',
                        type: 'multiple-choice',
                        question: 'Vad betyder ett högt Q-värde?',
                        options: [
                            'Bred resonans, stor bandbredd',
                            'Skarp resonans, smal bandbredd',
                            'Låg frekvens',
                            'Hög effekt'
                        ],
                        correct: 1,
                        explanation: 'Högt Q = skarp resonans med smal bandbredd. Bra selektivitet!'
                    },
                    {
                        id: 'c1-8-e9',
                        type: 'multiple-choice',
                        question: 'Vilket filter väljer ut ett smalt frekvensband och dämpar allt annat?',
                        options: ['Högpassfilter', 'Lågpassfilter', 'Bandpassfilter', 'Bandspärrfilter'],
                        correct: 2,
                        explanation: 'Ett bandpassfilter släpper endast igenom ett visst frekvensband.'
                    },
                    {
                        id: 'c1-8-e10',
                        type: 'matching',
                        question: 'Para ihop filtertypen med användningen:',
                        pairs: [
                            { left: 'Lågpass', right: 'Dämpa övertoner efter sändare' },
                            { left: 'Högpass', right: 'Blockera DC, släppa AC' },
                            { left: 'Bandpass', right: 'Välja önskad signal i mottagare' },
                            { left: 'Bandspärr', right: 'Eliminera en störande frekvens' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        number: 2,
        title: 'Radioteknik',
        slug: 'kapitel-2-radioteknik',
        icon: '📻',
        subchapters: [
            {
                id: '2.1',
                title: 'Signaler och modulation',
                slug: 'signaler',
                description: 'Förstå olika modulationstyper och deras användning',
                estimatedTime: 20,
                exercises: [
                    {
                        id: 'c2-1-e1',
                        type: 'multiple-choice',
                        question: 'Vad innebär AM (Amplitudmodulation)?',
                        options: [
                            'Bärvågens frekvens varieras',
                            'Bärvågens amplitud varieras',
                            'Bärvågens fas varieras',
                            'Bärvågen slås på och av'
                        ],
                        correct: 1,
                        explanation: 'Vid AM varieras bärvågens styrka (amplitud) i takt med modulationssignalen.'
                    },
                    {
                        id: 'c2-1-e2',
                        type: 'multiple-choice',
                        question: 'Vilken modulationstyp används för FM-rundradio?',
                        options: ['AM', 'SSB', 'FM', 'CW'],
                        correct: 2,
                        explanation: 'FM (Frekvensmodulation) används för FM-rundradio på 88-108 MHz.'
                    },
                    {
                        id: 'c2-1-e3',
                        type: 'true-false',
                        question: 'SSB är mer effektivt än AM när det gäller effektanvändning.',
                        correct: true,
                        explanation: 'Sant. SSB använder effekten mer effektivt genom att ta bort bärvågen och ett sidband.'
                    },
                    {
                        id: 'c2-1-e4',
                        type: 'multiple-choice',
                        question: 'På HF-banden, vilket sidband används normalt under 10 MHz?',
                        options: ['USB', 'LSB', 'DSB', 'ISB'],
                        correct: 1,
                        explanation: 'LSB (Lower Sideband) används under 10 MHz, USB (Upper Sideband) används på 10 MHz och högre.'
                    },
                    {
                        id: 'c2-1-e5',
                        type: 'multiple-choice',
                        question: 'Vilket trafiksätt har smalast bandbredd?',
                        options: ['AM', 'SSB', 'FM', 'CW'],
                        correct: 3,
                        explanation: 'CW (morsekod) har smalast bandbredd, typiskt 100-500 Hz.'
                    },
                    {
                        id: 'c2-1-e6',
                        type: 'fill-blank',
                        question: 'FT8 är ett populärt _______ trafiksätt för DX.',
                        answer: 'digitalt',
                        alternatives: ['digital'],
                        explanation: 'FT8 är ett digitalt trafiksätt designat för svaga signaler och DX-trafik.'
                    },
                    {
                        id: 'c2-1-e7',
                        type: 'matching',
                        question: 'Para ihop trafiksättet med typisk bandbredd:',
                        pairs: [
                            { left: 'CW', right: '100-500 Hz' },
                            { left: 'SSB', right: '2,4-3 kHz' },
                            { left: 'AM', right: '6-9 kHz' },
                            { left: 'FM (smalband)', right: '12-16 kHz' }
                        ]
                    },
                    {
                        id: 'c2-1-e8',
                        type: 'true-false',
                        question: 'FM är mer störningstålig än AM.',
                        correct: true,
                        explanation: 'Sant. FM är mindre känslig för amplitudstörningar (brus, atmosfäriska störningar).'
                    },
                    {
                        id: 'c2-1-e9',
                        type: 'multiple-choice',
                        question: 'Vad är en fördel med SSB jämfört med AM?',
                        options: [
                            'Enklare utrustning',
                            'Bättre ljudkvalitet vid svaga signaler',
                            'Större bandbredd',
                            'Klarar inte svaga signaler'
                        ],
                        correct: 1,
                        explanation: 'SSB ger bättre prestanda vid svaga signaler och använder mindre bandbredd.'
                    },
                    {
                        id: 'c2-1-e10',
                        type: 'multiple-choice',
                        question: 'Vilket trafiksätt kräver kunskap i morsekod?',
                        options: ['AM', 'SSB', 'FM', 'CW'],
                        correct: 3,
                        explanation: 'CW (Continuous Wave) är morsetelegrafi och kräver kunskap i morsekod.'
                    }
                ]
            },
            {
                id: '2.2',
                title: 'Sändarens uppbyggnad',
                slug: 'sandare',
                description: 'Lär dig hur en sändare fungerar',
                estimatedTime: 20,
                exercises: [
                    {
                        id: 'c2-2-e1',
                        type: 'ordering',
                        question: 'Ordna sändarens huvudblock i rätt ordning (från signal till antenn):',
                        items: [
                            'Oscillator (genererar bärvåg)',
                            'Modulator (lägger på information)',
                            'Drivsteg (förstärker till mellannivå)',
                            'Slutsteg (PA - förstärker till full effekt)',
                            'Lågpassfilter (tar bort övertoner)',
                            'Antenn'
                        ],
                        correctOrder: [0, 1, 2, 3, 4, 5]
                    },
                    {
                        id: 'c2-2-e2',
                        type: 'multiple-choice',
                        question: 'Vad är slutstegets (PA) huvudsakliga funktion?',
                        options: [
                            'Generera bärvågen',
                            'Modulera signalen',
                            'Förstärka till önskad uteffekt',
                            'Filtrera bort övertoner'
                        ],
                        correct: 2,
                        explanation: 'Slutsteget (Power Amplifier) förstärker signalen till önskad uteffekt.'
                    },
                    {
                        id: 'c2-2-e3',
                        type: 'true-false',
                        question: 'En sändare ska alltid vara ansluten till antenn eller dummyload när den sänder.',
                        correct: true,
                        explanation: 'Sant. Att sända utan last kan skada slutsteget på grund av reflekterad effekt.'
                    },
                    {
                        id: 'c2-2-e4',
                        type: 'multiple-choice',
                        question: 'Varför används lågpassfilter efter slutsteget?',
                        options: [
                            'För att öka effekten',
                            'För att dämpa övertoner',
                            'För att modulera signalen',
                            'För att matcha antennen'
                        ],
                        correct: 1,
                        explanation: 'Lågpassfiltret dämpar oönskade övertoner (harmoniska) för att undvika störningar.'
                    },
                    {
                        id: 'c2-2-e5',
                        type: 'fill-blank',
                        question: 'PLL står för _______-Locked Loop.',
                        answer: 'Phase',
                        alternatives: ['phase'],
                        explanation: 'PLL = Phase-Locked Loop, används för frekvensstabilisering.'
                    },
                    {
                        id: 'c2-2-e6',
                        type: 'multiple-choice',
                        question: 'Vad är en VFO?',
                        options: [
                            'Variable Frequency Oscillator',
                            'Very Fast Operation',
                            'Voltage Frequency Output',
                            'Virtual Filter Option'
                        ],
                        correct: 0,
                        explanation: 'VFO = Variable Frequency Oscillator, en oscillator med justerbar frekvens.'
                    },
                    {
                        id: 'c2-2-e7',
                        type: 'true-false',
                        question: 'Alla sändare genererar oönskade övertoner.',
                        correct: true,
                        explanation: 'Sant. Alla sändare genererar övertoner (2×, 3×, 4× grundfrekvensen) som måste dämpas.'
                    },
                    {
                        id: 'c2-2-e8',
                        type: 'multiple-choice',
                        question: 'Vad är en dummyload?',
                        options: [
                            'En typ av antenn',
                            'En resistiv last för att testa sändare utan att stråla',
                            'Ett filter',
                            'En förstärkare'
                        ],
                        correct: 1,
                        explanation: 'En dummyload är ett motstånd (ofta 50Ω) som absorberar sändareffekten för tester.'
                    },
                    {
                        id: 'c2-2-e9',
                        type: 'multiple-choice',
                        question: 'Vad används DDS för?',
                        options: [
                            'Digital detektering',
                            'Direct Digital Synthesis - generera exakta frekvenser',
                            'Dual Display System',
                            'Digital Data Storage'
                        ],
                        correct: 1,
                        explanation: 'DDS (Direct Digital Synthesis) genererar frekvenser digitalt med hög precision.'
                    },
                    {
                        id: 'c2-2-e10',
                        type: 'matching',
                        question: 'Para ihop komponenten med funktionen:',
                        pairs: [
                            { left: 'Oscillator', right: 'Genererar bärvåg' },
                            { left: 'Modulator', right: 'Lägger på information' },
                            { left: 'PA (slutsteg)', right: 'Förstärker till full effekt' },
                            { left: 'Lågpassfilter', right: 'Dämpar övertoner' }
                        ]
                    }
                ]
            },
            {
                id: '2.3',
                title: 'Mottagarens uppbyggnad',
                slug: 'mottagare',
                description: 'Förstå hur en superheterodynmottagare fungerar',
                estimatedTime: 25,
                exercises: [
                    {
                        id: 'c2-3-e1',
                        type: 'multiple-choice',
                        question: 'Vad är grundprincipen i en superheterodynmottagare?',
                        options: [
                            'Direkt förstärkning av RF-signal',
                            'Omvandling till fast mellanfrekvens (MF/IF)',
                            'Digital sampling av signalen',
                            'Direkt demodulation'
                        ],
                        correct: 1,
                        explanation: 'Superheterodynprincipen omvandlar signalen till en fast mellanfrekvens för filtrering och förstärkning.'
                    },
                    {
                        id: 'c2-3-e2',
                        type: 'ordering',
                        question: 'Ordna mottagarens block i rätt ordning (från antenn till högtalare):',
                        items: [
                            'Antennfilter',
                            'RF-förstärkare',
                            'Blandare',
                            'MF-filter och förstärkare',
                            'Demodulator',
                            'LF-förstärkare och högtalare'
                        ],
                        correctOrder: [0, 1, 2, 3, 4, 5]
                    },
                    {
                        id: 'c2-3-e3',
                        type: 'multiple-choice',
                        question: 'Vad betyder känslighet hos en mottagare?',
                        options: [
                            'Förmågan att ta emot svaga signaler',
                            'Förmågan att skilja närliggande frekvenser',
                            'Förmågan att motstå överbelastning',
                            'Ljudkvaliteten'
                        ],
                        correct: 0,
                        explanation: 'Känslighet anger den minsta signalnivå som mottagaren kan ta emot med godtagbar kvalitet.'
                    },
                    {
                        id: 'c2-3-e4',
                        type: 'multiple-choice',
                        question: 'Vad betyder selektivitet hos en mottagare?',
                        options: [
                            'Förmågan att ta emot svaga signaler',
                            'Förmågan att skilja mellan närliggande frekvenser',
                            'Förmågan att förstärka signaler',
                            'Förmågan att modulera signaler'
                        ],
                        correct: 1,
                        explanation: 'Selektivitet är mottagarens förmåga att skilja ut önskad signal från närliggande.'
                    },
                    {
                        id: 'c2-3-e5',
                        type: 'fill-blank',
                        question: 'MF står för _______frekvens.',
                        answer: 'mellan',
                        alternatives: ['Mellan', 'intermediär'],
                        explanation: 'MF = Mellanfrekvens (på engelska IF = Intermediate Frequency).'
                    },
                    {
                        id: 'c2-3-e6',
                        type: 'multiple-choice',
                        question: 'Vilken är en vanlig mellanfrekvens för HF-transceivrar?',
                        options: ['455 kHz', '9 MHz', '10,7 MHz', '21,4 MHz'],
                        correct: 1,
                        explanation: '9 MHz är en vanlig mellanfrekvens i HF-transceivrar. 10,7 MHz är vanligt för FM-mottagare.'
                    },
                    {
                        id: 'c2-3-e7',
                        type: 'true-false',
                        question: 'AGC står för Automatic Gain Control och håller ljudnivån jämn.',
                        correct: true,
                        explanation: 'Sant. AGC justerar förstärkningen automatiskt för att hålla jämn utsignal trots varierande insignal.'
                    },
                    {
                        id: 'c2-3-e8',
                        type: 'multiple-choice',
                        question: 'Vad är spegelfrekvensproblemet?',
                        options: [
                            'Mottagaren svarar på två frekvenser',
                            'Signalen reflekteras i antennen',
                            'Mottagaren blir överbelastad',
                            'Ljudet ekar'
                        ],
                        correct: 0,
                        explanation: 'En blandare svarar på både önskad frekvens och spegelfrekvensen (f_LO ± f_MF).'
                    },
                    {
                        id: 'c2-3-e9',
                        type: 'multiple-choice',
                        question: 'Vad bestämmer främst mottagarens selektivitet?',
                        options: [
                            'RF-förstärkaren',
                            'Antennen',
                            'MF-filtret',
                            'Lokaloscillatorn'
                        ],
                        correct: 2,
                        explanation: 'MF-filtret bestämmer främst selektiviteten - hur bra mottagaren kan skilja närliggande signaler.'
                    },
                    {
                        id: 'c2-3-e10',
                        type: 'matching',
                        question: 'Para ihop komponenten med dess funktion:',
                        pairs: [
                            { left: 'RF-förstärkare', right: 'Förstärker svaga signaler från antennen' },
                            { left: 'Blandare', right: 'Omvandlar till mellanfrekvens' },
                            { left: 'MF-filter', right: 'Bestämmer selektivitet' },
                            { left: 'Demodulator', right: 'Tar ut informationen' }
                        ]
                    }
                ]
            },
            {
                id: '2.4',
                title: 'Transceiver',
                slug: 'transceiver',
                description: 'Kombinerad sändare och mottagare',
                estimatedTime: 15,
                exercises: [
                    {
                        id: 'c2-4-e1',
                        type: 'fill-blank',
                        question: 'Transceiver är en kombination av sändare (________) och mottagare (receiver).',
                        answer: 'transmitter',
                        alternatives: ['Transmitter', 'sändare'],
                        explanation: 'Transceiver = Transmitter + Receiver'
                    },
                    {
                        id: 'c2-4-e2',
                        type: 'true-false',
                        question: 'I en transceiver delar sändare och mottagare många komponenter.',
                        correct: true,
                        explanation: 'Sant. VFO, filter, display och nätaggregat delas ofta mellan sändare och mottagare.'
                    },
                    {
                        id: 'c2-4-e3',
                        type: 'multiple-choice',
                        question: 'Vad händer när du trycker på PTT (Push-To-Talk)?',
                        options: [
                            'Endast sändaren startar',
                            'Mottagaren tystas och sändaren aktiveras',
                            'Bara ljudet stängs av',
                            'Inget händer'
                        ],
                        correct: 1,
                        explanation: 'PTT tystnar mottagaren, kopplar antennen till sändaren och aktiverar sändningen.'
                    },
                    {
                        id: 'c2-4-e4',
                        type: 'multiple-choice',
                        question: 'Vad är RIT (Receiver Incremental Tuning)?',
                        options: [
                            'Finjusterar mottagarfrekvensen utan att ändra sändningsfrekvensen',
                            'Ändrar effekten',
                            'Justerar volymen',
                            'Aktiverar nödsignal'
                        ],
                        correct: 0,
                        explanation: 'RIT finjusterar mottagarfrekvensen oberoende av sändningsfrekvensen.'
                    },
                    {
                        id: 'c2-4-e5',
                        type: 'multiple-choice',
                        question: 'Vad är VOX?',
                        options: [
                            'Voice-Operated Switch - automatisk sändning vid tal',
                            'Very Old Xmitter',
                            'Volume Output eXtension',
                            'Variable Output X-mission'
                        ],
                        correct: 0,
                        explanation: 'VOX = Voice-Operated Switch, aktiverar sändning automatiskt när du pratar.'
                    },
                    {
                        id: 'c2-4-e6',
                        type: 'fill-blank',
                        question: 'ATU står för Automatic _______ Unit.',
                        answer: 'Tuning',
                        alternatives: ['tuning', 'Antenna Tuning'],
                        explanation: 'ATU = Automatic Tuning Unit (eller Antenna Tuning Unit), automatisk antennanpassning.'
                    },
                    {
                        id: 'c2-4-e7',
                        type: 'true-false',
                        question: 'Split-funktion betyder att man sänder och tar emot på olika frekvenser.',
                        correct: true,
                        explanation: 'Sant. Split används t.ex. vid DX-trafik där DX-stationen sänder på en frekvens och lyssnar på en annan.'
                    },
                    {
                        id: 'c2-4-e8',
                        type: 'multiple-choice',
                        question: 'Vad gör en Noise Blanker (NB)?',
                        options: [
                            'Dämpar pulsstörningar',
                            'Ökar ljudnivån',
                            'Filtrerar bort alla ljud',
                            'Stänger av mottagaren'
                        ],
                        correct: 0,
                        explanation: 'NB (Noise Blanker) dämpar korta pulsstörningar från t.ex. tändgnistor.'
                    },
                    {
                        id: 'c2-4-e9',
                        type: 'multiple-choice',
                        question: 'Vad är NR (Noise Reduction)?',
                        options: [
                            'Naturlig Radio',
                            'Digital brusreducering',
                            'Nödutrustning',
                            'Normalresistans'
                        ],
                        correct: 1,
                        explanation: 'NR (Noise Reduction) är digital signalbehandling som minskar bakgrundsbrus.'
                    },
                    {
                        id: 'c2-4-e10',
                        type: 'matching',
                        question: 'Para ihop funktionen med beskrivningen:',
                        pairs: [
                            { left: 'PTT', right: 'Aktiverar sändning' },
                            { left: 'VOX', right: 'Automatisk sändning vid tal' },
                            { left: 'RIT', right: 'Finjustera mottagarfrekvens' },
                            { left: 'Split', right: 'Sända och ta emot på olika frekvenser' }
                        ]
                    }
                ]
            },
            {
                id: '2.5',
                title: 'Halvledare och komponenter',
                slug: 'halvledare',
                description: 'Dioder, transistorer och integrerade kretsar',
                estimatedTime: 20,
                exercises: [
                    {
                        id: 'c2-5-e1',
                        type: 'true-false',
                        question: 'En diod släpper igenom ström i båda riktningarna.',
                        correct: false,
                        explanation: 'Falskt. En diod släpper endast igenom ström i en riktning.'
                    },
                    {
                        id: 'c2-5-e2',
                        type: 'multiple-choice',
                        question: 'Vilken diodtyp används för att få en konstant spänning?',
                        options: ['Likriktardiod', 'Signaldiod', 'Zenerdiod', 'LED'],
                        correct: 2,
                        explanation: 'Zenerdioder används för spänningsreglering och ger en konstant spänning.'
                    },
                    {
                        id: 'c2-5-e3',
                        type: 'multiple-choice',
                        question: 'Hur många anslutningar har en bipolär transistor?',
                        options: ['2', '3', '4', '5'],
                        correct: 1,
                        explanation: 'En bipolär transistor har 3 anslutningar: Bas, Kollektor och Emitter.'
                    },
                    {
                        id: 'c2-5-e4',
                        type: 'fill-blank',
                        question: 'BJT står för Bipolar _______ Transistor.',
                        answer: 'Junction',
                        alternatives: ['junction'],
                        explanation: 'BJT = Bipolar Junction Transistor'
                    },
                    {
                        id: 'c2-5-e5',
                        type: 'multiple-choice',
                        question: 'Vilken transistortyp styrs av spänning istället för ström?',
                        options: ['BJT', 'NPN', 'PNP', 'FET'],
                        correct: 3,
                        explanation: 'FET (Field Effect Transistor) styrs av spänning, BJT styrs av ström.'
                    },
                    {
                        id: 'c2-5-e6',
                        type: 'matching',
                        question: 'Para ihop diodtypen med användningen:',
                        pairs: [
                            { left: 'Likriktardiod', right: 'Omvandla AC till DC' },
                            { left: 'Zenerdiod', right: 'Spänningsreglering' },
                            { left: 'LED', right: 'Lysindikator' },
                            { left: 'Varicap', right: 'Elektronisk avstämning' }
                        ]
                    },
                    {
                        id: 'c2-5-e7',
                        type: 'true-false',
                        question: 'MOSFET har högre ingångsimpedans än BJT.',
                        correct: true,
                        explanation: 'Sant. MOSFET (Metal-Oxide-Semiconductor FET) har mycket hög ingångsimpedans.'
                    },
                    {
                        id: 'c2-5-e8',
                        type: 'multiple-choice',
                        question: 'Vad kallas de tre anslutningarna på en FET?',
                        options: [
                            'Bas, Kollektor, Emitter',
                            'Gate, Drain, Source',
                            'Plus, Minus, Jord',
                            'In, Out, Ground'
                        ],
                        correct: 1,
                        explanation: 'FET har Gate, Drain och Source (jämför med BJT: Bas, Kollektor, Emitter).'
                    },
                    {
                        id: 'c2-5-e9',
                        type: 'multiple-choice',
                        question: 'Vad är en integrerad krets (IC)?',
                        options: [
                            'En enskild transistor',
                            'Många komponenter i ett chip',
                            'En typ av kabel',
                            'Ett filter'
                        ],
                        correct: 1,
                        explanation: 'En IC (Integrated Circuit) innehåller många komponenter (transistorer, resistorer etc.) i ett chip.'
                    },
                    {
                        id: 'c2-5-e10',
                        type: 'multiple-choice',
                        question: '78xx-serien är exempel på:',
                        options: [
                            'Förstärkare',
                            'Spänningsregulatorer',
                            'Oscillatorer',
                            'Blandare'
                        ],
                        correct: 1,
                        explanation: '78xx-serien (t.ex. 7805, 7812) är populära spänningsregulatorer.'
                    }
                ]
            },
            {
                id: '2.6',
                title: 'Oscillatorer',
                slug: 'oscillatorer',
                description: 'Hur oscillatorer genererar signaler',
                estimatedTime: 20,
                exercises: [
                    {
                        id: 'c2-6-e1',
                        type: 'multiple-choice',
                        question: 'Vad är en oscillators huvudsakliga funktion?',
                        options: [
                            'Förstärka signaler',
                            'Generera en periodisk signal utan extern insignal',
                            'Filtrera signaler',
                            'Modulera signaler'
                        ],
                        correct: 1,
                        explanation: 'En oscillator genererar en periodisk signal (svängning) utan att behöva en insignal.'
                    },
                    {
                        id: 'c2-6-e2',
                        type: 'true-false',
                        question: 'För att en oscillator ska fungera krävs positiv återkoppling.',
                        correct: true,
                        explanation: 'Sant. Positiv återkoppling (signalen återförs i fas) krävs för att upprätthålla svängning.'
                    },
                    {
                        id: 'c2-6-e3',
                        type: 'multiple-choice',
                        question: 'Vilken oscillatortyp ger högst frekvensstabilitet?',
                        options: ['LC-oscillator', 'RC-oscillator', 'Kristalloscillator', 'VCO'],
                        correct: 2,
                        explanation: 'Kristalloscillatorer med kvartskristall har mycket hög frekvensstabilitet.'
                    },
                    {
                        id: 'c2-6-e4',
                        type: 'fill-blank',
                        question: 'VFO står för _______ Frequency Oscillator.',
                        answer: 'Variable',
                        alternatives: ['variable'],
                        explanation: 'VFO = Variable Frequency Oscillator, en oscillator med justerbar frekvens.'
                    },
                    {
                        id: 'c2-6-e5',
                        type: 'fill-blank',
                        question: 'VCO står för Voltage _______ Oscillator.',
                        answer: 'Controlled',
                        alternatives: ['controlled'],
                        explanation: 'VCO = Voltage Controlled Oscillator, frekvensen styrs av en spänning.'
                    },
                    {
                        id: 'c2-6-e6',
                        type: 'multiple-choice',
                        question: 'Vad är PLL?',
                        options: [
                            'Power Level Lock',
                            'Phase-Locked Loop',
                            'Programmable Logic Line',
                            'Parallel Line Link'
                        ],
                        correct: 1,
                        explanation: 'PLL (Phase-Locked Loop) kombinerar en VCO med en kristallreferens för stabilitet.'
                    },
                    {
                        id: 'c2-6-e7',
                        type: 'true-false',
                        question: 'DDS står för Direct Digital Synthesis.',
                        correct: true,
                        explanation: 'Sant. DDS genererar frekvenser digitalt med mycket hög precision och upplösning.'
                    },
                    {
                        id: 'c2-6-e8',
                        type: 'multiple-choice',
                        question: 'Colpitts och Hartley är exempel på:',
                        options: ['Filter', 'LC-oscillatorer', 'Förstärkare', 'Modulatorer'],
                        correct: 1,
                        explanation: 'Colpitts och Hartley är klassiska LC-oscillatorkonstruktioner.'
                    },
                    {
                        id: 'c2-6-e9',
                        type: 'multiple-choice',
                        question: 'Enligt Barkhausens kriterium, vad krävs för svängning?',
                        options: [
                            'Förstärkning × Återkoppling < 1',
                            'Förstärkning × Återkoppling ≥ 1',
                            'Förstärkning = 0',
                            'Återkoppling = 0'
                        ],
                        correct: 1,
                        explanation: 'För svängning krävs att förstärkning × återkoppling ≥ 1 och rätt fas.'
                    },
                    {
                        id: 'c2-6-e10',
                        type: 'matching',
                        question: 'Para ihop oscillatortypen med egenskapen:',
                        pairs: [
                            { left: 'Kristalloscillator', right: 'Högsta stabiliteten' },
                            { left: 'VFO', right: 'Justerbar frekvens' },
                            { left: 'VCO', right: 'Spänningsstyrd' },
                            { left: 'DDS', right: 'Digital frekvensgenering' }
                        ]
                    }
                ]
            },
            {
                id: '2.7',
                title: 'Blandare och frekvensomvandling',
                slug: 'blandare',
                description: 'Hur blandare används för frekvensomvandling',
                estimatedTime: 20,
                exercises: [
                    {
                        id: 'c2-7-e1',
                        type: 'multiple-choice',
                        question: 'Vad gör en blandare?',
                        options: [
                            'Förstärker signalen',
                            'Tar två signaler och producerar summa- och skillnadsfrekvenser',
                            'Filtrerar signalen',
                            'Modulerar signalen'
                        ],
                        correct: 1,
                        explanation: 'En blandare tar två signaler (f₁ och f₂) och producerar f₁+f₂ och f₁-f₂.'
                    },
                    {
                        id: 'c2-7-e2',
                        type: 'calculation',
                        question: 'En signal på 14,200 MHz blandas med en lokaloscillator på 14,209 MHz. Vad blir skillnadsfrekvensen (MF)?',
                        answer: 9,
                        unit: 'kHz',
                        hint: 'f_MF = f_LO - f_signal',
                        steps: [
                            'f_MF = 14,209 MHz - 14,200 MHz',
                            'f_MF = 0,009 MHz',
                            'f_MF = 9 kHz'
                        ],
                        explanation: 'Skillnadsfrekvensen: 14,209 - 14,200 = 0,009 MHz = 9 kHz'
                    },
                    {
                        id: 'c2-7-e3',
                        type: 'true-false',
                        question: 'Blandning används både i sändare och mottagare.',
                        correct: true,
                        explanation: 'Sant. Mottagare använder nedblandning (RF→MF), sändare använder uppblandning (MF→RF).'
                    },
                    {
                        id: 'c2-7-e4',
                        type: 'multiple-choice',
                        question: 'Om du blandar 7 MHz och 9 MHz, vilka frekvenser får du ut (förutom originalen)?',
                        options: [
                            '2 MHz och 16 MHz',
                            '7 MHz och 9 MHz',
                            '63 MHz',
                            '1 MHz och 8 MHz'
                        ],
                        correct: 0,
                        explanation: 'Summa: 7+9=16 MHz. Skillnad: 9-7=2 MHz.'
                    },
                    {
                        id: 'c2-7-e5',
                        type: 'fill-blank',
                        question: 'I en superheterodynmottagare omvandlas RF-signalen till en fast _______frekvens.',
                        answer: 'mellan',
                        alternatives: ['MF', 'intermediär', 'IF'],
                        explanation: 'RF omvandlas till en fast mellanfrekvens (MF/IF) via blandning.'
                    },
                    {
                        id: 'c2-7-e6',
                        type: 'multiple-choice',
                        question: 'Vilken blandare är passiv och kräver högre LO-nivå?',
                        options: ['Gilbertcell', 'Diodringblandare', 'Transistorblandare', 'Op-amp blandare'],
                        correct: 1,
                        explanation: 'Diodringblandaren är passiv (ingen förstärkning) och kräver högre LO-drivnivå.'
                    },
                    {
                        id: 'c2-7-e7',
                        type: 'true-false',
                        question: 'En blandare kan ge förstärkning om den är aktivt uppbyggd.',
                        correct: true,
                        explanation: 'Sant. Aktiva blandare (t.ex. Gilbertcell) kan ge förstärkning.'
                    },
                    {
                        id: 'c2-7-e8',
                        type: 'multiple-choice',
                        question: 'Vad är lokaloscillatorn (LO) i en mottagare?',
                        options: [
                            'Den signal som kommer från antennen',
                            'Oscillatorn som används för att blanda ned till MF',
                            'Slutstegets oscillator',
                            'Ett filter'
                        ],
                        correct: 1,
                        explanation: 'LO (Local Oscillator) är den interna oscillatorn som används för blandning.'
                    },
                    {
                        id: 'c2-7-e9',
                        type: 'calculation',
                        question: 'Du vill ta emot 145 MHz och använder MF på 10,7 MHz. Vilken frekvens ska lokaloscillatorn ha för nedblandning?',
                        answer: 155.7,
                        unit: 'MHz',
                        tolerance: 0.1,
                        hint: 'f_LO = f_RF + f_MF (eller f_RF - f_MF)',
                        explanation: 'f_LO = 145 + 10,7 = 155,7 MHz (alternativt 145 - 10,7 = 134,3 MHz)'
                    },
                    {
                        id: 'c2-7-e10',
                        type: 'matching',
                        question: 'Para ihop blandningstypen med användningen:',
                        pairs: [
                            { left: 'Nedblandning', right: 'Mottagare (RF→MF)' },
                            { left: 'Uppblandning', right: 'Sändare (MF→RF)' },
                            { left: 'Summafrekvens', right: 'f₁ + f₂' },
                            { left: 'Skillnadsfrekvens', right: 'f₁ - f₂' }
                        ]
                    }
                ]
            },
            {
                id: '2.8',
                title: 'Förstärkare',
                slug: 'forstarkare',
                description: 'Förstärkarklasser och tillämpningar',
                estimatedTime: 25,
                exercises: [
                    {
                        id: 'c2-8-e1',
                        type: 'multiple-choice',
                        question: 'Vilken förstärkarklass har bäst linjäritet?',
                        options: ['Klass A', 'Klass B', 'Klass AB', 'Klass C'],
                        correct: 0,
                        explanation: 'Klass A har bäst linjäritet men lägst verkningsgrad (~25-30%).'
                    },
                    {
                        id: 'c2-8-e2',
                        type: 'multiple-choice',
                        question: 'Vilken förstärkarklass har högst verkningsgrad?',
                        options: ['Klass A', 'Klass B', 'Klass AB', 'Klass C'],
                        correct: 3,
                        explanation: 'Klass C har högst verkningsgrad (~70-80%) men dålig linjäritet.'
                    },
                    {
                        id: 'c2-8-e3',
                        type: 'true-false',
                        question: 'SSB kräver linjär förstärkning.',
                        correct: true,
                        explanation: 'Sant. SSB måste använda linjära förstärkare (klass A, AB) för att undvika distorsion.'
                    },
                    {
                        id: 'c2-8-e4',
                        type: 'multiple-choice',
                        question: 'Vilken förstärkarklass används vanligen för FM/CW-slutsteg?',
                        options: ['Klass A', 'Klass B', 'Klass AB', 'Klass C'],
                        correct: 3,
                        explanation: 'Klass C kan användas för FM/CW då linjäritet inte är lika kritisk, och ger högre verkningsgrad.'
                    },
                    {
                        id: 'c2-8-e5',
                        type: 'fill-blank',
                        question: 'AGC står för Automatic _______ Control.',
                        answer: 'Gain',
                        alternatives: ['gain'],
                        explanation: 'AGC = Automatic Gain Control, automatisk förstärkningsreglering.'
                    },
                    {
                        id: 'c2-8-e6',
                        type: 'multiple-choice',
                        question: 'Vad är PA?',
                        options: [
                            'Pre Amplifier',
                            'Power Amplifier',
                            'Phase Adjuster',
                            'Passive Antenna'
                        ],
                        correct: 1,
                        explanation: 'PA = Power Amplifier, slutsteget som förstärker till full sändareffekt.'
                    },
                    {
                        id: 'c2-8-e7',
                        type: 'true-false',
                        question: 'Högre verkningsgrad i ett slutsteg betyder mindre värmeutveckling.',
                        correct: true,
                        explanation: 'Sant. Högre verkningsgrad = mer av ineffekten blir RF-signal och mindre blir värme.'
                    },
                    {
                        id: 'c2-8-e8',
                        type: 'multiple-choice',
                        question: 'Vad kan hända om SWR blir mycket högt (över 2:1) på en sändare?',
                        options: [
                            'Bättre prestanda',
                            'Inget särskilt',
                            'Slutsteget kan skadas',
                            'Lägre effekt'
                        ],
                        correct: 2,
                        explanation: 'Högt SWR innebär reflekterad effekt som kan skada slutsteget (PA).'
                    },
                    {
                        id: 'c2-8-e9',
                        type: 'multiple-choice',
                        question: 'Vilken förstärkarklass används vanligen i SSB-slutsteg?',
                        options: ['Klass A', 'Klass B', 'Klass AB', 'Klass C'],
                        correct: 2,
                        explanation: 'Klass AB ger bra balans mellan linjäritet (för SSB) och verkningsgrad.'
                    },
                    {
                        id: 'c2-8-e10',
                        type: 'matching',
                        question: 'Para ihop förstärkarklassen med egenskapen:',
                        pairs: [
                            { left: 'Klass A', right: 'Bästa linjäritet, lägst verkningsgrad' },
                            { left: 'Klass AB', right: 'Bra för SSB-slutsteg' },
                            { left: 'Klass C', right: 'Högsta verkningsgrad, för FM/CW' },
                            { left: 'RF-förstärkare', right: 'Förstärker radiosignaler' }
                        ]
                    }
                ]
            }
        ]
    },
{
    id: 3,
    number: 3,
    title: 'Antenner och Matarledningar',
    slug: 'kapitel-3-antenner',
    icon: '📡',
    subchapters: [
        {
            id: '3.1',
            title: 'Grundprinciper',
            slug: 'grundprinciper',
            description: 'Våglängd, impedans, resonans och antennvinst',
            estimatedTime: 20,
            exercises: [
                {
                    id: 'c3-1-e1',
                    type: 'multiple-choice',
                    question: 'Vad omvandlar en antenn vid sändning?',
                    options: [
                        'Elektrisk energi till ljusenergi',
                        'Elektrisk energi till elektromagnetiska vågor',
                        'Elektrisk energi till värmeenergi',
                        'Elektrisk energi till ljudenergi'
                    ],
                    correct: 1,
                    explanation: 'En antenn omvandlar elektrisk energi (RF-ström) till elektromagnetiska vågor vid sändning, och vice versa vid mottagning.'
                },
                {
                    id: 'c3-1-e2',
                    type: 'true-false',
                    question: 'Reciprocitetsprincipen betyder att en antenn som är bra på att sända också är lika bra på att ta emot.',
                    correct: true,
                    explanation: 'Ja! Reciprocitet innebär att en antenn har samma egenskaper (riktning, vinst, impedans) vid både sändning och mottagning.'
                },
                {
                    id: 'c3-1-e3',
                    type: 'multiple-choice',
                    question: 'Vilken är standardimpedansen för amatörradioutrustning?',
                    options: ['25 Ω', '50 Ω', '75 Ω', '100 Ω'],
                    correct: 1,
                    explanation: '50 Ω är världsstandard för amatörradio. Det är en kompromiss mellan lägsta förlust (77 Ω) och högsta effekttålighet (30 Ω).'
                },
                {
                    id: 'c3-1-e4',
                    type: 'fill-in-blank',
                    question: 'En halvvågsdipol i fri rymd har en impedans på cirka ___ Ω.',
                    correctAnswers: ['73', '73Ω', '73 Ω', '73 ohm'],
                    explanation: 'En halvvågsdipol har teoretiskt 73 Ω impedans i fri rymd, vilket är nära standard 50 Ω.'
                },
                {
                    id: 'c3-1-e5',
                    type: 'multiple-choice',
                    question: 'Hur långt sträcker sig det nära fältet från en antenn?',
                    options: [
                        'Cirka 0,1 våglängder',
                        'Cirka 1-2 våglängder',
                        'Cirka 10 våglängder',
                        'Cirka 100 våglängder'
                    ],
                    correct: 1,
                    explanation: 'Det nära fältet (reactive near field) sträcker sig cirka 1-2 våglängder från antennen. Här lagras energi reaktivt och pendlar fram och tillbaka.'
                },
                {
                    id: 'c3-1-e6',
                    type: 'true-false',
                    question: 'En bra antenn är viktigare för räckvidd än hög sändareffekt.',
                    correct: true,
                    explanation: 'Ja! En dålig antenn med 100W kan ge sämre resultat än en bra antenn med 10W. "First improve the antenna, not the amplifier!"'
                },
                {
                    id: 'c3-1-e7',
                    type: 'multiple-choice',
                    question: 'I vilket fält sker den faktiska kommunikationen med radiovågor?',
                    options: [
                        'Det nära fältet',
                        'Det reaktiva fältet',
                        'Det fjärran fältet',
                        'Det statiska fältet'
                    ],
                    correct: 2,
                    explanation: 'Det fjärran fältet (far field/Fraunhofer) är där energin har "lossnat" från antennen och färdas som radiovågor. Detta är där kommunikation sker.'
                },
                {
                    id: 'c3-1-e8',
                    type: 'multiple-choice',
                    question: 'Varför blev just 50 Ω standard för amatörradio?',
                    options: [
                        'Det var det billigaste att tillverka',
                        'Det var en kompromiss mellan låga förluster och hög effekttålighet',
                        'Det var det som TV-industrin använde',
                        'Det var slumpmässigt valt'
                    ],
                    correct: 1,
                    explanation: '50 Ω är en kompromiss mellan lägsta förlust (77 Ω) och högsta effekttålighet (30 Ω) i koaxkabel. Det blev världsstandard på 1940-talet.'
                },
                {
                    id: 'c3-1-e9',
                    type: 'fill-in-blank',
                    question: 'På 80-metersbandet (3,5 MHz) med våglängd 86 meter sträcker sig det nära fältet ___ meter från antennen.',
                    correctAnswers: ['86-172', '86 till 172', '86 - 172', '86-172 meter', '86-172m'],
                    explanation: 'Det nära fältet sträcker sig 1-2 våglängder, alltså 86-172 meter. Detta är varför HF-antenner kräver större säkerhetsavstånd!'
                },
                {
                    id: 'c3-1-e10',
                    type: 'matching',
                    question: 'Para ihop antennimpedans med antenntyp:',
                    pairs: [
                        { left: 'Halvvågsdipol (fri rymd)', right: '73 Ω' },
                        { left: 'Kvartsvågs vertikal (perfekt jordplan)', right: '36 Ω' },
                        { left: 'Ground plane (45° radialer)', right: '50 Ω' },
                        { left: 'Folded dipol', right: '300 Ω' }
                    ]
                }
            ]
        },
        {
            id: '3.2',
            title: 'Våglängd och frekvens',
            slug: 'vaglangd',
            description: 'Våglängd, frekvens och antennlängdsberäkningar',
            estimatedTime: 20,
            exercises: [
                {
                    id: 'c3-2-e1',
                    type: 'fill-in-blank',
                    question: 'Formeln för att beräkna våglängd från frekvens är: λ (meter) = ___ / f (MHz)',
                    correctAnswers: ['300'],
                    explanation: 'λ = 300 / f(MHz) är den förenklade formeln för praktisk användning, där 300 kommer från ljusets hastighet 300 000 km/s.'
                },
                {
                    id: 'c3-2-e2',
                    type: 'multiple-choice',
                    question: 'Vad är våglängden för 14,2 MHz (20-metersbandet)?',
                    options: ['14,2 meter', '21,1 meter', '28,4 meter', '42,6 meter'],
                    correct: 1,
                    explanation: 'λ = 300 / 14,2 = 21,1 meter. Därför kallas det "20-metersbandet" - våglängden är cirka 21 meter.'
                },
                {
                    id: 'c3-2-e3',
                    type: 'fill-in-blank',
                    question: 'Den praktiska formeln för en halvvågsdipols totala längd är: L (meter) = ___ / f (MHz)',
                    correctAnswers: ['143'],
                    explanation: 'L = 143 / f(MHz) inkluderar förkortningsfaktorn k ≈ 0,95. Teoretiskt skulle det vara 150, men praktiskt används 143.'
                },
                {
                    id: 'c3-2-e4',
                    type: 'multiple-choice',
                    question: 'Varför är den praktiska dipollängden kortare än den teoretiska?',
                    options: [
                        'För att spara material',
                        'På grund av förkortningsfaktorn - elektroner färdas långsammare i tråden',
                        'För att minska vikten',
                        'För att förbättra SWR'
                    ],
                    correct: 1,
                    explanation: 'Förkortningsfaktorn (k ≈ 0,95) beror på att elektronerna färdas något långsammare i metall än i fri rymd. Tråddiameter och form påverkar också.'
                },
                {
                    id: 'c3-2-e5',
                    type: 'multiple-choice',
                    question: 'Vad är våglängden för 145 MHz (2-metersbandet)?',
                    options: ['0,5 meter', '1,0 meter', '2,07 meter', '4,5 meter'],
                    correct: 2,
                    explanation: 'λ = 300 / 145 = 2,07 meter. Därför kallas det "2-metersbandet"!'
                },
                {
                    id: 'c3-2-e6',
                    type: 'fill-in-blank',
                    question: 'Formeln för en kvartsvågs vertikal antenn är: H (meter) = ___ / f (MHz)',
                    correctAnswers: ['71,5', '71.5'],
                    explanation: 'H = 71,5 / f(MHz) för kvartsvågs vertikal, vilket är hälften av dipollängden (143/2 ≈ 71,5).'
                },
                {
                    id: 'c3-2-e7',
                    type: 'true-false',
                    question: 'En 40-metersdipol kan fungera även på 20-metersbandet (2:a harmonisk).',
                    correct: false,
                    explanation: 'Nej! Jämna harmoniska (2×, 4×) fungerar dåligt. En 40m-dipol är helvåg (λ) på 20m, vilket ger mycket hög impedans i centrum. Udda harmoniska (3×, 5×, 7×) fungerar däremot bra.'
                },
                {
                    id: 'c3-2-e8',
                    type: 'multiple-choice',
                    question: 'På vilka band fungerar en 40-metersdipol (7 MHz) även utan tuner?',
                    options: [
                        '20m och 10m (jämna harmoniska)',
                        '15m (3:e harmonisk)',
                        '30m och 17m',
                        '80m och 160m'
                    ],
                    correct: 1,
                    explanation: 'Den 3:e harmoniska (3 × 7 = 21 MHz, 15m-bandet) fungerar bra eftersom dipolen då är 3λ/2. Udda multiplar (3×, 5×, 7×) fungerar.'
                },
                {
                    id: 'c3-2-e9',
                    type: 'multiple-choice',
                    question: 'Hur lång är en halvvågsdipol för 7,1 MHz?',
                    options: ['10,07 meter', '14,2 meter', '20,14 meter', '28,4 meter'],
                    correct: 2,
                    explanation: 'L = 143 / 7,1 = 20,14 meter total längd (ca 10 meter per ben).'
                },
                {
                    id: 'c3-2-e10',
                    type: 'matching',
                    question: 'Para ihop amatörbandet med dess ungefärliga våglängd:',
                    pairs: [
                        { left: '3,5 MHz', right: '80 meter' },
                        { left: '7 MHz', right: '40 meter' },
                        { left: '14 MHz', right: '20 meter' },
                        { left: '145 MHz', right: '2 meter' }
                    ]
                }
            ]
        },
        {
            id: '3.3',
            title: 'Dipolantenner',
            slug: 'dipol',
            description: 'Halvvågsdipol, inverterad-V och flerbandsdipoler',
            estimatedTime: 20,
            exercises: [
                {
                    id: 'c3-3-e1',
                    type: 'multiple-choice',
                    question: 'Vad består en dipol av?',
                    options: [
                        'En tråd som är λ/4 lång',
                        'Två element som vardera är λ/4 långa (totalt λ/2)',
                        'En tråd som är en hel våglängd',
                        'Tre element av olika längd'
                    ],
                    correct: 1,
                    explanation: 'En dipol består av två element (di = två) som vardera är λ/4, vilket ger total längd λ/2. Namnet kommer från grekiskans "di" (två) och "pol" (poler).'
                },
                {
                    id: 'c3-3-e2',
                    type: 'multiple-choice',
                    question: 'Hur ser en dipols strålningsmönster ut horisontellt?',
                    options: [
                        'Cirkel (strålar lika åt alla håll)',
                        'Åttafigur (max vinkelrätt mot tråden)',
                        'Rakt framåt som en ficklampa',
                        'Endast uppåt'
                    ],
                    correct: 1,
                    explanation: 'En dipol har ett åttafigursformat (munkform) strålningsmönster - max strålning vinkelrätt mot tråden, minimum längs med tråden.'
                },
                {
                    id: 'c3-3-e3',
                    type: 'fill-in-blank',
                    question: 'En halvvågsdipol har en vinst på cirka ___ dBd (per definition).',
                    correctAnswers: ['0', '0 dBd', '0dBd'],
                    explanation: 'Dipolen är referensantennen och har per definition 0 dBd vinst. I absoluta termer är det 2,15 dBi.'
                },
                {
                    id: 'c3-3-e4',
                    type: 'multiple-choice',
                    question: 'Vilken impedans har en halvvågsdipol när den hängs λ/4 över mark?',
                    options: ['25-35 Ω', '50-60 Ω', '73 Ω', '100 Ω'],
                    correct: 1,
                    explanation: 'På λ/4 höjd över mark har dipolen cirka 50-60 Ω impedans (närmare 50 Ω än de teoretiska 73 Ω i fri rymd). Marken påverkar impedansen.'
                },
                {
                    id: 'c3-3-e5',
                    type: 'true-false',
                    question: 'När man bygger en dipol bör man börja något längre än beräknat och sedan trimma kortare.',
                    correct: true,
                    explanation: 'Ja! Det är omöjligt att göra antennen längre igen efter att man klippt av den. Börja 5% längre och trimma sedan ned.'
                },
                {
                    id: 'c3-3-e6',
                    type: 'multiple-choice',
                    question: 'Vad är fördelen med en inverterad-V dipol jämfört med en rak dipol?',
                    options: [
                        'Högre vinst',
                        'Kräver bara en hög upphängningspunkt',
                        'Bättre för DX',
                        'Lägre SWR'
                    ],
                    correct: 1,
                    explanation: 'Inverterad-V behöver bara EN hög punkt (toppen av V:et) istället för två. Den är mer kompakt och enklare att rigga, men har något lägre vinst (~1 dB).'
                },
                {
                    id: 'c3-3-e7',
                    type: 'multiple-choice',
                    question: 'Vilken vinkel mellan elementen är optimal för en inverterad-V?',
                    options: ['45°', '60°', '90°', '100-120°'],
                    correct: 3,
                    explanation: '100-120° ger bäst resultat - en bra kompromiss mellan impedans (~50-55 Ω), strålningsegenskaper och mekanisk genomförbarhet.'
                },
                {
                    id: 'c3-3-e8',
                    type: 'multiple-choice',
                    question: 'Hur påverkar höjden över mark en dipols prestanda?',
                    options: [
                        'Högre antenn ger högre utstrålningsvinkel',
                        'Högre antenn ger lägre utstrålningsvinkel (bättre för DX)',
                        'Höjden spelar ingen roll',
                        'Lägre antenn är alltid bättre'
                    ],
                    correct: 1,
                    explanation: 'Högre antenn = lägre utstrålningsvinkel = bättre för långdistans (DX). Exempel: λ/4 höjd ger 25-30°, medan 1λ höjd ger 7-12° utstrålningsvinkel.'
                },
                {
                    id: 'c3-3-e9',
                    type: 'multiple-choice',
                    question: 'Vad är en fälldipol (trap dipole)?',
                    options: [
                        'En dipol som kan fällas ihop för transport',
                        'En dipol med LC-kretsar (fällor) som blockerar RF vid vissa frekvenser',
                        'En dipol som hängs i ett träd',
                        'En dipol med flera matningspunkter'
                    ],
                    correct: 1,
                    explanation: 'En fälldipol använder parallellresonanskretsar (traps/fällor) som blockerar RF vid vissa frekvenser, vilket gör antennen elektriskt kortare på högre band.'
                },
                {
                    id: 'c3-3-e10',
                    type: 'matching',
                    question: 'Para ihop dipoltypen med dess egenskap:',
                    pairs: [
                        { left: 'Halvvågsdipol', right: 'Enklast, referensantenn, 0 dBd' },
                        { left: 'Inverterad-V', right: 'En upphängningspunkt, mer kompakt' },
                        { left: 'Fälldipol', right: 'LC-kretsar för flerband' },
                        { left: 'Fan-dipol', right: 'Flera dipoler i "solfjäder"' }
                    ]
                }
            ]
        },
        {
            id: '3.4',
            title: 'Vertikala antenner',
            slug: 'vertikal',
            description: 'Kvartsvågsvertikal, jordplan och ground plane',
            estimatedTime: 20,
            exercises: [
                {
                    id: 'c3-4-e1',
                    type: 'fill-in-blank',
                    question: 'Formeln för en kvartsvågs vertikal antenns höjd är: H (meter) = ___ / f (MHz)',
                    correctAnswers: ['71,5', '71.5'],
                    explanation: 'H = 71,5 / f(MHz) för kvartsvågs vertikal. Detta inkluderar förkortningsfaktorn (k ≈ 0,95).'
                },
                {
                    id: 'c3-4-e2',
                    type: 'true-false',
                    question: 'En vertikal antenn kan fungera utan jordplan.',
                    correct: false,
                    explanation: 'Nej! En vertikal antenn MÅSTE ha jordplan. Jordplanet fungerar som "spegelbilden" och är den andra halvan av antennen. Utan jordplan fungerar den inte alls.'
                },
                {
                    id: 'c3-4-e3',
                    type: 'multiple-choice',
                    question: 'Hur många radialer rekommenderas som minimum för acceptabel prestanda?',
                    options: ['2 radialer', '4 radialer', '8 radialer', '16 radialer'],
                    correct: 1,
                    explanation: '4 radialer är acceptabelt minimum. 8-16 radialer ger bra prestanda. Fler radialer = bättre, men avtagande vinst efter 16-20 st.'
                },
                {
                    id: 'c3-4-e4',
                    type: 'multiple-choice',
                    question: 'Vilken impedans har en λ/4 vertikal med horisontella radialer?',
                    options: ['25 Ω', '36 Ω', '50 Ω', '73 Ω'],
                    correct: 1,
                    explanation: 'En kvartsvågs vertikal med horisontella radialer har cirka 36 Ω impedans, vilket behöver anpassas till 50 Ω.'
                },
                {
                    id: 'c3-4-e5',
                    type: 'multiple-choice',
                    question: 'Vad är fördelen med att vinkla radialerna nedåt 45° (ground plane)?',
                    options: [
                        'Det blir billigare',
                        'Impedansen höjs till cirka 50 Ω - perfekt match!',
                        'Antennen blir kortare',
                        'Man behöver färre radialer'
                    ],
                    correct: 1,
                    explanation: 'Genom att vinkla radialerna nedåt 45° höjs impedansen från 36 Ω till cirka 50 Ω - perfekt match utan extra anpassning! Detta kallas ground plane-design.'
                },
                {
                    id: 'c3-4-e6',
                    type: 'fill-in-blank',
                    question: 'En 5/8 λ vertikal har cirka ___ dB mer vinst än en λ/4 vertikal.',
                    correctAnswers: ['3', '+3', '3 dB', '+3 dB', '3dB'],
                    explanation: 'En 5/8 λ vertikal har cirka 3 dB mer vinst än λ/4, vilket motsvarar dubbel effekt! Den har också lägre utstrålningsvinkel (bättre för DX).'
                },
                {
                    id: 'c3-4-e7',
                    type: 'multiple-choice',
                    question: 'Hur ser en vertikal antenns strålningsmönster ut horisontellt?',
                    options: [
                        'Åttafigur som en dipol',
                        'Rakt framåt',
                        'Rundstrålande - lika åt alla håll',
                        'Endast bakåt'
                    ],
                    correct: 2,
                    explanation: 'En vertikal antenn är rundstrålande horisontellt - den strålar lika starkt åt alla riktningar runt antennen. Perfekt för att täcka alla håll samtidigt!'
                },
                {
                    id: 'c3-4-e8',
                    type: 'multiple-choice',
                    question: 'Varför är vertikala antenner bra för DX (långdistans)?',
                    options: [
                        'De har högre vinst',
                        'De har lägre utstrålningsvinkel - mer energi mot horisonten',
                        'De använder mindre effekt',
                        'De fungerar utan jordplan'
                    ],
                    correct: 1,
                    explanation: 'Vertikaler har låg utstrålningsvinkel vilket betyder att mer energi strålas mot horisonten istället för uppåt. Detta är idealiskt för långdistans (DX).'
                },
                {
                    id: 'c3-4-e9',
                    type: 'multiple-choice',
                    question: 'Var ska en mobilantenn helst monteras för bästa prestanda?',
                    options: [
                        'På stötfångaren',
                        'På fönstret',
                        'Mitt på taket',
                        'Under bilen'
                    ],
                    correct: 2,
                    explanation: 'Mitt på taket ger bäst jordplan (mest metallyta runt antennen), perfekt rundstrålning och lägst SWR. Takmontage > Bagagelucka > Stötfångare > Glasmontage.'
                },
                {
                    id: 'c3-4-e10',
                    type: 'matching',
                    question: 'Para ihop jordplanstyp med resultat:',
                    pairs: [
                        { left: 'Inget jordplan', right: 'Fungerar INTE - högt SWR, farligt' },
                        { left: '4 radialer', right: 'Acceptabelt minimum' },
                        { left: '8-16 radialer', right: 'Bra prestanda, lågt SWR' },
                        { left: 'Saltvattenkust', right: 'Perfekt naturligt jordplan' }
                    ]
                }
            ]
        },
        {
            id: '3.5',
            title: 'Riktantenner',
            slug: 'riktantenner',
            description: 'Yagi, Quad och log-periodisk',
            estimatedTime: 20,
            exercises: [
                {
                    id: 'c3-5-e1',
                    type: 'multiple-choice',
                    question: 'Vilka tre typer av element finns i en Yagi-antenn?',
                    options: [
                        'Driven, radiator, direktor',
                        'Reflektor, driven, direktor',
                        'Reflektor, absorber, sändare',
                        'Primär, sekundär, tertiär'
                    ],
                    correct: 1,
                    explanation: 'En Yagi består av: Reflektor (1 st, längst, bakåt), Driven element (1 st, matad, λ/2), och Direktorer (1+, kortast, framåt).'
                },
                {
                    id: 'c3-5-e2',
                    type: 'multiple-choice',
                    question: 'Vilket element i en Yagi är längst?',
                    options: [
                        'Driven element',
                        'Direktorn',
                        'Reflektorn',
                        'Alla är lika långa'
                    ],
                    correct: 2,
                    explanation: 'Reflektorn är längst (ca 5% längre än driven element, ~0,525 λ). Den "speglar" vågen framåt. Direktorerna är kortast.'
                },
                {
                    id: 'c3-5-e3',
                    type: 'true-false',
                    question: 'I en Yagi är endast driven element kopplad till koaxkabeln - övriga element fungerar genom induktion (parasitiska element).',
                    correct: true,
                    explanation: 'Ja! Endast driven element är matad. Reflektor och direktorer är parasitiska element - de fungerar genom induktion från driven element.'
                },
                {
                    id: 'c3-5-e4',
                    type: 'multiple-choice',
                    question: 'Ungefär hur mycket vinst har en 5-elements Yagi?',
                    options: ['3-4 dBd', '5-6 dBd', '7-8 dBd', '12-15 dBd'],
                    correct: 2,
                    explanation: 'En 5-elements Yagi har cirka 7-8 dBd vinst, vilket motsvarar ungefär 5× effekten jämfört med en dipol!'
                },
                {
                    id: 'c3-5-e5',
                    type: 'fill-in-blank',
                    question: 'F/B står för ___ och mäter hur mycket bättre antennen strålar framåt jämfört med bakåt.',
                    correctAnswers: ['fram/back', 'fram back', 'front back', 'front/back', 'fram-back'],
                    explanation: 'F/B = Fram/Back-förhållande (Front-to-Back ratio). Mäts i dB. Typiskt 15-25 dB för en bra Yagi.'
                },
                {
                    id: 'c3-5-e6',
                    type: 'multiple-choice',
                    question: 'Vad händer med Yagi-antennens strålningsvinkel när man lägger till fler direktorer?',
                    options: [
                        'Den blir bredare',
                        'Den blir smalare och mer koncentrerad',
                        'Den blir rundstrålande',
                        'Inget händer'
                    ],
                    correct: 1,
                    explanation: 'Fler direktorer = smalare strålningsvinkel = mer koncentrerad signal framåt = högre vinst. Men mindre täckning i sidled.'
                },
                {
                    id: 'c3-5-e7',
                    type: 'multiple-choice',
                    question: 'Vad är skillnaden mellan Quad och Yagi?',
                    options: [
                        'Quad är billigare',
                        'Quad använder kvadratiska loopar (1λ omkrets) istället för raka element',
                        'Quad har lägre vinst',
                        'Quad fungerar bara på VHF'
                    ],
                    correct: 1,
                    explanation: 'Quad använder kvadratiska loopar med 1λ omkrets istället för raka element. Ger cirka 1 dB mer vinst än Yagi men är mekaniskt mer komplex.'
                },
                {
                    id: 'c3-5-e8',
                    type: 'multiple-choice',
                    question: 'När är en log-periodisk antenn (LPDA) att föredra?',
                    options: [
                        'När man vill ha maximal vinst på ett specifikt band',
                        'När man behöver bred bandbredd över många frekvenser',
                        'När man har begränsat utrymme',
                        'När man bara använder FM'
                    ],
                    correct: 1,
                    explanation: 'Log-periodisk antenn är bredbandig och fungerar över 2:1 frekvensförhållande eller mer (t.ex. 50-150 MHz), men har lägre vinst än Yagi. Bra när man behöver täcka många band utan att justera.'
                },
                {
                    id: 'c3-5-e9',
                    type: 'multiple-choice',
                    question: 'Om en 3-elements Yagi har +6 dBd vinst, hur mycket motsvarar det i effektökning?',
                    options: [
                        '2× effekten',
                        '3× effekten',
                        '4× effekten',
                        '6× effekten'
                    ],
                    correct: 2,
                    explanation: '+6 dB = 4× effekten! En Yagi med +6 dBd och 100W ger samma signalstyrka som en dipol med 400W.'
                },
                {
                    id: 'c3-5-e10',
                    type: 'matching',
                    question: 'Para ihop riktantenntyp med dess kännetecken:',
                    pairs: [
                        { left: 'Yagi', right: 'Högst vinst, smalbandig, populärast' },
                        { left: 'Quad', right: 'Loopar, ~1 dB mer vinst än Yagi' },
                        { left: 'Log-periodisk', right: 'Bredbandig, lägre vinst' },
                        { left: '3-el Yagi', right: 'Cirka 6 dBd vinst' }
                    ]
                }
            ]
        },
        {
            id: '3.6',
            title: 'Matarledningar',
            slug: 'matarledningar',
            description: 'Koaxialkabel, förluster och kontakter',
            estimatedTime: 20,
            exercises: [
                {
                    id: 'c3-6-e1',
                    type: 'multiple-choice',
                    question: 'Vilka fyra delar består en koaxialkabel av?',
                    options: [
                        'Kärna, isolering, skydd, hölje',
                        'Innerledare, dielektrikum, skärm, ytterhölje',
                        'Plus, minus, jord, skydd',
                        'Signal, return, skärm, plasthölje'
                    ],
                    correct: 1,
                    explanation: 'Koax består av: 1) Innerledare (koppar), 2) Dielektrikum (isolering), 3) Skärm (flätad koppar), 4) Ytterhölje (PVC/PE).'
                },
                {
                    id: 'c3-6-e2',
                    type: 'fill-in-blank',
                    question: 'Standardimpedansen för koaxialkabel i amatörradio är ___ Ω.',
                    correctAnswers: ['50', '50Ω', '50 Ω', '50 ohm'],
                    explanation: '50 Ω är världsstandard för amatörradio. TV-kabel har 75 Ω (fel för radio!).'
                },
                {
                    id: 'c3-6-e3',
                    type: 'true-false',
                    question: 'Kabeldämpningen ökar kraftigt när frekvensen ökar.',
                    correct: true,
                    explanation: 'Ja! RG-58 som är OK på HF blir katastrofal på UHF. Exempel: RG-58 har ~2,5 dB förlust på VHF men ~4,5 dB på UHF (per 20m) - 72% av effekten försvinner!'
                },
                {
                    id: 'c3-6-e4',
                    type: 'multiple-choice',
                    question: 'Vilken kabeltyp ska man UNDVIKA för VHF/UHF?',
                    options: ['RG-213', 'Aircell 7', 'Ecoflex 10', 'RG-58'],
                    correct: 3,
                    explanation: 'RG-58 har mycket höga förluster på VHF/UHF (~22 dB/100m på 432 MHz). Använd Aircell, Ecoflex eller RG-213 istället!'
                },
                {
                    id: 'c3-6-e5',
                    type: 'multiple-choice',
                    question: 'Vad är hastighetsfaktor (VF)?',
                    options: [
                        'Hur fort man kan montera kabeln',
                        'Hur mycket långsammare RF färdas i kabeln jämfört med ljusets hastighet',
                        'Kabelns maximala effekttålighet',
                        'Kabelns böjbarhet'
                    ],
                    correct: 1,
                    explanation: 'VF anger hur mycket långsammare RF färdas i kabeln än i vakuum. Solid PE: 0,66, Skum-PE: 0,80, Luft (Aircell): 0,85.'
                },
                {
                    id: 'c3-6-e6',
                    type: 'multiple-choice',
                    question: 'Vilken kontakttyp rekommenderas för VHF/UHF?',
                    options: ['PL-259', 'N-kontakt', 'BNC', 'F-kontakt'],
                    correct: 1,
                    explanation: 'N-kontakt är bäst för VHF/UHF: äkta 50 Ω, vattentät, fungerar till 10 GHz. PL-259 är INTE 50 Ω och funkar dåligt över 150 MHz!'
                },
                {
                    id: 'c3-6-e7',
                    type: 'true-false',
                    question: 'TV-kabel (RG-6, 75 Ω) kan användas istället för 50 Ω koax för amatörradio utan problem.',
                    correct: false,
                    explanation: 'Nej! 75 Ω kabel ger automatiskt SWR ~1,5:1 även med perfekt antenn på grund av impedansfelet. Använd alltid 50 Ω kabel för amatörradio.'
                },
                {
                    id: 'c3-6-e8',
                    type: 'multiple-choice',
                    question: 'Varför är Aircell 7 och Ecoflex 10 bättre än RG-58?',
                    options: [
                        'De är billigare',
                        'De är tjockare',
                        'De har mycket lägre förluster (luftisolering, VF 0,85)',
                        'De är lättare'
                    ],
                    correct: 2,
                    explanation: 'Aircell/Ecoflex använder luftisolering vilket ger VF 0,85 och mycket lägre förluster än RG-58. På UHF är skillnaden enorm - 3-4× mindre förlust!'
                },
                {
                    id: 'c3-6-e9',
                    type: 'multiple-choice',
                    question: 'Vad ska man tänka på när man installerar koaxkabel utomhus?',
                    options: [
                        'Kabeln måste vara röd',
                        'Vattentät försegling, UV-beständigt hölje, mekanisk avlastning',
                        'Kabeln måste vara minst 100 meter',
                        'Den måste vara nedgrävd'
                    ],
                    correct: 1,
                    explanation: 'Viktigt för utomhusinstallation: Vattentäta alla kontakter (speciellt vid antennen!), UV-beständigt ytterhölje, mekanisk avlastning (fäst regelbundet), minimera böjradius.'
                },
                {
                    id: 'c3-6-e10',
                    type: 'matching',
                    question: 'Para ihop kabeltyp med användningsområde:',
                    pairs: [
                        { left: 'RG-58', right: 'Kort kabel, låg effekt, UNDVIK VHF/UHF' },
                        { left: 'RG-213', right: 'Standard HF/VHF, bra balans' },
                        { left: 'Aircell 7', right: 'Låg förlust VHF/UHF' },
                        { left: 'Hardline', right: 'Professionellt, repeatrar, minsta förlust' }
                    ]
                }
            ]
        },
        {
            id: '3.7',
            title: 'Anpassning och SWR',
            slug: 'anpassning',
            description: 'SWR, anpassningsenheter och impedanstransformation',
            estimatedTime: 25,
            exercises: [
                {
                    id: 'c3-7-e1',
                    type: 'fill-in-blank',
                    question: 'SWR står för ___ ___ ___.',
                    correctAnswers: ['Standing Wave Ratio', 'standing wave ratio'],
                    explanation: 'SWR = Standing Wave Ratio (stående vågförhållande). Mäter hur bra impedansanpassningen är mellan sändare/kabel och antenn.'
                },
                {
                    id: 'c3-7-e2',
                    type: 'multiple-choice',
                    question: 'Vilket SWR är perfekt?',
                    options: ['0:1', '1:1', '2:1', '50:1'],
                    correct: 1,
                    explanation: 'SWR 1:1 är perfekt (teoretiskt) - ingen reflektion. I praktiken är SWR under 1,5:1 utmärkt.'
                },
                {
                    id: 'c3-7-e3',
                    type: 'multiple-choice',
                    question: 'Hur mycket effekt reflekteras vid SWR 2:1?',
                    options: ['2%', '11%', '20%', '50%'],
                    correct: 1,
                    explanation: 'Vid SWR 2:1 reflekteras 11% av effekten. 100W blir 89W till antennen. Detta är fortfarande acceptabelt för de flesta sändare.'
                },
                {
                    id: 'c3-7-e4',
                    type: 'multiple-choice',
                    question: 'Vilket SWR-värde ska man sikta på för amatörinstallationer?',
                    options: ['Under 1,2:1', 'Under 1,5:1', 'Under 3:1', 'Under 5:1'],
                    correct: 1,
                    explanation: 'Sikta på SWR under 1,5:1 - detta är utmärkt (endast 4% reflekterad effekt). Under 2:1 är också acceptabelt.'
                },
                {
                    id: 'c3-7-e5',
                    type: 'true-false',
                    question: 'Vid SWR 3:1 reflekteras 25% av effekten - detta bör åtgärdas.',
                    correct: true,
                    explanation: 'Ja! Vid SWR 3:1 reflekteras 25% av effekten. Många sändare reducerar effekten automatiskt vid detta SWR. Risk för skada på slutsteg.'
                },
                {
                    id: 'c3-7-e6',
                    type: 'multiple-choice',
                    question: 'Vad är den vanligaste orsaken till högt SWR?',
                    options: [
                        'För lång koaxkabel',
                        'Antenn inte resonant på frekvensen (fel längd)',
                        'För låg sändareffekt',
                        'Dåligt väder'
                    ],
                    correct: 1,
                    explanation: 'Vanligaste orsaken är att antennen inte är resonant på frekvensen (fel längd, eller sänder utanför dess designade frekvensområde).'
                },
                {
                    id: 'c3-7-e7',
                    type: 'multiple-choice',
                    question: 'Vad gör en antenntuner (ATU)?',
                    options: [
                        'Förbättrar antennen',
                        'Transformerar impedans så sändaren "ser" 50 Ω',
                        'Eliminerar kabelförlusterna',
                        'Ökar sändareffekten'
                    ],
                    correct: 1,
                    explanation: 'En tuner transformerar impedans så sändaren "ser" 50 Ω och kan leverera full effekt. Den förbättrar INTE antennen och eliminerar INTE kabelförluster vid högt SWR!'
                },
                {
                    id: 'c3-7-e8',
                    type: 'true-false',
                    question: 'Det är bättre att placera tunern vid antennen än vid radion (om man har högt SWR).',
                    correct: true,
                    explanation: 'Ja! Tuner vid antennen gör att kabeln har lågt SWR hela vägen = mindre förluster. Tuner vid radion "döljer" bara problemet - kabeln har fortfarande högt SWR och stora förluster.'
                },
                {
                    id: 'c3-7-e9',
                    type: 'multiple-choice',
                    question: 'Vad händer i moderna sändare vid mycket högt SWR (>3:1)?',
                    options: [
                        'Ingenting',
                        'De ökar effekten automatiskt',
                        'De reducerar effekten eller stänger av för att skydda slutsteget',
                        'De exploderar'
                    ],
                    correct: 2,
                    explanation: 'Moderna sändare har skydd som reducerar effekten vid SWR >2-2,5:1 och kan stänga av helt vid >3-5:1 för att skydda slutsteget.'
                },
                {
                    id: 'c3-7-e10',
                    type: 'matching',
                    question: 'Para ihop SWR-värde med bedömning:',
                    pairs: [
                        { left: 'SWR 1,2:1', right: 'Excellent (1% reflektion)' },
                        { left: 'SWR 1,5:1', right: 'Utmärkt (4% reflektion)' },
                        { left: 'SWR 2,0:1', right: 'Acceptabelt (11% reflektion)' },
                        { left: 'SWR 3,0:1', right: 'Dåligt (25% reflektion) - Åtgärda!' }
                    ]
                }
            ]
        },
        {
            id: '3.8',
            title: 'Balun och mantelströmmar',
            slug: 'balun',
            description: 'Baluner, ununs och RFI-problem',
            estimatedTime: 20,
            exercises: [
                {
                    id: 'c3-8-e1',
                    type: 'multiple-choice',
                    question: 'Vad är skillnaden mellan balanserad och obalanserad?',
                    options: [
                        'Balanserad har högre effekt',
                        'Balanserad: båda sidor samma potential mot jord (dipol). Obalanserad: ena sidan jordad (vertikal, koax)',
                        'Balanserad är dyrare',
                        'Det finns ingen skillnad'
                    ],
                    correct: 1,
                    explanation: 'Balanserad (dipol): båda halvor har samma spänning mot jord, symmetrisk. Obalanserad (vertikal, koax): ena sidan direkt kopplad till jord.'
                },
                {
                    id: 'c3-8-e2',
                    type: 'fill-in-blank',
                    question: 'BALUN står för ___balanced to ___balanced.',
                    correctAnswers: ['balanced unbalanced', 'BALanced UNbalanced'],
                    explanation: 'BALUN = BALanced to UNbalanced. Konverterar mellan balanserad antenn (dipol) och obalanserad kabel (koax).'
                },
                {
                    id: 'c3-8-e3',
                    type: 'multiple-choice',
                    question: 'Vad är mantelströmmar?',
                    options: [
                        'Ström i antennen',
                        'RF-ström som flyter på utsidan av koaxskärmen (oönskat!)',
                        'Ström i sändaren',
                        'Ström i jordplanet'
                    ],
                    correct: 1,
                    explanation: 'Mantelströmmar är RF-ström på UTSIDAN av koaxskärmen. Detta är oönskat och orsakar många problem!'
                },
                {
                    id: 'c3-8-e4',
                    type: 'multiple-choice',
                    question: 'Vilka problem orsakar mantelströmmar?',
                    options: [
                        'Endast lite brus',
                        'RF i shacket, snedvridet strålningsmönster, felaktigt SWR, störningar',
                        'Kabeln blir varm',
                        'Inga problem alls'
                    ],
                    correct: 1,
                    explanation: 'Mantelströmmar orsakar: RF i shacket (stör elektronik, ger RF-brännskador), snedvridet strålningsmönster, felaktigt SWR, ökad brus, störningar på grannarna.'
                },
                {
                    id: 'c3-8-e5',
                    type: 'true-false',
                    question: 'När man kopplar koax direkt till en dipol utan balun får man garanterat mantelströmmar.',
                    correct: true,
                    explanation: 'Ja! Koax är obalanserad, dipol är balanserad. Utan balun uppstår definitivt mantelströmmar. ALLTID använd balun vid dipol!'
                },
                {
                    id: 'c3-8-e6',
                    type: 'multiple-choice',
                    question: 'Vad är skillnaden mellan strömsbalun och transformerande balun?',
                    options: [
                        'Strömsbalun är billigare',
                        'Strömsbalun blockerar bara mantelströmmar (1:1). Transformerande ändrar också impedans (4:1, 9:1)',
                        'Det finns ingen skillnad',
                        'Strömsbalun är större'
                    ],
                    correct: 1,
                    explanation: 'Strömsbalun (common-mode choke): Blockerar mantelströmmar, 1:1 impedans. Transformerande balun: Blockerar mantelströmmar OCH transformerar impedans (t.ex. 4:1 för foldad dipol).'
                },
                {
                    id: 'c3-8-e7',
                    type: 'multiple-choice',
                    question: 'Var ska balun placeras för bästa resultat?',
                    options: [
                        'Vid radion',
                        'Vid antennen (viktigast!) och gärna även vid radion',
                        'I mitten av koaxkabeln',
                        'Det spelar ingen roll'
                    ],
                    correct: 1,
                    explanation: 'Balun ska placeras VID ANTENNEN (primärt - viktigast!) där mantelströmmarna uppstår. Sekundärt även vid radion som extra skydd. Båda platserna = optimalt!'
                },
                {
                    id: 'c3-8-e8',
                    type: 'multiple-choice',
                    question: 'Hur bygger man en enkel strömsbalun (common-mode choke)?',
                    options: [
                        'Linda 50 varv tråd',
                        'Trä 6-10 ferritkärnor (typ FT240-43) på koaxen nära matningspunkten',
                        'Använda en transformator',
                        'Koppla två koaxkablar parallellt'
                    ],
                    correct: 1,
                    explanation: 'Enklaste hemmabyggda balun: Trä 6-10 st ferritkärnor (FT240-43 för HF) på koaxen 10-30 cm från matningspunkten. Packa tätt, fäst med buntband, vattentäta. Fungerar utmärkt!'
                },
                {
                    id: 'c3-8-e9',
                    type: 'true-false',
                    question: 'Om SWR ändras när man rör koaxkabeln är det ett tecken på mantelströmmar.',
                    correct: true,
                    explanation: 'Ja! Om SWR ändras när du rör kabeln, eller om du får RF-stötar när du rör mikrofonen, har du mantelströmmar. Installera balun vid antennen!'
                },
                {
                    id: 'c3-8-e10',
                    type: 'matching',
                    question: 'Para ihop komponent med användning:',
                    pairs: [
                        { left: '1:1 Balun', right: 'Dipol med koax - blockerar mantelströmmar' },
                        { left: '4:1 Balun', right: 'Foldad dipol (300 Ω) till koax (50 Ω)' },
                        { left: '1:1 Unun', right: 'Vertikal antenn - blockerar common-mode' },
                        { left: 'Ferritkärnor', right: 'Enkel hemmabyggd strömsbalun' }
                    ]
                }
            ]
        }
    ]
},
{
    id: 4,
    number: 4,
    title: 'Vågutbredning',
    slug: 'kapitel-4-vagutbredning',
    icon: '🌊',
    description: 'Förstå hur radiovågor färdas runt jorden - från markvåg till satellit',
    estimatedTime: '2-3 timmar',
    questionCount: 60,
    subchapters: [
        {
            id: '4.1',
            title: 'Grundbegrepp och frekvensområden',
            slug: 'grundbegrepp',
            description: 'Det elektromagnetiska spektrumet, våglängd och frekvens',
            estimatedTime: 25,
            exercises: [
                {
                    id: 'c4-1-e1',
                    type: 'fill-in-blank',
                    question: 'Formeln för att beräkna våglängd från frekvens är: λ (meter) = ___ / f (MHz)',
                    correctAnswers: ['300'],
                    explanation: 'λ (m) = 300 / f (MHz). Exempel: 14 MHz ger 300/14 ≈ 21,4 meter våglängd.'
                },
                {
                    id: 'c4-1-e2',
                    type: 'multiple-choice',
                    question: 'Vilket frekvensområde kallas HF (kortväg)?',
                    options: [
                        '300 kHz - 3 MHz',
                        '3-30 MHz',
                        '30-300 MHz',
                        '300 MHz - 3 GHz'
                    ],
                    correct: 1,
                    explanation: 'HF = 3-30 MHz. Här finns amatörbanden 160m, 80m, 40m, 20m, 15m, 10m.'
                },
                {
                    id: 'c4-1-e3',
                    type: 'multiple-choice',
                    question: 'Vad är 2m-bandets frekvens i Sverige?',
                    options: [
                        '50-52 MHz',
                        '144-146 MHz',
                        '430-440 MHz',
                        '1240-1300 MHz'
                    ],
                    correct: 1,
                    explanation: '2m-bandet är VHF: 144-146 MHz i Sverige. Namnet kommer från våglängden (cirka 2 meter).'
                },
                {
                    id: 'c4-1-e4',
                    type: 'true-false',
                    question: 'Högre frekvens innebär kortare våglängd.',
                    correct: true,
                    explanation: 'Ja! λ = 300/f → när f ökar minskar λ. Exempel: 7 MHz ≈ 43m, 14 MHz ≈ 21m, 28 MHz ≈ 11m.'
                },
                {
                    id: 'c4-1-e5',
                    type: 'multiple-choice',
                    question: 'Vilka är de tre huvudsakliga utbredningssätten?',
                    options: [
                        'Markvåg, Luftvåg, Satellitsignal',
                        'Markvåg, Rymdvåg, Siktlinje',
                        'HF, VHF, UHF',
                        'Direct, Reflected, Scattered'
                    ],
                    correct: 1,
                    explanation: 'De tre utbredningssätten: Markvåg (följer jordytan), Rymdvåg (jonosfärsreflektion), Siktlinje (rak väg, VHF/UHF).'
                },
                {
                    id: 'c4-1-e6',
                    type: 'multiple-choice',
                    question: 'Vilket utbredningssätt används för HF-DX?',
                    options: [
                        'Markvåg',
                        'Rymdvåg (jonosfärsreflektion)',
                        'Siktlinje',
                        'Direkt ström'
                    ],
                    correct: 1,
                    explanation: 'Rymdvåg via jonosfären möjliggör HF-DX över hela världen. F-skiktet reflekterar vågen tillbaka mot jorden.'
                },
                {
                    id: 'c4-1-e7',
                    type: 'multiple-choice',
                    question: 'Vilket utbredningssätt dominerar på VHF/UHF?',
                    options: [
                        'Markvåg',
                        'Jonosfärsreflektion',
                        'Siktlinje (line of sight)',
                        'Troposfärisk utbredning'
                    ],
                    correct: 2,
                    explanation: 'VHF/UHF går i huvudsak i rak linje (siktlinje). Begränsas av jordkrökningen och terrängen.'
                },
                {
                    id: 'c4-1-e8',
                    type: 'true-false',
                    question: 'Lägre frekvenser (längre våglängd) ger generellt längre räckvidd.',
                    correct: true,
                    explanation: 'Ja! Lägre frekvenser böjs lättare runt hinder, reflekteras i jonosfären, och penetrerar byggnader bättre.'
                },
                {
                    id: 'c4-1-e9',
                    type: 'multiple-choice',
                    question: 'Om 20m-bandets frekvens är 14 MHz, vad är våglängden?',
                    options: [
                        '14 meter',
                        '20 meter',
                        '21,4 meter',
                        '30 meter'
                    ],
                    correct: 2,
                    explanation: 'λ = 300/14 ≈ 21,4 meter. Namnet "20m-bandet" är en historisk avrundning!'
                },
                {
                    id: 'c4-1-e10',
                    type: 'matching',
                    question: 'Para ihop frekvensområde med typisk användning:',
                    pairs: [
                        { left: 'HF (3-30 MHz)', right: 'Världsomspännande DX via jonosfären' },
                        { left: 'VHF (30-300 MHz)', right: 'Lokal/regional trafik, 2m-bandet' },
                        { left: 'UHF (300 MHz-3 GHz)', right: 'Kort räckvidd, 70cm-bandet, WiFi' },
                        { left: 'MF (300 kHz-3 MHz)', right: '160m-bandet, AM-rundradio' }
                    ]
                }
            ]
        },
        {
            id: '4.2',
            title: 'Markvåg',
            slug: 'markvag',
            description: 'Markvågens egenskaper och hur den följer jordytan',
            estimatedTime: 20,
            exercises: [
                {
                    id: 'c4-2-e1',
                    type: 'multiple-choice',
                    question: 'Vad är markvåg?',
                    options: [
                        'Vågor som reflekteras i marken',
                        'Radiovågor som följer jordytan och böjs runt horisonten',
                        'Vågor under marknivå',
                        'Vågor från markstationer'
                    ],
                    correct: 1,
                    explanation: 'Markvågen följer jordytan genom diffraktion (böjning). Fungerar bäst på låga frekvenser (LF, MF, lägre HF).'
                },
                {
                    id: 'c4-2-e2',
                    type: 'multiple-choice',
                    question: 'Vilken polarisation fungerar BÄST för markvåg?',
                    options: [
                        'Horisontell',
                        'Vertikal',
                        'Cirkulär',
                        'Det spelar ingen roll'
                    ],
                    correct: 1,
                    explanation: 'Vertikal polarisation är MYCKET viktigare! Horisontell polarisation absorberas kraftigt i marken. Därför används vertikala antenner för markvåg.'
                },
                {
                    id: 'c4-2-e3',
                    type: 'true-false',
                    question: 'Markvågen når längre över saltvatten än över land.',
                    correct: true,
                    explanation: 'Ja! Saltvatten är mycket ledande → minimal absorption. Ger 2-3× längre räckvidd jämfört med land.'
                },
                {
                    id: 'c4-2-e4',
                    type: 'multiple-choice',
                    question: 'På vilket band fungerar markvåg BÄST?',
                    options: [
                        '10m (28 MHz)',
                        '20m (14 MHz)',
                        '40m (7 MHz)',
                        '160m (1,8 MHz)'
                    ],
                    correct: 3,
                    explanation: '160m (lägst frekvens) ger längst markvågsräckvidd. Absorption ökar med f² → lägre frekvens = längre räckvidd.'
                },
                {
                    id: 'c4-2-e5',
                    type: 'multiple-choice',
                    question: 'Typisk markvågsräckvidd på 160m-bandet över land?',
                    options: [
                        '10-20 km',
                        '100-200 km',
                        '500-1000 km',
                        '2000+ km'
                    ],
                    correct: 1,
                    explanation: '160m ger 100-200 km markvågsräckvidd över land (jordbruksmark). Över saltvatten kan det bli 200-300 km!'
                },
                {
                    id: 'c4-2-e6',
                    type: 'multiple-choice',
                    question: 'Vad står NVIS för?',
                    options: [
                        'New Vertical Incidence System',
                        'Near Vertical Incidence Skywave',
                        'Northern VHF Ionospheric Scatter',
                        'Natural Vertical Ion Signal'
                    ],
                    correct: 1,
                    explanation: 'NVIS = Near Vertical Incidence Skywave. Antennen riktas RAKT UPP för att täcka området runt dig (0-500 km) utan död zon.'
                },
                {
                    id: 'c4-2-e7',
                    type: 'true-false',
                    question: 'NVIS-teknik används för att undvika död zon (skip zone).',
                    correct: true,
                    explanation: 'Ja! NVIS ger vågen rakt upp → reflekteras rakt ner igen → täcker 0-500 km utan död zon. Perfekt för regional nödkommunikation.'
                },
                {
                    id: 'c4-2-e8',
                    type: 'multiple-choice',
                    question: 'Vilket band är bäst för NVIS?',
                    options: [
                        '10m',
                        '20m',
                        '40m och 80m',
                        '2m'
                    ],
                    correct: 2,
                    explanation: '40m och 80m är perfekta för NVIS. 40m fungerar dag och natt, 80m mest nattetid.'
                },
                {
                    id: 'c4-2-e9',
                    type: 'multiple-choice',
                    question: 'Varför når markvågen längre på lägre frekvenser?',
                    options: [
                        'Högre effekt krävs på lägre frekvens',
                        'Absorption ökar med frekvensen (f²-beroende)',
                        'Lägre frekvens har högre hastighet',
                        'Antenner är större på lägre frekvens'
                    ],
                    correct: 1,
                    explanation: 'Absorption i marken ökar med f². Därför: 160m når längre än 80m, som når längre än 40m, etc.'
                },
                {
                    id: 'c4-2-e10',
                    type: 'matching',
                    question: 'Para ihop marktyp med markvågsräckvidd (160m):',
                    pairs: [
                        { left: 'Saltvatten', right: 'Utmärkt - 200-300 km' },
                        { left: 'Våt jordbruksmark', right: 'Bra - 100-150 km' },
                        { left: 'Torr jord/sand', right: 'OK - 50-100 km' },
                        { left: 'Berg/sten', right: 'Dåligt - 30-50 km' }
                    ]
                }
            ]
        },
        {
            id: '4.3',
            title: 'Rymdvåg och jonosfären',
            slug: 'rymdvag',
            description: 'Jonosfärens skikt och HF-DX via reflektion',
            estimatedTime: 30,
            exercises: [
                {
                    id: 'c4-3-e1',
                    type: 'multiple-choice',
                    question: 'Vad är jonosfären?',
                    options: [
                        'Ett magnetfält runt jorden',
                        'Ett skikt av joniserad gas 60-600 km över jordytan',
                        'Atmosfärens yttersta lager',
                        'En typ av antenn'
                    ],
                    correct: 1,
                    explanation: 'Jonosfären är joniserad gas (plasma) 60-600 km höjd. Solens UV-strålning slår loss elektroner → reflekterar radiovågor!'
                },
                {
                    id: 'c4-3-e2',
                    type: 'multiple-choice',
                    question: 'Vilket jonosfärsskikt absorberar HF dagtid?',
                    options: [
                        'A-skiktet',
                        'D-skiktet',
                        'E-skiktet',
                        'F-skiktet'
                    ],
                    correct: 1,
                    explanation: 'D-skiktet (60-90 km) absorberar MF och lägre HF kraftigt dagtid. När solen går ner försvinner D-skiktet → 80m/160m öppnar för DX!'
                },
                {
                    id: 'c4-3-e3',
                    type: 'multiple-choice',
                    question: 'Vilket jonosfärsskikt är viktigast för HF-DX?',
                    options: [
                        'D-skiktet',
                        'E-skiktet',
                        'F-skiktet (F2)',
                        'G-skiktet'
                    ],
                    correct: 2,
                    explanation: 'F-skiktet (140-600 km) har högst elektronkoncentration och reflekterar 20m, 15m, 10m utmärkt. Det är "motorvägen" för HF-DX!'
                },
                {
                    id: 'c4-3-e4',
                    type: 'fill-in-blank',
                    question: 'MUF står för ___ Usable Frequency.',
                    correctAnswers: ['Maximum', 'maximum', 'MAXIMUM'],
                    explanation: 'MUF = Maximum Usable Frequency. Den högsta frekvens som reflekteras för en viss sträcka. Över MUF går signalen rakt igenom.'
                },
                {
                    id: 'c4-3-e5',
                    type: 'true-false',
                    question: 'Man bör använda cirka 80-90% av MUF för bästa resultat.',
                    correct: true,
                    explanation: 'Ja! MUF varierar ± 10-20%. Använd 80-90% av MUF för säkerhetsmarginal och bästa signalstyrka.'
                },
                {
                    id: 'c4-3-e6',
                    type: 'multiple-choice',
                    question: 'Vad är en "död zon" (skip zone)?',
                    options: [
                        'Ett område utan elektricitet',
                        'Området mellan markvågens räckvidd och där rymdvågen landar',
                        'Ett frekvensområde utan trafik',
                        'En region utan stationer'
                    ],
                    correct: 1,
                    explanation: 'Skip zone: markvåg når t.ex. 100 km, rymdvåg landar först vid 500 km → död zon 100-500 km där ingen hör dig!'
                },
                {
                    id: 'c4-3-e7',
                    type: 'multiple-choice',
                    question: 'Vilket band fungerar bäst dagtid för DX?',
                    options: [
                        '160m',
                        '80m',
                        '20m, 15m, 10m',
                        '2m'
                    ],
                    correct: 2,
                    explanation: '20m, 15m, 10m är bäst dagtid (speciellt vid solar max). F-skiktet reflekterar perfekt, D-skiktet dämpar inte dessa högre frekvenser lika mycket.'
                },
                {
                    id: 'c4-3-e8',
                    type: 'multiple-choice',
                    question: 'Vilket band fungerar bäst nattetid för DX?',
                    options: [
                        '10m och 15m',
                        '20m',
                        '40m, 80m, 160m',
                        '2m'
                    ],
                    correct: 2,
                    explanation: '40m, 80m, 160m fungerar bäst nattetid. D-skiktet borta (ingen absorption), F-skiktet reflekterar lägre HF bra.'
                },
                {
                    id: 'c4-3-e9',
                    type: 'multiple-choice',
                    question: 'Vad är grålinjen (gray line)?',
                    options: [
                        'En kabeltyp',
                        'Gränsen mellan dag och natt - utmärkt för DX',
                        'Ett frekvensområde',
                        'En antenntyp'
                    ],
                    correct: 1,
                    explanation: 'Grålinjen = gräns mellan dag/natt (gryning/skymning). D-skiktet borta men F-skiktet kvar = perfekt för DX på 40m/80m!'
                },
                {
                    id: 'c4-3-e10',
                    type: 'matching',
                    question: 'Para ihop jonosfärsskikt med egenskaper:',
                    pairs: [
                        { left: 'D-skikt (60-90 km)', right: 'Absorberar HF dagtid, försvinner nattetid' },
                        { left: 'E-skikt (90-140 km)', right: 'Reflekterar lägre HF, sporadiskt E för VHF' },
                        { left: 'F-skikt (140-600 km)', right: 'Viktigast för HF-DX, högst elektronkonc.' },
                        { left: 'F2-skikt', right: 'Högsta delen av F-skiktet, bäst reflektion' }
                    ]
                }
            ]
        },
        {
            id: '4.4',
            title: 'Siktlinjeförbindelse (VHF/UHF)',
            slug: 'siktlinje',
            description: 'Radiohorisont, antennhöjd och repeatrar',
            estimatedTime: 25,
            exercises: [
                {
                    id: 'c4-4-e1',
                    type: 'fill-in-blank',
                    question: 'Formeln för radiohorisont är: d (km) = ___ × √h (m)',
                    correctAnswers: ['4.12', '4,12', '4.12', '4,12'],
                    explanation: 'Radiohorisont: d (km) = 4,12 × √h (m). Exempel: h=25m ger d = 4,12 × 5 = 20,6 km till horisonten.'
                },
                {
                    id: 'c4-4-e2',
                    type: 'multiple-choice',
                    question: 'Vad är viktigast för VHF/UHF-räckvidd?',
                    options: [
                        'Sändareffekt',
                        'Antennhöjd',
                        'Modulationstyp',
                        'Koaxkabelns längd'
                    ],
                    correct: 1,
                    explanation: 'Antennhöjd är VIKTIGASTE faktorn! 10m högre antenn kan ge mer räckvidd än 10× effekten. VHF/UHF begränsas av jordkrökningen.'
                },
                {
                    id: 'c4-4-e3',
                    type: 'multiple-choice',
                    question: 'Hur långt når en antenn på 100m höjd till horisonten?',
                    options: [
                        '20 km',
                        '31 km',
                        '41 km',
                        '51 km'
                    ],
                    correct: 2,
                    explanation: 'd = 4,12 × √100 = 4,12 × 10 = 41,2 km. Nästan dubbelt längre än en antenn på 25m höjd!'
                },
                {
                    id: 'c4-4-e4',
                    type: 'true-false',
                    question: 'VHF/UHF-signaler kan normalt inte passera genom berg.',
                    correct: true,
                    explanation: 'Ja! VHF/UHF går i rak linje (siktlinje). Berg blockerar effektivt. Därför är antennplacering så viktig.'
                },
                {
                    id: 'c4-4-e5',
                    type: 'multiple-choice',
                    question: 'Vad är en repeater?',
                    options: [
                        'En antenntyp',
                        'Automatisk station som tar emot och sänder ut på olika frekvenser samtidigt',
                        'Ett mätinstrument',
                        'En typ av kabel'
                    ],
                    correct: 1,
                    explanation: 'Repeater: tar emot på ingångsfrekvens, sänder ut på utgångsfrekvens. Placeras högt → ökar räckvidden enormt!'
                },
                {
                    id: 'c4-4-e6',
                    type: 'multiple-choice',
                    question: 'Vad är "shift" på en repeater?',
                    options: [
                        'Skillnaden i effekt',
                        'Skillnaden mellan ingångs- och utgångsfrekvens',
                        'Tidsfördröjning',
                        'Modulationstyp'
                    ],
                    correct: 1,
                    explanation: 'Shift = skillnad mellan input och output. 2m: ±600 kHz. 70cm: ±1,6 MHz. Behövs för att repeatern ska sända och ta emot samtidigt.'
                },
                {
                    id: 'c4-4-e7',
                    type: 'true-false',
                    question: '70cm-bandet (432 MHz) har mer frirumsförlust än 2m-bandet (144 MHz).',
                    correct: true,
                    explanation: 'Ja! 70cm har cirka 9,5 dB MER förlust än 2m. Högre frekvens = kortare räckvidd (behöver cirka 9× mer effekt för samma räckvidd).'
                },
                {
                    id: 'c4-4-e8',
                    type: 'multiple-choice',
                    question: 'Typisk repeater-shift på 2m-bandet?',
                    options: [
                        '±100 kHz',
                        '±600 kHz',
                        '±1,6 MHz',
                        '±5 MHz'
                    ],
                    correct: 1,
                    explanation: '2m-bandet: ±600 kHz shift. Exempel: Output 145,750 MHz → Input 145,150 MHz (−600 kHz).'
                },
                {
                    id: 'c4-4-e9',
                    type: 'true-false',
                    question: 'Dubbelt avstånd kräver cirka 4× effekten för samma signalstyrka på VHF.',
                    correct: true,
                    explanation: 'Ja! Frirumsförlusten ökar med avståndet: 20×log(d). Dubbelt avstånd = +6 dB förlust = 4× effekt behövs.'
                },
                {
                    id: 'c4-4-e10',
                    type: 'matching',
                    question: 'Para ihop faktor med påverkan på VHF/UHF-räckvidd:',
                    pairs: [
                        { left: 'Antennhöjd', right: 'VIKTIGAST - 10m högre = flera km längre' },
                        { left: 'Berg/byggnader', right: 'Blockerar signalen helt' },
                        { left: 'Högre frekvens', right: 'Mer förlust, kortare räckvidd' },
                        { left: 'Vatten/öppet land', right: 'Perfekt - minimal absorption' }
                    ]
                }
            ]
        },
        {
            id: '4.5',
            title: 'Speciella utbredningsfenomen',
            slug: 'speciella',
            description: 'Sporadiskt E, tropoducting, aurora, EME, meteorscatter',
            estimatedTime: 30,
            exercises: [
                {
                    id: 'c4-5-e1',
                    type: 'multiple-choice',
                    question: 'Vad är sporadiskt E?',
                    options: [
                        'Ett permanent jonosfärsskikt',
                        'Intensiva jonmoln i E-skiktet som kan reflektera VHF',
                        'En typ av aurora',
                        'Ett mätinstrument'
                    ],
                    correct: 1,
                    explanation: 'Sporadiskt E: intensiva jonmoln i E-skiktet (90-140 km) som kan reflektera VHF, speciellt 6m-bandet. Vanligast maj-augusti!'
                },
                {
                    id: 'c4-5-e2',
                    type: 'true-false',
                    question: 'Sporadiskt E kan ge VHF-DX på 500-2000 km.',
                    correct: true,
                    explanation: 'Ja! Ett hopp via Es ger 500-2000 km (typiskt 1000-1500 km). Dubbel-hopp kan ge upp till 4000 km på 6m!'
                },
                {
                    id: 'c4-5-e3',
                    type: 'multiple-choice',
                    question: 'Vad är troposfärisk ducting?',
                    options: [
                        'Jonosfärsreflektion',
                        'Temperaturinversion som skapar "vågledare" för VHF/UHF',
                        'Markreflektion',
                        'Satellitkommunikation'
                    ],
                    correct: 1,
                    explanation: 'Tropoducting: temperaturinversion (varm luft över kall) skapar "vågledare" som leder VHF/UHF-signaler 300-1000+ km!'
                },
                {
                    id: 'c4-5-e4',
                    type: 'multiple-choice',
                    question: 'När är tropoducting vanligast?',
                    options: [
                        'Lågtryck och regn',
                        'Högtryck med klart väder och inversion',
                        'Endast vintertid',
                        'Under åskväder'
                    ],
                    correct: 1,
                    explanation: 'Tropoducting: högtryck + klart väder + inversion. Vanligast sommar/höst vid kuster. Tidig morgon och sen kväll bäst!'
                },
                {
                    id: 'c4-5-e5',
                    type: 'multiple-choice',
                    question: 'Hur påverkar aurora HF-banden?',
                    options: [
                        'Förbättrar alltid',
                        'Absorption på högre HF (20m, 15m, 10m)',
                        'Ingen påverkan',
                        'Endast VHF påverkas'
                    ],
                    correct: 1,
                    explanation: 'Aurora absorberar högre HF-band kraftigt (20m, 15m, 10m kan vara "döda"). 40m och 80m fungerar oftast OK.'
                },
                {
                    id: 'c4-5-e6',
                    type: 'true-false',
                    question: 'Aurora kan ge 2m-DX norrut men signalen blir raspig.',
                    correct: true,
                    explanation: 'Ja! 2m reflekteras i auroravorhänget. Ger DX 500-2000 km norrut men signalen blir raspig/förvrängd. CW fungerar bättre än SSB.'
                },
                {
                    id: 'c4-5-e7',
                    type: 'fill-in-blank',
                    question: 'EME står för Earth-___-Earth, även kallat moonbounce.',
                    correctAnswers: ['Moon', 'moon', 'MOON'],
                    explanation: 'EME = Earth-Moon-Earth (moonbounce). Studsa signaler mot månen! Total väg: 760 000 km. Kräver stor station.'
                },
                {
                    id: 'c4-5-e8',
                    type: 'multiple-choice',
                    question: 'Vilket band är vanligast för EME?',
                    options: [
                        '10m',
                        '20m',
                        '2m (144 MHz)',
                        '80m'
                    ],
                    correct: 2,
                    explanation: '2m (144 MHz) är vanligast för EME. Lägre förlust än högre band, men fortfarande cirka 252 dB vägförlust!'
                },
                {
                    id: 'c4-5-e9',
                    type: 'true-false',
                    question: 'Meteorscatter ger korta bursts (sekunder) av VHF-signaler.',
                    correct: true,
                    explanation: 'Ja! Meteoriter brinner upp → joniserade spår (80-120 km höjd) → reflekterar VHF i bråkdel av sekund till minuter.'
                },
                {
                    id: 'c4-5-e10',
                    type: 'matching',
                    question: 'Para ihop fenomen med typisk räckvidd:',
                    pairs: [
                        { left: 'Sporadiskt E (6m)', right: '500-4000 km' },
                        { left: 'Tropoducting (VHF/UHF)', right: '300-1000+ km' },
                        { left: 'Aurora (2m)', right: '500-2000 km norrut' },
                        { left: 'EME (moonbounce)', right: 'Global (via månen)' }
                    ]
                }
            ]
        },
        {
            id: '4.6',
            title: 'Solfläckar och solaktivitet',
            slug: 'solflaeckar',
            description: 'Solcykeln, SSN, solflares och påverkan på HF',
            estimatedTime: 30,
            exercises: [
                {
                    id: 'c4-6-e1',
                    type: 'fill-in-blank',
                    question: 'Solcykeln är cirka ___ år lång.',
                    correctAnswers: ['11', 'elva'],
                    explanation: 'Solcykeln är cirka 11 år lång (varierar 9-14 år). Solfläckstalet varierar från nästan noll (solar min) till över 200 (solar max).'
                },
                {
                    id: 'c4-6-e2',
                    type: 'multiple-choice',
                    question: 'Vad betyder SSN?',
                    options: [
                        'Solar System Number',
                        'Sunspot Number (solfläckstal)',
                        'Signal Strength Number',
                        'Swedish Station Number'
                    ],
                    correct: 1,
                    explanation: 'SSN = Sunspot Number (solfläckstal). Mäter antal solfläckar. Högt SSN (>100) = fantastiska HF-förhållanden!'
                },
                {
                    id: 'c4-6-e3',
                    type: 'multiple-choice',
                    question: 'Hur påverkar högt solfläckstal (solar max) högre HF-band?',
                    options: [
                        'De stänger helt',
                        '10m, 15m, 20m öppnar - fantastiska DX-förhållanden',
                        'Ingen påverkan',
                        'Bara VHF påverkas'
                    ],
                    correct: 1,
                    explanation: 'Högt SSN joniserar jonosfären mer → högre MUF → 10m, 15m, 20m öppnar! 10m kan vara öppet dygnet runt till hela världen.'
                },
                {
                    id: 'c4-6-e4',
                    type: 'multiple-choice',
                    question: 'Vilket band fungerar bäst vid solar minimum (lågt SSN)?',
                    options: [
                        '10m och 15m',
                        '20m',
                        '40m, 80m, 160m',
                        '6m'
                    ],
                    correct: 2,
                    explanation: 'Vid solar min (SSN <30): 10m/15m stängda, 20m begränsat. 40m, 80m, 160m är då dina vänner. 40m = "arbetshästen".'
                },
                {
                    id: 'c4-6-e5',
                    type: 'true-false',
                    question: 'En solflar orsakar HF-blackout på 8 minuter (ljusets hastighet).',
                    correct: true,
                    explanation: 'Ja! Röntgen och UV från flare når jorden på 8 minuter → D-skiktet joniseras kraftigt → SWF (Sudden Wave Fadeout) = HF-blackout i 10 min-2 timmar.'
                },
                {
                    id: 'c4-6-e6',
                    type: 'multiple-choice',
                    question: 'Hur lång tid tar det för CME (Coronal Mass Ejection) att nå jorden?',
                    options: [
                        '8 minuter',
                        '1 timme',
                        '1-3 dagar',
                        '1 vecka'
                    ],
                    correct: 2,
                    explanation: 'CME (laddade partiklar) når jorden 1-3 dagar efter flare → geomagnetisk storm → aurora, HF-absorption, kan vara radio-blackout i dagar.'
                },
                {
                    id: 'c4-6-e7',
                    type: 'multiple-choice',
                    question: 'Vad mäter K-index?',
                    options: [
                        'Solfläckstal',
                        'Geomagnetisk aktivitet (aurora-sannolikhet)',
                        'Signalstyrka',
                        'Antennhöjd'
                    ],
                    correct: 1,
                    explanation: 'K-index (0-9) mäter geomagnetisk aktivitet. K > 4 = ökad aurora-sannolikhet och HF-störningar. K 7-9 = svår storm!'
                },
                {
                    id: 'c4-6-e8',
                    type: 'true-false',
                    question: 'Grålinjen (gryning/skymning) är bästa tiden för HF-DX.',
                    correct: true,
                    explanation: 'Ja! Grålinjen: D-skiktet borta men F-skiktet kvar = perfekt för DX! Speciellt bra på 40m och 80m.'
                },
                {
                    id: 'c4-6-e9',
                    type: 'multiple-choice',
                    question: 'Vid vilket K-index förväntas HF-störningar?',
                    options: [
                        'K < 2',
                        'K 2-3',
                        'K > 4',
                        'K har ingen påverkan'
                    ],
                    correct: 2,
                    explanation: 'K > 4 innebär geomagnetisk störning → aurora möjlig, HF-absorption trolig (speciellt högre band). K 0-3 = normalt.'
                },
                {
                    id: 'c4-6-e10',
                    type: 'matching',
                    question: 'Para ihop solcykelfas med HF-förhållanden:',
                    pairs: [
                        { left: 'Solar max (SSN >100)', right: '10m öppet hela dagen - fantastiskt!' },
                        { left: 'Solar min (SSN <30)', right: 'Bara 40m, 80m, 160m fungerar bra' },
                        { left: 'Solflar (X-klass)', right: 'HF-blackout 8 min efter, SWF' },
                        { left: 'Geomagnetisk storm', right: 'Aurora + HF-absorption 1-3 dagar efter CME' }
                    ]
                }
            ]
        }
    ]
},
// ============================================
// KAPITEL 5: MÄTINSTRUMENT
// ============================================
{
    id:5,
    number: 5,
    title: 'Mätinstrument',
    slug: 'kapitel-5-matinstrument',
    icon: '📏',
    description: 'Multimeter, oscilloskop, SWR-meter, frekvensräknare och andra viktiga mätinstrument',
    estimatedTime: '2-3 timmar',
    questionCount: 60,
    subchapters: [
        {
            id: '5.1',
            title: 'Multimeter',
            slug: 'multimeter',
            description: 'Voltmeter, amperemeter, ohmmeter och grundläggande mätteknik',
            estimatedTime: 45,
            exercises: [
                {
                    id: 'c5-1-e1',
                    type: 'multiple-choice',
                    question: 'Hur ska en voltmeter kopplas för att mäta spänning?',
                    options: [
                        'I serie med komponenten',
                        'Parallellt med komponenten',
                        'Via en transformator',
                        'Spelar ingen roll'
                    ],
                    correct: 1,
                    explanation: 'Voltmeter kopplas PARALLELLT med det som mäts. Hög ingångsimpedans (10 MΩ) gör att den inte påverkar kretsen.'
                },
                {
                    id: 'c5-1-e2',
                    type: 'multiple-choice',
                    question: 'Hur ska en amperemeter kopplas för att mäta ström?',
                    options: [
                        'Parallellt med komponenten',
                        'I serie med komponenten - strömmen måste passera genom',
                        'Via kondensator',
                        'Direkt över batteriet'
                    ],
                    correct: 1,
                    explanation: 'Amperemeter kopplas I SERIE så strömmen passerar genom den. Låg inre resistans för att inte bromsa strömmen.'
                },
                {
                    id: 'c5-1-e3',
                    type: 'true-false',
                    question: 'Om du kopplar en amperemeter parallellt över ett batteri blir det kortslutning.',
                    correct: true,
                    explanation: 'JA! Detta är MYCKET farligt! Amperemeter har låg resistans → kortslutning → bränd säkring, kan förstöra mätare och batteri.'
                },
                {
                    id: 'c5-1-e4',
                    type: 'multiple-choice',
                    question: 'Varför måste kretsen vara strömlös när du mäter resistans?',
                    options: [
                        'För mätarens säkerhet',
                        'Extern spänning ger helt fel värde + kan skada mätaren',
                        'Det är inte nödvändigt',
                        'Batteriet i mätaren tar slut snabbare'
                    ],
                    correct: 1,
                    explanation: 'Ohmmetern skickar egen ström för att mäta. Extern spänning stör mätningen totalt och kan skada mätaren. Koppla ALLTID från spänning först!'
                },
                {
                    id: 'c5-1-e5',
                    type: 'fill-in-blank',
                    question: 'En voltmeter bör ha ___ ingångsimpedans för att inte påverka kretsen.',
                    correctAnswers: ['hög', '10 MΩ', '10MΩ', '10 megaohm'],
                    explanation: 'Hög impedans (typiskt 10 MΩ) gör att voltmetern drar minimal ström och inte "laddar" kretsen den mäter.'
                },
                {
                    id: 'c5-1-e6',
                    type: 'multiple-choice',
                    question: 'Du mäter en 1kΩ resistor i en krets utan att lossa den. Multimetern visar 500Ω. Vad är problemet?',
                    options: [
                        'Resistorn är trasig',
                        'Multimetern är felkalibrerad',
                        'Parallella komponenter ger lägre totalt värde',
                        'För låg batterispänning i multimetern'
                    ],
                    correct: 2,
                    explanation: 'Parallella vägar ger LÄGRE total resistans! 1kΩ parallellt med 1kΩ = 500Ω. Lossa alltid komponenten för korrekt mätning.'
                },
                {
                    id: 'c5-1-e7',
                    type: 'multiple-choice',
                    question: 'Vad visar kontinuitetstestet på multimetern?',
                    options: [
                        'Exakt resistansvärde',
                        'Piper om resistans <50Ω (kontakt finns)',
                        'Spänning',
                        'Kapacitans'
                    ],
                    correct: 1,
                    explanation: 'Kontinuitetstest piper vid låg resistans (<50Ω). Perfekt för att snabbt testa kablar, säkringar, kontakter. Slipper titta på displayen!'
                },
                {
                    id: 'c5-1-e8',
                    type: 'true-false',
                    question: 'En amperemeter har hög inre resistans för att inte påverka kretsen.',
                    correct: false,
                    explanation: 'FALSKT! Amperemeter har LÅG inre resistans för att inte bromsa strömmen. Voltmeter har HÖG impedans.'
                },
                {
                    id: 'c5-1-e9',
                    type: 'multiple-choice',
                    question: 'Vad används diodtestet på multimetern till?',
                    options: [
                        'Mäta resistans',
                        'Visa spänningsfallet över diod i framriktningen (0,5-0,7V kisel)',
                        'Mäta frekvens',
                        'Testa kondensatorer'
                    ],
                    correct: 1,
                    explanation: 'Diodtest visar spänningsfallet: kiseldiod 0,5-0,7V, LED 1,8-3,5V. Backriktning ska visa "OL". LED lyser svagt vid test!'
                },
                {
                    id: 'c5-1-e10',
                    type: 'matching',
                    question: 'Para ihop multimeterfunktion med koppling:',
                    pairs: [
                        { left: 'Voltmeter', right: 'Parallellt, hög impedans (10 MΩ)' },
                        { left: 'Amperemeter', right: 'I serie, låg impedans' },
                        { left: 'Ohmmeter', right: 'Krets strömlös, lossa komponent' },
                        { left: 'Kontinuitetstest', right: 'Piper vid <50Ω (test kablar/säkringar)' }
                    ]
                }
            ]
        },
        {
            id: '5.2',
            title: 'SWR-meter och effektmätare',
            slug: 'swr-meter',
            description: 'Stående vågförhållande, effektmätning och antennanpassning',
            estimatedTime: 40,
            exercises: [
                {
                    id: 'c5-2-e1',
                    type: 'fill-in-blank',
                    question: 'SWR står för Standing Wave Ratio, på svenska ___ ___.',
                    correctAnswers: ['stående vågförhållande', 'ståendevågförhållande'],
                    explanation: 'SWR = Stående Vågförhållande. Mäter hur väl antennen är anpassad till sändaren. Perfekt = 1:1.'
                },
                {
                    id: 'c5-2-e2',
                    type: 'multiple-choice',
                    question: 'Vad betyder SWR 1:1?',
                    options: [
                        'Dålig anpassning',
                        'Perfekt anpassning - ingen reflektion',
                        'Hög effektförlust',
                        'Antennen är för kort'
                    ],
                    correct: 1,
                    explanation: 'SWR 1:1 = perfekt! All effekt når antennen, ingen reflekteras. I praktiken är 1,1:1 eller 1,2:1 utmärkt.'
                },
                {
                    id: 'c5-2-e3',
                    type: 'multiple-choice',
                    question: 'Vid vilket SWR-värde börjar det bli problem?',
                    options: [
                        'SWR 1,5:1',
                        'SWR 2:1',
                        'SWR 3:1 eller högre',
                        'SWR spelar ingen roll'
                    ],
                    correct: 2,
                    explanation: 'SWR >3:1 = Problem! Risk för slutstegsskada, stora förluster. <1,5:1 = utmärkt, 1,5-2:1 = bra, 2-3:1 = OK men kan förbättras.'
                },
                {
                    id: 'c5-2-e4',
                    type: 'true-false',
                    question: 'Högt SWR kan skada slutsteget genom reflekterad effekt som värmer upp transistorer.',
                    correct: true,
                    explanation: 'JA! Reflekterad effekt → värme i slutsteget → risk för överhettning och förstöring. Moderna sändare går i skydd vid högt SWR.'
                },
                {
                    id: 'c5-2-e5',
                    type: 'multiple-choice',
                    question: 'Hur mäter du SWR korrekt?',
                    options: [
                        'Växla till FWD → sänd → justera CAL till SET → växla REF → läs SWR',
                        'Växla till REF direkt → sänd → läs av',
                        'Sänd först, sedan anslut SWR-meter',
                        'Det spelar ingen roll'
                    ],
                    correct: 0,
                    explanation: 'Korrekt: 1) FWD-läge 2) Sänd 3) Justera CAL till SET 4) Växla REF 5) Sänd igen 6) Läs SWR. Kalibrera ALLTID först!'
                },
                {
                    id: 'c5-2-e6',
                    type: 'multiple-choice',
                    question: 'Vad är PEP (Peak Envelope Power)?',
                    options: [
                        'Medeleffekt',
                        'Maximal effekt vid topparna i SSB-modulationen',
                        'Kontinuerlig bärvågseffekt',
                        'Förlusteffekt'
                    ],
                    correct: 1,
                    explanation: 'PEP = toppeffekt i SSB. "100W PEP" betyder 100W vid topparna när du talar. Medeleffekt är 25-40% av PEP vid normal tal.'
                },
                {
                    id: 'c5-2-e7',
                    type: 'true-false',
                    question: 'Vid SWR 2:1 reflekteras cirka 11% av effekten.',
                    correct: true,
                    explanation: 'Sant! SWR 2:1 → 11% reflekterad effekt. SWR 1,5:1 → 4%, SWR 3:1 → 25%. Högre SWR = mer förlust.'
                },
                {
                    id: 'c5-2-e8',
                    type: 'multiple-choice',
                    question: 'Varför är TUNE-funktionen farlig att hålla inne länge?',
                    options: [
                        'Den sliter på mikrofonen',
                        'Full kontinuerlig effekt → överhettning av slutsteg',
                        'Den stör grannarna',
                        'Den är inte farlig'
                    ],
                    correct: 1,
                    explanation: 'TUNE ger FULL kontinuerlig bärvåg (inte som SSB). 100W PEP SSB ≈ 30W medel, men TUNE = 100W konstant → MYCKET värme. Max 10 sek!'
                },
                {
                    id: 'c5-2-e9',
                    type: 'fill-in-blank',
                    question: 'En SWR-meter kopplas mellan ___ och ___.',
                    correctAnswers: ['sändare antenn', 'sändaren antennen', 'TX antenn', 'radio antenn'],
                    explanation: 'SWR-meter: Sändare → SWR-meter (TX-sida) → SWR-meter (ANT-sida) → Antenn. Fel ordning ger felaktig avläsning!'
                },
                {
                    id: 'c5-2-e10',
                    type: 'matching',
                    question: 'Para ihop SWR-värde med status:',
                    pairs: [
                        { left: 'SWR 1,0-1,2:1', right: 'Perfekt - utmärkt anpassning' },
                        { left: 'SWR 1,5:1', right: 'Bra - acceptabelt för de flesta' },
                        { left: 'SWR 2,5:1', right: 'Gräns - slutsteget kan begränsa' },
                        { left: 'SWR >3:1', right: 'Problem - risk för skada, måste åtgärdas' }
                    ]
                }
            ]
        },
        {
            id: '5.3',
            title: 'Oscilloskop',
            slug: 'oscilloskop',
            description: 'Se signalernas form, mäta frekvens, amplitud och distorsion',
            estimatedTime: 40,
            exercises: [
                {
                    id: 'c5-3-e1',
                    type: 'multiple-choice',
                    question: 'Vad visar oscilloskopets Y-axel?',
                    options: [
                        'Tid',
                        'Frekvens',
                        'Spänning',
                        'Effekt'
                    ],
                    correct: 2,
                    explanation: 'Y-axel (vertikal) = Spänning, X-axel (horisontell) = Tid. Oscilloskopet visar hur spänningen varierar över tiden.'
                },
                {
                    id: 'c5-3-e2',
                    type: 'multiple-choice',
                    question: 'Varför behöver man trigger-funktionen på oscilloskopet?',
                    options: [
                        'För att spara batteri',
                        'För att synkronisera och "frysa" bilden så den står still',
                        'För att mäta effekt',
                        'För att öka förstärkningen'
                    ],
                    correct: 1,
                    explanation: 'Trigger startar svepet vid samma punkt varje gång → bilden "fryser" och står still. Utan trigger rullar bilden och är oläsbar.'
                },
                {
                    id: 'c5-3-e3',
                    type: 'multiple-choice',
                    question: 'Vad är skillnaden mellan 1:1 och 10:1 mätprob?',
                    options: [
                        'Ingen skillnad',
                        '10:1 har 10× högre resistans och 10× lägre kapacitans - bättre för RF',
                        '1:1 är bättre för alla ändamål',
                        '10:1 kräver ingen kompensation'
                    ],
                    correct: 1,
                    explanation: '10:1 prob: Högre impedans (10 MΩ), lägre kapacitans (10-15 pF vs 100 pF). Viktigt för RF! Men måste multiplicera avläst värde ×10.'
                },
                {
                    id: 'c5-3-e4',
                    type: 'true-false',
                    question: 'Probkompensation måste göras varje gång du byter oscilloskop eller prob.',
                    correct: true,
                    explanation: 'SANT! Probet måste trimmas för exakt 10:1-delning. Anslut till CAL-utgång, trimma tills fyrkantsvågen har raka hörn (ej rundade eller spikar).'
                },
                {
                    id: 'c5-3-e5',
                    type: 'multiple-choice',
                    question: 'Du ser en sinusvåg med period 1 ms. Vad är frekvensen?',
                    options: [
                        '1 Hz',
                        '100 Hz',
                        '1000 Hz (1 kHz)',
                        '10 kHz'
                    ],
                    correct: 2,
                    explanation: 'f = 1/T. Period T = 1 ms = 0,001 s → f = 1/0,001 = 1000 Hz = 1 kHz. Om T = 1 µs → f = 1 MHz.'
                },
                {
                    id: 'c5-3-e6',
                    type: 'multiple-choice',
                    question: 'Vad är topp-till-topp-spänning (Vpp)?',
                    options: [
                        'Spänning från 0V till toppen',
                        'Spänning från lägsta till högsta punkt',
                        'RMS-värde',
                        'Medelspänning'
                    ],
                    correct: 1,
                    explanation: 'Vpp = hela "höjden" av vågen från dal till topp. Om vågen går ±5V så är Vpp = 10V. Mest användbara måttet för oscilloskop.'
                },
                {
                    id: 'c5-3-e7',
                    type: 'true-false',
                    question: 'Ett oscilloskop kan upptäcka distorsion som multimeter missar helt.',
                    correct: true,
                    explanation: 'SANT! Multimeter visar bara ett värde. Oscilloskop visar vågformen → ser distorsion, clipping, brus, störningar som är osynliga för multimeter.'
                },
                {
                    id: 'c5-3-e8',
                    type: 'multiple-choice',
                    question: 'Varför påverkar mätprobet högfrekventa kretsar?',
                    options: [
                        'Det är för tungt',
                        'Probets kapacitans (10-100 pF) ändrar kretsens egenskaper',
                        'Det har för hög resistans',
                        'Det påverkar inte alls'
                    ],
                    correct: 1,
                    explanation: 'Kapacitansen (10-100 pF) är stor vid RF-frekvenser! Kan ändra VFO-frekvens flera kHz. Därför: använd 10:1 prob (10 pF vs 100 pF).'
                },
                {
                    id: 'c5-3-e9',
                    type: 'multiple-choice',
                    question: 'Vad visar ett digitalt oscilloskop (DSO) som analogt inte kan?',
                    options: [
                        'Spänning',
                        'Frysa/lagra vågformer, automatiska mätningar, FFT',
                        'Frekvens',
                        'Tid'
                    ],
                    correct: 1,
                    explanation: 'DSO kan: frysa bilden, lagra, automatiska mätningar, FFT, USB-export. Analogt: verklig realtid, ser alla transienter. Båda har fördelar!'
                },
                {
                    id: 'c5-3-e10',
                    type: 'matching',
                    question: 'Para ihop oscilloskop-parameter med funktion:',
                    pairs: [
                        { left: 'V/div (vertikal)', right: 'Spänningsskala - hur "hög" vågen ser ut' },
                        { left: 's/div (horisontell)', right: 'Tidsskala - hur "bred" vågen är' },
                        { left: 'Trigger', right: 'Synkroniserar bilden så den står still' },
                        { left: '10:1 prob', right: 'Lägre kapacitans, bättre för RF' }
                    ]
                }
            ]
        },
        {
            id: '5.4',
            title: 'Frekvensmätning',
            slug: 'frekvens',
            description: 'Frekvensräknare, noggrannhet och lagkrav på frekvenstolerans',
            estimatedTime: 30,
            exercises: [
                {
                    id: 'c5-4-e1',
                    type: 'multiple-choice',
                    question: 'Hur fungerar en frekvensräknare?',
                    options: [
                        'Mäter spänning',
                        'Räknar antal svängningar under en bestämd tid (grindtid)',
                        'Mäter effekt',
                        'Mäter impedans'
                    ],
                    correct: 1,
                    explanation: 'Frekvensräknare: Räkna pulser under grindtid (t.ex. 1 sek). 14 200 000 pulser/1 sek = 14,200 MHz. Längre grindtid = fler decimaler.'
                },
                {
                    id: 'c5-4-e2',
                    type: 'fill-in-blank',
                    question: 'För amatörradio bör frekvensräknarens noggrannhet vara minst ±___ ppm.',
                    correctAnswers: ['1', '1 ppm'],
                    explanation: 'Minst ±1 ppm för amatörradio. ±0,5 ppm är bättre. Billiga räknare: ±10 ppm (kan vara utanför lag för VHF!). TCXO/OCXO ger bäst noggrannhet.'
                },
                {
                    id: 'c5-4-e3',
                    type: 'multiple-choice',
                    question: 'Vad är lagkravet för frekvenstolerans på VHF/UHF (>30 MHz)?',
                    options: [
                        '±100 ppm',
                        '±20 ppm',
                        '±5 ppm (±0,0005%)',
                        '±1 ppm'
                    ],
                    correct: 2,
                    explanation: 'VHF/UHF (>30 MHz): ±5 ppm. HF (<30 MHz): ±20 ppm. Vid 144 MHz: Max ±720 Hz fel. Moderna radioapparater klarar detta lätt!'
                },
                {
                    id: 'c5-4-e4',
                    type: 'true-false',
                    question: 'En längre grindtid ger högre upplösning (fler decimaler) men långsammare uppdatering.',
                    correct: true,
                    explanation: 'SANT! Grindtid 1 sek = ±1 Hz upplösning. Grindtid 10 sek = ±0,1 Hz men uppdateras bara var 10:e sekund. Standard: 1 sek.'
                },
                {
                    id: 'c5-4-e5',
                    type: 'multiple-choice',
                    question: 'Varför ska du använda dämpare mellan sändare och frekvensräknare?',
                    options: [
                        'För bättre noggrannhet',
                        'För att skydda räknarens känsliga ingång från hög effekt',
                        'För lägre frekvens',
                        'Det behövs inte'
                    ],
                    correct: 1,
                    explanation: 'Sändare kan ge 100W! Räknaren klarar kanske 10 mW. -40 dB dämpare: 100W → 10 mW (säkert). Utan dämpare: förstörd räknare!'
                },
                {
                    id: 'c5-4-e6',
                    type: 'multiple-choice',
                    question: 'Vad är en absorption wavemeter (absorberande frekvensmätare)?',
                    options: [
                        'En digital frekvensräknare',
                        'En passiv LC-krets med mätare som resonerar vid rätt frekvens',
                        'En effektmätare',
                        'En SWR-meter'
                    ],
                    correct: 1,
                    explanation: 'Passiv (inget batteri!) LC-krets. Justera kondensator tills mätaren visar max → resonans. Noggrannhet ±1-5% men perfekt för snabba kontroller.'
                },
                {
                    id: 'c5-4-e7',
                    type: 'true-false',
                    question: 'En frekvensräknare kan visa fel frekvens om den triggar på en harmonisk istället för grundtonen.',
                    correct: true,
                    explanation: 'SANT! Om 2:a harmoniska (14 MHz) är starkare än grundton (7 MHz) kan räknaren visa 14 MHz. Lösning: Lågpassfilter eller dämpare.'
                },
                {
                    id: 'c5-4-e8',
                    type: 'multiple-choice',
                    question: 'Vad betyder TCXO i en frekvensräknare?',
                    options: [
                        'Total Capacity eXtended Oscillator',
                        'Temperature Compensated Crystal Oscillator',
                        'Time Controlled Xenon Oscillator',
                        'Test Calibrated eXternal Oscillator'
                    ],
                    correct: 1,
                    explanation: 'TCXO = Temperature Compensated Crystal Oscillator. Kompenserar för temperaturvariationer → stabil frekvens. Bättre än enkel kristall!'
                },
                {
                    id: 'c5-4-e9',
                    type: 'fill-in-blank',
                    question: 'Vid 144 MHz med ±5 ppm tolerans är maximal tillåten frekvensfelet ±___ Hz.',
                    correctAnswers: ['720', '720 Hz'],
                    explanation: '144 MHz × 5 ppm = 144 000 000 × 0,000005 = 720 Hz. Inom ±720 Hz är lagligt. Moderna radioapparater har ±1-2 ppm (±144-288 Hz).'
                },
                {
                    id: 'c5-4-e10',
                    type: 'matching',
                    question: 'Para ihop frekvensräknar-spec med betydelse:',
                    pairs: [
                        { left: '±1 ppm noggrannhet', right: 'Bra för amatörradio, inom lagkrav' },
                        { left: 'Grindtid 1 sek', right: '±1 Hz upplösning, standard' },
                        { left: 'TCXO', right: 'Temperaturkompenserad, stabil' },
                        { left: '-30 dB dämpare', right: 'Skyddar räknare från hög TX-effekt' }
                    ]
                }
            ]
        },
        {
            id: '5.5',
            title: 'Signalgeneratorer',
            slug: 'signalgenerator',
            description: 'RF-generator, funktionsgenerator och testsignaler',
            estimatedTime: 30,
            exercises: [
                {
                    id: 'c5-5-e1',
                    type: 'multiple-choice',
                    question: 'Vad är skillnaden mellan RF-generator och funktionsgenerator?',
                    options: [
                        'Ingen skillnad',
                        'RF-generator: kHz-GHz (radio), Funktionsgenerator: Hz-MHz (audio/LF)',
                        'RF är billigare',
                        'Funktionsgenerator kan bara fyrkant'
                    ],
                    correct: 1,
                    explanation: 'RF-generator: 100 kHz-3 GHz för RX-test. Funktionsgenerator: 0,1 Hz-10 MHz för audio, sinus/fyrkant/triangel. Olika användning!'
                },
                {
                    id: 'c5-5-e2',
                    type: 'fill-in-blank',
                    question: 'MDS står för Minimum Detectable Signal och är den ___ signal mottagaren kan höra.',
                    correctAnswers: ['svagaste', 'minsta', 'lägsta'],
                    explanation: 'MDS = Minimum Detectable Signal = lägsta signal som mottagaren kan detektera i bruset. God HF-mottagare: MDS -120 dBm eller bättre.'
                },
                {
                    id: 'c5-5-e3',
                    type: 'multiple-choice',
                    question: 'Vad är S9 i dBm enligt standard?',
                    options: [
                        '-93 dBm',
                        '-83 dBm',
                        '-73 dBm',
                        '-63 dBm'
                    ],
                    correct: 2,
                    explanation: 'S9 = -73 dBm (50 µV över 50Ω). Varje S-enhet = 6 dB. S8 = -79 dBm, S7 = -85 dBm. Över S9: +10 dB, +20 dB etc.'
                },
                {
                    id: 'c5-5-e4',
                    type: 'true-false',
                    question: 'Varje S-enhet på S-metern motsvarar 6 dB skillnad i signalstyrka.',
                    correct: true,
                    explanation: 'SANT! 6 dB = 4× effekt. S9 till S8 = 6 dB svagare. Men många S-metrar är okalibrerade och visar fel värden.'
                },
                {
                    id: 'c5-5-e5',
                    type: 'multiple-choice',
                    question: 'Varför behöver du dämpare mellan RF-generator och mottagare?',
                    options: [
                        'För bättre frekvens',
                        'För att inte överbelasta mottagaren med för stark signal',
                        'För lägre SWR',
                        'Det behövs inte'
                    ],
                    correct: 1,
                    explanation: 'RF-generator kan ge -10 dBm eller mer. Mottagaren testas bäst med svaga signaler (-100 dBm). -20 dB till -40 dB dämpare ger realistisk nivå.'
                },
                {
                    id: 'c5-5-e6',
                    type: 'multiple-choice',
                    question: 'Vilka vågformer kan en funktionsgenerator typiskt generera?',
                    options: [
                        'Bara sinus',
                        'Sinus, fyrkant, triangel, sågtand, puls',
                        'Bara fyrkant',
                        'Bara RF-signaler'
                    ],
                    correct: 1,
                    explanation: 'Funktionsgenerator: Sinus (audio), fyrkant (digitalt), triangel, sågtand, puls. Vissa har också brus. Perfekt för audio-test!'
                },
                {
                    id: 'c5-5-e7',
                    type: 'true-false',
                    question: 'En markeringsgenerator använder kristall och övertoner för att täcka brett frekvensområde.',
                    correct: true,
                    explanation: 'SANT! 100 kHz kristall → fyrkantsvåg → övertoner vid 200, 300, 400... kHz. Täcker stort område trots en kristall. Används för kalibrering.'
                },
                {
                    id: 'c5-5-e8',
                    type: 'multiple-choice',
                    question: 'Vad testar du med en funktionsgenerator och oscilloskop?',
                    options: [
                        'Antennanpassning',
                        'Audioförstärkares frekvensrespons och distorsion',
                        'SWR',
                        'Kabellängd'
                    ],
                    correct: 1,
                    explanation: 'Sinus från funktionsgen → förstärkare → oscilloskop visar utgång. Svepa frekvenser → se frekvensrespons. Se distorsion när den clippar.'
                },
                {
                    id: 'c5-5-e9',
                    type: 'multiple-choice',
                    question: 'Vad betyder AM 30% modulering på en RF-generator?',
                    options: [
                        'Effekten varierar 30%',
                        'Amplituden varierar ±30% runt bärvågen',
                        'Frekvensen ändras 30%',
                        'SWR är 1,3:1'
                    ],
                    correct: 1,
                    explanation: 'AM 30% = bärvågsamplituden varierar ±30%. Används för att testa AM-mottagare. Typisk testnivå: 30% eller 50% modulering med 1 kHz ton.'
                },
                {
                    id: 'c5-5-e10',
                    type: 'matching',
                    question: 'Para ihop generator-typ med användning:',
                    pairs: [
                        { left: 'RF-generator', right: 'Testa mottagarkänslighet, kalibrera S-meter' },
                        { left: 'Funktionsgenerator', right: 'Testa audioförstärkare, frekvensrespons' },
                        { left: 'Markeringsgenerator', right: 'Kalibrera VFO-skala med kristall + övertoner' },
                        { left: 'Arbitrary waveform', right: 'Skapa komplexa, programmerade vågformer' }
                    ]
                }
            ]
        },
        {
            id: '5.6',
            title: 'Dummyload och dämpare',
            slug: 'dummyload',
            description: 'Konstlast för säker testning och dämpare för signalreducering',
            estimatedTime: 25,
            exercises: [
                {
                    id: 'c5-6-e1',
                    type: 'multiple-choice',
                    question: 'Vad är en dummyload?',
                    options: [
                        'En testantenn',
                        'En 50Ω resistiv belastning som absorberar effekt utan att stråla',
                        'En förstärkare',
                        'Ett filter'
                    ],
                    correct: 1,
                    explanation: 'Dummyload = 50Ω resistor som absorberar RF → värme. Ingen utstrålning! Perfekt SWR 1:1. MÅSTE användas vid sändartester!'
                },
                {
                    id: 'c5-6-e2',
                    type: 'true-false',
                    question: 'Det är olagligt och störande att testa sändare direkt i antenn istället för dummyload.',
                    correct: true,
                    explanation: 'SANT! Tester i antenn → störningar överallt, kan nå grannar/flygradio/TV. Lagbrott! Använd ALLTID dummyload för säker, laglig testning.'
                },
                {
                    id: 'c5-6-e3',
                    type: 'multiple-choice',
                    question: 'Vad händer med RF-effekten i en dummyload?',
                    options: [
                        'Den strålas ut som radio',
                        'Den blir värme som måste kylas bort',
                        'Den reflekteras tillbaka',
                        'Den försvinner magiskt'
                    ],
                    correct: 1,
                    explanation: 'All RF-effekt → värme! 100W sändare → 100W värme i dummyload. Måste kylas (luft, olja, vatten). Utan kylning: överhettning och brand!'
                },
                {
                    id: 'c5-6-e4',
                    type: 'multiple-choice',
                    question: 'Vilken typ av dummyload klarar högst kontinuerlig effekt?',
                    options: [
                        'Luftkyld',
                        'Torr keramisk',
                        'Oljekyld',
                        'Vätskekyl (vatten)'
                    ],
                    correct: 3,
                    explanation: 'Vätskekyl klarar mest: 500W-5kW+. Oljekyld: 100-500W. Luftkyld: 10-150W. Torr keramisk: 25-100W kort tid. Allt beror på kylningen!'
                },
                {
                    id: 'c5-6-e5',
                    type: 'fill-in-blank',
                    question: 'En dummyload för amatörradio ska ha impedans på ___ Ω.',
                    correctAnswers: ['50', '50Ω', 'femtio'],
                    explanation: '50Ω är standard för amatörradio (vissa TV-system använder 75Ω). 50Ω ger SWR 1:1 med sändaren → perfekt belastning.'
                },
                {
                    id: 'c5-6-e6',
                    type: 'multiple-choice',
                    question: 'Vad gör en -20 dB dämpare med effekten?',
                    options: [
                        'Halverar den',
                        'Reducerar till 1/10',
                        'Reducerar till 1/100',
                        'Ökar den'
                    ],
                    correct: 2,
                    explanation: '-20 dB = ÷100 effekt. 100W → 1W. -30 dB = ÷1000. -10 dB = ÷10. -3 dB = halvering. Viktigt för att skydda instrument!'
                },
                {
                    id: 'c5-6-e7',
                    type: 'true-false',
                    question: 'En dämpare ändrar impedansen mellan sändare och last.',
                    correct: false,
                    explanation: 'FALSKT! Bra dämpare har 50Ω in OCH 50Ω ut. Impedansen förblir samma, bara signalnivån sänks. Pi- och T-dämpare ger perfekt matchning.'
                },
                {
                    id: 'c5-6-e8',
                    type: 'multiple-choice',
                    question: 'Hur många 5W resistorer behövs parallellt för att göra 50Ω 40W dummyload från 390Ω resistorer?',
                    options: [
                        '2 st',
                        '4 st',
                        '8 st',
                        '16 st'
                    ],
                    correct: 2,
                    explanation: '8 st 390Ω parallellt: 390/8 = 48,75Ω ≈ 50Ω. Effekt: 8 × 5W = 40W. Enkel hembyggd dummyload för QRP och medeleffekt!'
                },
                {
                    id: 'c5-6-e9',
                    type: 'multiple-choice',
                    question: 'Varför ska dummyload ha lågt SWR över brett frekvensområde?',
                    options: [
                        'För att den ska se cool ut',
                        'För att ge perfekt 50Ω belastning på alla band',
                        'För högre effekt',
                        'Det spelar ingen roll'
                    ],
                    correct: 1,
                    explanation: 'Vid högre frekvenser får resistorer reaktans (induktans/kapacitans). Bra dummyload: SWR <1,2:1 från HF till VHF. Dålig: SWR ökar vid VHF.'
                },
                {
                    id: 'c5-6-e10',
                    type: 'matching',
                    question: 'Para ihop dämpning med effektreduktion:',
                    pairs: [
                        { left: '-3 dB', right: '÷2 (hälften)' },
                        { left: '-10 dB', right: '÷10' },
                        { left: '-20 dB', right: '÷100' },
                        { left: '-30 dB', right: '÷1000' }
                    ]
                }
            ]
        },
        {
            id: '5.7',
            title: 'Antennanalysator',
            slug: 'antennanalysator',
            description: 'Mäta impedans, SWR, resonansfrekvens och kablar',
            estimatedTime: 30,
            exercises: [
                {
                    id: 'c5-7-e1',
                    type: 'multiple-choice',
                    question: 'Vad är den största fördelen med antennanalysator jämfört med vanlig SWR-meter?',
                    options: [
                        'Den är billigare',
                        'Sweep hela bandet på sekunder, egen RF-källa, ingen sändning behövs',
                        'Den är mindre',
                        'Den kräver inget batteri'
                    ],
                    correct: 1,
                    explanation: 'Antennanalysator: SWEEP hela bandet → ser hela SWR-kurvan direkt! Ingen sändning behövs. Sparar TIMMAR vid antenntrimning!'
                },
                {
                    id: 'c5-7-e2',
                    type: 'true-false',
                    question: 'En antennanalysator kan visa både resistiv (R) och reaktiv (X) del av impedansen.',
                    correct: true,
                    explanation: 'SANT! Visar impedans som R + jX. Exempel: 48 + j12Ω = 48Ω resistans, 12Ω induktiv reaktans. Vet då exakt vad som ska justeras!'
                },
                {
                    id: 'c5-7-e3',
                    type: 'multiple-choice',
                    question: 'Vad betyder impedans 50 + j15 Ω?',
                    options: [
                        'Perfekt anpassning',
                        'Resistans 50Ω, induktiv reaktans 15Ω (antennen för lång)',
                        'Resistans 50Ω, kapacitiv reaktans',
                        'SWR 15:1'
                    ],
                    correct: 1,
                    explanation: '50 + j15Ω: Resistans OK (50Ω), men +jX = induktiv = för lång antenn. Lösning: Förkorta! Om -jX = kapacitiv = för kort → förlänga.'
                },
                {
                    id: 'c5-7-e4',
                    type: 'multiple-choice',
                    question: 'En dipol visar lägst SWR vid 6,95 MHz men du vill ha 7,1 MHz. Vad ska du göra?',
                    options: [
                        'Förlänga antennen',
                        'Förkorta antennen - resonans för låg',
                        'Byta kabel',
                        'Ingenting'
                    ],
                    correct: 1,
                    explanation: 'Resonans 6,95 MHz < target 7,1 MHz → antennen för lång → för låg frekvens. Förkorta! Tumregel: 1% frekvensändring = 1% längdändring.'
                },
                {
                    id: 'c5-7-e5',
                    type: 'true-false',
                    question: 'En antennanalysator kan mäta kabellängd och hitta var i kabeln ett fel befinner sig (TDR).',
                    correct: true,
                    explanation: 'SANT! TDR (Time Domain Reflectometry) skickar puls, mäter hur lång tid reflektion tar → beräknar avstånd till fel. Hittar kortslutningar, skador!'
                },
                {
                    id: 'c5-7-e6',
                    type: 'multiple-choice',
                    question: 'Vid vilken impedans är antennen resonant (ren resistans)?',
                    options: [
                        'När R = 50Ω exakt',
                        'När X = 0 (ingen reaktans)',
                        'När SWR = 1:1',
                        'När R = X'
                    ],
                    correct: 1,
                    explanation: 'Resonans = X = 0 (ingen reaktans, ren resistans). R kan vara 30Ω eller 70Ω, men X = 0 betyder resonans. Då är SWR lägst.'
                },
                {
                    id: 'c5-7-e7',
                    type: 'multiple-choice',
                    question: 'Vad är NanoVNA?',
                    options: [
                        'En dyr professionell mätare',
                        'Billig (~600 kr) VNA med full funktionalitet, perfekt för nybörjare',
                        'En antenn',
                        'En SWR-meter'
                    ],
                    correct: 1,
                    explanation: 'NanoVNA: Otroligt bra för priset (~600 kr)! Full VNA, Smith Chart, sweep 50 kHz-900 MHz. Bästa budget-alternativet för HF/VHF/UHF!'
                },
                {
                    id: 'c5-7-e8',
                    type: 'true-false',
                    question: 'En antennanalysator kan ersätta både SWR-meter, frekvensräknare och impedansmätare.',
                    correct: true,
                    explanation: 'SANT! Antennanalysator gör ALLT: SWR, impedans (R + jX), resonansfrekvens, kabelmätning, Smith Chart. DET mest användbara instrumentet!'
                },
                {
                    id: 'c5-7-e9',
                    type: 'multiple-choice',
                    question: 'Hur kan du snabbt se om en koaxkabel är trasig med antennanalysator?',
                    options: [
                        'Det går inte',
                        'Anslut kabel öppen i andra änden → borde visa mycket hög impedans',
                        'Mät SWR',
                        'Mät frekvens'
                    ],
                    correct: 1,
                    explanation: 'Öppen kabel (inget anslutet) → borde visa MΩ impedans. Korta andra änden → 0Ω. Om fel värde eller TDR visar avbrott → kabel trasig!'
                },
                {
                    id: 'c5-7-e10',
                    type: 'matching',
                    question: 'Para ihop antennanalysator-funktion med användning:',
                    pairs: [
                        { left: 'SWR sweep', right: 'Se hela bandkurvan på sekunder' },
                        { left: 'Impedans (R + jX)', right: 'Exakt veta vad som ska justeras' },
                        { left: 'TDR (kabelmätning)', right: 'Hitta var i kabel felet sitter' },
                        { left: 'Smith Chart', right: 'Avancerad matchning, ATU-design' }
                    ]
                }
            ]
        }
    ]
},
{
        id: 6,
        number: 6,
        title: 'Störningar (EMC)',
        slug: 'kapitel-6-storningar',
        icon: '🔇',
        subchapters: [
            {
                id: '6.1',
                title: '6.1 EMC-grundbegrepp',
                exercises: [
                    {
                        id: 'c6-1-e1',
                        type: 'multiple-choice',
                        question: 'Vad betyder EMC?',
                        options: [
                            'Electronic Machine Control',
                            'Electromagnetic Compatibility (elektromagnetisk kompatibilitet)',
                            'Effective Modulation Control',
                            'Electronic Mode Converter'
                        ],
                        correct: 1,
                        explanation: 'EMC = Electromagnetic Compatibility. Det betyder att utrustning ska fungera utan att störa (Emission) OCH utan att störas (Immunity). Båda delarna är lika viktiga!'
                    },
                    {
                        id: 'c6-1-e2',
                        type: 'multiple-choice',
                        question: 'Vilka tre delar ingår i "störningstrekanten"?',
                        options: [
                            'Sändare, mottagare, antenn',
                            'Källa, kopplingsväg, offer',
                            'Radio, kabel, jord',
                            'Emission, immunity, filter'
                        ],
                        correct: 1,
                        explanation: 'Störningstrekanten: KÄLLA (vad som stör) → KOPPLINGSVÄG (hur störningen tar sig fram) → OFFER (vad som störs). Bryt någon av dessa länkar = problemet löst!'
                    },
                    {
                        id: 'c6-1-e3',
                        type: 'multiple-choice',
                        question: 'Vilka är de fyra kopplingsv ägarna för RF-störningar?',
                        options: [
                            'Luft, vatten, mark, rymden',
                            'Strålad, ledd, kapacitiv, induktiv',
                            'AM, FM, SSB, CW',
                            'HF, VHF, UHF, SHF'
                        ],
                        correct: 1,
                        explanation: 'Fyra sätt RF tar sig från källa till offer: STRÅLAD (genom luften), LEDD (via kablar), KAPACITIV (elektriskt fält), INDUKTIV (magnetiskt fält). Identifiera vilken = rätt åtgärd!'
                    },
                    {
                        id: 'c6-1-e4',
                        type: 'true-false',
                        question: 'CE-märkning betyder att en produkt GARANTERAT inte ger några EMC-problem.',
                        correct: false,
                        explanation: 'FALSKT! CE-märkning betyder att tillverkaren INTYGAR att produkten uppfyller EMC-direktivet. Men billiga import-produkter kan ha falsk CE-märkning, och även CE-märkta produkter kan ge problem i vissa situationer!'
                    },
                    {
                        id: 'c6-1-e5',
                        type: 'multiple-choice',
                        question: 'Hur mycket måste oönskade utsändningar (övertoner) dämpas enligt lag?',
                        options: [
                            'Minst 20 dB',
                            'Minst 30 dB',
                            'Minst 40 dB',
                            'Minst 60 dB'
                        ],
                        correct: 2,
                        explanation: 'LAGKRAV: Oönskade utsändningar ska dämpas minst 40 dB under huvudsignalen. Det motsvarar 0,01% av effekten. 100W grundton → max 0,01W övertoner!'
                    },
                    {
                        id: 'c6-1-e6',
                        type: 'multiple-choice',
                        question: 'Hur identifierar du STRÅLAD koppling?',
                        options: [
                            'Koppla bort alla kablar - problem kvarstår',
                            'Ferrit på kabel hjälper',
                            'Jorda apparaten',
                            'Byt frekvens'
                        ],
                        correct: 0,
                        explanation: 'STRÅLAD koppling: RF strålar direkt in i apparaten (inte via kablar). Test: Koppla bort ALLA kablar - om problem kvarstår är det strålad koppling. Lösning: Öka avstånd eller skärma!'
                    },
                    {
                        id: 'c6-1-e7',
                        type: 'true-false',
                        question: 'Att öka avståndet mellan antenn och störobjekt är en av de billigaste och enklaste åtgärderna.',
                        correct: true,
                        explanation: 'SANT! Fältstyrkan minskar med 1/r². Dubbla avståndet = en fjärdedel styrka! Kostar inget, tar ingen tid. Testa detta FÖRST innan du köper filter och ferrit!'
                    },
                    {
                        id: 'c6-1-e8',
                        type: 'multiple-choice',
                        question: 'Vad är EMISSION i EMC-sammanhang?',
                        options: [
                            'Hur mycket en apparat stör (ger ifrån sig störningar)',
                            'Hur motståndskraftig en apparat är mot störningar',
                            'Sändningseffekt',
                            'Modulationstyp'
                        ],
                        correct: 0,
                        explanation: 'EMISSION = Hur mycket störningar apparaten GER IFRÅN SIG. IMMUNITY = Hur bra den TÅLER störningar. EMC kräver BÅDE låg emission OCH hög immunity!'
                    },
                    {
                        id: 'c6-1-e9',
                        type: 'matching',
                        question: 'Para ihop kopplingsväg med bästa åtgärd:',
                        pairs: [
                            { left: 'Strålad', right: 'Öka avstånd eller skärma' },
                            { left: 'Ledd (kablar)', right: 'Ferritklämmor på kablar' },
                            { left: 'Kapacitiv', right: 'Öka avstånd mellan kablar' },
                            { left: 'Induktiv', right: 'Vinkelräta kablar mot varandra' }
                        ]
                    },
                    {
                        id: 'c6-1-e10',
                        type: 'multiple-choice',
                        question: 'Vilket är det FÖRSTA du ska göra vid EMC-problem?',
                        options: [
                            'Köpa dyr utrustning',
                            'Identifiera källa, kopplingsväg och offer',
                            'Anmäla till PTS',
                            'Byta frekvens'
                        ],
                        correct: 1,
                        explanation: 'ALLTID börja med att identifiera störningstrekanten: VAD stör (källa)? HUR tar det sig fram (kopplingsväg)? VAD störs (offer)? Då vet du var du ska sätta in åtgärder!'
                    }
                ]
            },
            {
                id: '6.2',
                title: '6.2 Störningskällor',
                exercises: [
                    {
                        id: 'c6-2-e1',
                        type: 'multiple-choice',
                        question: 'Vilka tre typer av NATURLIGA störningar finns?',
                        options: [
                            'LED, SMPS, PLC',
                            'Atmosfäriskt (QRN), Kosmiskt, Termiskt',
                            'Tändning, motorer, reläer',
                            'Intermod, övertoner, fasbrus'
                        ],
                        correct: 1,
                        explanation: 'NATURLIGA: 1) Atmosfäriskt (QRN) från åska, 2) Kosmiskt från sol/rymden, 3) Termiskt från komponenter. Dessa KAN vi inte eliminera helt - bara minimera!'
                    },
                    {
                        id: 'c6-2-e2',
                        type: 'multiple-choice',
                        question: 'Vad är det största EMC-hotet mot amatörradio idag?',
                        options: [
                            'Åska och blixtar',
                            'Switchade nätaggregat (SMPS) i modern elektronik',
                            'Solstormar',
                            'Bilarnas tändsystem'
                        ],
                        correct: 1,
                        explanation: 'SMPS (Switchade nätaggregat) är STÖRSTA hotet! Finns i ALLA moderna apparater: datorer, TV, laddare, LED-lampor. Ger bredbandigt brus 1-30 MHz. Blir värre för varje år!'
                    },
                    {
                        id: 'c6-2-e3',
                        type: 'multiple-choice',
                        question: 'Hur känner du igen ett elektriskt stängsel på radio?',
                        options: [
                            'Konstant brus',
                            'TICK... TICK... TICK... exakt 1 gång per sekund (1 Hz)',
                            'Varierande störning',
                            'Hörs bara på VHF'
                        ],
                        correct: 1,
                        explanation: 'Elektriskt stängsel: Regelbundet TICK... TICK... exakt 1 Hz (1 gång/sekund). Hörs på ALLA HF-band samtidigt. Kan höras flera km bort! Ofta på landsbygden (djurhägn).'
                    },
                    {
                        id: 'c6-2-e4',
                        type: 'true-false',
                        question: 'PLC (Internet via elnätet) är en av de värsta störningskällorna för HF och bör undvikas helt.',
                        correct: true,
                        explanation: 'SANT! PLC sänder 2-30 MHz direkt på elnätet → Hela huset blir antenn! Kan ge S9+ brus över HELA HF. ANVÄND ALDRIG PLC! Använd WiFi eller dra Ethernet-kabel istället!'
                    },
                    {
                        id: 'c6-2-e5',
                        type: 'multiple-choice',
                        question: 'Varför är LED-lampor ofta problematiska?',
                        options: [
                            'De lyser för svagt',
                            'Billiga LED-drivdon har ofta usel EMC och ger kraftigt bredbandsbrus',
                            'De drar för mycket ström',
                            'De är för dyra'
                        ],
                        correct: 1,
                        explanation: 'Billiga LED-lampor (särskilt dimbara!) har switchade drivdon med USEL EMC. Kan ge S9+ brus på alla HF-band! Lösning: Köp BÄTTRE LED (Philips, IKEA, Osram) - testa med radio INNAN köp!'
                    },
                    {
                        id: 'c6-2-e6',
                        type: 'multiple-choice',
                        question: 'På vilka band är atmosfäriskt brus (QRN) värst?',
                        options: [
                            'VHF/UHF',
                            'Låga HF-band (160m, 80m, 40m)',
                            'Mikrovåg',
                            'Alla band lika'
                        ],
                        correct: 1,
                        explanation: 'QRN (åska) värst på LÅGA HF-band (160m, 80m, 40m). Särskilt sommarkvällar med åskväder. På VHF/UHF däremot är kosmiskt brus (från sol/rymden) större problemet!'
                    },
                    {
                        id: 'c6-2-e7',
                        type: 'multiple-choice',
                        question: 'Hur identifierar du huvudbrytartestet om störkällan är HOS DIG eller extern?',
                        options: [
                            'Mät SWR',
                            'Slå av huvudbrytaren hemma och lyssna med batteridrivet radio',
                            'Byt antenn',
                            'Öka effekten'
                        ],
                        correct: 1,
                        explanation: 'HUVUDBRYTARTESTET: 1) Lyssna på störning, 2) Slå AV huvudbrytaren hemma, 3) Lyssna igen. Försvinner störning? → HOS DIG! Kvarstår? → EXTERN källa (granne/industri)!'
                    },
                    {
                        id: 'c6-2-e8',
                        type: 'true-false',
                        question: 'Termiskt brus (Johnson-Nyquist) är ett grundläggande brusgolv som finns i ALLA komponenter och kan inte elimineras.',
                        correct: true,
                        explanation: 'SANT! Termiskt brus orsakas av slumpmässig elektronrörelse i alla ledare. Finns ALLTID, ökar med temperatur. Detta sätter den absoluta gränsen för känslighet - kan INTE elimineras (fysikens lagar)!'
                    },
                    {
                        id: 'c6-2-e9',
                        type: 'multiple-choice',
                        question: 'Solcellsinverters kan vara problematiska. Hur känner du igen dem?',
                        options: [
                            'Konstant brus dygnet runt',
                            'Brus som är starkare dagtid/soligt väder, svagare natt/moln',
                            'Bara på VHF',
                            'Hörs inte alls på radio'
                        ],
                        correct: 1,
                        explanation: 'Solcellsinverters: Konstant brus, men STARKARE när solen skiner (mer effekt från paneler)! Svagare vid moln/natt. Kan störa kraftigt över stort område (100-500m). Svårt problem att lösa!'
                    },
                    {
                        id: 'c6-2-e10',
                        type: 'matching',
                        question: 'Para ihop störningstyp med typiskt ljud:',
                        pairs: [
                            { left: 'Tändsystem (bil)', right: 'TICK TICK TICK (snabbt, varierar med motorvarv)' },
                            { left: 'Elektriskt stängsel', right: 'TICK... TICK... (långsamt, exakt 1 Hz)' },
                            { left: 'SMPS (datorer)', right: 'ZZZZZZZ (konstant bredbandsbrus)' },
                            { left: 'Dammsugare', right: 'BZZZZT BZZZZT (varierande med användning)' }
                        ]
                    }
                ]
            },
            {
                id: '6.3',
                title: '6.3 Störningar från din sändare',
                exercises: [
                    {
                        id: 'c6-3-e1',
                        type: 'multiple-choice',
                        question: 'Vad är övertoner (harmonics)?',
                        options: [
                            'Signaler på MULTIPLER av grundfrekvensen (2×, 3×, 4× osv)',
                            'Signaler under grundfrekvensen',
                            'Modulering',
                            'Brus'
                        ],
                        correct: 0,
                        explanation: 'Övertoner = Harmoniska = 2×, 3×, 4× grundfrekvens. Exempel: Sänder 7 MHz → övertoner på 14, 21, 28, 35 MHz osv. Kan störa flygtrafik och andra viktiga tjänster! MÅSTE dämpas >40 dB (lagkrav)!'
                    },
                    {
                        id: 'c6-3-e2',
                        type: 'multiple-choice',
                        question: 'Vilken är den enklaste och viktigaste åtgärden mot övertoner?',
                        options: [
                            'Sänk effekten',
                            'Lågpassfilter mellan slutsteg och antenn',
                            'Byt frekvens',
                            'Använd annan antenn'
                        ],
                        correct: 1,
                        explanation: 'LÅGPASSFILTER efter slutsteget är MÅSTE-grejen! Släpper igenom grundfrekvensen men dämpar övertoner >40 dB. Placering: Mellan PA och antenn. Kostnad: 200-800 kr. LAGKRAV att ha detta!'
                    },
                    {
                        id: 'c6-3-e3',
                        type: 'multiple-choice',
                        question: 'Vad är mantelströmmar?',
                        options: [
                            'Ström i antennelementen',
                            'RF-ström på UTSIDAN av koaxkabeln (istället för bara inuti)',
                            'Ström i jorden',
                            'Ström i slutsteget'
                        ],
                        correct: 1,
                        explanation: 'Mantelströmmar = RF på koaxens UTSIDA! Hela koaxen blir antenn som strålar in i huset. Tecken: RF i shacket, stötar, hemelektronik stör. Lösning: BALUN/CHOKE vid antennen!'
                    },
                    {
                        id: 'c6-3-e4',
                        type: 'true-false',
                        question: 'En luftlindad choke (8-10 varv koax, 15-20 cm diameter) är en gratis lösning mot mantelströmmar som faktiskt fungerar.',
                        correct: true,
                        explanation: 'SANT! Luftlindad choke kostar 0 kr och tar 5 minuter! Rulla koaxen 8-10 varv, diameter 15-20 cm, tejpa ihop. Fungerar förvånansvärt bra! Om du vill ännu bättre: Linda genom ferritringar (FT240-43).'
                    },
                    {
                        id: 'c6-3-e5',
                        type: 'multiple-choice',
                        question: 'Vad är tecken på övermodulation?',
                        options: [
                            'För låg effekt',
                            'ALC-metern slår KONSTANT, folk säger du "splashar"',
                            'Ingen hör dig',
                            'SWR är högt'
                        ],
                        correct: 1,
                        explanation: 'Övermodulation: ALC slår HELA TIDEN (ska bara nudda vid toppar!), wattmeter "studsar" vilt, folk rapporterar "too much audio" eller "splashing". Lösning: SÄNK MIC GAIN! Backa 10-20% från max.'
                    },
                    {
                        id: 'c6-3-e6',
                        type: 'multiple-choice',
                        question: 'TV flimrar när du sänder. Hur hittar du vilken kabel som för RF in?',
                        options: [
                            'Gissa',
                            'Koppla bort kablar EN i taget medan du sänder - när problem försvinner har du hittat den!',
                            'Byt TV',
                            'Det går inte att ta reda på'
                        ],
                        correct: 1,
                        explanation: 'KABELTEST: Med problem pågående (du sänder), koppla bort kablar EN i taget: HDMI, USB, Ethernet, antenn, sist nätkabel. När problem FÖRSVINNER = den kabeln för in RF! Sätt ferrit på DEN kabeln först!'
                    },
                    {
                        id: 'c6-3-e7',
                        type: 'true-false',
                        question: 'Fasbrus är något du kan fixa efteråt genom att sätta på filter.',
                        correct: false,
                        explanation: 'FALSKT! Fasbrus = VFO/oscillator-kvalitet. Inbyggt i radion. KAN INTE fixas efteråt! Därför: Köp BRA radio från början (Icom, Yaesu, Kenwood, Elecraft). Undvik billiga Kina-radior med högt fasbrus!'
                    },
                    {
                        id: 'c6-3-e8',
                        type: 'multiple-choice',
                        question: 'Varför är övertoner farliga?',
                        options: [
                            'De skadar radion',
                            'De kan störa flygtrafik (30-88 MHz) och annan viktig radiotjänst',
                            'De gör att antennen går sönder',
                            'De ökar strömförbrukningen'
                        ],
                        correct: 1,
                        explanation: 'Övertoner kan störa LIVSVIKTIG radiotrafik! Exempel: Sänder 7 MHz → 5:e överton = 35 MHz (FLYGBANDET!). Kan störa flygtrafik, räddningstjänst, polis, militär. PTS kan dra in certifikat! DÄRFÖR lagkrav >40 dB dämpning!'
                    },
                    {
                        id: 'c6-3-e9',
                        type: 'multiple-choice',
                        question: 'Var ska du placera ferritklämmor för bäst effekt?',
                        options: [
                            'Mitt på kabeln',
                            'NÄRA störobjektet (TV, dator) - inte mitt på kabeln!',
                            'Vid sändaren',
                            'Spelar ingen roll'
                        ],
                        correct: 1,
                        explanation: 'PLACERING KRITISK! Ferrit ska sitta NÄRA störobjektet (där RF ska stoppas från att komma in). INTE mitt på kabel - då tar RF sig in via båda ändarna ändå! Exempel: TV:ns HDMI → ferrit vid TV:n!'
                    },
                    {
                        id: 'c6-3-e10',
                        type: 'matching',
                        question: 'Para ihop problem från sändare med bästa lösning:',
                        pairs: [
                            { left: 'Övertoner', right: 'Lågpassfilter efter PA (>40 dB)' },
                            { left: 'Mantelströmmar', right: 'Balun/choke vid antennen' },
                            { left: 'Övermodulation', right: 'Sänk MIC GAIN' },
                            { left: 'RF in i hemelektronik', right: 'Ferritklämmor på alla kablar' }
                        ]
                    }
                ]
            },
            {
                id: '6.4',
                title: '6.4 Störningar på mottagare',
                exercises: [
                    {
                        id: 'c6-4-e1',
                        type: 'multiple-choice',
                        question: 'Vad är överbelastning i en mottagare?',
                        options: [
                            'För många stationer att lyssna på',
                            'Starka signaler driver förstärkare utanför linjärt område → distorsion och falska signaler',
                            'Mottagaren går sönder',
                            'För hög volym'
                        ],
                        correct: 1,
                        explanation: 'Överbelastning: För starka signaler → förstärkare/blandare arbetar icke-linjärt → distorsion överallt, många falska signaler, S-meter fastnar på S9+. Lösning: DÄMPARE (10-20 dB) eller preselektor!'
                    },
                    {
                        id: 'c6-4-e2',
                        type: 'multiple-choice',
                        question: 'Hur beräknar du tredje ordningens intermodulation (IMD3)?',
                        options: [
                            'f₁ + f₂',
                            '2×f₁ - f₂ och 2×f₂ - f₁',
                            'f₁ - f₂',
                            'f₁ × f₂'
                        ],
                        correct: 1,
                        explanation: 'IMD3-formeln: f_IM3 = 2×f₁ - f₂ och 2×f₂ - f₁. Exempel: Två starka på 14,200 och 14,250 MHz → IMD3 på 14,150 och 14,300 MHz. Du hör "spöksignaler" som inte finns! Lösning: Dämpare (10 dB ATT → 30 dB mindre intermod!)' 
                    },
                    {
                        id: 'c6-4-e3',
                        type: 'multiple-choice',
                        question: 'Hur beräknar du spegelfrekvensen?',
                        options: [
                            'f_spegel = f_önskad + 2×IF',
                            'f_spegel = f_önskad - IF',
                            'f_spegel = 2×f_önskad',
                            'f_spegel = f_önskad / 2'
                        ],
                        correct: 0,
                        explanation: 'Spegelfrekvens: f_spegel = f_önskad ± 2×IF. Exempel: Lyssnar 14,200 MHz, IF = 9 MHz → spegel på 14,200 + 18 = 32,200 MHz. Båda ger samma IF! Lösning: Högre IF (9 MHz bättre än 455 kHz) och bättre ingångsfilter!'
                    },
                    {
                        id: 'c6-4-e4',
                        type: 'true-false',
                        question: 'Dämpare (attenuator) hjälper mot BÅDE överbelastning OCH intermodulation.',
                        correct: true,
                        explanation: 'SANT! Dämpare är universalverktyg: Minskar överbelastning OCH intermod. Bonus: 10 dB dämpning → intermod minskar ~30 dB (tredje-potens-effekt)! Prova ALLTID 10-20 dB ATT vid mottagarproblem!'
                    },
                    {
                        id: 'c6-4-e5',
                        type: 'multiple-choice',
                        question: 'Vad är korsmodulation?',
                        options: [
                            'När två signaler överlappar',
                            'Stark AM-signal (MW-rundradio) överför sin modulation till din önskade signal',
                            'Digital modulation',
                            'SSB-modulation'
                        ],
                        correct: 1,
                        explanation: 'Korsmodulation: Stark MW-rundradio (1-2 MHz, AM) driver förstärkare icke-linjärt → dess TAL/MUSIK hörs ovanpå DIN signal! Som att någon spelar radio i bakgrunden. Lösning: HÖGPASSFILTER (2-3 MHz cutoff) blockerar MW helt!'
                    },
                    {
                        id: 'c6-4-e6',
                        type: 'multiple-choice',
                        question: 'Vad betyder IP3?',
                        options: [
                            'Internet Protocol version 3',
                            'Third-Order Intercept Point - mått på mottagarens tålighet mot intermod',
                            'Input Power 3 watts',
                            'Intermediate Frequency Phase 3'
                        ],
                        correct: 1,
                        explanation: 'IP3 = Third-Order Intercept Point. Mått på hur bra mottagaren TÅLER intermodulation. Högre IP3 = bättre! >+20 dBm = bra, >+30 dBm = utmärkt. Viktigt spec att kolla före köp av mottagare!'
                    },
                    {
                        id: 'c6-4-e7',
                        type: 'true-false',
                        question: 'Högre mellanfrekvens (IF) ger bättre spegelundertryckning.',
                        correct: true,
                        explanation: 'SANT! Högre IF → spegelfrekvens längre bort → lättare att filtrera! Exempel: IF 455 kHz → spegel 910 kHz bort (svårt!). IF 9 MHz → spegel 18 MHz bort (lätt!). Moderna RX har ofta 9 MHz IF av denna anledning!'
                    },
                    {
                        id: 'c6-4-e8',
                        type: 'multiple-choice',
                        question: 'Vad är blockering (desensibilisering)?',
                        options: [
                            'Mottagaren går sönder',
                            'Stark signal minskar mottagarens känslighet → svaga signaler försvinner',
                            'Du kan inte höra något',
                            'Antennen blockeras'
                        ],
                        correct: 1,
                        explanation: 'Blockering: Stark signal (S9+) på närliggande frekvens komprimerar förstärkningen → svaga signaler blir ännu svagare/försvinner. Exempel: S9+ lokal på 14,150 → din S3 DX på 14,200 blir S1. Lösning: Smalare filter, notch, bättre RX!'
                    },
                    {
                        id: 'c6-4-e9',
                        type: 'multiple-choice',
                        question: 'Du hör rundradio-tal ovanpå din SSB-signal. Vad är det troligast?',
                        options: [
                            'Överbelastning',
                            'Korsmodulation från MW-rundradio',
                            'Intermodulation',
                            'Spegelfrekvens'
                        ],
                        correct: 1,
                        explanation: 'Korsmodulation från MW! Stark rundradio (AM) på 1-2 MHz överför sin modulation. Värre kvällstid (MW räcker längre). Lösning: HÖGPASSFILTER med 2-3 MHz cutoff blockerar MW helt men släpper igenom HF!'
                    },
                    {
                        id: 'c6-4-e10',
                        type: 'matching',
                        question: 'Para ihop mottagarproblem med bästa lösning:',
                        pairs: [
                            { left: 'Överbelastning', right: 'Dämpare (10-20 dB)' },
                            { left: 'Intermodulation', right: 'Dämpare (mest effektivt!) eller högre IP3' },
                            { left: 'Spegelfrekvens', right: 'Bättre ingångsfilter, högre IF' },
                            { left: 'Korsmodulation (MW)', right: 'Högpassfilter (2-3 MHz)' }
                        ]
                    }
                ]
            },
            {
                id: '6.5',
                title: '6.5 Förebyggande och åtgärder',
                exercises: [
                    {
                        id: 'c6-5-e1',
                        type: 'multiple-choice',
                        question: 'Vilka är de fyra grundprinciperna för EMC?',
                        options: [
                            'Köpa, testa, använda, reparera',
                            'Minska vid källan, Öka avstånd, Skärma, Filtrera',
                            'Sända, ta emot, mäta, justera',
                            'Antenn, kabel, jord, radio'
                        ],
                        correct: 1,
                        explanation: 'FYRA GRUNDPRINCIPER: 1) MINSKA VID KÄLLAN (bäst - löser för alla!), 2) ÖKA AVSTÅND (gratis - 1/r²!), 3) SKÄRMA (dyrt - sista utvägen), 4) FILTRERA (oftast bästa lösningen!). Kom ihåg dessa!'
                    },
                    {
                        id: 'c6-5-e2',
                        type: 'multiple-choice',
                        question: 'Hur mycket minskar fältstyrkan om du dubblar avståndet?',
                        options: [
                            'Till hälften',
                            'Till en fjärdedel (1/r²)',
                            'Till en tiondel',
                            'Ingen skillnad'
                        ],
                        correct: 1,
                        explanation: 'Fältstyrka ∝ 1/r² ("en-genom-r-kvadrat-lagen"). Dubbla avståndet → EN FJÄRDEDEL styrka! Exempel: Antenn 5m → 10m från hus = 4× svagare RF. GRATIS och ENKELT - testa detta FÖRST!'
                    },
                    {
                        id: 'c6-5-e3',
                        type: 'true-false',
                        question: 'Du ska alltid testa EN åtgärd i taget för att veta exakt vad som hjälpte.',
                        correct: true,
                        explanation: 'SANT och KRITISKT VIKTIGT! Gör INTE alla åtgärder samtidigt - då vet du inte VAD som hjälpte! Metod: Baslinje → Åtgärd 1 → Test → Dokumentera → Åtgärd 2 → osv. Sparar massor av tid och pengar!'
                    },
                    {
                        id: 'c6-5-e4',
                        type: 'multiple-choice',
                        question: 'Vilka tre saker ska du ALLTID göra (Nivå 1 - förebyggande)?',
                        options: [
                            'Köpa dyrt, installera snabbt, hoppas på bästa',
                            'Lågpassfilter efter PA, Balun vid antenn, God jordning',
                            'Höja effekten, byta frekvens, köpa ny radio',
                            'Vänta och se, gissa, klaga'
                        ],
                        correct: 1,
                        explanation: 'NIVÅ 1 - Förebyggande (GÖR ALLTID): 1) LÅGPASSFILTER efter PA (lagkrav!), 2) BALUN/CHOKE vid antenn, 3) GOD JORDNING. Plus: Separera kablar, ferrit på viktiga kablar. Med detta undviker du 80-90% av problem!'
                    },
                    {
                        id: 'c6-5-e5',
                        type: 'multiple-choice',
                        question: 'När ska du använda skärmning?',
                        options: [
                            'Alltid först',
                            'Som SISTA utväg när allt annat misslyckats',
                            'Aldrig',
                            'När du har mycket pengar'
                        ],
                        correct: 1,
                        explanation: 'Skärmning = SISTA UTVÄG! Dyrt (kan kosta 10.000+), komplext, svårt att göra rätt, kräver expertis. 90% av problem löses med ferrit och filter. Bara 1-2% kräver skärmning. Prova ALT annat först!'
                    },
                    {
                        id: 'c6-5-e6',
                        type: 'multiple-choice',
                        question: 'Vilka tre verktyg MÅSTE du ha i din EMC-verktygslåda?',
                        options: [
                            'Hammare, såg, skruvmejsel',
                            'Ferritklämmor (10-20 st), Lågpassfilter, Multimeter',
                            'Dator, telefon, kamera',
                            'Antenn, radio, kabel'
                        ],
                        correct: 1,
                        explanation: 'MÅSTE HA: 1) FERRITKLÄMMOR (10-20 st, 200-500 kr) - universalverktyg!, 2) LÅGPASSFILTER (200-800 kr) - lagkrav!, 3) MULTIMETER (200-500 kr) - mäta kontakter/kontinuitet. Dessa löser 90% av problem!'
                    },
                    {
                        id: 'c6-5-e7',
                        type: 'true-false',
                        question: 'Högpassfilter med 2-3 MHz cutoff eliminerar nästan alla MW-rundradio-problem.',
                        correct: true,
                        explanation: 'SANT! Högpassfilter (2-3 MHz cutoff) före mottagare: Blockerar MW-rundradio (500-1600 kHz) kraftigt men släpper igenom HF (3-30 MHz). Eliminerar korsmodulation och överbelastning från MW. Kostnad: 300-600 kr. Mycket effektivt!'
                    },
                    {
                        id: 'c6-5-e8',
                        type: 'multiple-choice',
                        question: 'Vad är "prioriterad åtgärdsplan"?',
                        options: [
                            'Göra allt samtidigt',
                            'Börja billigt/enkelt (Nivå 1-2), investera bara om nödvändigt (Nivå 3-4)',
                            'Köpa det dyraste först',
                            'Vänta och se'
                        ],
                        correct: 1,
                        explanation: 'Prioriterad plan: Nivå 1 (Förebygg - lågpass, balun, jording), Nivå 2 (Första insats - identifiera, snabbtester, billiga fixar), Nivå 3 (Investering - högpass, preselektor), Nivå 4 (Extremfall - skärmning, flytta). ALLTID börja enkelt!'
                    },
                    {
                        id: 'c6-5-e9',
                        type: 'multiple-choice',
                        question: 'Varför är det viktigt att dokumentera dina lösningar?',
                        options: [
                            'För att visa för vänner',
                            'För framtida referens OCH för att hjälpa andra med samma problem',
                            'Det är inte viktigt',
                            'För att skryta'
                        ],
                        correct: 1,
                        explanation: 'Dokumentera för: 1) DIG SJÄLV - om problemet kommer tillbaka eller liknande uppstår, 2) ANDRA - dela med SSA, forum - din lösning kan spara någon veckor av frustration! Inkludera: Problem, tester, lösning, kostnad, resultat.'
                    },
                    {
                        id: 'c6-5-e10',
                        type: 'matching',
                        question: 'Para ihop grundprincip med exempel:',
                        pairs: [
                            { left: 'Minska vid källan', right: 'Lågpassfilter efter PA, ferrit på störande apparat' },
                            { left: 'Öka avstånd', right: 'Flytta antenn 5m → 10m (4× svagare fält)' },
                            { left: 'Skärma', right: 'Metallburk runt störande apparat (sista utvägen)' },
                            { left: 'Filtrera', right: 'Högpassfilter före RX, ferrit på kablar' }
                        ]
                    }
                ]
            },
            {
                id: '6.6',
                title: '6.6 Filter och skärmning i praktiken',
                exercises: [
                    {
                        id: 'c6-6-e1',
                        type: 'multiple-choice',
                        question: 'Vilka är de fyra huvudtyperna av filter?',
                        options: [
                            'Röda, gröna, blåa, gula',
                            'Lågpass, Högpass, Bandpass, Bandspärr (Notch)',
                            'AM, FM, SSB, CW',
                            'HF, VHF, UHF, SHF'
                        ],
                        correct: 1,
                        explanation: 'Fyra filtertyper: LÅGPASS (efter TX - dämpa övertoner), HÖGPASS (före RX - blockera MW), BANDPASS (preselektor - välj band), BANDSPÄRR/NOTCH (ta bort specifik störare). Varje har sitt användningsområde!'
                    },
                    {
                        id: 'c6-6-e2',
                        type: 'multiple-choice',
                        question: 'Vilken ferrittyp (Mix) är bäst för HF-amatörradio?',
                        options: [
                            'Mix 61 (VHF/UHF)',
                            'Mix 43 (1-50 MHz) - mest populär för HF!',
                            'Mix 75 (MW-störningar)',
                            'Mix 10 (högfrekvens)'
                        ],
                        correct: 1,
                        explanation: 'Mix 43 är BÄST för de flesta HF-ändamål (1-50 MHz)! Fungerar bra på 160m-10m. Mix 31 också bra (1-300 MHz, bred). Om du bara köper EN typ: MIX 43! Storlek: FT240-43 för choke-baluner, klämmor för kablar.'
                    },
                    {
                        id: 'c6-6-e3',
                        type: 'true-false',
                        question: 'Flera varv genom ferritring ger mycket mer dämpning än ett varv.',
                        correct: true,
                        explanation: 'SANT! Dämpning ökar kraftigt med antal varv: 1 varv = ~10-15 dB, 3 varv = ~25-30 dB, 5 varv = ~35-40 dB. Alltså: 5 varv ger 5× bättre dämpning än 1 varv! Linda så många varv som får plats!'
                    },
                    {
                        id: 'c6-6-e4',
                        type: 'multiple-choice',
                        question: 'Var ska du placera ferritklämmor för bäst effekt?',
                        options: [
                            'Mitt på kabeln',
                            'Vid sändaren',
                            'NÄRA störobjektet (där RF ska stoppas)',
                            'Spelar ingen roll'
                        ],
                        correct: 2,
                        explanation: 'Placering KRITISK! Ferrit ska sitta NÄRA störobjektet (där RF ska stoppas från att komma in). INTE mitt på kabel! Exempel: TV:ns HDMI-kabel → ferrit VID TV:n. Datorkabel → ferrit VID datorn. Detta är MYCKET viktigt!'
                    },
                    {
                        id: 'c6-6-e5',
                        type: 'multiple-choice',
                        question: 'Vad är det viktigaste för god skärmning?',
                        options: [
                            'Dyrt material',
                            'KONTINUITET - inga gaps eller hål!',
                            'Tjockt material',
                            'Färg på materialet'
                        ],
                        correct: 1,
                        explanation: 'KONTINUITET är viktigast! Inga gaps, hål eller spalter - varje öppning läcker RF! Håll gaps < λ/20 (på 14 MHz: max ~1m gap, helst mycket mindre). MÅSTE också jordas. Material: Koppar/aluminium/stål fungerar alla om kontinuiteten är bra!'
                    },
                    {
                        id: 'c6-6-e6',
                        type: 'multiple-choice',
                        question: 'Hur gör du en enkel choke balun för dipol?',
                        options: [
                            'Köp färdig för 5000 kr',
                            'Linda 5-7 varv koax genom 5-10 st FT240-43 ferritringar vid antennen',
                            'Använd längre koax',
                            'Det går inte'
                        ],
                        correct: 1,
                        explanation: 'Enkel choke balun: 1) Skaffa 5-10 st FT240-43 ringar (300-500 kr), 2) Trä dem på koax vid matningspunkten, 3) Linda koax 5-7 varv genom ringarna, 4) Tejpa ihop. Stoppar mantelströmmar! Alternativ: Luftlindad choke (gratis)!'
                    },
                    {
                        id: 'c6-6-e7',
                        type: 'true-false',
                        question: 'Högpassfilter med 2-3 MHz cutoff blockerar MW-rundradio men släpper igenom alla HF-amatörband.',
                        correct: true,
                        explanation: 'SANT! Högpass 2-3 MHz cutoff: Blockerar MW (500-1600 kHz) kraftigt men släpper igenom 160m-10m (1,8-30 MHz). Perfekt före mottagare för att eliminera MW-korsmodulation och överbelastning! Kostnad: 300-600 kr. Mycket värt!'
                    },
                    {
                        id: 'c6-6-e8',
                        type: 'multiple-choice',
                        question: 'Vad är en preselektor?',
                        options: [
                            'En antennväljare',
                            'Ett justerbart bandpassfilter som väljer ett smalt frekvensområde före mottagaren',
                            'En förstärkare',
                            'En antenn'
                        ],
                        correct: 1,
                        explanation: 'Preselektor = Justerbart bandpassfilter före mottagare. Väljer t.ex. bara 14,0-14,35 MHz (20m), blockerar allt annat. Hjälper mot överbelastning, intermod, spegelfrekvens. Kostnad: 2000-5000 kr. Mycket effektivt men dyrt!'
                    },
                    {
                        id: 'c6-6-e9',
                        type: 'multiple-choice',
                        question: 'När ska du INTE använda skärmning?',
                        options: [
                            'När problemet kan lösas enklare (ferrit, filter, avstånd)',
                            'Alltid använda skärmning',
                            'När du har pengar',
                            'När du har tid'
                        ],
                        correct: 0,
                        explanation: 'Använd INTE skärmning om: 1) Problemet kan lösas enklare (ferrit/filter/avstånd), 2) Du inte kan få kontinuitet (läckage gör den värdelös), 3) Du inte kan jorda ordentligt. Skärmning = sista utväg! 90% löses utan den!'
                    },
                    {
                        id: 'c6-6-e10',
                        type: 'matching',
                        question: 'Para ihop filtertyp med användning:',
                        pairs: [
                            { left: 'Lågpass', right: 'Efter sändare → Dämpa övertoner' },
                            { left: 'Högpass (2-3 MHz)', right: 'Före mottagare → Blockera MW-rundradio' },
                            { left: 'Bandpass', right: 'Preselektor → Välj ett specifikt band' },
                            { left: 'Notch', right: 'Ta bort en specifik stark störare' }
                        ]
                    }
                ]
            },
            {
                id: '6.7',
                title: '6.7 Systematisk felsökning',
                exercises: [
                    {
                        id: 'c6-7-e1',
                        type: 'multiple-choice',
                        question: 'Vilka är de 7 stegen i felsökningsmetoden?',
                        options: [
                            'Köpa, installera, testa, kassera, köpa nytt, testa igen, ge upp',
                            'Observera, Klassificera, Isolera, Hypotes, Testa åtgärd, Verifiera, Dela',
                            'Sända, lyssna, mäta, justera, sända igen, lyssna igen, klart',
                            'Ring SSA, vänta, hoppas, be, ge upp, flytta, sluta'
                        ],
                        correct: 1,
                        explanation: '7-STEGS METODEN: 1) OBSERVERA och dokumentera, 2) KLASSIFICERA problemet, 3) ISOLERA källan, 4) FORMULERA hypotes, 5) TESTA åtgärd (EN i taget!), 6) VERIFIERA lösning, 7) DELA och dokumentera. Lär dig denna ordning!'
                    },
                    {
                        id: 'c6-7-e2',
                        type: 'multiple-choice',
                        question: 'Vad är huvudbrytartestet?',
                        options: [
                            'Testa huvudbrytaren',
                            'Slå av huvudbrytaren hemma och lyssna - visar om källan är HOS DIG eller externt',
                            'Byta huvudbrytare',
                            'Mäta spänning'
                        ],
                        correct: 1,
                        explanation: 'HUVUDBRYTARTESTET: 1) Lyssna på störning med batteridrivet radio, 2) Slå AV huvudbrytaren hemma, 3) Lyssna igen. Försvinner störning? → HOS DIG (gå till grupptest). Kvarstår? → EXTERN källa (pejling). Enkelt och effektivt!'
                    },
                    {
                        id: 'c6-7-e3',
                        type: 'multiple-choice',
                        question: 'Vad är PTT-testet?',
                        options: [
                            'Testa PTT-knappen',
                            'Någon tittar på störobjekt medan du trycker PTT - visar om DIN sändning orsakar problemet',
                            'Mäta effekt',
                            'Justera mikrofon'
                        ],
                        correct: 1,
                        explanation: 'PTT-TESTET: 1) Någon tittar på störobjektet (TV, dator), 2) Du trycker PTT flera gånger (kort sändning), 3) Händer något vid varje PTT? → DIN sändare är orsaken (gå till kabeltest). Ingen korrelation? → Annan källa.'
                    },
                    {
                        id: 'c6-7-e4',
                        type: 'true-false',
                        question: 'Du ska ALLTID testa EN åtgärd i taget och dokumentera resultatet.',
                        correct: true,
                        explanation: 'SANT och KRITISKT! Testa EN åtgärd i taget annars vet du inte VAD som hjälpte. Metod: Baslinje (dokumentera problem) → Åtgärd 1 → Test → Dokumentera → Åtgärd 2 → Test → osv. Detta sparar massor av tid och pengar!'
                    },
                    {
                        id: 'c6-7-e5',
                        type: 'multiple-choice',
                        question: 'Vad ska du dokumentera vid felsökning?',
                        options: [
                            'Bara lösningen',
                            'NÄR, VAR, HUR, VAD, KORRELATION - alla omständigheter plus före/efter varje åtgärd',
                            'Ingenting',
                            'Bara kostnaden'
                        ],
                        correct: 1,
                        explanation: 'Dokumentera: NÄR (tid, dag, väder?), VAR (band, frekvens, plats?), HUR (ljud, S-meter, visuellt?), VAD (utrustning, trafiksätt, effekt?), KORRELATION (PTT-test?). Plus: Före/efter varje åtgärd, foton, ljudinspelningar. MYCKET viktigt!'
                    },
                    {
                        id: 'c6-7-e6',
                        type: 'multiple-choice',
                        question: 'Vad är grupptestet?',
                        options: [
                            'Testa i grupp',
                            'Efter huvudbrytartestet: Slå på grupper EN i taget för att hitta vilken elkrets källan är på',
                            'Testa alla samtidigt',
                            'Fråga grannar'
                        ],
                        correct: 1,
                        explanation: 'GRUPPTEST (efter huvudbrytartestet visade "din källa"): 1) Slå AV alla gruppbrytare utom EN, 2) Hörs störning? → Källan på denna grupp!, 3) Om nej, prova nästa grupp, 4) När hittat rätt grupp: Dra ur apparater en efter en tills störning försvinner!'
                    },
                    {
                        id: 'c6-7-e7',
                        type: 'true-false',
                        question: 'Pejling med portabel radio kan hjälpa dig hitta externa störkällor.',
                        correct: true,
                        explanation: 'SANT! Pejling: 1) Starta hemma (notera S-meter), 2) Gå åt olika håll (N, S, Ö, V) 50m åt gången, 3) Följ där det blir starkare, 4) När nära (S9+): Dokumentera adress, tid, ta foton, ljudprov. Var diskret!'
                    },
                    {
                        id: 'c6-7-e8',
                        type: 'multiple-choice',
                        question: 'Vad är den vanligaste fallgropen i felsökning?',
                        options: [
                            'Dokumentera för mycket',
                            'Gissa istället för att testa → slösar tid och pengar på fel lösningar',
                            'Testa för mycket',
                            'Vara för noggrann'
                        ],
                        correct: 1,
                        explanation: 'Fallgrop #1: GISSA istället för att TESTA! "Det är säkert mantelströmmar" → köper balun → var inte det! Slösat pengar och tid. RÄTT: GÖR TESTERNA (huvudbrytartest, PTT-test, etc) - BEVISA vad orsaken är FÖRST!'
                    },
                    {
                        id: 'c6-7-e9',
                        type: 'multiple-choice',
                        question: 'Hur verifierar du att lösningen fungerar?',
                        options: [
                            'Testa en gång',
                            'Testa alla band, effekter, trafiksätt, tider - "worst case" måste fungera!',
                            'Hoppas på det bästa',
                            'Fråga någon'
                        ],
                        correct: 1,
                        explanation: 'VERIFIERING: Testa på ALLA band där problemet fanns, med OLIKA effekter (5W, 50W, 100W), olika trafiksätt (SSB, CW, FM), olika tider (om tidsberoende). "Worst case" måste fungera! Låt det vara några dagar/veckor - kommer problemet tillbaka?'
                    },
                    {
                        id: 'c6-7-e10',
                        type: 'matching',
                        question: 'Para ihop test med vad det visar:',
                        pairs: [
                            { left: 'Huvudbrytartest', right: 'Din källa eller extern?' },
                            { left: 'PTT-test', right: 'Korrelerar med din sändning?' },
                            { left: 'Grupptest', right: 'Vilken elkrets i ditt hus?' },
                            { left: 'Kabeltest', right: 'Vilken kabel för RF in?' }
                        ]
                    }
                ]
            }
        ]
    },
{
    id: 7,
    number: 7,
    title: 'Regler och Bestämmelser',
    slug: 'kapitel-7-regler-bestammelser',
    icon: '📜',
    subchapters: [
        {
            id: '7.1',
            title: '7.1 Regelverkets uppbyggnad',
            exercises: [
                {
                    id: 'c7-1-e1',
                    type: 'multiple-choice',
                    question: 'Vad är ITU och vad gör organisationen?',
                    options: [
                        'FN-organ för datorer',
                        'FN-organ som fördelar radiofrekvenser globalt och tilldelar prefix',
                        'Europeisk radioorganisation',
                        'Svensk myndighet'
                    ],
                    correct: 1,
                    explanation: 'ITU (International Telecommunication Union) är FN:s organ för telekommunikation. Uppgifter: Fördela radiofrekvenser mellan länder/tjänster, tilldela prefix (SM=Sverige, DL=Tyskland), sätta tekniska standarder, dela upp världen i 3 regioner.'
                },
                {
                    id: 'c7-1-e2',
                    type: 'multiple-choice',
                    question: 'Vilken ITU-region ligger Sverige i?',
                    options: [
                        'Region 1 (Europa, Afrika, Mellanöstern)',
                        'Region 2 (Amerika)',
                        'Region 3 (Asien, Oceanien)',
                        'Ingen region'
                    ],
                    correct: 0,
                    explanation: 'Sverige ligger i ITU Region 1 (Europa, Afrika, Mellanöstern, Ryssland). Detta påverkar vilka frekvenser vi får använda - t.ex. 7000-7200 kHz i Region 1, men bara 7000-7125 kHz i Region 2.'
                },
                {
                    id: 'c7-1-e3',
                    type: 'multiple-choice',
                    question: 'Vad är CEPT och vad gör de för amatörradio?',
                    options: [
                        'FN-organ',
                        'Europeisk organisation som harmoniserar tele-regler, bl.a. HAREC och fri trafik',
                        'Svensk radioförening',
                        'Amerikanskt organ'
                    ],
                    correct: 1,
                    explanation: 'CEPT (European Conference of Postal and Telecommunications Administrations) = 48 europeiska länder. Viktigt för amatörradio: CEPT T/R 61-01 (HAREC-certifikat), CEPT T/R 61-02 (trafik i andra länder utan tillstånd).'
                },
                {
                    id: 'c7-1-e4',
                    type: 'multiple-choice',
                    question: 'Vad står HAREC för och vad innebär det?',
                    options: [
                        'High Amateur Radio Class',
                        'Harmonised Amateur Radio Examination Certificate - gemensamt EU-certifikat',
                        'Ham Radio Education Center',
                        'Historical Amateur Radio Equipment'
                    ],
                    correct: 1,
                    explanation: 'HAREC = Harmonised Amateur Radio Examination Certificate. Europeiskt gemensamt certifikat (CEPT T/R 61-01). Ger: Alla band, 1000W PEP, alla trafiksätt, CEPT-trafik i 48 länder, livstid.'
                },
                {
                    id: 'c7-1-e5',
                    type: 'multiple-choice',
                    question: 'Vilken svensk myndighet utfärdar certifikat och anropssignaler?',
                    options: [
                        'SSA',
                        'PTS (Post- och telestyrelsen)',
                        'IARU',
                        'CEPT'
                    ],
                    correct: 1,
                    explanation: 'PTS (Post- och telestyrelsen) är svensk myndighet som utfärdar HAREC-certifikat och tilldelar anropssignaler. SSA arrangerar proven på PTS uppdrag. PTS sätter också reglerna (PTSFS).'
                },
                {
                    id: 'c7-1-e6',
                    type: 'multiple-choice',
                    question: 'Vad är IARU och vad gör de?',
                    options: [
                        'FN-organ för radio',
                        'Frivillig organisation som representerar radioamatörer, utarbetar bandplaner',
                        'Europeisk myndighet',
                        'Amerikansk radioförening'
                    ],
                    correct: 1,
                    explanation: 'IARU (International Amateur Radio Union) är frivillig organisation för radioamatörer. Uppgifter: Representera i ITU, utarbeta bandplaner (CW här, SSB där), koordinera evenemang, dela upp världen i 3 regioner.'
                },
                {
                    id: 'c7-1-e7',
                    type: 'multiple-choice',
                    question: 'Vad är SSA och vad gör de?',
                    options: [
                        'Statlig myndighet',
                        'Sveriges Sändareamatörer - frivillig förening, arrangerar prov och driver QSL-byrå',
                        'Europeiskt radioförbund',
                        'Företag som säljer radioapparater'
                    ],
                    correct: 1,
                    explanation: 'SSA (Sveriges Sändareamatörer) är frivillig förening för svenska radioamatörer. Uppgifter: Arrangera certifikatprov (PTS uppdrag), utbildningsmaterial, QTC-tidning, QSL-byrå, Sveriges medlem i IARU, lobbying.'
                },
                {
                    id: 'c7-1-e8',
                    type: 'true-false',
                    question: 'IARU:s bandplan är LAG i Sverige och du kan få böter om du bryter mot den.',
                    correct: false,
                    explanation: 'FALSKT! IARU:s bandplan är FRIVILLIG (inte lag i Sverige). Men nästan alla följer den eftersom det FUNGERAR - om alla vet var CW, SSB och digitalt ska vara blir det mindre kaos. God amatörpraxis = följ bandplanen!'
                },
                {
                    id: 'c7-1-e9',
                    type: 'matching',
                    question: 'Para ihop organisation med uppgift:',
                    pairs: [
                        { left: 'ITU', right: 'Fördelar frekvenser globalt' },
                        { left: 'CEPT', right: 'Harmoniserar EU-regler (HAREC)' },
                        { left: 'IARU', right: 'Utarbetar bandplaner' },
                        { left: 'PTS', right: 'Utfärdar certifikat i Sverige' }
                    ]
                },
                {
                    id: 'c7-1-e10',
                    type: 'multiple-choice',
                    question: 'Vad betyder "undantag från tillståndsplikt" för amatörradio?',
                    options: [
                        'Du får sända helt fritt',
                        'Du behöver inte ansöka om tillstånd per radio, men måste ha certifikat och följa regler',
                        'Inga regler gäller',
                        'Du behöver inget certifikat'
                    ],
                    correct: 1,
                    explanation: 'Undantag från tillståndsplikt = Du behöver INTE ansöka för varje radio (som förr). MEN: Du MÅSTE ha HAREC-certifikat, anropssignal och följa PTSFS. Som körkortet - du ansöker inte per resa, men måste följa trafikreglerna!'
                }
            ]
        },
        {
            id: '7.2',
            title: '7.2 Anropssignaler',
            exercises: [
                {
                    id: 'c7-2-e1',
                    type: 'multiple-choice',
                    question: 'Hur är en svensk personlig anropssignal uppbyggd?',
                    options: [
                        'Bara bokstäver',
                        'Prefix (SM) + områdessiffra (0-7) + suffix (2-3 bokstäver)',
                        'Bara siffror',
                        'Helt valfritt'
                    ],
                    correct: 1,
                    explanation: 'Svensk signal: Prefix (SM, SA, etc.) + områdessiffra (0-7) + suffix (2-3 bokstäver). Exempel: SM5XYZ där SM=Sverige, 5=Östergötland/Kalmar, XYZ=personlig del. Områdessiffran baseras på bostadsadress.'
                },
                {
                    id: 'c7-2-e2',
                    type: 'multiple-choice',
                    question: 'Vad betyder siffran i SM5XYZ?',
                    options: [
                        'Effektnivå',
                        'Geografiskt område (5 = Östergötland, Kalmar, Gotland, Södermanland)',
                        'Antal år som amatör',
                        'Certifikatklass'
                    ],
                    correct: 1,
                    explanation: 'Områdessiffra (0-7) anger geografiskt område baserat på bostadsadress. 0=Stockholm, 1=Norrbotten/Västerbotten, 2=Norrland nordväst, 3=Västra Sverige, 4=Södra Sverige, 5=Östra Mellansverige, 6=Värmland/Örebro, 7=Dalarna.'
                },
                {
                    id: 'c7-2-e3',
                    type: 'multiple-choice',
                    question: 'När måste du identifiera din station?',
                    options: [
                        'Bara i början',
                        'Bara i slutet',
                        'Vid början, slut OCH minst var 10:e minut under pågående sändning',
                        'Aldrig'
                    ],
                    correct: 2,
                    explanation: 'IDENTIFIERINGSSKYLDIGHET (PTSFS): Vid början och slut av varje sändning + minst var 10:e minut under pågående sändning. Gäller även test/tuning! Glöm detta = regelbrott.'
                },
                {
                    id: 'c7-2-e4',
                    type: 'multiple-choice',
                    question: 'Hur identifierar du dig när du trafikerar i Tyskland med svensk licens?',
                    options: [
                        'SM5XYZ som vanligt',
                        'DL/SM5XYZ (värdlandets prefix före)',
                        'Ny tysk signal krävs',
                        'Tyskland/SM5XYZ'
                    ],
                    correct: 1,
                    explanation: 'CEPT-trafik: Värdlandets prefix + / + din signal. Tyskland=DL/SM5XYZ, Norge=LA/SM5XYZ, Spanien=EA/SM5XYZ. Detta visar att du är svensk gästoperatör i värdlandet.'
                },
                {
                    id: 'c7-2-e5',
                    type: 'multiple-choice',
                    question: 'Vad betyder /M, /P och /MM efter anropssignalen?',
                    options: [
                        'Olika effektnivåer',
                        '/M=Mobil (bil), /P=Portabel (fält), /MM=Maritime Mobile (fartyg)',
                        'Olika certifikatklasser',
                        'Olika band'
                    ],
                    correct: 1,
                    explanation: '/M = Mobil (i fordon), /P = Portabel (fältstuga, temporär), /MM = Maritime Mobile (fartyg på internationellt vatten), /AM = Aeronautic Mobile (flygplan, mycket ovanligt). Exempel: SM5XYZ/M när du kör bil.'
                },
                {
                    id: 'c7-2-e6',
                    type: 'multiple-choice',
                    question: 'Vilken signal använder klubbstationer?',
                    options: [
                        'Samma som personliga (SM5XYZ)',
                        'SK-prefix (t.ex. SK7AB) - K visar klubb',
                        'SC-prefix',
                        'SL-prefix'
                    ],
                    correct: 1,
                    explanation: 'Klubbstationer använder SK-prefix (K=Klubb). Exempel: SK7RR (Göteborgs repeater). Automatiska stationer (repeatrar, fyrar) använder SE-prefix. Specialevenemang kan ha SL-prefix.'
                },
                {
                    id: 'c7-2-e7',
                    type: 'true-false',
                    question: 'Om du flyttar från Göteborg (område 3) till Stockholm (område 0) MÅSTE du byta anropssignal.',
                    correct: false,
                    explanation: 'FALSKT! Du behöver INTE byta signal om du flyttar. Din signal följer med dig. Men du KAN ansöka om ny signal med rätt områdessiffra om du vill. Många behåller sin gamla signal av sentiment.'
                },
                {
                    id: 'c7-2-e8',
                    type: 'multiple-choice',
                    question: 'Vilket fonetiskt alfabet används internationellt?',
                    options: [
                        'Svenska (Adam, Bertil, Cesar...)',
                        'ITU (Alfa, Bravo, Charlie...)',
                        'Amerikanska (Apple, Boy, Cat...)',
                        'Valfritt'
                    ],
                    correct: 1,
                    explanation: 'ITU:s fonetiska alfabet är internationell standard: Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu.'
                },
                {
                    id: 'c7-2-e9',
                    type: 'multiple-choice',
                    question: 'Hur bokstaverar du "SM5ABC" fonetiskt korrekt?',
                    options: [
                        'S M 5 A B C',
                        'SIERRA MIKE FIFE ALFA BRAVO CHARLIE',
                        'Sven Martin Fem Anna Bertil Cesar',
                        'Sweden Mike Five Alpha Beta Charlie'
                    ],
                    correct: 1,
                    explanation: 'Korrekt: SIERRA MIKE FIFE ALFA BRAVO CHARLIE. Viktigt: Siffror också fonetiskt (FIFE=5, WUN=1, TOO=2, TREE=3, FOW-er=4, NIN-er=9). Vid dåliga förhållanden, upprepa alltid!'
                },
                {
                    id: 'c7-2-e10',
                    type: 'true-false',
                    question: 'Vid test/tuning behöver du INTE identifiera dig med anropssignal.',
                    correct: false,
                    explanation: 'FALSKT och viktigt! Även vid test/tuning MÅSTE du identifiera: "SM5XYZ testar" eller "SM5XYZ tuning". Inte bara "test test test" utan signal! Detta är ett vanligt misstag som är regelbrott.'
                }
            ]
        },
        {
            id: '7.3',
            title: '7.3 Frekvenser och effekt',
            exercises: [
                {
                    id: 'c7-3-e1',
                    type: 'multiple-choice',
                    question: 'Vad är maximal tillåten effekt på de flesta amatörband med HAREC?',
                    options: [
                        '100W PEP',
                        '500W PEP',
                        '1000W (1 kW) PEP',
                        'Obegränsad'
                    ],
                    correct: 2,
                    explanation: 'Maxeffekt: 1000W PEP på de flesta band. UNDANTAG: 60m = 15W EIRP (inkl. antennvinst!), 6m = 200W PEP. PEP = Peak Envelope Power (toppeffekt vid modulationstoppar på SSB).'
                },
                {
                    id: 'c7-3-e2',
                    type: 'multiple-choice',
                    question: 'Vilken effekt får du använda på 60m-bandet?',
                    options: [
                        '1000W som vanligt',
                        '15W EIRP (inkl. antennvinst)',
                        '200W PEP',
                        '500W'
                    ],
                    correct: 1,
                    explanation: '60m-bandet (5 MHz): Max 15W EIRP. EIRP = Effective Isotropic Radiated Power = sändareffekt - kabelförlust + antennvinst. Exempel: 10W sändare + 3 dBi antenn ≈ 20W EIRP = FÖR HÖGT! Minska till 8W.'
                },
                {
                    id: 'c7-3-e3',
                    type: 'multiple-choice',
                    question: 'Vad betyder QRP?',
                    options: [
                        'Hög effekt (>500W)',
                        'Frivillig lågeffekt (5W CW, 10W SSB på HF)',
                        'Endast digitala modes',
                        'Endast repeatrar'
                    ],
                    correct: 1,
                    explanation: 'QRP = Frivillig lågeffektstrafik. Definition: Max 5W CW, max 10W PEP SSB på HF. Q-kod: "Ska jag minska effekten?". Visar skicklighet - jobba DX med minimal effekt! Populärt för portabel drift och utmaning.'
                },
                {
                    id: 'c7-3-e4',
                    type: 'multiple-choice',
                    question: 'Vilket band har lägst maxeffekt (förutom 60m)?',
                    options: [
                        '20m (14 MHz)',
                        '6m (50 MHz) - max 200W PEP',
                        '2m (144 MHz)',
                        '70cm (430 MHz)'
                    ],
                    correct: 1,
                    explanation: '6m-bandet (50-52 MHz) har max 200W PEP - lägre än vanliga 1000W. Övriga VHF/UHF-band: 1000W. 60m är lägst med 15W EIRP, men 6m är näst lägst.'
                },
                {
                    id: 'c7-3-e5',
                    type: 'true-false',
                    question: 'Du ska alltid använda minsta möjliga effekt för att uppnå kontakten.',
                    correct: true,
                    explanation: 'SANT och viktigt! Amatörradiokod: "Use minimum power necessary". Varför? Minska störningar, säkerhet (RF-exponering), ekonomi, rättvisa, lär dig teknik. 100W + bra antenn >> 1000W + dålig antenn!'
                },
                {
                    id: 'c7-3-e6',
                    type: 'multiple-choice',
                    question: 'Vad är DX-window och hur använder man det?',
                    options: [
                        'Fönster för att se DX',
                        'Frekvensområde där DX-stationer sänder, europeiska lyssnar där men anropar UTANFÖR',
                        'Tidpunkt på dygnet',
                        'Typ av antenn'
                    ],
                    correct: 1,
                    explanation: 'DX-window (t.ex. 14195-14200 kHz på 20m): Sällsynta DX-stationer sänder här. Europeiska stationer lyssnar där men ANROPAR UTANFÖR (14210+). Undvik QRM, fler får kontakt. ALDRIG anropa i DX-window om du är i Europa!'
                },
                {
                    id: 'c7-3-e7',
                    type: 'multiple-choice',
                    question: 'Vad är anropsfrekvensen för 2m SSB?',
                    options: [
                        '144.300 MHz',
                        '145.500 MHz',
                        '433.500 MHz',
                        '14.285 MHz'
                    ],
                    correct: 0,
                    explanation: '144.300 MHz är internationell SSB-anropsfrekvens på 2m. Anropa här kort, sedan flytta till annan frekvens för QSO. 145.500 MHz är FM simplex-anropsfrekvens (inte SSB). Lär dig denna - mycket använd!'
                },
                {
                    id: 'c7-3-e8',
                    type: 'true-false',
                    question: 'WARC-banden (30m, 17m, 12m) får användas för tävlingar.',
                    correct: false,
                    explanation: 'FALSKT! WARC-band (World Administrative Radio Conference): 30m, 17m, 12m. Speciella regler: INGA tävlingar (för att bevara för QSO), 30m endast CW/digitalt (ej SSB/FM). Respektera detta!'
                },
                {
                    id: 'c7-3-e9',
                    type: 'matching',
                    question: 'Para ihop band med typisk användning:',
                    pairs: [
                        { left: '20m (14 MHz)', right: 'DX-bandet, global räckvidd' },
                        { left: '40m (7 MHz)', right: 'Allround, populäraste HF' },
                        { left: '2m (144 MHz)', right: 'Lokal VHF, FM-repeatrar' },
                        { left: '60m (5 MHz)', right: 'Låg effekt, sekundär' }
                    ]
                },
                {
                    id: 'c7-3-e10',
                    type: 'multiple-choice',
                    question: 'Vad är IARU:s bandplan?',
                    options: [
                        'Lag som måste följas',
                        'Frivillig plan som anger var CW, SSB, digitalt ska vara - starkt respekterad',
                        'Endast för tävlingar',
                        'Endast för DX'
                    ],
                    correct: 1,
                    explanation: 'IARU Region 1 bandplan är FRIVILLIG men starkt respekterad. Anger: CW här (t.ex. 14000-14070), SSB där (14100-14350), digitalt här (14070-14099). Följs av nästan alla - gör det lättare att hitta kontakter!'
                }
            ]
        },
        {
            id: '7.4',
            title: '7.4 Tillåtet innehåll',
            exercises: [
                {
                    id: 'c7-4-e1',
                    type: 'true-false',
                    question: 'Du får sälja din gamla transceiver med pris och köpuppmaningar på luften.',
                    correct: false,
                    explanation: 'FALSKT! Kommersiell verksamhet förbjuden. Du får KORT nämna att du funderar på att sälja och hänvisa till mail/telefon. Men INTE: pris, försäljningspitch, "ring nu!", upprepad reklam. Amatörradio är icke-kommersiellt!'
                },
                {
                    id: 'c7-4-e2',
                    type: 'true-false',
                    question: 'Musik (inspelad eller live) är förbjuden på amatörradio.',
                    correct: true,
                    explanation: 'SANT! Musik förbjuden - varken inspelad (Spotify, CD) eller live (sjunga, spela instrument). Amatörradio är för tvåvägskommunikation, experiment, utbildning - INTE broadcast eller underhållning. Upphovsrättslicenser krävs för musik.'
                },
                {
                    id: 'c7-4-e3',
                    type: 'multiple-choice',
                    question: 'Är krypterade meddelanden tillåtna?',
                    options: [
                        'Ja, obegränsat',
                        'Nej, all trafik ska vara öppen och avlyssningsbar',
                        'Ja, för nödtrafik',
                        'Ja, mellan klubbar'
                    ],
                    correct: 1,
                    explanation: 'All amatörradiotrafik ska vara ÖPPEN och möjlig att avlyssna. Kryptering eller hemliga koder förbjudna. Undantag: Q-koder och RST-rapporter OK (standardiserade och öppna). Transparens = tillit!'
                },
                {
                    id: 'c7-4-e4',
                    type: 'multiple-choice',
                    question: 'Vad får du INTE prata om på amatörradio?',
                    options: [
                        'Tekniska ämnen',
                        'Politik (propaganda), religion (missionering), kommersiellt, musik, kryptering',
                        'Väder',
                        'Familj'
                    ],
                    correct: 1,
                    explanation: 'FÖRBJUDET: Politik (propaganda/debatt), religion (missionering), kommersiell verksamhet, musik, kryptering, olämpligt språk, störningar. TILLÅTET: Teknik, personligt (familj, väder, hobbies), nöd, tävlingar, utbildning.'
                },
                {
                    id: 'c7-4-e5',
                    type: 'true-false',
                    question: 'Du får prata om ditt jobb, men inte göra reklam för ditt företag.',
                    correct: true,
                    explanation: 'SANT! Gråzon: Berätta vad du jobbar med = OK ("Jag är elektriker"). Reklam för företaget = EJ OK ("Ring mitt företag för offerter"). Tumregel: Skulle jag säga detta på en hobbyklubb? Om ja → OK.'
                },
                {
                    id: 'c7-4-e6',
                    type: 'multiple-choice',
                    question: 'Vad är "god amatöranda"?',
                    options: [
                        'Köra maxeffekt',
                        'Tekniskt fokus, vänlighet, hjälpsamhet, respekt, icke-kommersiellt',
                        'Tävla mycket',
                        'Vara tyst'
                    ],
                    correct: 1,
                    explanation: 'God amatöranda: Tekniskt fokus, vänlighet, hjälpsamhet, respekt för andra, minimal effekt, god ton, icke-kommersiellt, dela kunskap, följa regler. Amatörradio bygger på ömsesidig respekt och samarbete!'
                },
                {
                    id: 'c7-4-e7',
                    type: 'true-false',
                    question: 'Nödtrafik har alltid företräde framför all annan trafik.',
                    correct: true,
                    explanation: 'SANT och kritiskt! Vid nödsignal (MAYDAY, NÖDTRAFIK): ALLA andra QSO avbryts omedelbart, TYST, lyssna, hjälp om du kan. Nödfrekvenser: 3760 kHz (80m), 7110 kHz (40m), 14300 kHz (20m), 145.500 MHz (2m FM).'
                },
                {
                    id: 'c7-4-e8',
                    type: 'multiple-choice',
                    question: 'Vad får du göra vid nödsituation?',
                    options: [
                        'Ingenting',
                        'Vidarebefordra nödmeddelanden, använda annan frekvens om nödvändigt, bryta regler för att rädda liv',
                        'Bara lyssna',
                        'Stänga av radion'
                    ],
                    correct: 1,
                    explanation: 'Vid NÖD får du: Vidarebefordra meddelanden för icke-amatörer (annars förbjudet), använda VILKEN frekvens som helst (även utanför amatörband), överskrIda effektgränser. LIV går före regler! Men falsk nödsignal = allvarligt brott.'
                },
                {
                    id: 'c7-4-e9',
                    type: 'true-false',
                    question: 'Du får avsiktligt störa annan trafik (jamming) om du tycker de pratar för länge.',
                    correct: false,
                    explanation: 'FALSKT och allvarligt brott! Avsiktlig störning (jamming) är FÖRBJUDET och kan leda till: indragning av certifikat, böter, åtal. Om störd av lång QSO: Vänta eller byt frekvens. ALDRIG störa avsiktligt!'
                },
                {
                    id: 'c7-4-e10',
                    type: 'matching',
                    question: 'Para ihop aktivitet med tillåtet/förbjudet:',
                    pairs: [
                        { left: 'Tekniskt samtal om antenner', right: 'TILLÅTET ✅' },
                        { left: 'Spela musik från Spotify', right: 'FÖRBJUDET ❌' },
                        { left: 'Sälja bil med pris på luften', right: 'FÖRBJUDET ❌' },
                        { left: 'Vidarebefordra nödmeddelande', right: 'TILLÅTET ✅' }
                    ]
                }
            ]
        },
        {
            id: '7.5',
            title: '7.5 Internationell trafik',
            exercises: [
                {
                    id: 'c7-5-e1',
                    type: 'multiple-choice',
                    question: 'Vad innebär CEPT T/R 61-02?',
                    options: [
                        'Förbud mot trafik utomlands',
                        'Rätt att trafikera i 48 europeiska länder utan separat tillstånd',
                        'Krav på nytt prov',
                        'Endast för klubbstationer'
                    ],
                    correct: 1,
                    explanation: 'CEPT T/R 61-02 = Tillfällig användning. Med HAREC-certifikat får du trafikera i 48 CEPT-länder utan separat tillstånd, upp till 3 månader per besök. Använd värdlandets prefix + din signal (DL/SM5XYZ i Tyskland).'
                },
                {
                    id: 'c7-5-e2',
                    type: 'multiple-choice',
                    question: 'Hur länge får du trafikera i ett CEPT-land per besök?',
                    options: [
                        '1 vecka',
                        '1 månad',
                        'Upp till 3 månader (vanlig regel, kan variera)',
                        'Obegränsat'
                    ],
                    correct: 2,
                    explanation: 'CEPT-trafik: Vanligen upp till 3 månader per besök (kan variera mellan länder). För längre vistelse: Ansök om permanent tillstånd i värdlandet. Ta alltid med kopia på HAREC-certifikatet!'
                },
                {
                    id: 'c7-5-e3',
                    type: 'multiple-choice',
                    question: 'Hur identifierar du dig i Norge med svensk licens?',
                    options: [
                        'SM5XYZ som vanligt',
                        'LA/SM5XYZ (norska prefix före)',
                        'NO/SM5XYZ',
                        'Norge-SM5XYZ'
                    ],
                    correct: 1,
                    explanation: 'Norge använder LA-prefix. Du blir: LA/SM5XYZ. Danmark=OZ/SM5XYZ, Finland=OH/SM5XYZ, Tyskland=DL/SM5XYZ, Spanien=EA/SM5XYZ, Frankrike=F/SM5XYZ, UK=G/SM5XYZ eller M/SM5XYZ.'
                },
                {
                    id: 'c7-5-e4',
                    type: 'true-false',
                    question: 'USA är ett CEPT-land så du kan trafikera där direkt med HAREC-certifikat.',
                    correct: false,
                    explanation: 'FALSKT! USA är INTE CEPT. MEN: Sverige har reciprokt avtal med USA. Du måste ansöka om "reciprocal permit" hos FCC (cirka $35, gäller 1 år) ELLER ta amerikanskt certifikat. Trafik utan tillstånd = olagligt!'
                },
                {
                    id: 'c7-5-e5',
                    type: 'multiple-choice',
                    question: 'Vilka länder är INTE CEPT och kräver separat tillstånd?',
                    options: [
                        'Norge, Danmark, Finland',
                        'Thailand, Japan, Australien',
                        'Tyskland, Frankrike, Spanien',
                        'Alla EU-länder'
                    ],
                    correct: 1,
                    explanation: 'INTE CEPT (kräver tillstånd): USA (reciprokt avtal), Thailand (ansökan NBTC), Japan (lokalt certifikat), Australien (ansökan ACMA), Egypten (mycket svårt). ALLTID kolla innan du trafikerar utanför Europa!'
                },
                {
                    id: 'c7-5-e6',
                    type: 'multiple-choice',
                    question: 'Vad betyder /MM efter anropssignalen?',
                    options: [
                        'Mycket hög effekt (Maximum)',
                        'Maritime Mobile - trafikerar från fartyg på internationellt vatten',
                        'Mobil i bil',
                        'Monteringsmisslyckande'
                    ],
                    correct: 1,
                    explanation: '/MM = Maritime Mobile (fartyg på internationellt vatten). Följ ditt hemlands regler. Exempel: SM5XYZ/MM när du seglar på Östersjön. /AM = Aeronautic Mobile (flygplan, mycket ovanligt och kräver tillstånd från flygbolag).'
                },
                {
                    id: 'c7-5-e7',
                    type: 'true-false',
                    question: 'När du trafikerar utomlands ska du alltid följa VÄRDLANDETS regler (frekvenser, effekt).',
                    correct: true,
                    explanation: 'SANT och viktigt! Vid CEPT-trafik: Följ VÄRDLANDETS regler (frekvenser, effektgränser, bandplaner, trafiksätt). Exempel: Om värdlandet har lägre effektgräns än Sverige, följ deras. Respektera värdlandet!'
                },
                {
                    id: 'c7-5-e8',
                    type: 'multiple-choice',
                    question: 'Vad ska du ta med när du trafikerar utomlands?',
                    options: [
                        'Ingenting',
                        'Kopia på HAREC-certifikat (papper eller digitalt)',
                        'Bara radion',
                        'Svenskt körkort'
                    ],
                    correct: 1,
                    explanation: 'Ta alltid med: Kopia på HAREC-certifikat (papper + digitalt), lista över lokala repeatrar, frekvensplaner för värdlandet, SSA:s kontaktinfo. Certifikatet kan kontrolleras av myndigheter - ha det tillgängligt!'
                },
                {
                    id: 'c7-5-e9',
                    type: 'matching',
                    question: 'Para ihop land med prefix:',
                    pairs: [
                        { left: 'Norge', right: 'LA' },
                        { left: 'Tyskland', right: 'DL' },
                        { left: 'Spanien', right: 'EA' },
                        { left: 'Finland', right: 'OH' }
                    ]
                },
                {
                    id: 'c7-5-e10',
                    type: 'true-false',
                    question: 'Om du trafikerar i Thailand utan tillstånd riskerar du böter, beslag och fängelse.',
                    correct: true,
                    explanation: 'SANT! Thailand är INTE CEPT och har stränga lagar. Trafik utan tillstånd kan ge: Beslag av utrustning, stora böter, fängelse. ALLTID kolla INNAN du trafikerar i nytt land (SSA:s hemsida eller IARU). Var inte naiv!'
                }
            ]
        },
        {
            id: '7.6',
            title: '7.6 Loggbok, QSL och repeatrar',
            exercises: [
                {
                    id: 'c7-6-e1',
                    type: 'true-false',
                    question: 'Loggbok är obligatorisk för all amatörradiotrafik i Sverige.',
                    correct: false,
                    explanation: 'FALSKT! Loggbok är EJ obligatorisk för personlig trafik i Sverige. MEN: Starkt rekommenderad och nödvändig för diplom (DXCC), tävlingar, störningsklagomål. Vissa länder (t.ex. USA) kräver loggbok.'
                },
                {
                    id: 'c7-6-e2',
                    type: 'multiple-choice',
                    question: 'Vad ska finnas med i en loggboksanteckning?',
                    options: [
                        'Bara anropssignal',
                        'Datum, tid (UTC), frekvens, band, mode, anropssignal, RST, QTH',
                        'Bara datum',
                        'Ingenting'
                    ],
                    correct: 1,
                    explanation: 'Loggbok ska innehålla: Datum, tid (UTC!), frekvens, band, mode (SSB/CW/FT8), anropssignal, RST sänt/mottaget, namn, QTH/locator, anteckningar. Tid alltid i UTC (inte lokal tid)!'
                },
                {
                    id: 'c7-6-e3',
                    type: 'multiple-choice',
                    question: 'Vad är ett QSL-kort?',
                    options: [
                        'En faktura',
                        'Ett vykort som bekräftar en radiokontakt',
                        'Ett medlemskort',
                        'En antenn'
                    ],
                    correct: 1,
                    explanation: 'QSL-kort = vykort som bekräftar radiokontakt. Innehåll: Datum, tid (UTC), frekvens, mode, RST, anropssignaler. Skickas: Direkt (post), via byrå (SSA), elektroniskt (eQSL/LoTW). Används för diplom och som samlarföremål.'
                },
                {
                    id: 'c7-6-e4',
                    type: 'multiple-choice',
                    question: 'Hur kan du skicka QSL-kort?',
                    options: [
                        'Endast direkt post',
                        'Direkt (post), via byrå (SSA), eller elektroniskt (eQSL/LoTW)',
                        'Endast elektroniskt',
                        'Endast via SSA'
                    ],
                    correct: 1,
                    explanation: 'Tre sätt: 1) DIREKT (post, snabbt men dyrt), 2) VIA BYRÅ (SSA, billigt men långsamt 6-24 mån), 3) ELEKTRONISKT (eQSL/LoTW, omedelbart och gratis). För viktiga DX: Direkt med SAE (Self-Addressed Envelope).'
                },
                {
                    id: 'c7-6-e5',
                    type: 'multiple-choice',
                    question: 'Vad är en repeater?',
                    options: [
                        'En typ av antenn',
                        'Automatstation som tar emot på en frekvens och sänder på en annan',
                        'En förstärkare',
                        'Ett filter'
                    ],
                    correct: 1,
                    explanation: 'Repeater = automatstation som förlänger räckvidden. Tar emot på ingångsfrekvens, sänder på utgångsfrekvens. Placeras högt (torn, berg) → 50-100 km täckning från handhållen 5W-radio. Viktigt för lokal VHF/UHF-trafik!'
                },
                {
                    id: 'c7-6-e6',
                    type: 'multiple-choice',
                    question: 'Vad betyder "shift" på en repeater?',
                    options: [
                        'Tid på dygnet',
                        'Skillnaden mellan ingångs- och utgångsfrekvens',
                        'Effekt',
                        'Modulation'
                    ],
                    correct: 1,
                    explanation: 'Shift = frekvensskillnad mellan ingång (vad du sänder) och utgång (vad repeatern sänder). 2m: -600 kHz, 70cm: +1,6 MHz. Exempel: Repeater 145.700 med shift -600 → du sänder 145.100, lyssnar 145.700.'
                },
                {
                    id: 'c7-6-e7',
                    type: 'multiple-choice',
                    question: 'Vad är CTCSS-ton (subton) på repeatrar?',
                    options: [
                        'Volymkontroll',
                        'Låg ton (t.ex. 123.0 Hz) som öppnar repeatern och förhindrar störningar',
                        'Effektkontroll',
                        'Frekvensjustering'
                    ],
                    correct: 1,
                    explanation: 'CTCSS (Continuous Tone-Coded Squelch System) = låg ton (t.ex. 123.0 Hz, 88.5 Hz) som öppnar repeatern. Förhindrar att andra signaler öppnar repeatern av misstag. Kolla repeaterlista för rätt ton!'
                },
                {
                    id: 'c7-6-e8',
                    type: 'true-false',
                    question: 'På repeatrar ska du hålla QSO kort (3-5 min) så andra får plats.',
                    correct: true,
                    explanation: 'SANT! Repeater-etikette: Kort QSO (3-5 min), identifiera korrekt, gör pauser, nödtrafik prioriteras ALLTID. Repeatrar är för ALLA - var artigt och dela utrymmet. Långa QSO → gå till simplex-frekvens istället!'
                },
                {
                    id: 'c7-6-e9',
                    type: 'matching',
                    question: 'Para ihop repeater-term med förklaring:',
                    pairs: [
                        { left: 'Shift', right: 'Skillnad ingång/utgång' },
                        { left: 'CTCSS', right: 'Subton som öppnar repeatern' },
                        { left: 'Ingång (Rx)', right: 'Vad du sänder på' },
                        { left: 'Utgång (Tx)', right: 'Vad repeatern sänder på' }
                    ]
                },
                {
                    id: 'c7-6-e10',
                    type: 'true-false',
                    question: 'Vid nödsignal på repeater måste alla andra QSO avbrytas omedelbart.',
                    correct: true,
                    explanation: 'SANT och kritiskt! Vid MAYDAY eller NÖDTRAFIK: Alla avbryter, TYST, lyssna, hjälp om du kan. Nödtrafik har ALLTID företräde - liv går före allt annat. Säg "SM5XYZ clear för nödtrafik".'
                }
            ]
        }
    ]
},
{
        id: 8,
        number: 8,
        title: 'Trafikmetoder och Operatörsteknik',
        slug: 'kapitel-8-trafikmetoder',
        icon: '🎙️',
        subchapters: [
            {
                id: '8.1',
                title: '8.1 Q-koder och förkortningar',
                exercises: [
                    {
                        id: 'c8-1-e1',
                        type: 'multiple-choice',
                        question: 'Vad betyder Q-koden QTH?',
                        options: [
                            'Vilken tid är det?',
                            'Position/plats - Var befinner du dig?',
                            'Ska jag öka effekten?',
                            'Vilken frekvens?'
                        ],
                        correct: 1,
                        explanation: 'QTH = Position/plats. Exempel: "Mitt QTH är Stockholm" = Jag befinner mig i Stockholm. QTR = tid, QRO = öka effekt, QRG = frekvens.'
                    },
                    {
                        id: 'c8-1-e2',
                        type: 'multiple-choice',
                        question: 'Vad betyder QRZ?',
                        options: [
                            'Vem anropar mig?',
                            'Ska jag byta frekvens?',
                            'Är du redo?',
                            'Sluta sända'
                        ],
                        correct: 0,
                        explanation: 'QRZ = "Vem anropar mig?" Används efter CQ när du hört någon svara men inte uppfattat anropssignalen. QSY = byt frekvens, QRV = redo, QRT = sluta sända.'
                    },
                    {
                        id: 'c8-1-e3',
                        type: 'multiple-choice',
                        question: 'Vad betyder QRM och QRN?',
                        options: [
                            'QRM = atmosfäriska störningar, QRN = störningar från stationer',
                            'QRM = störningar från andra stationer, QRN = atmosfäriska störningar (åska)',
                            'Båda betyder samma sak',
                            'QRM = svag signal, QRN = stark signal'
                        ],
                        correct: 1,
                        explanation: 'QRM = Man-made interference (störningar från andra stationer). QRN = Natural noise (atmosfäriska störningar - åska, brus). Kom ihåg: RM = Radio/Man-made, RN = Radio/Natural.'
                    },
                    {
                        id: 'c8-1-e4',
                        type: 'true-false',
                        question: 'QRP betyder "Ska jag minska effekten?" som fråga, och "Låg effekt (≤5W)" som påstående.',
                        correct: true,
                        explanation: 'SANT! QRP används både som fråga ("Ska jag minska effekten?") och påstående ("Jag kör låg effekt"). QRP-entusiaster kör ofta ≤5W. Motsatsen: QRO = öka effekt/hög effekt.'
                    },
                    {
                        id: 'c8-1-e5',
                        type: 'multiple-choice',
                        question: 'Vad betyder "73" i amatörradio?',
                        options: [
                            'Nödanrop',
                            'Bästa hälsningar / Vänliga hälsningar',
                            'Kom igen',
                            'Jag förstår'
                        ],
                        correct: 1,
                        explanation: '"73" = Bästa hälsningar. Används ALLTID vid avslut av QSO. "88" = Kramar och kyssar (används till YL - kvinnliga radioamatörer). Exempel: "Thanks for QSO, 73!"'
                    },
                    {
                        id: 'c8-1-e6',
                        type: 'multiple-choice',
                        question: 'Vad betyder CQ?',
                        options: [
                            'Nödanrop',
                            'Allmänt anrop - söker kontakt med vem som helst',
                            'Slut på kontakt',
                            'Tystnad på frekvensen'
                        ],
                        correct: 1,
                        explanation: 'CQ = "Seek You" - allmänt anrop till VEM SOM HELST. Exempel: "CQ CQ CQ de SM5XYZ". Används för att initiera kontakt. CQ DX = söker långdistans-kontakt.'
                    },
                    {
                        id: 'c8-1-e7',
                        type: 'matching',
                        question: 'Para ihop Q-kod med betydelse:',
                        pairs: [
                            { left: 'QSL', right: 'Bekräftelse / QSL-kort' },
                            { left: 'QSY', right: 'Byt frekvens' },
                            { left: 'QSO', right: 'Radiokontakt' },
                            { left: 'QRT', right: 'Sluta sända / Stäng' }
                        ]
                    },
                    {
                        id: 'c8-1-e8',
                        type: 'true-false',
                        question: 'DE betyder "detta är" (from) och används i anrop, t.ex. "CQ DE SM5XYZ".',
                        correct: true,
                        explanation: 'SANT! DE (från franskans "de" = from) = "detta är". Format: CQ DE [din signal]. Skiljer på vem som kallar (före DE) och vem du är (efter DE).'
                    },
                    {
                        id: 'c8-1-e9',
                        type: 'multiple-choice',
                        question: 'Vad betyder förkortningen "OM"?',
                        options: [
                            'Old Man - manlig radioamatör',
                            'Original Message',
                            'Operator Manual',
                            'On Mode'
                        ],
                        correct: 0,
                        explanation: 'OM = "Old Man" (manlig radioamatör, används även till unga!). YL = "Young Lady" (kvinnlig radioamatör). XYL = "Ex-Young Lady" (gift mans fru). Lite gammaldags men används fortfarande!'
                    },
                    {
                        id: 'c8-1-e10',
                        type: 'multiple-choice',
                        question: 'Vad betyder WX i amatörradio?',
                        options: [
                            'Utrustning',
                            'Väder (Weather)',
                            'Frekvens',
                            'Antenn'
                        ],
                        correct: 1,
                        explanation: 'WX = Weather (väder). Andra vanliga: RIG = utrustning/radio, ANT = antenn, PSE = please (var snäll), TNX/TKS = thanks (tack), UR = your (din).'
                    }
                ]
            },
            {
                id: '8.2',
                title: '8.2 Fonetiska alfabetet',
                exercises: [
                    {
                        id: 'c8-2-e1',
                        type: 'multiple-choice',
                        question: 'Hur bokstaveras "A" i det internationella fonetiska alfabetet?',
                        options: [
                            'Adam',
                            'Alfa',
                            'Andrew',
                            'Anton'
                        ],
                        correct: 1,
                        explanation: 'A = Alfa (AL-FA). Använd ALLTID ITU/NATO-alfabetet, ALDRIG svenska ord som "Adam" eller "Anton"!'
                    },
                    {
                        id: 'c8-2-e2',
                        type: 'multiple-choice',
                        question: 'Hur bokstaveras "M" fonetiskt?',
                        options: [
                            'Mary',
                            'Mike',
                            'Martin',
                            'Metro'
                        ],
                        correct: 1,
                        explanation: 'M = Mike (MAJK). Andra viktiga: N = November, S = Sierra, T = Tango.'
                    },
                    {
                        id: 'c8-2-e3',
                        type: 'multiple-choice',
                        question: 'Hur uttalas siffran "9" fonetiskt?',
                        options: [
                            'Nain',
                            'Nine',
                            'Niner (NAJ-NER)',
                            'Novem'
                        ],
                        correct: 2,
                        explanation: '9 = "Niner" (NAJ-NER), INTE "nain"! Detta för att undvika förväxling med 5 (FAJF). Alla siffror uttalas med engelsk betoning.'
                    },
                    {
                        id: 'c8-2-e4',
                        type: 'true-false',
                        question: 'När man bokstaverar sin anropssignal ska man alltid använda fonetiskt alfabet första gången.',
                        correct: true,
                        explanation: 'SANT! Första gången: Alltid fonetiskt för tydlighet. Exempel: "SM5XYZ - Sierra Mike Five X-ray Yankee Zulu". Senare i QSO kan man förkorta om signalen är bra.'
                    },
                    {
                        id: 'c8-2-e5',
                        type: 'multiple-choice',
                        question: 'SM5ABC bokstaveras fonetiskt som:',
                        options: [
                            'Sigurd Martin Fem Adam Bertil Cesar',
                            'Sierra Mike Five Alfa Bravo Charlie',
                            'Sweden Mike Five Alfa Bravo Charlie',
                            'Sierra Mike Fem Alfa Bravo Charlie'
                        ],
                        correct: 1,
                        explanation: 'Korrekt: "Sierra Mike Five Alfa Bravo Charlie". Använd ALDRIG svenska ord (Sigurd, Bertil). Siffror på engelska men bokstäver på ITU/NATO-standard!'
                    },
                    {
                        id: 'c8-2-e6',
                        type: 'multiple-choice',
                        question: 'Hur bokstaveras "Q" fonetiskt?',
                        options: [
                            'Queen',
                            'Quebec (KE-BECK)',
                            'Quaker',
                            'Quick'
                        ],
                        correct: 1,
                        explanation: 'Q = Quebec (uttalas KE-BECK, inte "kweebek"). Andra svåra: J = Juliet (DJU-li-ett), X = X-ray (EKKS-REJ).'
                    },
                    {
                        id: 'c8-2-e7',
                        type: 'matching',
                        question: 'Para ihop bokstav med fonetiskt ord:',
                        pairs: [
                            { left: 'C', right: 'Charlie' },
                            { left: 'D', right: 'Delta' },
                            { left: 'F', right: 'Foxtrot' },
                            { left: 'W', right: 'Whiskey' }
                        ]
                    },
                    {
                        id: 'c8-2-e8',
                        type: 'multiple-choice',
                        question: 'Varför använder vi fonetiskt alfabet?',
                        options: [
                            'Det är bara tradition',
                            'För att bokstäver som B/D, M/N, F/S lätt förväxlas vid dålig signal',
                            'Det är ett lagkrav',
                            'För att låta professionell'
                        ],
                        correct: 1,
                        explanation: 'Fonetiskt alfabet förhindrar förväxlingar! B och D, M och N, F och S låter mycket lika. "Bravo" vs "Delta" är tydligt! Särskilt viktigt vid svag signal eller störningar.'
                    },
                    {
                        id: 'c8-2-e9',
                        type: 'true-false',
                        question: 'Siffror ska alltid uttalas med engelsk betoning (Ze-ro, Wan, Tu...) även när man pratar svenska.',
                        correct: true,
                        explanation: 'SANT! Alltid engelsk betoning för siffror: 0=Ze-ro, 1=Wan, 2=Tu, 3=Tri, 4=Fo-er, 5=Fajf, 6=Siks, 7=Sev-en, 8=Ejt, 9=Naj-ner. Detta är INTERNATIONELL standard!'
                    },
                    {
                        id: 'c8-2-e10',
                        type: 'multiple-choice',
                        question: 'Vad är den största fördelen med att kunna fonetiskt alfabet utantill?',
                        options: [
                            'Det imponerar på andra',
                            'Man kan snabbt och tydligt bokstavera sin signal utan att tänka',
                            'Det är lättare än vanligt alfabet',
                            'Det är obligatoriskt för licens'
                        ],
                        correct: 1,
                        explanation: 'När det sitter i ryggmärgen kan du fokusera på QSO istället för att tänka "hur var det nu S hette...". Öva 10 min/dag i 2 veckor så sitter det!'
                    }
                ]
            },
            {
                id: '8.3',
                title: '8.3 RST-systemet',
                exercises: [
                    {
                        id: 'c8-3-e1',
                        type: 'multiple-choice',
                        question: 'Vad står RST för?',
                        options: [
                            'Radio Signal Transmission',
                            'Readability, Strength, Tone',
                            'Receiver Sensitivity Test',
                            'Remote Station Transfer'
                        ],
                        correct: 1,
                        explanation: 'RST = Readability (läsbarhet 1-5), Strength (signalstyrka 1-9), Tone (ton 1-9, endast CW). Standard sedan 1930-talet!'
                    },
                    {
                        id: 'c8-3-e2',
                        type: 'multiple-choice',
                        question: 'Hur många siffror används i RST-rapport på foni (SSB/FM)?',
                        options: [
                            'En siffra',
                            'Två siffror (RS)',
                            'Tre siffror (RST)',
                            'Fyra siffror'
                        ],
                        correct: 1,
                        explanation: 'FONI: Bara RS (två siffror) - t.ex. "59". CW: RST (tre siffror) - t.ex. "599". T (ton) är bara relevant för CW/morsekod!'
                    },
                    {
                        id: 'c8-3-e3',
                        type: 'multiple-choice',
                        question: 'Vad betyder RST-rapporten "59" på SSB?',
                        options: [
                            'Läsbarhet 5, Styrka 9',
                            'Läsbarhet 5, Styrka 9, Ton 9',
                            'Bara styrka 59',
                            '59 procent signal'
                        ],
                        correct: 0,
                        explanation: '"59" på foni = R5 (perfekt läsbar), S9 (mycket stark signal). Bästa möjliga rapport på foni! På CW skulle det vara "599" (med ton).'
                    },
                    {
                        id: 'c8-3-e4',
                        type: 'multiple-choice',
                        question: 'Vad betyder "R5" i RST?',
                        options: [
                            'Oläsbar',
                            'Knappt läsbar',
                            'Perfekt läsbar',
                            'Läsbar med stor svårighet'
                        ],
                        correct: 2,
                        explanation: 'R (Readability): R1=oläsbar, R2=knappt läsbar, R3=svår, R4=läsbar, R5=perfekt läsbar. R5 är bäst!'
                    },
                    {
                        id: 'c8-3-e5',
                        type: 'true-false',
                        question: 'S9+20dB betyder att signalen är 20 dB starkare än S9 (ungefär 4 gånger starkare upplevd styrka).',
                        correct: true,
                        explanation: 'SANT! När signalen är starkare än S9 använder man +dB. S9+10dB ≈ dubbelt så stark, S9+20dB ≈ 4x, S9+30dB ≈ 8x. Exempel: "Du är 59 plus tjugo!"'
                    },
                    {
                        id: 'c8-3-e6',
                        type: 'multiple-choice',
                        question: 'Varför är det viktigt att ge ärlig RST-rapport istället för alltid "59"?',
                        options: [
                            'Det är lagen',
                            'Ger användbar information om signalkvalitet och utrustning',
                            'Det spelar ingen roll',
                            'För att inte vara för snäll'
                        ],
                        correct: 1,
                        explanation: 'Ärlig rapport hjälper andra förstå sina signalförhållanden! "57" eller "44" är mer användbart än falsk "59". Hjälper optimera utrustning/antenn.'
                    },
                    {
                        id: 'c8-3-e7',
                        type: 'matching',
                        question: 'Para ihop S-värde med betydelse:',
                        pairs: [
                            { left: 'S1', right: 'Knappt märkbar signal' },
                            { left: 'S5', right: 'Ganska god signal' },
                            { left: 'S7', right: 'Stark signal' },
                            { left: 'S9', right: 'Mycket stark signal (max på meter)' }
                        ]
                    },
                    {
                        id: 'c8-3-e8',
                        type: 'multiple-choice',
                        question: 'Vad är T-värdet i RST 599 (CW)?',
                        options: [
                            'Tid',
                            'Temperatur',
                            'Ton - hur ren morsesignalen låter',
                            'Trafik'
                        ],
                        correct: 2,
                        explanation: 'T (Tone) = tonkvalitet på CW. T9 = perfekt ren sinuston. T1 = råskrapig ton. Nästan alla moderna CW-sändare har T9.'
                    },
                    {
                        id: 'c8-3-e9',
                        type: 'true-false',
                        question: 'På CW används alltid tre siffror (RST), till exempel "599" eller "579".',
                        correct: true,
                        explanation: 'SANT! CW = alltid RST (tre siffror). Foni = RS (två siffror). Exempel CW: "UR RST 599 599" (upprepa ofta för säkerhet).'
                    },
                    {
                        id: 'c8-3-e10',
                        type: 'multiple-choice',
                        question: 'Du hör en station som fäder mellan S5 och S9. Vad säger du?',
                        options: [
                            '"Du är 59"',
                            '"Du är 57 med QSB" (QSB = fädning)',
                            '"Du är 55"',
                            '"Du varierar mycket"'
                        ],
                        correct: 1,
                        explanation: 'Ge genomsnittet och nämn fädning! "57 med QSB" (eller "with fading") är korrekt. QSB = signalen fäder (varierar i styrka).'
                    }
                ]
            },
            {
                id: '8.4',
                title: '8.4 Anrop och QSO',
                exercises: [
                    {
                        id: 'c8-4-e1',
                        type: 'multiple-choice',
                        question: 'Vad är det FÖRSTA du ska göra innan du börjar sända på en ny frekvens?',
                        options: [
                            'Börja sända direkt',
                            'Lyssna minst 30 sekunder och fråga om frekvensen är ledig',
                            'Säga din anropssignal',
                            'Kalla CQ omedelbart'
                        ],
                        correct: 1,
                        explanation: 'ALLTID lyssna först (minst 30 sek)! Sedan fråga "QRL?" eller "Is this frequency in use?" och VÄNTA på svar. Detta förhindrar att du stör pågående trafik!'
                    },
                    {
                        id: 'c8-4-e2',
                        type: 'multiple-choice',
                        question: 'Hur gör man ett korrekt CQ-anrop på engelska?',
                        options: [
                            '"CQ SM5XYZ"',
                            '"CQ CQ CQ, this is SM5XYZ, Sierra Mike Five X-ray Yankee Zulu, calling CQ and standing by"',
                            '"Hello, is anyone there?"',
                            'Bara säga sin signal'
                        ],
                        correct: 1,
                        explanation: 'Format: "CQ CQ CQ" (3x), "this is" (detta är), [signal fonetiskt], [signal normalt], "calling CQ and standing by". Tydligt och standardiserat!'
                    },
                    {
                        id: 'c8-4-e3',
                        type: 'true-false',
                        question: 'I en pile-up (många anropar samtidigt) ska du bara säga din signal EN gång kort, inte upprepa i flera minuter.',
                        correct: true,
                        explanation: 'SANT! Pile-up-etikett: Anropa KORT (bara signal en gång), VÄNTA 30-60 sek, försök igen. INTE "tailgate" (anropa upprepat utan paus). Tålamod och respekt!'
                    },
                    {
                        id: 'c8-4-e4',
                        type: 'multiple-choice',
                        question: 'Vad innebär "split operation" i en DX pile-up?',
                        options: [
                            'DX-stationen sänder och lyssnar på samma frekvens',
                            'DX-stationen sänder på en frekvens men lyssnar på EN ANNAN frekvens',
                            'Två personer delar på sändningen',
                            'Dela upp anropssignalen'
                        ],
                        correct: 1,
                        explanation: 'Split = DX sänder t.ex. 14.195, lyssnar 14.200-14.210 ("listening 5 up"). Du ställer VFO-A=14.195 (lyssna), VFO-B=14.200 (sända), aktiverar SPLIT-läge!'
                    },
                    {
                        id: 'c8-4-e5',
                        type: 'multiple-choice',
                        question: 'Hur svarar du på ett CQ-anrop från SM5XYZ?',
                        options: [
                            '"SM5XYZ, this is SM0ABC, Sierra Mike Zero Alfa Bravo Charlie, over"',
                            '"Hello SM5XYZ"',
                            'Bara säga din signal',
                            '"CQ CQ CQ"'
                        ],
                        correct: 0,
                        explanation: 'Format: [Hans signal], this is [din signal normalt], [din signal fonetiskt], over. Säg HAN signal FÖRST så han vet att DU svarar på HONOM!'
                    },
                    {
                        id: 'c8-4-e6',
                        type: 'matching',
                        question: 'Para ihop QSO-fas med vad som händer:',
                        pairs: [
                            { left: 'Inledning', right: 'RST + QTH' },
                            { left: 'Presentation', right: 'Namn' },
                            { left: 'Utrustning', right: 'Radio + antenn' },
                            { left: 'Avslutning', right: '73 + signaler' }
                        ]
                    },
                    {
                        id: 'c8-4-e7',
                        type: 'true-false',
                        question: 'DX-kontakter är ofta mycket kortare än lokala QSO (bara signal, rapport, QTH, 73).',
                        correct: true,
                        explanation: 'SANT! DX-QSO: Signal + Rapport + QTH + 73 = KLART (1-2 min). Många vill prata, signalen kan vara svag, propagation kan försvinna. Respektera detta!'
                    },
                    {
                        id: 'c8-4-e8',
                        type: 'multiple-choice',
                        question: 'Vad betyder "listening 5 up" i en pile-up?',
                        options: [
                            'Lyssnar 5 minuter senare',
                            'Lyssnar 5 kHz HÖGRE än sin sändningsfrekvens',
                            'Lyssnar 5 stationer',
                            'Väntar 5 sekunder'
                        ],
                        correct: 1,
                        explanation: '"5 up" = +5 kHz (0.005 MHz). Om DX sänder 14.195, lyssnar han 14.200. "10 down" = -10 kHz. Detta sprider pile-upen över större område!'
                    },
                    {
                        id: 'c8-4-e9',
                        type: 'multiple-choice',
                        question: 'Vad ska du INTE göra i en pile-up?',
                        options: [
                            'Lyssna på instruktioner',
                            'Anropa kort och vänta',
                            'Anropa upprepade gånger utan paus ("tailgating")',
                            'Respektera "EU only" eller liknande restriktioner'
                        ],
                        correct: 2,
                        explanation: 'ALDRIG "tailgate" (anropa upprepat utan paus)! ALDRIG anropa om du inte hört DX själv. ALDRIG ignorera instruktioner ("JA only" etc). Respekt och tålamod!'
                    },
                    {
                        id: 'c8-4-e10',
                        type: 'true-false',
                        question: 'Innan du flyttar (QSY) till annan frekvens efter CQ ska du alltid lyssna och fråga om den nya frekvensen är ledig.',
                        correct: true,
                        explanation: 'SANT! ALLTID lyssna på nya frekvensen först! "Ska vi QSY till 14.250?" → byt → lyssna 30 sek → fråga "QRL?" → OK, fortsätt QSO. Respekt för andra!'
                    }
                ]
            },
            {
                id: '8.5',
                title: '8.5 Foni (tal)',
                exercises: [
                    {
                        id: 'c8-5-e1',
                        type: 'multiple-choice',
                        question: 'Vilken modulation används på HF-banden för taltrafik?',
                        options: [
                            'AM',
                            'FM',
                            'SSB (Single Sideband)',
                            'PM'
                        ],
                        correct: 2,
                        explanation: 'HF (kortvåg): SSB standard! LSB under 10 MHz (160m/80m/40m), USB på 10 MHz och högre (20m/15m/10m). SSB är 3x effektivare än AM, smalare bandbredd.'
                    },
                    {
                        id: 'c8-5-e2',
                        type: 'multiple-choice',
                        question: 'På 7 MHz (40m-bandet), använder man LSB eller USB?',
                        options: [
                            'LSB (Lower Sideband)',
                            'USB (Upper Sideband)',
                            'Spelar ingen roll',
                            'AM'
                        ],
                        correct: 0,
                        explanation: '7 MHz = 40m = UNDER 10 MHz → LSB! Regel: Under 10 MHz = LSB. På och över 10 MHz = USB. Minnesregel: "Över tio, övre (USB)".'
                    },
                    {
                        id: 'c8-5-e3',
                        type: 'multiple-choice',
                        question: 'Vilket avstånd från mikrofonen är optimalt?',
                        options: [
                            '1-2 cm (mycket nära)',
                            '5-10 cm',
                            '20-30 cm',
                            'Spelar ingen roll'
                        ],
                        correct: 1,
                        explanation: '5-10 cm är optimalt! För nära (<3 cm) → bas-överbelastning, puffljud. För långt (>15 cm) → svag signal, bakgrundsljud. Testa genom att lyssna på din egen signal!'
                    },
                    {
                        id: 'c8-5-e4',
                        type: 'true-false',
                        question: 'ALC-metern ska helst INTE slå i taket när du pratar - det indikerar övermodulering.',
                        correct: true,
                        explanation: 'SANT och KRITISKT! ALC slår i taket = övermodulering = distorsion = "splatter" = störningar på närliggande frekvenser = folk blir arga! ALC ska röra sig LITE (10-30%).'
                    },
                    {
                        id: 'c8-5-e5',
                        type: 'multiple-choice',
                        question: 'Vilken är simplex-anropsfrekvensen på 2m-bandet?',
                        options: [
                            '144,800 MHz',
                            '145,000 MHz',
                            '145,500 MHz',
                            '146,000 MHz'
                        ],
                        correct: 2,
                        explanation: '145,500 MHz = 2m simplex-anropsfrekvens (europeisk standard)! Anropa här, sedan QSY (flytta) till annan frekvens (t.ex. 145,525) för QSO. Detta frigör anropsfrekvensen!'
                    },
                    {
                        id: 'c8-5-e6',
                        type: 'multiple-choice',
                        question: 'Vad är standard shift på 2m-repeatrar?',
                        options: [
                            '±600 kHz',
                            '±1,6 MHz',
                            '±7,6 MHz',
                            'Ingen shift'
                        ],
                        correct: 0,
                        explanation: '2m: ±600 kHz (0,6 MHz). 70cm: ±1,6 MHz eller ±7,6 MHz. Exempel: Repeater 145,700 med shift -600 → du sänder 145,100, lyssnar 145,700.'
                    },
                    {
                        id: 'c8-5-e7',
                        type: 'multiple-choice',
                        question: 'Vad är CTCSS-ton (subton)?',
                        options: [
                            'Volymkontroll',
                            'Låg ton (t.ex. 123,0 Hz) som öppnar repeatern',
                            'Effektkontroll',
                            'Frekvensavvikelse'
                        ],
                        correct: 1,
                        explanation: 'CTCSS = "nyckel" till repeatern. Låg, ohörbar ton (t.ex. 123,0 Hz, 88,5 Hz) som måste skickas för att repeatern ska öppna. Förhindrar oavsiktliga öppningar från störningar.'
                    },
                    {
                        id: 'c8-5-e8',
                        type: 'matching',
                        question: 'Para ihop band med modulation:',
                        pairs: [
                            { left: '40m (7 MHz)', right: 'SSB (LSB)' },
                            { left: '20m (14 MHz)', right: 'SSB (USB)' },
                            { left: '2m (145 MHz) lokal', right: 'FM' },
                            { left: '70cm (432 MHz)', right: 'FM' }
                        ]
                    },
                    {
                        id: 'c8-5-e9',
                        type: 'true-false',
                        question: 'FM används främst på VHF/UHF (2m, 70cm) för lokal trafik och repeatrar.',
                        correct: true,
                        explanation: 'SANT! FM = standard på VHF/UHF. Fördelar: Bra ljudkvalitet, störningståligt. Nackdel: Stor bandbredd (12-16 kHz). Därför INTE använd på HF (för trångt!).'
                    },
                    {
                        id: 'c8-5-e10',
                        type: 'multiple-choice',
                        question: 'Varför används SSB på HF istället för FM?',
                        options: [
                            'SSB låter bättre',
                            'SSB har mycket smalare bandbredd (2,4 kHz vs 15 kHz) - viktigt på trånga HF-band',
                            'FM är förbjudet',
                            'SSB är lättare'
                        ],
                        correct: 1,
                        explanation: 'HF-banden är TRÅNGA! SSB: 2,4 kHz. FM: 12-16 kHz (5x bredare!). På 20m-bandet (350 kHz) får plats: 116 SSB-stationer ELLER bara 23 FM-stationer. Val är enkelt!'
                    }
                ]
            },
            {
                id: '8.6',
                title: '8.6 CW (telegrafi)',
                exercises: [
                    {
                        id: 'c8-6-e1',
                        type: 'true-false',
                        question: 'CW (morsekod) är INTE längre krav för att få HAREC-certifikat i Sverige.',
                        correct: true,
                        explanation: 'SANT! Kravet togs bort 2004. Men: CW är värdefullt att kunna! Smalast bandbredd (100-500 Hz), fungerar med extremt svaga signaler, populärt i tävlingar.'
                    },
                    {
                        id: 'c8-6-e2',
                        type: 'multiple-choice',
                        question: 'Vad står CW för?',
                        options: [
                            'Code Wave',
                            'Continuous Wave',
                            'Carrier Wave',
                            'Communication Wireless'
                        ],
                        correct: 1,
                        explanation: 'CW = Continuous Wave. Tekniskt namn för morsekod över radio. Bärvågen slås på (dit/dah) och av (paus) för att bilda bokstäver.'
                    },
                    {
                        id: 'c8-6-e3',
                        type: 'multiple-choice',
                        question: 'Varför fungerar CW bättre än SSB med svaga signaler?',
                        options: [
                            'CW är högre effekt',
                            'CW har mycket smalare bandbredd (100-500 Hz vs 2400 Hz) - mindre brus kommer igenom',
                            'CW är lättare att höra',
                            'CW är nyare teknik'
                        ],
                        correct: 1,
                        explanation: 'CW: 100-500 Hz bandbredd. SSB: 2400 Hz (5x bredare!). Smalare = mindre brus = bättre signal-till-brus. CW kan läsas ner till -20 dB under brusnivån!'
                    },
                    {
                        id: 'c8-6-e4',
                        type: 'true-false',
                        question: 'När man lär sig morse ska man lära sig LJUDEN (di-DAH), inte visuella prickar och streck.',
                        correct: true,
                        explanation: 'SANT och viktigt! Lär dig LJUDEN, inte prickar/streck. "A" = inte "punkt-streck" utan ljudet "di-DAH". Erfarna hör bokstäver direkt, som du läser ord!'
                    },
                    {
                        id: 'c8-6-e5',
                        type: 'multiple-choice',
                        question: 'Vad betyder prosign "SK" i CW?',
                        options: [
                            'Slut på kontakt',
                            'Starta kontakt',
                            'Svensk kod',
                            'Ska fortsätta'
                        ],
                        correct: 0,
                        explanation: 'SK (· · · − · −) = "End of contact" / Slut på kontakten. Andra viktiga: K = kom (över), AR = slut på meddelande, BK = break (avbrott).'
                    },
                    {
                        id: 'c8-6-e6',
                        type: 'multiple-choice',
                        question: 'Hur många siffror i RST-rapport på CW?',
                        options: [
                            'En (R)',
                            'Två (RS)',
                            'Tre (RST)',
                            'Fyra (RSTQ)'
                        ],
                        correct: 2,
                        explanation: 'CW: TRE siffror (RST). Exempel: "UR RST 599 599". T = Ton (hur ren CW-signalen är). Foni: Bara RS (två siffror).'
                    },
                    {
                        id: 'c8-6-e7',
                        type: 'matching',
                        question: 'Para ihop CW-förkortning med betydelse:',
                        pairs: [
                            { left: 'K', right: 'Kom (över till dig)' },
                            { left: 'R', right: 'Roger (mottaget)' },
                            { left: 'TU', right: 'Thank you (tack)' },
                            { left: 'SK', right: 'Slut på kontakt' }
                        ]
                    },
                    {
                        id: 'c8-6-e8',
                        type: 'true-false',
                        question: 'CW-QSO är ofta mycket kortare och mer standardiserade än foni-QSO.',
                        correct: true,
                        explanation: 'SANT! CW: Mer förkortningar (TNX, FER, UR), standardformat, ingen "small talk". Fokus på signal, rapport, namn, QTH, 73. Snabbare än foni!'
                    },
                    {
                        id: 'c8-6-e9',
                        type: 'multiple-choice',
                        question: 'Varför säger man "When all else fails, CW prevails"?',
                        options: [
                            'CW är lättast',
                            'CW fungerar med extremt svaga signaler när SSB/FM inte fungerar',
                            'CW är obligatoriskt',
                            'CW är snabbast'
                        ],
                        correct: 1,
                        explanation: 'CW fungerar när inget annat gör det! Extremt smal bandbredd + enkel utrustning + låg effekt räcker långt. 5W CW ≈ 50W SSB effektivitet!'
                    },
                    {
                        id: 'c8-6-e10',
                        type: 'multiple-choice',
                        question: 'Vad är en typisk hastighet för nybörjare i CW?',
                        options: [
                            '50-60 WPM',
                            '5-15 WPM (Words Per Minute)',
                            '100 WPM',
                            '1 WPM'
                        ],
                        correct: 1,
                        explanation: 'Nybörjare: 5-15 WPM. Bekvämt QSO: 15-20 WPM. Erfarna: 25-35 WPM. Tävlingar: 40+ WPM. Börja långsamt (5 WPM) och öka gradvis!'
                    }
                ]
            },
            {
                id: '8.7',
                title: '8.7 Digitala trafiksätt',
                exercises: [
                    {
                        id: 'c8-7-e1',
                        type: 'multiple-choice',
                        question: 'Vilket är det populäraste digitala modet idag?',
                        options: [
                            'RTTY',
                            'PSK31',
                            'FT8',
                            'Packet radio'
                        ],
                        correct: 2,
                        explanation: 'FT8 är EXTREMT populärt sedan 2017! Fungerar ner till -24 dB under brusnivån. 15-sekunders perioder, automatiserad, perfekt för liten antenn/låg effekt.'
                    },
                    {
                        id: 'c8-7-e2',
                        type: 'true-false',
                        question: 'FT8 kräver att datorn är tidssynkroniserad med atomur via internet.',
                        correct: true,
                        explanation: 'SANT! FT8 kräver exakt tidssynk (inom 1-2 sekunder). Sändningar i 15-sek "slots": 0:00, 0:15, 0:30, 0:45. Programmet (WSJT-X) synkar automatiskt via internet.'
                    },
                    {
                        id: 'c8-7-e3',
                        type: 'multiple-choice',
                        question: 'Vilket digitalt mode är bäst för långa, fria keyboard-to-keyboard konversationer?',
                        options: [
                            'FT8 (bara standardmeddelanden)',
                            'PSK31 eller JS8Call',
                            'RTTY',
                            'CW'
                        ],
                        correct: 1,
                        explanation: 'PSK31 eller JS8Call! Båda tillåter fria meddelanden (skriv vad du vill). FT8 = bara standardiserade meddelanden (signal, rapport, 73). PSK31: smal bandbredd, real-time.'
                    },
                    {
                        id: 'c8-7-e4',
                        type: 'multiple-choice',
                        question: 'Vad behöver du för att köra digitala modes?',
                        options: [
                            'Bara en radio',
                            'Dator, transceiver, interface (eller USB-kabel), programvara',
                            'Bara dator',
                            'Speciell digital-radio'
                        ],
                        correct: 1,
                        explanation: 'Behövs: 1) Dator, 2) Transceiver (SSB-läge), 3) Interface (kopplar dator↔radio, t.ex. Signalink USB), 4) Programvara (ofta gratis: WSJT-X, Fldigi).'
                    },
                    {
                        id: 'c8-7-e5',
                        type: 'true-false',
                        question: 'Vid digitala modes är rätt ljudnivå KRITISKT - ALC ska INTE slå i taket.',
                        correct: true,
                        explanation: 'SANT och VIKTIGT! För högt → övermodulering, splatter, stör andra. För lågt → svag signal. Rätt: ALC rör sig LITE (10-30%), effektmeter visar önskad effekt.'
                    },
                    {
                        id: 'c8-7-e6',
                        type: 'multiple-choice',
                        question: 'Vilken frekvens används för APRS (positionsspårning)?',
                        options: [
                            '144,800 MHz',
                            '145,500 MHz',
                            '433,500 MHz',
                            '14,300 MHz'
                        ],
                        correct: 0,
                        explanation: '144,800 MHz = APRS-frekvens! APRS = Automatic Packet Reporting System (positionsspårning, meddelanden). Använder paketradio-teknik på 2m-bandet.'
                    },
                    {
                        id: 'c8-7-e7',
                        type: 'matching',
                        question: 'Para ihop digitalt mode med egenskap:',
                        pairs: [
                            { left: 'FT8', right: 'Mest populärt, -24 dB' },
                            { left: 'PSK31', right: 'Keyboard-to-keyboard, 31 Hz' },
                            { left: 'RTTY', right: 'Radio TeleTYpe, tävling' },
                            { left: 'APRS', right: 'Positionsspårning, 144.800' }
                        ]
                    },
                    {
                        id: 'c8-7-e8',
                        type: 'multiple-choice',
                        question: 'Varför kritiseras FT8 av vissa radioamatörer?',
                        options: [
                            'Det är för svårt',
                            '"Inte riktiga QSO - bara datorer som pratar, ingen personlig kontakt"',
                            'Det är för dyrt',
                            'Det är förbjudet'
                        ],
                        correct: 1,
                        explanation: 'Kritik: "För automatiserat, ingen riktig konversation, bara standardmeddelanden". Försvar: "Öppnar radio för fler, perfekt för liten antenn, gör DX tillgängligt". Båda sidor har poänger!'
                    },
                    {
                        id: 'c8-7-e9',
                        type: 'true-false',
                        question: 'Digitala modes kan automatiskt logga alla kontakter (datum, tid, frekvens, mode).',
                        correct: true,
                        explanation: 'SANT och praktiskt! Program som WSJT-X, Fldigi loggar automatiskt. Kan skicka till online-loggböcker (QRZ.com, eQSL, LoTW). Sparar mycket tid!'
                    },
                    {
                        id: 'c8-7-e10',
                        type: 'multiple-choice',
                        question: 'Hur lång är en FT8-period?',
                        options: [
                            '5 sekunder',
                            '10 sekunder',
                            '15 sekunder',
                            '30 sekunder'
                        ],
                        correct: 2,
                        explanation: 'FT8: 15 sekunder. En komplett QSO tar ~60 sekunder (4 perioder). FT4 (snabbare): 7,5 sekunder. PSK31: real-time (ingen period).'
                    }
                ]
            },
            {
                id: '8.8',
                title: '8.8 Nödtrafik',
                exercises: [
                    {
                        id: 'c8-8-e1',
                        type: 'multiple-choice',
                        question: 'Vad betyder MAYDAY?',
                        options: [
                            'Maj-dagen (första maj)',
                            'Internationellt nödanrop vid omedelbar livsfara',
                            'Säkerhetsinformation',
                            'Test av nödsignal'
                        ],
                        correct: 1,
                        explanation: 'MAYDAY = OMEDELBAR LIVSFARA! Från franskans "m\'aidez" (hjälp mig). Används vid sjunkande båt, allvarlig skada, brand med risk för liv. HÖGSTA prioritet!'
                    },
                    {
                        id: 'c8-8-e2',
                        type: 'multiple-choice',
                        question: 'Vad är skillnaden mellan MAYDAY och PAN PAN?',
                        options: [
                            'Ingen skillnad',
                            'MAYDAY = omedelbar livsfara, PAN PAN = brådskande men ej omedelbar fara',
                            'PAN PAN är allvarligare',
                            'MAYDAY är på svenska, PAN PAN på engelska'
                        ],
                        correct: 1,
                        explanation: 'MAYDAY = omedelbar livsfara (sjunker, någon dör). PAN PAN = brådskande men inte akut (motor havererad, behöver bogsering). SECURITÉ = säkerhetsinformation.'
                    },
                    {
                        id: 'c8-8-e3',
                        type: 'multiple-choice',
                        question: 'Vilken är den internationella nödfrekvensen på amatörband?',
                        options: [
                            '7,110 MHz',
                            '14,300 MHz',
                            '145,500 MHz',
                            '3,760 MHz'
                        ],
                        correct: 1,
                        explanation: '14,300 MHz = internationell nödfrekvens på 20m-bandet! Övervakad av många stationer, bra räckvidd. Andra: 3,760 (80m), 7,110 (40m), 145,500 (2m lokal).'
                    },
                    {
                        id: 'c8-8-e4',
                        type: 'true-false',
                        question: 'Vid verklig nöd får du använda ALLA frekvenser och ALL effekt - reglerna ger vika för att rädda liv.',
                        correct: true,
                        explanation: 'SANT och KRITISKT! Vid nöd: Alla frekvenser OK (även utanför amatörband), all effekt OK, alla trafiksätt OK. LIV går före regler. Dokumentera och förklara efteråt.'
                    },
                    {
                        id: 'c8-8-e5',
                        type: 'multiple-choice',
                        question: 'Hur många gånger säger man MAYDAY i början av nödanropet?',
                        options: [
                            'En gång',
                            'Två gånger',
                            'Tre gånger',
                            'Tio gånger'
                        ],
                        correct: 2,
                        explanation: 'TRE gånger! "MAYDAY MAYDAY MAYDAY, this is [signal] [signal] [signal], MAYDAY [signal], My position is..." Detta säkerställer att alla hör att det är NÖD!'
                    },
                    {
                        id: 'c8-8-e6',
                        type: 'multiple-choice',
                        question: 'Om du hör MAYDAY, vad ska du göra FÖRST?',
                        options: [
                            'Fortsätt din QSO',
                            'Sluta sända OMEDELBART och lyssna',
                            'Byt frekvens',
                            'Stäng av radion'
                        ],
                        correct: 1,
                        explanation: '1) SLUTA SÄNDA omedelbart! 2) Anteckna all info. 3) Vänta - kanske svarar kustradio/närmare station. 4) Svara om ingen annan gör det. 5) Ring 112. 6) Assistera.'
                    },
                    {
                        id: 'c8-8-e7',
                        type: 'matching',
                        question: 'Para ihop nödsignal med betydelse:',
                        pairs: [
                            { left: 'MAYDAY', right: 'Omedelbar livsfara' },
                            { left: 'PAN PAN', right: 'Brådskande, ej akut' },
                            { left: 'SECURITÉ', right: 'Säkerhetsinformation' },
                            { left: 'SOS (CW)', right: '· · · − − − · · ·' }
                        ]
                    },
                    {
                        id: 'c8-8-e8',
                        type: 'true-false',
                        question: 'Om du hör MAYDAY ska du ringa 112 (nödnummer) och informera om situationen.',
                        correct: true,
                        explanation: 'SANT! Ring 112, berätta att du hört MAYDAY-anrop på radio, ge ALL information (position, situation, antal personer). SOS Alarm kopplar till rätt myndighet (kustbevakning, polis, ambulans).'
                    },
                    {
                        id: 'c8-8-e9',
                        type: 'multiple-choice',
                        question: 'Vad ska ingå i ett MAYDAY-anrop?',
                        options: [
                            'Bara anropssignal',
                            'MAYDAY × 3, signal × 3, position, situation, hjälpbehov, antal personer',
                            'Bara position',
                            'Bara "hjälp"'
                        ],
                        correct: 1,
                        explanation: 'Format: MAYDAY × 3, this is [signal] × 3, MAYDAY [signal], position (GPS/beskrivning), I have [situation], I require [hjälp], [antal personer], [annan info], Over.'
                    },
                    {
                        id: 'c8-8-e10',
                        type: 'true-false',
                        question: 'Nödtrafik har ALLTID absolut prioritet - all annan trafik måste avbrytas omedelbart.',
                        correct: true,
                        explanation: 'SANT och lag! Nödtrafik > allt annat. Alla tystnar, lyssnar, hjälper om möjligt. Säg "SM5XYZ clear för nödtrafik". Återuppta normal trafik först när nödsituationen löst.'
                    }
                ]
            }
        ]
    },
    {
        id: 9,
        number: 9,
        title: 'Elsäkerhet',
        slug: 'kapitel-9-sakerhet',
        icon: '⚠️',
        subchapters: []
    },
    {
        id: 10,
        number: 10,
        title: 'Praktisk Radiotrafik',
        slug: 'kapitel-10-praktisk-trafik',
        icon: '🎯',
        subchapters: []
    }
];

// Hjälpfunktioner
function getCertChapter(chapterId) {
    return certChapters.find(ch => ch.id === chapterId);
}

function getSubchapter(chapterId, subchapterId) {
      const chapter = getCertChapter(chapterId);
    if (!chapter) return null;
    return chapter.subchapters.find(sub => sub.id === subchapterId);
}

function getAvailableSubchapters(chapterId) {
    const chapter = getCertChapter(chapterId);
    if (!chapter) return [];
    return chapter.subchapters;
}

function getSubchapterExercises(chapterId, subchapterId) {
    const subchapter = getSubchapter(chapterId, subchapterId);
    return subchapter ? subchapter.exercises : [];
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        certChapters,
        getCertChapter,
        getSubchapter,
        getSubchapterExercises,  // <-- Lägg till denna rad
        getAvailableSubchapters
    };
}