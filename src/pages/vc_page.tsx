import Background from "../components/background";

const vc_page = () => {
  return (
    <div>
      <Background/>

      <div className="absolute inset-0 z-10">

        <div className="absolute left-24 right-[480px] top-5 bottom-28 rounded-2xl bg-neutral-800/80 backdrop-blur-sm border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <div className="relative bottom-5 h-full w-full flex items-center justify-center">
            <div className="h-48 w-48 md:h-64 md:w-64 rounded-full bg-gray-300/90" />
            <div className="relative top-44 left-32 h-48 w-80 rounded-2xl bg-neutral-800/80 border border-white/10 flex items-center justify-center">
              <div className="bg-white h-28 w-28 rounded-full"></div>
            </div>
          </div>
        </div>


        <div className="absolute right-16 top-24 w-[360px]">
          <div className="rounded-2xl bg-neutral-800/80 backdrop-blur-sm border border-white/10 p-6 h-[550px] text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <div className="text-lg font-semibold">Chat Area</div>
            <div className="mt-4 h-[440px] rounded-xl bg-black/10 border border-white/5" />
            <button className=" h-9 w-80  align-middle rounded-full bg-white  text-gray-600 text-balance shadow-md hover:bg-black transition">
              Type something...
            </button>
          </div>
        </div>


        <div className="absolute left-4 right-96 bottom-8 flex items-center justify-center gap-12">
          <button className="h-14 w-24 rounded-2xl bg-gray-200 text-black shadow-md hover:bg-gray-300 transition">
            <span className="text-xl"></span>
          </button>
          <button className="h-14 w-24 rounded-2xl bg-gray-200 text-black shadow-md hover:bg-gray-300 transition">
            <span className="text-xl"></span>
          </button>
          <button className="h-14 w-24 rounded-2xl bg-gray-200 text-black shadow-md hover:bg-gray-300 transition">
            <span className="text-xl"></span>
          </button>
          <button className="h-14 w-14 rounded-2xl bg-gray-200 text-black shadow-md hover:bg-gray-300 transition">
            <span className="text-xl">⋮</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default vc_page;
