import React, { useRef, useState } from 'react';
import { IonButton, IonItem, IonIcon, IonSelect, IonSelectOption, IonRow, IonCol, IonContent } from '@ionic/react';
import { addOutline } from 'ionicons/icons';


const AjoutChambre: React.FC = () => {

    const [components, setComponents] = useState<any>([]);

    const AjouterChambre = () => {

        setComponents([...components, "selecteur"])



    }



    const chambreNameInputRef = useRef<HTMLIonSelectElement>(null);

    return (


        <IonRow className='plus1' id="plus">
            <IonCol>
                <IonItem className='select'>
                    <IonSelect className='slct1' slot='start' interface="popover" ref={chambreNameInputRef} value={IonSelectOption}  >
                        <IonSelectOption value="chambre 1" >chambre 1</IonSelectOption>

                        <IonSelectOption value="chambre 2">chambre 2</IonSelectOption>

                    </IonSelect>

                </IonItem>

            </IonCol>


        </IonRow>




    )




}

export default AjoutChambre;