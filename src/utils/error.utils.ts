export const errorUtilThrowWrapper = (
  errorbound: { state: boolean; message: string },
  successbound: { action: () => void },
) => {
  if (errorbound.state) {
    throw new Error(errorbound.message);
  } else {
    successbound.action;
  }
};
