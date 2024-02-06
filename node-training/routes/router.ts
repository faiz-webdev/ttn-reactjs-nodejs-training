exports.routeConfig = async (application) => {
  application.use(`/${apiBaseURL}/auth`, authRouter.router);

  return application;
};
