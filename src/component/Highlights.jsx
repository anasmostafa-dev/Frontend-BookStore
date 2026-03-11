import { BadgeCheck, ShieldCheck, ShoppingCart, Tag } from "lucide-react";

const highlightsData = [
  {
    icon: ShoppingCart,
    title: "Free Delivery",
    desc: "Enjoy fast and free shipping on all orders",
  },
  {
    icon: BadgeCheck,
    title: "Quality Guarantee",
    desc: "Premium quality for every book we offer",
  },
  {
    icon: Tag,
    title: "Daily Offers",
    desc: "Discover new deals and discounts every day",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    desc: "100% protected and safe checkout",
  },
];

const Highlights = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 mb-10 mx-auto px-4 md:px-16 lg:px-24">
      {highlightsData.map((item) => {
        return (
          <div key={item.title} className="flex items-center gap-5 rounded-xl md:shadow border-gray-900! md:bg-gray-100 p-3">
            <item.icon className="text-[26px] text-logo-gold" />
            <div>
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Highlights;
