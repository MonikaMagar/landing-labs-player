export type Track = {
  id: string;
  title: string;
  thumbnail: string;    // image URL
  musicUrl: string;     // royalty-free audio URL
  duration: number;     // seconds
  artistName: string;
};

export const tracks: Track[] = [
  {
     id: "1",
  title: "Midnight Drive",
  thumbnail: "/images/O Priya.png",
  musicUrl: "/audio/o_priya_priya.mp3",
  duration: 214,
  artistName: "Nova Lane",
  },
  {
    id: "2",
    title: "Vitthala",
    thumbnail: "/images/vitthala_streaming_artwork_1.jpg",
    musicUrl: "/audio/zenda_vitthala.mp3",
    duration: 189,
    artistName: "Nihar Mayekar ",
  },
  {
    id: "3",
    title: "Majhe Swami",
    thumbnail: "/images/swami.png",
    musicUrl: "/audio/Sobatila Nahi Koni Sobatila Majhe Swami.mp3",
    duration: 201,
    artistName: "Lunar Echo",
  },
  {
    id: "4",
    title: "Soft Breeze",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    musicUrl: "/audio/ye_jo_halka_halka.mp3",
    duration: 172,
    artistName: "Ayla Rivers",
  },
  {
    id: "5",
    title: "Odh Tuzi",
    thumbnail: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=600&q=80",
    musicUrl: "/audio/odh_toji_vaat_te.mp3",
    duration: 226,
    artistName: "Ramesh Ilave",
  },
  {
    id: "6",
    title: "Wanderlust",
    thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    musicUrl: "/audio/Badumbaaa_-_102_Not_Out_128_Kbps.mp3",
    duration: 240,
    artistName: "Harper Vale",
  },
  {
    id: "7",
    title: "Moonlit Echoes",
    thumbnail: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=600&q=80",
    musicUrl: "/audio/Barsa_Re_Barsa_-_Aag_Aur_Shola_128_Kbps.mp3",
    duration: 198,
    artistName: "Violet Shore",
  },
  {
    id: "8",
    title: "Crimson Dusk",
    thumbnail: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=80",
    musicUrl: "/audio/Chhoti_Si_Yeh_Zindagani_-_Aah_128_Kbps.mp3",
    duration: 203,
    artistName: "Evan Cross",
  },
  {
    id: "9",
    title: "Rainy Thoughts",
    thumbnail: "https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=600&q=80",
    musicUrl: "/audio/Ek_Ladki_Ko_Dekha_-_Music_-_1942_A_Love_Story_Sing_Along_128_Kbps.mp3",
    duration: 187,
    artistName: "Mira Solis",
  },
  {
    id: "10",
    title: "Skybound",
    thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
    musicUrl: "/audio/o_priya_priya.mp3",
    duration: 220,
    artistName: "Atlas Grey",
  },
];
