"use client";
import Link from "next/link";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import NotFoundAnim from "@/public/assets/not-found.json";
export default function NotFound() {
  return (
    <div className="container min-h-full mx-auto mb-8 max-w-7xl lg:px-8">
      <Player
        autoplay
        loop
        src={NotFoundAnim}
        style={{ height: "800px", width: "800px" }}
      >
        <Controls visible={false} />
      </Player>
      <div className="flex items-center justify-center w-full">
        <Link
          className="px-3 py-2 text-center text-white border rounded-md w-44 bg-[#ff80b5c8] hover:bg-[#ff80b5]"
          href="/"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
