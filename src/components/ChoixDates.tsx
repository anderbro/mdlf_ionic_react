import React, { useRef, useState } from 'react';
import { IonCol, IonGrid, IonIcon, IonPopover, IonItem, IonRow, IonLabel, IonDatetime } from '@ionic/react';
import { calendar } from 'ionicons/icons';


import { format, parseISO } from 'date-fns';



const ChoixDates: React.FC = () => {


    const date1InputRef = useRef<HTMLIonDatetimeElement>(null);
    const date2InputRef = useRef<HTMLIonDatetimeElement>(null);

    const [popoverDate, setPopoverDate] = useState('');
    const [popoverDate2, setPopoverDate2] = useState('');


    const formatDate = (value: string) => {
        return format(parseISO(value), 'MMM dd yyyy');
    };


    return (
        // <IonGrid>
        //     <p className='titre1'>DURÉE DU SÉJOUR :</p>


        <IonRow>
            <IonCol>
                <IonItem button={true} id="open-date-input" className='calendar'>
                    <IonLabel>{popoverDate}</IonLabel>
                    <IonIcon icon={calendar} slot="end" />
                    <IonPopover trigger="open-date-input" showBackdrop={false}>
                        <IonDatetime
                            presentation="date"
                            onIonChange={ev => setPopoverDate(formatDate(ev.detail.value!))}
                            ref={date1InputRef}
                        />
                    </IonPopover>
                </IonItem>
            </IonCol>
            <IonCol>
                <p className='titre1'> AU </p>
            </IonCol>
            <IonCol >
                <IonItem button={true} id="open-date-input2" className='calendar' >
                    <IonLabel>{popoverDate2}</IonLabel>
                    <IonIcon icon={calendar} slot="end" />
                    <IonPopover trigger="open-date-input2" showBackdrop={false}>
                        <IonDatetime
                            presentation="date"
                            onIonChange={ev => setPopoverDate2(formatDate(ev.detail.value!))}
                            ref={date2InputRef}
                        />
                    </IonPopover>
                </IonItem>
            </IonCol>
        </IonRow>


        // </IonGrid>

    )
}


export default ChoixDates;