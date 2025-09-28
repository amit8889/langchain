import OpenAI from "openai";
export class Ai {
  private openai: OpenAI;
  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async init() {
    console.log("AI initialized ");
    process.stdin.addListener("data", async (data) => {
      try {
        const query = data.toString();
        console.log("========query=>",query)
        const messages:OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
             {
                role:"system",
                content:"Yor Are a ai bot thst can answer any thing."
            },
            {
                role:"user",
                content:query
            }
        ]
        const response = await this.openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages:messages,
          tools:[
            {
                type:'function',
                function:{
                    name:"getTime",
                    description:"Fetch latest time"
                }
            }
          ],
          tool_choice:'auto'
        });
        const answer = response.choices[0]
       
        if(answer.finish_reason == 'tool_calls'){
            const tool = answer.message.tool_calls
            messages.push(answer.message)
            console.log(tool)
            messages.push({
                role:'tool',
                tool_call_id:tool[0].id,
                content:`current time is : ${new Date()}`
            })
            const response = await this.openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages:messages,
          tools:[
            {
                type:'function',
                function:{
                    name:"getTime",
                    description:""
                }
            }
          ],
          tool_choice:'auto'
        });
        const finalAnswer = response.choices[0]
        console.log(finalAnswer)

        }else{
             console.log("answer : ",answer.message.content)
        }
      } catch (error) {
        console.log("err : ",error)
      }
    });
  }
}
