import AdBanner from "@/components/AdBanner";

export default function Home() {
  return (
    <>
      <div className="bg-red-500 h-screen w-full">
        <div className="bg-green-500 h-5 w-5"></div>
        <AdBanner />
      </div>
    </>
  );
}
