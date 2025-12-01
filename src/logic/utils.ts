export const sleep = (delayMs?: number) => {
  const ms = delayMs ?? 1000 + Math.random() * 1000;
  return new Promise(res => setTimeout(res, ms));
}
