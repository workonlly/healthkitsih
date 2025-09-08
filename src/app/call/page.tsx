import { Mic, MoreVertical, PhoneOff, Video } from "lucide-react";

export default function VideoCall() {
  return (
    <div className="flex h-screen bg-background text-white p-4 gap-4">

      <div className="flex-1 bg-[#262626] rounded-lg relative flex items-center justify-center">
        <div className="w-40 h-40 bg-primary rounded-full flex items-center justify-center"/>
        <div className="absolute bottom-4 right-4 bg-[#1E1E1E] w-25 h-25 flex justify-center items-center rounded-[20px]">
          <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
        </div>
      </div>
      <div className="w-64 bg-[#262626] rounded-lg flex flex-col justify-between">
        <div className="p-4 font-semibold">Chat Area</div>
        <div className="p-4">
          <input
            type="text"
            placeholder="Type something"
            className="w-full rounded-lg p-2 text-black bg-white "
          />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-6">
        <button className="bg-gray-700 p-4 rounded-full">
          <Video className="w-6 h-6" />
        </button>
        <button className="bg-red-600 p-4 rounded-full">
          <PhoneOff className="w-6 h-6" />
        </button>
        <button className="bg-gray-700 p-4 rounded-full">
          <Mic className="w-6 h-6" />
        </button>
        <button className="bg-gray-700 p-4 rounded-full">
          <MoreVertical className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
