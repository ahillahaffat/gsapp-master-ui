// ...existing code...
export default function Index() {
  return (
    <main
      className="min-h-screen relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/frontage.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      <div className="absolute bottom-32 left-4 sm:left-6 md:left-8 lg:left-20 right-4 md:right-auto max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl py-2 md:px-0">
        <h2
            className="font-light text-white drop-shadow-md"
            style={{ fontSize: "clamp(1rem, 3.2vw, 2rem)" }}
          >
            Bergabung Bersama Kami
          </h2>

        <div className="space-y-0.5">
          <h1
            className="font-extrabold text-white leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]"
            style={{ fontSize: "clamp(1.75rem, 6vw, 4.5rem)" }}
          >
            Geometrika Studio
          </h1>

          <h2
            className="font-light text-white drop-shadow-md"
            style={{ fontSize: "clamp(1rem, 3.5vw, 3rem)" }}
          >
            Membangun Negeri
          </h2>
        </div>
      </div>
    </main>
  );
}
// ...existing code...