Package.describe({
  summary: "Login service for Your Membership accounts",
  version: "1.1.0",
  name: "pathable:accounts-your-membership",
  git: "https://github.com/pathable/accounts-your-membership",
});

Package.onUse((api) => {
  api.versionsFrom('2.3');

  api.use("ecmascript");
  api.use("accounts-base", ["client", "server"]);
  // Export Accounts (etc) to packages using this one.
  api.imply("accounts-base", ["client", "server"]);

  api.use("accounts-oauth", ["client", "server"]);
  api.use("pathable:your-membership-oauth@1.1.0");
  api.imply("pathable:your-membership-oauth");

  api.addFiles("your_membership.js");
});
