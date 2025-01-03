import HomeBanner from "@/components/section/home/home-banner";
import HomeDescription from "@/components/section/home/home-description";
import HomeFeature from "@/components/section/home/home-feature";
import HomePromo from "@/components/section/home/home-promo";
import MerchantFeatures from "@/components/section/home/home-merchant-features";
import { promoDummy } from "@/helpers/dummy";
import HomeBenefit from "@/components/section/home/home-benefit";
import HomeMerchantStep from "@/components/section/home/home-merchant-step";
// import HomeFAQ from "@/components/section/home/home-faq";
import Divider from "@/components/base/divider";

export default function Home() {
  return (
    <div className="mt-28">
      <div className="lg:max-w-screen-xl px-4 mx-auto">
        <HomeBanner />
        <Divider />
      </div>
      <div className="mt-12">
        <HomeDescription />
      </div>
      <div className="max-w-screen-xl mt-12 lg:mt-24 px-4 mx-auto">
        <HomeFeature />
      </div>

      {/* BELOM MOBILE RESPONSIVE */}
      <MerchantFeatures />

      <HomePromo title="Promo Special" data={promoDummy} />
      <div className="max-w-screen-xl mt-24 mx-auto">
        <HomeBenefit />
      </div>

      {/* BELOM MOBILE RESPONSIVE */}
      <HomeMerchantStep
        containerStyle={
          "-mt-28 mb-24 pt-56 pb-28 bg-cover xl-wide:pt-72 bg-no-repeat px-24 bg-secondary-blue-wavy"
        }
      />

      
    </div>
  );
}
