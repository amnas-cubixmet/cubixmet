"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectVideoPreviewProps = {
  name: string;
  image: string;
  video?: string;
};

/**
 * Project walkthroughs can be large MOV files. Render only the thumbnail
 * until the visitor explicitly requests playback to avoid fetching eight
 * heavy videos during a portfolio visit.
 */
export default function ProjectVideoPreview({
  name,
  image,
  video,
}: ProjectVideoPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlaybackError, setHasPlaybackError] = useState(false);

  return (
    <>
      <Image
        src={image}
        alt={`${name} portfolio preview`}
        fill
        sizes="(max-width: 767px) calc(100vw - 36px), (max-width: 1279px) 50vw, 33vw"
        loading="lazy"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {video && !isPlaying && !hasPlaybackError && (
        <button
          type="button"
          aria-label={`Play ${name} project video preview`}
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/15 transition-colors hover:bg-black/30 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#1677FF]"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/35 bg-black/75 px-4 py-3 text-[12px] font-semibold text-white shadow-xl backdrop-blur-sm">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M8 4.6a1 1 0 0 1 1.5-.86l11 7.4a1 1 0 0 1 0 1.72l-11 7.4A1 1 0 0 1 8 19.4V4.6Z" />
            </svg>
            Watch preview
          </span>
        </button>
      )}

      {video && isPlaying && !hasPlaybackError && (
        <video
          className="absolute inset-0 z-10 h-full w-full bg-black object-contain"
          src={video}
          poster={image}
          playsInline
          autoPlay
          muted
          loop
          controls
          preload="none"
          aria-label={`${name} project walkthrough video`}
          onError={() => {
            setHasPlaybackError(true);
            setIsPlaying(false);
          }}
        >
          Your browser does not support this video.
        </video>
      )}

      {video && hasPlaybackError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-black/80 p-5 text-center">
          <p className="text-[12px] font-medium text-white">
            Preview isn&apos;t supported by this browser.
          </p>
          <a
            href={video}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/40 px-4 py-2 text-[12px] font-semibold text-white transition-colors hover:border-[#1677FF] hover:bg-[#1677FF]/20"
          >
            Open original video
          </a>
        </div>
      )}
    </>
  );
}
