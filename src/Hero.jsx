import "../src/styles/App.css";

function Hero() {
  return (
    <section class="min-h-screen bg-gradient-to-b from-orange-400 via-orange-500 to-orange-700 flex items-center justify-center px-10">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-20 max-w-6xl w-full my-40">
        <div class="flex flex-col justify-center items-start gap-6 max-w-2xl text-center md:text-left">
          <h1 class="text-7xl font-bebas-neue text-white leading-tight">
            Hello, 
            Scam,
            Goodbye.
          </h1>
          <p class="text-lg md:text-xl text-white font-space-grotesk leading-relaxed">
            This website is about addressing the growing problem of SMS spam and
            scam messages in the Philippines. Anchored on{" "}
            <span class="font-semibold">
              SDG 9 (Industry, Innovation, and Infrastructure)
            </span>
            , it explores how machine learning and technological innovation can
            strengthen digital infrastructure and protect users from fraud. It
            also connects to{" "}
            <span class="font-semibold">
              SDG 16 (Peace, Justice, and Strong Institutions)
            </span>
            by promoting safer communication channels and consumer trust.
          </p>

          <p class="text-lg md:text-xl text-white font-space-grotesk leading-relaxed italic">
            "Every SMS digit matters, because behind each number is one Filipino
            whose safety and trust must be protected."
          </p>

          <span class="font-space-grotesk italic text-2xl md:text-3xl text-white">
            One Digit. One Nation.
          </span>

          <button class="mt-4 px-6 py-3 bg-white text-orange-600 rounded-xl font-space-grotesk font-semibold shadow-lg hover:bg-orange-100 transition">
            Explore
          </button>
        </div>

        <div class="flex justify-center items-center">
          <img
            src="ph.png"
            alt="Philippines Graphic"
            class="max-w-sm md:max-w-md lg:max-w-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
