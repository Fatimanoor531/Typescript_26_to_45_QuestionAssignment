type car = {
    manufacture: string
    model: string
    [key: string]: any;
}

function createCar(manufacture: string, model: string, optional: Record<string, any>): car{
    return{
        manufacture,
        model,
        ...optional
    }
}

const mycar: car = createCar("toyoto", "corolla",{"color": "black",year: "2024"});

console.log(mycar );



