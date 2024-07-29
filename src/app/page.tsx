'use client'

import React, { useState } from 'react';
import Calculation from "./Components/Calculation";
import Exercise from "./Components/Exercise";

export default function Home() {
  const [calories, setCalories] = useState(0);
  const [weight, setWeight] = useState(0);
  const [showExercise, setShowExercise] = useState(false);

  const handleCalculate = (calories: number, weight: number) => {
    setCalories(calories);
    setWeight(weight);
    setShowExercise(true);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-700 -mt-32">カロリー消費トラッカー</h1>
      <div className="w-full max-w-xl mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
          <Calculation onCalculate={handleCalculate} />
          {showExercise && <Exercise calories={calories} weight={weight} />}
        </div>
      </div>
    </main>
  );
}
