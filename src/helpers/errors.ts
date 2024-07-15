import { ErrorResponse } from '@/types';

export const getErrorResponse = (message?: string) => {
  const errorMessage = 'Bad Request';
  return { error: true, message: message || errorMessage };
};

export const ensureError = (value: unknown): string | ErrorResponse | Error => {
  if (value instanceof Error) {
    return getErrorResponse(value.message);
  }

  let stringifyMessage = '[Unable to stringify the thrown value]';
  try {
    stringifyMessage = JSON.stringify(value);
    return getErrorResponse(stringifyMessage);
  } catch {}

  return new Error(`This value was thrown as is, not through an Error: ${stringifyMessage}`);
};
