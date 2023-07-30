const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = 'data is fetched';
        if (data) {
            resolve(data);
        } else {
            reject('data is not fetched');
        }
    });
};

const makePromiseBoolean = (): Promise<Boolean> => {
    return new Promise<Boolean>((resolve, reject) => {
        const data: Boolean = true;
        if (data) {
            resolve(data);
        } else {
            reject(false);
        }
    });
};

const getPromiseData = async (): Promise<string> => {
    const data = await makePromise();
    return data; 
};

const getPromiseBoolean = async (): Promise<Boolean> => {
    const data = await makePromiseBoolean();
    return data; 
};
