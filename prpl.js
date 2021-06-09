function prpl(promise) {
  // PRPL: PRomises PLus™

  return {
    // promise-ish object, I guess

    then: (...extra_args) => {
      // calls first argument to .then with arguments to resolve & other args
      promise.then((...args) => extra_args[0](...args, ...extra_args.slice(1)));
    },

    // other methods of a promise
    catch: promise.catch,
    finally: promise.finally,
  };
}
