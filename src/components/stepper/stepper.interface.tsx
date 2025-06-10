export interface StepperProps {
  className?: string;
}

export interface Step {
  id: number;
  title: string;
  path: string;
  clickable: boolean;
}
