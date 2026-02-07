// ============================================
// FRÅGEDATABAS FÖR RADIOAMATÖR UTBILDNING
// ============================================

const QUESTIONS = [
    // ============================================
    // KAPITEL 1: GRUNDLÄGGANDE ELEKTRONIK (20 frågor)
    // ============================================
    {
        id: 1,
        chapterId: 1,
        question: "Vad är enheten för elektrisk ström?",
        options: [
            { id: "a", text: "Volt (V)" },
            { id: "b", text: "Ampere (A)" },
            { id: "c", text: "Ohm (Ω)" },
            { id: "d", text: "Watt (W)" }
        ],
        correctAnswer: "b",
        explanation: "Elektrisk ström mäts i Ampere (A), uppkallat efter den franske fysikern André-Marie Ampère. Volt är enheten för spänning, Ohm för resistans och Watt för effekt.",
        difficulty: "easy"
    },
    {
        id: 2,
        chapterId: 1,
        question: "Enligt Ohms lag, om spänningen är 12V och resistansen är 4Ω, vad är strömmen?",
        options: [
            { id: "a", text: "48 A" },
            { id: "b", text: "3 A" },
            { id: "c", text: "8 A" },
            { id: "d", text: "0,33 A" }
        ],
        correctAnswer: "b",
        explanation: "Ohms lag: I = U/R = 12V / 4Ω = 3A. Strömmen är spänningen delat med resistansen.",
        difficulty: "easy"
    },
    {
        id: 3,
        chapterId: 1,
        question: "Vilken spänning använder de flesta amatörradioapparater som standard?",
        options: [
            { id: "a", text: "9V DC" },
            { id: "b", text: "12V DC" },
            { id: "c", text: "13,8V DC" },
            { id: "d", text: "230V AC" }
        ],
        correctAnswer: "c",
        explanation: "13,8V DC är den universella standarden för amatörradioutrustning. Detta är lite högre än ett bilbatteri (12V) för att kompensera för spänningsfall i kablar.",
        difficulty: "easy"
    },
    {
        id: 4,
        chapterId: 1,
        question: "Vad händer med totalresistansen när två motstånd på vardera 100Ω kopplas parallellt?",
        options: [
            { id: "a", text: "200 Ω" },
            { id: "b", text: "100 Ω" },
            { id: "c", text: "50 Ω" },
            { id: "d", text: "25 Ω" }
        ],
        correctAnswer: "c",
        explanation: "Vid parallellkoppling av två lika stora motstånd blir totalresistansen hälften: R_total = R/2 = 100Ω/2 = 50Ω. För parallellkoppling gäller generellt: 1/R_tot = 1/R₁ + 1/R₂.",
        difficulty: "medium"
    },
    {
        id: 5,
        chapterId: 1,
        question: "Vilken formel beskriver elektrisk effekt när du känner till spänning och ström?",
        options: [
            { id: "a", text: "P = U × I" },
            { id: "b", text: "P = U / I" },
            { id: "c", text: "P = I / U" },
            { id: "d", text: "P = U + I" }
        ],
        correctAnswer: "a",
        explanation: "Elektrisk effekt P (Watt) = Spänning U (Volt) × Ström I (Ampere). Detta är grundformeln för effekt.",
        difficulty: "easy"
    },
    {
        id: 6,
        chapterId: 1,
        question: "Om en radio drar 100W från nätaggregatet men levererar bara 60W RF till antennen, vad är verkningsgraden?",
        options: [
            { id: "a", text: "40%" },
            { id: "b", text: "60%" },
            { id: "c", text: "100%" },
            { id: "d", text: "167%" }
        ],
        correctAnswer: "b",
        explanation: "Verkningsgrad η = (P_ut / P_in) × 100% = (60W / 100W) × 100% = 60%. De övriga 40W blir värme som måste kylas bort.",
        difficulty: "medium"
    },
    {
        id: 7,
        chapterId: 1,
        question: "Vad är en kondensators huvudsakliga funktion?",
        options: [
            { id: "a", text: "Att begränsa strömmen" },
            { id: "b", text: "Att lagra elektrisk energi i ett elektriskt fält" },
            { id: "c", text: "Att omvandla växelström till likström" },
            { id: "d", text: "Att förstärka signaler" }
        ],
        correctAnswer: "b",
        explanation: "En kondensator lagrar elektrisk energi i ett elektriskt fält mellan två ledande plattor. Den blockerar likström men släpper igenom växelström.",
        difficulty: "easy"
    },
    {
        id: 8,
        chapterId: 1,
        question: "Hur beter sig en kondensator mot likström (DC)?",
        options: [
            { id: "a", text: "Släpper igenom DC fritt" },
            { id: "b", text: "Blockerar DC helt" },
            { id: "c", text: "Förstärker DC" },
            { id: "d", text: "Omvandlar DC till AC" }
        ],
        correctAnswer: "b",
        explanation: "Kondensatorer blockerar likström (DC) helt efter initial laddning. De släpper däremot igenom växelström (AC), särskilt höga frekvenser.",
        difficulty: "easy"
    },
    {
        id: 9,
        chapterId: 1,
        question: "Vad händer med en kondensators reaktans när frekvensen ÖKAR?",
        options: [
            { id: "a", text: "Reaktansen ökar" },
            { id: "b", text: "Reaktansen minskar" },
            { id: "c", text: "Reaktansen förblir konstant" },
            { id: "d", text: "Reaktansen blir noll" }
        ],
        correctAnswer: "b",
        explanation: "Kapacitiv reaktans X_C = 1/(2πfC). När frekvensen ökar minskar reaktansen - det blir lättare för högfrekventa signaler att passera kondensatorn.",
        difficulty: "medium"
    },
    {
        id: 10,
        chapterId: 1,
        question: "Hur beter sig en spole mot likström (DC) jämfört med växelström (AC)?",
        options: [
            { id: "a", text: "Blockerar DC, släpper igenom AC" },
            { id: "b", text: "Släpper igenom DC, bromsar AC" },
            { id: "c", text: "Blockerar både DC och AC" },
            { id: "d", text: "Släpper igenom både DC och AC lika lätt" }
        ],
        correctAnswer: "b",
        explanation: "Spolar släpper igenom likström (DC) nästan fritt, men bromsar växelström (AC). Högre frekvens ger högre reaktans (större motstånd). Detta är MOTSATSEN till kondensatorer!",
        difficulty: "medium"
    },
    {
        id: 11,
        chapterId: 1,
        question: "Vad är induktansens enhet?",
        options: [
            { id: "a", text: "Farad (F)" },
            { id: "b", text: "Henry (H)" },
            { id: "c", text: "Hertz (Hz)" },
            { id: "d", text: "Tesla (T)" }
        ],
        correctAnswer: "b",
        explanation: "Induktans mäts i Henry (H), uppkallat efter Joseph Henry. Vanliga värden i radioteknik är µH (mikrohenry) och mH (millihenry).",
        difficulty: "easy"
    },
    {
        id: 12,
        chapterId: 1,
        question: "När två resistorer på 100Ω vardera kopplas i serie, vad blir totalresistansen?",
        options: [
            { id: "a", text: "50 Ω" },
            { id: "b", text: "100 Ω" },
            { id: "c", text: "200 Ω" },
            { id: "d", text: "400 Ω" }
        ],
        correctAnswer: "c",
        explanation: "I seriekoppling adderas resistanserna direkt: R_tot = R₁ + R₂ = 100Ω + 100Ω = 200Ω. Detta är motsatsen till parallellkoppling.",
        difficulty: "easy"
    },
    {
        id: 13,
        chapterId: 1,
        question: "I en seriekrets med tre resistorer, hur är strömmen genom varje resistor?",
        options: [
            { id: "a", text: "Olika, beroende på resistansen" },
            { id: "b", text: "Samma genom alla resistorer" },
            { id: "c", text: "Störst genom den minsta resistorn" },
            { id: "d", text: "Noll genom den största resistorn" }
        ],
        correctAnswer: "b",
        explanation: "I seriekoppling är strömmen samma överallt - det finns bara en väg för strömmen. Däremot delas spänningen upp mellan resistorerna.",
        difficulty: "medium"
    },
    {
        id: 14,
        chapterId: 1,
        question: "Vad är RMS-värdet (effektivvärdet) för en sinusvåg med toppvärdet 100V?",
        options: [
            { id: "a", text: "50 V" },
            { id: "b", text: "70,7 V" },
            { id: "c", text: "100 V" },
            { id: "d", text: "141,4 V" }
        ],
        correctAnswer: "b",
        explanation: "RMS-värde = Toppvärde × 0,707 = 100V × 0,707 ≈ 70,7V. RMS (Root Mean Square) är det värde som ger samma effekt som likström.",
        difficulty: "medium"
    },
    {
        id: 15,
        chapterId: 1,
        question: "Vad händer vid resonans i en LC-krets?",
        options: [
            { id: "a", text: "X_L och X_C tar ut varandra" },
            { id: "b", text: "Impedansen blir oändligt stor" },
            { id: "c", text: "Strömmen blir noll" },
            { id: "d", text: "Frekvensen blir noll" }
        ],
        correctAnswer: "a",
        explanation: "Vid resonansfrekvensen är X_L = X_C (induktiv reaktans = kapacitiv reaktans). De tar ut varandra och impedansen blir minimal (seriekrets) eller maximal (parallellkrets).",
        difficulty: "medium"
    },
    {
        id: 16,
        chapterId: 1,
        question: "Vilken typ av filter släpper igenom låga frekvenser och dämpar höga?",
        options: [
            { id: "a", text: "Högpassfilter" },
            { id: "b", text: "Lågpassfilter" },
            { id: "c", text: "Bandpassfilter" },
            { id: "d", text: "Bandspärrfilter" }
        ],
        correctAnswer: "b",
        explanation: "Ett lågpassfilter släpper igenom frekvenser under brytfrekvensen och dämpar högre frekvenser. Används ofta efter slutsteget för att dämpa övertoner.",
        difficulty: "easy"
    },
    {
        id: 17,
        chapterId: 1,
        question: "Vad är formeln för resonansfrekvensen i en LC-krets?",
        options: [
            { id: "a", text: "f = 2π√(LC)" },
            { id: "b", text: "f = 1/(2π√(LC))" },
            { id: "c", text: "f = √(LC)" },
            { id: "d", text: "f = LC/2π" }
        ],
        correctAnswer: "b",
        explanation: "Resonansfrekvens f₀ = 1/(2π√(LC)) där L är induktansen i Henry och C är kapacitansen i Farad. Detta är den viktigaste formeln i radioteknik!",
        difficulty: "hard"
    },
    {
        id: 18,
        chapterId: 1,
        question: "Vad betyder +3 dB effektförändring?",
        options: [
            { id: "a", text: "Effekten har halverats" },
            { id: "b", text: "Effekten har fördubblats" },
            { id: "c", text: "Effekten har ökats 10 gånger" },
            { id: "d", text: "Ingen förändring" }
        ],
        correctAnswer: "b",
        explanation: "+3 dB betyder att effekten har fördubblats (×2). -3 dB betyder att effekten har halverats (×0,5). Detta är viktiga värden att komma ihåg!",
        difficulty: "medium"
    },
    {
        id: 19,
        chapterId: 1,
        question: "Vilken standard-impedans används för amatörradio?",
        options: [
            { id: "a", text: "25 Ω" },
            { id: "b", text: "50 Ω" },
            { id: "c", text: "75 Ω" },
            { id: "d", text: "300 Ω" }
        ],
        correctAnswer: "b",
        explanation: "50Ω är standard för amatörradio (sändare, koax, antenner). 75Ω används för TV, 300Ω för äldre TV-bandkabel. 50Ω är en kompromiss mellan låg förlust och hög effektkapacitet.",
        difficulty: "easy"
    },
    {
        id: 20,
        chapterId: 1,
        question: "Varför används elektrolytkondensatorer främst i nätaggregat och inte i RF-kretsar?",
        options: [
            { id: "a", text: "De är för dyra" },
            { id: "b", text: "De har polaritet och stora förluster vid höga frekvenser" },
            { id: "c", text: "De är för stora fysiskt" },
            { id: "d", text: "De kan inte lagra energi" }
        ],
        correctAnswer: "b",
        explanation: "Elektrolytkondensatorer har polaritet (+ och -) och stora förluster vid RF-frekvenser. De är bra för stora kapacitanser vid låga frekvenser (nätaggregatsfilter) men inte för RF-kretsar där keramiska kondensatorer används.",
        difficulty: "hard"
    },

    // ============================================
    // KAPITEL 2: RADIOTEKNIK (20 frågor)
    // ============================================
    {
        id: 21,
        chapterId: 2,
        question: "Vad innebär AM (Amplitudmodulation)?",
        options: [
            { id: "a", text: "Bärvågens frekvens varieras med modulationssignalen" },
            { id: "b", text: "Bärvågens amplitud varieras med modulationssignalen" },
            { id: "c", text: "Bärvågens fas varieras med modulationssignalen" },
            { id: "d", text: "Bärvågen slås av och på" }
        ],
        correctAnswer: "b",
        explanation: "Vid AM varieras bärvågens amplitud (styrka) i takt med modulationssignalen (t.ex. din röst). Frekvensen förändras inte.",
        difficulty: "easy"
    },
    {
        id: 22,
        chapterId: 2,
        question: "Vad är huvudfördelen med SSB jämfört med AM?",
        options: [
            { id: "a", text: "Enklare utrustning" },
            { id: "b", text: "Bättre ljudkvalitet" },
            { id: "c", text: "Högre effektivitet och smalare bandbredd" },
            { id: "d", text: "Lättare att ställa in" }
        ],
        correctAnswer: "c",
        explanation: "SSB tar bort bärvågen (66% av effekten) och ett sidband. Detta ger cirka 3 gånger mer effektiv effektanvändning och hälften så stor bandbredd jämfört med AM.",
        difficulty: "medium"
    },
    {
        id: 23,
        chapterId: 2,
        question: "Vilket sidband (LSB eller USB) används på 7 MHz (40m-bandet)?",
        options: [
            { id: "a", text: "LSB (Lower Sideband)" },
            { id: "b", text: "USB (Upper Sideband)" },
            { id: "c", text: "Båda kan användas" },
            { id: "d", text: "Inget, endast FM används" }
        ],
        correctAnswer: "a",
        explanation: "På frekvenser UNDER 10 MHz används LSB (Lower Sideband). På och över 10 MHz används USB. 7 MHz är under 10 MHz, därför LSB. Minnesregel: 'Under tio, undre!'",
        difficulty: "medium"
    },
    {
        id: 24,
        chapterId: 2,
        question: "Vad är FM-deviation?",
        options: [
            { id: "a", text: "Frekvensändringen från bärvågen vid modulering" },
            { id: "b", text: "Amplitudvariationen vid modulering" },
            { id: "c", text: "Fasvridningen vid modulering" },
            { id: "d", text: "Bandbredden på FM-signalen" }
        ],
        correctAnswer: "a",
        explanation: "FM-deviation är hur mycket frekvensen avviker från bärvågsfrekvensen när signalen moduleras. Större deviation ger bredare bandbredd men ofta bättre ljudkvalitet.",
        difficulty: "medium"
    },
    {
        id: 25,
        chapterId: 2,
        question: "Vilket trafiksätt har smalast bandbredd?",
        options: [
            { id: "a", text: "AM" },
            { id: "b", text: "SSB" },
            { id: "c", text: "FM" },
            { id: "d", text: "CW (morsekod)" }
        ],
        correctAnswer: "d",
        explanation: "CW har smalast bandbredd (100-500 Hz), följt av SSB (2,4 kHz), AM (6-9 kHz) och FM (12-16 kHz). Därför fungerar CW bäst för svaga signaler och långdistans.",
        difficulty: "easy"
    },
    {
        id: 26,
        chapterId: 2,
        question: "Varför används inte FM på HF-banden (kortvåg)?",
        options: [
            { id: "a", text: "FM fungerar inte på låga frekvenser" },
            { id: "b", text: "FM kräver för stor bandbredd - det är för trångt på HF" },
            { id: "c", text: "FM är förbjudet på HF" },
            { id: "d", text: "FM ger sämre ljudkvalitet än AM" }
        ],
        correctAnswer: "b",
        explanation: "FM kräver 12-16 kHz bandbredd (smalband-FM), vilket är 5 gånger mer än SSB (2,4 kHz). På HF-banden är frekvensutrymmet begränsat, så SSB och CW används istället.",
        difficulty: "medium"
    },
    {
        id: 27,
        chapterId: 2,
        question: "Vilka är de sex huvudblocken i en sändare (i rätt ordning)?",
        options: [
            { id: "a", text: "Antenn → Filter → Slutsteg → Modulator → Oscillator" },
            { id: "b", text: "Oscillator → Modulator → Drivsteg → Slutsteg → Filter → Antenn" },
            { id: "c", text: "Filter → Oscillator → Slutsteg → Modulator → Antenn" },
            { id: "d", text: "Modulator → Oscillator → Filter → Slutsteg → Antenn" }
        ],
        correctAnswer: "b",
        explanation: "Rätt ordning: 1) Oscillator (skapar frekvensen) → 2) Modulator (lägger till information) → 3) Drivsteg (förförstärkning) → 4) Slutsteg/PA (full effekt) → 5) Lågpassfilter (dämpar övertoner) → 6) Antenn.",
        difficulty: "hard"
    },
    {
        id: 28,
        chapterId: 2,
        question: "Varför är lågpassfilter efter slutsteget viktigt?",
        options: [
            { id: "a", text: "För att öka utgångseffekten" },
            { id: "b", text: "För att dämpa harmoniska övertoner som annars stör andra band" },
            { id: "c", text: "För att förbättra ljudkvaliteten" },
            { id: "d", text: "För att skydda slutsteget" }
        ],
        correctAnswer: "b",
        explanation: "Slutsteget genererar övertoner (2×, 3×, 4× grundfrekvensen) som måste dämpas för att inte störa andra band. Lagkravet är -40 dB dämpning på HF. Exempel: Sänder 100W på 14 MHz → max 0,01W på 28 MHz.",
        difficulty: "medium"
    },
    {
        id: 29,
        chapterId: 2,
        question: "Vad händer om man sänder utan antenn eller dummyload?",
        options: [
            { id: "a", text: "Ingenting, signalen försvinner bara" },
            { id: "b", text: "Sändaren blir effektivare" },
            { id: "c", text: "Slutsteget kan skadas av överhettning" },
            { id: "d", text: "Räckvidden ökar" }
        ],
        correctAnswer: "c",
        explanation: "Utan last reflekteras effekten tillbaka till slutsteget. Slutstegs-transistorerna blir överhettade och kan brännas upp - dyr reparation! Använd ALLTID antenn eller dummyload när du sänder.",
        difficulty: "easy"
    },
    {
        id: 30,
        chapterId: 2,
        question: "Vad är principen bakom en superheterodyn-mottagare?",
        options: [
            { id: "a", text: "Direkt förstärkning av inkommande signal" },
            { id: "b", text: "Omvandla alla inkommande frekvenser till en fast mellanfrekvens (MF)" },
            { id: "c", text: "Digital signalbehandling av alla signaler" },
            { id: "d", text: "Regenerativ förstärkning" }
        ],
        correctAnswer: "b",
        explanation: "Superheterodyn-principen innebär att alla inkommande signaler blandas med en lokal oscillator för att skapa en fast mellanfrekvens (t.ex. 9 MHz). Där sker filtrering och förstärkning med samma komponenter oavsett originalfrekvens.",
        difficulty: "medium"
    },
    {
        id: 31,
        chapterId: 2,
        question: "Vad är spegelfrekvensproblemet i en superheterodyn-mottagare?",
        options: [
            { id: "a", text: "Mottagaren svarar på två frekvenser samtidigt" },
            { id: "b", text: "Signalen reflekteras i antennen" },
            { id: "c", text: "Oscillatorn skapar spegelbild av signalen" },
            { id: "d", text: "Filtret fungerar inte korrekt" }
        ],
        correctAnswer: "a",
        explanation: "Blandaren svarar på både önskad signal OCH spegelfrekvensen (f_signal ± 2×f_MF). Exempel: Vill ta emot 14,2 MHz med 9 MHz MF → spegeln är 32,2 MHz. Preselektor måste dämpa spegeln.",
        difficulty: "hard"
    },
    {
        id: 32,
        chapterId: 2,
        question: "Vilken mellanfrekvens (MF/IF) är vanligast i HF-transceivrar?",
        options: [
            { id: "a", text: "455 kHz" },
            { id: "b", text: "9 MHz" },
            { id: "c", text: "10,7 MHz" },
            { id: "d", text: "45 MHz" }
        ],
        correctAnswer: "b",
        explanation: "9 MHz är vanligast i HF-transceivrar för amatörradio. 455 kHz används i äldre AM-mottagare, 10,7 MHz i FM-mottagare, och 45 MHz som första MF i dubbel-superheterodyn.",
        difficulty: "medium"
    },
    {
        id: 33,
        chapterId: 2,
        question: "Vad är en transceiver?",
        options: [
            { id: "a", text: "Endast en sändare" },
            { id: "b", text: "Endast en mottagare" },
            { id: "c", text: "Kombinerad sändare och mottagare i samma enhet" },
            { id: "d", text: "En antennkopplare" }
        ],
        correctAnswer: "c",
        explanation: "Transceiver = Transmitter + Receiver i samma enhet. Standard för alla moderna radioamatörer. Delar VFO, filter, display och kontroller mellan sändning och mottagning.",
        difficulty: "easy"
    },
    {
        id: 34,
        chapterId: 2,
        question: "Vad gör RIT (Receiver Incremental Tuning)?",
        options: [
            { id: "a", text: "Ökar mottagarens känslighet" },
            { id: "b", text: "Finjusterar mottagarens frekvens oberoende av sändarens" },
            { id: "c", text: "Reducerar brus" },
            { id: "d", text: "Ökar sändarens effekt" }
        ],
        correctAnswer: "b",
        explanation: "RIT låter dig finjustera RX-frekvensen separat från TX-frekvensen. Användbart när motparten är lite 'off frequency' - du kan justera RX för att höra bättre utan att ändra din TX-frekvens.",
        difficulty: "medium"
    },
    {
        id: 35,
        chapterId: 2,
        question: "När används Split-läge i en transceiver?",
        options: [
            { id: "a", text: "För att öka effekten" },
            { id: "b", text: "När man vill sända och ta emot på olika frekvenser" },
            { id: "c", text: "För att förbättra ljudkvaliteten" },
            { id: "d", text: "För att minska störningar" }
        ],
        correctAnswer: "b",
        explanation: "Split-läge används när TX och RX ska vara på olika frekvenser. Typiskt vid DX pile-ups (DX-station lyssnar '5 up') och för satelliter (olika uplink/downlink-frekvenser).",
        difficulty: "medium"
    },
    {
        id: 36,
        chapterId: 2,
        question: "Vad gör en diod?",
        options: [
            { id: "a", text: "Förstärker signaler" },
            { id: "b", text: "Släpper igenom ström i båda riktningarna lika" },
            { id: "c", text: "Släpper igenom ström i endast en riktning" },
            { id: "d", text: "Lagrar elektrisk energi" }
        ],
        correctAnswer: "c",
        explanation: "En diod är en 'envägsventil' för ström - den släpper igenom ström i en riktning (framriktad) men blockerar i den andra (backriktad). Används för likriktning, skydd och signaldetektering.",
        difficulty: "easy"
    },
    {
        id: 37,
        chapterId: 2,
        question: "Vad är skillnaden mellan BJT och FET-transistorer?",
        options: [
            { id: "a", text: "BJT styrs av spänning, FET styrs av ström" },
            { id: "b", text: "BJT styrs av ström, FET styrs av spänning" },
            { id: "c", text: "Det finns ingen skillnad" },
            { id: "d", text: "BJT används bara i digitala kretsar" }
        ],
        correctAnswer: "b",
        explanation: "BJT (bipolär transistor) styrs av basström, medan FET (fälteffekttransistor) styrs av gate-spänning. FET har mycket högre ingångsimpedans och lägre brus vid RF-frekvenser.",
        difficulty: "medium"
    },
    {
        id: 38,
        chapterId: 2,
        question: "Vilken förstärkarklass MÅSTE användas för SSB-slutsteg?",
        options: [
            { id: "a", text: "Klass A eller AB (linjär förstärkare)" },
            { id: "b", text: "Klass C (olinjär förstärkare)" },
            { id: "c", text: "Klass D (digital förstärkare)" },
            { id: "d", text: "Alla klasser fungerar lika bra" }
        ],
        correctAnswer: "a",
        explanation: "SSB kräver LINJÄR förstärkning (klass A eller AB) eftersom amplituden varierar med modulationen. Klass C är olinjär och förvränger SSB, vilket ger 'splatter' och stör närliggande frekvenser. FM/CW kan däremot använda klass C.",
        difficulty: "hard"
    },
    {
        id: 39,
        chapterId: 2,
        question: "Vad gör AGC (Automatic Gain Control)?",
        options: [
            { id: "a", text: "Ökar alltid förstärkningen maximalt" },
            { id: "b", text: "Reglerar förstärkningen automatiskt för jämn ljudnivå" },
            { id: "c", text: "Stänger av mottagaren vid starka signaler" },
            { id: "d", text: "Ökar sändarens effekt automatiskt" }
        ],
        correctAnswer: "b",
        explanation: "AGC reglerar mottagarens förstärkning automatiskt så att ljudnivån hålls jämn trots att signalstyrkan varierar kraftigt (t.ex. fading). Svaga signaler förstärks mer, starka signaler förstärks mindre.",
        difficulty: "easy"
    },
    {
        id: 40,
        chapterId: 2,
        question: "Vad betyder förkortningen DDS som används i moderna oscillatorer?",
        options: [
            { id: "a", text: "Direct Digital Synthesis" },
            { id: "b", text: "Dual Diode System" },
            { id: "c", text: "Digital Data Signal" },
            { id: "d", text: "Dynamic Display System" }
        ],
        correctAnswer: "a",
        explanation: "DDS (Direct Digital Synthesis) genererar frekvenser digitalt med extremt hög stabilitet och precision. Standard i moderna transceivrar. Ger kristallstabilitet kombinerat med frekvenssteg ner till 1 Hz eller mindre!",
        difficulty: "medium"
    },

    // ============================================
    // KAPITEL 3: ANTENNER OCH MATARLEDNINGAR
    // ============================================
    {
        id: 41,
        chapterId: 3,
        question: "Hur lång är en halvvågsdipol för 7 MHz?",
        options: [
            { id: "a", text: "Cirka 10 meter" },
            { id: "b", text: "Cirka 20 meter" },
            { id: "c", text: "Cirka 40 meter" },
            { id: "d", text: "Cirka 5 meter" }
        ],
        correctAnswer: "b",
        explanation: "Halvvågsdipol längd ≈ 143/f(MHz) = 143/7 ≈ 20,4 meter (cirka 20 meter). Den praktiska formeln inkluderar förkortningsfaktorn.",
        difficulty: "medium"
    },
    {
        id: 42,
        chapterId: 3,
        question: "Vad är impedansen hos en halvvågsdipol i fritt utrymme?",
        options: [
            { id: "a", text: "50 Ω" },
            { id: "b", text: "73 Ω" },
            { id: "c", text: "300 Ω" },
            { id: "d", text: "600 Ω" }
        ],
        correctAnswer: "b",
        explanation: "En halvvågsdipol i fritt utrymme har en impedans på cirka 73 Ω, vilket är nära standard 50 Ω.",
        difficulty: "medium"
    },
    {
        id: 43,
        chapterId: 3,
        question: "Vad gör en Yagi-antenn?",
        options: [
            { id: "a", text: "Strålar lika i alla riktningar" },
            { id: "b", text: "Koncentrerar signalen i en riktning" },
            { id: "c", text: "Tar endast emot vertikalt polariserade signaler" },
            { id: "d", text: "Filtrerar bort störningar" }
        ],
        correctAnswer: "b",
        explanation: "En Yagi-antenn är en riktantenn som koncentrerar signalen i en riktning genom parasitiska element (direktorer och reflektor).",
        difficulty: "easy"
    },
    {
        id: 44,
        chapterId: 3,
        question: "Vad är SWR?",
        options: [
            { id: "a", text: "Signal Width Ratio" },
            { id: "b", text: "Standing Wave Ratio" },
            { id: "c", text: "Signal Wave Response" },
            { id: "d", text: "Static Wave Resistance" }
        ],
        correctAnswer: "b",
        explanation: "SWR (Standing Wave Ratio) anger hur väl antennen är anpassad till matarledningen. SWR 1:1 är perfekt.",
        difficulty: "easy"
    },
    {
        id: 45,
        chapterId: 3,
        question: "Vilket SWR-värde anses vara acceptabelt för de flesta amatörtillämpningar?",
        options: [
            { id: "a", text: "Under 1,5:1" },
            { id: "b", text: "Under 3:1" },
            { id: "c", text: "Under 5:1" },
            { id: "d", text: "Under 10:1" }
        ],
        correctAnswer: "a",
        explanation: "SWR under 1,5:1 anses vara utmärkt och innebär minimal effektförlust (endast 4%). Under 2:1 är också acceptabelt.",
        difficulty: "easy"
    },
    {
        id: 46,
        chapterId: 3,
        question: "Vad är en balun?",
        options: [
            { id: "a", text: "En typ av antenn" },
            { id: "b", text: "En anordning som matchar balanserad och obalanserad ledning" },
            { id: "c", text: "Ett filter för övertoner" },
            { id: "d", text: "En förstärkare" }
        ],
        correctAnswer: "b",
        explanation: "En balun (BALanced-UNbalanced) matchar mellan balanserad last (dipol) och obalanserad kabel (koax) och blockerar mantelströmmar.",
        difficulty: "medium"
    },
    {
        id: 47,
        chapterId: 3,
        question: "Vilken karakteristisk impedans har vanlig 50-ohms koaxialkabel?",
        options: [
            { id: "a", text: "50 Ω" },
            { id: "b", text: "75 Ω" },
            { id: "c", text: "300 Ω" },
            { id: "d", text: "600 Ω" }
        ],
        correctAnswer: "a",
        explanation: "Standard koaxialkabel för amatörradio (t.ex. RG-58, RG-213) har 50 Ω impedans, vilket är världsstandard sedan 1940-talet.",
        difficulty: "easy"
    },
    {
        id: 48,
        chapterId: 3,
        question: "Vad händer med kabeldämpningen när frekvensen ökar?",
        options: [
            { id: "a", text: "Den minskar" },
            { id: "b", text: "Den ökar" },
            { id: "c", text: "Den förblir konstant" },
            { id: "d", text: "Den försvinner" }
        ],
        correctAnswer: "b",
        explanation: "Kabeldämpningen ökar kraftigt med ökande frekvens. RG-58 som är OK på HF blir katastrofal på UHF. Därför används grövre/bättre kabel på VHF/UHF.",
        difficulty: "medium"
    },
    {
        id: 49,
        chapterId: 3,
        question: "Vad menas med antennvinst?",
        options: [
            { id: "a", text: "Antennen förstärker signalen aktivt" },
            { id: "b", text: "Antennen koncentrerar energin i viss riktning" },
            { id: "c", text: "Antennen tar emot mer brus" },
            { id: "d", text: "Antennen har lägre förluster" }
        ],
        correctAnswer: "b",
        explanation: "Antennvinst innebär att antennen koncentrerar energin i viss riktning jämfört med en referensantenn (dipol). Den skapar inte energi, utan omfördelar den.",
        difficulty: "medium"
    },
    {
        id: 50,
        chapterId: 3,
        question: "Vad är en groundplane-antenn?",
        options: [
            { id: "a", text: "En horisontell antenn" },
            { id: "b", text: "En vertikal antenn med radialer som jordplan" },
            { id: "c", text: "En riktantenn" },
            { id: "d", text: "En loopantenn" }
        ],
        correctAnswer: "b",
        explanation: "En groundplane är en vertikal kvartsvågsantenn med radialer (vanligen 4 st, vinklade 45°) som skapar ett artificiellt jordplan. Med 45° radialer blir impedansen cirka 50 Ω.",
        difficulty: "medium"
    },
    {
        id: 51,
        chapterId: 3,
        question: "Vad betyder reciprocitet för en antenn?",
        options: [
            { id: "a", text: "Antennen måste vara vertikal" },
            { id: "b", text: "Antennen fungerar lika bra för sändning som mottagning" },
            { id: "c", text: "Antennen måste vara balanserad" },
            { id: "d", text: "Antennen behöver jordplan" }
        ],
        correctAnswer: "b",
        explanation: "Reciprocitetsprincipen betyder att en antenn har samma egenskaper (riktning, vinst, impedans) vid både sändning och mottagning. En bra sändantenn är automatiskt en bra mottagningsantenn.",
        difficulty: "medium"
    },
    {
        id: 52,
        chapterId: 3,
        question: "Hur långt sträcker sig det nära fältet från en antenn?",
        options: [
            { id: "a", text: "Cirka 0,1 våglängder" },
            { id: "b", text: "Cirka 1-2 våglängder" },
            { id: "c", text: "Cirka 10 våglängder" },
            { id: "d", text: "Cirka 100 våglängder" }
        ],
        correctAnswer: "b",
        explanation: "Det nära fältet (reactive near field) sträcker sig cirka 1-2 våglängder från antennen. Här lagras energi reaktivt. På 80m-bandet kan det vara 86-172 meter!",
        difficulty: "hard"
    },
    {
        id: 53,
        chapterId: 3,
        question: "Vilken formel används för att beräkna våglängd från frekvens?",
        options: [
            { id: "a", text: "λ = 150 / f(MHz)" },
            { id: "b", text: "λ = 300 / f(MHz)" },
            { id: "c", text: "λ = 143 / f(MHz)" },
            { id: "d", text: "λ = 71,5 / f(MHz)" }
        ],
        correctAnswer: "b",
        explanation: "λ (meter) = 300 / f(MHz) är den förenklade formeln för våglängd, där 300 kommer från ljusets hastighet 300 000 km/s.",
        difficulty: "easy"
    },
    {
        id: 54,
        chapterId: 3,
        question: "Hur lång är en kvartsvågs vertikal för 145 MHz?",
        options: [
            { id: "a", text: "Cirka 25 cm" },
            { id: "b", text: "Cirka 49 cm" },
            { id: "c", text: "Cirka 2 meter" },
            { id: "d", text: "Cirka 5 meter" }
        ],
        correctAnswer: "b",
        explanation: "H = 71,5 / 145 ≈ 0,49 meter = 49 cm. Därför är VHF-antenner så kompakta jämfört med HF-antenner.",
        difficulty: "medium"
    },
    {
        id: 55,
        chapterId: 3,
        question: "Varför är den praktiska dipollängden kortare än den teoretiska?",
        options: [
            { id: "a", text: "För att spara material" },
            { id: "b", text: "På grund av förkortningsfaktorn - elektronerna färdas långsammare i tråden" },
            { id: "c", text: "För att minska vikten" },
            { id: "d", text: "För att göra den billigare" }
        ],
        correctAnswer: "b",
        explanation: "Förkortningsfaktorn (k ≈ 0,95) beror på att elektronerna färdas något långsammare i metall än i fri rymd. Därför används 143/f istället för teoretiska 150/f.",
        difficulty: "hard"
    },
    {
        id: 56,
        chapterId: 3,
        question: "Vilket element är längst i en Yagi-antenn?",
        options: [
            { id: "a", text: "Driven element" },
            { id: "b", text: "Direktorn" },
            { id: "c", text: "Reflektorn" },
            { id: "d", text: "Alla är lika långa" }
        ],
        correctAnswer: "c",
        explanation: "Reflektorn är längst (ca 5% längre än driven element). Den 'speglar' vågen framåt. Direktorerna är kortast och driven element är λ/2.",
        difficulty: "easy"
    },
    {
        id: 57,
        chapterId: 3,
        question: "Hur mycket vinst har en 5-elements Yagi ungefär?",
        options: [
            { id: "a", text: "2-3 dBd" },
            { id: "b", text: "4-5 dBd" },
            { id: "c", text: "7-8 dBd" },
            { id: "d", text: "12-15 dBd" }
        ],
        correctAnswer: "c",
        explanation: "En 5-elements Yagi har cirka 7-8 dBd vinst, vilket motsvarar ungefär 5× effekten jämfört med en dipol!",
        difficulty: "medium"
    },
    {
        id: 58,
        chapterId: 3,
        question: "Vad betyder F/B (fram/back-förhållande)?",
        options: [
            { id: "a", text: "Frekvens och bandbredd" },
            { id: "b", text: "Hur mycket bättre antennen strålar framåt jämfört med bakåt" },
            { id: "c", text: "Förstärkning och balans" },
            { id: "d", text: "Filter och balun" }
        ],
        correctAnswer: "b",
        explanation: "F/B (Front-to-Back ratio) mäter i dB hur mycket bättre antennen strålar framåt vs bakåt. Typiskt 15-25 dB för en bra Yagi.",
        difficulty: "medium"
    },
    {
        id: 59,
        chapterId: 3,
        question: "Vilken kabeltyp ska undvikas för VHF/UHF på grund av höga förluster?",
        options: [
            { id: "a", text: "RG-213" },
            { id: "b", text: "Aircell 7" },
            { id: "c", text: "RG-58" },
            { id: "d", text: "Ecoflex 10" }
        ],
        correctAnswer: "c",
        explanation: "RG-58 har mycket höga förluster på VHF/UHF (22 dB/100m på 432 MHz). På UHF försvinner 72% av effekten i 20m RG-58! Använd Aircell, Ecoflex eller RG-213 istället.",
        difficulty: "medium"
    },
    {
        id: 60,
        chapterId: 3,
        question: "Vilken kontakttyp rekommenderas för VHF/UHF?",
        options: [
            { id: "a", text: "PL-259" },
            { id: "b", text: "N-kontakt" },
            { id: "c", text: "BNC" },
            { id: "d", text: "F-kontakt" }
        ],
        correctAnswer: "b",
        explanation: "N-kontakt är bäst för VHF/UHF: äkta 50 Ω impedans, vattentät, fungerar utmärkt till 10 GHz. PL-259 är INTE 50 Ω och fungerar dåligt över 150 MHz.",
        difficulty: "medium"
    },
    {
        id: 61,
        chapterId: 3,
        question: "Hur mycket effekt reflekteras vid SWR 2:1?",
        options: [
            { id: "a", text: "4%" },
            { id: "b", text: "11%" },
            { id: "c", text: "25%" },
            { id: "d", text: "50%" }
        ],
        correctAnswer: "b",
        explanation: "Vid SWR 2:1 reflekteras 11% av effekten. 100W blir 89W till antennen. Detta är fortfarande acceptabelt för de flesta sändare.",
        difficulty: "medium"
    },
    {
        id: 62,
        chapterId: 3,
        question: "Vad är den vanligaste orsaken till högt SWR?",
        options: [
            { id: "a", text: "För lång koaxkabel" },
            { id: "b", text: "Antenn inte resonant på frekvensen" },
            { id: "c", text: "För låg sändareffekt" },
            { id: "d", text: "Dåligt väder" }
        ],
        correctAnswer: "b",
        explanation: "Vanligaste orsaken är att antennen inte är resonant på frekvensen - antingen fel längd, eller man sänder utanför antennens designade frekvensområde.",
        difficulty: "easy"
    },
    {
        id: 63,
        chapterId: 3,
        question: "Var ska en antenntuner placeras för bästa resultat vid högt SWR?",
        options: [
            { id: "a", text: "Vid radion" },
            { id: "b", text: "Vid antennen" },
            { id: "c", text: "I mitten av koaxkabeln" },
            { id: "d", text: "Det spelar ingen roll" }
        ],
        correctAnswer: "b",
        explanation: "Tuner vid antennen är bäst - då har kabeln lågt SWR hela vägen vilket ger mindre förluster. Tuner vid radion 'döljer' bara problemet - kabeln har fortfarande högt SWR och stora förluster.",
        difficulty: "hard"
    },
    {
        id: 64,
        chapterId: 3,
        question: "Vad är mantelströmmar?",
        options: [
            { id: "a", text: "Ström i antennen" },
            { id: "b", text: "RF-ström på utsidan av koaxskärmen" },
            { id: "c", text: "Ström i sändaren" },
            { id: "d", text: "Ström i jordplanet" }
        ],
        correctAnswer: "b",
        explanation: "Mantelströmmar är oönskade RF-strömmar på UTSIDAN av koaxskärmen. De orsakar RF i shacket, snedvridet strålningsmönster, felaktigt SWR och störningar.",
        difficulty: "medium"
    },
    {
        id: 65,
        chapterId: 3,
        question: "Hur bygger man en enkel strömsbalun?",
        options: [
            { id: "a", text: "Linda 50 varv tråd" },
            { id: "b", text: "Trä 6-10 ferritkärnor på koaxen" },
            { id: "c", text: "Använd en transformator" },
            { id: "d", text: "Koppla två koaxkablar parallellt" }
        ],
        correctAnswer: "b",
        explanation: "Enklaste hemmabyggda balun: Trä 6-10 st ferritkärnor (typ FT240-43) på koaxen 10-30 cm från matningspunkten. Packa tätt, fäst och vattentäta. Fungerar utmärkt!",
        difficulty: "medium"
    },
    {
        id: 66,
        chapterId: 3,
        question: "Var ska balun placeras för bästa resultat?",
        options: [
            { id: "a", text: "Endast vid radion" },
            { id: "b", text: "Vid antennen (viktigast) och gärna även vid radion" },
            { id: "c", text: "I mitten av koaxkabeln" },
            { id: "d", text: "Det spelar ingen roll" }
        ],
        correctAnswer: "b",
        explanation: "Balun ska placeras VID ANTENNEN (primärt - viktigast!) där mantelströmmarna uppstår. Sekundärt även vid radion som extra skydd. Båda = optimalt!",
        difficulty: "medium"
    },
    {
        id: 67,
        chapterId: 3,
        question: "Hur många radialer rekommenderas minimum för en vertikal antenn?",
        options: [
            { id: "a", text: "1 radial" },
            { id: "b", text: "2 radialer" },
            { id: "c", text: "4 radialer" },
            { id: "d", text: "16 radialer" }
        ],
        correctAnswer: "c",
        explanation: "4 radialer är acceptabelt minimum för en vertikal antenn. 8-16 radialer ger bra prestanda. Utan jordplan fungerar en vertikal antenn inte alls!",
        difficulty: "medium"
    },
    {
        id: 68,
        chapterId: 3,
        question: "Vilken impedans har en kvartsvågs vertikal med horisontella radialer?",
        options: [
            { id: "a", text: "25 Ω" },
            { id: "b", text: "36 Ω" },
            { id: "c", text: "50 Ω" },
            { id: "d", text: "73 Ω" }
        ],
        correctAnswer: "b",
        explanation: "En λ/4 vertikal med horisontella radialer har cirka 36 Ω. Med radialer vinklade 45° (ground plane) höjs impedansen till perfekta 50 Ω!",
        difficulty: "hard"
    },
    {
        id: 69,
        chapterId: 3,
        question: "Hur ser en vertikal antenns strålningsmönster ut horisontellt?",
        options: [
            { id: "a", text: "Åttafigur" },
            { id: "b", text: "Rakt framåt" },
            { id: "c", text: "Rundstrålande" },
            { id: "d", text: "Endast bakåt" }
        ],
        correctAnswer: "c",
        explanation: "En vertikal antenn är rundstrålande horisontellt - den strålar lika starkt åt alla riktningar. Perfekt för att täcka alla håll samtidigt!",
        difficulty: "easy"
    },
    {
        id: 70,
        chapterId: 3,
        question: "Vad är hastighetsfaktor (VF) för koaxialkabel?",
        options: [
            { id: "a", text: "Hur fort man kan montera kabeln" },
            { id: "b", text: "Hur mycket långsammare RF färdas i kabeln än i vakuum" },
            { id: "c", text: "Kabelns maximala effekttålighet" },
            { id: "d", text: "Kabelns böjbarhet" }
        ],
        correctAnswer: "b",
        explanation: "VF anger hur mycket långsammare RF färdas i kabeln jämfört med ljusets hastighet. Solid PE: VF=0,66, Skum-PE: 0,80, Luft (Aircell): 0,85. Viktigt för beräkning av elektrisk kabellängd.",
        difficulty: "hard"
    },

    // ============================================
    // KAPITEL 4: VÅGUTBREDNING (20 FRÅGOR)
    // ============================================
    {
        id: 71,
        chapterId: 4,
        question: "Vad är formeln för att beräkna våglängd från frekvens?",
        options: [
            { id: "a", text: "λ = f / 300" },
            { id: "b", text: "λ = 300 / f (där f är i MHz och λ i meter)" },
            { id: "c", text: "λ = 300 × f" },
            { id: "d", text: "λ = f × c" }
        ],
        correctAnswer: "b",
        explanation: "Den praktiska formeln för amatörradio är λ (meter) = 300 / f (MHz). Exempel: 14 MHz ger 300/14 ≈ 21,4 meter.",
        difficulty: "easy"
    },
    {
        id: 72,
        chapterId: 4,
        question: "Vilket frekvensområde kallas HF (kortväg)?",
        options: [
            { id: "a", text: "300 kHz - 3 MHz" },
            { id: "b", text: "3-30 MHz" },
            { id: "c", text: "30-300 MHz" },
            { id: "d", text: "300 MHz - 3 GHz" }
        ],
        correctAnswer: "b",
        explanation: "HF (High Frequency) är 3-30 MHz. Detta är 'kortväg' där amatörbanden 80m, 40m, 20m, 15m och 10m finns.",
        difficulty: "easy"
    },
    {
        id: 73,
        chapterId: 4,
        question: "Vilket utbredningssätt dominerar på HF för långdistans (DX)?",
        options: [
            { id: "a", text: "Markvåg" },
            { id: "b", text: "Rymdvåg via jonosfären" },
            { id: "c", text: "Siktlinje" },
            { id: "d", text: "Troposfärisk ducting" }
        ],
        correctAnswer: "b",
        explanation: "Rymdvåg (reflektion i jonosfären) möjliggör HF-DX över hela världen. F-skiktet reflekterar signalen tillbaka mot jorden.",
        difficulty: "easy"
    },
    {
        id: 74,
        chapterId: 4,
        question: "Vilken polarisation fungerar bäst för markvåg?",
        options: [
            { id: "a", text: "Horisontell" },
            { id: "b", text: "Vertikal" },
            { id: "c", text: "Cirkulär" },
            { id: "d", text: "Det spelar ingen roll" }
        ],
        correctAnswer: "b",
        explanation: "Vertikal polarisation ger mycket längre markvågsräckvidd än horisontell. Horisontell polarisation absorberas kraftigt i marken.",
        difficulty: "medium"
    },
    {
        id: 75,
        chapterId: 4,
        question: "Vilket jonosfärsskikt absorberar HF-signaler dagtid?",
        options: [
            { id: "a", text: "D-skiktet" },
            { id: "b", text: "E-skiktet" },
            { id: "c", text: "F-skiktet" },
            { id: "d", text: "G-skiktet" }
        ],
        correctAnswer: "a",
        explanation: "D-skiktet (60-90 km höjd) absorberar MF och lägre HF kraftigt dagtid. Det försvinner på natten, vilket öppnar 80m och 160m för DX.",
        difficulty: "medium"
    },
    {
        id: 76,
        chapterId: 4,
        question: "Vilket jonosfärsskikt är viktigast för HF-DX?",
        options: [
            { id: "a", text: "D-skiktet" },
            { id: "b", text: "E-skiktet" },
            { id: "c", text: "F-skiktet (F2)" },
            { id: "d", text: "Alla lika viktiga" }
        ],
        correctAnswer: "c",
        explanation: "F-skiktet (140-600 km höjd) har högst elektronkoncentration och reflekterar 20m, 15m, 10m utmärkt. Det är 'motorvägen' för HF-DX.",
        difficulty: "medium"
    },
    {
        id: 77,
        chapterId: 4,
        question: "Vad betyder MUF?",
        options: [
            { id: "a", text: "Minimum Usable Frequency" },
            { id: "b", text: "Maximum Usable Frequency" },
            { id: "c", text: "Medium Ultra Frequency" },
            { id: "d", text: "Modulated Upper Frequency" }
        ],
        correctAnswer: "b",
        explanation: "MUF = Maximum Usable Frequency. Den högsta frekvens som kan användas för en viss sträcka. Över MUF går signalen rakt igenom jonosfären.",
        difficulty: "medium"
    },
    {
        id: 78,
        chapterId: 4,
        question: "Vad är en 'död zon' (skip zone)?",
        options: [
            { id: "a", text: "Ett område utan stationer" },
            { id: "b", text: "Området mellan markvågens räckvidd och där rymdvågen landar" },
            { id: "c", text: "Ett frekvensband utan trafik" },
            { id: "d", text: "En region utan repeatrar" }
        ],
        correctAnswer: "b",
        explanation: "Skip zone är området där varken markvåg eller rymdvåg når. Exempel: Markvåg når 100 km, rymdvåg landar först vid 500 km → död zon 100-500 km.",
        difficulty: "medium"
    },
    {
        id: 79,
        chapterId: 4,
        question: "Vad är formeln för radiohorisont?",
        options: [
            { id: "a", text: "d = 3,57 × √h" },
            { id: "b", text: "d = 4,12 × √h (där d i km, h i meter)" },
            { id: "c", text: "d = h / 4,12" },
            { id: "d", text: "d = 300 / h" }
        ],
        correctAnswer: "b",
        explanation: "Radiohorisont: d (km) = 4,12 × √h (m). Exempel: Antenn på 25m höjd når 4,12 × 5 = 20,6 km till horisonten.",
        difficulty: "medium"
    },
    {
        id: 80,
        chapterId: 4,
        question: "Vilket är viktigast för VHF/UHF-räckvidd?",
        options: [
            { id: "a", text: "Sändareffekt" },
            { id: "b", text: "Antennhöjd" },
            { id: "c", text: "Modulationstyp" },
            { id: "d", text: "Kabeltyp" }
        ],
        correctAnswer: "b",
        explanation: "Antennhöjd är VIKTIGASTE faktorn! 10m högre antenn ger ofta mer än 10× effekten. VHF/UHF begränsas av jordkrökningen.",
        difficulty: "easy"
    },
    {
        id: 81,
        chapterId: 4,
        question: "Vad är sporadiskt E?",
        options: [
            { id: "a", text: "Ett permanent jonosfärsskikt" },
            { id: "b", text: "Intensiva jonmoln i E-skiktet som kan reflektera VHF" },
            { id: "c", text: "En typ av aurora" },
            { id: "d", text: "En störning" }
        ],
        correctAnswer: "b",
        explanation: "Sporadiskt E är intensiva jonmoln i E-skiktet (90-140 km) som kan reflektera VHF, speciellt 6m-bandet. Vanligast maj-augusti.",
        difficulty: "hard"
    },
    {
        id: 82,
        chapterId: 4,
        question: "Vad är troposfärisk ducting?",
        options: [
            { id: "a", text: "Jonosfärsreflektion" },
            { id: "b", text: "Temperaturinversion som skapar 'vågledare' för VHF/UHF" },
            { id: "c", text: "Markreflektion" },
            { id: "d", text: "Satellitkommunikation" }
        ],
        correctAnswer: "b",
        explanation: "Tropoducting uppstår vid temperaturinversion (varm luft över kall). Skapar en 'vågledare' som kan leda VHF/UHF-signaler 300-1000+ km.",
        difficulty: "hard"
    },
    {
        id: 83,
        chapterId: 4,
        question: "Hur påverkar aurora HF-banden?",
        options: [
            { id: "a", text: "Förbättrar alltid utbredningen" },
            { id: "b", text: "Absorption på högre HF (20m, 15m, 10m), 40m/80m fungerar OK" },
            { id: "c", text: "Ingen påverkan" },
            { id: "d", text: "Endast påverkan på VHF" }
        ],
        correctAnswer: "b",
        explanation: "Aurora absorberar högre HF-band (20m, 15m, 10m) kraftigt. 40m och 80m fungerar oftast OK. På 2m kan aurora ge DX norrut men med raspig signal.",
        difficulty: "hard"
    },
    {
        id: 84,
        chapterId: 4,
        question: "Vad står EME för?",
        options: [
            { id: "a", text: "Extended Medium Equipment" },
            { id: "b", text: "Earth-Moon-Earth (moonbounce)" },
            { id: "c", text: "Emergency Mode Equipment" },
            { id: "d", text: "Enhanced Mode Extension" }
        ],
        correctAnswer: "b",
        explanation: "EME = Earth-Moon-Earth, även kallat 'moonbounce'. Radiosignaler studsar mot månen. Kräver stor station (hög effekt, stora antenner).",
        difficulty: "hard"
    },
    {
        id: 85,
        chapterId: 4,
        question: "Hur lång är solcykeln?",
        options: [
            { id: "a", text: "Cirka 5 år" },
            { id: "b", text: "Cirka 11 år" },
            { id: "c", text: "Cirka 20 år" },
            { id: "d", text: "Cirka 50 år" }
        ],
        correctAnswer: "b",
        explanation: "Solcykeln är cirka 11 år lång (varierar mellan 9-14 år). Antalet solfläckar varierar från nästan noll (solar min) till över 200 (solar max).",
        difficulty: "easy"
    },
    {
        id: 86,
        chapterId: 4,
        question: "Hur påverkar högt solfläckstal (SSN) HF-banden?",
        options: [
            { id: "a", text: "Högre band (10m, 15m, 20m) öppnar" },
            { id: "b", text: "Alla band stänger" },
            { id: "c", text: "Bara lägre band fungerar" },
            { id: "d", text: "Ingen påverkan" }
        ],
        correctAnswer: "a",
        explanation: "Högt SSN (solar max) joniserar jonosfären mer → högre MUF → högre HF-band öppnar! 10m kan vara öppet dygnet runt till hela världen.",
        difficulty: "medium"
    },
    {
        id: 87,
        chapterId: 4,
        question: "Vad är SWF (Sudden Ionospheric Disturbance)?",
        options: [
            { id: "a", text: "En väderstörning" },
            { id: "b", text: "HF-blackout 8 minuter efter solflar (D-skiktet joniseras kraftigt)" },
            { id: "c", text: "En typ av antenn" },
            { id: "d", text: "Ett mätinstrument" }
        ],
        correctAnswer: "b",
        explanation: "SWF = plötslig HF-blackout när röntgen/UV från solflar når jorden på 8 minuter. D-skiktet joniseras kraftigt och absorberar HF totalt i 10 min-2 timmar.",
        difficulty: "hard"
    },
    {
        id: 88,
        chapterId: 4,
        question: "Vad mäter K-index?",
        options: [
            { id: "a", text: "Solfläckstal" },
            { id: "b", text: "Geomagnetisk aktivitet (aurora-sannolikhet)" },
            { id: "c", text: "Jonosfärens höjd" },
            { id: "d", text: "Signalstyrka" }
        ],
        correctAnswer: "b",
        explanation: "K-index (0-9) mäter geomagnetisk aktivitet. K > 4 innebär ökad aurora-sannolikhet och HF-störningar. K 7-9 = svår geomagnetisk storm.",
        difficulty: "medium"
    },
    {
        id: 89,
        chapterId: 4,
        question: "Vad är grålinjen (gray line)?",
        options: [
            { id: "a", text: "En antennanslutning" },
            { id: "b", text: "Gränslinjen mellan dag och natt - utmärkt för HF-DX" },
            { id: "c", text: "Ett frekvensområde" },
            { id: "d", text: "En typ av kabel" }
        ],
        correctAnswer: "b",
        explanation: "Grålinjen är gränsen mellan dag och natt (gryning/skymning). D-skiktet borta men F-skiktet kvar = perfekt för DX! Bäst på 40m och 80m.",
        difficulty: "medium"
    },
    {
        id: 90,
        chapterId: 4,
        question: "Vilket band fungerar bäst vid solar minimum (lågt SSN)?",
        options: [
            { id: "a", text: "10m och 15m" },
            { id: "b", text: "40m, 80m och 160m" },
            { id: "c", text: "6m och 2m" },
            { id: "d", text: "Alla band lika bra" }
        ],
        correctAnswer: "b",
        explanation: "Vid solar minimum är 10m, 15m oftast stängda. 40m, 80m och 160m är då bäst. 40m blir 'arbetshästen' som fungerar både dag och natt.",
        difficulty: "medium"
    },
    
// ============================================
// KAPITEL 5: MÄTINSTRUMENT - SLUTPROV
// ============================================
{
    id: 91,
    chapterId: 5,
    question: "Hur ska en voltmeter kopplas för att mäta spänning över en komponent?",
    options: [
        { id: "a", text: "I serie med komponenten" },
        { id: "b", text: "Parallellt med komponenten" },
        { id: "c", text: "Via en transformator" },
        { id: "d", text: "Via en kondensator" }
    ],
    correctAnswer: "b",
    explanation: "En voltmeter kopplas alltid parallellt med det som ska mätas. Den har hög ingångsimpedans (typiskt 10 MΩ) för att inte påverka kretsen.",
    difficulty: "easy"
},
{
    id: 92,
    chapterId: 5,
    question: "Hur ska en amperemeter kopplas för att mäta ström?",
    options: [
        { id: "a", text: "Parallellt med komponenten" },
        { id: "b", text: "I serie med komponenten" },
        { id: "c", text: "Via en transformator" },
        { id: "d", text: "Direkt över batteriet" }
    ],
    correctAnswer: "b",
    explanation: "En amperemeter kopplas alltid i serie så att strömmen passerar genom mätaren. Den har låg inre resistans för att inte bromsa strömmen.",
    difficulty: "easy"
},
{
    id: 93,
    chapterId: 5,
    question: "Vad händer om du kopplar en amperemeter parallellt över ett batteri?",
    options: [
        { id: "a", text: "Mätaren visar rätt ström" },
        { id: "b", text: "Kortslutning - bränd säkring och risk för skada" },
        { id: "c", text: "Inget händer" },
        { id: "d", text: "Batteriet laddas" }
    ],
    correctAnswer: "b",
    explanation: "Amperemeter har låg resistans. Parallellt över batteri = kortslutning! Enorm ström, bränd säkring, kan förstöra både mätare och batteri.",
    difficulty: "easy"
},
{
    id: 94,
    chapterId: 5,
    question: "Varför måste kretsen vara strömlös när man mäter resistans med ohmmeter?",
    options: [
        { id: "a", text: "För mätarens batteris livslängd" },
        { id: "b", text: "Extern spänning ger felaktigt värde och kan skada mätaren" },
        { id: "c", text: "Det är inte nödvändigt" },
        { id: "d", text: "Endast för säkerheten" }
    ],
    correctAnswer: "b",
    explanation: "Ohmmetern använder sitt eget batteri och skickar egen ström. Extern spänning stör mätningen totalt och kan skada mätaren. Koppla ALLTID från spänning!",
    difficulty: "easy"
},
{
    id: 95,
    chapterId: 5,
    question: "Vad mäter en SWR-mätare?",
    options: [
        { id: "a", text: "Endast sändareffekt" },
        { id: "b", text: "Förhållandet mellan framåtgående och reflekterad effekt" },
        { id: "c", text: "Frekvens" },
        { id: "d", text: "Modulationsgrad" }
    ],
    correctAnswer: "b",
    explanation: "SWR-mätaren visar förhållandet mellan framåtgående och reflekterad effekt. SWR 1:1 = perfekt anpassning, ingen reflektion.",
    difficulty: "easy"
},
{
    id: 96,
    chapterId: 5,
    question: "Vilket SWR-värde indikerar allvarliga problem som bör åtgärdas omedelbart?",
    options: [
        { id: "a", text: "SWR 1,5:1" },
        { id: "b", text: "SWR 2:1" },
        { id: "c", text: "SWR 3:1 eller högre" },
        { id: "d", text: "SWR 1,2:1" }
    ],
    correctAnswer: "c",
    explanation: "SWR >3:1 är problematiskt. Risk för slutstegsskada, stora förluster. <1,5:1 = utmärkt, 1,5-2:1 = bra, 2-3:1 = acceptabelt men bör förbättras.",
    difficulty: "medium"
},
{
    id: 97,
    chapterId: 5,
    question: "Vad är en dummyload?",
    options: [
        { id: "a", text: "En typ av antenn för testning" },
        { id: "b", text: "En resistiv belastning (50Ω) som absorberar RF-effekt utan att stråla" },
        { id: "c", text: "En förstärkare" },
        { id: "d", text: "Ett filter" }
    ],
    correctAnswer: "b",
    explanation: "En dummyload är ett 50Ω motstånd som absorberar sändareffekten och omvandlar den till värme utan att stråla ut signalen. Används för säker testning.",
    difficulty: "easy"
},
{
    id: 98,
    chapterId: 5,
    question: "Vad visar ett oscilloskops Y-axel respektive X-axel?",
    options: [
        { id: "a", text: "Y = frekvens, X = spänning" },
        { id: "b", text: "Y = spänning, X = tid" },
        { id: "c", text: "Y = tid, X = spänning" },
        { id: "d", text: "Y = effekt, X = frekvens" }
    ],
    correctAnswer: "b",
    explanation: "Oscilloskopet visar spänning (Y-axel vertikal) mot tid (X-axel horisontell). Detta visar signalens vågform över tiden.",
    difficulty: "easy"
},
{
    id: 99,
    chapterId: 5,
    question: "Varför används 10:1 prob istället för 1:1 prob vid RF-mätningar på oscilloskop?",
    options: [
        { id: "a", text: "Det är billigare" },
        { id: "b", text: "10:1 prob har lägre kapacitans (10-15 pF vs 100 pF) och påverkar RF-kretsar mindre" },
        { id: "c", text: "Det ger högre spänning" },
        { id: "d", text: "Det kräver ingen kompensation" }
    ],
    correctAnswer: "b",
    explanation: "10:1 prob har 10 gånger lägre kapacitans (10-15 pF istället för 100 pF). Vid RF är detta kritiskt - 100 pF kan ändra en VFO flera kHz!",
    difficulty: "medium"
},
{
    id: 100,
    chapterId: 5,
    question: "Vad är syftet med trigger-funktionen på ett oscilloskop?",
    options: [
        { id: "a", text: "Öka förstärkningen" },
        { id: "b", text: "Synkronisera bilden så att vågformen står still" },
        { id: "c", text: "Mäta frekvens" },
        { id: "d", text: "Spara energi" }
    ],
    correctAnswer: "b",
    explanation: "Trigger synkroniserar svepet så det alltid startar vid samma punkt på signalen. Detta får vågformen att 'frysa' och stå still på skärmen.",
    difficulty: "easy"
},
{
    id: 101,
    chapterId: 5,
    question: "Hur fungerar en frekvensräknare?",
    options: [
        { id: "a", text: "Mäter spänning över tid" },
        { id: "b", text: "Räknar antal svängningar under en bestämd tid (grindtid)" },
        { id: "c", text: "Mäter impedans" },
        { id: "d", text: "Mäter effekt" }
    ],
    correctAnswer: "b",
    explanation: "Frekvensräknaren räknar antalet pulser under grindtiden (t.ex. 1 sekund). Antal pulser = frekvens. 14 200 000 pulser/sekund = 14,200 MHz.",
    difficulty: "medium"
},
{
    id: 102,
    chapterId: 5,
    question: "Vilken är den lagstadgade frekvenstoleransen för VHF/UHF (>30 MHz) enligt PTS?",
    options: [
        { id: "a", text: "±100 ppm" },
        { id: "b", text: "±20 ppm" },
        { id: "c", text: "±5 ppm (±0,0005%)" },
        { id: "d", text: "±1 ppm" }
    ],
    correctAnswer: "c",
    explanation: "För VHF/UHF (>30 MHz): ±5 ppm. För HF (<30 MHz): ±20 ppm. Vid 144 MHz betyder ±5 ppm max ±720 Hz frekvensfel.",
    difficulty: "medium"
},
{
    id: 103,
    chapterId: 5,
    question: "Vad är PEP (Peak Envelope Power) vid SSB-sändning?",
    options: [
        { id: "a", text: "Medeleffekten under en transmission" },
        { id: "b", text: "Den maximala momentana effekten vid topparna i modulationen" },
        { id: "c", text: "Effekten vid kontinuerlig bärvåg" },
        { id: "d", text: "Förlusteffekten" }
    ],
    correctAnswer: "b",
    explanation: "PEP är den maximala momentana effekten som uppnås vid topparna i SSB-signalens kuvert. Medeleffekt vid normal tal är cirka 25-40% av PEP.",
    difficulty: "medium"
},
{
    id: 104,
    chapterId: 5,
    question: "Vad betyder S9 på en S-meter enligt standard?",
    options: [
        { id: "a", text: "-93 dBm" },
        { id: "b", text: "-83 dBm" },
        { id: "c", text: "-73 dBm (50 µV över 50Ω)" },
        { id: "d", text: "-63 dBm" }
    ],
    correctAnswer: "c",
    explanation: "S9 = -73 dBm (motsvarande 50 µV över 50Ω). Varje S-enhet motsvarar 6 dB. S8 = -79 dBm, S7 = -85 dBm etc.",
    difficulty: "medium"
},
{
    id: 105,
    chapterId: 5,
    question: "Hur många dB motsvarar varje S-enhet på en S-meter?",
    options: [
        { id: "a", text: "1 dB" },
        { id: "b", text: "3 dB" },
        { id: "c", text: "6 dB" },
        { id: "d", text: "10 dB" }
    ],
    correctAnswer: "c",
    explanation: "Varje S-enhet motsvarar 6 dB skillnad i signalstyrka. 6 dB är ungefär 4 gånger effekten. Många S-metrar är dock okalibrerade.",
    difficulty: "medium"
},
{
    id: 106,
    chapterId: 5,
    question: "Varför ska man använda dämpare mellan RF-signalgenerator och mottagare vid test?",
    options: [
        { id: "a", text: "För bättre frekvens" },
        { id: "b", text: "För att skydda mottagaren från överbelastning med för stark signal" },
        { id: "c", text: "För lägre SWR" },
        { id: "d", text: "Det behövs inte" }
    ],
    correctAnswer: "b",
    explanation: "RF-generator kan ge för stark signal som överbelastar mottagaren. Dämpare (t.ex. -20 dB eller -40 dB) ger realistisk svag signal för test.",
    difficulty: "easy"
},
{
    id: 107,
    chapterId: 5,
    question: "Vad betyder -20 dB dämpning i termer av effektreduktion?",
    options: [
        { id: "a", text: "Effekten halveras" },
        { id: "b", text: "Effekten reduceras till 1/10" },
        { id: "c", text: "Effekten reduceras till 1/100" },
        { id: "d", text: "Effekten reduceras till 1/20" }
    ],
    correctAnswer: "c",
    explanation: "-20 dB betyder att effekten reduceras till 1/100. 100W → 1W. -10 dB = ÷10, -30 dB = ÷1000, -3 dB = halvering.",
    difficulty: "medium"
},
{
    id: 108,
    chapterId: 5,
    question: "Vilken impedans ska en dummyload för amatörradio ha?",
    options: [
        { id: "a", text: "75 Ω" },
        { id: "b", text: "50 Ω" },
        { id: "c", text: "300 Ω" },
        { id: "d", text: "Det spelar ingen roll" }
    ],
    correctAnswer: "b",
    explanation: "50Ω är standard för amatörradio. Detta ger SWR 1:1 med sändaren. Vissa TV-system använder 75Ω, men amatörradio använder 50Ω.",
    difficulty: "easy"
},
{
    id: 109,
    chapterId: 5,
    question: "Vad är den största fördelen med en antennanalysator jämfört med enkel SWR-meter?",
    options: [
        { id: "a", text: "Den är billigare" },
        { id: "b", text: "Den kan swepa hela bandet och visa SWR-kurva utan sändning" },
        { id: "c", text: "Den är mindre" },
        { id: "d", text: "Den kräver inget batteri" }
    ],
    correctAnswer: "b",
    explanation: "Antennanalysator kan swepa hela bandet på sekunder och visa SWR-kurva + impedans utan att man behöver sända. Sparar enormt mycket tid vid antenntrimning!",
    difficulty: "medium"
},
{
    id: 110,
    chapterId: 5,
    question: "Vad indikerar impedans 50 + j15 Ω på en antenn?",
    options: [
        { id: "a", text: "Perfekt anpassning" },
        { id: "b", text: "Resistans 50Ω OK, men induktiv reaktans - antennen är för lång" },
        { id: "c", text: "Antennen är för kort" },
        { id: "d", text: "SWR 15:1" }
    ],
    correctAnswer: "b",
    explanation: "50Ω resistans är bra. +j15 betyder induktiv reaktans (för lång antenn). -j15 skulle betyda kapacitiv reaktans (för kort). Vid resonans är X = 0.",
    difficulty: "hard"
},
    {
        id: 111,
        chapterId: 6,
        question: "Vad betyder EMC?",
        options: [
            { id: "a", text: "Electronic Machine Control" },
            { id: "b", text: "Electromagnetic Compatibility" },
            { id: "c", text: "Effective Modulation Control" },
            { id: "d", text: "Electronic Mode Converter" }
        ],
        correctAnswer: "b",
        explanation: "EMC = Electromagnetic Compatibility (elektromagnetisk kompatibilitet) - att utrustning fungerar utan att störa eller störas.",
        difficulty: "easy"
    },
    {
        id: 112,
        chapterId: 6,
        question: "Vad är en övertonstörning?",
        options: [
            { id: "a", text: "Störning från annan station på samma frekvens" },
            { id: "b", text: "Störning från harmoniska av sändarfrekvensen" },
            { id: "c", text: "Störning från blixtar" },
            { id: "d", text: "Störning från mobiltelefoner" }
        ],
        correctAnswer: "b",
        explanation: "Övertoner är harmoniska (multiplar) av grundfrekvensen. T.ex. kan 14 MHz ge övertoner på 28, 42, 56 MHz osv.",
        difficulty: "medium"
    },
    {
        id: 113,
        chapterId: 6,
        question: "Vad är TVI?",
        options: [
            { id: "a", text: "Television Video Input" },
            { id: "b", text: "Television Interference (TV-störning)" },
            { id: "c", text: "Total Voltage Increase" },
            { id: "d", text: "Transmitter Verification Index" }
        ],
        correctAnswer: "b",
        explanation: "TVI = Television Interference, störningar på TV-mottagning orsakade av radiosändare.",
        difficulty: "easy"
    },
    {
        id: 114,
        chapterId: 6,
        question: "Hur kan man minska risken för övertonstörningar?",
        options: [
            { id: "a", text: "Öka sändareffekten" },
            { id: "b", text: "Använda lågpassfilter efter sändaren" },
            { id: "c", text: "Använda längre antennkabel" },
            { id: "d", text: "Sända på högre frekvenser" }
        ],
        correctAnswer: "b",
        explanation: "Ett lågpassfilter efter slutsteget dämpar övertoner så att de inte strålas ut via antennen.",
        difficulty: "easy"
    },
    {
        id: 115,
        chapterId: 6,
        question: "Vad är intermodulation?",
        options: [
            { id: "a", text: "Korrekt modulering av signalen" },
            { id: "b", text: "Oönskade signaler som uppstår när två frekvenser blandas i olinjära kretsar" },
            { id: "c", text: "En typ av digital modulation" },
            { id: "d", text: "Störning från solaktivitet" }
        ],
        correctAnswer: "b",
        explanation: "Intermodulation uppstår när två eller fler signaler blandas i olinjära komponenter och skapar nya frekvenser.",
        difficulty: "hard"
    },
    {
        id: 116,
        chapterId: 6,
        question: "Vad är syftet med en ferritkärna (choke) på kablar?",
        options: [
            { id: "a", text: "Att förstärka signalen" },
            { id: "b", text: "Att dämpa RF-strömmar på kabelmanteln" },
            { id: "c", text: "Att öka bandbredden" },
            { id: "d", text: "Att mäta effekt" }
        ],
        correctAnswer: "b",
        explanation: "Ferritkärnor undertrycker oönskade RF-strömmar (mantelströmmar) som kan orsaka störningar.",
        difficulty: "medium"
    },
    {
        id: 117,
        chapterId: 6,
        question: "Vad orsakar BCI (Broadcast Interference)?",
        options: [
            { id: "a", text: "Störning på rundradiomottagare från amatörsändare" },
            { id: "b", text: "Störning från rundradiostationer" },
            { id: "c", text: "Störning på internet" },
            { id: "d", text: "Störning på mobiltelefonmaster" }
        ],
        correctAnswer: "a",
        explanation: "BCI är störning på kommersiella rundradiomottagare orsakad av närliggande amatörradiosändare.",
        difficulty: "medium"
    },
    {
        id: 118,
        chapterId: 6,
        question: "Vad är första steget vid felsökning av EMC-störningar?",
        options: [
            { id: "a", text: "Byta ut all utrustning" },
            { id: "b", text: "Kontakta grannen" },
            { id: "c", text: "Identifiera störkällan och den störda utrustningen" },
            { id: "d", text: "Öka effekten" }
        ],
        correctAnswer: "c",
        explanation: "Första steget är alltid att identifiera vad som stör och vad som störs för att kunna åtgärda rätt.",
        difficulty: "easy"
    },
    {
        id: 119,
        chapterId: 6,
        question: "Hur kan jordning hjälpa mot störningar?",
        options: [
            { id: "a", text: "Den har ingen effekt" },
            { id: "b", text: "Den kan avleda oönskade RF-strömmar" },
            { id: "c", text: "Den ökar sändareffekten" },
            { id: "d", text: "Den förbättrar modulationen" }
        ],
        correctAnswer: "b",
        explanation: "God jordning kan avleda oönskade RF-strömmar och minska störningar både till och från stationen.",
        difficulty: "medium"
    },
    {
        id: 120,
        chapterId: 6,
        question: "Vad är skärmning?",
        options: [
            { id: "a", text: "Att visa information på skärm" },
            { id: "b", text: "Att innesluta utrustning i ledande material för att stoppa RF-läckage" },
            { id: "c", text: "Att skydda mot regn" },
            { id: "d", text: "Att öka signalstyrkan" }
        ],
        correctAnswer: "b",
        explanation: "Skärmning med ledande material (metallhölje) förhindrar RF-signaler att läcka in eller ut.",
        difficulty: "easy"
    },
    {
        id: 121,
        chapterId: 6,
        question: "Vilken är den viktigaste åtgärden mot mantelströmmar?",
        options: [
            { id: "a", text: "Öka sändareffekten" },
            { id: "b", text: "Använda balun eller choke vid antennen" },
            { id: "c", text: "Byta koaxkabel" },
            { id: "d", text: "Sänka frekvensen" }
        ],
        correctAnswer: "b",
        explanation: "Balun eller choke vid antennen stoppar RF-strömmar på koaxkabelns utsida (mantelströmmar) som annars kan stråla in i huset och orsaka störningar.",
        difficulty: "medium"
    },
    {
        id: 122,
        chapterId: 6,
        question: "Hur mycket måste oönskade utsändningar dämpas enligt lag?",
        options: [
            { id: "a", text: "Minst 20 dB" },
            { id: "b", text: "Minst 30 dB" },
            { id: "c", text: "Minst 40 dB" },
            { id: "d", text: "Minst 60 dB" }
        ],
        correctAnswer: "c",
        explanation: "Lagkravet är att oönskade utsändningar (övertoner) ska dämpas minst 40 dB under huvudsignalen. Detta motsvarar 0,01% av effekten.",
        difficulty: "medium"
    },
    {
        id: 123,
        chapterId: 6,
        question: "Vad är det största EMC-hotet mot amatörradio idag?",
        options: [
            { id: "a", text: "Åska och blixtar" },
            { id: "b", text: "Switchade nätaggregat (SMPS) i modern elektronik" },
            { id: "c", text: "Solstormar" },
            { id: "d", text: "Mobiltelefoner" }
        ],
        correctAnswer: "b",
        explanation: "Switchade nätaggregat (SMPS) finns i nästan all modern elektronik och ger kraftigt bredbandigt brus på HF-banden. Detta är det växande problemet för amatörradio.",
        difficulty: "hard"
    },
    {
        id: 124,
        chapterId: 6,
        question: "Hur beräknar du tredje ordningens intermodulation (IMD3)?",
        options: [
            { id: "a", text: "f₁ + f₂" },
            { id: "b", text: "2×f₁ - f₂ och 2×f₂ - f₁" },
            { id: "c", text: "f₁ - f₂" },
            { id: "d", text: "f₁ × f₂" }
        ],
                correctAnswer: "b",
explanation: "IMD3 beräknas som 2×f₁ - f₂ och 2×f₂ - f₁. Dessa 'spöksignaler' uppstår när två starka signaler blandas icke-linjärt i mottagaren.",
difficulty: "hard"
},
{
id: 125,
chapterId: 6,
question: "Vad visar huvudbrytartestet?",
options: [
{ id: "a", text: "Om huvudbrytaren fungerar" },
{ id: "b", text: "Om störkällan är i ditt hus eller externt" },
{ id: "c", text: "Spänningen i elnätet" },
{ id: "d", text: "Om radion fungerar" }
],
correctAnswer: "b",
explanation: "Huvudbrytartestet: Stäng av huvudbrytaren och lyssna med batteridrivet radio. Försvinner störningen? → Källan är i ditt hus. Kvarstår den? → Extern källa.",
difficulty: "medium"
},
{
id: 126,
chapterId: 6,
question: "Vilken ferrittyp (Mix) är bäst för HF-band?",
options: [
{ id: "a", text: "Mix 61 (VHF/UHF)" },
{ id: "b", text: "Mix 43 (1-50 MHz)" },
{ id: "c", text: "Mix 75 (MW)" },
{ id: "d", text: "Mix 10 (HF)" }
],
correctAnswer: "b",
explanation: "Mix 43 är bäst för HF-användning (1-50 MHz). Den fungerar bra över hela HF-området och är den mest populära för radioamatörer.",
difficulty: "hard"
},
{
id: 127,
chapterId: 6,
question: "Vad är korsmodulation?",
options: [
{ id: "a", text: "Korrekt modulering" },
{ id: "b", text: "När en stark AM-signal överför sin modulation till andra signaler" },
{ id: "c", text: "Digital modulation" },
{ id: "d", text: "FM-modulation" }
],
correctAnswer: "b",
explanation: "Korsmodulation uppstår när en mycket stark AM-signal (ofta MW-rundradio) driver mottagaren icke-linjärt så att modulationen 'överförs' till din önskade signal.",
difficulty: "hard"
},
{
id: 128,
chapterId: 6,
question: "Vilken är den bästa åtgärden mot korsmodulation från MW-rundradio?",
options: [
{ id: "a", text: "Lågpassfilter" },
{ id: "b", text: "Högpassfilter med 2-3 MHz cutoff före mottagaren" },
{ id: "c", text: "Bandpassfilter" },
{ id: "d", text: "Notch-filter" }
],
correctAnswer: "b",
explanation: "Ett högpassfilter med 2-3 MHz cutoff blockerar MW-rundradio (500-1600 kHz) men släpper igenom alla HF-amatörband, vilket eliminerar korsmodulationsproblemet.",
difficulty: "medium"
},
{
id: 129,
chapterId: 6,
question: "Hur mycket minskar fältstyrkan om du dubblar avståndet?",
options: [
{ id: "a", text: "Till hälften" },
{ id: "b", text: "Till en fjärdedel" },
{ id: "c", text: "Till en tiondel" },
{ id: "d", text: "Ingen förändring" }
],
correctAnswer: "b",
explanation: "Fältstyrkan minskar med 1/r² (kvadraten på avståndet). Dubbla avståndet ger en fjärdedel av fältstyrkan - en enkel och gratis åtgärd!",
difficulty: "medium"
},
{
id: 130,
chapterId: 6,
question: "Varför ska du testa EN åtgärd i taget vid felsökning?",
options: [
{ id: "a", text: "För att spara tid" },
{ id: "b", text: "För att veta exakt vad som hjälpte" },
{ id: "c", text: "För att det är lättare" },
{ id: "d", text: "För att det kostar mindre" }
],
correctAnswer: "b",
explanation: "Genom att testa EN åtgärd i taget och dokumentera resultatet vet du exakt vad som hjälpte. Annars vet du inte vilken av många åtgärder som faktiskt löste problemet.",
difficulty: "easy"
},

// ============================================
// KAPITEL 7: REGLER OCH BESTÄMMELSER (Uppdaterade frågor)
// ============================================
{
    id: 131,
    chapterId: 7,
    question: "Vilken myndighet utfärdar HAREC-certifikat och anropssignaler i Sverige?",
    options: [
        { id: "a", text: "SSA (Sveriges Sändareamatörer)" },
        { id: "b", text: "Post- och telestyrelsen (PTS)" },
        { id: "c", text: "IARU Region 1" },
        { id: "d", text: "CEPT" }
    ],
    correctAnswer: "b",
    explanation: "PTS (Post- och telestyrelsen) är den svenska myndighet som utfärdar HAREC-certifikat och tilldelar anropssignaler. SSA arrangerar proven på uppdrag av PTS.",
    difficulty: "easy"
},
{
    id: 132,
    chapterId: 7,
    question: "Hur är en svensk personlig anropssignal uppbyggd?",
    options: [
        { id: "a", text: "Prefix + områdessiffra + suffix (t.ex. SM5XYZ)" },
        { id: "b", text: "Bara bokstäver (t.ex. SWEDEN)" },
        { id: "c", text: "Siffror först (t.ex. 5SMXYZ)" },
        { id: "d", text: "Helt valfritt mönster" }
    ],
    correctAnswer: "a",
    explanation: "Svenska anropssignaler består av: Prefix (SM, SA, etc.) + områdessiffra (0-7) + suffix (2-3 bokstäver). Exempel: SM5XYZ där SM=Sverige, 5=Östergötland, XYZ=personlig del.",
    difficulty: "easy"
},
{
    id: 133,
    chapterId: 7,
    question: "Vad innebär CEPT T/R 61-02 för radioamatörer?",
    options: [
        { id: "a", text: "Krav på minsta effekt 100W" },
        { id: "b", text: "Rätt att trafikera i 48 europeiska länder utan separat tillstånd" },
        { id: "c", text: "Förbud mot trafik utomlands" },
        { id: "d", text: "Krav på återkommande certifikatprov" }
    ],
    correctAnswer: "b",
    explanation: "CEPT T/R 61-02 tillåter radioamatörer med HAREC-certifikat att trafikera i 48 CEPT-länder utan separat tillstånd, upp till 3 månader per besök. Man använder värdlandets prefix + sin egen signal (t.ex. DL/SM5XYZ i Tyskland).",
    difficulty: "medium"
},
{
    id: 134,
    chapterId: 7,
    question: "Hur ofta måste du identifiera din station med anropssignal?",
    options: [
        { id: "a", text: "Bara i början av QSO" },
        { id: "b", text: "Bara i slutet av QSO" },
        { id: "c", text: "Vid början, slut och minst var 10:e minut under pågående sändning" },
        { id: "d", text: "Aldrig, det är frivilligt" }
    ],
    correctAnswer: "c",
    explanation: "Enligt PTSFS ska du identifiera din station vid början och slut av varje sändning, samt minst var 10:e minut under pågående sändning. Detta gäller även vid test och tuning.",
    difficulty: "easy"
},
{
    id: 135,
    chapterId: 7,
    question: "Är krypterade meddelanden tillåtna på amatörradio?",
    options: [
        { id: "a", text: "Ja, obegränsat" },
        { id: "b", text: "Nej, all trafik ska vara öppen och avlyssningsbar" },
        { id: "c", text: "Ja, men endast för nödtrafik" },
        { id: "d", text: "Ja, men endast på HF-band" }
    ],
    correctAnswer: "b",
    explanation: "All amatörradiotrafik ska vara öppen och möjlig att avlyssna. Kryptering eller hemliga koder är förbjudna. Undantag: Q-koder och RST-rapporter är tillåtna då de är standardiserade och öppna.",
    difficulty: "easy"
},
{
    id: 136,
    chapterId: 7,
    question: "Vad är maximal tillåten effekt på de flesta amatörband med HAREC-certifikat?",
    options: [
        { id: "a", text: "100 W PEP" },
        { id: "b", text: "500 W PEP" },
        { id: "c", text: "1000 W (1 kW) PEP" },
        { id: "d", text: "Obegränsad" }
    ],
    correctAnswer: "c",
    explanation: "Maximal tillåten effekt är 1000W PEP på de flesta band. UNDANTAG: 60m = 15W EIRP, 6m = 200W PEP. PEP = Peak Envelope Power (toppeffekt vid modulationstoppar).",
    difficulty: "medium"
},
{
    id: 137,
    chapterId: 7,
    question: "Får du sälja varor eller göra reklam på amatörradio?",
    options: [
        { id: "a", text: "Ja, obegränsat" },
        { id: "b", text: "Ja, men endast radioutrustning" },
        { id: "c", text: "Nej, amatörradio är icke-kommersiell" },
        { id: "d", text: "Ja, men endast på VHF/UHF" }
    ],
    correctAnswer: "c",
    explanation: "Amatörradio är icke-kommersiell. Förbjudet: Reklam, försäljning med pris, affärsverksamhet. Du kan NÄMNA att du funderar på att sälja något och hänvisa till mail/telefon, men inte göra försäljningspitch på luften.",
    difficulty: "easy"
},
{
    id: 138,
    chapterId: 7,
    question: "Vad står ITU för och vad gör organisationen?",
    options: [
        { id: "a", text: "International Technology Union - sätter datornormer" },
        { id: "b", text: "International Telecommunication Union - FN-organ som fördelar radiofrekvenser globalt" },
        { id: "c", text: "Internet Technology Users - reglerar internet" },
        { id: "d", text: "Inget av ovanstående" }
    ],
    correctAnswer: "b",
    explanation: "ITU (International Telecommunication Union) är FN:s organ för telekommunikation. ITU fördelar radiofrekvenser mellan länder och tjänster, sätter tekniska standarder och tilldelar prefix (SM för Sverige, DL för Tyskland, etc.).",
    difficulty: "easy"
},
{
    id: 139,
    chapterId: 7,
    question: "Vad betyder primär respektive sekundär användning av frekvensband?",
    options: [
        { id: "a", text: "Första och andra valet av frekvens" },
        { id: "b", text: "Primära användare har förtur, sekundära måste ge vika och får inte störa" },
        { id: "c", text: "Dag- och nattfrekvenser" },
        { id: "d", text: "HF och VHF" }
    ],
    correctAnswer: "b",
    explanation: "Primära tjänster har företräde i ett band. Sekundära användare får inte störa primära och måste acceptera störningar från dem. Exempel: 60m-bandet är sekundär användning för amatörradio - därför låg effekt (15W EIRP).",
    difficulty: "medium"
},
{
    id: 140,
    chapterId: 7,
    question: "Är musik tillåten på amatörradio?",
    options: [
        { id: "a", text: "Ja, obegränsat" },
        { id: "b", text: "Ja, om copyright-fri" },
        { id: "c", text: "Nej, musik (inspelad eller live) är förbjuden" },
        { id: "d", text: "Ja, men endast klassisk musik" }
    ],
    correctAnswer: "c",
    explanation: "Musik (inspelad eller live) är förbjuden på amatörradio. Amatörradio är för tvåvägskommunikation, experiment och utbildning - inte broadcast eller underhållning. Du får inte spela från Spotify, sjunga eller spela instrument på luften.",
    difficulty: "easy"
},
{
    id: 141,
    chapterId: 7,
    question: "Vad betyder QRP inom amatörradio?",
    options: [
        { id: "a", text: "Krav på minst 100W effekt" },
        { id: "b", text: "Frivillig lågeffektstrafik (5W CW, 10W SSB på HF)" },
        { id: "c", text: "Endast digitala modes" },
        { id: "d", text: "Trafik på repeatrar" }
    ],
    correctAnswer: "b",
    explanation: "QRP betyder låg effekt (Q-kod: 'Ska jag minska effekten?'). Definition: Max 5W på CW, max 10W PEP på SSB (HF). QRP är frivilligt - en utmaning att jobba DX med minimal effekt. Visar skicklighet och respekt.",
    difficulty: "medium"
},
{
    id: 142,
    chapterId: 7,
    question: "Hur identifierar du dig när du trafikerar i Tyskland med svensk licens?",
    options: [
        { id: "a", text: "Bara SM5XYZ som vanligt" },
        { id: "b", text: "DL/SM5XYZ (värdlandets prefix före din signal)" },
        { id: "c", text: "Ny tysk anropssignal krävs" },
        { id: "d", text: "DE/SM5XYZ" }
    ],
    correctAnswer: "b",
    explanation: "Vid CEPT-trafik: Värdlandets prefix + / + din signal. Tyskland = DL/SM5XYZ. Norge = LA/SM5XYZ. Spanien = EA/SM5XYZ. Detta visar att du är gästoperatör från Sverige i värdlandet.",
    difficulty: "medium"
},
{
    id: 143,
    chapterId: 7,
    question: "Vad är en loggbok och är den obligatorisk i Sverige?",
    options: [
        { id: "a", text: "Obligatorisk för alla amatörer" },
        { id: "b", text: "Ej obligatorisk men starkt rekommenderad, nödvändig för diplom" },
        { id: "c", text: "Endast för tävlingar" },
        { id: "d", text: "Förbjuden" }
    ],
    correctAnswer: "b",
    explanation: "Loggbok är EJ obligatorisk för personlig trafik i Sverige, men starkt rekommenderad. Innehåll: Datum, tid (UTC), frekvens, band, mode, anropssignal, RST. Nödvändig för: diplom (DXCC), tävlingar, störningsklagomål.",
    difficulty: "easy"
},
{
    id: 144,
    chapterId: 7,
    question: "Vad är ett QSL-kort?",
    options: [
        { id: "a", text: "En digital bekräftelse via mail" },
        { id: "b", text: "Ett vykort som bekräftar en radiokontakt" },
        { id: "c", text: "En faktura för radiotjänster" },
        { id: "d", text: "Ett medlemskort i SSA" }
    ],
    correctAnswer: "b",
    explanation: "QSL-kort är ett vykort som bekräftar en radiokontakt. Innehåll: Datum, tid (UTC), frekvens, mode, RST, anropssignaler. Skickas: Direkt (post), via byrå (SSA), eller elektroniskt (eQSL/LoTW). Används för diplom och som samlarföremål.",
    difficulty: "easy"
},
{
    id: 145,
    chapterId: 7,
    question: "Vad är en repeater och varför används de?",
    options: [
        { id: "a", text: "En störsändare" },
        { id: "b", text: "Automatstation som förlänger räckvidden för handhållna radioapparater" },
        { id: "c", text: "En typ av antenn" },
        { id: "d", text: "En förstärkare" }
    ],
    correctAnswer: "b",
    explanation: "Repeater = automatstation som tar emot på en frekvens och sänder ut på en annan. Placeras högt (torn, berg) för att förlänga räckvidden. Exempel: 2m FM-repeater med shift -600 kHz kan ge 50-100 km täckning från en handhållen 5W-radio.",
    difficulty: "easy"
},
{
    id: 146,
    chapterId: 7,
    question: "Vilken är anropsfrekvensen för 2m SSB?",
    options: [
        { id: "a", text: "144.300 MHz" },
        { id: "b", text: "145.500 MHz" },
        { id: "c", text: "14.285 MHz" },
        { id: "d", text: "433.500 MHz" }
    ],
    correctAnswer: "a",
    explanation: "144.300 MHz är den internationella SSB-anropsfrekvensen på 2m-bandet. Här anropar du CQ, sedan flyttar ni till annan frekvens för QSO. 145.500 MHz är FM simplex-anropsfrekvens (inte SSB).",
    difficulty: "medium"
},
{
    id: 147,
    chapterId: 7,
    question: "Vad betyder 'shift' på en repeater?",
    options: [
        { id: "a", text: "Skillnaden mellan ingångs- och utgångsfrekvens" },
        { id: "b", text: "Tid på dygnet" },
        { id: "c", text: "Effekt" },
        { id: "d", text: "Antenntyp" }
    ],
    correctAnswer: "a",
    explanation: "Shift = frekvensskillnad mellan vad du sänder på (ingång) och vad repeatern sänder på (utgång). 2m: -600 kHz, 70cm: +1,6 MHz. Exempel: Repeater 145.700 med shift -600 → du sänder på 145.100, lyssnar på 145.700.",
    difficulty: "medium"
},
{
    id: 148,
    chapterId: 7,
    question: "Vad står HAREC för?",
    options: [
        { id: "a", text: "Ham Radio Education Certificate" },
        { id: "b", text: "Harmonised Amateur Radio Examination Certificate" },
        { id: "c", text: "High Amateur Radio Efficiency Class" },
        { id: "d", text: "Historical Amateur Radio Experiment Club" }
    ],
    correctAnswer: "b",
    explanation: "HAREC = Harmonised Amateur Radio Examination Certificate. Europeiskt gemensamt certifikat (CEPT T/R 61-01) som ger fulla rättigheter: alla band, 1000W PEP, trafik i 48 CEPT-länder, livstid.",
    difficulty: "medium"
},
{
    id: 149,
    chapterId: 7,
    question: "Vilken effekt får du använda på 60m-bandet (5 MHz)?",
    options: [
        { id: "a", text: "1000W PEP som vanligt" },
        { id: "b", text: "15W EIRP (inkl. antennvinst)" },
        { id: "c", text: "200W PEP" },
        { id: "d", text: "Obegränsad" }
    ],
    correctAnswer: "b",
    explanation: "60m-bandet har speciella regler: Max 15W EIRP (Effective Isotropic Radiated Power = inkl. antennvinst!), endast USB, sekundär användning. Du måste räkna: Sändareffekt - kabelförlust + antennvinst = EIRP ≤ 15W.",
    difficulty: "hard"
},
{
    id: 150,
    chapterId: 7,
    question: "Vad betyder /MM efter en anropssignal?",
    options: [
        { id: "a", text: "Mycket hög effekt" },
        { id: "b", text: "Maritime Mobile - trafikerar från fartyg på internationellt vatten" },
        { id: "c", text: "Mobil i bil" },
        { id: "d", text: "Mikrofon avstängd" }
    ],
    correctAnswer: "b",
    explanation: "/MM = Maritime Mobile (från fartyg på internationellt vatten). /M = Mobil (bil), /P = Portabel (fältstuga), /AM = Aeronautic Mobile (flygplan, mycket ovanligt). Exempel: SM5XYZ/MM när du seglar på Östersjön.",
    difficulty: "medium"
},

// ============================================
    // KAPITEL 8: TRAFIKMETODER OCH OPERATÖRSTEKNIK
    // ============================================
    // Behåller befintliga frågor 151-160 och lägger till 10 nya (161-170)
    
    {
        id: 151,
        chapterId: 8,
        question: "Vad betyder Q-koden 'QTH'?",
        options: [
            { id: "a", text: "Vilken tid är det?" },
            { id: "b", text: "Var befinner du dig?" },
            { id: "c", text: "Ska jag öka effekten?" },
            { id: "d", text: "Har du kontakt med...?" }
        ],
        correctAnswer: "b",
        explanation: "QTH = Position/plats. 'Mitt QTH är Stockholm' betyder 'Jag befinner mig i Stockholm'.",
        difficulty: "easy"
    },
    {
        id: 152,
        chapterId: 8,
        question: "Vad betyder 'CQ' i amatörradio?",
        options: [
            { id: "a", text: "Nödanrop" },
            { id: "b", text: "Allmänt anrop - söker kontakt med vem som helst" },
            { id: "c", text: "Tystnad på frekvensen" },
            { id: "d", text: "Slut på kontakten" }
        ],
        correctAnswer: "b",
        explanation: "CQ är ett allmänt anrop för att etablera kontakt med någon station.",
        difficulty: "easy"
    },
    {
        id: 153,
        chapterId: 8,
        question: "Vad står RST-systemet för?",
        options: [
            { id: "a", text: "Radio Signal Transmission" },
            { id: "b", text: "Readability, Strength, Tone" },
            { id: "c", text: "Receiver Sensitivity Test" },
            { id: "d", text: "Remote Station Transfer" }
        ],
        correctAnswer: "b",
        explanation: "RST = Readability (läsbarhet 1-5), Strength (signalstyrka 1-9), Tone (ton 1-9, för CW).",
        difficulty: "easy"
    },
    {
        id: 154,
        chapterId: 8,
        question: "Vad betyder 'QRZ'?",
        options: [
            { id: "a", text: "Ska jag öka effekten?" },
            { id: "b", text: "Vem anropar mig?" },
            { id: "c", text: "Var befinner du dig?" },
            { id: "d", text: "Vilken frekvens?" }
        ],
        correctAnswer: "b",
        explanation: "QRZ = 'Vem anropar mig?' Används när man hört ett anrop men inte uppfattat anropssignalen.",
        difficulty: "easy"
    },
    {
        id: 155,
        chapterId: 8,
        question: "Hur bokstaveras 'S' i det fonetiska alfabetet?",
        options: [
            { id: "a", text: "Sugar" },
            { id: "b", text: "Sierra" },
            { id: "c", text: "Samuel" },
            { id: "d", text: "Sigma" }
        ],
        correctAnswer: "b",
        explanation: "Enligt det internationella fonetiska alfabetet: S = Sierra.",
        difficulty: "easy"
    },
    {
        id: 156,
        chapterId: 8,
        question: "Vad är ett QSO?",
        options: [
            { id: "a", text: "En typ av antenn" },
            { id: "b", text: "En radiokontakt mellan två eller flera stationer" },
            { id: "c", text: "En effektenhet" },
            { id: "d", text: "En störning" }
        ],
        correctAnswer: "b",
        explanation: "QSO är en bekräftad tvåvägskontakt mellan radiostationer.",
        difficulty: "easy"
    },
    {
        id: 157,
        chapterId: 8,
        question: "Vad är den internationella nödfrekvensen på HF?",
        options: [
            { id: "a", text: "7,010 MHz" },
            { id: "b", text: "14,300 MHz" },
            { id: "c", text: "3,5 MHz" },
            { id: "d", text: "21,0 MHz" }
        ],
        correctAnswer: "b",
        explanation: "14,300 MHz är den internationella nödfrekvensen för amatörradio på 20m-bandet.",
        difficulty: "medium"
    },
    {
        id: 158,
        chapterId: 8,
        question: "Vad betyder 'MAYDAY' i radiosammanhang?",
        options: [
            { id: "a", text: "Godmorgon" },
            { id: "b", text: "Internationellt nödanrop vid livsfara" },
            { id: "c", text: "Testar radio" },
            { id: "d", text: "Slut på sändningen" }
        ],
        correctAnswer: "b",
        explanation: "MAYDAY är det internationella nödanropet vid omedelbar livsfara (från franskans 'm'aidez').",
        difficulty: "easy"
    },
    {
        id: 159,
        chapterId: 8,
        question: "Vad är en repeater (relä)?",
        options: [
            { id: "a", text: "En förstärkare i sändaren" },
            { id: "b", text: "En station som tar emot och återsänder signaler på annan frekvens" },
            { id: "c", text: "En typ av antenn" },
            { id: "d", text: "En digital kodare" }
        ],
        correctAnswer: "b",
        explanation: "En repeater tar emot på en frekvens och sänder ut samtidigt på en annan, vilket ökar räckvidden.",
        difficulty: "easy"
    },
    {
        id: 160,
        chapterId: 8,
        question: "Vad betyder '73' i amatörradio?",
        options: [
            { id: "a", text: "Nödanrop" },
            { id: "b", text: "Bästa hälsningar" },
            { id: "c", text: "Kom igen" },
            { id: "d", text: "Jag förstår" }
        ],
        correctAnswer: "b",
        explanation: "'73' är amatörkod för 'bästa hälsningar' och används ofta i slutet av ett QSO.",
        difficulty: "easy"
    },
    
    // NYA FRÅGOR 161-170
    {
        id: 161,
        chapterId: 8,
        question: "Vilken anropssignal används på 2m simplex-anropsfrekvensen i Sverige?",
        options: [
            { id: "a", text: "144,800 MHz" },
            { id: "b", text: "145,500 MHz" },
            { id: "c", text: "145,000 MHz" },
            { id: "d", text: "146,000 MHz" }
        ],
        correctAnswer: "b",
        explanation: "145,500 MHz är den europeiska simplex-anropsfrekvensen på 2m-bandet. Här anropar man och sedan QSY (flyttar) till annan frekvens för QSO.",
        difficulty: "medium"
    },
    {
        id: 162,
        chapterId: 8,
        question: "Vad betyder 'QRM'?",
        options: [
            { id: "a", text: "Atmosfäriska störningar (åska)" },
            { id: "b", text: "Störningar från andra stationer" },
            { id: "c", text: "Svag signal" },
            { id: "d", text: "Hög effekt" }
        ],
        correctAnswer: "b",
        explanation: "QRM = störningar från andra stationer (man-made interference). QRN = atmosfäriska störningar (åska, brus).",
        difficulty: "easy"
    },
    {
        id: 163,
        chapterId: 8,
        question: "På HF-banden, när används LSB (Lower Sideband)?",
        options: [
            { id: "a", text: "Alltid på alla HF-band" },
            { id: "b", text: "På band under 10 MHz (160m, 80m, 40m)" },
            { id: "c", text: "Endast på 20m-bandet" },
            { id: "d", text: "Aldrig - USB används alltid" }
        ],
        correctAnswer: "b",
        explanation: "Tradition: LSB används under 10 MHz (160m, 80m, 40m-banden). USB används på 10 MHz och högre (20m, 15m, 10m). Minnesregel: 'Över tio, övre (USB)'.",
        difficulty: "medium"
    },
    {
        id: 164,
        chapterId: 8,
        question: "Vad betyder RST-rapporten '59' på foni (SSB)?",
        options: [
            { id: "a", text: "Läsbarhet 5, Styrka 9, Ton 9" },
            { id: "b", text: "Läsbarhet 5 (perfekt), Styrka 9 (mycket stark)" },
            { id: "c", text: "Läsbarhet 5, Ton 9" },
            { id: "d", text: "59 procent signal" }
        ],
        correctAnswer: "b",
        explanation: "På foni används bara RS (två siffror). R=5 (perfekt läsbar), S=9 (mycket stark signal). På CW används RST (tre siffror) där T=ton.",
        difficulty: "medium"
    },
    {
        id: 165,
        chapterId: 8,
        question: "Vad ska du FÖRST göra innan du börjar sända på en ny frekvens?",
        options: [
            { id: "a", text: "Börja sända direkt" },
            { id: "b", text: "Lyssna minst 30 sekunder och fråga om frekvensen är ledig" },
            { id: "c", text: "Kalla CQ omedelbart" },
            { id: "d", text: "Identifiera dig med anropssignal" }
        ],
        correctAnswer: "b",
        explanation: "ALLTID lyssna först (minst 30 sek), sedan fråga 'QRL?' eller 'Is this frequency in use?' och vänta på svar. Detta förhindrar att du stör pågående kontakter.",
        difficulty: "easy"
    },
    {
        id: 166,
        chapterId: 8,
        question: "Vad är standard shift på 2m-bandet för repeatrar?",
        options: [
            { id: "a", text: "±1,6 MHz" },
            { id: "b", text: "±600 kHz" },
            { id: "c", text: "±7,6 MHz" },
            { id: "d", text: "Ingen shift" }
        ],
        correctAnswer: "b",
        explanation: "2m-band: ±600 kHz (0,6 MHz). 70cm-band: ±1,6 MHz eller ±7,6 MHz. Exempel: Repeater 145,700 med -600 kHz shift → du sänder 145,100, lyssnar 145,700.",
        difficulty: "medium"
    },
    {
        id: 167,
        chapterId: 8,
        question: "Vilket digitalt trafiksätt är mest populärt för svaga signaler och DX?",
        options: [
            { id: "a", text: "RTTY" },
            { id: "b", text: "PSK31" },
            { id: "c", text: "FT8" },
            { id: "d", text: "Packet radio" }
        ],
        correctAnswer: "c",
        explanation: "FT8 är extremt populärt sedan 2017. Fungerar ner till -24 dB under brusnivån! Automatiserad drift, 15-sekunders perioder, perfekt för liten antenn/låg effekt.",
        difficulty: "medium"
    },
    {
        id: 168,
        chapterId: 8,
        question: "Vad betyder 'PAN PAN' i nödtrafik?",
        options: [
            { id: "a", text: "Omedelbar livsfara (samma som MAYDAY)" },
            { id: "b", text: "Ilmeddelande - brådskande men inte omedelbar livsfara" },
            { id: "c", text: "Säkerhetsinformation" },
            { id: "d", text: "Test av nödsignal" }
        ],
        correctAnswer: "b",
        explanation: "PAN PAN = ilmeddelande (brådskande men inte akut livsfara). MAYDAY = omedelbar livsfara. SECURITÉ = säkerhetsinformation. Prioritet: MAYDAY > PAN PAN > SECURITÉ.",
        difficulty: "medium"
    },
    {
        id: 169,
        chapterId: 8,
        question: "Hur bokstaveras siffran '9' fonetiskt?",
        options: [
            { id: "a", text: "Nain" },
            { id: "b", text: "Nine" },
            { id: "c", text: "Niner (NAJ-NER)" },
            { id: "d", text: "Novem" }
        ],
        correctAnswer: "c",
        explanation: "9 = 'Niner' (NAJ-NER), INTE 'nain'! Detta för att undvika förväxling med 5 (FAJF). Alla siffror uttalas med engelsk betoning även på svenska.",
        difficulty: "easy"
    },
    {
        id: 170,
        chapterId: 8,
        question: "Vid verklig nödsituation, vilka frekvenser och effekter får du använda?",
        options: [
            { id: "a", text: "Endast licensierade frekvenser och din tillåtna effekt" },
            { id: "b", text: "ALLA frekvenser och ALL effekt där du har bäst chans att bli hörd" },
            { id: "c", text: "Endast nödfrekvenser" },
            { id: "d", text: "Ingen ändring - normala regler gäller alltid" }
        ],
        correctAnswer: "b",
        explanation: "Vid verklig nöd: ALLA frekvenser OK, ALL effekt OK, alla trafiksätt OK! Liv går före regler. Dokumentera och förklara efteråt. Nödtrafik har ALLTID absolut prioritet.",
        difficulty: "medium"
    },
    
    // ============================================
    // KAPITEL 9: ELSÄKERHET
    // ============================================
    {
        id: 171,
        chapterId: 9,
        question: "Vid vilken strömstyrka anses elektrisk ström bli farlig för människor?",
        options: [
            { id: "a", text: "Över 1 A" },
            { id: "b", text: "Redan vid några milliampere" },
            { id: "c", text: "Över 10 A" },
            { id: "d", text: "Ström är aldrig farlig" }
        ],
        correctAnswer: "b",
        explanation: "Strömmar från ca 10 mA kan ge muskelkramper, 30-50 mA kan vara livshotande. Spänning och väg genom kroppen spelar också roll.",
        difficulty: "easy"
    },
    {
        id: 172,
        chapterId: 9,
        question: "Varför är det viktigt med skyddsjord?",
        options: [
            { id: "a", text: "För bättre antennprestanda" },
            { id: "b", text: "För att leda bort felströmmar och förhindra elchock" },
            { id: "c", text: "För lägre SWR" },
            { id: "d", text: "För bättre ljudkvalitet" }
        ],
        correctAnswer: "b",
        explanation: "Skyddsjord säkerställer att felströmmar leds bort säkert och att säkringen löser ut vid fel.",
        difficulty: "easy"
    },
    {
        id: 173,
        chapterId: 9,
        question: "Vad ska man göra först om någon får en elektrisk stöt?",
        options: [
            { id: "a", text: "Ringa ambulans direkt" },
            { id: "b", text: "Bryta strömmen om möjligt" },
            { id: "c", text: "Ge hjärt-lungräddning" },
            { id: "d", text: "Kyla ned personen" }
        ],
        correctAnswer: "b",
        explanation: "Första åtgärden är att bryta strömmen för att avbryta fortsatt skada. Sedan tillkalla hjälp och ge första hjälpen.",
        difficulty: "easy"
    },
    {
        id: 174,
        chapterId: 9,
        question: "Var finns högspänning i en typisk HF-transceiver?",
        options: [
            { id: "a", text: "Ingenstans" },
            { id: "b", text: "I nätaggregat och möjligen i slutsteget" },
            { id: "c", text: "Endast i antennen" },
            { id: "d", text: "Endast i mikrofonen" }
        ],
        correctAnswer: "b",
        explanation: "Nätaggregatet innehåller livsfarliga spänningar. Rörslutsteg kan ha flera kilovolt. Öppna aldrig utrustning utan kunskap!",
        difficulty: "medium"
    },
    {
        id: 175,
        chapterId: 9,
        question: "Vad är SAR-värde?",
        options: [
            { id: "a", text: "Signal-to-Antenna Ratio" },
            { id: "b", text: "Specific Absorption Rate - mått på RF-absorption i kroppen" },
            { id: "c", text: "Static Antenna Resistance" },
            { id: "d", text: "Signal Amplitude Range" }
        ],
        correctAnswer: "b",
        explanation: "SAR (Specific Absorption Rate) mäter hur mycket RF-energi som absorberas i kroppsvävnad, uttryckt i W/kg.",
        difficulty: "medium"
    },
    {
        id: 176,
        chapterId: 9,
        question: "Hur skyddar man sig bäst mot åskskador på radioutrustning?",
        options: [
            { id: "a", text: "Stänga av radion" },
            { id: "b", text: "Koppla bort antenner och nätanslutning vid åskväder" },
            { id: "c", text: "Använda högre effekt" },
            { id: "d", text: "Sända kontinuerligt" }
        ],
        correctAnswer: "b",
        explanation: "Det säkraste är att fysiskt koppla bort antenner och nätanslutning. Åsköverspänningar kan förstöra utrustning även om den är avstängd.",
        difficulty: "easy"
    },
    {
        id: 177,
        chapterId: 9,
        question: "Vad är en säker avstånd från en HF-antenn vid sändning med hög effekt?",
        options: [
            { id: "a", text: "Man kan röra antennen" },
            { id: "b", text: "Minst några meter, beroende på effekt och frekvens" },
            { id: "c", text: "Endast 10 cm" },
            { id: "d", text: "Avstånd spelar ingen roll" }
        ],
        correctAnswer: "b",
        explanation: "RF-fält nära antennen kan vara starka. Säkerhetsavståndet beror på effekt, frekvens och antenntyp.",
        difficulty: "medium"
    },
    {
        id: 178,
        chapterId: 9,
        question: "Varför är kondensatorer farliga även efter att strömmen stängts av?",
        options: [
            { id: "a", text: "De är inte farliga" },
            { id: "b", text: "De kan behålla laddning och avge farlig stöt" },
            { id: "c", text: "De blir heta" },
            { id: "d", text: "De avger strålning" }
        ],
        correctAnswer: "b",
        explanation: "Stora kondensatorer, särskilt i nätaggregat, kan behålla livsfarlig laddning länge efter att strömmen brutits.",
        difficulty: "medium"
    },
    {
        id: 179,
        chapterId: 9,
        question: "Vad är syftet med en jordfelsbrytare?",
        options: [
            { id: "a", text: "Att bryta strömmen vid överbelastning" },
            { id: "b", text: "Att snabbt bryta strömmen om den läcker till jord" },
            { id: "c", text: "Att stabilisera spänningen" },
            { id: "d", text: "Att minska elförbrukningen" }
        ],
        correctAnswer: "b",
        explanation: "En jordfelsbrytare detekterar om ström läcker (t.ex. genom en människa) och bryter inom millisekunder.",
        difficulty: "easy"
    },
    {
        id: 180,
        chapterId: 9,
        question: "Vad bör man tänka på vid arbete på tak eller master för antenninstallation?",
        options: [
            { id: "a", text: "Inget speciellt" },
            { id: "b", text: "Fallskydd, avstånd till kraftledningar, väderförhållanden" },
            { id: "c", text: "Endast väder" },
            { id: "d", text: "Endast effekten på radion" }
        ],
        correctAnswer: "b",
        explanation: "Arbete på höjd kräver fallskydd, medvetenhet om kraftledningar, bra väder och helst en medhjälpare.",
        difficulty: "easy"
    },

    // ============================================
    // KAPITEL 10: PRAKTISK RADIOTRAFIK
    // ============================================
    {
        id: 191,
        chapterId: 10,
        question: "Vilket band är bäst för lokala kontakter (inom ca 50 km)?",
        options: [
            { id: "a", text: "80m (3,5 MHz)" },
            { id: "b", text: "20m (14 MHz)" },
            { id: "c", text: "2m (144 MHz)" },
            { id: "d", text: "10m (28 MHz)" }
        ],
        correctAnswer: "c",
        explanation: "2m-bandet (VHF) är utmärkt för lokal trafik, direktkontakt eller via repeatrar inom regionen.",
        difficulty: "easy"
    },
    {
        id: 192,
        chapterId: 10,
        question: "Vad är en lämplig första radio för en nybörjare?",
        options: [
            { id: "a", text: "En 1 kW HF-station" },
            { id: "b", text: "En enkel VHF/UHF handhållen eller mobil radio" },
            { id: "c", text: "Endast en SDR-mottagare" },
            { id: "d", text: "En 70 cm repeater" }
        ],
        correctAnswer: "b",
        explanation: "En VHF/UHF-radio är prisvärd, enkel att använda och ger direkt tillgång till lokala repeatrar och aktivitet.",
        difficulty: "easy"
    },
    {
        id: 193,
        chapterId: 10,
        question: "Vad är CTCSS (subtoner) vid repeatertrafik?",
        options: [
            { id: "a", text: "En digital kodning" },
            { id: "b", text: "Låga toner som öppnar repeaterns squelch" },
            { id: "c", text: "En typ av modulation" },
            { id: "d", text: "En störning" }
        ],
        correctAnswer: "b",
        explanation: "CTCSS (Continuous Tone-Coded Squelch System) är subtoner som krävs för att aktivera vissa repeatrar.",
        difficulty: "medium"
    },
    {
        id: 194,
        chapterId: 10,
        question: "Vad är FT8?",
        options: [
            { id: "a", text: "En antenntyp" },
            { id: "b", text: "Ett digitalt trafiksätt för svaga signaler" },
            { id: "c", text: "Ett frekvensBand" },
            { id: "d", text: "En effektenhet" }
        ],
        correctAnswer: "b",
        explanation: "FT8 är ett populärt digitalt trafiksätt designat för svaga signaler, utvecklat av K1JT (Joe Taylor).",
        difficulty: "easy"
    },
    {
        id: 195,
        chapterId: 10,
        question: "Vad är ett QSL-kort?",
        options: [
            { id: "a", text: "Ett identitetskort för amatörer" },
            { id: "b", text: "Ett kort som bekräftar en genomförd radiokontakt" },
            { id: "c", text: "Ett medlemskort" },
            { id: "d", text: "Ett licenskort" }
        ],
        correctAnswer: "b",
        explanation: "QSL-kort skickas mellan amatörer för att bekräfta QSO:n. Samlas ofta och krävs för diplom.",
        difficulty: "easy"
    },
    {
        id: 196,
        chapterId: 10,
        question: "Vad är DXCC?",
        options: [
            { id: "a", text: "En typ av antenn" },
            { id: "b", text: "Ett diplom för kontakt med 100+ länder" },
            { id: "c", text: "En modulationstyp" },
            { id: "d", text: "En effektbegränsning" }
        ],
        correctAnswer: "b",
        explanation: "DXCC (DX Century Club) är ett prestigefyllt diplom som kräver bekräftade kontakter med minst 100 DXCC-entiteter.",
        difficulty: "medium"
    },
    {
        id: 197,
        chapterId: 10,
        question: "Vad är APRS?",
        options: [
            { id: "a", text: "Amateur Power Rating System" },
            { id: "b", text: "Automatic Packet Reporting System" },
            { id: "c", text: "Advanced Phone Radio Service" },
            { id: "d", text: "Antenna Propagation Research System" }
        ],
        correctAnswer: "b",
        explanation: "APRS är ett digitalt system för att dela position, väder och meddelanden via amatörradio.",
        difficulty: "medium"
    },
    {
        id: 198,
        chapterId: 10,
        question: "Vilket band är populärast för DX (långdistans) på HF?",
        options: [
            { id: "a", text: "80m" },
            { id: "b", text: "20m" },
            { id: "c", text: "2m" },
            { id: "d", text: "70cm" }
        ],
        correctAnswer: "b",
        explanation: "20m-bandet (14 MHz) är det mest populära DX-bandet, ofta öppet dygnet runt till någon del av världen.",
        difficulty: "easy"
    },
    {
        id: 199,
        chapterId: 10,
        question: "Vad innebär portabel radiotrafik (/P)?",
        options: [
            { id: "a", text: "Trafik från en båt" },
            { id: "b", text: "Tillfällig trafik från annan plats än hemstationen" },
            { id: "c", text: "Trafik med låg effekt" },
            { id: "d", text: "Digital trafik" }
        ],
        correctAnswer: "b",
        explanation: "Portabel (/P) innebär att man sänder från en tillfällig plats. Signaleras med '/P' efter anropssignalen.",
        difficulty: "easy"
    },
    {
        id: 200,
        chapterId: 10,
        question: "Vad är SOTA?",
        options: [
            { id: "a", text: "Summits On The Air - diplomprogram för bergsaktivering" },
            { id: "b", text: "System Of Transmission Analysis" },
            { id: "c", text: "Swedish Organization for Technical Amateurs" },
            { id: "d", text: "Signal Optimization Through Antennas" }
        ],
        correctAnswer: "a",
        explanation: "SOTA (Summits On The Air) är ett populärt diplom- och aktivitetsprogram för portabel radiotrafik från bergstoppar.",
        difficulty: "medium"
    }
];

