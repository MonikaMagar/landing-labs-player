// src/components/home/FeaturedPlaylists.jsx
import React from "react";
import { featuredPlaylists } from "../../data/featuredPlaylists";

const FeaturedPlaylists = () => {
  return (
    <section className="border-t border-white/10 px-4 pb-4 pt-3 lg:px-8 lg:pb-6 lg:pt-4">
      <div className="max-w-6xl mx-auto">
        {/* Header row */}
        <div className="flex items-center justify-between mb-3 lg:mb-4">
          <h2 className="text-base lg:text-lg font-semibold">
            Featured playlists for you
          </h2>
          <button className="text-xs lg:text-sm text-white/70 hover:text-white flex items-center gap-1">
            More
            <span>›</span>
          </button>
        </div>

        {/* Horizontal scroll list */}
        <div className="flex gap-4 overflow-x-auto pb-1 -mx-1 px-1">
          {featuredPlaylists.map((pl) => (
            <button
              key={pl.id}
              className="min-w-[160px] max-w-[160px] lg:min-w-[190px] lg:max-w-[190px] text-left"
            >
              <div className="relative rounded-2xl overflow-hidden bg-white/5 aspect-[4/3]">
                <img
                  src={pl.image}
                  alt={pl.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  {pl.tag && (
                    <p className="text-[10px] uppercase tracking-wide text-white/70 mb-0.5">
                      {pl.tag}
                    </p>
                  )}
                  <p className="text-sm font-semibold leading-tight">
                    {pl.title}
                  </p>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-sm font-semibold">{pl.title}</p>
                <p className="text-[11px] text-white/60 overflow-hidden text-ellipsis whitespace-nowrap">
                  {pl.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlaylists;
