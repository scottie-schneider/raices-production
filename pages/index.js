import TopNav from "../components/Navigation/TopNav";
import BottomNav from "../components/Navigation/BottomNav";
import ASearchFilter from "../components/Search/ASearchFilter";
import LocationCard from "../components/Cards/LocationCard";
import Styled from "styled-components";
import Features from "../components/LandingPage/Features";
// https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585
// note: add a height to the :after content otherwise it won't work. Go figure.
const CardGrid = Styled.div`
  height: 300px;
  margin-top: 1rem;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 10px repeat(3, minmax(250px, 1fr)) 10px;
  grid-template-rows: 300px;
  overflow-x: scroll;
  overflow-y: hidden;
  flex-grow: 1;
  flex-shrink: 0;
  align-items: center;  
  @media(max-width: 640px){
    &::before,
    &::after {
    content: "";
      width: 10px;    
      height: 1px;
    }
  }
  @media(min-width: 640px){
    padding: 0 3rem;
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

const property = {
  imageUrl:
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  imageAlt: "Rear view of modern home with pool",
  beds: 3,
  baths: 2,
  title: "Modern executive home in city center - the heart of Los Angeles",
  priceInCents: 190000,
  formattedPrice: "$1,900.00",
  reviewCount: 34,
  rating: 4,
};

const locations = [
  {
    name: "Envigado",
    image:
      "https://res.cloudinary.com/dvqw5uhrr/image/upload/v1575403683/Raices/Envigado/envigado.png",
    subtitle: "Greenery and food",
  },
  {
    name: "Laureles",
    image:
      "https://res.cloudinary.com/dvqw5uhrr/image/upload/v1575403905/Raices/Laureles/laureles_medellin.png",
    subtitle: "Greenery and food",
  },
  {
    name: "Poblado",
    image:
      "https://res.cloudinary.com/dvqw5uhrr/image/upload/v1575403179/Raices/Poblado/poblado.jpg",
    subtitle: "Greenery and food",
  },
];

const Explore = (props) => {
  return (
    <div className="relative flex flex-col w-screen h-full flex-grow bg-white overflow-y-scroll antialiased">
      <div className="hidden md:block px-12 mt-12">
        <TopNav />
      </div>
      <div className="sm:py-6 pb-12 flex flex-col h-full flex-grow mx-0  flex-grow">
        <div className="px-4 mb-10 sm:px-12">
          <ASearchFilter />
        </div>
        {/* Location cards */}
        <CardGrid>
          {locations.map((location) => {
            return <LocationCard location={location} />;
          })}
        </CardGrid>
        {/* Features section */}
        <div className="px-4 pb-6 sm:pb-0">
          <Features />
        </div>
      </div>
      <div className="flex w-full md:hidden">
        <BottomNav />
      </div>
    </div>
  );
};
export default Explore;
