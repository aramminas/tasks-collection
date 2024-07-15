import { Methods } from '@/api/types';
import { ensureError, getErrorResponse } from '@/helpers/errors';

const apiUrl = process.env.API_URL;

export const fetcherPost = async (
  path: string,
  data: { [ket: string]: string | number } | {} = {},
) => {
  const jsonData = JSON.stringify(data);
  let options = {
    method: Methods.POST,
    body: jsonData,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(`${apiUrl}/${path}`, options);

    if (response?.ok) {
      return await response.json();
    }

    const errorResponse = await response.json();

    throw Error(errorResponse?.message);
  } catch (error: unknown) {
    return ensureError(error);
  }
};

export const fetcherGet = async (path: string, query: string = '') => {
  try {
    const response = await fetch(`${apiUrl}/${path}${query}`, { method: Methods.GET });
    if (response?.ok) {
      return await response.json();
    }

    const errorResponse = await response.json();

    return getErrorResponse(errorResponse?.message);
  } catch (error) {
    return ensureError(error);
  }
};

export const fetcherDelete = async (path: string, id?: string | number) => {
  try {
    const response = await fetch(`${apiUrl}/${path}/${id || '0'}`, { method: Methods.DELETE });

    if (response?.ok) {
      return await response.json();
    }

    const errorResponse = await response.json();

    throw Error(errorResponse?.message);
  } catch (error) {
    return ensureError(error);
  }
};

export const fetcherPut = async (path: string, data: { id?: string } = {}) => {
  const jsonData = JSON.stringify(data);
  const options = {
    method: Methods.PUT,
    body: jsonData,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(`${apiUrl}/${path}/${data?.id || '0'}`, options);

    if (response?.ok) {
      return await response.json();
    }

    const errorResponse = await response.json();

    throw Error(errorResponse?.message);
  } catch (error) {
    return ensureError(error);
  }
};
