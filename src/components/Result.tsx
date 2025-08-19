import { Button } from "./ui/button";

interface Props {
  correct: number;
  total: number;
  onRestart: () => void;
}

export function Result({ correct, total, onRestart }: Props) {
  return (
    <div className="w-full max-w-xl space-y-8 text-center">
      <h2 className="text-3xl font-bold">Результат</h2>
      <p>
        Ви правильно відповіли {correct} з {total}
      </p>
      <Button onClick={onRestart}>Пройти знову</Button>
    </div>
  );
}
