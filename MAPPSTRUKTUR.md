# Radioskola.se – Mappstruktur

Senast uppdaterad: 2026-02-01

## Översikt


radioamator-utbildning/
│
├── index.html                      # Startsida med statistik och kapitelöversikt
├── introduktion.html               # Startsida för förberedande kapitel
├── MAPPSTRUKTUR.md                 # Denna fil
│
├── css/
│   └── style.css                   # Huvudstilmall (inkl. intro-kapitel)
│
├── js/
│   ├── main.js                     # Huvudlogik, navigation, dynamiskt innehåll
│   ├── quiz.js                     # Testlogik för prov och övningar
│   ├── exercises.js                # Logik för intro-kapitlens övningar
│   ├── progress.js                 # Statistik & framstegshantering (localStorage)
│   │
│   └── data/
│       ├── chapters.js             # Data för utbildningskapitel 1-10
│       ├── questions.js            # Alla provfrågor för kapitel 1-10
│       └── intro-chapters.js       # Data för introduktionskapitel 1-6
│
├── pages/
│   │
│   ├── introduktion/               # FÖRBEREDANDE KAPITEL (ny sektion)
│   │   ├── intro-1-vad-ar-radio.html
│   │   ├── intro-2-radiohistoria.html
│   │   ├── intro-3-nar-radio-raddade-liv.html
│   │   ├── intro-4-matematik-fysik.html
│   │   ├── intro-5-frekvensbanden.html
│   │   └── intro-6-vad-gor-radioamatorer.html
│   │
│   ├── chapters/                   # UTBILDNINGSKAPITEL (certifikatsinnehåll)
│   │   ├── kapitel-1-grundlaggande-elektronik.html
│   │   ├── kapitel-2-radioteknik.html
│   │   ├── kapitel-3-antenner.html
│   │   ├── kapitel-4-vagutbredning.html
│   │   ├── kapitel-5-matinstrument.html
│   │   ├── kapitel-6-storningar.html
│   │   ├── kapitel-7-regler-bestammelser.html
│   │   ├── kapitel-8-trafikmetoder.html
│   │   ├── kapitel-9-sakerhet.html
│   │   └── kapitel-10-praktisk-trafik.html
│   │
│   ├── test/                       # PROV OCH ÖVNINGAR
│   │   ├── prov.html               # Simulerat certifikatsprov (60 frågor, 90 min)
│   │   ├── ovning.html             # Övningsläge per kapitel
│   │   └── resultat.html           # Detaljerad resultatvisning
│   │
│   └── profil/
│       └── statistik.html          # Personlig statistik & framsteg
│
└── assets/
├── images/
│   ├── diagrams/               # Kretsscheman, blockscheman, antennbilder
│   └── icons/                  # Ikoner och grafik
│
└── audio/
└── morse/                  # Morsekod-övningar (valfritt)


## Sidstruktur

### Introduktionskapitel (förberedande)
Syftet är att ge grundläggande förståelse INNAN man börjar med certifikatsmaterialet.
Målgrupp: Nybörjare, unga (10-15 år), de som känner sig osäkra på matte/teknik.

| # | Fil | Innehåll |
|---|-----|----------|
| 1 | intro-1-vad-ar-radio.html | Vad radiovågor är, sändare/mottagare, radio i vardagen |
| 2 | intro-2-radiohistoria.html | Hertz, Marconi, Titanic, radioamatörernas bidrag |
| 3 | intro-3-nar-radio-raddade-liv.html | Titanic, tsunamin 2004, orkaner, FRO i Sverige |
| 4 | intro-4-matematik-fysik.html | Prefix, enheter, Ohms lag, effekt, decibel |
| 5 | intro-5-frekvensbanden.html | Spektrumet, HF/VHF/UHF, amatörband, regler |
| 6 | intro-6-vad-gor-radioamatorer.html | DX, contest, bygga, satelliter, nödkom, digital |

### Utbildningskapitel (certifikatsinnehåll)
Det faktiska materialet som krävs för att klara certifikatsprovet.

| # | Fil | Ämne |
|---|-----|------|
| 1 | kapitel-1-grundlaggande-elektronik.html | Ström, spänning, resistans, komponenter |
| 2 | kapitel-2-radioteknik.html | Oscillatorer, modulering, mottagare, sändare |
| 3 | kapitel-3-antenner.html | Antenntyper, matning, SWR |
| 4 | kapitel-4-vagutbredning.html | Jonosfär, markvåg, rymdvåg, fading |
| 5 | kapitel-5-matinstrument.html | Multimeter, oscilloskop, SWR-mätare |
| 6 | kapitel-6-storningar.html | EMC, TVI, störningstyper, filter |
| 7 | kapitel-7-regler-bestammelser.html | Lag, PTS, ITU, bandplaner |
| 8 | kapitel-8-trafikmetoder.html | Anropssignaler, Q-koder, bokstaveringsalfabet |
| 9 | kapitel-9-sakerhet.html | Elsäkerhet, RF-strålning, blixtnedslag |
| 10 | kapitel-10-praktisk-trafik.html | QSO, contest, DX, repeatrar |

## JavaScript-filer

| Fil | Syfte |
|-----|-------|
| main.js | Navigation, kapitelrendering, mobilmeny |
| quiz.js | Frågelogik, timer, resultatberäkning |
| exercises.js | Övningstyper för intro-kapitlen (fyll i, para ihop, etc.) |
| progress.js | Spara/läsa framsteg i localStorage |
| chapters.js | Array med kapiteldata (titel, ikon, ämnen) |
| questions.js | Array med alla provfrågor |
| intro-chapters.js | Array med intro-kapitel och deras övningar |

## Flöde för användaren

    ┌─────────────────┐
    │   index.html    │
    │   (startsida)   │
    └────────┬────────┘
             │
        ┌────┴────┐
        ▼         ▼
    ┌────────┐ ┌──────────────┐
    │Intro-  │ │Utbildnings-  │
    │duktion │ │kapitel 1-10  │
    └───┬────┘ └──────┬───────┘
        │             │
        ▼             ▼
    ┌────────┐ ┌──────────────┐
    │Kapitel │ │  Provträning │
    │ 1-6    │ │  & Övningar  │
    └───┬────┘ └──────┬───────┘
        │             │
        └──────┬──────┘
               ▼
        ┌──────────────┐
        │  Statistik   │
        └──────────────┘
