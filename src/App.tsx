import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      nickUrl: "diego3g",
      name: "Diego Fernandes",
      role: "CTO @Roecketseat",
    },

    content: [
      { type: "paragraph", content: `Fala galeraa 👋` },
      {
        type: "paragraph",
        content: `Acabei de subir mais um projeto no meu portifa. 
      É um projeto que fiz no NLW Return, evento da Rocketseat. 
      O nome do projeto é DoctorCare 🚀`,
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    time: new Date("2022-11-28 20:30:00"),
  },
  {
    id: 2,
    author: {
      nickUrl: "maykbrito",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },

    content: [
      { type: "paragraph", content: `Fala galeraa 👋` },
      {
        type: "paragraph",
        content: `Acabei de subir mais um projeto no meu portifa. 
      É um projeto que fiz no NLW Return, evento da Rocketseat. 
      O nome do projeto é DoctorCare 🚀`,
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    time: new Date("2022-11-28 14:30:00"),
  },
  {
    id: 3,
    author: {
      nickUrl: "Mateus8741",
      name: "Mateus Tavares",
      role: "Web Developer",
    },

    content: [
      { type: "paragraph", content: `Fala galeraa 👋` },
      {
        type: "paragraph",
        content: `Acabei de subir mais um projeto no meu portifa. 
      É um projeto que fiz no NLW Return, evento da Rocketseat. 
      O nome do projeto é DoctorCare 🚀`,
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    time: new Date("2022-11-28 18:30:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              time={post.time}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
