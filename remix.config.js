/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  serverBuildTarget: "static",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  appDirectory: "app",
  assetsBuildDirectory: "build/client",
  publicPath: "/ausbud/build/",
  serverBuildPath: "build/server/index.js"
}; 