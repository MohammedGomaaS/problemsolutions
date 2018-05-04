// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    console.log("qqq", context.path);
    if (context.path == 'problem-solutions')
      delete context.data.problemId;
    else if (context.path == 'solution-replis')
      delete context.data.problemSolutionId;
    return context;
  };
};
