import { Step } from "../components/stepper/stepper.interface";

class GlobalService {
  // Store steps configuration
  private steps: Step[] = [
    { id: 1, title: "Waste Type", path: "/weste-type", clickable: true },
    { id: 2, title: "Select Skip", path: "/select-skip", clickable: true },
    { id: 3, title: "Permit Check", path: "/permit-check", clickable: false },
  ];

  // Get steps
  getSteps(): Step[] {
    return this.steps;
  }

  // Get step by ID
  getStepById(id: number): Step | undefined {
    return this.steps.find((step) => step.id === id);
  }

  // Get step by path
  getStepByPath(path: string): Step | undefined {
    return this.steps.find((step) => step.path === path);
  }

  // Update step clickable status
  updateStepClickable(id: number, clickable: boolean): void {
    const step = this.getStepById(id);
    if (step) {
      step.clickable = clickable;
    }
  }

  // Get current step ID by path
  getCurrentStepId(pathname: string): number {
    const currentStep = this.getStepByPath(pathname);
    return currentStep ? currentStep.id : 1;
  }

  // Get next step
  getNextStep(currentStepId: number): Step | undefined {
    return this.steps.find((step) => step.id === currentStepId + 1);
  }

  // Get previous step
  getPreviousStep(currentStepId: number): Step | undefined {
    return this.steps.find((step) => step.id === currentStepId - 1);
  }

  // Validate if current route is accessible
  validateRoute(pathname: string): { isValid: boolean; redirectTo?: string } {
    const currentStep = this.getStepByPath(pathname);

    // If step doesn't exist, redirect to first step
    if (!currentStep) {
      return { isValid: false, redirectTo: this.steps[0]?.path };
    }

    // If step is not clickable, find the last clickable step
    if (!currentStep.clickable) {
      const lastClickableStep = this.getLastClickableStep();
      return {
        isValid: false,
        redirectTo: lastClickableStep?.path || this.steps[0]?.path,
      };
    }

    return { isValid: true };
  }

  // Get the last clickable step (highest ID that's clickable)
  getLastClickableStep(): Step | undefined {
    return this.steps
      .filter((step) => step.clickable)
      .sort((a, b) => b.id - a.id)[0];
  }

  // Get the first clickable step
  getFirstClickableStep(): Step | undefined {
    return this.steps.find((step) => step.clickable);
  }

  // Check if a step should be accessible (clickable or lower ID than current)
  isStepAccessible(stepId: number, currentStepId: number): boolean {
    const step = this.getStepById(stepId);
    if (!step) return false;

    // Step is accessible if it's clickable or if it's a previous step
    return step.clickable || stepId <= currentStepId;
  }
}

// Export a single instance (singleton pattern)
export const globalService = new GlobalService();
