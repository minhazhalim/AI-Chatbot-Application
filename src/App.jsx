import {useState} from 'react';
import {arrayItems} from './aiOptions';
import OptionSelection from './components/optionSelection.jsx';
import Translation from './components/translation.jsx';
import {Configuration,OpenAIApi} from 'openai';
import './App.css';
function App(){
  const configuration = new Configuration({apiKey: import.meta.env.VITE_Open_AI_Key});
  const openAiApi = new OpenAIApi(configuration);
  const [option,setOption] = useState({});
  const [result,setResult] = useState("");
  const [input,setInput] = useState("");
  const selectOption = (option) => {
    setOption(option);
  };
  const doStuff = async () => {
    const object = {...option,prompt: input};
    const response = await openAiApi.createCompletion(object);
    setResult(response.data.choices[0].text);
  };
  return (
    <div className='App'>
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption}/>
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result}/>
      )}
    </div>
  );
};
export default App;