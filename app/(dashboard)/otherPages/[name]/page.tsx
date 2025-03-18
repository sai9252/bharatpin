import AboutUs from "./aboutUs/AboutUs";
import CompanyDescription from "./companyDescription/companyDescription";
import FAQ from "./FAQ/FAQ";
import OurServices from "./ourServices/ourServices";
import PrivacyPolicy from "./privacyPolicy/privacyPolicy";
import TC from "./TC/TC";
import WhyUs from "./whyUs/WhyUs";

export default async function DynamicPage({ params }: { params: { name: string } }) {
    // Access the dynamic parameter with params.name
    const { name } = await params; // No need for await here
  
    // Define content for each route
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
        content: <FAQ/>
      },
      ourServices: {
        title: "Our Services",
        content: <OurServices/>
      },
      privacyPolicy: {
        title: "Privacy Policy",
        content: <PrivacyPolicy/>
      },
      TC: {
        title: "Terms and Conditions",
        content: <TC/>
      },
      whyUs: {
        title: "Why Choose Us",
        content: <WhyUs/>
      }
    };
  
    // Get content for the current route, or use a default if route doesn't exist
    const pageData = routeContent[name as keyof typeof routeContent]
  
    return (
      <div className="page-container">
        <div className="content">
          {pageData.content}
        </div>
      </div>
    );
  }