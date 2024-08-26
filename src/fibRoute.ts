// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (req: { params: { num: number; }; },res: { send: (arg0: string) => void; }) => {
  const num = req.params.num;
  
  const fibN = fibonacci(num);
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
