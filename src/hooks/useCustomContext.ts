import { useContext, type Context } from 'react';

export const useCustomContext = <T>(context: Context<T | undefined>, name: string) => {
  const contextValue = useContext(context);
  if (!contextValue) {
    throw new Error(`${name} must be used within a ${name}.Provider`);
  }
  return contextValue;
};
