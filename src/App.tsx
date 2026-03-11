import { Bob } from "./components/bob/BobCharacter";
import { useState } from "react";
import type { Answer, Question } from "./utils/data/questions/questions";
import { Questions } from "./utils/data/questions/questions";
import { Chat, Warning } from "./components";




export function App() {
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const [currentQuestion, setNextQuestion] = useState<Question | null>(Questions[0] ?? null);
  const [bobWords, setBobWords] = useState<string>(Questions[0].question ?? null)
  const [moods, setMoods] = useState<string[]>([]);
  const [failed, setFailed] = useState<boolean>(false) 
  

  
function reset() {
  setNextQuestion(Questions[0])
  setSelectedAnswer(null)
  setMoods([])
  setFailed(false)
  setBobWords(Questions[0].question)
}

  function handleAnswer(answer: Answer | null) {
    if (!answer) return;

    setSelectedAnswer(answer);
    if (moods.includes('angry') && answer.moodEffect == 'angry') {
      setFailed(true)
      return
    }
    setMoods((prev) => [...prev, answer?.moodEffect]);
    setBobWords(answer.bobAnswer)
    const next =
        Questions.find((s) => s.id === answer.pointsToQuestion) ?? null;
        if (next) {
    setTimeout(() => {
      
      setNextQuestion(next);
      setBobWords(next?.question ?? '')
    }, 3000);
  }
    
  }

  return (
    <div className="w-dvw h-dvh flex flex-col justify-center items-center relative">
    {currentQuestion?.id == 1 && <h1 className="text-2xl duration-200 mb-10 text">Seja legal com o Bob, se fazer ele ficar bravo duas vezes ele desiste de você!</h1>}
      {
        selectedAnswer && (failed || selectedAnswer?.pointsToQuestion == null) ?
         <Warning message={failed ? 'Você Falhou, deixou o bob bravo 2 vezes! Tente novamente' : 'Parabéns você foi muito legal com o bob!'} success={!failed}>
        <button onClick={reset} className=" border-[0.5px] duration-150 hover:bg-[rgba(112,112,112,0.5)] px-5 py-2 rounded-2xl ">Voltar ao Início</button>
      </Warning> : ''
      }
      
      <Bob
        question={bobWords}
        mood={selectedAnswer?.moodEffect}
      />

      <Chat handleAnswer={handleAnswer} data={currentQuestion} />
    </div>
  );
}
