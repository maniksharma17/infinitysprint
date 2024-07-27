import Navbar from "@/components/Navbar";
import { ServicesBannerContent } from "@/constants/services";
import Footer from "@/components/Footer";
import { clients } from "@/constants/clients";
import { partners } from "@/constants/partners";
import Image from "next/image";
import Form from "@/components/Form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import HomeBanner from "@/components/HomeBanner";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return <div className="bg-black text-white w-screen">
    <Navbar></Navbar>
    <HomeBanner></HomeBanner>
    <OurServices></OurServices>
    <WhyChooseUs></WhyChooseUs>
    <FeaturedSection></FeaturedSection>
    <CallToAction></CallToAction>
    <Footer></Footer>
    <Form></Form>
  </div>;
}


const OurServices = () => {
  return (
    <div className="text-black bg-white py-16 mt-16 max-sm:mt-8 h-auto relative">
      <div className="clipart-left z-0"></div>
      <div className="flex flex-col gap-5 max-md:gap-2 max-md:justify-center z-50">
        <h1 className="font-normal max-sm:text-4xl text-7xl w-fit m-auto text-center z-50">OUR SERVICES</h1>
        <p className="text-light w-2/3 max-sm:w-full max-sm:p-4 m-auto text-justify z-50">We provide a wide range of Digital Marketing & IT Services for your business.  Our experts work on your complete digital landscape and align it with your business goals. Our team members give their attention to the clients’  exponential growth regardless of commitment. We provide the most economical approach to ensure that your business is surely marketed.</p>
      </div>
      <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:px-8 max-md:pt-6 px-16 pt-16 gap-5 z-50">
        {ServicesBannerContent.map(service => {
          return <Accordion type="single"  collapsible key={service.title} className="z-50">
            <AccordionItem value={service.title}>
              <AccordionTrigger>{service.title}</AccordionTrigger>
              <AccordionContent>
                {service.description}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        })}
      </div>
    </div>
  )
}

const WhyChooseUs = () => {
  return (
    <div className="relative bg-gray-100 text-black h-auto z-50 py-16 flex gap-10 flex-col w-screen max-sm:pl-5 pl-16 justify-start pt-16">
      <div className="clipart-right"></div>
      <div className="flex flex-col gap-2">
        <h1 className="text-7xl max-sm:text-4xl font-normal ">WHY CHOOSE US?</h1>
        <p className="font-light text-md w-1/3 max-sm:w-full">There are a lot of online marketing companies out there offering a bunch of digital marketing services. So why choose us over them? What makes us unique? </p>
      </div>

      <ul className="list-disc w-2/3 z-50 max-sm:text-sm max-sm:w-full max-sm:px-4 text-lg leading-8 flex flex-col gap-2">
        <li>First, we treat each company and brand a unique project & the approach for each project is different. So, all our services are tailor made for you.</li>
        <li>At InfinitySprint, we create <strong>our own strategies, funnels, and marketing solutions</strong> to boost your brand in order to get on the top.</li>
        <li>We are obsessed with <strong>ROI, targeted acquisition, Retention and building a BRAND</strong>. Our team is behind the early and continued success of many startups, established brands and corporations across the globe. </li>
        <li>We make <em>“digital beautiful!”</em> Every story we tell, every brand we build, and every marketing strategy we develop not only looks attractive but feels and functions ravishing too.</li>
      </ul>
      
    </div>
  )
}

const FeaturedSection = () => {
  return <div className="flex flex-col z-50 py-12 justify-evenly max-sm:gap-10 h-auto w-screen bg-white">
  <div className="clipart-left-2"></div>
  <div className="flex z-50 w-full flex-col items-center">
    <h1 className="text-5xl max-sm:text-4xl m-0 bg-black font-normal text-white">Our Clients</h1>
    <div className="flex flex-row max-sm:flex-col w-full items-center justify-center gap-10">
      {clients.map(client=>{
        return <div key={client.title}>
            <Image className="max-sm:w-[150px]"
            src={client.imageLink}
            alt={client.title}
            width={250}
            height={250}
            ></Image>
          </div>
      })}
    </div>
    </div>

    <div className="flex z-50 w-full flex-col items-center">
    <h1 className="text-5xl bg-black max-sm:text-4xl font-normal mb-5 text-white">Our Partners</h1>
    <div className="flex flex-row max-sm:flex-col m-0 w-full items-center justify-center gap-10 max-sm:gap-2">
      {partners.map(partner=>{
        return <div key={partner.title}>
            <Image className={`max-sm:${partner.title=='Google'?'w-[150px]':'w-[150px]'} max-sm:${partner.title=='Google'?'h-[100px]':'h-auto'}`}
            src={partner.imageLink}
            alt={partner.title}
            width={300}
            height={300}
            ></Image>
          </div>
      })}
    </div>
    </div>
    </div>
}

