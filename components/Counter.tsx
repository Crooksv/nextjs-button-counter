"use client";
import { useState } from "react";

type CounterProps = {
  initialCount?: number;
  initialStep?: number;
};

export default function Counter({
  initialCount = 0,
  initialStep = 1,
}: CounterProps) {
  const [count, setCount] = useState<number>(initialCount);
  const [step, setStep] = useState<number>(initialStep);

  const decDisabled = count - step < 0;

  function changeStep(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = Number(e.target.value);
    const safe = Number.isFinite(raw) && raw >= 1 ? Math.floor(raw) : 1;
    setStep(safe);
  }

  return (
    <section aria-labelledby="counter-heading" className="counter">
      <h3 id="counter-heading" className="sr-only">Button Counter</h3>

      <div className="count" role="status" aria-live="polite" aria-atomic="true">
        {count}
      </div>

      <div className="controls">
        <button type="button" onClick={() => setCount(c => c + step)} aria-label={`Increment by ${step}`}>
          +{step}
        </button>
        <button
          type="button"
          onClick={() => setCount(c => Math.max(0, c - step))}
          disabled={decDisabled}
          aria-label={`Decrement by ${step}`}
        >
          -{step}
        </button>
        <button type="button" onClick={() => setCount(0)}>Reset</button>
      </div>

      <div className="step">
        <label htmlFor="step">Step</label>
        <input id="step" type="number" min={1} inputMode="numeric" value={step} onChange={changeStep} />
      </div>
    </section>
  );
}
