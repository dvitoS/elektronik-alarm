export const site = {
  name: "Elektronik Alarm",
  phone: "01 3821 333",
  phoneHref: "tel:+38513821333",
  email: "elektronik.alarmzg@gmail.com",
  emailHref: "mailto:elektronik.alarmzg@gmail.com",
  addressLines: ["Nova cesta 73", "10 000 Zagreb", "Hrvatska"],
  hoursShort: "09:00 do 17:00",
  hours: [
    { label: "Pon – Pet", value: "09:00 – 17:00" },
    { label: "Sub", value: "09:00 – 13:00" },
    { label: "Ned", value: "Zatvoreno" },
  ],
  hoursFooter: "Pon - Pet: 09:00 - 17:00\nSub: 09:00 - 13:00\nNed: Zatvoreno",
} as const;

export const nav = [
  { href: "/", label: "Početna" },
  { href: "/usluge", label: "Usluge" },
  { href: "/galerija", label: "Galerija" },
  { href: "/o-nama", label: "O nama" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

/** Featured services on home (live home copy; “Audio sustavi” spelling from Usluge page / brief). */
export const featuredServices = [
  {
    title: "Parking senzori",
    description:
      "Ugrađujemo i servisiramo parking senzore koji omogućuju sigurnije i jednostavnije parkiranje uz pouzdano upozorenje na prepreke.",
  },
  {
    title: "Audio sustavi",
    description:
      "Nudimo ugradnju, nadogradnju i popravak audio sustava kako biste uživali u vrhunskom zvuku tijekom svake vožnje.",
  },
  {
    title: "Centralno zaključavanje",
    description:
      "Servisiramo, ugrađujemo i popravljamo sustave centralnog zaključavanja te otklanjamo kvarove na bravama i daljinskim upravljačima.",
  },
  {
    title: "ECU",
    description:
      "Dijagnosticiramo i popravljamo upravljačke jedinice motora (ECU), otklanjamo elektroničke kvarove te vršimo programiranje i prilagodbu.",
  },
  {
    title: "Podizači stakala",
    description:
      "Popravljamo električne podizače stakala, motore, prekidače i mehanizme te ugrađujemo nove komponente kada je to potrebno.",
  },
  {
    title: "Multimedija",
    description:
      "Ugrađujemo moderne multimedijske sustave s navigacijom, Bluetooth povezivanjem, Apple CarPlay i Android Auto podrškom.",
  },
] as const;

/** Full Usluge page list from live site. */
export const allServices = [
  {
    title: "Popravak instrument table",
    description:
      "Otklanjamo kvarove na instrument pločama, uključujući probleme s prikazom, kazaljkama, pozadinskim osvjetljenjem i elektronikom instrument table.",
  },
  {
    title: "Parking senzori",
    description:
      "Ugrađujemo i servisiramo parking senzore koji omogućuju sigurnije i jednostavnije parkiranje uz pouzdano upozorenje na prepreke.",
  },
  {
    title: "Audio sustavi",
    description:
      "Nudimo ugradnju, nadogradnju i popravak audio sustava kako biste uživali u vrhunskom zvuku tijekom svake vožnje.",
  },
  {
    title: "Centralno zaključavanje",
    description:
      "Servisiramo i ugrađujemo sustave centralnog zaključavanja te otklanjamo kvarove na bravama, upravljačkim jedinicama i daljinskim upravljačima.",
  },
  {
    title: "Podizači stakla",
    description:
      "Popravljamo električne podizače stakala, motore, prekidače i mehanizme te ugrađujemo nove komponente kada je to potrebno.",
  },
  {
    title: "Multimedija",
    description:
      "Ugrađujemo moderne multimedijske sustave s navigacijom, Bluetooth povezivanjem, Apple CarPlay i Android Auto podrškom, prilagođene vašem vozilu.",
  },
  {
    title: "Auto centralna jedinica (ECU)",
    description:
      "Dijagnosticiramo i popravljamo upravljačke jedinice motora (ECU), otklanjamo elektroničke kvarove te vršimo programiranje i prilagodbu prema specifikacijama vozila.",
  },
  {
    title: "Imobilizator (ECU)",
    description:
      "Rješavamo probleme s imobilizatorom, programiranjem ključeva, sinkronizacijom upravljačkih jedinica i pokretanjem vozila.",
  },
  {
    title: "Airbag sustavi",
    description:
      "Obavljamo dijagnostiku, popravak i resetiranje airbag sustava nakon kvara ili nezgode te osiguravamo ispravan rad sigurnosnih komponenti.",
  },
  {
    title: "Dijagnostika",
    description:
      "Pomoću profesionalne dijagnostičke opreme brzo i precizno pronalazimo uzrok kvara na elektroničkim sustavima vozila.",
  },
  {
    title: "Dekodiranje autoradija",
    description:
      "Vršimo dekodiranje i ponovno aktiviranje tvorničkih autoradija nakon prekida napajanja ili zamjene akumulatora.",
  },
  {
    title: "Dashboard kamera",
    description:
      "Ugrađujemo dashboard kamere za snimanje vožnje te osiguravamo profesionalnu i diskretnu instalaciju.",
  },
  {
    title: "Popravak instalacija",
    description:
      "Otkrivamo i popravljamo kvarove na električnim instalacijama vozila, uključujući oštećene vodove, spojeve i konektore.",
  },
  {
    title: "Prilagodba zamjenskih dijelova",
    description:
      "Programiramo i prilagođavamo zamjenske elektroničke komponente kako bi bile potpuno kompatibilne s vašim vozilom.",
  },
] as const;

export const homeAbout =
  "Elektronik Alarm specijaliziran je za dijagnostiku, popravak i ugradnju elektroničkih sustava u osobnim i gospodarskim vozilima. Dugogodišnje iskustvo, suvremena dijagnostička oprema i stručan pristup omogućuju nam brzo otkrivanje kvarova te kvalitetnu i pouzdanu izvedbu svih zahvata.";

export const aboutSections = [
  {
    title: "Tradicija",
    body: "Elektronik Alarm uspješno posluje od 1990. godine te je danas prepoznat kao specijalizirani centar za dijagnostiku, servis i napredna elektronička rješenja za osobna i gospodarska vozila.",
  },
  {
    title: "Iskustvo",
    body: "Prateći najnovije tehnologije i standarde automobilske industrije, svojim klijentima pružamo pouzdana i profesionalna rješenja koja povećavaju sigurnost, funkcionalnost i vrijednost vozila. Dugogodišnje iskustvo, kontinuirano usavršavanje i individualan pristup svakom vozilu omogućili su nam da postanemo pouzdan partner privatnim i poslovnim korisnicima.",
  },
  {
    title: "Povjerenje",
    body: "Bez obzira radi li se o dijagnostici složenog elektroničkog kvara, popravku upravljačkih jedinica ili stručnom savjetovanju vezanom uz elektroničke sustave vozila, tim Elektronik Alarma stoji vam na raspolaganju s provjerenim znanjem, suvremenom opremom i profesionalnom podrškom.",
  },
] as const;

/** Before/after pairs from live Galerija (Noo Before After). Titles from asset names — live WP headings do not match these images. */
export const galleryPairs = [
  {
    title: "Audi daljinski upravljač",
    before: "/gallery/audi-before.jpg",
    after: "/gallery/audi-after.jpg",
  },
  {
    title: "Philips xenon",
    before: "/gallery/xenon-before.jpg",
    after: "/gallery/xenon-after.jpg",
  },
  {
    title: "Parkirna kamera",
    before: "/gallery/kamera-before.jpg",
    after: "/gallery/kamera-after.jpg",
  },
] as const;
