type props="prop1"|"prop2" |"prop3"
type MyMappedType<T>={
  readonly  [P in keyof T]?:T[P] | null;
}
type MyType=MyMappedType<{color:"green",price:200}>;