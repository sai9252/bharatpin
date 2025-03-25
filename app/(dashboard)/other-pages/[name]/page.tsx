import AboutUs from "./about-us/page";
import CompanyDescription from "./company-description/page";
import FAQ from "./FAQ/page";
import OurServices from "./our-services/page";
import PrivacyPolicy from "./privacy-policy/page";
import TC from "./TC/page";
import WhyUs from "./why-us/page";
import { notFound } from "next/navigation";

type Params = Promise<{ name: string }>

export default async function DynamicPage({ params }: { params: Params }) {

  const  {name}  = await  params;


  const routeMapping: Record<string, keyof typeof routeContent> = {
    "about-us": "aboutUs",
    "company-description": "companyDescription",
    "FAQ": "FAQ",
    "our-services": "ourServices",
    "privacy-policy": "privacyPolicy",
    "TC": "TC",
    "why-us": "whyUs"
  };

  const routeContent = {
    aboutUs: {
      title: "About Us",
      content: <AboutUs />
    },
    companyDescription: {
      title: "Company Description",
      content: <CompanyDescription/>
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

  const routeKey = routeMapping[name];
  const pageData = routeKey ? routeContent[routeKey] : null;

  if (!pageData) {
    return notFound();
  }

  return (
    <div className="page-container">
      <div className="content">
        {pageData.content}
      </div>
    </div>
  );
}