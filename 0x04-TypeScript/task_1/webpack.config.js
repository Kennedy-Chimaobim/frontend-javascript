// file: 0x04-TypeScript/webpack.config.js
const path = require('path');

module.exports = (env = {}) => {
  const task = env.TASK || 'task_0'; // default task if you forget to pass env
  // __dirname here is the path to 0x04-TypeScript (because this config file lives there)
  return {
    entry: `./0x04-TypeScript/${task}/js/main.ts`,
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, task, 'dist'), // -> 0x04-TypeScript/task_x/dist
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    mode: 'development',
  };
};
