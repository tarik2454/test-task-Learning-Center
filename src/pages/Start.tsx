import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export default function Start() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl text-center space-y-8">
        <h1 className="text-3xl font-bold">Learning Center</h1>
        <p className="text-gray-300">
          Пройдите небольшую тренировку: 8–12 карточек со словами. Нажмите
          «Начать», перелистывайте карточки и отмечайте — знаете слово или нет.
        </p>
        <Button onClick={() => navigate("/session")} className="">
          Начать тренировку
        </Button>
      </div>
    </div>
  );
}
