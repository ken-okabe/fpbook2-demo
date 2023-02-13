import {
  _,
  $
} from "./_util.js";

import {
  identity,
  right,
  log,
}
  from "./___utils.js"

import {
  None, Some, monadic, flatMap
} from "./option_monad.js";



{// test

  const x = [].flatMap(a => [a + 1]);

  console.log(x);

  const a = Object(1);
  const b = Object(1);

  console.log(a === b);

  void 0
}


