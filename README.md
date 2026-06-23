# FusionAI - Multi-Modal AI Assistant

Hey there! This is **FusionAI**, a clean, premium, and modern multi-modal AI assistant. It allows you to have conversations, generate artwork from text, and upload images to analyze them using advanced AI models.

I built this with React (Vite) and styled it using a custom obsidian dark theme, thin border gradients, and clean glassmorphism patterns.

---

## 🚀 Key Features

*   💬 **Let's Chat:** Have smart conversations powered by Google's **Gemini 2.5 Flash** model.
*   🎨 **Generate Image:** Create stunning visuals by describing what you want, powered by the **FLUX.1-schnell** model on Hugging Face.
*   🖼️ **Upload & Analyze:** Upload any image and ask questions about it using Gemini's vision capability.
*   💎 **Premium UI:** Featuring a custom obsidian dark background, soft color-matched gradient borders (green, cyan, and orange), a floating glass console, and a responsive layout that works great on mobile.

---

## 🛠️ Tech Stack

*   **Frontend:** React (Vite)
*   **Icons:** React Icons (`ri`, `md`, `fi`, `fa6`)
*   **Styling:** Vanilla CSS (Outfit Font, Glassmorphic variables)
*   **APIs:** Google Gemini Developer API & Hugging Face Inference API

---

## ⚙️ How to Setup

### 1. Clone the project and install dependencies
```bash
npm install
```

### 2. Configure environment variables
Create a `.env` file in the root directory (you can copy `.env.example`) and add your API keys:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_HF_API_KEY=your_hugging_face_api_key_here
```

*Note: You can get a Gemini API Key from Google AI Studio, and a Hugging Face API Key from your Hugging Face account settings.*

### 3. Run the development server locally
```bash
npm run dev
```
Open your browser and navigate to the local URL (usually `http://localhost:5173/` or `http://localhost:5174/`).

### 4. Build for Production
If you want to compile and bundle the files for hosting:
```bash
npm run build
```
This will compile everything into the `dist` folder.
