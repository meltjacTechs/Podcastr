"use client";
import PodcastCard from "@/components/PodcastCard";
import { podcastData } from "@/constants";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Home() {  
  // const tasks = useQuery(api.tasks.get);
  
  return (
    <div className="mt-9 flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcast</h1>
        <div className="podcast_grid">
            {podcastData.map(({id, title, description, imgURL}) => (
              <PodcastCard
               key={id}
               imgUrl={imgURL}
               title={title}
               description={description}
               podcastId={id}
              />
            ))}
        </div>
      </section>
    </div>
  );
}
