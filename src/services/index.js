const users = require('./users/users.service.js');
const problems = require('./problems/problems.service.js');
const problemTypes = require('./problem-types/problem-types.service.js');
const problemLikes = require('./problem-likes/problem-likes.service.js');
const problemSolutions = require('./problem-solutions/problem-solutions.service.js');
const userTypes = require('./user-types/user-types.service.js');
const solutionReplies = require('./solution-replies/solution-replies.service.js');
const solutionLikes = require('./solution-likes/solution-likes.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(problems);
  app.configure(problemTypes);
  app.configure(problemLikes);
  app.configure(problemSolutions);
  app.configure(userTypes);
  app.configure(solutionReplies);
  app.configure(solutionLikes);
};
