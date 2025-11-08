import "../src/styles/App.css";
import meminfo from "./data/aboutUs_info.json";

function AboutUs({aboutUsRef}) {
  const content = meminfo;

  return (
    <section ref={aboutUsRef} className="flex flex-col bg-gray-200 text-black px-20 h-full justify-center items-center pb-20">
      {/* Title */}
      <h1 className="overview-text text-accent-2 p-10">About Us</h1>
      <div className="card-containers">
        {content.map((person, index) => (
          <div key={index} className="card">
            <div className="card-content">
              <img className="img-frame" src={person.img} alt="" />
              <h2 className="text-xl font-bold text-accent-2 font-space-grotesk">{person.name}</h2>
              <p>{person.context}</p>
            </div>
            <div className="flex flex-row bg-accent-2 p-10 mt-auto h-20 w-full align-middle items-center gap-5">
              <a href={person.links.github}><img className="h-6 w-6 items-center" src="git.png"  alt="" /></a>
              <a  href={person.links.linkedin}><img className="h-10 w-10 items-center" src="in.png" alt="" /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutUs;
