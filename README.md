
# 🎵 **Music Player App**

### *A modern, elegant music streaming UI inspired by Gaana, Songdew & Spotify*

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Vite-Fast-purple?style=for-the-badge&logo=vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-Modern-0ea5e9?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Music%20Player-Premium-black?style=for-the-badge" />
</p>

---

## 🌟 **Overview**

This project is a **high-end music player UI** built with:

* ⚛️ **React**
* ⚡ **Vite**
* 🎨 **Tailwind CSS**
* 🎧 **Custom Audio Player Context**

It features a stunning gradient UI, dynamic album colors, responsive mobile/desktop views, and an interactive audio player.

---

# 🎨 **Screenshots**

### 🎼 Desktop Layout




<img width="1114" height="767" alt="image" src="https://github.com/user-attachments/assets/dd238d36-99a0-4b17-83b0-95a2d83f8a4e" />
)


### 📱 Mobile UI



<img width="671" height="427" alt="image" src="https://github.com/user-attachments/assets/7e4916b0-a36b-4a03-a321-38c88bd3d7c8" />

![<img width="398" height="766" alt="image" src="https://github.com/user-attachments/assets/e377ca13-cb71-4d4d-98c4-803e20c628d0" />
)


### 🎧 Mini Player




<img width="997" height="515" alt="image" src="https://github.com/user-attachments/assets/bb2b5ad3-be89-4394-b479-705c63df8956" />



---

# ✨ **Features**

### 🎧 Audio Player

* Play / Pause
* Next / Previous
* Seek
* Real-time current time + duration
* Wave visualizer
* Auto-recently played tracking

### 🎨 UI Features

* Dynamic background gradients (based on album art)
* Smooth glassmorphism
* Animated hover effects
* Clean modern icons
* Sticky mini player (mobile & desktop)

### 📚 Library Features

* Search by title
* Tabs: All Tracks | Favourites | Recently Played
* Add/remove favourites
* Scrollable sidebar
* Active track highlight

### 📱 Responsive

* Mobile slide-out sidebar
* Optimized layout for all screens
* Touch-friendly controls

### 🧩 Extra Sections

* “Featured Playlists for You”
* Songdew-style Footer (Brands, Artists, Company, Contact, Social Links)

---

# 📦 **Tech Stack**

| Technology       | Used For                    |
| ---------------- | --------------------------- |
| **React**        | UI structure                |
| **Vite**         | Fast development            |
| **Tailwind CSS** | Styling                     |
| **Context API**  | Global audio controller     |
| **Custom Hooks** | Dominant color extraction   |
| **LocalStorage** | Saving favourites & recents |

---

# 🗂 **Project Structure**

```
src/
 ├── components/
 │   ├── layout/
 │   │   ├── Sidebar.jsx
 │   │   ├── SlideOutMenu.jsx
 │   │   ├── SiteFooter.jsx
 │   ├── home/
 │   │   └── FeaturedPlaylists.jsx
 │   ├── player/
 │   │   ├── Player.jsx
 │   │   ├── MiniPlayer.jsx
 │   │   ├── SeekBar.jsx
 │   │   ├── WaveVisualizer.jsx
 │   └── tracks/
 │       ├── Tabs.jsx
 │       ├── TrackList.jsx
 │       ├── TrackListItem.jsx
 │       └── EmptyState.jsx
 │
 ├── context/
 │   └── AudioPlayerContext.jsx
 │
 ├── hooks/
 │   └── useDominantColor.js
 │
 ├── utils/
 │   ├── dummyTracks.js
 │   └── formatTime.js
 │
 ├── pages/
 │   └── PlayerPage.jsx
 │
 └── main.jsx
```

---

# 🚀 **Getting Started**

### 1️⃣ Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the server

```bash
npm run dev
```

### 4️⃣ Build for production

```bash
npm run build
```

---

# 🎵 **Adding Your Own Songs**

Add new tracks in:

```
src/utils/dummyTracks.js
```

Example:

```js
{
  id: "8",
  title: "Night Runner",
  thumbnail: "https://your-image.jpg",
  musicUrl: "https://your-song.mp3",
  duration: 192,
  artistName: "DJ Nova",
}
```

---

# 🛠 **GitHub Push Commands**

Use this when uploading:

```bash
git add .
git commit -m "added UI + player updates"
git push -u origin main
```

---

# 🧑‍💻 **Author**

Made with ❤️ for music + UI lovers.

---

# 📜 **License**

This project is free for **personal & educational use**.
For commercial licensing → contact developer.

