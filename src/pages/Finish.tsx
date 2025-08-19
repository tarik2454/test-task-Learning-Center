import { useLocation, useNavigate } from "react-router-dom";
import { Result } from "../components/Result";
import { Button } from "../components/Button";

type FinishState = {
  correct: number;
  total: number;
};

export default function Finish() {
  const navigate = useNavigate();
  const location = useLocation();

  const state = (location.state ?? {}) as Partial<FinishState>;
  const correct = state.correct ?? 0;
  const total = state.total ?? 0;

  if (!location.state) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Button onClick={() => navigate("/")}>На старт</Button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Result
        correct={correct}
        total={total}
        onRestart={() => navigate("/", { replace: true })}
      />
    </div>
  );
}
