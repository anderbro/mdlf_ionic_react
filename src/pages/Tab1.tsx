import { IonContent, IonImg, IonPage, IonGrid, IonAlert } from '@ionic/react';
import './style.css';


import React, { useState } from 'react';

import Curseurs from '../components/Curseurs';


const Home: React.FC = () => {



    const [error, setError] = useState<string>();
    const clearError = () => {
        setError('');
    }

    const currentTimeInMilliseconds = Date.now();

    return (


        <IonPage>

            <IonAlert isOpen={!!error} message={error} buttons={[{ text: 'Okay', handler: clearError => { } }]} />

            <IonContent>

                <IonGrid>
                    <IonImg id="mas1" src="/assets/Image/logo.png" />

                    <Curseurs></Curseurs>


                </IonGrid>
            </IonContent>
        </IonPage >
    );
};

export default Home;
