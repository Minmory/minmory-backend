const getEnv = (key: string): string => {
  const value: string | undefined = process.env[key];

  if (value === undefined) {
    throw new Error(`환경변수를 설정 해 주세요 ( ${key} )`);
  }

  return value;
};

export default getEnv;
