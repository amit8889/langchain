import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

async function main() {
  const llm = new ChatGoogleGenerativeAI({
    model: "gemini-2.0-flash",
    temperature: 0,
    maxRetries: 2,
  });
  const res = await llm.invoke("Who are you?");
  console.log(res.content);
}

main();



