function calculateValues(...args) {
  if (args.length <= 2) {
    throw new Error("The function requires more than 2 arguments.");
  }
  
  const sum = args[0] + args[1];
  let product = args[2];
  
  for (let i = 3; i < args.length; i++) {
    product *= args[i];
  }
  
  return [sum, product];
}
