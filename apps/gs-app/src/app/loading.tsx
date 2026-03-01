export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#032972] border-t-transparent rounded-full animate-spin" />
        <p className="text-[#032972] text-sm font-medium animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
