// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const { merge } = require('webpack-merge');
module.exports = {
  webpack: function (config) {
    config.output.path = path.resolve("../installator/src/main/resources/static");
    config.output.clean = true;
    config.devServer.https = true;
    
    return {
      ...config,
      ignoreWarnings: [
        {
          module: /node_modules\/stylis-plugin-rtl/,
        },
      ],
    }
  },
};
