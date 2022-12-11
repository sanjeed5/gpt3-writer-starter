import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  // Run first prompt
  const prompt = 
  `
  List topics to write a crypto twitter thread about.

  Topics: 

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