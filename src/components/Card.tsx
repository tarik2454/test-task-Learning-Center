import { useState } from "react";
import { motion } from "framer-motion";
import type { Bookmark } from "../data/bookmarks";
import { Button } from "@/components/ui/button";

interface Props {
  item: Bookmark;
  onAnswer: (known: boolean) => void;
  current: number;
  total: number;
}

export function Card({ item, onAnswer, current, total }: Props) {
  const [show, setShow] = useState(false);

  return (
    <motion.div
      className="w-full rounded-2xl bg-white p-6 text-center shadow-lg sm:min-w-sm md:min-w-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
    >
      <h2 className="mb-2 text-2xl font-bold text-gray-600">{item.value}</h2>
      <p className="mb-4 text-gray-600">{item.context}</p>

      {show ? (
        <div className="mb-10 flex flex-col items-center">
          <p className="font-semibold text-gray-600">
            {item.context_translation}
          </p>
          <p className="text-blue-600">Значення: {item.meanings.join(", ")}</p>
        </div>
      ) : (
        <Button
          variant="default"
          className="mb-10 opacity-90"
          onClick={() => setShow(true)}
        >
          Показати переклад
        </Button>
      )}

      <div className="flex justify-between gap-2">
        <Button
          variant="destructive"
          className="flex-1"
          onClick={() => {
            onAnswer(false);
            setShow(false);
          }}
        >
          Не знаю
        </Button>
        <Button
          variant="default"
          className="flex-1 bg-green-500 hover:bg-green-600"
          onClick={() => {
            onAnswer(true);
            setShow(false);
          }}
        >
          Знаю
        </Button>
      </div>

      <p className="mt-4 text-sm text-gray-400">
        {current} з {total}
      </p>
    </motion.div>
  );
}
