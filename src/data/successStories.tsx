export interface SuccessStoryData {
  title: string;
  subtitle: string;
  emoji: string;
  description: string;
  playStoreUrl?: string;
  websiteUrl?: string;
  stats: {
    estimatedTime: string;
    bugsFixing: string;
    security: string;
    projectCompletion: string;
    trafficSpikes: string;
    trafficSpikesLabel?: string;
  };
  customStats?: {
    label: string;
    val: string;
  }[];
  about: string;
  challenge: string;
  workflowTitle?: string;
  workflow?: string[];
  timeline?: { label: string; day: string; color: string }[];
  heroHeadingBlack?: string;
  heroHeadingGreen?: string;
  industry?: string;
  projectType?: string;
  aboutHeadline?: string;
  challengeHeadline?: string;
  challengeBullets?: string[];
  timelineBanner?: string;
  impactHeadline?: string;
  impactDescription?: string;
  impactCards?: { title: string; desc: string; icon: string }[];
  image?: string;
  logo?: string;
}

export const storiesData: Record<string, SuccessStoryData> = {
  "priyanka-khaitan": {
    logo: "/logos/16.jpg",
    image: "/caseStudy/bridal-content-storytelling.png",
    title: "Priyanka Khaitan",
    subtitle: "Bridal Content Strategy & High-intent Conversions",
    emoji: "💎",
    description: "A luxury bespoke bridal jewelry brand that digitized its private salon consultation experience to reach nationwide brides.",
    stats: {
      estimatedTime: "90 Days",
      bugsFixing: "350 +",
      security: "99.9%",
      projectCompletion: "95 Days",
      trafficSpikes: "450%"
    },
    about: "Priyanka Khaitan offers heritage diamond jewelry. The project successfully reimagined the high-end jewelry salon as an immersive digital showroom with remote virtual try-ons.",
    challenge: "Conveying the delicate brilliance and detailing of luxury diamond products on small mobile screens without causing high resource loading times.",
    workflow: [
      "Conducted luxury branding consultation",
      "Built specialized ultra-high resolution media viewport",
      "Implemented private booking engine",
      "Optimized load times under unstable mobile connection profiles"
    ],
    timeline: [
      { label: "Planning", day: "20 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "45 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "80 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "90 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "95 Day", color: "border-emerald-500 bg-emerald-50 text-emerald-600" }
    ]
  },
  "creative-ecotech": {
    logo: "/logos/3.jpg",
    image: "/brand-card-images/creative-echotech.jpg",
    title: "Creative Ecotech",
    subtitle: "Eco-Friendly Plastics for a Greener Tomorrow",
    emoji: "🌱",
    description: "At Creative Ecotech, we are transforming plastics with sustainability at the core. Specializing in biodegradable and recyclable solutions, we blend innovation with responsibility to reduce environmental impact. Our mission is to create high-quality, eco-friendly alternatives that reshape the industry while promoting a greener future. Creative Ecotech – where technology and sustainability go hand in hand.",
    websiteUrl: "https://creativeecotech.com/",
    stats: {
      estimatedTime: "20 Days",
      bugsFixing: "136 +",
      security: "99.99%",
      projectCompletion: "20 Days",
      trafficSpikes: "1.3 Sec",
      trafficSpikesLabel: "Load Time"
    },
    about: "At Creative Ecotech, we believe in the power of innovation to drive sustainability. As a leading eco-friendly plastic manufacturing brand, we are committed to revolutionizing the industry by creating high-quality, biodegradable, and recyclable plastic solutions that reduce environmental impact. By integrating cutting-edge technology and sustainable materials, we ensure that our products meet modern demands while staying kind to the planet. Whether it’s biodegradable packaging, recycled plastic alternatives, or innovative eco-solutions, Creative Ecotech is paving the way for a greener, cleaner future",
    challenge: "At Creative Ecotech, our mission is to redefine plastics through sustainability, yet conveying this vision effectively remained a challenge. While our products embrace biodegradability and recyclability, our brand identity lacked clarity online. The word \"plastic\" often carries a negative perception, making it crucial to highlight our eco-friendly innovations seamlessly. Our website needed to educate, inspire, and build trust, reflecting our commitment beyond words. By refining our storytelling, design, and messaging, we aim to create an engaging digital presence that not only showcases our solutions but also encourages a greener, more responsible future. Sustainability starts with clarity.",
    workflow: [
      "Strategized the website structure to effectively showcase the brand’s eco-friendly vision",
      "Designed an intuitive, visually appealing, and user-friendly interface for seamless navigation.",
      "Implemented the planned design and features, ensuring alignment",
      "Built a fully functional website, integrating content, visuals, and technology to enhance user engagement."
    ],
    timeline: [
      { label: "Planning", day: "3 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "9 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "17 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "19 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "20 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ]
  },
  "truboy-bbq": {
    logo: "/logos/7.jpg",
    image: "/brand-card-images/Trueboybbq.jpg",
    title: "Truboy BBQ",
    subtitle: "Bringing Authentic Texas BBQ Straight to Your Table",
    emoji: "🍖",
    description: "TruBoy BBQ successfully boosted its Average Order Value (AOV) from $30 to $250 through strategic upselling. By introducing value-packed combos, premium add-ons, and exclusive bulk deals, they encouraged customers to order more. Personalized recommendations and limited-time offers further enhanced sales, transforming single-item purchases into high-value orders, significantly increasing profitability and overall business growth.",
    websiteUrl: "https://truboybbq.com/",
    stats: {
      estimatedTime: "26 Days",
      bugsFixing: "98 +",
      security: "99.99%",
      projectCompletion: "30 Days",
      trafficSpikes: "2.3 Sec",
      trafficSpikesLabel: "Load Time"
    },
    about: "TruBoy BBQ brings the true taste of Texas to your table, offering an authentic BBQ experience. With slow-smoked meats, premium cuts, and bold flavors, we ensure every bite captures the essence of traditional Texas BBQ. Whether you're craving tender brisket, juicy ribs, or flavorful sausages, TruBoy BBQ delivers top-notch quality and unforgettable taste, straight to you. Perfect for any occasion, our BBQ is crafted to satisfy the deepest cravings for rich, smoky goodness.",
    challenge: "TruBoy BBQ faced challenges in increasing its Average Order Value (AOV), directly impacting profitability. Lower AOV meant higher operational costs per order, reducing margins. Customers often opted for smaller or single-item purchases, limiting revenue growth. Without strategic upselling or bundled offers, sales stagnated. Additionally, marketing efforts lacked the necessary push to drive larger orders. These factors hindered scalability, making it difficult to invest in better ingredients, expand menu options, or improve overall customer experience, slowing business development.",
    workflow: [
      "Created a user-friendly, visually appealing site for a seamless experience.",
      "Designed value-packed combos to boost sales and customer satisfaction.",
      "Introduced bundle deals to drive bulk purchases and increase revenue.",
      "Displayed real customer reviews to build trust and credibility."
    ],
    timeline: [
      { label: "Planning", day: "7 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "11 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "24 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "28 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "30 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ]
  },
  "jiva": {
    logo: "/logos/jiva.jpg",
    image: "/brand-card-images/Jiva.png",
    title: "Hotel JIVA",
    subtitle: "A 4-star boutique hotel offering luxury & comfort.",
    emoji: "🏨",
    description: "Hotel JIVA, a renowned 4-star boutique hotel in Jamshedpur, partnered with Digital Edge 360 to enhance its digital presence and boost direct bookings. Through strategic digital marketing efforts, JIVA experienced remarkable growth in online visibility, guest engagement, and occupancy rates, establishing itself as a top choice for premium hospitality in the city.",
    websiteUrl: "https://www.hoteljiva.com/",
    stats: {
      estimatedTime: "50 Days",
      bugsFixing: "140 +",
      security: "99.9%",
      projectCompletion: "55 Days",
      trafficSpikes: "200%"
    },
    customStats: [
      { label: "Increase in Website Traffic", val: "140%" },
      { label: "Rise in Direct Bookings", val: "120%" },
      { label: "Boost in Repeat Guests", val: "85%" },
      { label: "Growth in Social Engagement", val: "95%" },
      { label: "Decrease in CPA", val: "60%" }
    ],
    about: "Hotel JIVA is a premium boutique hotel in Jamshedpur, offering a blend of luxury, comfort, and personalized services. With elegantly designed rooms, world-class dining, and top-tier amenities, JIVA caters to both business and leisure travelers. Its commitment to providing a seamless hospitality experience makes it a preferred destination for corporate guests, families, and tourists seeking quality stays with modern conveniences and impeccable service.",
    challenge: "Despite its strong reputation, Hotel JIVA faced challenges in increasing direct bookings, relying heavily on third-party aggregators that reduced profitability. The brand struggled with low online visibility and engagement, limiting its reach to potential guests. Additionally, competition from other hotels in Jamshedpur made it crucial to differentiate through digital strategies that enhanced brand perception, improved guest interactions, and optimized marketing spend for better ROI.",
    workflowTitle: "Approach & Strategy",
    workflow: [
      "SEO & Local Optimization: Improved search rankings with location-based keywords and hotel listings.",
      "Social Media Branding: Showcased premium services, guest experiences, and special offers.",
      "Performance Marketing: Ran targeted ads to drive direct bookings at lower costs.",
      "Email & Retargeting Campaigns: Engaged past guests with exclusive offers and loyalty perks."
    ]
  },
  "ducati": {
    logo: "/logos/28.jpg",
    image: "/brand-card-images/Ducati-home.jpg",
    title: "Ducati Kolkata",
    subtitle: "Premium superbikes redefining speed, performance, and luxury.",
    emoji: "🏍️",
    description: "Ducati Kolkata, the official dealership of the iconic Italian superbike brand, partnered with Digital Edge 360 to amplify its digital presence, attract high-intent buyers, and boost showroom footfall. Through a strategic mix of social media engagement, performance marketing, and lead nurturing, the dealership experienced remarkable growth in brand awareness and sales inquiries.",
    stats: {
      estimatedTime: "40 Days",
      bugsFixing: "95 +",
      security: "99.99%",
      projectCompletion: "42 Days",
      trafficSpikes: "400%"
    },
    customStats: [
      { label: "Increase in Social Media Engagement", val: "250%" },
      { label: "Growth in Test Ride Bookings", val: "180%" },
      { label: "Rise in Walk-In Inquiries", val: "150%" },
      { label: "Increase in Ducati Club Memberships", val: "100%" },
      { label: "Higher Conversion from Social Leads", val: "80%" }
    ],
    about: "Ducati Kolkata is the exclusive dealership offering Ducati’s iconic superbikes to passionate riders. Known for high-performance motorcycles, cutting-edge technology, and Italian craftsmanship, Ducati is a dream brand for biking enthusiasts. The dealership provides personalized consultations, test rides, and premium customer service, ensuring an exceptional ownership experience. With a growing biking community, Ducati Kolkata aims to connect with riders who crave adrenaline, style, and performance on the road.",
    challenge: "Despite Ducati’s global reputation, the Kolkata dealership faced challenges in reaching potential buyers digitally. The luxury superbike segment is niche, requiring a highly targeted marketing approach. Limited awareness, high competition from other premium brands, and the need for an engaged biking community made lead generation difficult. Without a website or Google Ads, Ducati Kolkata needed a powerful social media and influencer-driven strategy to attract and convert high-value customers.",
    workflowTitle: "Approach & Strategy",
    workflow: [
      "Influencer & Community Marketing: Partnered with biking influencers and Ducati riders to showcase experiences.",
      "Social Media Storytelling: Created engaging content, including reels, rider testimonials, and bike showcases.",
      "Experiential Marketing Events: Hosted ride meets, Ducati track days, and launch events to attract enthusiasts.",
      "Personalized Lead Nurturing: Engaged prospects via WhatsApp, direct messaging, and premium consultations."
    ]
  },
  "edefyhome": {
    logo: "/logos/16.jpg",
    image: "/brand-card-images/Edify-home.png",
    title: "Edify Home Decor",
    subtitle: "Premium interior design solutions transforming spaces with elegance.",
    emoji: "🏠",
    description: "Edify Home Decor, a Kolkata-based interior design company, partnered with Digital Edge 360 to scale its online presence and generate quality leads. Through a strategic mix of SEO, performance marketing, and content-driven engagement, the brand achieved substantial growth, attracting high-intent clients and establishing itself as a trusted name in luxury interiors.",
    websiteUrl: "https://www.edifyhomedecor.com/",
    stats: {
      estimatedTime: "55 Days",
      bugsFixing: "190 +",
      security: "99.9%",
      projectCompletion: "58 Days",
      trafficSpikes: "220%"
    },
    customStats: [
      { label: "Increase in Website Traffic", val: "180%" },
      { label: "Increase in Consultation Bookings", val: "75%" },
      { label: "Reduction in Cost Per Lead (CPL)", val: "60%" },
      { label: "Growth in Lead Generation", val: "300%" },
      { label: "Boost in Social Media Engagement", val: "90%" }
    ],
    about: "Edify Home Decor specializes in high-end interior design solutions, offering customized home and commercial space transformations. Known for its innovative designs, premium craftsmanship, and attention to detail, the brand caters to clients seeking luxury aesthetics with functional appeal. From modern minimalistic interiors to grand opulent spaces, Edify Home Decor is committed to delivering personalized design experiences that reflect each client’s unique style and preferences.",
    challenge: "Despite its expertise, Edify Home Decor struggled with digital visibility and lead generation, relying primarily on offline referrals. The absence of a robust online presence limited its ability to attract new clients. Additionally, high competition in the interior design industry made it challenging to stand out. The company needed a data-driven marketing strategy to enhance its brand positioning, boost engagement, and improve conversion rates from online inquiries.",
    workflowTitle: "Approach & Strategy",
    workflow: [
      "SEO & Content Marketing: Created keyword-rich blogs and optimized web pages for organic reach.",
      "Social Media Visual Strategy: Showcased stunning project portfolios through reels, carousels, and testimonials.",
      "Performance Marketing Campaigns: Run highly targeted Facebook and Google ads to drive quality leads.",
      "Lead Nurturing & Retargeting: Engaged potential clients with email marketing and personalized follow-ups."
    ]
  },
  "omniastra": {
    logo: "/logos/astra.jpg",
    image: "/brand-card-images/astra.jpg",
    title: "OmniAstra",
    subtitle: "Omni Astra leads India’s luxury eyewear distribution",
    emoji: "🕶️",
    description: "Omni Astra experienced exceptional growth, with overall search volume increasing by 286% and brand-specific searches surging by 295%. Organic growth reached 262%, while direct website traffic rose by 278%. Strategic campaigns delivered a 318% increase in first-time retailer enquiries and partner conversions. These impressive metrics highlight Digital Edge 360’s expertise in driving visibility, engagement, and business growth for premium luxury distribution brands.",
    websiteUrl: "https://omniastra.com/",
    stats: {
      estimatedTime: "70 Days",
      bugsFixing: "210 +",
      security: "99.99%",
      projectCompletion: "75 Days",
      trafficSpikes: "280%"
    },
    customStats: [
      { label: "Growth in 1st time users", val: "305%" },
      { label: "Increase in Direct growth", val: "267%" },
      { label: "Google Ads Minimum ROAS", val: "305%" },
      { label: "Organic & Direct growth", val: "251%" },
      { label: "All & Brand search volume", val: "273%" }
    ],
    about: "Omni Astra, a leading luxury eyewear distribution company in India, is dedicated to bringing the world’s finest eyewear brands to the Indian market. With a strong focus on authenticity, craftsmanship, and premium quality, the company curates an exclusive portfolio of globally renowned sunglasses and optical brands. Catering to an extensive network of retailers nationwide, Omni Astra delivers sophisticated designs and superior products that reflect global luxury standards. Driven by a commitment to excellence, the brand seamlessly blends international heritage with modern retail expertise, establishing Omni Astra as a trusted leader in India’s luxury eyewear industry.",
    challenge: "Omni Astra operates in a highly competitive luxury eyewear market, where strong digital visibility is essential for brand leadership. When they partnered with us, their online presence required strategic strengthening to support brand discovery and trade engagement. Through focused SEO initiatives, we enhanced search visibility and improved organic reach across key markets. In parallel, targeted PPC and performance marketing campaigns were deployed to increase immediate visibility and generate qualified retailer enquiries—resulting in improved engagement, stronger brand recall, and measurable ROI.",
    workflowTitle: "Approach & Strategy",
    workflow: [
      "Omni Astra established itself as a leading luxury eyewear distributor with a refined, high-impact website.",
      "Improved targeted campaigns on Meta and Google Ads, boosting sales.",
      "Enhanced videography and photography elevated OmniAstra’s visual appeal.",
      "Strategic communication and cohesive efforts led to impressive results for OmniAstra."
    ]
  },
  "earthy-line": {
    logo: "/logos/earthyline.jpg",
    image: "/brand-card-images/earthline.jpg",
    title: "Earthyline",
    subtitle: "Where Tradition Meets Conscious Elegance",
    emoji: "👗",
    description: "Earthyline is an ethnic saree brand rooted in conscious living, offering thoughtfully crafted sarees that blend sustainability with modern design. By weaving tradition with timeless elegance, the brand creates pieces that celebrate heritage while resonating with today’s sensibilities. However, limited digital visibility, inconsistent branding, and challenges in engaging the right audience led Earthyline to partner with Digital Edge 360. Through strategic digital marketing, the brand strengthened its online presence, enhanced audience engagement, and established a clear path for sustainable growth.",
    websiteUrl: "https://earthyline.com/",
    stats: {
      estimatedTime: "20 Days",
      bugsFixing: "136 +",
      security: "99.99%",
      projectCompletion: "23 Days",
      trafficSpikes: "1.3 Sec",
      trafficSpikesLabel: "Load Time"
    },
    about: "Founded in 2016, Earthyline is a celebration of India’s handloom heritage and the artisans who keep its traditions alive. What began as a small offline venture has grown into a heartfelt journey — connecting the timeless craft of weaving with saree lovers who value culture, craftsmanship, authenticity and sustainability. Each Earthyline saree is handwoven with care, using traditional techniques passed down through generations. From the quiet rhythm of rural looms to the natural textures and earthy hues of every drape, our sarees reflect the soul of the artisan and the beauty of slow, mindful creation. As we step into 2026, Earthyline brings this handcrafted legacy online — making it possible for you to experience genuine handloom artistry from the comfort of your home. We remain committed to sustainable practices, fair livelihoods, and ethical craftsmanship that honours both people and the planet. At Earthyline, every thread tells a story — of heritage, harmony, and heart. Wear the weave. Feel the earth. Celebrate handloom with Earthyline.",
    challenge: "Earthyline operates in a highly competitive ethnic fashion market, where strong digital visibility is essential for sustained brand growth. When they partnered with us, their online presence required strategic strengthening to improve brand discovery and customer engagement. Through focused SEO initiatives, we enhanced search visibility and expanded organic reach across relevant audiences. In parallel, targeted performance marketing and paid campaigns were executed to boost immediate visibility and drive qualified traffic—resulting in higher engagement, stronger brand recall, and measurable growth in online performance.",
    workflow: [
      "Prepared the website structure to effectively showcase the brand’s distinctiveness",
      "Crafted an intuitive, visually appealing, and user-friendly interface for flawless navigation",
      "Implemented the planned design and features, ensuring alignment",
      "Built a fully functional app, incorporating content, visuals and technology, to improve user engagement"
    ],
    timeline: [
      { label: "Planning", day: "5 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "14 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "19 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "21 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "23 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ]
  },
  "likeson": {
    logo: "/logos/likeson.jpg",
    image: "/brand-card-images/likeson.jpg",
    title: "Likeson",
    subtitle: "Simplified healthcare appointment booking and management platform",
    emoji: "🏥",
    description: "Likeson, a healthcare appointment booking and management platform dedicated to simplifying medical care for individuals and families, brings convenience, clarity, and confidence to every health journey. With a seamless digital experience, Likeson enables users to book appointments, manage multiple patient profiles, track health progress, and connect with trusted doctors and clinics — all in one place. Seeking to expand its digital presence and build meaningful connections with a wider audience, Likeson partnered with Digital Edge 360. Through strategic marketing initiatives, performance-driven campaigns, and creative brand positioning, Digital Edge 360 empowers Likeson to strengthen its online visibility, engage users effectively, and establish itself as a trusted name in digital healthcare management.",
    websiteUrl: "https://www.likeson.in/",
    stats: {
      estimatedTime: "20 Days",
      bugsFixing: "136 +",
      security: "99.99%",
      projectCompletion: "23 Days",
      trafficSpikes: "1.3 Sec",
      trafficSpikesLabel: "Load Time"
    },
    about: "Likeson, a healthcare appointment booking and management platform dedicated to simplifying medical care for individuals and families, brings convenience, clarity, and confidence to every health journey. With a seamless digital experience, Likeson enables users to book appointments, manage multiple patient profiles, track health progress, and connect with trusted doctors and clinics — all in one place. Seeking to expand its digital presence and build meaningful connections with a wider audience, Likeson partnered with Digital Edge 360. Through strategic marketing initiatives, performance-driven campaigns, and creative brand positioning, Digital Edge 360 empowers Likeson to strengthen its online visibility, engage users effectively, and establish itself as a trusted name in digital healthcare management.",
    challenge: "Likeson faced challenges in building strong digital visibility and reaching a wider audience in the highly competitive healthcare space. While the platform offered a seamless appointment booking and healthcare management experience, limited brand awareness and strategic outreach slowed user acquisition and engagement. Creating trust-driven communication, educating users about digital healthcare convenience, and increasing provider and patient registrations were key challenges. To overcome these hurdles, Likeson partnered with Digital Edge 360, seeking expert digital marketing solutions to strengthen its online presence, enhance brand credibility, and drive meaningful user engagement. Through strategic campaigns, performance marketing, and targeted outreach initiatives, Digital Edge 360 supports Likeson in expanding its reach, increasing platform adoption, and establishing itself as a reliable and user-friendly healthcare appointment management platform.",
    workflow: [
      "Prepared the website structure to effectively showcase the brand’s distinctiveness",
      "Crafted an intuitive, visually appealing, and user-friendly interface for flawless navigation",
      "Implemented the planned design and features, ensuring alignment",
      "Built a fully functional app, incorporating content, visuals and technology, to improve user engagement"
    ],
    timeline: [
      { label: "Planning", day: "5 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "14 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "19 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "21 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "23 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ]
  },
  "nayantara": {
    logo: "/logos/nayantara.jpg",
    image: "/brand-card-images/Nayantara.jpg",
    title: "Nayantara",
    subtitle: "Nayantara leads India’s ethnic fashion collection",
    emoji: "👗",
    description: "Nayantara is more than just a saree brand; it is a celebration of tradition, luxury, and craftsmanship. To complement the richness of its exquisite sarees, Nayantara envisioned a premium-quality website—one that mirrors the sophistication and exclusivity of its collections. Designed to offer a seamless and elegant browsing experience, the website showcases the brand’s finest weaves with stunning visuals, effortless navigation, and a refined aesthetic. Every detail, from the layout to the user interface, is crafted to reflect the grandeur of Nayantara, ensuring that customers experience the same luxury online as they do with every drape.",
    websiteUrl: "https://nayantara.shop/",
    stats: {
      estimatedTime: "20 Days",
      bugsFixing: "136 +",
      security: "99.99%",
      projectCompletion: "23 Days",
      trafficSpikes: "1.3 Sec",
      trafficSpikesLabel: "Load Time"
    },
    about: "Nayantara, an exclusive online platform founded by Poonam Ahlawat, is dedicated to celebrating women’s ethnic fashion. With a passion for tradition and craftsmanship, she curates premium sarees that embody elegance, quality, and cultural heritage. Catering to diverse ethnic collections, Nayantara offers exquisite designs for every occasion. Through her vision, the brand blends timeless artistry with modern style, making it a trusted name in ethnic fashion for women across India.",
    challenge: "Nayantara's journey faced significant challenges in the highly competitive fashion market. When they approached us, their online presence was minimal, hindering their branding and marketing efforts. By leveraging targeted SEO strategies, we improved their website’s search rankings, driving organic traffic. Additionally, strategic PPC & performance marketing campaigns were implemented to boost immediate visibility and attract potential buyers - this immediately enhanced their ROI.",
    workflow: [
      "Strategized the website structure to effectively showcase the brand’s stunning vision",
      "Designed an intuitive, visually appealing, and user-friendly interface for seamless navigation",
      "Implemented the planned design and features, ensuring alignment",
      "Built a fully functional website, integrating content, visuals, and technology to enhance user engagement"
    ],
    timeline: [
      { label: "Planning", day: "5 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "14 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "19 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "21 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "23 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ]
  },
  "earthbags": {
    logo: "/logos/earthbags.jpg",
    image: "/brand-card-images/earth-bags.jpg",
    title: "EarthBags",
    subtitle: "Made for You, Made for the Planet",
    emoji: "👜",
    description: "Earthbags is a sustainable bag brand dedicated to eco-friendly fashion and conscious living. Committed to reducing waste and promoting ethical choices, they craft stylish, durable bags from recycled materials. Seeking to expand their reach and enhance their digital presence, Earthbags partnered with Digital Edge 360 for innovative marketing solutions and a stronger online impact.",
    websiteUrl: "https://shopearthbags.com/",
    stats: {
      estimatedTime: "20 Days",
      bugsFixing: "136 +",
      security: "99.99%",
      projectCompletion: "23 Days",
      trafficSpikes: "1.3 Sec",
      trafficSpikesLabel: "Load Time"
    },
    about: "Earthbags is a sustainable bag brand dedicated to eco-friendly fashion and responsible living. Our bags are crafted from recycled, biodegradable, and ethically sourced materials, ensuring durability without compromising the planet. Whether for everyday use, work, or travel, Earthbags combines style, functionality, and sustainability in every design. We believe in reducing waste and promoting conscious consumer choices. By choosing Earthbags, you contribute to a greener future while carrying fashion with a purpose. Join us in making sustainability a lifestyle—one stylish, earth-friendly bag at a time.",
    challenge: "Earthbags struggled with brand visibility, digital outreach, and customer engagement in a competitive market. Despite offering sustainable, high-quality bags, reaching the right audience and conveying their eco-conscious mission was a challenge. To overcome this, Earthbags partnered with Digital Edge 360 to enhance their online presence, implement targeted marketing strategies, and build a strong digital brand that connects with eco-conscious consumers effectively.",
    workflow: [
      "Prepared the website structure to effectively showcase the brand’s distinctiveness",
      "Crafted an intuitive, visually appealing, and user-friendly interface for flawless navigation",
      "Implemented the planned design and features, ensuring alignment",
      "Built a fully functional app, incorporating content, visuals and technology, to improve user engagement"
    ],
    timeline: [
      { label: "Planning", day: "5 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "14 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "19 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "21 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "23 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ]
  },
  "roughells": {
    logo: "/logos/roughells.jpg",
    image: "/brand-card-images/roughells.jpg",
    title: "RougHells",
    subtitle: "Built for the Bold, Designed for Comfort",
    emoji: "👕",
    description: "Roughells, a brand redefining effortless style, crafts shirts that blend comfort with sophistication. Despite their quality, they struggled with brand visibility and digital outreach. Seeking a stronger online presence and targeted marketing, they turned to Digital Edge 360, overcoming challenges in audience engagement and sales growth to carve a niche in the fashion industry.",
    websiteUrl: "https://roughells.com/",
    stats: {
      estimatedTime: "20 Days",
      bugsFixing: "136 +",
      security: "99.99%",
      projectCompletion: "23 Days",
      trafficSpikes: "1.3 Sec",
      trafficSpikesLabel: "Load Time"
    },
    about: "Roughells is a contemporary shirt brand that blends simplicity with style, offering breathable, excellent fabrics for the modern man. Designed for comfort and cozy elegance, Roughells caters to those who appreciate fashion without compromise. With a focus on versatility, their shirts seamlessly transition from casual to formal wear, making them a wardrobe essential for every occasion.",
    challenge: "Roughells faced several challenges that hindered their growth in the competitive fashion market. Despite offering high-quality shirts, they struggled with brand visibility, low online engagement, and inconsistent sales. Their digital marketing strategies lacked precision, leading to poor audience reach and conversion rates. To overcome these hurdles, they partnered with Digital Edge 360, seeking expert solutions in brand positioning, social media marketing, and e-commerce optimization to drive growth.",
    workflow: [
      "Prepared the website structure to effectively showcase the brand’s distinctiveness",
      "Crafted an intuitive, visually appealing, and user-friendly interface for flawless navigation",
      "Implemented the planned design and features, ensuring alignment",
      "Built a fully functional app, incorporating content, visuals and technology, to improve user engagement"
    ],
    timeline: [
      { label: "Planning", day: "5 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "14 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "19 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "21 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "23 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ]
  },
  "jetchoice": {
    logo: "/logos/18.jpg",
    image: "/brand-card-images/jet-choice.jpg",
    title: "JetChoice",
    subtitle: "Wings of Freedom, Choice of Excellence",
    emoji: "✈️",
    description: "Jet Choice, a premier international travel company, specializes in seamless global journeys with personalized experiences. However, they faced challenges in reaching the right audience and maximizing digital engagement. To overcome this, they partnered with Digital Edge 360, leveraging expert digital marketing strategies to enhance visibility and drive customer growth.",
    websiteUrl: "https://jetchoicenew.beginit4u.com/",
    stats: {
      estimatedTime: "20 Days",
      bugsFixing: "136 +",
      security: "99.99%",
      projectCompletion: "23 Days",
      trafficSpikes: "1.3 Sec",
      trafficSpikesLabel: "Load Time"
    },
    about: "Jet Choice is a leading international travel company dedicated to curating seamless, luxurious, and hassle-free travel experiences worldwide. With a focus on personalized itineraries, top-tier customer service, and exclusive deals, Jet Choice ensures every journey is memorable. Whether for business or leisure, they cater to discerning travelers seeking convenience and excellence. By embracing innovation and strategic partnerships, Jet Choice continues to redefine global travel with reliability and sophistication.",
    challenge: "Jet Choice faced challenges in expanding its digital reach, engaging the right audience, and converting leads into loyal customers. Despite offering premium travel services, their online presence lacked visibility, and customer acquisition costs were high. Struggling with ineffective marketing strategies and inconsistent brand positioning, they turned to Digital Edge 360 to optimize their digital footprint, enhance engagement, and drive sustainable growth through data-driven marketing solutions.",
    workflow: [
      "Prepared the website structure to effectively showcase the brand’s distinctiveness",
      "Crafted an intuitive, visually appealing, and user-friendly interface for flawless navigation",
      "Implemented the planned design and features, ensuring alignment",
      "Built a fully functional app, incorporating content, visuals and technology, to improve user engagement"
    ],
    timeline: [
      { label: "Planning", day: "5 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "14 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "19 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "21 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "23 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ]
  },
  "sacred-suta": {
    logo: "/logos/sacred-suta.jpg",
    image: "/brand-card-images/sacred-suta.jpg",
    title: "Sacred Suta",
    subtitle: "Crafted by Artisans, Adorned by You",
    emoji: "👗",
    description: "Sacred Suta is an ethnic fashion brand that weaves tradition into contemporary elegance. With a passion for handcrafted sarees and timeless apparel, they celebrate India’s rich textile heritage. However, challenges like low digital visibility, inconsistent branding, and audience engagement hurdles led them to seek Digital Edge 360’s expertise in digital marketing, ensuring a stronger online presence and growth.",
    websiteUrl: "https://sacredsuta.com/",
    stats: {
      estimatedTime: "20 Days",
      bugsFixing: "136 +",
      security: "99.99%",
      projectCompletion: "23 Days",
      trafficSpikes: "1.3 Sec",
      trafficSpikesLabel: "Load Time"
    },
    about: "Sacred Suta is a celebration of India’s timeless craftsmanship, blending heritage with modern elegance. Specializing in handcrafted ethnic fashion collections, the brand revives traditional weaving techniques while catering to contemporary sensibilities. With a commitment to quality, authenticity, and artistry, Sacred Suta empowers artisans and brings soulful ethnic wear to those who cherish culture, craftsmanship, and elegance in every stitch.",
    challenge: "Sacred Suta encountered several challenges in expanding its digital footprint. Despite offering a unique ethnic fashion collection, they struggled with low brand visibility, inconsistent digital branding, and weak audience engagement. Additionally, reaching the right target market and driving online sales proved difficult. To overcome these obstacles, they partnered with Digital Edge 360, leveraging their expertise in digital marketing, social media strategy, and performance-driven campaigns to accelerate growth.",
    workflow: [
      "Prepared the website structure to effectively showcase the brand’s distinctiveness",
      "Crafted an intuitive, visually appealing, and user-friendly interface for flawless navigation",
      "Implemented the planned design and features, ensuring alignment",
      "Built a fully functional app, incorporating content, visuals and technology, to improve user engagement"
    ],
    timeline: [
      { label: "Planning", day: "5 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "14 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "19 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "21 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "23 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ]
  },
  "sree-vedics": {
    logo: "/logos/Sree_Vedics_Logo.jpg",
    image: "/brand-card-images/sreevadic.jpg",
    title: "Sree Vedics",
    subtitle: "Skincare and wellness combining scientific expertise with self-care",
    emoji: "🧴",
    description: "Sree Vedics, a trusted name in skincare and wellness, is dedicated to creating high-quality products that combine scientific expertise with everyday self-care. While the brand offered effective solutions for skin and personal care, it faced challenges in expanding its digital reach and connecting with a wider audience online. Looking to strengthen its brand presence, enhance customer engagement, and drive sustainable growth, Sree Vedics partnered with Digital Edge 360. Through strategic digital marketing, website optimization, and targeted outreach campaigns, the brand successfully increased visibility, built customer trust, and established a stronger position in the competitive beauty and wellness market.",
    websiteUrl: "https://sreevedics.com/",
    stats: {
      estimatedTime: "20 Days",
      bugsFixing: "136 +",
      security: "99.99%",
      projectCompletion: "23 Days",
      trafficSpikes: "1.3 Sec",
      trafficSpikesLabel: "Load Time"
    },
    about: "Sree Vedics is a skincare and wellness brand dedicated to enhancing natural beauty through carefully formulated products that combine scientific innovation with trusted skincare principles. Offering a range of solutions for healthy, radiant skin, the brand focuses on quality, safety, and effectiveness. Designed for modern lifestyles, Sree Vedics products cater to diverse skincare needs, helping individuals look and feel their best with confidence. With a commitment to excellence and customer satisfaction, Sree Vedics continues to inspire self-care through premium beauty and wellness solutions.",
    challenge: "Sree Vedics encountered challenges in expanding its digital presence despite offering premium skincare and wellness products. The brand faced limited online visibility, low customer engagement, and difficulty reaching its target audience in an increasingly competitive beauty and personal care market. Additionally, the lack of a strong digital marketing strategy affected brand awareness and customer acquisition. To address these challenges, Sree Vedics partnered with Digital Edge 360 to enhance its online presence through strategic branding, targeted social media campaigns, website optimization, and performance-driven marketing initiatives, helping the brand connect with more customers and accelerate its growth.",
    workflow: [
      "Prepared the website structure to effectively showcase the brand’s distinctiveness",
      "Crafted an intuitive, visually appealing, and user-friendly interface for flawless navigation",
      "Implemented the planned design and features, ensuring alignment",
      "Built a fully functional app, incorporating content, visuals and technology, to improve user engagement"
    ],
    timeline: [
      { label: "Planning", day: "5 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "14 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "19 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "21 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "23 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ],
    heroHeadingBlack: "Science Meets",
    heroHeadingGreen: "Everyday Self-Care",
    industry: "Skincare & Wellness",
    projectType: "Digital Marketing & Website Optimization",
    aboutHeadline: "Nurturing Beauty. Enhancing Confidence.",
    challengeHeadline: "Standing Out in a Competitive Market",
    challengeBullets: [
      "Limited online visibility and brand awareness",
      "Low customer engagement across digital channels",
      "Difficulty in reaching the target audience effectively",
      "Lack of a strong digital marketing strategy",
      "High competition in the beauty and personal care market"
    ],
    timelineBanner: "Project Successfully Delivered in 23 Days",
    impactHeadline: "Stronger Brand. Higher Growth.",
    impactDescription: "Through strategic digital marketing, website optimization, and targeted outreach campaigns, Sree Vedics achieved remarkable results.",
    impactCards: [
      { title: "Increased Visibility", desc: "Significant boost in online visibility and brand presence", icon: "eye" },
      { title: "Better Engagement", desc: "Higher customer engagement across digital platforms", icon: "users" },
      { title: "Customer Trust", desc: "Built strong trust and credibility with the right audience", icon: "shield" },
      { title: "Sustainable Growth", desc: "Enhanced conversions and sustainable business growth", icon: "trending" }
    ]
  },
  "chris-louis": {
    logo: "/logos/20.jpg",
    title: "Chris Louis",
    subtitle: "Premium Australian leather bags crafted for modern lifestyles.",
    emoji: "💼",
    description: "Chris Louis, a luxury Australian brand specializing in handcrafted leather bags for men and women, collaborated with Digital Edge 360 to enhance its online presence, drive e-commerce sales, and establish a premium brand identity. Through a focused digital marketing strategy, the brand achieved remarkable growth in visibility, engagement, and revenue.",
    websiteUrl: "https://chrislouis.com.au",
    image: "/portfolio/chrislouis.png",
    stats: {
      estimatedTime: "30 Days",
      bugsFixing: "N/A",
      security: "99.9%",
      projectCompletion: "35 Days",
      trafficSpikes: "220%",
      trafficSpikesLabel: "Sales Increase"
    },
    about: "Chris Louis is a high-end Australian brand known for its premium leather bags, combining elegance, durability, and functionality. Designed for professionals and trendsetters, the brand offers a collection of sophisticated bags that blend timeless craftsmanship with contemporary aesthetics. With a strong emphasis on quality and style, Chris Louis caters to individuals seeking luxurious, long-lasting accessories that complement their lifestyle, whether for work, travel, or everyday use.",
    challenge: "Despite its superior craftsmanship, Chris Louis faced challenges in scaling its online sales and reaching international customers. High competition in the luxury leather goods market made brand differentiation difficult. The brand also struggled with low social media engagement and customer retention. Without a strong digital marketing strategy, it needed a refined approach to increase brand awareness, attract high-value customers, and convert online visitors into loyal buyers.",
    workflowTitle: "Our Approach",
    workflow: [
      "Influencer & Lifestyle Marketing: Partnered with fashion influencers to showcase bags in real-life use.",
      "Social Media Content Strategy: Created premium visual storytelling with high-end photography and videos.",
      "Personalized Email & WhatsApp Marketing: Engaged customers with exclusive offers and product recommendations.",
      "High-Impact Paid Social Campaigns: Targeted luxury buyers on Instagram and Facebook for maximum ROI."
    ],
    timeline: [
      { label: "Planning", day: "5 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "Strategy", day: "10 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Campaign Launch", day: "15 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Optimization", day: "25 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Scale & Retention", day: "35 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ],
    heroHeadingBlack: "Premium Leather",
    heroHeadingGreen: "Modern Lifestyles",
    industry: "E-commerce & Luxury Fashion",
    projectType: "Performance Marketing & Brand Strategy",
    aboutHeadline: "Timeless Craftsmanship. Elegance & Durability.",
    challengeHeadline: "Scaling Sales in a Competitive Luxury Market",
    challengeBullets: [
      "High competition in the luxury leather goods market",
      "Difficulties in scaling online sales internationally",
      "Low social media engagement and organic reach",
      "Poor customer retention and high cart abandonment"
    ],
    timelineBanner: "Performance Marketing Strategy Initiated and Scaled in 35 Days",
    impactHeadline: "Substantial ROI. Global Reach.",
    impactDescription: "Through targeted paid advertising, influencer collabs, and retention marketing, Chris Louis expanded its footprint and scaled sales.",
    impactCards: [
      { title: "E-commerce Sales", desc: "220% Increase in online sales revenue", icon: "trending" },
      { title: "International Orders", desc: "140% Rise in worldwide shipments", icon: "globe" },
      { title: "Cart Abandonment", desc: "75% Decrease in abandoned carts", icon: "percent" },
      { title: "Retention & Loyalty", desc: "90% Increase in customer retention rate", icon: "users" }
    ]
  },
  "dash-capital": {
    logo: "/logos/17.jpg",
    title: "Dash Capital",
    subtitle: "Expert wealth management solutions for financial growth & security.",
    emoji: "📈",
    description: "Dash Capital, a leading wealth distribution house in Kolkata, partnered with Digital Edge 360 to enhance its digital presence, generate high-net-worth leads, and establish itself as a trusted name in financial services. Through a focused digital marketing strategy, the firm achieved substantial growth in client acquisition, engagement, and brand credibility.",
    websiteUrl: "https://dashcapital.in",
    image: "/brand-card-images/Dash-Capital.jpg",
    stats: {
      estimatedTime: "30 Days",
      bugsFixing: "N/A",
      security: "99.9%",
      projectCompletion: "35 Days",
      trafficSpikes: "180%",
      trafficSpikesLabel: "Traffic Increase"
    },
    about: "Dash Capital specializes in wealth management, investment advisory, and financial planning services for individuals and businesses. With expertise in mutual funds, insurance, tax planning, and portfolio management, the firm helps clients achieve long-term financial security. By offering personalized solutions and data-driven strategies, Dash Capital has built a strong reputation among investors seeking expert guidance to grow, protect, and optimize their financial assets efficiently.",
    challenge: "Despite its strong financial expertise, Dash Capital struggled with digital visibility and lead generation. The wealth management industry is highly competitive, making it difficult to stand out. Limited online presence and low engagement on social platforms reduced trust and client inquiries. The firm needed a strategic digital marketing approach to reach high-net-worth individuals, build credibility, and convert online visitors into long-term clients.",
    workflowTitle: "Our Approach",
    workflow: [
      "SEO & Content Strategy: Created high-value blogs, investment guides, and industry insights.",
      "Social Media Branding: Engaged audiences with expert financial tips and success stories.",
      "Performance Marketing Campaigns: Targeted high-net-worth individuals via Google and LinkedIn Ads.",
      "Lead Nurturing & Retargeting: Used email marketing and personalized follow-ups to convert prospects."
    ],
    timeline: [
      { label: "Planning", day: "5 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "Strategy", day: "10 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Campaign Launch", day: "15 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Optimization", day: "25 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Scale & Retention", day: "35 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ],
    heroHeadingBlack: "Expert Wealth",
    heroHeadingGreen: "Management Solutions",
    industry: "Wealth Management & Finance",
    projectType: "Performance Marketing & Brand Strategy",
    aboutHeadline: "Personalized Financial Planning. Trusted Expertise.",
    challengeHeadline: "Standing Out in a Highly Competitive Sector",
    challengeBullets: [
      "Highly competitive wealth management landscape",
      "Limited initial digital visibility and brand trust",
      "Low social media engagement with key audiences",
      "Need to efficiently reach and convert high-net-worth individuals"
    ],
    timelineBanner: "Wealth Marketing Strategy Scaled in 35 Days",
    impactHeadline: "Substantial Lead Volume. Optimized CPL.",
    impactDescription: "Through targeted paid advertising, high-quality content, and retargeting campaigns, Dash Capital successfully scaled high-quality inquiries.",
    impactCards: [
      { title: "Website Traffic", desc: "180% Increase in Website Traffic", icon: "trending" },
      { title: "Social Media", desc: "90% Boost in Social Media Engagement", icon: "users" },
      { title: "Cost Per Lead", desc: "60% Decrease in Cost Per Lead (CPL)", icon: "percent" },
      { title: "Lead Generation", desc: "140% Growth in High-Quality Lead Generation", icon: "trending" },
      { title: "Client Conversions", desc: "75% Increase in Client Conversions", icon: "shield" }
    ]
  },
  "ibt-behala": {
    logo: "/logos/13.jpg",
    title: "IBT Behala",
    subtitle: "Premier coaching institute for competitive exam success.",
    emoji: "🎓",
    description: "IBT Behala, a leading competitive exam coaching institute, partnered with Digital Edge 360 to enhance its digital presence, attract more students, and establish itself as a top choice for exam preparation. Through targeted digital marketing strategies, the institute saw significant growth in student inquiries, engagement, and admissions, ensuring a strong market position.",
    websiteUrl: "https://www.ibtindia.com/",
    image: "/brand-card-images/IBT-behala.jpg",
    stats: {
      estimatedTime: "30 Days",
      bugsFixing: "N/A",
      security: "99.9%",
      projectCompletion: "35 Days",
      trafficSpikes: "150%",
      trafficSpikesLabel: "Traffic Increase"
    },
    about: "IBT Behala is a well-known coaching institute that prepares students for government exams such as banking, SSC, railways, and other competitive tests. With expert faculty, structured courses, and a proven track record of success, IBT Behala has helped thousands of aspirants achieve their career goals. The institute focuses on delivering quality education, personalized guidance, and result-oriented training to ensure that students excel in their exams with confidence.",
    challenge: "Despite its strong curriculum and faculty, IBT Behala struggled with generating quality leads and reaching a wider audience. Heavy reliance on offline promotions limited its ability to attract students digitally. Additionally, high competition from other coaching institutes made it difficult to differentiate. The institute needed a data-driven digital marketing strategy to boost visibility, increase student enrollment, and build trust among aspirants seeking quality coaching.",
    workflowTitle: "Our Approach",
    workflow: [
      "Targeted Paid Campaigns: Ran Facebook and Google Ads to attract high-intent students.",
      "SEO & Content Marketing: Optimized website with exam-related blogs and ranking keywords.",
      "Social Media Strategy: Created engaging videos, success stories, and student testimonials.",
      "Lead Nurturing & Retargeting: Implemented WhatsApp, email, and call-based follow-ups for conversions."
    ],
    timeline: [
      { label: "Planning", day: "5 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "Strategy", day: "10 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Campaign Launch", day: "15 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Optimization", day: "25 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Scale & Retention", day: "35 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ],
    heroHeadingBlack: "Premier Coaching",
    heroHeadingGreen: "Competitive Success",
    industry: "Education & Coaching",
    projectType: "Performance Marketing & Brand Strategy",
    aboutHeadline: "Quality Education. Proven Exam Success.",
    challengeHeadline: "Shifting from Offline to Digital Enrollment",
    challengeBullets: [
      "Heavy reliance on traditional offline marketing channels",
      "High competition from established regional coaching centers",
      "Difficulties in generating qualified student leads digitally",
      "Need to build digital authority and trust among aspirants"
    ],
    timelineBanner: "Education Marketing Strategy Scaled in 35 Days",
    impactHeadline: "More Admissions. Scaled Enrollment.",
    impactDescription: "Through targeted paid advertising, high-quality content, and retargeting campaigns, IBT Behala successfully scaled enrollment inquiries.",
    impactCards: [
      { title: "Student Inquiries", desc: "200% Increase in qualified student inquiries", icon: "users" },
      { title: "Website Traffic", desc: "150% Growth in monthly site visitors", icon: "trending" },
      { title: "Social Media", desc: "120% Rise in organic engagement and reach", icon: "users" },
      { title: "Student Admissions", desc: "85% Increase in overall admissions", icon: "shield" },
      { title: "Cost Per Lead", desc: "70% Reduction in digital CPL", icon: "percent" }
    ]
  },
  "momentum": {
    logo: "/logos/momentum.jpg",
    title: "Momentum",
    subtitle: "Learn. Practice. Succeed. Your ultimate path to exam excellence!",
    emoji: "🎯",
    description: "Momentum is designed to be the ultimate learning companion for students striving for academic excellence. Our goal is to provide an all-in-one education platform that simplifies learning, enhances understanding, and helps students clear exams with confidence. With engaging content, seamless navigation, and interactive features, we aim to bridge the gap between students and quality education. Momentum ensures uninterrupted learning from the comfort of home, empowering students to achieve their dreams. Whether it’s concept clarity, mock tests, or live classes, our app provides everything needed to succeed—all in one place, making learning easier, smarter, and more effective.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=co.brown.qjdzl",
    image: "/brand-card-images/momentum.jpg",
    stats: {
      estimatedTime: "90 Days",
      bugsFixing: "1,032 +",
      security: "99.99%",
      projectCompletion: "73 Days",
      trafficSpikes: "300%",
      trafficSpikesLabel: "Traffic Spike"
    },
    about: "Momentum is more than just an education app—it’s a revolution in online learning! Designed for students across the country, we provide an engaging, interactive, and structured learning experience tailored for success. From topic-wise clarity to full-fledged exam preparation, Momentum ensures every learner stays ahead. Our intuitive user interface, expert-curated content, and real-time doubt-solving make studying stress-free and effective. Whether preparing for competitive exams or enhancing subject knowledge, Momentum makes learning accessible, convenient, and results-driven. With us, students don’t just study—they thrive, excel, and create a brighter future, all from the comfort of their homes.",
    challenge: "Developing a flawless online learning experience comes with its own challenges. Ensuring seamless live classes without third-party apps, maintaining high-quality video streaming, and integrating interactive tools like quizzes and doubt resolution in real time is crucial. Managing a vast amount of study material while keeping the platform lightweight and user-friendly is another key challenge. Additionally, providing a secure, ad-free learning environment without interruptions is essential to maintain focus. Momentum is committed to overcoming these hurdles, continuously optimizing our platform for speed, efficiency, and engagement—so students can experience a hassle-free, immersive learning journey from anywhere!",
    workflowTitle: "Development Stages",
    workflow: [
      "Conceptualization & Integration: Plan astrology services (chat, calls, video) and integrate APIs.",
      "UI/UX Design: Create an intuitive, user-friendly design focusing on personalization.",
      "Astrologer Matching Algorithm: Develop an algorithm to match users with astrologers.",
      "Testing & Launch: Conduct testing for reliability and privacy compliance before launch."
    ],
    timeline: [
      { label: "Planning", day: "10 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "25 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "60 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "67 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "73 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ],
    heroHeadingBlack: "Learn & Practice",
    heroHeadingGreen: "Succeed & Excel",
    industry: "EdTech & Mobile Learning",
    projectType: "Full-Stack App Development",
    aboutHeadline: "Your Ultimate Path to Exam Excellence",
    challengeHeadline: "Optimizing Live Streaming and Interactivity",
    challengeBullets: [
      "High-quality video streaming and interactive quizzes",
      "Lightweight platform hosting extensive study materials",
      "Secure, ad-free environment without interruptions"
    ],
    timelineBanner: "Education Platform Successfully Launched in 73 Days",
    impactHeadline: "Seamless Scale. Enhanced Engagement.",
    impactDescription: "Through optimized streaming architecture and robust backend design, Momentum successfully handled 300% traffic spikes without any downtime.",
    impactCards: [
      { title: "High-Quality Streaming", desc: "Seamless class delivery without lag", icon: "trending" },
      { title: "Traffic Spikes", desc: "300% traffic spikes handled without downtime", icon: "shield" },
      { title: "Reliability", desc: "99.99% security and reliability standards met", icon: "users" },
      { title: "Admissions & Scale", desc: "A robust learning ecosystem built efficiently", icon: "percent" }
    ]
  },
  "recipe-keeper": {
    logo: "/logos/recipe keper.jpg",
    title: "Recipe Keeper",
    subtitle: "Your Personal Digital Cookbook – Recipes, Planning & Shopping Made Easy!",
    emoji: "🍳",
    description: "Recipe Keeper aims to revolutionize how food lovers organize, plan, and share their favorite recipes! Whether you’re a home cook or a seasoned chef, this all-in-one app simplifies recipe storage, meal planning, and grocery shopping. From importing recipes from Instagram and TikTok to scanning handwritten notes and cookbooks, Recipe Keeper ensures every meal idea is at your fingertips. With seamless device synchronization, smart meal planning, and hands-free Alexa support, our goal is to make cooking fun, efficient, and stress-free. Say goodbye to scattered notes and forgotten recipes—Recipe Keeper is your personal digital cookbook, keeping every dish just a tap away!",
    websiteUrl: "https://apps.apple.com/us/app/recipe-keeper/id974683711",
    image: "/brand-card-images/recipee-keeper.jpg",
    stats: {
      estimatedTime: "90 Days",
      bugsFixing: "1,032 +",
      security: "99.99%",
      projectCompletion: "73 Days",
      trafficSpikes: "300%",
      trafficSpikesLabel: "Traffic Spike"
    },
    about: "Recipe Keeper is more than just an app—it’s your ultimate cooking companion, designed for passionate foodies and busy families. This feature-packed tool allows users to effortlessly collect, organize, and customize recipes from various sources, including the web, handwritten notes, and cookbooks. With built-in meal planning and shopping list integration, it transforms the way users approach home cooking. Whether you're meal prepping for the week, sharing a secret family recipe, or exploring new dishes, Recipe Keeper ensures every culinary experience is smooth and enjoyable. Accessible across multiple devices, it’s the smartest way to keep your kitchen organized and inspired!",
    challenge: "Developing a seamless and intuitive platform like Recipe Keeper comes with unique challenges. The biggest hurdle is ensuring smooth integration of diverse recipe sources—from scanning handwritten notes to importing directly from social media. Optimizing Optical Character Recognition (OCR) for handwritten and printed text requires precision to avoid errors. Another challenge is providing real-time synchronization across devices while maintaining data security. Creating an AI-powered smart meal planner that suggests meals based on preferences and available ingredients requires constant refinement. Additionally, developing a voice-enabled cooking assistant for hands-free kitchen use adds another layer of complexity. Overcoming these ensures Recipe Keeper stays the ultimate kitchen essential!",
    workflowTitle: "Development Stages",
    workflow: [
      "Recipe Integration & Import: Develop seamless importing from web, social media & OCR scanning.",
      "Smart Meal Planning: Implement AI-powered meal suggestions and dynamic grocery lists.",
      "Cross-Device Synchronization: Ensure real-time access across multiple platforms with secure cloud storage.",
      "Voice & Hands-Free Cooking: Integrate Alexa and voice commands for a smooth, touch-free experience."
    ],
    timeline: [
      { label: "Planning", day: "10 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "25 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "60 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "67 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "73 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ],
    heroHeadingBlack: "Your Personal",
    heroHeadingGreen: "Digital Cookbook",
    industry: "Food & Lifestyle",
    projectType: "Full-Stack App Development",
    aboutHeadline: "Recipes, Planning & Shopping Made Easy!",
    challengeHeadline: "OCR Accuracy & AI Meal Suggestions",
    challengeBullets: [
      "Importing from Instagram, TikTok, and web sources",
      "High-precision OCR scanning of handwritten recipes",
      "Real-time cross-device sync and smart meal algorithms",
      "Voice assistant integration for hands-free kitchen use"
    ],
    timelineBanner: "Digital Cookbook Platform Launched in 73 Days",
    impactHeadline: "Seamless Scale. Enhanced Cooking Experience.",
    impactDescription: "Through optimized OCR scanning technology, secure cloud synchronization, and Alexa voice integration, Recipe Keeper became the ultimate cooking companion.",
    impactCards: [
      { title: "Smart Imports", desc: "Scan and import recipes seamlessly", icon: "trending" },
      { title: "Traffic Spikes", desc: "300% traffic spikes handled without downtime", icon: "shield" },
      { title: "Cloud Sync", desc: "Real-time cross-device synchronization", icon: "users" },
      { title: "Voice Control", desc: "Hands-free cooking with smart voice assistance", icon: "percent" }
    ]
  },
  "hubfit": {
    logo: "/logos/hubfit.jpg",
    title: "HubFit",
    subtitle: "Your Fitness. Your Coach. Your Results – All in One App!",
    emoji: "💪",
    description: "HubFit is designed to revolutionize online coaching by providing a seamless platform for fitness enthusiasts and coaches to connect. Our goal is to simplify progress tracking, nutrition monitoring, and personalized training in one powerful app. With features like check-ins, macro tracking, workout history, and wearable integration, HubFit ensures that users stay accountable, motivated, and on track. Whether you’re a fitness coach managing multiple clients or an individual striving for peak performance, HubFit streamlines the process, making fitness management effortless. The ultimate aim is to empower users with data-driven insights, real-time communication, and a structured approach to achieving their goals.",
    image: "/brand-card-images/hubfit.jpg",
    stats: {
      estimatedTime: "30 Days",
      bugsFixing: "N/A",
      security: "99.9%",
      projectCompletion: "35 Days",
      trafficSpikes: "305%",
      trafficSpikesLabel: "Users Growth"
    },
    about: "HubFit is more than just a coaching app—it’s your ultimate fitness companion. Designed for athletes, trainers, and fitness enthusiasts, HubFit bridges the gap between structured training and real-time progress tracking. The app offers a fully immersive experience, combining workout logging, macro tracking, and one-on-one coaching to optimize results. With intuitive features and seamless device integration, HubFit empowers users to take control of their fitness journey. Whether at home, in the gym, or on the go, HubFit is designed to adapt to your needs, providing an all-in-one solution for a smarter, data-driven fitness transformation.",
    challenge: "Building HubFit comes with unique challenges, including ensuring real-time synchronization of fitness data across multiple devices while maintaining a smooth, lag-free experience. Nutrition tracking must be accurate and customizable, accommodating different dietary needs. The app must support high-quality image uploads for progress tracking without compromising performance. Additionally, secure and responsive one-on-one messaging is critical for seamless communication between coaches and clients. Integrating wearables with multiple platforms while ensuring compatibility and accurate data syncing is another challenge. HubFit aims to overcome these hurdles by offering a robust, scalable, and user-friendly solution tailored for every fitness journey.",
    workflowTitle: "Development Stages",
    workflow: [
      "Core Fitness Features: Implement workout tracking, macro monitoring, and check-in submissions.",
      "Data Synchronization: Integrate with wearables and ensure real-time data syncing.",
      "Interactive Coaching: Develop secure messaging and live progress tracking for users.",
      "Performance Optimization: Enhance app speed, scalability, and personalized recommendations using AI."
    ],
    timeline: [
      { label: "Planning", day: "10 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "20 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "30 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "33 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "35 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ],
    heroHeadingBlack: "Your Fitness",
    heroHeadingGreen: "Your Coach",
    industry: "Health & Fitness",
    projectType: "Full-Stack App Development",
    aboutHeadline: "Your Fitness. Your Coach. Your Results.",
    challengeHeadline: "Wearables Sync & Real-Time Macro Tracking",
    challengeBullets: [
      "Real-time synchronization across devices and wearables",
      "Accurate and highly customizable nutrition tracking",
      "High-quality progress image uploads without lag",
      "Secure and responsive client-coach messaging"
    ],
    timelineBanner: "Fitness Coaching Platform Successfully Launched in 35 Days",
    impactHeadline: "Substantial User Acquisition. Strong Engagement.",
    impactDescription: "Through performance optimization and strategic user acquisition, HubFit achieved notable milestones in first-time user growth and search performance.",
    impactCards: [
      { title: "Search Volume", desc: "274% increase in search volume", icon: "trending" },
      { title: "Brand Searches", desc: "305% surge in brand-specific searches", icon: "users" },
      { title: "Organic Growth", desc: "305% significant organic growth", icon: "shield" },
      { title: "Direct Traffic", desc: "305% rise in direct website traffic", icon: "percent" },
      { title: "First-Time Buyers", desc: "305% growth in first-time buyers", icon: "users" }
    ]
  },
  "publix": {
    logo: "/logos/publix.jpg",
    title: "Publix",
    subtitle: "Style. Book. Grow. The Smartest Way to Run Your Salon!",
    emoji: "🛒",
    description: "Publix,, powered by Instacart, is designed to provide a seamless grocery shopping experience for busy customers. Our goal is to offer fast, reliable delivery and curbside services that bring the convenience of Publix right to your doorstep or car. By ensuring quality control, personalized service, and fast delivery times, we aim to enhance your shopping experience. Whether you need groceries in an hour or prefer curbside pickup, Publix Delivery is here to serve you. With easy reordering, real-time shopper communication, and weekly savings, Publix is making grocery shopping easier and faster than ever before.",
    image: "/brand-card-images/publix.jpg",
    stats: {
      estimatedTime: "90 Days",
      bugsFixing: "1,032 +",
      security: "99.99%",
      projectCompletion: "73 Days",
      trafficSpikes: "300%",
      trafficSpikesLabel: "Traffic Spike"
    },
    about: "Publix, powered by Instacart, is your ultimate grocery shopping solution, offering the best of both worlds: Publix’s high-quality products delivered straight to your door, or curbside pickup at your convenience. With same-day deliveries as fast as an hour, you can get fresh produce, household essentials, and more without leaving home. Publix Delivery takes care of the shopping for you, while Instacart ensures quality control with real-time shopper updates. With a user-friendly app, weekly sales, and easy reordering, Publix Delivery is a must-have for anyone looking to simplify their grocery shopping.",
    challenge: "The challenge with developing Publix powered by Instacart lies in ensuring seamless integration between Publix’s inventory and Instacart’s delivery system. The app must maintain real-time updates on stock availability, offer high-quality control during shopping (checking expiration dates, freshness), and handle logistics to ensure timely deliveries. Additionally, the system must be able to scale across multiple regions with varying delivery times, manage real-time customer support, and provide a flawless curbside pickup experience. Creating a smooth user experience, while keeping quality and convenience at the forefront, is essential for success.",
    workflowTitle: "Development Stages",
    workflow: [
      "User Account & Shopping Integration: Connect user accounts to Instacart for seamless shopping and delivery.",
      "Quality Control & Shopper Features: Develop tools for real-time shopper updates and quality monitoring.",
      "Delivery & Curbside Optimization: Enhance delivery time algorithms and curbside pickup experience.",
      "Reordering & Personalized Service: Implement personalized item recommendations and reordering for convenience."
    ],
    timeline: [
      { label: "Planning", day: "10 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "25 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "60 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "67 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "73 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ],
    heroHeadingBlack: "Publix Grocery",
    heroHeadingGreen: "Instacart Delivery",
    industry: "Retail & Grocery",
    projectType: "Full-Stack App Development",
    aboutHeadline: "Grocery shopping simplified and delivered.",
    challengeHeadline: "Real-Time Inventory & Curbside Logistics",
    challengeBullets: [
      "Seamless inventory integration with Instacart backend",
      "Real-time updates on stock level and product freshness",
      "Curbside pickup optimization across multiple regions",
      "Shopper communication tools and error-free receipt logs"
    ],
    timelineBanner: "Grocery Delivery Platform Successfully Scaled in 73 Days",
    impactHeadline: "Seamless Scale. Zero Downtime.",
    impactDescription: "Through cloud architecture design and optimized shopping lists sync, Publix handled 300% traffic spikes during holiday rushes without any service degradation.",
    impactCards: [
      { title: "Stock Sync", desc: "Real-time inventory updates for users", icon: "trending" },
      { title: "Traffic Spikes", desc: "300% traffic spike handled without downtime", icon: "shield" },
      { title: "Order Delivery", desc: "Fast same-day grocery delivery optimized", icon: "users" },
      { title: "Shopper Updates", desc: "Real-time shopper chat and updates tools", icon: "percent" }
    ]
  },
  "ring-my-stylist": {
    logo: "/logos/ring-my-list.jpg",
    title: "Ring My Stylist",
    subtitle: "Style. Book. Grow. The Smartest Way to Run Your Salon!",
    emoji: "💇‍♀️",
    description: "Ring My Stylist is designed to empower beauty professionals by streamlining appointment booking, client management, and business growth. Our goal is to simplify scheduling, reduce no-shows, and enhance client communication—all within one intuitive platform. By offering online payments, a customizable service menu, and a seamless booking experience, we help stylists focus on what they do best: creating beauty. With a user-friendly interface and unlimited client database, Ring My Stylist ensures that professionals can manage their business effortlessly. Whether you’re a hairstylist, makeup artist, or nail technician, our app is your ultimate tool for salon success.",
    image: "/brand-card-images/rign-my-list.jpg",
    stats: {
      estimatedTime: "90 Days",
      bugsFixing: "1,032 +",
      security: "99.99%",
      projectCompletion: "73 Days",
      trafficSpikes: "300%",
      trafficSpikesLabel: "Traffic Spike"
    },
    about: "Ring My Stylist is the ultimate booking app crafted specifically for beauty professionals. It offers a hassle-free way to manage appointments, track client history, and boost customer engagement. Say goodbye to scheduling headaches and hello to an organized, profitable salon business. With features like online payments, service customization, and automatic reminders, this app ensures a flawless experience for both stylists and clients. Available on smartphones, tablets, and laptops, Ring My Stylist transforms the way beauty professionals operate—making every booking effortless and every interaction meaningful. Start your 7-day free trial today and take control of your business!",
    challenge: "Developing Ring My Stylist comes with exciting challenges, including ensuring real-time appointment synchronization across multiple devices. A seamless booking flow must be maintained, reducing cancellations and last-minute no-shows. Secure online payments need to be integrated smoothly while ensuring stylist flexibility with pricing and availability. Additionally, building a user-friendly experience that caters to both professionals and clients without complexity is a key focus. As the app grows, scalability and stability remain top priorities, allowing thousands of stylists to manage their businesses effortlessly while keeping client data secure and accessible anytime, anywhere.",
    workflowTitle: "Development Stages",
    workflow: [
      "Core Booking System: Implement seamless appointment scheduling, service listings, and client database.",
      "Payment & Business Tools: Enable online payments, automated reminders, and revenue tracking.",
      "Client Engagement Features: Add direct messaging, reviews, and loyalty rewards.",
      "AI & Scalability Enhancements: Introduce smart recommendations, business insights, and multi-device syncing."
    ],
    timeline: [
      { label: "Planning", day: "10 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "25 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "60 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "67 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "73 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ],
    heroHeadingBlack: "Style & Book",
    heroHeadingGreen: "Grow Your Salon",
    industry: "Beauty & Wellness",
    projectType: "Full-Stack App Development",
    aboutHeadline: "The Smartest Way to Run Your Salon!",
    challengeHeadline: "Real-Time Sync & Booking Flow Optimization",
    challengeBullets: [
      "Real-time appointment sync across devices",
      "Interactive customized booking workflow",
      "Secure payments and stylist pricing flexibility",
      "Reminders system to reduce no-show rates"
    ],
    timelineBanner: "Salon Booking Platform Successfully Launched in 73 Days",
    impactHeadline: "Seamless Bookings. Zero Downtime.",
    impactDescription: "Through cloud architecture design and optimized booking database queries, Ring My Stylist handled 300% traffic spikes during seasonal rushes without any service degradation.",
    impactCards: [
      { title: "Smart Bookings", desc: "Interactive customized booking workflow built", icon: "trending" },
      { title: "Traffic Spikes", desc: "300% traffic spike handled without downtime", icon: "shield" },
      { title: "Service Sync", desc: "Real-time calendar synchronization for clients", icon: "users" },
      { title: "Salon Payments", desc: "Secure multi-gateway payment processing", icon: "percent" }
    ]
  },
  "edgeringtone": {
    logo: "/logos/edgering.jpg",
    title: "Edge Ringtones",
    subtitle: "Elevate Your Style with Personalized, Premium Ringtones – Effortless & Seamless.",
    emoji: "🎵",
    description: "Our custom ringtone app combines a sleek, premium UI with a vast collection of high-quality ringtones for every taste. Offering seamless customization for calls, notifications, and alarms, it ensures a smooth and engaging experience. With frequent updates and compatibility across devices, this app keeps you connected with fresh sounds and personalized options at your fingertips.",
    image: "/brand-card-images/Edge-ring.jpg",
    stats: {
      estimatedTime: "45 Days",
      bugsFixing: "491 +",
      security: "99.99%",
      projectCompletion: "40 Days",
      trafficSpikes: "536%",
      trafficSpikesLabel: "Traffic Spike"
    },
    about: "The custom ringtone app is designed to deliver a premium, user-centric experience with a sleek, intuitive UI. It offers a diverse selection of high-quality ringtones, allowing users to personalize their devices with custom sounds for calls, notifications, and alarms. The app ensures seamless performance with fast downloads and smooth functionality, while regular updates keep the content fresh. Compatible across a variety of devices, this app delivers a dynamic and engaging experience, offering users the ability to tailor their mobile sound experience to suit their preferences.",
    challenge: "The challenge was to offer a large selection of high-quality ringtones while maintaining optimal performance. To address this, we implemented a custom-built CDN for fast and reliable content delivery. Paired with advanced caching techniques, optimized download speeds, and a refined UI framework, we ensured smooth, efficient access to personalized ringtones, providing users with an exceptional experience across all devices without compromising on speed or quality.",
    workflowTitle: "Development Stages",
    workflow: [
      "Requirement Analysis: Collaborate with clients to define clear objectives and key features.",
      "UI/UX Design: Develop intuitive, aesthetically pleasing interfaces focused on user experience.",
      "App Development: Utilize advanced technologies to build robust, feature-rich applications.",
      "Quality Assurance & Launch: Conduct thorough testing to ensure performance, then deploy for optimal user access."
    ],
    timeline: [
      { label: "Planning", day: "7 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "10 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "33 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "38 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "40 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ],
    heroHeadingBlack: "Edge Ringtones",
    heroHeadingGreen: "Premium Custom Sounds",
    industry: "Entertainment & Mobile Apps",
    projectType: "Full-Stack App Development",
    aboutHeadline: "Personalized Sound Experiences",
    challengeHeadline: "CDN Scaling & High Fidelity Audio Delivery",
    challengeBullets: [
      "High-quality audio asset compression & streaming",
      "Custom CDN infrastructure for global downloads",
      "Real-time ringtone cropper and editor functionality",
      "Optimal UI performance with extensive collection library"
    ],
    timelineBanner: "Ringtone Customization Platform Launched in 40 Days",
    impactHeadline: "Seamless Scale. Enhanced Engagement.",
    impactDescription: "Through custom CDN architecture and optimized sound streaming delivery, Edge Ringtones successfully handled 536% traffic spikes without any quality degradation.",
    impactCards: [
      { title: "Asset Delivery", desc: "Custom-built CDN delivers sounds instantly", icon: "trending" },
      { title: "Traffic Spikes", desc: "536% traffic spike handled without downtime", icon: "shield" },
      { title: "Downloads Sync", desc: "Optimized speeds for simultaneous downloads", icon: "users" },
      { title: "Quality Assurance", desc: "Sleek and robust UI running smoothly", icon: "percent" }
    ]
  },
  "royal-enfield": {
    logo: "/logos/royal enfiled.jpg",
    image: "/brand-card-images/ROYAL-ENFIELD.jpg",
    title: "Royal Enfield",
    subtitle: "Royal Enfield is India’s No.1 retro and adventure motorcycle company",
    emoji: "🏍️",
    description: "Royal Enfield in the Kolkata region across their dealership got an unprecedented growth in showroom footfall of 250%. Their sales figure across dealerships in Kolkata and neighbouring regions grew by 60% in a single quarter. These impressive statistics is a testimony to DigitalEdge 360’s Videography & Photography teams quality content on showroom video reels including delivery reels and their bike accessories and merchandise.",
    stats: {
      estimatedTime: "30 Days",
      bugsFixing: "N/A",
      security: "N/A",
      projectCompletion: "30 Days",
      trafficSpikes: "250%",
      trafficSpikesLabel: "Footfall Growth"
    },
    customStats: [
      { label: "growth in showroom footfall", val: "250%" },
      { label: "growth in vehicle sales", val: "60%" },
      { label: "growth in merchandise sales", val: "40%" },
      { label: "growth in brand visibility", val: "80%" },
      { label: "growth in business revenue for all dealerships", val: "30%" }
    ],
    about: "Royal Enfield is renowned for its iconic, timeless design and robust build quality. It offers a unique riding experience with its thumping engines, blending vintage charm with modern reliability, making it a beloved brand among motorcycle enthusiasts worldwide. Its motorcycles offer a distinctive, rugged character, combining power, reliability, and a sense of adventure. The brand's strong community and iconic designs inspire riders globally.",
    challenge: "The Royal Enfield dealerships across the Kolkata region and sub area were finding it very difficult to get decent footfalls. Low turn out at their sales outlet resulted in less taste rides, product interactions of potential customers. Digital Edge 360 was appointed in order to provide the dealerships of Royal Enfield in Kolkata with high quality video and photo content to post on their social media handles to boost customer traffic at the dealerships. The talented branding team of DE360 did not disappoint on this front and provided high quality video and photos of the showrooms and products resulting in huge success.",
    workflowTitle: "Our Approach",
    workflow: [
      "Royal Enfield dealers got steady increase of footfalls",
      "There were more test rides of their products",
      "Better photo and video on their social media elevated brand recall and reach",
      "Strategic communication with the help of better video content resulted in more sales"
    ],
    timeline: [
      { label: "Planning", day: "5 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "Pre-Production", day: "10 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Production & Shoot", day: "20 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Post-Production", day: "28 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Delivery & Live", day: "30 Day", color: "border-emerald-500 bg-emerald-50 text-emerald-600" }
    ],
    heroHeadingBlack: "Royal Enfield -",
    heroHeadingGreen: "The Indo British Legend"
  },
  "goel-forgings": {
    logo: "/logos/19.jpg",
    image: "/brand-card-images/goel-forgings.jpg",
    title: "Goel Forgings",
    subtitle: "Goel Forgings – Forging Excellence in Iron and Steel",
    emoji: "⚙️",
    description: "Goel Forgings is a renowned manufacturer of high-quality iron and steel products, serving various industries including automotive, construction, and infrastructure. With years of expertise in the field, the company is committed to producing durable and reliable metal products that meet the highest standards of quality. Despite their technical proficiency and excellent product range, Goel Forgings was facing challenges in effectively showcasing their manufacturing capabilities and products to a broader audience.",
    stats: {
      estimatedTime: "25 Days",
      bugsFixing: "N/A",
      security: "N/A",
      projectCompletion: "25 Days",
      trafficSpikes: "150%",
      trafficSpikesLabel: "B2B Inquiries Growth"
    },
    customStats: [
      { label: "Increase in B2B Inquiries after the industrial photo and video shoot", val: "150%" },
      { label: "increase in client inquiries and product interest within the first month", val: "10%" },
      { label: "Growth in Brochure Downloads", val: "60%" },
      { label: "increase in website traffic", val: "80%" },
      { label: "Boost in Social Media Engagement", val: "50%" }
    ],
    about: "Goel Forgings has established itself as a key player in the iron and steel industry, known for its exceptional products and commitment to precision. With state-of-the-art technology and a highly skilled workforce, the company produces a wide range of forged and machined metal products. Catering to industries such as automotive, manufacturing, and construction. Goel Forgings prioritizes quality, innovation, and customer satisfaction, ensuring that each product meets the rigorous standards of reliability and durability that their clients demand.",
    challenge: "Although Goel Forgings produced high-quality industrial products, they struggled to effectively communicate their manufacturing capabilities and showcase the full potential of their offerings to the market. Their marketing materials lacked the professional appeal necessary to capture the attention of potential clients, and their website did not adequately highlight the scale and quality of their operations. The company needed a visual overhaul to properly convey the strength, precision, and reliability of their iron and steel products, which were integral to their clients' success. To enhance their brand visibility and attract more clients, a comprehensive content strategy was implemented, focusing on industrial photography and videography, along with a redesigned brochure to highlight their offerings.",
    workflowTitle: "Our Approach",
    workflow: [
      "Introduction of better visual content led to enhanced brand awareness across social media and professional B2B Media like LinkedIn",
      "Elevated brand recall with the new designed product brochure among existing clients",
      "Enhancing the visual appeal of their products by posting high quality images on their Google Business Profile and their websites making it more appealing",
      "High quality output with world class video reels attracted new clients"
    ],
    timeline: [
      { label: "Planning", day: "4 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "Pre-Production", day: "8 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Production & Shoot", day: "15 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Post-Production", day: "22 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Delivery & Live", day: "25 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ],
    heroHeadingBlack: "Goel Forgings -",
    heroHeadingGreen: "A Renowned Steel Brand"
  },
  "gsi": {
    logo: "/logos/gis.jpg",
    image: "/brand-card-images/GSI.jpg",
    title: "Geological Survey of India",
    subtitle: "The Geological Survey of India (GSI) conducts geological mapping, mineral exploration, and natural hazard studies in India.",
    emoji: "🗺️",
    description: "GSI has seen a 30% increase in public engagement and a 20% rise in viewership of their educational content. The photography and videography team played a key role in showcasing their geological studies through impactful videos, enhancing understanding and visibility. These visual representations have contributed to a 25% in online interactions, effectively communicating complex geological research to a broader audience while reinforcing GSI’s brand as a leader in geological exploration and education.",
    stats: {
      estimatedTime: "7 Days",
      bugsFixing: "N/A",
      security: "N/A",
      projectCompletion: "7 Days",
      trafficSpikes: "30%",
      trafficSpikesLabel: "Public Engagement Growth"
    },
    customStats: [
      { label: "increase in public engagement", val: "30%" },
      { label: "rise in viewership of their educational content", val: "20%" },
      { label: "growth in online interactions", val: "25%" },
      { label: "boost in brand visibility through media", val: "15%" },
      { label: "improvement in viewership on their Youtube channel", val: "10%" }
    ],
    about: "The Geological Survey of India (GSI) is an organization under the Ministry of Mines of the Government of India, which is responsible for conducting geological surveys and studies in India. It was established in 1851, and its primary mission is to explore, map, and assess the mineral, water, and energy resources of the country. The GSI plays a key role in understanding the geological structure, mineral wealth, and natural hazards in India.",
    challenge: "There were 3 sites of GSI which required professional footage and educational video content. These 3 locations were - The Sundarban, Amkhoi And Gangani. All of these 3 geological sites are located in West Bengal, India. There was also no drone footage of these Geological sites. The educational content was required by the Ministry of Mines within 2 weeks. The videography and photography team of Digital Edge 360 successfully captured high quality videos including drone footage within a record 7 days and presented it to the top officials of GSI. It was a record feat considering there was video editing and voice over integration that had to be done for all the videos.",
    workflowTitle: "Our Approach",
    workflow: [
      "A highly planned and structured approach for the video shoot.",
      "High quality output with world class video editing and voice over.",
      "Enhancing education content with high-quality photos and videos on GSI’s media network.",
      "Capturing locations with drone footage which was previously not available."
    ],
    timeline: [
      { label: "Planning", day: "1 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "Location Prep", day: "2 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Production & Drone Shoots", day: "4 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Voice-over & Editing", day: "6 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Delivery to Officials", day: "7 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ],
    heroHeadingBlack: "Geological Survey of India -",
    heroHeadingGreen: "Geological Exploration"
  },
  "imu": {
    logo: "/logos/37.jpg",
    image: "/brand-card-images/IMU.jpg",
    title: "Indian Maritime University",
    subtitle: "Indian Maritime University – The Gateway to Maritime Excellence",
    emoji: "⚓",
    description: "IMU boasts an impressive placement rate of 70%, one of the best in India, reflecting its strong industry connections and the employability of its graduates. The Kolkata campus is equipped with modern classrooms, a well-stocked library, computer laboratories, an auditorium with a seating capacity of 1,000, and model-making workshops, providing a conducive environment for learning and research. IMU Kolkata offers residential facilities with hostels for both boys and girls, complete with study rooms, messes, and recreational areas, ensuring a holistic living and learning experience.",
    stats: {
      estimatedTime: "15 Days",
      bugsFixing: "N/A",
      security: "N/A",
      projectCompletion: "15 Days",
      trafficSpikes: "100%",
      trafficSpikesLabel: "Campus Viewership"
    },
    customStats: [
      { label: "viewership from all IMU Campus for the passing of parade ceremony 2024", val: "100%" },
      { label: "viewership of their Live Streaming of the entire ceremony", val: "89%" },
      { label: "growth in interaction and messages by students during the streaming", val: "25%" },
      { label: "boost in brand visibility through Social Media Posts", val: "15%" },
      { label: "improvement in overall viewership on their Youtube channel", val: "10%" }
    ],
    about: "Indian Maritime University is renowned for its commitment to excellence in maritime education and research. With a focus on discipline, dedication, and integrity, IMU offers a unique learning experience that blends theoretical knowledge with practical skills, preparing students for successful careers in the maritime industry. The university's strong industry ties and comprehensive programs make it a preferred choice for aspiring maritime professionals.",
    challenge: "The IMU Kolkata campus faced the challenge of streaming live videos of their annual Passing of Parade ceremony. The streaming and capturing of Drone footage of this grand event was extremely crucial as the Governor of West Bengal was also present during the special event. The talented branding team of DE360 provided a high quality Live Streaming of Drone footage and video and photos of the complete ceremony with utmost precision and delivered exceeded expectations results.",
    workflowTitle: "Our Approach",
    workflow: [
      "A highly planned and structured approach for Live Streaming and shoot",
      "High Quality Drone Footages covering complete ceremony in full details",
      "Enhancing the image of the deemed University by showcasing all footage on their social media platforms",
      "World class video reels from the event to be used in their media"
    ],
    timeline: [
      { label: "Planning & Prep", day: "3 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "Technical Setup", day: "7 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Dry Runs & Testing", day: "12 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Live Broadcast", day: "14 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Post-Event Delivery", day: "15 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ],
    heroHeadingBlack: "Indian Maritime University -",
    heroHeadingGreen: "Gateway to Maritime Excellence"
  },
  "the-lighter-side": {
    logo: "/logos/4.jpg",
    image: "/brand-card-images/THE-LIGHTER-SIDE.jpg",
    title: "The Lighter Side",
    subtitle: "The Lighter Side – Local Cafe offering Global Cuisine",
    emoji: "💡",
    description: "The Lighter Side is an exclusive café in Kolkata, offering a unique dining experience with a diverse and expansive international menu. Known for its warm ambiance and exceptional food, the café has quickly become a favorite among locals and visitors alike. From gourmet coffees to global delicacies, The Lighter Side brings a fusion of flavors to the city. However, despite the café’s exceptional offerings, they were struggling to attract a consistent flow of customers and gain the visibility they needed. That was until they partnered with Digital Edge 360 with a photography and videography team for a complete visual transformation of their menu and a strategic approach to their social media presence.",
    stats: {
      estimatedTime: "20 Days",
      bugsFixing: "N/A",
      security: "N/A",
      projectCompletion: "20 Days",
      trafficSpikes: "120%",
      trafficSpikesLabel: "Footfall Growth"
    },
    customStats: [
      { label: "Increase in Footfall: After the photoshoot and videography of their menu", val: "120%" },
      { label: "increase in repeat visits", val: "20%" },
      { label: "Growth in Social Media Engagement", val: "100%" },
      { label: "Growth in Online Orders", val: "150%" },
      { label: "increase in business revenue", val: "40%" }
    ],
    about: "The Lighter Side is a culinary destination offering a vast selection of international cuisine that caters to a variety of tastes. The café is designed to provide not only a delightful dining experience but also a cozy, aesthetically pleasing environment for friends, families, and solo visitors. With an emphasis on quality ingredients and expertly crafted dishes, The Lighter Side has earned a reputation for delivering delicious food with a touch of global flair. Through consistent, high-quality content management and strategic posting.",
    challenge: "When The Lighter Side first opened its doors, the café faced the challenge of attracting a steady stream of customers. Despite offering a remarkable menu with international flavors, their digital presence was lacking, and their food wasn’t being showcased to its full potential. With engaging photos or videos that captured the essence of their dishes, the café finally showed its competitive market. The brand with the help of Digital Edge 360 Videography crew finally showcased high-quality content to highlight the visual appeal of their menu, paired with a strong social media strategy to reach a much larger audience leading to growth in their revenue.",
    workflowTitle: "Our Approach",
    workflow: [
      "A highly planned and structured approach for shoot of their main food items.",
      "Witnessed a 400% growth in social media engagement, with customers actively interacting with their posts.",
      "Enhancing the cafes visual appeal by posting high quality images on their Google Business Profile.",
      "High quality output with world class video reels attracting more footfalls."
    ],
    timeline: [
      { label: "Planning", day: "3 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "Food Styling", day: "6 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Menu Shoot", day: "12 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Post-Production", day: "18 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Campaign Launch", day: "20 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ],
    heroHeadingBlack: "The Lighter Side -",
    heroHeadingGreen: "A Global Culinary Experience"
  },
  "brand-leather": {
    logo: "/logos/26.jpg",
    image: "/brand-card-images/brand-leather.jpg",
    title: "Brand Leather",
    subtitle: "Brand Leather- Premium Leather Products at affordable prices",
    emoji: "🎒",
    description: "Brand Leather a 25 year old premier leather manufacturing company has built its reputation on providing high-quality, stylish leather products for the modern individual. Each product is a testament to the brand’s commitment to quality, craftsmanship, and elegance.",
    stats: {
      estimatedTime: "22 Days",
      bugsFixing: "N/A",
      security: "N/A",
      projectCompletion: "22 Days",
      trafficSpikes: "150%",
      trafficSpikesLabel: "Online Sales Growth"
    },
    customStats: [
      { label: "increase in online sales within 3 months", val: "150%" },
      { label: "Growth in Social Media Engagement", val: "200%" },
      { label: "Increase in Website Traffic", val: "120%" },
      { label: "Growth in Customer Retention", val: "50%" },
      { label: "increase in repeat buyers", val: "50%" }
    ],
    about: "Brand Leather is one of India’s premier leather brands, known for its exceptional craftsmanship and elegant designs. Their products, ranging from wallets to bags and jackets, are crafted from the finest leather and tailored to perfection. Despite its longstanding reputation for quality, the brand was facing challenges in achieving the sales figures they aimed for. With minimal digital engagement, their sales were stagnant, and customer traffic was low. To help elevate the brand's presence and boost sales, a comprehensive digital strategy was implemented, focusing on high-quality content creation and a modern, user-friendly website.",
    challenge: "Despite offering premium leather products, Brand Leather was facing stagnant sales and low online traffic. They struggled with inadequate digital content, a poorly designed website, and minimal engagement on social media. This made it difficult for them to connect with new customers or build brand loyalty. With their physical sales channels also underperforming, Brand Leather needed a significant boost in their digital strategy to increase visibility, engage their target audience, and drive conversions.Brand Leather’s product images and videos were given a professional upgrade, showcasing the high quality and intricate detailing of their leather products. These visuals were optimized for use on social media platforms and their website.The brand's social media presence was enhanced with eye-catching product visuals, behind-the-scenes videos, and customer testimonials, creating a connection with potential buyers and encouraging user interaction.",
    workflowTitle: "Our Approach",
    workflow: [
      "Introduction of better visual content led to improved customer retention and surge in online sales by 60%",
      "Witnessed a 130% growth in social media engagement, with customers actively interacting with their posts",
      "Enhancing the visual appeal of their products by posting high quality images on their Google Business Profile",
      "High quality output with world class video reels attracting new customers"
    ],
    timeline: [
      { label: "Planning", day: "3 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "Product Styling", day: "6 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Portfolio Shoots", day: "14 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Visual Optimization", day: "19 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Campaign Launch", day: "22 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ],
    heroHeadingBlack: "Brand Leather -",
    heroHeadingGreen: "Tradition of Craftsmanship"
  },
  "kayra": {
    logo: "/logos/kayrah.jpg",
    image: "/brand-card-images/KAYRAH.jpg",
    title: "Kayra",
    subtitle: "Emerging jewelry e-commerce brand",
    emoji: "👗",
    description: "Kayrah offers an exquisite collection of fine jewelry pieces, from classic designs to contemporary styles. Known for their attention to detail and high-quality craftsmanship, Kayrah provides a unique shopping experience for customers looking to invest in elegant, timeless pieces. Despite offering exceptional products, the brand struggled to make a significant mark in the competitive e-commerce space due to lackluster product photography and limited online engagement.",
    stats: {
      estimatedTime: "20 Days",
      bugsFixing: "N/A",
      security: "N/A",
      projectCompletion: "20 Days",
      trafficSpikes: "70%",
      trafficSpikesLabel: "Product Sales Growth"
    },
    customStats: [
      { label: "Growth in Product Sales", val: "70%" },
      { label: "Increase in Engagement on Social Media", val: "40%" },
      { label: "increase in engagement on Kayrah’s social media platforms, leading to more brand awareness", val: "60%" },
      { label: "Improvement in Conversion Rates With high-quality images", val: "50%" },
      { label: "Growth in business revenue", val: "40%" }
    ],
    about: "Kayrah is a jewelry brand committed to delivering elegant, finely crafted pieces that appeal to modern sensibilities while maintaining a timeless allure. Whether it’s for a special occasion or an everyday statement, Kayrah’s designs embody sophistication, luxury, and craftsmanship. The brand takes pride in using high-quality materials, ensuring that each piece is made to last. With a focus on customer satisfaction and attention to detail, Kayrah aims to be a trusted name in the jewelry industry.",
    challenge: "Despite offering high-quality jewelry Kayrah faced difficulty in standing out in the competitive online marketplace. Their previous product images did not capture the true elegance and craftsmanship of their jewelry, leading to low customer engagement and subpar sales figures. In addition, their website lacked a cohesive visual style that could connect with their target audience and elevate the overall brand experience. The super talented branding team of Digital Edge 360 did a complete make over of the brands visuals content and high quality photographs and video which the brand thoroughly deserved.",
    workflowTitle: "Our Approach",
    workflow: [
      "A product-focused photoshoot was organized, utilizing a clean, white background to highlight the intricate details of each piece of jewelry for sales in their ecommerce platforms",
      "Creating an emotional connection with potential customers across social media",
      "Enhancing the visual appeal of their products by posting high quality images on their Google Business Profile",
      "World class visuals for their Youtube channel"
    ],
    timeline: [
      { label: "Planning", day: "3 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "Creative Styling", day: "6 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Jewelry Photography", day: "12 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Visual Retouching", day: "17 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Campaign Launch", day: "20 Day", color: "border-emerald-500 bg-emerald-55 text-emerald-600" }
    ],
    heroHeadingBlack: "Kayra -",
    heroHeadingGreen: "Elevating Elegance"
  }
};




