import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import episodesData from '@/data/episodesData'

type EpisodesPropsType = {
    limit?: number,
    ascending?: boolean, 
}

export default function Episodes({limit, ascending = true}: EpisodesPropsType) {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  let episodesToDisplay = [...episodesData];

  if(!ascending) {
    episodesToDisplay.reverse();
  }

  episodesToDisplay = limit ? episodesToDisplay.slice(0, limit) : episodesToDisplay;

  return(
    <div>
      {episodesToDisplay.map((episode, index) => (
        <div
          key={index}
          className={`-mx-5 hover:bg-white hover:text-black px-5 hover:cursor-pointer py-3 relative ${
            hoveredIndex === index ? 'hovered' : ''
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(-1)}
        >
          <Link className="absolute inset-0" href={`/episodes/[id]`} as={`/episodes/${episode.id}`}></Link>
          <div className="flex flex-wrap md:flex-nowrap gap-4">
              <div>
                <Image
                  width={150}
                  height={150}
                  quality={100}
                  src={`/${episode.id}.jpg`}
                  alt="episode image"
                />
              </div>
              <div>
                <div className="text-xl mb-1 font-bold">
                  {episode.id < 10 ? `#0${episode.id}` : `#${episode.id}`} {episode.guest.name}
                </div>
                <div className="font-semibold">
                  {episode.title}
                </div>
                <p className={`max-w-xl ${hoveredIndex === index ? 'text-gray-600' : 'text-gray-400'}`}>
                  {episode.description}
                </p>
              </div>
            </div>
        </div>
      ))}
    </div>
  );
}