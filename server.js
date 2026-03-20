/**
 * VakeelMate — Express API Proxy Server
 * 
 * This hides your Anthropic API key from the browser.
 * The React app calls /api/claude → this server → Anthropic.
 * 
 * Usage:
 *   1. Create a .env file: ANTHROPIC_API_KEY=sk-ant-...
 *   2. npm run server   (runs on port 3001)
 *   3. npm run dev      (Vite proxies /api/claude → localhost:3001)
 * 
 * Then update fetch() calls in App.jsx from:
 *   https://api.anthropic.com/v1/messages
 * to:
 *   /api/claude
 */

import express  from "express";
import cors     from "cors";
import dotenv   from "dotenv";

dotenv.config();

const app  = express();
const PORT = process.env.PORT || 3001;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

if (!ANTHROPIC_API_KEY) {
  console.error("❌  ANTHROPIC_API_KEY not set in .env file");
  process.exit(1);
}

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json({ limit: "2mb" }));

// Proxy endpoint — forwards requests to Anthropic
app.post("/api/claude", async (req, res) => {
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method:  "POST",
      headers: {
        "Content-Type":            "application/json",
        "x-api-key":               ANTHROPIC_API_KEY,
        "anthropic-version":       "2023-06-01",
        "anthropic-beta":          "storage-v1",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data });
    }

    res.json(data);
  } catch (err) {
    console.error("Proxy error:", err.message);
    res.status(500).json({ error: "Proxy server error" });
  }
});

// Health check
app.get("/health", (_, res) => res.json({ status: "ok", service: "VakeelMate API Proxy" }));

app.listen(PORT, () => {
  console.log(`✅  VakeelMate proxy server running on http://localhost:${PORT}`);
  console.log(`    Proxying Anthropic API calls securely.`);
});
