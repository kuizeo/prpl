function prpl(promise) {
  // PRPL: PRomises PLus™

  return {
    // object made to replicate a promise

    then: (...extra) =>
      promise.then((...args) => extra[0](...args, ...extra.slice(1))),

    catch: (...extra) =>
      promise.catch((...args) => extra[0](...args, ...extra.slice(1))),

    finally: (...extra) => 
      promise.finally((...args) => extra[0](...args, ...extra.slice(1))),
  };
}

module.exports = prpl;
