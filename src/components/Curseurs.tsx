import React, { useRef, useState } from 'react';
import { IonImg, IonPage, IonCol, IonGrid, IonContent, IonRange, IonTextarea, IonButton, IonIcon } from '@ionic/react';
import { addNoteClient } from '../services/data_notes';
import { Link } from 'react-router-dom';
import { chevronBackOutline } from 'ionicons/icons';
import { hoursToSeconds } from 'date-fns';
import { minutesInHour } from 'date-fns/fp';




const Curseurs: React.FC = () => {

    const sejourInputRef = useRef<HTMLIonRangeElement>(null);
    const chambreInputRef = useRef<HTMLIonRangeElement>(null);
    const repasInputRef = useRef<HTMLIonRangeElement>(null);
    const spaInputRef = useRef<HTMLIonRangeElement>(null);
    const activitesInputRef = useRef<HTMLIonRangeElement>(null);
    const commInputRef = useRef<HTMLIonTextareaElement>(null);

    const [tot, setTot] = useState<Number>();



    const Tot = () => {

        const valSejour = +sejourInputRef.current!.value;
        const valChambre = +chambreInputRef.current!.value;
        const valRepas = +repasInputRef.current!.value;
        const valSpa = +spaInputRef.current!.value;
        const valactivites = +activitesInputRef.current!.value;
        const datef = date.toString();
        const heuref = hours.toString();

        const tot = +valChambre + +valSejour + +valRepas + +valSpa + +valactivites;



        setTot(tot);

        // console.log(text)
        addNoteClient(datef, heuref, valSejour, valChambre, valRepas, valSpa, valactivites, text);



        //ajouter toutes ces valeurs dans data
        // + récuperer la date et l'heure actuelle.
    }


    // const currentTimeInMilliseconds = Date.now();
    var d = new Date();
    var date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();



    const [text, setText] = useState('');


    const customFormatter = (value: number) => `${value}`;
    return (
        <IonGrid>
            <IonCol>
                <p className='txt1'>QUELLE NOTE DONNERIEZ-VOUS DE MANIÈRE GLOBALE À VOTRE SÉJOUR AU MAS DE LA FOUQUE ?</p>
                <div className='bar'>
                    <IonImg src="/assets/Image/1.png" className='imgbar'> </IonImg>
                    <IonRange ref={sejourInputRef} min={0} max={10} step={1} snaps={true} pinFormatter={customFormatter} pin={true} ticks={true} color="hsl(37, 35%, 90%)" />
                </div>
            </IonCol>



            <p className='txt'>QU’AVEZ-VOUS PENSÉ DE LA QUALITÉ DE NOS CHAMBRES ?</p>
            <div className='bar'>
                <IonImg src="/assets/Image/2.png" className='imgbar'> </IonImg>
                <IonRange ref={chambreInputRef} min={0} max={10} pinFormatter={customFormatter} pin={true} step={1} snaps={true} ticks={true} color="hsl(37, 35%, 90%)" />
            </div>


            <p className='txt'>COMMENT ESTIMEZ-VOUS LA QUALITÉ DE VOS REPAS ?</p>
            <div className='bar'>
                <IonImg src="/assets/Image/3.png" className='imgbar'> </IonImg>
                <IonRange ref={repasInputRef} min={0} max={10} step={1} pinFormatter={customFormatter} pin={true} snaps={true} ticks={true} color="hsl(37, 35%, 90%)" />
            </div>


            <p className='txt'>QUELLE NOTE DONNERIEZ-VOUS POUR LE SPA ?</p>
            <div className='bar'>
                <IonImg src="/assets/Image/4.png" className='imgbar'> </IonImg>
                <IonRange ref={spaInputRef} min={0} max={10} step={1} pinFormatter={customFormatter} pin={true} snaps={true} ticks={true} color="hsl(37, 35%, 90%)" />
            </div>


            <p className='txt2' >QUELLE NOTE DONNERIEZ-VOUS POUR LES ACTIVITÉS ET EXCURSIONS HORS DE L’HÔTEL ?</p>
            <div className='bar'>
                <IonImg src="/assets/Image/5.png" className='imgbar'> </IonImg>
                <IonRange ref={activitesInputRef} min={0} max={10} step={1} pinFormatter={customFormatter} pin={true} snaps={true} ticks={true} color="hsl(37, 35%, 90%)" />
            </div>


            <p className='com'> COMMENTAIRES ? </p>

            <IonTextarea ref={commInputRef} value={text} onIonChange={e => setText(e.detail.value!)}>

            </IonTextarea>

            <div className='footer'>
                <Link id="retour" to="/home">  <IonIcon slot="start" icon={chevronBackOutline} />  RETOUR</Link>
                <IonButton expand="full" color=" #a99462" className="butval" onClick={Tot} routerLink="thanx"> Valider   {console.log(date, hours)} </IonButton>
                <Link id="polit" to="/home">Politique de confidentialité </Link>
            </div>


        </IonGrid>

    )
}


export default Curseurs;