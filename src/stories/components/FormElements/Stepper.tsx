import clsx from "clsx";
import { FC, useState } from "react";
import Minus from "../../../assets/icons/flat/Minus";
import Plus from "../../../assets/icons/flat/Plus";

interface StepperProps {}

const Stepper: FC<StepperProps> = (props) => {
  const {} = props;
  const [step, setStep] = useState<number>(1);

  const handlePlus = () => {
    step < 6 && setStep(step + 1);
  };

  const handleMinus = () => {
    step > 1 && setStep(step - 1);
  };

  return (
    <div className="flex items-center gap-[6px]">
      <button
        disabled={step === 6}
        onClick={handlePlus} 
        className="p-2 border rounded-full disabled:bg-neutral-50 disabled:text-neutral-200 disabled:border-none"
      >
        <Plus size={16} />
      </button>
      <span className="p-2">{step}</span>
      <button
        disabled={step === 1}
        onClick={handleMinus}
        className="p-2 border rounded-full disabled:bg-neutral-50 disabled:text-neutral-200 disabled:border-none"
      >
        <Minus size={16} />
      </button>
    </div>
  );
};

export default Stepper;
