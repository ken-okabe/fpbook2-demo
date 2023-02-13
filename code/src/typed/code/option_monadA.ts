
type Some<A> = [A];

type None = [];

const None: None = [];

type Option<A> = Some<A> | None;

type toSome =
    <A>(a: A) => Option<A>;

const Some: toSome = a => [a];

type isNone = (a: []) => Boolean;
const isNone: isNone =
    a => a.length === 0;

//-------------------------------------
type flatMap = <A, B>
    (f: (a: A) => Option<B>) =>
    (option: Option<A>) => Option<B>;

const flatMap: flatMap =
    f => option => {
        const val = option.flatMap(f) as any;
        return isNone(val)// a []
            ? None
            : val;
    };

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