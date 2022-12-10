import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// const basePromptPrefix = 
// `
// Write me a blog post in the style of Paul Graham with the title below. Please make sure the blog post goes in-depth on the topic and shows that the writer did their research.

// Title:
// `
// ;

const generateAction = async (req, res) => {
  // Run first prompt
  const prompt = 
  `
  Write a detailed crypto twitter thread on the topic below. Please make sure the twitter thread goes in-depth on the topic and shows that the writer did their research. 
  
  Topic: ${req.body.userInput} 
  
  Twitter thread: 

  `
  ;

//   console.log(`API: ${basePromptPrefix}${req.body.userInput}`)
  console.log(`API: ${prompt}`)


  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    temperature: 0.7,
    max_tokens: 400,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;