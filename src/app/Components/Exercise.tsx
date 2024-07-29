import React from 'react';

interface Props {
  calories: number;
  weight: number;
}

const Exercise: React.FC<Props> = ({ calories, weight }) => {
  const calculateTime = (calories: number, weight: number, mets: number): string => {
    return (calories / (mets * weight)).toFixed(2);
  };

  const walkingTime = calculateTime(calories, weight, 3.8);
  const joggingTime = calculateTime(calories, weight, 7);
  const cyclingTime = calculateTime(calories, weight, 6);

  return (
    <ul className="space-y-3">
      <li>
        <div>ウォーキング推定運動時間: {walkingTime} 時間</div>
        <div>ジョギング推定運動時間: {joggingTime} 時間</div>
        <div>サイクリング推定運動時間: {cyclingTime} 時間</div>
      </li>
    </ul>
  );
};

export default Exercise;
