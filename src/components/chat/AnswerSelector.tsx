import {useEffect, useState} from "react";
import type { Answer, Question } from "../../utils/data/questions/questions";
interface chatProps {
  data?: Question | null;
  handleAnswer: Function;
}

export function Chat({ data, handleAnswer }: chatProps) {
  const [loading, setLoading] = useState(false)
  
  const selectAnswer = (answer: Answer | null) => {
    setLoading(true)
    return handleAnswer(answer);
  };

  useEffect(() => {
    if (!loading) return
    setTimeout(()=> {
      setLoading(false)
    }, 3000)
  }, [loading])

  

  return (
    <div className="w-4/12 relative">
      <p>Responda: </p>
      <div className="w-full bg-white flex flex-col relative h-auto shadow-2xl z-20 mt-5 p-3 rounded-md">
        {data?.answers.map((answer) => (
          <span
            onClick={() => selectAnswer(answer)}
            key={answer.id}
            className="w-full h-auto bg-gray-100 z-20 mt-5 p-3 rounded-md"
          >
            <p>{answer.text}</p>
          </span>
        ))}
      </div>
      <div 
      style={
        {
          width: `${loading ? '100%' : '0%'}`,
        }
      }
      className={` h-2  bg-green-600  rounded-b-md ${loading && 'duration-[3000ms] transition-all'}`}></div>
    </div>
  );
}