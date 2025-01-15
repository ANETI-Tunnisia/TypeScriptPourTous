type props="prop1"|"prop2" |"prop3"
type Mypick<T,Props extends keyof T>={
    [P in Props]:T[P];
}
type NewType=Mypick<{color:"green",price:200,name:"pen"},"price">;