import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonItemDivider, IonTextarea, IonImg, IonIcon, useIonViewWillEnter, IonButtons, IonButton, IonAvatar, IonChip, IonModal, IonRow } from '@ionic/react';
import './style.css';


import React, { useState } from 'react';
import { atOutline, calendar, close, createOutline } from 'ionicons/icons';
import { Client, getClient, getClients } from '../services/data.services'




const Home: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [showAddKidModal, setShowAddKidModal] = useState(false);

  useIonViewWillEnter(() => {
    const clients = getClients();
    setClients(clients);
  }
  )

  const [items, setItems] = useState([{ id: 0, value: 'Item 0' }, { id: 1, value: 'Item 1' }]);

  // const


  //   var mysql = require('mysql');
  //   var connection = mysql.createConnection({
  //     host: 'localhost',
  //     user: 'me',
  //     password: 'secret',
  //     database: 'my_db'
  //   });

  //   connection.connect();

  //   connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  //     if (error) throw error;
  //     console.log('The solution is: ', results[0].solution);
  //   });

  //   connection.end();
  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Kids</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowAddKidModal(true)}>
              <IonIcon icon={createOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Kids</IonTitle>
          </IonToolbar>
        </IonHeader>

        {clients.length ? (
          <IonList>
            {clients.map((client, n) => (
              <IonItem key={n} routerLink={`/client/${client.nomch}`}>
                {client.raison && (
                  <IonAvatar slot="start">
                    <p>popo</p>
                  </IonAvatar>
                )}
                <IonLabel>
                  <h2>{client.nomch}</h2>
                  <p>Goal: {client.raison}</p>
                </IonLabel>
                <IonChip slot="end">{client.nbpers}</IonChip>
              </IonItem>
            ))}
          </IonList>
        ) : (
          <div>Add some kids</div>
        )}


      </IonContent>
    </IonPage>
  );
};

// export default Home;

//     <IonPage>
//       <IonContent >
//         <IonImg id="mas1" src="/assets/Image/logo.png" />
//         <IonList className='list'>
//           Date : dklfjsldkf  Heure : sdqd
//           <IonIcon icon={createOutline} />
//           <IonIcon icon={close} slot="end" />
//           {/* onClick{() => handleDelet(data.item)}  */}

//         </IonList>

//         {items.map(item => {
//           return (
//             <IonItem className='list' key={item.id}>
//               <IonLabel >{item.value}</IonLabel>
//             </IonItem>
//           )
//         })}

//       </IonContent>
//     </IonPage>
//   );
// };

export default Home;
