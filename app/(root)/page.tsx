"use client";
import React from "react";
import PodcastCard from "@/components/PodcastCard";
// import { Button } from "@/components/ui/button";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
// import { Podcast } from "lucide-react";

const Home = () => {
  // const tasks = useQuery(api.tasks.get);
  const trendingPodcasts = useQuery(api.podcast.getTrendingPodcasts);

  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcast</h1>
        <div className="podcast_grid">
          {trendingPodcasts?.map(
            ({ _id, podcastTitle, podcastDescription, imageUrl }) => (
              <PodcastCard
                key={_id}
                imgUrl={imageUrl as string}
                title={podcastTitle}
                description={podcastDescription}
                podcastId={0}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
