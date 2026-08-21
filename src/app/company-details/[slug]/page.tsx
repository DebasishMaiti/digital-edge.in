import { notFound } from "next/navigation";
import CompanyDetailsClient from "./CompanyDetailsClient";

interface SuccessStoryData {
  title: string;
  subtitle: string;
  emoji: string;
  description: string;
  playStoreUrl?: string;
  stats: {
    estimatedTime: string;
    bugsFixing: string;
    security: string;
    projectCompletion: string;
    trafficSpikes: string;
  };
  about: string;
  challenge: string;
  workflow: string[];
  timeline: { label: string; day: string; color: string }[];
}

const storiesData: Record<string, SuccessStoryData> = {
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
    subtitle: "Green Technology, Smart Ecology",
    emoji: "🌱",
    description: "Providing ecological engineering solutions and smart green technology infrastructure to promote carbon offsets.",
    stats: {
      estimatedTime: "75 Days",
      bugsFixing: "180 +",
      security: "99.99%",
      projectCompletion: "80 Days",
      trafficSpikes: "150%"
    },
    about: "Creative Ecotech works at the intersection of climate action and digital reporting, compiling carbon emission patterns to build green offset projects for modern industries.",
    challenge: "Integrating legacy API sensors with live dashboard trackers without experiencing latency overheads or packet losses.",
    workflow: [
      "Architected environmental data schema",
      "Developed carbon reduction charts and visualizations",
      "Connected IoT telemetry stream integration",
      "Deployed automated reporting module"
    ],
    timeline: [
      { label: "Planning", day: "15 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "30 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "65 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "75 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "80 Day", color: "border-emerald-500 bg-emerald-50 text-emerald-600" }
    ]
  },
  "truboy-bbq": {
    title: "Truboy BBQ",
    subtitle: "Sizzling E-commerce Growth, Direct-To-Consumer Delivery",
    emoji: "🍖",
    description: "A premium craft smoked meats and Texas BBQ brand that expanded nationwide using custom cold-chain e-commerce delivery logistics.",
    stats: {
      estimatedTime: "60 Days",
      bugsFixing: "300 +",
      security: "99.9%",
      projectCompletion: "65 Days",
      trafficSpikes: "350%"
    },
    about: "Truboy BBQ brings authenticated wood-smoked brisket and ribs to customers' tables. They created a custom checkout flow to schedule shipping based on zone temperatures.",
    challenge: "Calculating dynamically updated dry ice shipping fees during checkout and preventing order placement in zones experiencing shipping delays.",
    workflow: [
      "Engineered thermal shipping rates algorithm",
      "Customized WooCommerce high-speed cart setup",
      "Integrated regional fulfillment center API",
      "Refined mobile layout conversion rates"
    ],
    timeline: [
      { label: "Planning", day: "12 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "24 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "52 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "60 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "65 Day", color: "border-emerald-500 bg-emerald-50 text-emerald-600" }
    ]
  },
  "jiva": {
    title: "JIVA",
    subtitle: "Fine Dining, Reimagined Online",
    emoji: "🍽️",
    description: "A multi-location upscale culinary brand that rolled out automated tabletop ordering, waitlists, and reservation systems.",
    stats: {
      estimatedTime: "50 Days",
      bugsFixing: "140 +",
      security: "99.9%",
      projectCompletion: "55 Days",
      trafficSpikes: "200%"
    },
    about: "JIVA blends hospitality with software. The dining portal offers instant digital booking confirmations, allergen indicators, and custom chef-preference logging.",
    challenge: "Syncing point-of-sale seat maps with online reservations in real-time, preventing overbooking on busy holidays.",
    workflow: [
      "Mapped seat visualization grids",
      "Programmed real-time reservation notifications",
      "Integrated POS billing framework API",
      "Completed clinic and menu test cycles"
    ],
    timeline: [
      { label: "Planning", day: "10 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "20 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "45 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "52 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "55 Day", color: "border-emerald-500 bg-emerald-50 text-emerald-600" }
    ]
  },
  "ducati": {
    title: "Ducati Campaign",
    subtitle: "The Pure Emotion of Speed",
    emoji: "🏍️",
    description: "A digital marketing campaign and immersive virtual showroom experience for modern motorcycle enthusiasts.",
    stats: {
      estimatedTime: "40 Days",
      bugsFixing: "95 +",
      security: "99.99%",
      projectCompletion: "42 Days",
      trafficSpikes: "400%"
    },
    about: "Ducati's interactive showcase invites riders to construct, customize, and inspect motorbikes from any device.",
    challenge: "Handling heavy WebGL rendering loads cleanly on older smartphone devices without dropping animation framerates.",
    workflow: [
      "Optimized low-polygon motorcycle visual meshes",
      "Programmed lighting shader parameters",
      "Designed configurations option panels",
      "Deployed global low-latency content CDN"
    ],
    timeline: [
      { label: "Planning", day: "8 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "16 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "35 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "40 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "42 Day", color: "border-emerald-500 bg-emerald-50 text-emerald-600" }
    ]
  },
  "edefyhome": {
    title: "EdefyHome",
    subtitle: "Modern Interior Spaces, Elevated Living",
    emoji: "🏠",
    description: "An interior design marketplace portal offering interactive room visualization and direct-to-designer consultations.",
    stats: {
      estimatedTime: "55 Days",
      bugsFixing: "190 +",
      security: "99.9%",
      projectCompletion: "58 Days",
      trafficSpikes: "220%"
    },
    about: "EdefyHome matches furniture shoppers with accredited interior consultants, managing material palettes and moodboards.",
    challenge: "Creating drag-and-drop decor canvas components that scale accurately across mobile screen dimensions.",
    workflow: [
      "Created canvas interface blueprint",
      "Designed matching asset panels",
      "Coded customizable room builder features",
      "Tested grid coordinates calibration"
    ],
    timeline: [
      { label: "Planning", day: "10 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "20 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "48 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "54 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "58 Day", color: "border-emerald-500 bg-emerald-50 text-emerald-600" }
    ]
  },
  "tom-ford-eyewear": {
    title: "Tom Ford Eyewear",
    subtitle: "Luxury Fashion Eyewear Showcase",
    emoji: "🕶️",
    description: "An high-end digital catalog and virtual mirror featuring luxury Tom Ford sunglasses and optical frame catalogs.",
    stats: {
      estimatedTime: "70 Days",
      bugsFixing: "210 +",
      security: "99.99%",
      projectCompletion: "75 Days",
      trafficSpikes: "280%"
    },
    about: "Bringing eyewear shopping to life using real-time webcam frame alignment, mirroring metallic shine and glass reflections accurately.",
    challenge: "Processing real-time face landmark point identification via client-side JavaScript without creating device thermal throttling.",
    workflow: [
      "Refined face landmark detection model",
      "Programmed glossy refraction shaders",
      "Designed minimalist inventory carousel",
      "Optimized script bundles execution size"
    ],
    timeline: [
      { label: "Planning", day: "15 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "30 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "60 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "70 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "75 Day", color: "border-emerald-500 bg-emerald-50 text-emerald-600" }
    ]
  },
  "earthy-line": {
    title: "Earthy Line",
    subtitle: "Organic Textiles, Traditional Heritage",
    emoji: "👗",
    description: "An ethical e-commerce marketplace promoting handloom weavers and sustainable ethnic apparel collections.",
    stats: {
      estimatedTime: "50 Days",
      bugsFixing: "110 +",
      security: "99.9%",
      projectCompletion: "54 Days",
      trafficSpikes: "160%"
    },
    about: "Earthy Line connects handcraft artisans directly to urban shoppers, emphasizing product transparency and story tracking.",
    challenge: "Structuring the product history ledger database and creating a clean story badge layout on the shop pages.",
    workflow: [
      "Drafted artisan profile templates",
      "Built custom WooCommerce taxonomy attributes",
      "Programmed media loading widgets",
      "Implemented payment gateway integrations"
    ],
    timeline: [
      { label: "Planning", day: "10 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "20 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "45 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "50 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "54 Day", color: "border-emerald-500 bg-emerald-50 text-emerald-600" }
    ]
  },
  "blossom-clinic": {
    title: "Blossom Clinic",
    subtitle: "Advanced Medical Skincare Solutions",
    emoji: "🏥",
    description: "A patient appointment booking portal and medical records repository for aesthetic dermatology and skincare clinics.",
    stats: {
      estimatedTime: "48 Days",
      bugsFixing: "160 +",
      security: "99.99%",
      projectCompletion: "52 Days",
      trafficSpikes: "190%"
    },
    about: "Blossom Clinic automates scheduling. The site includes patient intake form submissions, appointment reminders, and skincare regimen updates.",
    challenge: "Maintaining strict medical record storage privacy and implementing double-booking checking loops.",
    workflow: [
      "Constructed intake form logic flows",
      "Created clinic management layouts",
      "Integrated secure SMS confirmation systems",
      "Conducted penetration testing cycles"
    ],
    timeline: [
      { label: "Planning", day: "10 Day", color: "border-blue-500 bg-blue-50 text-blue-600" },
      { label: "UI/UX Development", day: "20 Day", color: "border-purple-500 bg-purple-50 text-purple-600" },
      { label: "Development", day: "44 Day", color: "border-teal-500 bg-teal-50 text-teal-600" },
      { label: "Testing", day: "48 Day", color: "border-rose-500 bg-rose-50 text-rose-600" },
      { label: "Deploy & Live", day: "52 Day", color: "border-emerald-500 bg-emerald-50 text-emerald-600" }
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(storiesData).map((slug) => ({
    slug: slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = storiesData[slug];

  if (!story) {
    notFound();
  }

  return <CompanyDetailsClient story={story} />;
}
