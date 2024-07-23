'use client';

import { useState, FormEvent } from 'react';

interface Exercise {
  type: string;
  caloriesPerMinute: number;
}

const exerciseData: Exercise[] = [
  { type: 'ウォーキング', caloriesPerMinute: 4 },
  { type: 'ジョギング', caloriesPerMinute: 10 },
  { type: 'サイクリング', caloriesPerMinute: 8 },
];

const CalorieTracker = () => {
  const [calories, setCalories] = useState<string>('');
  const [result, setResult] = useState<{ type: string; time: string }[] | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!calories || isNaN(Number(calories))) {
      alert('有効なカロリー数値を入力してください');
      return;
    }
    const cal = parseFloat(calories);
    const exerciseTimes = exerciseData.map(exercise => ({
      type: exercise.type,
      time: (cal / exercise.caloriesPerMinute).toFixed(2)
    }));
    setResult(exerciseTimes);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>カロリー消費トラッカー</h1>
      <form onSubmit={handleSubmit}>
        <label>
          カロリー数値を入力してください:
          <input
            type="text"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            style={{ marginLeft: '10px', marginRight: '10px' }}
          />
        </label>
        <button type="submit">計算</button>
      </form>
      {result && (
        <div style={{ marginTop: '20px' }}>
          <h2>運動の適正時間</h2>
          <ul>
            {result.map((exercise, index) => (
              <li key={index}>{exercise.type}: {exercise.time} 分</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CalorieTracker;
