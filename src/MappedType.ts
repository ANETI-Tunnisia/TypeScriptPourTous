type props="prop1"|"prop2" |"prop3"
type MyMappedType={
    [P in props]:number;
}
