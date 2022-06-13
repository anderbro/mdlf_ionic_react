import { IonContent, IonButton, IonImg, IonPage, IonGrid } from '@ionic/react';
import './style.css';
import React from 'react';


const Home: React.FC = () => {
  return (


    <IonPage>

      <IonContent>

        <IonGrid>
          <IonImg id="mas2" src="/assets/Image/logo.png" />

          <div className="bdsut">

            <p className='bjr'>Bonjour</p>
            <IonButton expand="full" color=" #a99462" className="butac" routerLink='/tab1'  ><IonImg id='drpfr' src="/assets/Image/27099.jpg"></IonImg> Formulaire de satisfaction</IonButton>
            <p className='help'>Aidez nous à nous améliorer !</p>


            <p className='bjr'>Welcome</p>
            <IonButton expand="full" color=" #a99462" className="butac" routerLink='/tab1' ><IonImg id='drp' src="/assets/Image/18166.jpg" ></IonImg>Satisfaction Survey</IonButton>
            <p className='help' >Help us improve !</p>


          </div>



        </IonGrid>
      </IonContent>
    </IonPage >
  );
};

export default Home;
