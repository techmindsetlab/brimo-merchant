import BannerDivider from "@/components/section/custom-rectangle";
import HomeBanner from "@/components/section/home-banner";
import HomeDescription from "@/components/section/home-description";
import HomeFeature from "@/components/section/home-feature";
import MerchantFeatures from "@/components/section/merchant-features";
import { merchantIcon } from "@/helpers/const";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-32">
      <div className="max-w-screen-xl px-4 mx-auto">
        <HomeBanner />
      </div>
      <div className="relative">
        <BannerDivider
          color="#00529C"
          height={144}
          className={"-mt-24 absolute z-10 right-0"}
          size={1100}
        />
        <BannerDivider
          color="#15A6DF"
          className={"mt-8 right-0 absolute z-10"}
          size={1330}
          height={105}
        />
        <div className="mt-[4.2rem] z-10 absolute gap-8 right-40 flex">
          {merchantIcon.map((item, index) => (
            <Image key={index} src={item} alt="" width={200} height={200} />
          ))}
        </div>
      </div>
      <div className="mt-56">
        <HomeDescription />
      </div>
      <div className="max-w-screen-xl mt-24 px-4 mx-auto">
        <HomeFeature />
      </div>
      <MerchantFeatures />
    </div>
  );
}
