Accounts.oauth.registerService("yourMembership");

if (Meteor.isClient) {
  const loginWithYourMembership = (options, callback) => {
    // support a callback without options
    if (!callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    const credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(
      callback
    );
    YourMembership.requestCredential(
      options,
      credentialRequestCompleteCallback
    );
  };
  Accounts.registerClientLoginFunction(
    "yourMembership",
    loginWithYourMembership
  );
  Meteor.loginWithYourMembership = (...args) =>
    Accounts.applyLoginFunction("yourMembership", args);
} else {
  Accounts.addAutopublishFields({
    // not sure whether the github api can be used from the browser,
    // thus not sure if we should be sending access tokens; but we do it
    // for all other oauth2 providers, and it may come in handy.
    forLoggedInUser: ["services.yourMembership"],
    forOtherUsers: ["services.yourMembership.username"],
  });
}