// Hjälpfunktioner för frågehantering
function getQuestionsByChapter(chapterId) {
    return QUESTIONS.filter(q => q.chapterId === chapterId);
}

function getRandomQuestions(count, chapterIds = null) {
    let pool = chapterIds 
        ? QUESTIONS.filter(q => chapterIds.includes(q.chapterId))
        : [...QUESTIONS];
    
    // Blanda frågorna
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    
    return pool.slice(0, count);
}

function getQuestionById(id) {
    return QUESTIONS.find(q => q.id === id);
}

// Hämta frågor för ett simulerat prov (60 frågor, viktade per kapitel)
function getExamQuestions() {
    const questionsPerChapter = {
        1: 8,   // Elektronik
        2: 8,   // Radioteknik
        3: 6,   // Antenner
        4: 5,   // Vågutbredning
        5: 5,   // Mätinstrument
        6: 5,   // Störningar
        7: 8,   // Regler
        8: 6,   // Trafikmetoder
        9: 5,   // Säkerhet
        10: 4   // Praktisk trafik
    };
    
    let examQuestions = [];
    
    for (const [chapterId, count] of Object.entries(questionsPerChapter)) {
        const chapterQuestions = getRandomQuestions(count, [parseInt(chapterId)]);
        examQuestions = examQuestions.concat(chapterQuestions);
    }
    
    // Blanda alla frågor
    for (let i = examQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [examQuestions[i], examQuestions[j]] = [examQuestions[j], examQuestions[i]];
    }
    
    return examQuestions;
}

// Exportera för ES6 modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        QUESTIONS, 
        getQuestionsByChapter, 
        getRandomQuestions, 
        getQuestionById,
        getExamQuestions 
    };
}
