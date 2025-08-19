import { useState } from "react";
import { motion } from "framer-motion";
import type { Bookmark } from "../data/bookmarks";
import { Button } from "./Button";

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
          <p className="text-blue-600">Значения: {item.meanings.join(", ")}</p>
        </div>
      ) : (
        <Button className="mb-10 opacity-90" onClick={() => setShow(true)}>
          Показать перевод
        </Button>
      )}

      <div className="flex justify-between gap-2">
        <Button
          className="flex-1 bg-red-500/90 hover:border-red-400 hover:bg-red-600 focus-visible:outline-red-400"
          onClick={() => {
            onAnswer(false);
            setShow(false);
          }}
        >
          Не знаю
        </Button>
        <Button
          className="flex-1 bg-green-500/90 hover:border-green-400 hover:bg-green-600 focus-visible:outline-green-400"
          onClick={() => {
            onAnswer(true);
            setShow(false);
          }}
        >
          Знаю
        </Button>
      </div>

      <p className="mt-4 text-sm text-gray-400">
        {current} из {total}
      </p>
    </motion.div>
  );
}
