import { ChatAnthropic } from "@langchain/anthropic";

async function main() {
  const model = new ChatAnthropic({
    modelName: "claude-3-5-sonnet-20241022",
    temperature: 1,
    apiKey: process.env.ANTHROPIC_API_KEY || "",
  });

  const res = await model.invoke("Who are you?");
  console.log(res);
}

main();