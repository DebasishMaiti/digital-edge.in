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
}

export const storiesData: Record<string, SuccessStoryData> = {
  "aarogya-vidhaan": {
    title: "Aarogya Vidhaan",
    subtitle: "Simplifying Ayurveda, Empowering Wellness",
    emoji: "☀️",
    description: "Aarogya Vidhaan is a holistic digital health platform bringing authentic Ayurvedic consultations and wellness products to users worldwide.",
    stats: {
      estimatedTime: "45 Days",
      bugsFixing: "240 +",
      security: "99.9%",
      projectCompletion: "52 Days",
      trafficSpikes: "180%"
    },
    about: "Aarogya Vidhaan connects certified Ayurvedic doctors with users seeking natural healing remedies. By digitizing pulse readings and personalized herb formulations, they bring ancient wisdom into modern lifestyles safely and seamlessly.",
    challenge: "Scaling real-time video consultations during peak morning hours while syncing multi-vendor inventory updates was a primary operational obstacle. Securing private health records according to wellness data compliance was also key.",
    workflow: [
      "Designed compliant consult booking flow",
      "Created digital wellness dashboard interface",
      "Integrated secure WebRTC video sessions",
      "Built multi-warehouse herbal inventory synchronization"
    ],
    timeline: [
      { label: "Planning", day: "10 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "20 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "42 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "48 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "52 Day", color: "border-emerald-500 bg-emerald-50 text-emerald-600" }
    ]
  },
  "dooli": {
    title: "Dooli",
    subtitle: "Driven by Comfort, Powered by Trust",
    emoji: "🚗",
    description: "Dooli is a versatile ride-hailing app that offers cab services, parcel delivery, and JCB rentals. Despite its innovation, Dooli experiences challenges like ensuring reliable cab availability, streamlining parcel logistics, and managing JCB service demands. Overcoming these difficulties requires efficient operations, driver coordination, and customer satisfaction to establish a seamless mobility experience.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.dooli.user",
    stats: {
      estimatedTime: "60 Days",
      bugsFixing: "769 +",
      security: "99.99%",
      projectCompletion: "67 Days",
      trafficSpikes: "250%"
    },
    about: "Dooli is a smart, reliable ride-hailing app designed for seamless and affordable travel. Whether you need a quick ride to work, a late-night pickup, or a long-distance trip, Dooli ensures safety, comfort, and efficiency at your fingertips. With real-time tracking, easy booking, and multiple ride options, it’s the perfect travel companion. Experience hassle-free commuting with professional drivers and competitive fares. Choose Dooli—your ride, your way.",
    challenge: "Dooli, offering cab services, parcel delivery, and JCB rentals, faces several challenges. Ensuring timely service amidst traffic congestion, handling peak-hour demands, and maintaining vehicle availability are key concerns for cab services. Parcel delivery struggles with logistics management, address accuracy, and delivery delays. JCB rentals face issues like equipment maintenance, fuel costs, and skilled operator shortages. Despite these challenges, Dooli remains committed to seamless service, leveraging technology and efficiency to enhance customer experience across all its offerings.",
    workflow: [
      "Strategized the app structure to effectively showcase the brand’s stunning vision",
      "Designed an intuitive, visually appealing, and user-friendly interface for seamless navigation",
      "Implemented the planned design and features, ensuring alignment",
      "Built a fully functional app, integrating content, visuals, and technology to enhance user engagement"
    ],
    timeline: [
      { label: "Planning", day: "14 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "25 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "50 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "65 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "67 Day", color: "border-emerald-500 bg-emerald-50 text-emerald-600" }
    ]
  },
  "edgering": {
    title: "EdgeRing",
    subtitle: "Uncompromising Protection, Premium Style",
    emoji: "📱",
    description: "EdgeRing specializes in high-durability, premium aesthetic mobile accessories and smartphone cases featuring shockproof technology.",
    stats: {
      estimatedTime: "35 Days",
      bugsFixing: "120 +",
      security: "99.99%",
      projectCompletion: "38 Days",
      trafficSpikes: "300%"
    },
    about: "EdgeRing elevates mobile fashion by supplying high-performance armor shells that protect mobile devices without adding excess bulk, leveraging aerospace-grade materials.",
    challenge: "Achieving accurate product-to-model filtering across thousands of device permutations while presenting photorealistic 3D cases in real-time browser preview sessions.",
    workflow: [
      "Designed interactive device accessory filter",
      "Modeled responsive high-fidelity UI components",
      "Programmed advanced search index indexing system",
      "Completed visual regression checks"
    ],
    timeline: [
      { label: "Planning", day: "5 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "12 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "28 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "34 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "38 Day", color: "border-emerald-500 bg-emerald-50 text-emerald-600" }
    ]
  },
  "edgeringtone": {
    title: "Edge Ringtones",
    subtitle: "Elevate Your Style with Personalized, Premium Ringtones – Effortless & Seamless.",
    emoji: "🎵",
    description: "Our custom ringtone app combines a sleek, premium UI with a vast collection of high-quality ringtones for every taste. Offering seamless customization for calls, notifications, and alarms, it ensures a smooth and engaging experience. With frequent updates and compatibility across devices, this app keeps you connected with fresh sounds and personalized options at your fingertips.",
    stats: {
      estimatedTime: "45 Days",
      bugsFixing: "491 +",
      security: "99.99%",
      projectCompletion: "40 Days",
      trafficSpikes: "536%"
    },
    about: "The custom ringtone app is designed to deliver a premium, user-centric experience with a sleek, intuitive UI. It offers a diverse selection of high-quality ringtones, allowing users to personalize their devices with custom sounds for calls, notifications, and alarms. The app ensures seamless performance with fast downloads and smooth functionality, while regular updates keep the content fresh. Compatible across a variety of devices, this app delivers a dynamic and engaging experience, offering users the ability to tailor their mobile sound experience to suit their preferences.",
    challenge: "The challenge was to offer a large selection of high-quality ringtones while maintaining optimal performance. To address this, we implemented a custom-built CDN for fast and reliable content delivery. Paired with advanced caching techniques, optimized download speeds, and a refined UI framework, we ensured smooth, efficient access to personalized ringtones, providing users with an exceptional experience across all devices without compromising on speed or quality.",
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
      { label: "Deploy & Live", day: "40 Day", color: "border-emerald-500 bg-emerald-50 text-emerald-600" }
    ]
  },
  "priyanka-khaitan": {
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
    title: "Hotel JIVA",
    subtitle: "A 4-star boutique hotel offering luxury & comfort.",
    emoji: "🏨",
    description: "Hotel JIVA, a renowned 4-star boutique hotel in Jamshedpur, partnered with Digital Edge 360 to enhance its digital presence and boost direct bookings. Through strategic digital marketing efforts, JIVA experienced remarkable growth in online visibility, guest engagement, and occupancy rates, establishing itself as a top choice for premium hospitality in the city.",
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
    title: "Edify Home Decor",
    subtitle: "Premium interior design solutions transforming spaces with elegance.",
    emoji: "🏠",
    description: "Edify Home Decor, a Kolkata-based interior design company, partnered with Digital Edge 360 to scale its online presence and generate quality leads. Through a strategic mix of SEO, performance marketing, and content-driven engagement, the brand achieved substantial growth, attracting high-intent clients and establishing itself as a trusted name in luxury interiors.",
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
    title: "Likeson",
    subtitle: "Simplified healthcare appointment booking and management platform",
    emoji: "🏥",
    description: "Likeson, a healthcare appointment booking and management platform dedicated to simplifying medical care for individuals and families, brings convenience, clarity, and confidence to every health journey. With a seamless digital experience, Likeson enables users to book appointments, manage multiple patient profiles, track health progress, and connect with trusted doctors and clinics — all in one place. Seeking to expand its digital presence and build meaningful connections with a wider audience, Likeson partnered with Digital Edge 360. Through strategic marketing initiatives, performance-driven campaigns, and creative brand positioning, Digital Edge 360 empowers Likeson to strengthen its online visibility, engage users effectively, and establish itself as a trusted name in digital healthcare management.",
    websiteUrl: "https://likeson.in/",
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
    title: "EarthBags",
    subtitle: "Made for You, Made for the Planet",
    emoji: "👜",
    description: "Earthbags is a sustainable bag brand dedicated to eco-friendly fashion and conscious living. Committed to reducing waste and promoting ethical choices, they craft stylish, durable bags from recycled materials. Seeking to expand their reach and enhance their digital presence, Earthbags partnered with Digital Edge 360 for innovative marketing solutions and a stronger online impact.",
    websiteUrl: "https://shopeearthbags.com/",
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
    title: "JetChoice",
    subtitle: "Wings of Freedom, Choice of Excellence",
    emoji: "✈️",
    description: "Jet Choice, a premier international travel company, specializes in seamless global journeys with personalized experiences. However, they faced challenges in reaching the right audience and maximizing digital engagement. To overcome this, they partnered with Digital Edge 360, leveraging expert digital marketing strategies to enhance visibility and drive customer growth.",
    websiteUrl: "https://jetchoice.in/",
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
  }
};
