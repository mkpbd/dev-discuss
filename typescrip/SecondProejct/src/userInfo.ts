

function userinformation(user: User1): Partial<User1> {
    return {
        id: user.id,
        name: user.name,
        email: user.email,


    }



}




function UserInfoRequierd(user: User1): Required<User1> {
    return {
        id: user.id,
        name: "hello",
        email: user.email,
        password: user.password,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    }
}




function userInfoOmit(user: User1): Omit<User1, "id" | "name"> {
    return {
        email: user.email,
        password: user.password,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    }
}


type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
    x: 10,
    y: 20
};


type PointPrinter = (p: { x: number; y: number; }) => void;
const point1: Parameters<PointPrinter>[0] = {
    x: 10,
    y: 20
};