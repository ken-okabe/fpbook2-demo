import {
  _,
  $
} from "./_util.js";

import {
  identity,
  right,
  log,
}
  from "./___utils.js";

import { R, monadic } from "./reactive_monad.js";
import type { Reactive } from "./reactive_monad.js";



{// test

  //-------------------------------
  const f = (a: number) => a * 2;
  const g = (a: number) => a + 1;
  const h = (a: number) => a * 5;
  const s = (a: number) => a.toString();
  //-------------------------------
  console.log(

    (1)
    [_](f)
    [_](g)
    [_](h)
    [_](s)

  );



  const rB = R(1);
  log(rB);
  rB.map(log);


  {
    console.log("--?????????????????????");


    const rA = R(1);
    rA
      .flatMap(f[$](R))
      .flatMap(f[$](R))
      .flatMap(log[$](R));
    console.log("--?????????????????????");
    rA
      .flatMap(monadic(f))
      .flatMap(monadic(f))
      .flatMap(monadic(log));
    console.log("--?????????????????????");
    rA.map(f)
      .map(f)
      .map(log);

    //rA[_](next(10));
    rA.next(500);
  }

  const a = 1;
  const b = 1;

  console.log(a === b);


}


{
  type f = (a: number) => number;
  const f: f = a => a * 2;

  const result = [1].map(f);

  console.log(result);
}

{
  type log = <A>(a: A) => A;
  const log: log = a => {
    console.log(a);
    return a;
  };
  //--------------------------
  type f = (a: number) => number;
  const f: f = a => a * 2;

  type monadF = (a: number) => Reactive<number>;
  const monadF: monadF = a => R(a * 2);
  //--------------------------
  R("reactiveVal will be initialized: 1").map(log);
  const reactiveVal = R(1); // reactiveVal is initialized: 1
  //--------------------------
  const result = reactiveVal.map(f); // Functor
  const resultM = reactiveVal.flatMap(monadF); // Monad
  //--------------------------
  result.map(log);  // 2 then later 10
  resultM.map(log); // 2 then later 10
  //--------------------------
  R("reactiveVal will be updated: 1 -> 5").map(log);
  reactiveVal.next(5);  // reactiveVal is updated: 1 -> 5
}


