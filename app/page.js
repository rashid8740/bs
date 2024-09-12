import Footer from "@/components/Footer";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow">
        <Steps />
      </main>
      <Footer />
    </div>
  );
}
