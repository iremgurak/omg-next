"use client";

export default function About() {
  return (
    <div className="flex flex-col w-full gap-y-4">
      {/* About Us Banner */}
      <section
        id="about-us"
        className="relative w-full min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">About Us</h1>
          <p className="text-lg md:text-xl text-white/90 font-medium drop-shadow-md">
            This is the about page. Add your company story, mission, and team here.
          </p>
        </div>
      </section>

      {/* Global Reach Banner */}
      <section
        id="global-reach"
        className="relative w-full min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/50" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">Global Reach</h2>
          <p className="text-lg md:text-xl text-white/90 font-medium drop-shadow-md">
            Describe your international presence, partnerships, and markets served.
          </p>
        </div>
      </section>

      {/* Policies Banner */}
      <section
        id="policies"
        className="relative w-full min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-green-900/50" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">Policies</h2>
          <p className="text-lg md:text-xl text-white/90 font-medium drop-shadow-md">
            Summarize your company policies, values, and commitments.
          </p>
        </div>
      </section>

      {/* Certificates Banner */}
      <section
        id="certificates"
        className="relative w-full min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-yellow-900/40" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">Certificates</h2>
          <p className="text-lg md:text-xl text-white/90 font-medium drop-shadow-md">
            Showcase your certifications, awards, and recognitions.
          </p>
        </div>
      </section>
    </div>
  );
}
