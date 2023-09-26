"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserData = void 0;
const fetchUserData = async (userId) => {
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (data.status !== 200)
            throw new Error("user not found");
        const user = await data.json();
        return user;
    }
    catch (error) {
        return Promise.reject(error);
    }
};
exports.fetchUserData = fetchUserData;
