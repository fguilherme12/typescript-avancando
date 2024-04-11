// Forma de declarar o decorator sem chamar a função de escopo do decorator.
// Quando declarado nas classes, precisa ir sem ()
    export function inspect(
            target: any,
            propertyKey: string,
            descriptor: PropertyDescriptor
        )   {

            const metodoOriginal = descriptor.value;
            descriptor.value = function(...args: any[]) {
                console.log(`Metodo: ${propertyKey}`)
                console.log(`Parametros: ${JSON.stringify(args)}`)
                const retorno = metodoOriginal.apply(this,args)
                console.log(`Retorno: ${JSON.stringify(retorno)}`)
                return retorno;
            }
            return descriptor;
        }
        