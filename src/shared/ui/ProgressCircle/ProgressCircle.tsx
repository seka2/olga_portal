import { isNumber } from "consts/functions";
import React from "react";

interface ProgressCircleProps {
  progress?: number | string;
  size?: number;
  startingPosition?: number;
}

export const ProgressCircle: React.FC<ProgressCircleProps> = (props) => {
  const { progress = 0, size = 105, startingPosition = 105 } = props;

  const radius = (size - 10) / 2; // Радиус круга учитывает толщину обводки
  const circumference = 2 * Math.PI * radius;

  // Определяем размер маленького круга в зависимости от размера круга
  const smallCircleRadius = size <= 100 ? 8 : 10;

  if (isNumber(progress)) {

    const progress_number = Number(progress);

    // Рассчитываем длину пути
    const dashOffset = circumference - (progress_number / 100) * circumference;

    // Угол в радианах с фиксированным смещением для начала круга сверху
    const startAngle = -startingPosition; // Начальный угол
    const endAngle = (360 * (progress_number / 100) + startAngle) * (Math.PI / 180);

    // Рассчитываем координаты маленьких кругов
    const smallCircleX = size / 2 + radius * Math.cos(endAngle);
    const smallCircleY = size / 2 + radius * Math.sin(endAngle);


    return (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="#fff"
          stroke="#E4E4E4"
          strokeWidth="6"
        />

        {true && (
          <>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#FE2D89"
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              transform={`rotate(${startAngle} ${size / 2} ${size / 2})`}
            />
            <circle
              cx={smallCircleX}
              cy={smallCircleY}
              r={smallCircleRadius}
              fill="#fff"
              stroke="#fff"
              strokeWidth="13"
              style={{
                filter: "url(#shadow)",
              }}
            />
            <circle
              cx={smallCircleX}
              cy={smallCircleY}
              r={smallCircleRadius}
              fill="#fff"
              stroke="#fff"
              strokeWidth="13"
            />
            <circle cx={smallCircleX} cy={smallCircleY} r="5" fill="#FE2D89" />
            <text
              x={size / 2}
              y={size / 2 + 4}
              textAnchor="middle"
              fontSize="16"
              fontWeight="700"
              fill="#1D2B43"
            >
              {(progress_number > 0 ? "+" + progress_number : progress_number)} %
            </text>
          </>
        )}

        {false && (
          <>
            <text
              x={size / 2}
              y={size / 2 - 10}
              textAnchor="middle"
              fontSize="16"
              fontWeight="700"
              fill="#1D2B43"
            >
              нет
            </text>
            <text
              x={size / 2}
              y={size / 2 + 8}
              textAnchor="middle"
              fontSize="16"
              fontWeight="700"
              fill="#1D2B43"
            >
              данных
            </text>
          </>
        )}
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" result="blur" />
            <feOffset in="blur" dx="0" dy="0.4" result="offsetBlur" />
            <feMerge>
              <feMergeNode in="offsetBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    );

  } else {

    return (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="#fff"
          stroke="#E4E4E4"
          strokeWidth="6"
        />

        {true && (
          <>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#E4E4E4"
              strokeWidth="5"
              strokeDasharray={circumference}
              strokeDashoffset={0}
              strokeLinecap="round"
              transform={`rotate(${0} ${size / 2} ${size / 2})`}
            />
            
            <text
              x={size / 2}
              y={size / 2 + 4}
              textAnchor="middle"
              fontSize="16"
              fontWeight="700"
              fill="#FE2D89"
            >
              {progress}
            </text>
          </>
        )}

        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" result="blur" />
            <feOffset in="blur" dx="0" dy="0.4" result="offsetBlur" />
            <feMerge>
              <feMergeNode in="offsetBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    );

    
  }
};
