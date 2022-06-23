function getCommandLineArguments() {
  const [, , ...arguments] = process.argv;
  return arguments;
}

function getProcessedArguments() {
  const userArguments = getCommandLineArguments();
  const processedArguments = {};

  userArguments.forEach((arg) => {
    const [argKey, argValue] = arg.split("=");

    if (argValue) {
      processedArguments[argKey] = argValue;
    }
  });

  return processedArguments;
}

module.exports = {
  getProcessedArguments,
};
