const fs = require('fs');
const path = require('path');

const STRAPI_URL = 'https://agrodakk-cms-production.up.railway.app';

async function fetchFromStrapi(endpoint) {
  const url = https://agrodakk-cms-production.up.railway.app/api + endpoint;
  console.log(Fetching: );
  const res = await fetch(url);
  if (!res.ok) {
    console.error(Failed to fetch :  );
    return null;
  }
  return res.json();
}

async function extractAll() {
  // Create data directory
  const dataDir = path.join(__dirname, 'src', 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Fetch all data
  const endpoints = [
    { name: 'products', path: '/products?populate[product_category][fields][0]=name&populate[product_category][fields][1]=slug&populate[images][fields][0]=url&populate[images][fields][1]=alternativeText&sort=name:asc&pagination[pageSize]=100' },
    { name: 'categories', path: '/product-categories?populate=*&sort=name:asc' },
    { name: 'services', path: '/services?populate=*&sort=order:asc' },
    { name: 'blogs', path: '/blog-articles?populate=*&sort=publishedDate:desc' },
    { name: 'site-settings', path: '/site-setting?populate=*' },
  ];

  for (const endpoint of endpoints) {
    console.log(\nExtracting ...);
    const data = await fetchFromStrapi(endpoint.path);
    
    if (data) {
      const filePath = path.join(dataDir, ${endpoint.name}.json);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      console.log(✓ Saved .json);
    } else {
      console.log(✗ Failed to extract );
    }
  }

  console.log('\n✅ Data extraction complete! Check the src/data/ folder.');
}

extractAll().catch(console.error);
