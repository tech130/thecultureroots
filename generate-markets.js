const fs = require('fs');
const path = require('path');

const canadaCode = fs.readFileSync(path.join(__dirname, 'src/app/countries/canada/page.tsx'), 'utf-8');

const markets = [
  {
    num: "02",
    name: "United States",
    slug: "united-states",
    abbreviation: "US.",
    tagline: "The World's Largest\\nMulticultural Economy",
    title2: "The World's Largest\\nMulticultural Economy",
    desc: "The United States is a nation of immigrants with a $4.7 trillion multicultural market. Hispanic, Asian, and Black American consumers are the fastest-growing demographic segments — brands that ignore them leave massive revenue on the table.",
    img: "/images/markets/United-States.jpg",
    cities: [
      { name: "Los Angeles", src: "/images/countries/united-states/Los Angeles.avif" },
      { name: "New York City", src: "/images/countries/united-states/New-York-City.webp" },
      { name: "Houston", src: "/images/countries/united-states/Houston.png" },
      { name: "Chicago", src: "/images/countries/united-states/Chicago.webp" },
      { name: "Miami", src: "/images/countries/united-states/Miami.avif" }
    ],
    stats: [
      { value: "330M+", label: "Population" },
      { value: "14%", label: "Foreign Born Residents" },
      { value: "150+", label: "Ethnic Groups" },
      { value: "130M+", label: "Multicultural Audiences" }
    ],
    startCampaignText: "Start a US Campaign",
    componentName: "UnitedStatesPage"
  },
  {
    num: "03",
    name: "United Kingdom",
    slug: "united-kingdom",
    abbreviation: "UK.",
    tagline: "Diversity Woven\\ninto Society",
    title2: "Diversity Woven\\ninto Society",
    desc: "The UK's multicultural landscape stretches from London's global communities to new diaspora hubs in Birmingham and Manchester. Nearly 15% of the population identify as ethnic minority — creating a dynamic, influential, and deeply connected audience.",
    img: "/images/markets/United-Kingdom.jpg",
    cities: [
      { name: "London", src: "/images/countries/united-kingdom/London.avif" },
      { name: "Birmingham", src: "/images/countries/united-kingdom/Birmingham.webp" },
      { name: "Manchester", src: "/images/countries/united-kingdom/Manchester.jpg" },
      { name: "Leicester", src: "/images/countries/united-kingdom/Leicester.jpg" },
      { name: "Bradford", src: "/images/countries/united-kingdom/Bradford.jpg" }
    ],
    stats: [
      { value: "67M+", label: "Population" },
      { value: "14%", label: "Foreign Born Residents" },
      { value: "100+", label: "Ethnic Groups" },
      { value: "10M+", label: "Multicultural Audiences" }
    ],
    startCampaignText: "Start a UK Campaign",
    componentName: "UnitedKingdomPage"
  },
  {
    num: "04",
    name: "Australia",
    slug: "australia",
    abbreviation: "AU.",
    tagline: "A Continent\\nof Cultures",
    title2: "A Continent\\nof Cultures",
    desc: "One in three Australians was born overseas. Cities like Sydney and Melbourne rival any global metropolis for cultural diversity. From Southeast Asian communities to growing South Asian populations, Australia's multicultural market is booming.",
    img: "/images/markets/Australia.jpg",
    cities: [
      { name: "Sydney", src: "/images/countries/australia/Sydney.webp" },
      { name: "Melbourne", src: "/images/countries/australia/Melbourne.jpg" },
      { name: "Brisbane", src: "/images/countries/australia/Brisbane.jpeg" },
      { name: "Perth", src: "/images/countries/australia/Perth.webp" },
      { name: "Adelaide", src: "/images/countries/australia/Adelaide.jpg" }
    ],
    stats: [
      { value: "26M+", label: "Population" },
      { value: "30%", label: "Foreign Born Residents" },
      { value: "300+", label: "Ethnic Groups" },
      { value: "7M+", label: "Multicultural Audiences" }
    ],
    startCampaignText: "Start an AU Campaign",
    componentName: "AustraliaPage"
  },
  {
    num: "05",
    name: "New Zealand",
    slug: "new-zealand",
    abbreviation: "NZ.",
    tagline: "Aotearoa's\\nMulticultural Future",
    title2: "Aotearoa's\\nMulticultural Future",
    desc: "New Zealand's population is rapidly diversifying, led by Pacific Islander and Asian communities. The growing South Asian and Chinese populations are reshaping consumer culture — presenting enormous opportunity for culturally fluent brands.",
    img: "/images/markets/New-Zealand.jpg",
    cities: [
      { name: "Auckland", src: "/images/countries/new-zealand/Auckland.jpg" },
      { name: "Wellington", src: "/images/countries/new-zealand/Wellington.webp" },
      { name: "Christchurch", src: "/images/countries/new-zealand/Christchurch.jpg" },
      { name: "Hamilton", src: "/images/countries/new-zealand/Hamilton.jpg" },
      { name: "Tauranga", src: "/images/countries/new-zealand/Tauranga.webp" }
    ],
    stats: [
      { value: "5M+", label: "Population" },
      { value: "27%", label: "Foreign Born Residents" },
      { value: "160+", label: "Ethnic Groups" },
      { value: "1M+", label: "Multicultural Audiences" }
    ],
    startCampaignText: "Start an NZ Campaign",
    componentName: "NewZealandPage"
  }
];

