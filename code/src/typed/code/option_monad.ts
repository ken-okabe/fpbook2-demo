
type Some<A> = {
    type: "some";
    value: A;
};

type None = {
    type: "none"
};

const None: None = {
    type: "none"
};

type Option<A> = Some<A> | None;

type of =
    <A>(a: A | undefined | null) => Option<A>;

const Some: of = a =>
    a === undefined || a === null
        ? None
        : {
            type: "some",
            value: a
        };

//-------------------------------------
type flatMap = <A, B>
    (f: (a: A) => Option<B>) =>
    (oA: Option<A>) => Option<B>;

const flatMap: flatMap =
    f => option =>
        option.type === "none"
            ? None
            : f(option.value);
//--------------------------------------

type compose =
    <A, B>(f: (a: A) => B) =>
        <C>(g: (b: B) => C) =>
            (a: A) => C;
const compose: compose =
    f => g =>
        a => g(f(a));

type Monadic = <A, B>
    (f: (a: A) => B) =>
    (a: A) => Option<B>;

const monadic: Monadic =
    f => compose(f)(Some);


export { None, Some, monadic, flatMap }
export type { Option, Monadic }