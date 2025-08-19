import { useState } from "react";
import { bookmarks } from "../data/bookmarks";
import { Card } from "../components/Card";
import { ProgressBar } from "../components/ProgressBar";
import { Link, useNavigate } from "react-router-dom";

export default function Session() {
  const navigate = useNavigate();
  const total = bookmarks.length;

  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);

  const handleAnswer = (known: boolean) => {
    if (known) setCorrect((c) => c + 1);

    const next = index + 1;
    if (next < total) {
      setIndex(next);
    } else {
      navigate("/finish", {
        state: { correct: known ? correct + 1 : correct, total },
      });
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4">
      <div className="w-full max-w-md">
        <ProgressBar current={index + 1} total={total} />
      </div>

      <Card
        item={bookmarks[index]}
        onAnswer={handleAnswer}
        current={index + 1}
        total={total}
      />

      <Link to="/">Повернутися на головну сторінку</Link>
    </div>
  );
}
