 import Navigation from "@/components/portfolio/Navigation";
 import HeroSection from "@/components/portfolio/HeroSection";
 import AboutSection from "@/components/portfolio/AboutSection";
 import ExperienceSection from "@/components/portfolio/ExperienceSection";
 import EducationSection from "@/components/portfolio/EducationSection";
 import CertificationsSection from "@/components/portfolio/CertificationsSection";
 import ProjectsSection from "@/components/portfolio/ProjectsSection";
 import ContactSection from "@/components/portfolio/ContactSection";
 import LinkedInButton from "@/components/portfolio/LinkedInButton";
 import Footer from "@/components/portfolio/Footer";
 import AnimatedSection from "@/components/portfolio/AnimatedSection";

const portfolioData = {
  hero: {
    name: "Pratham Patel",
    tagline: "Digital Marketing Intern @ Spinnaker Analytics | Digital Marketing & Analytics",
    location: "Ahmedabad",
    profilePhoto: "https://i.ibb.co/YTymVFG8/Whats-App-Image-2026-02-04-at-3-58-58-PM.jpg",
  },
  about: "Currently a Digital Marketing Intern at Spinnaker Analytics, I am pursuing a Bachelor of Computer Applications at Manipal University Jaipur, with an expected graduation in 2027. My academic background also includes a diploma in engineering from Bhubanananda Odisha School of Engineering and a Master Diploma in Digital Marketing & Analytics from the Boston Institute of Analytics. My core competencies lie in performance marketing, customer acquisition, and conversion optimization, supported by certifications in digital marketing and Google Ads. I am eager to contribute to innovative marketing strategies that drive business growth and create measurable impact.",
  topSkills: "Marketing Strategy • Search Engine Marketing (SEM) • Digital Marketing • Search Engine Optimization (SEO) • Social Media Marketing",
  experience: {
    role: "Digital Marketing Intern",
    company: "Spinnaker Analytics",
    type: "Internship",
    duration: "Aug 2025 - Present",
  },
  education: [
    "10th class from Shree Dadiji Mandir Trust Prabhavati Public School (2017)",
    "Diploma In Computer Science and Eng. from Bhubanananda Odisha School of Engineering (BOSE), Cuttack (2024)",
    "Pursuing Bachelor of Computer Applications from Manipal University Jaipur (2024 - Present)",
    "Master Diploma in Digital Marketing & Analytics from Boston Institute of Analytics (March 2025 - Present)",
  ],
  certifications: [
    {
      title: "Persevex Digital Marketing Certification",
      thumbnail: "https://i.ibb.co/j94Wjmr4/Screenshot-300.png",
      credential: "https://www.persevex.com/verification?id=dm09io17yrn25",
      skills: "Digital Marketing · Search Engine Optimization (SEO) · Search Engine Marketing (SEM) · Social Media Marketing · Content Marketing · Email Marketing · Performance Marketing · Marketing Analytics · Customer Acquisition · Conversion Optimization · Marketing Strategy · Brand Management · Online Advertising · Marketing Automation · Data-driven Marketing",
    },
    {
      title: "Google Ads Measurement Certification",
      thumbnail: "https://i.ibb.co/mrvSq1sm/Whats-App-Image-2026-02-05-at-1-47-24-PM.jpg",
      credential: "https://skillshop.credential.net/4d289c57-1fca-41a7-8103-5c003b4b74e6#acc.Ks5x3WMR",
      skills: "Google Analytics 4 (GA4) Setup & Analysis · Conversion Tracking · Attribution Modeling · Campaign Performance Measurement · Data-Driven Optimization Strategies · Event Tracking · Funnel & Path Analysis · Audience Insights & Segmentation · ROI & CPA/ROAS Analysis",
    },
    {
      title: "Google Video Ads Certification",
      thumbnail: "https://i.ibb.co/gZJr7HD1/Whats-App-Image-2026-02-05-at-1-47-24-P.jpg",
      credential: "https://skillshop.credential.net/441afc04-ad80-4de0-adb6-c4e9e1d57bdb",
      skills: "Audience targeting (in-market, affinity, custom segments)",
    },
    {
      title: "Google Ads Display Certification",
      thumbnail: "https://i.ibb.co/RGLXhMzB/Whats-App-Image-2026-02-05-at-1-47-2.jpg",
      credential: "https://skillshop.credential.net/40d35693-f08a-4719-ac4f-462aaff954dd#acc.ONQufEbp",
      skills: "Google Display campaign setup · Audience targeting · Creative best practices · Brand safety · Smart Display and automated bidding · Performance optimization (reach, CTR, CPA/ROAS)",
    },
    {
      title: "Google Ads Search Certification",
      thumbnail: "https://i.ibb.co/Kz8BszXT/Whats-App-Image-2026-02-05-at-1-47-24.jpg",
      credential: "https://skillshop.credential.net/2aeeed3e-9ae3-4240-859f-e049aa691960#acc.qLgZbMur",
      skills: "Google Ads Search campaign setup · Keyword strategy & match types · Ad copywriting (RSAs) · Bidding strategies · Quality Score optimization · Conversion tracking · Performance troubleshooting",
    },
  ],
  projects: [
    {
      title: "SEO Optimization Strategy for a Digital Healthcare Platform",
      association: "Spinnaker Analytics",
      duration: "Nov 2025 - Jan 2026",
      thumbnail: "https://i.ibb.co/Qj3z2K9k/1770277029243.png",
      description: "Designed and executed an end-to-end SEO strategy focused on increasing organic traffic, search visibility, and user engagement for a leading digital healthcare platform (Practo). The project involved conducting a comprehensive website audit (technical, on-page, and off-page SEO), performing data-driven keyword research, and developing actionable SEO optimization strategies aligned with healthcare search intent and trust standards.",
      skills: "Search Engine Optimization (SEO) · Keyword Research · Search Intent Analysis · SEO Auditing · Content Optimization · Link Building · Google Analytics 4 · Google Search Console · Landing Page Optimization · Technical SEO",
      view_project: "https://drive.google.com/drive/folders/1e3slLyoUcuHYHaWY5g3uvqR9MGBfmfu7",
    },
    {
      title: "FinSmart Digital Marketing Strategy - Go-to-Market Plan",
      association: "Spinnaker Analytics",
      thumbnail: "https://i.ibb.co/F2W9znR/1770277105175.png",
      description: "Developed a comprehensive digital marketing strategy for FinSmart, an innovative financial tracking and budgeting app. Conducted extensive market research identifying ₹3,800 crore addressable market, created customer personas, and designed an 8-channel digital marketing framework with ₹1.44 crore budget. Projected outcomes include 4.2:1 ROI and 655,000 users by end of 2025.",
      skills: "Digital Marketing Strategy · Market Research · Customer Segmentation · Content Marketing · SEO · SEM · Social Media Marketing · Email Marketing · Influencer Marketing · Performance Analysis · ROI Analysis",
      view_project: "https://drive.google.com/drive/folders/1b46plgupnEEDiwgdQNaEIN3vkxVg7_55",
    },
    {
      title: "SEM Campaign for E-Commerce Store - Beyoung",
      association: "Spinnaker Analytics",
      thumbnail: "https://i.ibb.co/RGrHbx6D/1770277136225.png",
      description: "Developed a comprehensive SEM campaign for Beyoung, a D2C fashion brand in India, focusing on non-brand customer acquisition and ROAS. Strategy included keyword research, RSA ads creation, landing page optimization, KPI tracking, and continuous improvement to deliver measurable results.",
      skills: "SEM · Google Ads Search · E-Commerce · Marketing Strategy · Keyword Research · Campaign Management · A/B Testing · Landing Page Optimization · Marketing Analytics · CRO",
      view_project: "https://drive.google.com/drive/folders/1BAjTaRoe7gG2Ux1_kItohxrD0GsikRWt",
    },
    {
      title: "Digital Marketing Strategy for California Burrito India",
      association: "Boston Institute of Analytics",
      duration: "Jul 2025 - Aug 2025",
      thumbnail: "https://i.ibb.co/934jQDtJ/1770277197122.png",
      description: "Designed and executed a digital marketing strategy for California Burrito India, a fast-casual Mexican restaurant chain. Strategy included SEO & SEM, social media marketing, email & app marketing, and influencer campaigns to drive visibility, online orders, and in-store visits.",
      skills: "Digital Marketing · Marketing Strategy · SEO · SEM · Social Media Marketing · Email Marketing · Influencer Marketing · Content Marketing · Marketing Analytics · Market Research",
      view_project: "https://drive.google.com/drive/folders/1-gsd807JNY0lIto-M5U9_TL6VvQjqGA6",
    },
  ],
  linkedin: "https://www.linkedin.com/in/pratham-patel-283766347/",
 email: "prathampatel0124@gmail.com",
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
       <Navigation />
       
      <HeroSection 
        name={portfolioData.hero.name}
        tagline={portfolioData.hero.tagline}
        location={portfolioData.hero.location}
        profilePhoto={portfolioData.hero.profilePhoto}
      />
      
       <AnimatedSection>
         <AboutSection 
           about={portfolioData.about}
           skills={portfolioData.topSkills}
         />
       </AnimatedSection>
      
       <AnimatedSection>
         <ExperienceSection experience={portfolioData.experience} />
       </AnimatedSection>
      
       <AnimatedSection>
         <EducationSection education={portfolioData.education} />
       </AnimatedSection>
      
       <AnimatedSection>
         <CertificationsSection certifications={portfolioData.certifications} />
       </AnimatedSection>
      
       <AnimatedSection>
         <ProjectsSection projects={portfolioData.projects} />
       </AnimatedSection>
       
       <AnimatedSection>
         <ContactSection 
           email={portfolioData.email}
           linkedin={portfolioData.linkedin}
         />
       </AnimatedSection>
      
      <Footer />
      
      <LinkedInButton url={portfolioData.linkedin} />
    </div>
  );
};

export default Index;
