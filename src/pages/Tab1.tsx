import { IonContent, IonButton, IonImg, IonPage, IonRange, IonIcon, IonTextarea, IonGrid, IonCol, RangeCustomEvent, IonTitle, IonAlert } from '@ionic/react';
import './style.css';


import React, { useRef, useState } from 'react';

import Curseurs from '../components/Curseurs';


const Home: React.FC = () => {



    const [error, setError] = useState<string>();
    const clearError = () => {
        setError('');
    }

    const sus = async (e: React.FormEvent) => {
        e.preventDefault();

    }
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
