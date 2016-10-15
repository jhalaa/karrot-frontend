import angular from "angular";

const setReaction = ($state, reaction) => {
  return () => {
    if (angular.isString(reaction)) {
      return $state.target(reaction);
    }
    return reaction;
  };
};

const createHook = (target, detour = { authenticated: true, anonymous: "login" }) => {
  let hook = ($transitions) => {
    "ngInject";
    $transitions.onBefore(
      { to: target },
      (transition) => {
        let auth = transition.injector().get("Authentication"),
          $state = transition.injector().get("$state");
        return auth.update()
          .then(setReaction($state, detour.authenticated))
          .catch(setReaction($state, detour.anonymous));
      }
    );
  };
  return hook;
};

const hookProvider = ($transitionsProvider) => {
  "ngInject";
  return {
    setup(target, detour = { authenticated: true, anonymous: "login" }) {
      return createHook(target, detour)($transitionsProvider);
    },
    $get() {

    }
  };
};

export default hookProvider;
