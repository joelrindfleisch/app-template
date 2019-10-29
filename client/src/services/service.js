import {wrappedFetch} from "./service-utils";

export const getSomething = () => {
    return wrappedFetch('/api/otherRoute')
};