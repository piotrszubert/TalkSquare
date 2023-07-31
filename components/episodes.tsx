import { useState } from "react";
const episodesData = [
    {
      title: "The Art of Creativity: Unleashing Your Inner Genius",
      description: "Discover the secrets of creativity as we delve into the minds of artists, innovators, and visionaries. Unleash your own creative potential and learn how to foster creativity in all aspects of life.",
      guest: { name: "Mia Turner", profession: "Renowned Painter and Sculptor" }
    },
    {
      title: "Innovators Unplugged: Disrupting Industries with Technology",
      description: "Meet the trailblazers transforming industries through cutting-edge technology. From AI and blockchain to renewable energy, hear how innovators are shaping a better future.",
      guest: { name: "Dr. Ethan Chen", profession: "Tech Entrepreneur" }
    },
    {
      title: "Melodies of the World: A Musical Journey Across Cultures",
      description: "Embark on a global musical expedition, exploring diverse rhythms, instruments, and cultural expressions. Get inspired by the harmonies that unite us all.",
      guest: { name: "Maria Santos", profession: "World-renowned Classical Pianist" }
    },
    {
      title: "Into the Abyss: Exploring the Ocean's Hidden Wonders",
      description: "Plunge into the depths of the ocean to unravel its mysteries. Learn about marine life, coral reefs, underwater ecosystems, and the importance of ocean conservation.",
      guest: { name: "Dr. Emma Phillips", profession: "Marine Biologist and Explorer" }
    },
    {
      title: "The Human Mind: Decoding the Mysteries of Consciousness",
      description: "Journey into the realm of neuroscience and psychology as we attempt to understand consciousness, emotions, memory, and the complexities of the human mind.",
      guest: { name: "Dr. Emily Roberts", profession: "Neuroscientist and Author" }
    },
    {
      title: "From Farm to Table: Nourishing Our Planet Sustainably",
      description: "Explore the world of sustainable agriculture, organic farming, and the movement towards eco-conscious food choices. Learn how we can feed the planet without harming it.",
      guest: { name: "Ryan Cooper", profession: "Organic Farmer and Activist" }
    },
    {
      title: "Beyond the Brush: A Dive into Modern Art Movements",
      description: "Dive into the vibrant world of contemporary art as we explore diverse art movements, groundbreaking artists, and the transformative power of artistic expression.",
      guest: { name: "Maya Patel", profession: "Contemporary Artist and Social Activist" }
    },
    {
      title: "The Healing Power of Nature: Ecotherapy and Mental Wellness",
      description: "Learn about ecotherapy's positive impact on mental health and well-being. Discover how reconnecting with nature can foster healing and personal growth.",
      guest: { name: "Dr. Laura Anderson", profession: "Ecotherapist and Psychologist" }
    },
    {
      title: "A Taste of Culture: Culinary Adventures Around the Globe",
      description: "Embark on a mouthwatering journey as we savor flavors from diverse cultures. Explore culinary traditions, unique dishes, and the stories behind them.",
      guest: { name: "Chef Mia Rodriguez", profession: "Celebrity Chef and TV Personality" }
    },
    {
      title: "Sports Science: Breaking Boundaries in Athletic Performance",
      description: "Explore the intersection of sports and science, from sports psychology and nutrition to cutting-edge training techniques that push athletes to new heights.",
      guest: { name: "Dr. Adam Williams", profession: "Sports Psychologist and Performance Coach" }
    }
];


export default function Episodes() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return(
    <div>
      {episodesData.map((episode, index) => (
        <div
          key={index}
          className={`-mx-5 hover:bg-white hover:text-black px-5 hover:cursor-pointer py-3 ${
            hoveredIndex === index ? 'hovered' : ''
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(-1)}
        >
          <Link className="absolute inset-0" href={`/episodes/[id]`} as={`/episodes/${episode.id}`}></Link>
          <div className="flex flex-wrap md:flex-nowrap gap-4">
              <div>
                <img src="https://via.placeholder.com/150" alt="" />
              </div>
              <div>
                <div className="text-xl">{episode.title}</div>
                <p className={`max-w-3xl ${hoveredIndex === index ? 'text-gray-600' : 'text-gray-400'}`}>
                  {episode.description}
                </p>
              </div>
            </div>
        </div>
      ))}
    </div>
  );
}