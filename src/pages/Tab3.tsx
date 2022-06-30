import { IonContent, IonPage, IonList, IonItem, IonIcon, useIonViewWillEnter, IonButton, IonImg } from '@ionic/react';
import './style.css';


import React, { useState } from 'react';
import { closeOutline, createOutline } from 'ionicons/icons';
import { noteClient, getNoteClients, deleteNoteClient } from '../services/data_notes'




const Home: React.FC = () => {
  const [noteClients, setNoteClients] = useState<noteClient[]>([]);
  // const [showAddKidModal, setShowAddKidModal] = useState(false);

  useIonViewWillEnter(() => {
    const noteClients = getNoteClients();
    setNoteClients(noteClients);
  }
  )


  var x = 0;

  const xo = () => {
    x = 1
  }
  const deletel = () => {


    // const noteClienttelle = (key)
    deleteNoteClient()
    // noteClients.delete()
    // supprime cette ligne
    console.log(noteClients)
    return ("deleted")

  }

  return (

    <IonPage>

      <IonContent>

        <IonImg id="mas1" src="/assets/Image/logo.png" />

        {/* la fonction delete marche tres bien il suffit de l'associer au bouton delete,
        envoyer les données correspondantes */}
        {noteClients.length ? (
          <IonList className='gestion'>
            {noteClients.map((noteClient, n) => (
              <IonItem className='gestion2' key={n} > {/*routerLink={`/Tab2/`*/}

                <p className='date'  >Date : {noteClient.date}  </p>
                <p className='date'>Heure : {noteClient.heure}  </p>

                <IonButton slot={'end'} className="croixtab3" color="x" onClick={deletel}><IonIcon icon={closeOutline} /></IonButton>
                <IonButton routerLink='tab2' slot={'end'} className="buttab3" color="x"> <IonIcon icon={createOutline} onClick={xo} /> </IonButton>

              </IonItem>


            ))}

          </IonList>
        ) : (
          <div></div>
        )}


        <IonButton expand="full" color=" #a99462" className="butacc" routerLink='/home'> Accueil </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Home;
