import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Start() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-xl space-y-8 text-center">
        <h1 className="text-3xl font-bold">Learning Center</h1>
        <p>
          Пройдіть коротке тренування: 8–12 карток зі словами. Натисніть
          «Почати», переглядайте картки та відмічайте, чи знаєте ви слово.
        </p>
        <Button
          variant="default"
          onClick={() => navigate("/session")}
          className=""
        >
          Почати тренування
        </Button>
      </div>
    </div>
  );
}
