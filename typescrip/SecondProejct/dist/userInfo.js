"use strict";
function userinformation(user) {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
    };
}
function UserInfoRequierd(user) {
    return {
        id: user.id,
        name: "hello",
        email: user.email,
        password: user.password,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    };
}
function userInfoOmit(user) {
    return {
        email: user.email,
        password: user.password,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    };
}
const point = {
    x: 10,
    y: 20
};
const point1 = {
    x: 10,
    y: 20
};
