import React from "react";
import { IonApp, IonHeader, IonToolbar, IonContent, setupIonicReact, IonTitle, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonButton, IonIcon, IonCard, IonCardContent } from '@ionic/react';

const Tot: React.FC<{ result: number }> = props => {
    return (
        <IonRow>
            <IonCol>
                <IonCard>
                    <IonCardContent className="ion-text-center">
                        <h2> votre IMC :</h2>
                        <h3 >
                            {props.result.toFixed(2)}
                        </h3>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
    );
};

export default Tot;  