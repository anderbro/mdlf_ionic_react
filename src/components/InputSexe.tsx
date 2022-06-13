import { IonLabel, IonSegment, IonSegmentButton, } from "@ionic/react";
import React from "react";

const InputSexe: React.FC<{ selectedValue: 'H' | 'F'; onSelectedValue: (value: 'H' | 'F') => void }> = props => {
    const inputChangement = (event: CustomEvent) => {
        props.onSelectedValue(event.detail.value);
    }

    return (
        <IonSegment value={props.selectedValue} onIonChange={inputChangement} >
            <IonSegmentButton value="H" >
                <IonLabel>homme </IonLabel>
            </IonSegmentButton>
            < IonSegmentButton value="F" >
                <IonLabel>femme </IonLabel>
            </IonSegmentButton>
        </IonSegment>
    );


};

export default InputSexe;