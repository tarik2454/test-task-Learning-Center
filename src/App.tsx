import { useState } from "react";
import { bookmarks } from "./data/bookmarks";
import { Card } from "./components/Card";
import { ProgressBar } from "./components/ProgressBar";
import { Result } from "./components/Result";

function App() {
  const [step, setStep] = useState<"start" | "session" | "finish">("start");
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);

  const handleAnswer = (known: boolean) => {
    if (known) setCorrect((c) => c + 1);
    if (index + 1 < bookmarks.length) {
      setIndex(index + 1);
    } else {
      setStep("finish");
    }
  };

  if (step === "start") {
    return (
      <div className="flex items-center justify-center h-screen">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded"
          onClick={() => setStep("session")}
        >
          Начать тренировку
        </button>
      </div>
    );
  }

  if (step === "finish") {
    return (
      <div className="flex items-center justify-center h-screen">
        <Result
          correct={correct}
          total={bookmarks.length}
          onRestart={() => {
            setCorrect(0);
            setIndex(0);
            setStep("start");
          }}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ProgressBar current={index + 1} total={bookmarks.length} />
      <Card
        item={bookmarks[index]}
        onAnswer={handleAnswer}
        current={index + 1}
        total={bookmarks.length}
      />
    </div>
  );
}

export default App;
