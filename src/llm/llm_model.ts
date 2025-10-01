import { OpenAI } from "@langchain/openai";

async function main() {
  const model = new OpenAI({
    modelName: "gpt-4o-mini", // or "gpt-4o" / "gpt-3.5-turbo"
    temperature: 0.7,
  });

  const res = await model.invoke("Who am i");
  console.log(res);
}

main();