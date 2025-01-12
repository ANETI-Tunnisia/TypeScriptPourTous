type MyType=number; //number
type MyType2=MyType; //number
// via le conditional type

type MyConditionalType=MyType extends string ? string :null //null
type MyConditionalType2=MyType extends number ? string :null //string

type MyType3<T>=T extends number ?'number':'random';

type withNumber=MyType3<string>;
type withNumber2=MyType3<number>;

type TypeName<T>=
T extends string ? "string" :
T extends number ? 'number':
T extends boolean ? 'boolean':
T extends undefined ? 'undefined' :
T extends Function ? 'function' :
T extends null?'null':
'object';
function typeName<T>(arg:T):TypeName<T>
{
    if(arg ===null){
        return 'null' as TypeName<T>;
    }
return typeof arg as TypeName<T>
}

const strVal=typeName("Hello"); //"string"
const numVal=typeName(20);//'number'
const boolVal=typeName(false);//'boolean'
const undefinedVal=typeName(undefined);//'undefined'
const functionVal=typeName(()=>console.log('hello world'));//function
const objVal=typeName(['hello',4])//'object'
const nullVal=typeName(null);







