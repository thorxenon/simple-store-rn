export const number2Currency = (price: number, local: string, currency: string) =>{ 
   const format = new Intl.NumberFormat(local,{
    style:"currency",
    currency: "BRL",
    });

    return format.format(price);
}