markets.forEach(market => {
  let content = canadaCode;

  // otherCountries List Replacement
  const fullOtherCountries = [
    { num: "01", name: "CANADA", slug: "canada", img: "/images/markets/Canada-1.jpg" },
    { num: "02", name: "UNITED STATES", slug: "united-states", img: "/images/markets/United-States.jpg" },
    { num: "03", name: "UNITED KINGDOM", slug: "united-kingdom", img: "/images/markets/United-Kingdom.jpg" },
    { num: "04", name: "AUSTRALIA", slug: "australia", img: "/images/markets/Australia.jpg" },
    { num: "05", name: "NEW ZEALAND", slug: "new-zealand", img: "/images/markets/New-Zealand.jpg" }
  ];
  const newOtherCountries = fullOtherCountries.filter(c => c.slug !== market.slug);
  
  const otherCountriesStr = `const otherCountries = [\n${newOtherCountries.map(c => `  { num: "${c.num}", name: "${c.name}", slug: "${c.slug}", img: "${c.img}" },`).join('\n')}\n];`;
  content = content.replace(/const otherCountries = \[\s*[\s\S]*?\s*\];/, otherCountriesStr);

  const citiesArrayString = market.cities.map(c => `  { name: "${c.name}", src: "${c.src}", objectPosition: "center", filter: "none" },`).join('\n');
  content = content.replace(/const ALL_CITIES = \[\s*[\s\S]*?\s*\];/, `const ALL_CITIES = [\n${citiesArrayString}\n];`);

  content = content.replace(/src="\/images\/markets\/Canada-1\.jpg"/g, `src="${market.img}"`);
  content = content.replace(/alt="Canada — Many Cultures, One Canada"/, `alt="${market.name} — ${market.tagline.replace('\\n', ' ')}"`);
  content = content.replace(/Many Cultures,<br \/>One Canada/g, market.tagline.replace('\\n', '<br />'));
  content = content.replace(/Canada's Cultures Are Its Strength[^<]*</g, market.desc + "<");
  content = content.replace(/>\s*CA\.\s*<\/motion.div>/, `>\n        ${market.abbreviation}\n      </motion.div>`);

  const replaceCanada = `<p style={{ fontSize: "2rem", color: "#000", fontWeight: 300 }}>\n          ${market.name}\n        </p>`;
  content = content.replace(/<p style={{ fontSize: "2rem"[^>]*>\s*Canada\s*<\/p>/, replaceCanada);
  content = content.replace(/Where Every Culture<br \/>Has a Voice\./g, market.title2.replace('\\n', '<br />'));
  content = content.replace(/Canada is one of the most culturally diverse nations on earth\.[^<]*</, market.desc + "<");

  const statsArrayString = market.stats.map(s => `    { value: "${s.value}", label: "${s.label}" },`).join('\n');
  content = content.replace(/const stats = \[\s*[\s\S]*?\s*\];/, `const stats = [\n${statsArrayString}\n  ];`);

  content = content.replace(/Start a Canada Campaign/, market.startCampaignText);

  content = content.replace(/export default function CanadaPage\(\)/, `export default function ${market.componentName}()`);

  const dirPath = path.join(__dirname, 'src/app/countries', market.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content, 'utf-8');
});

console.log('Pages generated successfully!');
