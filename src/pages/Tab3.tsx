import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonItemDivider, IonTextarea, IonImg, IonIcon } from '@ionic/react';
import './style.css';


import React, { useState } from 'react';
import { atOutline, calendar, close, createOutline } from 'ionicons/icons';







const Home: React.FC = () => {

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
      <IonContent>
        <IonImg id="mas1" src="/assets/Image/logo.png" />
        <IonList className='list'>
          Date : dklfjsldkf  Heure : sdqd
          <IonIcon icon={createOutline} />
          <IonIcon icon={close} slot="end" />
          {/* onClick{() => handleDelet(data.item)}  */}

        </IonList>

        {items.map(item => {
          return (
            <IonItem key={item.id}>
              <IonLabel>{item.value}</IonLabel>
            </IonItem>
          )
        })}

      </IonContent>
    </IonPage>
  );
};

export default Home;
