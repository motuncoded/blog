import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

 function Home() {
  return (
    <div className=" bg-bgColor h-screen w-screen p-4 ">
      <div className="container">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
export default Home;
