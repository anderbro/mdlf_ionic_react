export interface Client {
    date: string;
    date2: string;
    ca: number;
    nomch: string;
    raison: string;
    pays: string;
    nbpers: number;
    age: string;
    sexe: string;
}

export const getClients = () => {
    const clients = getData();
    return clients;
}

export const getClient = (nomch: string) => {
    const client = getClients().find(x => x.nomch === nomch);
    return client;
}

export const updateClient = ({ date, date2, ca, nomch, raison, pays, nbpers, age, sexe }: Client) => {
    const clients = getClients();
    const client = clients.find(x => x.nomch === nomch);
    if (client) {
        client.date = date;
        client.date2 = date2;
        client.ca = ca;
        client.nomch = nomch;
        client.raison = raison;
        client.pays = pays;
        client.nbpers = nbpers;
        client.age = age;
        client.sexe = sexe;
        saveData(clients);
    }
}

export const addClient = (
    date: string,
    date2: string,
    ca: number,
    nomch: string,
    raison: string,
    pays: string,
    nbpers: number,
    age: string,
    sexe: string) => {
    const client = {
        date,
        date2,
        ca,
        nomch,
        raison,
        pays,
        nbpers,
        age,
        sexe,
    };
    const clients = getClients();
    clients.push(client);
    saveData(clients);
}

function getData() {
    const data = JSON.parse(window.localStorage.fuzzyData || '[]') as Client[];
    return data;
}

function saveData(clients: Client[]) {
    const dataString = JSON.stringify(clients);
    window.localStorage.fuzzyData = dataString;
}