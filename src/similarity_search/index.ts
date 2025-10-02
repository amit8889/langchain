import { OpenAIEmbeddings } from "@langchain/openai";
import { cosineSimilarity } from "langchain/util/math";

const indiaFacts: string[] = [
  "India is a country in South Asia.",
  "It is the seventh-largest country by land area.",
  "India has over 1.4 billion people.",
  "The capital of India is New Delhi.",
  "Hindi and English are official languages.",
  "India is known for its diverse cultures and religions.",
  "It has a rich history of empires and kingdoms.",
  "The Taj Mahal is one of its famous landmarks.",
  "India is famous for its festivals like Diwali and Holi.",
  "Bollywood is the hub of Indian cinema.",
  "The country has a wide variety of cuisines.",
  "Yoga originated in India.",
  "It has many rivers like the Ganges and Yamuna.",
  "India is the birthplace of several religions.",
  "It has diverse wildlife and national parks.",
  "Cricket is the most popular sport in India.",
  "The Indian economy is one of the largest in the world.",
  "It is a democracy with a president and prime minister.",
  "India has a strong tradition of art, music, and dance.",
  "The country is known for IT and software services.",
  "It has mountain ranges like the Himalayas.",
  "India celebrates independence on August 15th.",
  "It has a rich tradition of literature and philosophy.",
  "The country has both deserts and lush forests.",
  "It is famous for spices, textiles, and handicrafts.",
  "India has made significant contributions to science and mathematics.",
  "The Indian Railways is one of the largest networks in the world.",
  "It is home to UNESCO World Heritage Sites.",
  "India has a mix of modern cities and ancient villages.",
  "The national bird is the peacock.",
  "It has vibrant markets and traditional bazaars.",
  "India is known for its hospitality and traditions."
];

const main = async () => {
  const embeddings = new OpenAIEmbeddings({ model: "text-embedding-3-large" });

  // Get embeddings for all documents
  const embData = await embeddings.embedDocuments(indiaFacts);

  // Get embedding for query
  const embQuery = await embeddings.embedQuery("India is a country in South Asia.");

  // Compute similarity for each document
  const similarities = embData.map((docVector, idx) => ({
    index: idx,
    similarity: cosineSimilarity([embQuery], [docVector])
  }));

  // Sort by similarity descending
  //@ts-ignore
  similarities.sort((a, b) => b.similarity - a.similarity);

  console.log("Top matching sentence:");
  //@ts-ignore
  console.log(indiaFacts[similarities[0].index]);
  //@ts-ignore
  console.log("Similarity score:", similarities[0].similarity);
};

main();
