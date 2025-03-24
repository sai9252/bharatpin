import AboutUs from "./about-us/page";
import CompanyDescription from "./company-description/page";
import FAQ from "./FAQ/page";
import OurServices from "./our-services/page";
import PrivacyPolicy from "./privacy-policy/page";
import TC from "./TC/page";
import WhyUs from "./why-us/page";
import { notFound } from "next/navigation";

export default async function DynamicPage({ params }: { params: { name: string } }) {
  // Access the dynamic parameter with params.name
  // In Next.js App Router, we need to await the params
  const { name } = await params;

  // Map the URL segments to the component keys
  // The keys should match exactly what appears in the URL
  const routeMapping: Record<string, keyof typeof routeContent> = {
    "about-us": "aboutUs",
    "company-description": "companyDescription",
    "FAQ": "FAQ",
    "our-services": "ourServices",
    "privacy-policy": "privacyPolicy",
    "TC": "TC",
    "why-us": "whyUs"
  };

  // Define content for each route
  const routeContent = {
    aboutUs: {
      title: "About Us",
      content: <AboutUs />
    },
    companyDescription: {
      title: "Company Description",
      content: <CompanyDescription />
    },
    FAQ: {
      title: "Frequently Asked Questions",
      content: <FAQ />
    },
    ourServices: {
      title: "Our Services",
      content: <OurServices />
    },
    privacyPolicy: {
      title: "Privacy Policy",
      content: <PrivacyPolicy />
    },
    TC: {
      title: "Terms and Conditions",
      content: <TC />
    },
    whyUs: {
      title: "Why Choose Us",
      content: <WhyUs />
    }
  };

  // Map the URL param to the correct component key
  const routeKey = routeMapping[name];
  const pageData = routeKey ? routeContent[routeKey] : null;

  // Handle case when page doesn't exist
  if (!pageData) {
    return (
      notFound()
    );
  }

  return (
    <div className="page-container">
      <div className="content">
        {pageData.content}
      </div>
    </div>
  );
}