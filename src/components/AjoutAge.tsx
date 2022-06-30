import React, { useRef } from 'react';
import { IonButton, IonImg, IonInput, IonPage, IonItem, IonIcon, IonSelect, IonSelectOption, IonRow, IonCol, IonGrid, IonDatetime, IonLabel, IonPopover, IonText, IonModal } from '@ionic/react';




const AjoutAge: React.FC = () => {


    const ageInputRef = useRef<HTMLIonSelectElement>(null);

    return (
        <IonRow >
            <IonCol>
                <IonItem className='select2'>
                    <IonSelect ref={ageInputRef} value={IonSelectOption} interface="popover"  >
                        <IonSelectOption value="18-30">18-30</IonSelectOption>
                        <IonSelectOption value="30-45">30-45</IonSelectOption>
                        <IonSelectOption value="45-60">45-60</IonSelectOption>
                        <IonSelectOption value="60-75">60-75</IonSelectOption>
                        <IonSelectOption value="75+">75+</IonSelectOption>


                    </IonSelect>
                </IonItem>
            </IonCol>
            <IonCol>
                <IonButton expand="full" color=" #a99462" className="but" id="buth"  > H </IonButton>
            </IonCol>
            <IonCol>
                <IonButton expand="full" color=" #a99462" className="but" id="butf"  > F </IonButton>
            </IonCol>

        </IonRow>

    )
}

export default AjoutAge;