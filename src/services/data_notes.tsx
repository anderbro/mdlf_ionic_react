
export interface noteClient {
    noteSejour: number;
    noteChambre: number;
    noteRepas: number;
    noteSpa: number;
    noteAct: number;
    commentaire: string;
}

export const getNoteClients = () => {
    const notesClients = getData2();
    return notesClients;
}



export const getNoteClient = (noteSejour: number) => {
    const noteClient = getNoteClients().find(x => x.noteSejour === noteSejour);
    return noteClient;
}

export const updateNoteClient = ({ noteSejour, noteChambre, noteRepas, noteAct, commentaire }: noteClient) => {
    const noteClients = getNoteClients();
    const noteClient = noteClients.find(x => x.noteSejour === noteSejour);
    if (noteClient) {
        noteClient.noteSejour = noteSejour;
        noteClient.noteChambre = noteChambre;
        noteClient.noteRepas = noteRepas;
        noteClient.noteAct = noteAct;
        noteClient.commentaire = commentaire;
        saveData2(noteClients);
    }
}

// export const deleteNoteClient = {
//     noteSejour: number,
//     noteChambre: number,
//     noteRepas: number,
//     noteSpa: number,
//     noteAct: number,
//     commentaire: string) => {
//         const noteClient = {
//             noteSejour,
//             noteChambre,
//             noteRepas,
//             noteSpa,
//             noteAct,
//             commentaire

//         };
//     const noteClients = getNoteClients();
//     noteClients.push(noteClient);
//     saveData2(noteClients)
// }}


export const addNoteClient = (
    noteSejour: number,
    noteChambre: number,
    noteRepas: number,
    noteSpa: number,
    noteAct: number,
    commentaire: string) => {
    const noteClient = {
        noteSejour,
        noteChambre,
        noteRepas,
        noteSpa,
        noteAct,
        commentaire

    };
    const noteClients = getNoteClients();
    noteClients.push(noteClient);
    saveData2(noteClients);
}





function getData2() {
    const data2 = JSON.parse(window.localStorage.fuzzyData || '[]') as noteClient[];
    return data2;
}

function saveData2(noteClients: noteClient[]) {
    const dataString = JSON.stringify(noteClients);
    window.localStorage.fuzzyData = dataString;
}