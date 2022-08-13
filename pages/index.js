import Head from "next/head";
import Home from "../components/home";
import About from "../components/about";
import Creations from "../components/hobbies";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Education from "../components/education";
import Experience from "../components/experience";
import Schedule from "../components/schedule";

export default function Main() {
  return (
    <html className="scroll-smooth bg-dasar">
      <Head>
        <title>Ghani Azh</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <div className="md:p-0 md:pb-8 pt-10 pb-4 px-6 flex-col">
        <div className="md:p-0 py-2.5 px-2.5 w-100">
          <Home />
          <About />
          <Education />
          <Schedule />
          <Experience />
          <Creations />
          <Footer />
        </div>
        <Sidebar />
      </div>
    </html>
  );
}