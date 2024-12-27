import BannerDivider from "@/components/section/banner-divider";
import HomeBanner from "@/components/section/home-banner";

export default function Home() {
  return (
    <div className="mt-32">
      <div className="max-w-screen-xl px-4 mx-auto">
        <HomeBanner />
      </div>
      <div className="relative">
        <BannerDivider color="#00529C" className={"-mt-24 absolute -z-10 right-0"} />
      </div>
    </div>
  );
}
