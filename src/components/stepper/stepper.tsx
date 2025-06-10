import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./stepper.scss";
import { Step, StepperProps } from "./stepper.interface";
import { globalService } from "../../services";

const Stepper: React.FC<StepperProps> = ({ className = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get steps from global service
  const steps = globalService.getSteps();

  // Get current step based on pathname
  const getCurrentStep = (): number => {
    return globalService.getCurrentStepId(location.pathname);
  };
  const currentStep = getCurrentStep();

  //   const handleNext = () => {
  //     const nextStep = globalService.getNextStep(currentStep);
  //     if (nextStep && nextStep.clickable) {
  //       navigate(nextStep.path);
  //     }
  //   };

  //   const handleBack = () => {
  //     const prevStep = globalService.getPreviousStep(currentStep);
  //     if (prevStep && prevStep.clickable) {
  //       navigate(prevStep.path);
  //     }
  //   };

  const handleStepClick = (step: Step) => {
    if (step.clickable) {
      navigate(step.path);
    }
  };
  return (
    <div className={`stepper ${className}`}>
      <div className="stepper__steps">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div
              className={`stepper__step ${
                step.id === currentStep
                  ? "stepper__step--active"
                  : step.id < currentStep
                  ? "stepper__step--completed"
                  : "stepper__step--pending"
              } ${!step.clickable ? "stepper__step--disabled" : ""}`}
              onClick={() => handleStepClick(step)}
              style={{ cursor: step.clickable ? "pointer" : "not-allowed" }}
            >
              <span className="stepper__step-number">{step.id}</span>
              <span className="stepper__step-title">{step.title}</span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`stepper__line ${
                  step.id < currentStep ? "stepper__line--completed" : ""
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
