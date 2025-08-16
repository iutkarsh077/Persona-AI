# Persona AI Chat App
![Persona AI Screenshot](http://res.cloudinary.com/dakddv1pm/image/upload/v1755339445/posts/skezz2oxejc9aelrrpd0.png)

## 📌 Overview
The **Persona AI Chat App** is a Next.js-based application that allows users to interact with AI personalities that embody the characteristics, speaking style, and knowledge of influential tech visionaries.

Currently featuring **Sam Altman** (CEO of OpenAI) and **Elon Musk** (CEO of Tesla, SpaceX & xAI), this app provides an immersive conversational experience where you can discuss AI development, space exploration, technology, entrepreneurship, and the future of humanity with these iconic personalities.

Each persona is meticulously crafted with detailed background information, authentic communication patterns, and domain expertise to ensure responses stay true to character throughout the conversation.

---

## 🎭 Available Personas

### Sam Altman - CEO of OpenAI
- **Expertise**: AI/AGI development, startups, technology leadership
- **Communication Style**: Thoughtful, analytical, long-term focused
- **Topics**: Artificial intelligence, AI safety, Y Combinator insights, startup advice

### Elon Musk - Multi-Company CEO  
- **Expertise**: Space technology, electric vehicles, engineering innovation
- **Communication Style**: Direct, first-principles thinking, meme-friendly
- **Topics**: Space exploration, sustainable energy, Mars colonization, engineering challenges

---

## 🚀 Features
- **Authentic Persona Conversations** – Chat with AI versions of Sam Altman and Elon Musk that respond in their characteristic styles
- **Domain-Specific Knowledge** – Each persona focuses on their areas of expertise (AI/startups for Sam, space/EVs for Elon)
- **Conversation Memory** – Maintains context across messages for natural, flowing discussions
- **Powered by Gemini API** – Utilizes Google's `gemini-2.5-flash` model for intelligent, contextual responses
- **Next.js 15 + React** – Modern frontend framework with optimized performance
- **Tailwind CSS** – Beautiful, responsive UI with smooth animations and hover effects
- **Character-Specific Routing** – Dedicated pages for each persona (`/sam` and `/elon`)
- **Persistent History Format** – Chat history stored in Gemini-compatible structure:
  ```json
  [
    { "role": "user", "parts": [{ "text": "What's your view on AGI timeline?" }] },
    { "role": "model", "parts": [{ "text": "Look, I think about this a lot. The development of AGI will be the most important technological development in human history..." }] }
  ]
  ```

---

## 💬 Example Conversations

**With Sam Altman:**
- Ask about OpenAI's vision for AGI
- Discuss AI safety and alignment challenges  
- Get startup advice from his Y Combinator experience
- Explore the future implications of artificial intelligence

**With Elon Musk:**
- Learn about SpaceX's Mars colonization plans
- Discuss Tesla's approach to sustainable transportation
- Understand first-principles thinking in engineering
- Explore the intersection of AI and space technology

---

## 🛠️ Tech Stack
- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS with custom animations
- **AI Model**: Google Gemini 2.5 Flash
- **UI Components**: Shadcn/ui components
- **Deployment**: Vercel-ready configuration

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd persona-ai-chat
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** to start chatting with Sam Altman and Elon Musk!

---

## 🎯 Use Cases
- **Educational**: Learn about AI development and space technology from industry leaders
- **Entertainment**: Experience conversations with famous tech personalities
- **Professional**: Get insights on entrepreneurship, leadership, and innovation
- **Research**: Explore different perspectives on technology's future impact

---

## 🤝 Contributing
Contributions are welcome! Feel free to:
- Add new personas (tech leaders, innovators, etc.)
- Improve conversation quality and authenticity
- Enhance UI/UX features
- Add new functionality

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
