import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home() {
  return (
    <div
      className=" bg-bgColor min-h-screen container 
    scrollbar scrollbar-thin scrollbar-track-red 
    scrollbar-bgColor"
    >
      <div className="">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
export default Home;
