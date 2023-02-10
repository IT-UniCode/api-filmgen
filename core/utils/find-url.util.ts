import { urlRegex } from '../constants/main';

export const findUrlUtil = (value: string): string => {
  const url = value.match(urlRegex);

  return url.at(0);
};
