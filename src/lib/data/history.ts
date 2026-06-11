export type Era = {
  id: string;
  yearLabel: string;
  title: string;
  summary: string;
  body: string;
};

export const ERAS: Era[] = [
  {
    id: "precolonial",
    yearLabel: "Pre-1885",
    title: "The Kingdom of Rwanda",
    summary: "Centuries of monarchy under the Mwami, with rich oral traditions and clan systems.",
    body: "Long before colonial borders were drawn, the Kingdom of Rwanda flourished under a line of Bami (kings) who governed through councils, ritual, and a sophisticated court culture. Cattle, land, and oral memory bound the kingdom together across the thousand hills.",
  },
  {
    id: "colonial",
    yearLabel: "1885 – 1962",
    title: "Colonial Era",
    summary: "German then Belgian rule reshaped governance, identity, and the land itself.",
    body: "Following the Berlin Conference, Rwanda was placed under German East Africa and later Belgian administration. Colonial powers entrenched ethnic categorisations on identity cards and reorganised traditional structures, with consequences that would echo for generations.",
  },
  {
    id: "independence",
    yearLabel: "1962",
    title: "Independence",
    summary: "Rwanda becomes a sovereign republic on 1 July 1962.",
    body: "After decades of struggle, Rwanda raised its own flag as a republic. The years that followed were marked by political turbulence, waves of displacement, and the search for a new national identity.",
  },
  {
    id: "genocide",
    yearLabel: "1994",
    title: "Genocide Against the Tutsi",
    summary: "One hundred days that changed Rwanda — and the conscience of the world — forever.",
    body: "Between April and July 1994, more than one million Tutsi were murdered in a meticulously organised genocide. The nation was shattered. Survivors carry the memory; the world bears the duty to remember and to prevent.",
  },
  {
    id: "reconciliation",
    yearLabel: "1994 – 2010",
    title: "Reconciliation & Rebuilding",
    summary: "Gacaca courts, Ubumuntu, and the patient work of rebuilding a torn nation.",
    body: "Rwanda chose a path few nations have walked: community justice through Gacaca, intentional unity, and the rebuilding of institutions, schools, and the social fabric — one neighbourhood at a time.",
  },
  {
    id: "modern",
    yearLabel: "2010 – Today",
    title: "Modern Rwanda",
    summary: "A continental leader in governance, technology, conservation, and the arts.",
    body: "Today Rwanda is a story of renewal: a clean and green capital in Kigali, world-class conservation in Volcanoes National Park, a thriving creative scene, and a nation that holds memory and aspiration in the same hand.",
  },
];

export type King = {
  id: string;
  name: string;
  reign: string;
  dynasty: string;
  note: string;
};

export const KINGS: King[] = [
  {
    id: "ruganzu-ndori",
    name: "Ruganzu II Ndori",
    reign: "c. 1600",
    dynasty: "Nyiginya",
    note: "Refounder of the kingdom after exile.",
  },
  {
    id: "cyilima-rujugira",
    name: "Cyilima II Rujugira",
    reign: "c. 1750",
    dynasty: "Nyiginya",
    note: "Military reformer, organiser of permanent armies.",
  },
  {
    id: "kigeli-rwabugiri",
    name: "Kigeli IV Rwabugiri",
    reign: "1853 – 1895",
    dynasty: "Nyiginya",
    note: "Last great pre-colonial king; expanded the kingdom.",
  },
  {
    id: "yuhi-musinga",
    name: "Yuhi V Musinga",
    reign: "1896 – 1931",
    dynasty: "Nyiginya",
    note: "Reigned through the German and early Belgian colonial periods.",
  },
  {
    id: "mutara-rudahigwa",
    name: "Mutara III Rudahigwa",
    reign: "1931 – 1959",
    dynasty: "Nyiginya",
    note: "Modernising king; consecrated Rwanda to Christ in 1946.",
  },
  {
    id: "kigeli-ndahindurwa",
    name: "Kigeli V Ndahindurwa",
    reign: "1959 – 1961",
    dynasty: "Nyiginya",
    note: "The last reigning Mwami of Rwanda.",
  },
];

export type Story = {
  id: string;
  title: string;
  kind: "Legend" | "Poem" | "Proverb" | "Oral history";
  excerpt: string;
};

export const STORIES: Story[] = [
  {
    id: "gihanga",
    title: "Gihanga, the Creator-King",
    kind: "Legend",
    excerpt:
      "From the mists of time comes Gihanga, founder of dynasties, who taught the people fire, iron, and cattle.",
  },
  {
    id: "ubucurabwenge",
    title: "Ubucurabwenge",
    kind: "Oral history",
    excerpt:
      "The royal genealogy poem, carried in memory by the Abacurabwenge — a chronicle without ink.",
  },
  {
    id: "ikinyemera",
    title: "Ikinyemera",
    kind: "Poem",
    excerpt: "A warrior's praise poetry, recited at court to honour courage and lineage.",
  },
  {
    id: "umugani-w-inka",
    title: "The Cow and the Friend",
    kind: "Proverb",
    excerpt:
      "He who gives you a cow gives you the morning sun — a teaching on generosity and bonds.",
  },
  {
    id: "story-of-rwanda",
    title: "The Story of Rwanda",
    kind: "Oral history",
    excerpt:
      "A broad narrative of Rwanda’s history from ancient kingdoms through colonization, conflict, and rebuilding.",
  },
];

export type NewsItem = {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
};

export const NEWS: NewsItem[] = [
  {
    id: "n1",
    date: "May 2026",
    category: "Heritage",
    title: "Nyanza Royal Palace unveils restored throne hall",
    excerpt: "The Rukari Palace Museum reopens after a year of conservation work.",
  },
  {
    id: "n2",
    date: "Apr 2026",
    category: "Remembrance",
    title: "Kwibuka 32 — A nation remembers",
    excerpt: "Ceremonies across the country marked the 32nd commemoration.",
  },
  {
    id: "n3",
    date: "Mar 2026",
    category: "Culture",
    title: "Intore dance recognised by UNESCO programme",
    excerpt: "Traditional Rwandan dance added to a regional safeguarding initiative.",
  },
  {
    id: "n4",
    date: "Feb 2026",
    category: "Education",
    title: "New oral history archive opens to researchers",
    excerpt: "Hundreds of recorded testimonies are now publicly accessible.",
  },
];

export type Province = {
  id: string;
  name: string;
  capital: string;
  highlight: string;
  x: number;
  y: number;
};

export const PROVINCES: Province[] = [
  {
    id: "kigali",
    name: "Kigali",
    capital: "Kigali",
    highlight: "Capital city, Kigali Genocide Memorial.",
    x: 56,
    y: 52,
  },
  {
    id: "north",
    name: "Northern Province",
    capital: "Musanze",
    highlight: "Volcanoes National Park, mountain gorillas.",
    x: 48,
    y: 26,
  },
  {
    id: "south",
    name: "Southern Province",
    capital: "Nyanza",
    highlight: "Royal Palace Museum, the ancient seat of the Mwami.",
    x: 46,
    y: 74,
  },
  {
    id: "east",
    name: "Eastern Province",
    capital: "Rwamagana",
    highlight: "Akagera National Park, savannah and lakes.",
    x: 82,
    y: 50,
  },
  {
    id: "west",
    name: "Western Province",
    capital: "Rubavu",
    highlight: "Lake Kivu, Nyungwe rainforest.",
    x: 18,
    y: 50,
  },
];
