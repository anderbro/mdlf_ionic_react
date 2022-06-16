import { IonContent, IonButton, IonImg, IonPage, IonGrid, useIonViewWillEnter } from '@ionic/react';
import './style.css';
import React, { useEffect, useState } from 'react';
import { Plugins, Capacitor } from "@capacitor/core";
import { SQLiteConnection } from "@capacitor-community/sqlite";

import jsonData from './import-json';

const { CapacitorSQLite } = Plugins;

const mSQLite = new SQLiteConnection(CapacitorSQLite);


const Home: React.FC = () => {

  const [database, setDatabase] = useState<any>(null);
  const [queryResults, setQueryResults] = useState<any>(null);

  //use to load  json into database
  const loadJSON = () => {

    mSQLite.importFromJson(JSON.stringify(jsonData))

  }



  //initialize <database></database>

  const initdb = async () => {

    try {

      const mSQLite = new SQLiteConnection(CapacitorSQLite);

      const db: any = await mSQLite.createConnection(
        "testdb", false, "no-encryption", 1);

      setDatabase(db);
      return db;
    } catch (e) {
      window.alert(JSON.stringify(e, null, 2));
      return null;

    }
  };

  useEffect(() => {
    initdb().then((db: any) => {
      window.alert('initialized' + JSON.stringify(db, null, 2))
      return loadJSON();
    })
      .then((jsonLoadResults: any) => {

        window.alert(JSON.stringify(jsonLoadResults, null, 2));
        database.open();
        return database.query("SELECT * from CONTACTS;");
      })

      .then((queryResults: any) => {
        setQueryResults(queryResults)
      });

  }, [database]);

  return (




    <IonPage>

      <IonContent>

        <IonGrid>
          <IonImg id="mas2" src="/assets/Image/logo.png" />

          {console.log("fdd")}
          <div className="bdsut">

            <p className='bjr'>Bonjour</p>
            <IonButton expand="full" color=" #a99462" className="butac" routerLink='/tab1'  ><IonImg id='drpfr' src="/assets/Image/27099.jpg"></IonImg> Formulaire de satisfaction</IonButton>
            <p className='help'>Aidez nous à nous améliorer !</p>


            <p className='bjr'>Welcome</p>
            <IonButton expand="full" color=" #a99462" className="butac" routerLink='/tab1' ><IonImg id='drp' src="/assets/Image/18166.jpg" ></IonImg>Satisfaction Survey</IonButton>
            <p className='help' >Help us improve !</p>


          </div>



        </IonGrid>

        <pre>{JSON.stringify(queryResults, null, 2)}</pre>
      </IonContent>
    </IonPage >
  );
};

export default Home;
