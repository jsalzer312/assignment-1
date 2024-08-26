// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

<<<<<<< Updated upstream
export default (req, res) => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num));
=======
export default (req,res) => {
  const num = req.params.num;

  const fibN = fibonacci(num);

>>>>>>> Stashed changes
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
