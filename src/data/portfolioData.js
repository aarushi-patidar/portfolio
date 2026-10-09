/**
 * =======================================================================
 * PORTFOLIO CONTENT
 * =======================================================================
 * All content, career milestones, projects, written works, and hobbies
 * are centrally defined here. Update any text, image URL, link, or metric
 * to instantly reflect across the entire interactive experience.
 */

export const portfolioConfig = {
  personal: {
    name: "Aarushi Patidar",
    title: "Product · AI · Growth · WebDev · UI-UX",
    racingHandle: "PRODUCT • AI • GROWTH",
    tagline: "Helping founders build products worth talking about.",
    bio: "A product/growth strategist & a developer who builds at the intersection of AI, data, and user behavior. If you've ever been told to “niche down” and felt like that advice was built for a different kind of brain, you're exactly who I'm building this for. I help founders ship products and scale brands that actually matter.",
    location: "Bhopal & Vellore, India",
    email: "aarushipatidar.work@gmail.com",
    phone: "+91 9111977062",
    linkedin: "https://linkedin.com/in/aarushi-patidar",
    github: "https://github.com",
    resumeUrl: "/assets/Aarushi_Patidar_Resume.pdf",
    telemetry: {
      lapTime: "1:18.429 (Record)",
      topSpeed: "348 km/h",
      currentGear: "8th Gear",
      powerUnit: "Next.js • FastAPI • React",
      teamPaddock: "CodeChef-VIT & AI Lab",
      highlights: [
        { label: "Lap Pace", value: "1:18.429" },
        { label: "VIT CGPA", value: "9.00 / 10.0" },
        { label: "Resources Reach", value: "65,000+ Users" },
        { label: "AI Research", value: "Fellowship" }
      ]
    }
  },

  about: {
    quote: "A product and growth strategist who builds at the intersection of AI, data, and user behavior.",
    subheading: "Helping founders ship products and scale brands that matter.",
    services: [
      {
        id: "web",
        title: "Web development & UI/UX",
        description: "Web products shaped around user behavior, conversion, and clean interfaces."
      },
      {
        id: "growth",
        title: "Product & growth strategy",
        description: "Positioning, LinkedIn growth, and copywriting for founders and startups."
      },
      {
        id: "research",
        title: "AI research",
        description: "Multidisciplinary research across technology, design, and human behavior."
      },
      {
        id: "content",
        title: "Content & writing",
        description: "Self-help, tech, and lifestyle content for LinkedIn, YouTube, Instagram, and X. Author of four anthologies."
      }
    ]
  },

  experience: [
    {
      id: "codechef",
      lap: "LAP 01",
      position: "GENERAL SECRETARY",
      markerLabel: "CodeChef-VIT",
      role: "General Secretary",
      company: "CodeChef-VIT Student Chapter",
      location: "Vellore, India",
      period: "Jul 2026 – Present",
      summary: "Leading community building and departmental training across Growth, Finance, Outreach, Development, Design, and Marketing.",
      careerProgression: [
        { role: "General Secretary", period: "Jul 2026 – Present", duration: "4 mos" },
        { role: "Senior Core Committee 26'", period: "Jan 2026 – Jul 2026", duration: "7 mos" },
        { role: "Junior Core Committee 25'", period: "Feb 2025 – Jan 2026", duration: "1 yr" }
      ],
      points: [
        "Maintained Papers by CodeChef, a React-based academic resource platform serving 65K+ peak users; UI improvements reduced average document retrieval steps by 35%.",
        "Developed 5+ internal products, including FFCS-inator (25K+ users), management portals, and event landing pages.",
        "Led sponsorship, PR, and speaker outreach for graVITas and DEVSoC; the event sold out within 5 hours across 10+ stakeholder groups.",
        "Built Instagram and LinkedIn content strategy reaching 1.2M+ views; A/B testing improved engagement by 40%.",
        "Departments: Technical, Management, Design, Editorial."
      ],
      metrics: [
        { label: "Peak users", value: "65K+" },
        { label: "Faster retrieval", value: "35%" },
        { label: "FFCS-inator users", value: "25K+" },
        { label: "Content views", value: "1.2M+" }
      ],
      tags: ["Leadership", "Product", "Growth", "Development"]
    },
    {
      id: "gravitas-coordinator",
      lap: "LAP 02",
      position: "STUDENT PROGRAM COORDINATOR",
      markerLabel: "graVITas",
      role: "Student Program Coordinator",
      company: "graVITas · VIT Vellore",
      location: "Vellore, India",
      period: "Aug 2026 – Sep 2026",
      summary: "Coordinated through the International Relations Committee.",
      points: ["Student Program Coordinator, International Relations Committee."],
      metrics: [],
      tags: ["Program coordination", "International relations"]
    },
    {
      id: "critical",
      lap: "LAP 03",
      position: "PRODUCT • GTM • APPLIED AI",
      markerLabel: "Critical",
      role: "Product, GTM, WebDev & Applied AI",
      company: "Critical · A Founder Inc. startup",
      location: "San Francisco, California, United States",
      period: "May 2026 – Jul 2026",
      summary: "Worked on a hiring-intelligence platform helping companies run virtual work trials to measure job-readiness and AI fluency.",
      points: [
        "Product, go-to-market, web development, and applied AI work for a hiring-intelligence platform."
      ],
      metrics: [],
      tags: ["Product", "GTM", "Web development", "Applied AI"]
    },
    {
      id: "vit-research",
      lap: "LAP 04",
      position: "AI RESEARCHER",
      markerLabel: "VIT Research",
      role: "AI Researcher",
      company: "Vellore Institute of Technology",
      location: "Vellore, India",
      period: "May 2025 – Jul 2026",
      summary: "Researching AI and sociology at the intersection of technology and human behavior.",
      points: [
        "Explored how LLM tools act as emotional surrogates, offering comfort while potentially displacing human connection and affecting the social fabric."
      ],
      metrics: [],
      tags: ["AI", "Sociology", "Human behavior"]
    },
    {
      id: "seculinx",
      lap: "LAP 05",
      position: "MARKETING & GROWTH",
      markerLabel: "Seculinx",
      role: "Marketing and Growth Intern",
      company: "Seculinx",
      location: "Vellore, Tamil Nadu, India · On-site",
      period: "Sep 2024 – Aug 2025",
      summary: "Built a strong brand identity and scalable content pipeline to drive audience growth.",
      points: ["Built a strong brand identity and scalable content pipeline to drive audience growth."],
      metrics: [],
      tags: ["Marketing", "Growth", "Content"]
    },
    {
      id: "volunteering",
      lap: "LAP 06",
      position: "VOLUNTEERING",
      markerLabel: "Volunteer",
      role: "Campus Partner & Volunteer",
      company: "Perplexity · Inayat Social Services",
      location: "India",
      period: "Perplexity: Aug 2025 – Nov 2025",
      summary: "Community work spanning campus technology outreach and career guidance.",
      points: [
        "Perplexity Campus Partner: collaborated with students, clubs, and campus communities to grow awareness of Comet, its AI-powered browser.",
        "Inayat Social Services: led career and life guidance sessions at an Adivasi Boys Hostel in Bhopal."
      ],
      metrics: [],
      tags: ["Community", "AI", "Career guidance"]
    }
  ],
  education: [
    {
      id: "vit-mtech",
      institution: "Vellore Institute of Technology",
      qualification: "Integrated Master of Technology (B.Tech + M.Tech)",
      field: "Computer Science and Engineering",
      period: "Jul 2024 – Jul 2029",
      grade: "9.2"
    },
    {
      id: "dps-bhopal",
      institution: "Delhi Public School, Bhopal",
      qualification: "High School Diploma",
      field: "Engineering Science",
      period: "Mar 2009 – May 2024",
      grade: "96.4%"
    }
  ],
  certificates: [],
  skills: [
    {
      id: "product-growth",
      title: "Product & growth",
      items: ["Product strategy", "Positioning", "Go-to-market", "LinkedIn growth", "Copywriting"]
    },
    {
      id: "web-design",
      title: "Web & design",
      items: ["Web development", "UI/UX", "React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      id: "ai-research",
      title: "AI & research",
      items: ["Applied AI", "AI research", "Mixed-methods research", "R", "SPSS", "Human behavior"]
    },
    {
      id: "content-community",
      title: "Content & community",
      items: ["Content strategy", "Writing", "Founder interviews", "Community building", "Program coordination"]
    }
  ],

  projects: [
    {
      id: "airgpu",
      title: "AirGPU",
      category: "Decentralized idle compute",
      year: "2026",
      period: "Mar 2026",
      contributor: "Somasekar",
      frameStyle: "baroque-gold", // Unique themed border
      paintingTheme: "Aerodynamic Engine Oil on Canvas",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
      accentColor: "#E10600",
      shortDesc: "A decentralized idle-compute platform for sharing GPU capacity over the internet.",
      fullDesc: "A decentralized idle-compute platform that lets one user’s idle GPU run jobs for another user who does not have a GPU.",
      techStack: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "FastAPI", "WebSockets", "Docker", "Redis", "PostgreSQL", "Firebase"],
      metrics: [],
      links: {
        demo: "https://airgpu.vercel.app/",
        github: "https://github.com/aarushi-patidar/airgpu"
      }
    },
    {
      id: "papers-codechef",
      title: "Papers by CodeChef",
      category: "High-Scale Academic Infrastructure",
      year: "2025",
      frameStyle: "crimson-lace", // Reference style border
      paintingTheme: "The Tower of Knowledge Gilt Painting",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      accentColor: "#6B1124",
      shortDesc: "Academic repository platform serving over 65,000 peak university students across examinations.",
      fullDesc: "The core lifeline for thousands of university students during mid-terms and finals. Engineered rapid search indexes, instant document previews, and an overhaul of UI ergonomics that slashed document retrieval friction by 35%. Optimized frontend bundles to sustain brutal traffic spikes with zero downtime.",
      techStack: ["React.js", "Vite", "Node.js", "Algolia Search", "AWS S3", "Tailwind CSS"],
      metrics: ["65,000+ Peak Users", "35% Faster Retrieval", "99.9% Peak Uptime"],
      links: {
        demo: "https://papers.codechefvit.com",
        github: "https://github.com/CodeChefVIT/papers"
      }
    },
    {
      id: "ffcs-inator",
      title: "FFCS-inator Planner",
      category: "Algorithmic Timetable Solver",
      year: "2025",
      frameStyle: "carbon-racing", // Racing checkered & gold frame
      paintingTheme: "Grand Prix Speed Geometry",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      accentColor: "#D4AF37",
      shortDesc: "Intelligent course registration and clash-free timetable generator used by 25,000+ VIT students.",
      fullDesc: "Course registration at VIT is an intense race against the clock. FFCS-inator solves schedule permutations using backtracking heuristics, avoiding class slot collisions and faculty preference clashes in milliseconds. Built with an intuitive drag-and-drop schedule simulator.",
      techStack: ["React.js", "TypeScript", "Constraint Satisfaction", "State Management", "Tailwind"],
      metrics: ["25,000+ Student Users", "0s Slot Clashes", "Instant Permutations"],
      links: {
        demo: "https://ffcs.codechefvit.com",
        github: "https://github.com/CodeChefVIT/ffcs-inator"
      }
    },
    {
      id: "ai-sociology",
      title: "AI as Emotional Surrogates",
      category: "Empirical Mixed-Methods Research",
      year: "2025",
      frameStyle: "rococo-ivory", // Victorian ivory & filigree
      paintingTheme: "The Synthetic Psyche in Oil",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
      accentColor: "#0B192C",
      shortDesc: "Research investigating how conversational LLMs substitute human emotional bonds and intimacy.",
      fullDesc: "An academic inquiry into the emerging phenomenon of human attachment to conversational AI agents. Synthesizing quantitative psychometric data via Exploratory Factor Analysis (EFA), SPSS, and R alongside qualitative in-depth psychologist interviews across GHQ-3, GHQ-6, and GHQ-28 psychometric scales.",
      techStack: ["R / RStudio", "SPSS", "Psychometrics (GHQ)", "EFA Modeling", "Mixed-Methods"],
      metrics: ["Quantitative Survey N=500+", "Qualitative Psychologist Panels", "Manuscript Under Review"],
      links: {
        demo: "#",
        github: "https://github.com/aarushi-patidar/ai-sociology-research"
      }
    },
    {
      id: "devsoc-gravitas",
      title: "DEVSoC & graVITas Portals",
      category: "Event Systems & Ticketing",
      year: "2025",
      frameStyle: "paddock-gilt",
      paintingTheme: "The Arena of Innovation",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
      accentColor: "#997B28",
      shortDesc: "Event registration and live judging infrastructure that sold out in under 5 hours.",
      fullDesc: "The digital gateway for VIT's flagship university hackathons. Engineered robust rate-limited registration forms, dynamic team formation matchmaking, and live submission verification. Handled thousands of concurrent requests seamlessly during the opening ticket drop.",
      techStack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Redis Queue"],
      metrics: ["Sold Out in <5 Hours", "10+ Stakeholder Groups", "Zero Dropped Registrations"],
      links: {
        demo: "https://devsoc.codechefvit.com",
        github: "https://github.com/CodeChefVIT"
      }
    }
  ],

  hobbies: {
    trackTitle: "The Paddock Circuit • Off-Track Pursuits",
    subtitle: "When the race helmet comes off: art, literature, podcasting, and pitlane analysis.",
    cars: [
      {
        id: "podcast-car",
        team: "Oracle Red Bull Racing · RB21",
        liveryColor: "#0B192C",
        accent: "#E10600",
        image: "/assets/f1/red-bull-rb21.jpg",
        imageCredit: "Photo: Liauzh · CC BY-SA 4.0",
        imageSource: "https://commons.wikimedia.org/wiki/File:2025_Japan_GP_-_Red_Bull_-_Max_Verstappen_-_FP1.jpg",
        number: "01",
        hobbyName: "'20 Lessons Before 20' Podcast",
        role: "Host & Executive Producer",
        tag: "Founder Interviews",
        description: "A podcast exploring high-conviction founders, startup leaders, and operators who took unusual bets before turning twenty. Active contributor in the San Francisco tech and product growth ecosystem.",
        quote: "The best race drivers study the telemetry of champions who mastered the track before them.",
        stats: { episodes: "Season 1 Active", audience: "Founders & Builders", focus: "Early-stage Growth & Tech" }
      },
      {
        id: "poetry-car",
        team: "Scuderia Ferrari · SF-25",
        liveryColor: "#C00000",
        accent: "#F5D061",
        image: "/assets/f1/ferrari-sf25.jpg",
        imageCredit: "Photo: Liauzh · CC BY-SA 4.0",
        imageSource: "https://commons.wikimedia.org/wiki/File:2025_Japan_GP_-_Ferrari_-_SF-25_-_Thursday.jpg",
        number: "16",
        hobbyName: "Published Poetry Anthologies",
        role: "Author & Literary Stylist",
        tag: "4 Anthologies Published",
        description: "Author of four published poetry collections exploring solitude, urban velocity, and emotional resonance. Writing is the aerodynamic balance that keeps the engineering engine stable in high-speed corners.",
        quote: "In every tight corner of life, poetry finds the apex.",
        stats: { booksPublished: "4 Anthologies", style: "Free Verse & Metaphor", recognition: "Student Editor" }
      },
      {
        id: "simracing-car",
        team: "McLaren · MCL39",
        liveryColor: "#FF8000",
        accent: "#0B192C",
        image: "/assets/f1/mclaren-mcl39.jpg",
        imageCredit: "Photo: Liauzh · CC BY-SA 4.0",
        imageSource: "https://commons.wikimedia.org/wiki/File:2025_Japan_GP_-_McLaren_-_Lando_Norris_-_FP1_(2).jpg",
        number: "04",
        hobbyName: "F1 Telemetry & Sim Racing",
        role: "Motorsport Strategy Enthusiast",
        tag: "Pit Wall Tactics",
        description: "Deep student of aerodynamic ground effects, tire degradation curves, undercut strategy, and simulator racecraft. Obsessed with the intersection of millisecond physics and real-time data engineering.",
        quote: "Motorsport is software running at 300 kilometers per hour.",
        stats: { favoriteTrack: "Spa-Francorchamps & Suzuka", telemetryObsession: "Braking Apex Delta", team: "Red Bull / Ferrari" }
      },
      {
        id: "design-car",
        team: "Mercedes-AMG Petronas · W14",
        liveryColor: "#1A2530",
        accent: "#00D2BE",
        image: "/assets/f1/mercedes-w14.jpg",
        imageCredit: "Photo: Lukas Raich · CC BY-SA 4.0",
        imageSource: "https://commons.wikimedia.org/wiki/File:FIA_F1_Austria_2023_Nr._44_(2).jpg",
        number: "44",
        hobbyName: "Art & Creative Direction",
        role: "Visual Curation & Typography",
        tag: "Gallery Aesthetics",
        description: "Interested in visual storytelling, expressive typography, and creating digital experiences with character.",
        quote: "Good design makes a product feel as considered as it is useful.",
        stats: { focus: "Visual storytelling", medium: "Digital design", interest: "Typography" }
      }
    ]
  },

  writtenWorks: {
    title: "The Paddock Library • Written Works",
    subtitle: "A Victorian collector's bookshelf containing published poetry, academic manuscripts, and engineering tracts.",
    books: [
      {
        id: "book-anthology-1",
        spineColor: "#6B1124",
        embossColor: "#D4AF37",
        title: "Echoes of the Velocity",
        subtitle: "Poetry Anthology Vol. IV",
        year: "2024",
        pages: "128 Pages",
        publisher: "Literary Guild Press",
        synopsis: "A collection of contemporary verse navigating the emotional friction of coming of age in the algorithmic century. Blending Victorian romanticism with modern urban velocity.",
        excerpt: "We raced across the tarmac of our youth, measuring the seconds in heartbeats rather than laps; and found that love, like the wind through an open wing, creates downforce only when you dare to accelerate.",
        linkText: "Read Excerpt",
        linkUrl: "#"
      },
      {
        id: "book-ai-surrogates",
        spineColor: "#0B192C",
        embossColor: "#F5D061",
        title: "The Synthetic Confidant",
        subtitle: "LLMs as Emotional Surrogates (Research)",
        year: "2025",
        pages: "34 Pages • Academic Manuscript",
        publisher: "Research Fellow Series",
        synopsis: "Empirical study evaluating the psychological dependency curves of Gen-Z cohorts utilizing conversational agents for socio-emotional compensation.",
        excerpt: "As interface latency drops beneath human reflex thresholds, users cease perceiving the machine as an index and begin addressing it as a sanctuary. Here lies the threshold between utility and surrogate companionship.",
        linkText: "View Paper Abstract",
        linkUrl: "#"
      },
      {
        id: "book-papers-arch",
        spineColor: "#3B1E13",
        embossColor: "#DFC8A4",
        title: "Engineering for the Surge",
        subtitle: "Scaling Student Platforms to 65k Users",
        year: "2025",
        pages: "Technical Monograph",
        publisher: "CodeChef Technical Press",
        synopsis: "Field notes on caching strategies, client-side indexing, and UX heuristics designed to prevent university infrastructure from collapsing under peak exam loads.",
        excerpt: "When 60,000 students query your cluster at 11:58 PM before midnight exams, microsecond latency in SQLite or Redis is not an optimization metric — it is the margin between calm and academic panic.",
        linkText: "Read Technical Notes",
        linkUrl: "#"
      },
      {
        id: "book-anthology-2",
        spineColor: "#1E3A2F",
        embossColor: "#D4AF37",
        title: "Gilded Horizons",
        subtitle: "Anthology of Early Reflections",
        year: "2023",
        pages: "96 Pages",
        publisher: "Bhopal Literary Collective",
        synopsis: "Poems composed during school leadership tenures, reflecting on governance, heritage, and the restless desire to build.",
        excerpt: "Stand upon the stone balustrade and look towards the dawn; the future belongs not to those who keep the museum quiet, but to those who hang new portraits upon its walls.",
        linkText: "Browse Collection",
        linkUrl: "#"
      }
    ],
    decorItems: [
      {
        id: "decor-bust",
        tier: "top",
        name: "Classical Minerva Bust",
        icon: "bust",
        lore: "Gilded marble bust of Minerva, Roman goddess of wisdom and strategic craftsmanship. Crowned with a miniature F1 aerodynamic gurney flap.",
        clinkSound: "clink"
      },
      {
        id: "decor-helmet",
        tier: "top",
        name: "Vintage Gilded Racing Helmet",
        icon: "helmet",
        lore: "A 1976 Monaco GP tribute helmet, hand-leafed in 24k gold leaf with Victorian floral filigree painted across the visor.",
        clinkSound: "rev"
      },
      {
        id: "decor-trophy",
        tier: "bottom",
        name: "Grand Prix Championship Cup",
        icon: "trophy",
        lore: "Victorian sterling silver cup engraved with: 'P1 • Awarded for Excellence in Code, Art, and Velocity.'",
        clinkSound: "clink"
      },
      {
        id: "decor-stopwatch",
        tier: "bottom",
        name: "Brass Chronometer & Stopwatch",
        icon: "clock",
        lore: "Victorian pocket chronometer accurate to 1/1000th of a second. Still ticking at high RPM.",
        clinkSound: "tick"
      },
      {
        id: "decor-telescope",
        tier: "top",
        name: "Brass Navigational Telescope",
        icon: "compass",
        lore: "19th century maritime telescope used by Victorian explorers to chart celestial coordinates and grand voyages.",
        clinkSound: "clink"
      },
      {
        id: "decor-urn",
        tier: "bottom",
        name: "Victorian Wedgwood Ceramic Urn",
        icon: "urn",
        lore: "Hand-painted fine porcelain urn depicting classical muses in race chariots with gold leaf garlands.",
        clinkSound: "clink"
      }
    ]
  },

  contact: {
    heading: "The Victory Podium",
    subheading: "Cross the finish line and initiate telemetry contact.",
    podiumBadge: "P1 CHAMPIONSHIP INTERFACE",
    formPrompt: "Send Telemetry Dispatch",
    socials: [
      { name: "Email", label: "aarushipatidar.work@gmail.com", href: "mailto:aarushipatidar.work@gmail.com" },
      { name: "LinkedIn", label: "linkedin.com/in/aarushi-patidar", href: "https://linkedin.com/in/aarushi-patidar" },
      { name: "Phone", label: "+91 9111977062", href: "tel:+919111977062" },
      { name: "Curriculum Vitae", label: "Download Resume (PDF)", href: "/assets/Aarushi_Patidar_Resume.pdf", isDownload: true }
    ]
  }
};
