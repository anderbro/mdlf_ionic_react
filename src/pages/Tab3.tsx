import { IonContent, IonPage, IonList, IonItem, IonIcon, useIonViewWillEnter, IonButton, IonImg } from '@ionic/react';
import './style.css';


import React, { useState } from 'react';
import { closeOutline, createOutline } from 'ionicons/icons';
import { noteClient, getNoteClients } from '../services/data_notes'




const Home: React.FC = () => {
  const [noteClients, setNoteClients] = useState<noteClient[]>([]);
  const [showAddKidModal, setShowAddKidModal] = useState(false);

  useIonViewWillEnter(() => {
    const noteClients = getNoteClients();
    setNoteClients(noteClients);
  }
  )

  const [items, setItems] = useState([{ id: 0, value: 'Item 0' }, { id: 1, value: 'Item 1' }]);


  const deletel = () => {

    // prend en valeur la clée et supprime cette ligne
    console.log(noteClients)

  }

  return (

    <IonPage>

      <IonContent>

        <IonImg id="mas1" src="/assets/Image/logo.png" />

        {/* rendre fonctionnel le bouton delete,
        envoyer les données correspondantes */}
        {noteClients.length ? (
          <IonList className='gestion'>
            {noteClients.map((noteClient, n) => (
              <IonItem className='gestion2' key={n} > {/*routerLink={`/Tab2/`*/}
                {noteClient.noteRepas}
                <IonIcon slot={'end'} onClick={deletel} icon={closeOutline} color="red" />
                <IonIcon slot={'end'} icon={createOutline} color="green" />

              </IonItem>

            ))}

          </IonList>
        ) : (
          <div></div>
        )}


        <IonButton expand="full" color=" #a99462" className="butval" routerLink='/home'> Accueil </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Home;
