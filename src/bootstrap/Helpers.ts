import * as dotenv from 'dotenv';

export const env = (key: string, defaultValue?: any) => {
  let value;

  // @ts-ignore
  ({[key]: value} = dotenv.config({ path: './.env' }).parsed)

  if (!value) {
    return defaultValue
  }

  if (value.indexOf(',') > -1) {
    return value.split(',')
  }

  return value;
}