import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TopStories from "./components/TopStories";
import RecentStories from "./components/RecentStories";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <main className="container mx-auto px-4">
        <TopStories />
        <RecentStories />
      </main>
      <Footer />
    </div>
  );
}
