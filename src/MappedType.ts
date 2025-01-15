type props="prop1"|"prop2" |"prop3"
type MyMappedType<props extends string | number | symbol>={
    [P in props]:P;
}
type MyType=MyMappedType<props>;