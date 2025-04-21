
interface IUser { 
    name: string;
    age: number;
    isEmployed: boolean;

}



interface Product { 
    name: string;
    price: number;
    inStock: boolean;
}

interface Car { 

    make: string;
    model: string;
    year: number;

    getFullName(): string;
}

type CarType = {
    make: string;
    model: string;
    year: number;
    name: "audi" | "bmw" | "mercedes"
}


function careTypeFunc (care: CarType) : string { 
    console.log(`Car make: ${care.make}, model: ${care.model}, year: ${care.year}`);

    return `Car make: ${care.make}, model: ${care.model}, year: ${care.year}`;
}


careTypeFunc({
    make: "audi",
    model: "audi",
    year: 2023,
    name: "audi"
});