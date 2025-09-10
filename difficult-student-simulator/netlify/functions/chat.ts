import type { Handler } from "@netlify/functions"

// A simple, safe mock plus optional proxy to an LLM if LLM_API_KEY is set.
// Replace the mock logic with your provider of choice.
const handler: Handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" }
    }
    const { role, messages, persona, mode, rubricWeights } = JSON.parse(event.body ?? "{}")

    const apiKey = process.env.LLM_API_KEY
    const model = process.env.LLM_MODEL || "gpt-4o-mini"

    // Minimal guardrails
    const banned = ["violence", "weapons", "self-harm", "suicide"]
    const last = (messages?.slice(-1)[0]?.content || "").toLowerCase()
    if (banned.some(k => last.includes(k))) {
      return {
        statusCode: 200,
        body: JSON.stringify({ reply: "I can’t discuss that. Let’s keep our conversation school-appropriate and focus on problem-solving." })
      }
    }

    // MOCK path (no key): simple persona-aware echo with mild attitude shifts
    if (!apiKey) {
      const mood =
        persona?.difficulty === "Hard" ? "defensive and curt" :
        persona?.difficulty === "Easy" ? "cooperative but hesitant" :
        "guarded but willing to talk"
      const reply = role === "coach"
        ? `Coach: Based on the last message, try naming the impact, offering a choice, and setting a clear next step.`
        : `(${persona?.name || "Student"}, ${mood}): ${last ? "Okay but " + last[:120] : "What do you want?"}`
      return { statusCode: 200, body: JSON.stringify({ reply }) }
    }

    // PROXY path (example: OpenAI). NOTE: You must add your own fetch to provider.
    // For safety in this starter, we’ll still return a mock response with a note.
    const reply = role === "coach"
      ? "Coach: (LLM proxy placeholder) Focus on de-escalation and clarity."
      : "Student: (LLM proxy placeholder) I don’t see why I have to do this right now."
    return { statusCode: 200, body: JSON.stringify({ reply, note: "Replace with real provider call." }) }
  } catch (err: any) {
    return { statusCode: 500, body: JSON.stringify({ error: err?.message || "Unknown error" }) }
  }
}

export { handler }
