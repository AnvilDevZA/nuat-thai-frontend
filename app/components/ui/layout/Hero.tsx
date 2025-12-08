export default function Hero() {
    return (
        <section
  className="hero min-h-screen bg-[url('/massage.jpg')] bg-cover bg-fixed"
>
  <div className="hero-overlay opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <img src="/nuat-thai.svg" height="256" width="256" className="m-auto text-center" />
      <h1 className="mb-4 text-4xl text-[#ffb300] uppercase leading-tight font-serif font-bold">Nuat Thai</h1>
      <p className="mb-4 uppercase font-sans font-light text-md">
       Authentic Thai Massage by a Qualified Therapist from Thailand
      </p>
      <div className="flex flex-row item-center justify-center gap-4 py-2">  
        <button className="btn btn-primary bg-[#ffb300] outline-white border-white uppercase">Book Now</button>
        <button className="btn btn-outline uppercase">Learn More</button>
      </div>
    </div>
  </div>
</section>
    );
}