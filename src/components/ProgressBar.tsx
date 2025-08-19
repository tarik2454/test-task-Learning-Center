interface Props {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: Props) {
  const percent = (current / total) * 100;
  return (
    <div className="w-full bg-gray-200 h-2 rounded">
      <div
        className="h-2 bg-blue-500 rounded"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
