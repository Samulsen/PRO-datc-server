export const errorUtilThrowWrapper = (
  errorbound: { state: boolean; message: string },
  successbound: { action: () => Promise<any> },
) => {
  if (errorbound.state) {
    throw new Error(errorbound.message);
  } else {
    return successbound.action();
  }
};
