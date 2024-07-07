import { ISayHello } from "./types";

export function sayHello({firstName, lastName}: ISayHello) {
    return firstName + " " + lastName
}