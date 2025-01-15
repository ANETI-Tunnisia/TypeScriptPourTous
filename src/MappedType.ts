type props="prop1"|"prop2" |"prop3"
type MyMappedType={
    [p in props]:boolean;
}
