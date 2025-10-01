import { OpenAIEmbeddings } from "@langchain/openai";

const embeddings = new OpenAIEmbeddings({
  model: "text-embedding-3-large",
  dimensions:1
});


const main  = async () => {
    //query embidings
    // const res = await embeddings.embedQuery("Hello, how are you?");
    // console.log(res);

    // doc embidings
    const res = await embeddings.embedDocuments(["Hello, how are you?", "I am fine, thank you!"]);
    console.log(res);
}

main();