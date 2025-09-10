import type { Handler } from "@netlify/functions"

const handler: Handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" }
    }
    const { role, messages, persona, mode } = JSON.parse(event.body ?? "{}")

    const banned = ["violence", "weapons", "self-harm", "suicide"]
    const last = (messages?.slice(-1)[0]?.content || "").toLowerCase()
    if (banned.some(k => last.includes(k))) {
      return {
        statusCode: 200,
        body: JSON.stringify({ reply: "I can’t discuss that. Let’s keep our conversation school-appropriate and focus on problem-solving." })
      }
    }

    const apiKey = process.env.LLM_API_KEY
    if (!apiKey) {
      const mood =
        persona?.difficulty === "Hard" ? "defensive and curt" :
        persona?.difficulty === "Easy" ? "cooperative but hesitant" :
        "guarded but willing to talk"
      const reply = role === "coach"
        ? `Coach: Try naming the impact, offering a choice, and setting a clear next step.`
        : `(${persona?.name || "Student"}, ${mood}): ${last ? "Okay but " + last.slice(0, 120) : "What do you want?"}`
      return { statusCode: 200, body: JSON.stringify({ reply }) }
    }

    const reply = role === "coach"
      ? "Coach: (LLM proxy placeholder) Focus on de-escalation and clarity."
      : "Student: (LLM proxy placeholder) I don’t see why I have to do this right now."
    return { statusCode: 200, body: JSON.stringify({ reply, note: "Replace with real provider call." }) }
  } catch (err: any) {
    return { statusCode: 500, body: JSON.stringify({ error: err?.message || "Unknown error" }) }
  }
}

export { handler }
