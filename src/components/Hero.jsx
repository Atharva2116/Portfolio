
import "../components/css/hero.css"
function Hero() {
  return (
    <section className="bg-gray-900 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text">Hi, I'm Atharva Dandgawhal</h1>
        <p className="text-xl mt-4">Bachelor of Engineering | Web Developer | Data Science Enthusiast</p>
        <a href="https://shorturl.at/Cjwg8" className="mt-6 inline-block bg-blue-500 px-6 py-3 rounded-full text-white hover:bg-blue-600">Get in Touch  <box-icon name='linkedin' type='logo' color='white' ></box-icon></a>
        
      </div>
    </section>
  );
}

export default Hero;
