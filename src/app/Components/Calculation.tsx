'use client'

import React, { useState } from 'react';

interface CalculationProps {
  onCalculate: (calories: number, weight: number) => void;
}

const Calculation: React.FC<CalculationProps> = ({ onCalculate }) => {
  const [calories, setCalories] = useState<string>('');
  const [weight, setWeight] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const caloriesNum = parseFloat(calories);
    const weightNum = parseFloat(weight);

    if (isNaN(caloriesNum) || isNaN(weightNum)) {
      alert('有効な数値を入力してください。');
      return;
    }

    onCalculate(caloriesNum, weightNum);
  };

  return (
    <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
      <p className="text-right">
        <label>
          カロリー数値を入力してください:
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            className="ms-2 border px-1 py-2 rounded-lg focus:outline-none focus:border-blue-400"
          />
        </label>
      </p>
      <p className="text-right">
        <label>
          体重を入力してください:
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="ms-2 border px-1 py-2 rounded-lg focus:outline-none focus:border-blue-400"
          />
        </label>
      </p>
      <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg">計算</button>
    </form>
  );
};

export default Calculation;
