# Difficult Student Simulator

A Netlify‑deployable React + Vite + TypeScript app that lets student teachers practice tough conversations with an AI role‑playing as difficult students. Includes a serverless function proxy for model calls.

## Quick Start (Local)

```bash
npm i
npm run dev
```

Open http://localhost:5173

## Environment Variables (for Netlify or local)

- `LLM_API_KEY` — your model provider key (optional for mock)
- `LLM_MODEL` — model name, e.g. `gpt-4o` (optional)

> If no `LLM_API_KEY` is provided, the serverless function returns a safe mock response so you can demo immediately.

## Deploy to Netlify

1. **Create a new site** on Netlify from your Git repo or by dropping the folder.
2. In **Site settings → Environment variables**, add:
   - `LLM_API_KEY` (optional for mock)
   - `LLM_MODEL` (optional)
3. **Build command:** `npm run build`
4. **Publish directory:** `dist`
5. **Functions directory:** `netlify/functions`
6. Deploy. The SPA redirect is configured in `netlify.toml`.

## What’s Inside
- React 18 + Vite + TypeScript
- Tailwind CSS
- Zustand state store
- React Router
- Netlify Functions (`/.netlify/functions/chat` proxied as `/netlify/functions/chat` in dev)
- Basic tests via Vitest

## Extend
- **Personas:** Edit `src/lib/personas.ts` to add or adjust personas.
- **Rubrics/Scoring:** Improve `src/lib/rubrics.ts` to implement a real rubric and analysis.
- **LLM Provider:** Replace the placeholder in `netlify/functions/chat.ts` with a real provider call.
- **A11y:** Audit with Lighthouse/axe and iterate.
- **Localization:** Wrap text in a simple i18n layer and provide language toggle.

## Notes
This starter avoids storing PII. Exports are client‑side downloads (JSON/Markdown). Add authentication or a backend only if needed for your context.
