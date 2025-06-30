# 🎮 Game Hub

**Game Hub** is a sleek and responsive video game discovery web app built with **React**, **TypeScript**, and **Vite**. It allows users to explore and filter games based on platform, genre, rating, and more using the [RAWG Video Games API](https://rawg.io/apidocs). The app also features clean UI components, dark mode support, and loading skeletons for better UX.

---

## 🧠 Features

- 🔍 Search for games by title
- 🎮 Filter by **genre**, **platform**, and **sort order**
- 🧮 See critic scores with color-coded ratings
- 😃 Emoji indicators based on ratings
- 🌗 Toggle light/dark mode (Chakra UI)
- 🔄 Skeleton loading states for smoother UX
- ⚡ Super fast build & reload with **Vite**

---

## 🛠 Tech Stack

- **Framework:** React (with Vite)
- **Language:** TypeScript
- **UI Library:** Chakra UI
- **Animation:** Framer Motion
- **API:** [RAWG.io Game Database](https://rawg.io)
- **Custom Hooks & Reusable Components**

---

## 📁 Project Structure

```
src/
├── App.tsx                  # Main component
├── main.tsx                 # React entry point
├── index.css / App.css      # Styles
├── assets/                  # Images/icons
├── components/              # Reusable UI components
│   ├── GameCard, NavBar, Emoji, PlatformSelector, etc.
├── hooks/                   # Custom React hooks (e.g., useGenres, useGames)
├── service/                 # API calls and data fetching logic
├── data/                    # Static or mock data
├── theme.ts                 # Chakra UI custom theme
```

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/game-hub.git
cd game-hub
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

---

## 🌐 Deployment

To deploy using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

---

## 📸 Screenshots

![Game Hub UI](./screenshots/Screencast.mp4)

---

## 📌 Credits

- Game data: [RAWG API](https://rawg.io/apidocs)
- UI Framework: [Chakra UI](https://chakra-ui.com/)
- Developer: **Eyob Mulugeta** ✨

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
