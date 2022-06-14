import { IonContent, IonButton, IonImg, IonPage, IonRange, IonIcon, IonTextarea, IonGrid, IonCol, RangeCustomEvent, IonTitle, IonAlert } from '@ionic/react';
import './style.css';


import React, { useRef, useState } from 'react';

import { chevronBackOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';

import Tot from '../components/Tot';




// setupIonicReact();

const Home: React.FC = () => {



    const [error, setError] = useState<string>();
    const clearError = () => {
        setError('');
    }

    const sus = async (e: React.FormEvent) => {
        e.preventDefault();

    }

    const sejourInputRef = useRef<HTMLIonRangeElement>(null);
    const chambreInputRef = useRef<HTMLIonRangeElement>(null);
    const repasInputRef = useRef<HTMLIonRangeElement>(null);
    const spaInputRef = useRef<HTMLIonRangeElement>(null);
    const activitesInputRef = useRef<HTMLIonRangeElement>(null);
    const commInputRef = useRef<HTMLIonTextareaElement>(null);

    const [tot, setTot] = useState<Number>();
    const [comm, setComm] = useState<String>();



    const Tot = () => {

        const valSejour = sejourInputRef.current!.value;
        const valChambre = chambreInputRef.current!.value;
        const valRepas = repasInputRef.current!.value;
        const valSpa = spaInputRef.current!.value;
        const valactivites = activitesInputRef.current!.value;
        const valComm = commInputRef.current!.value;



        const tot = +valChambre + +valSejour + +valRepas + +valSpa + +valactivites;
        const com = valComm?.toString();


        setTot(tot);
        setComm(com);

    }



    const [text, setText] = useState('');
    // const [value, setValue] = useState(0);
    // const [rangeValue, setRangeValue] = useState<{
    //     lower: number;
    //     upper: number;
    // }>({ lower: 0, upper: 0 });

    const customFormatter = (value: number) => `${value}`;
    return (


        <IonPage>

            <IonAlert isOpen={!!error} message={error} buttons={[{ text: 'Okay', handler: clearError => { } }]} />

            <IonContent>

                <IonGrid>
                    <IonImg id="mas1" src="/assets/Image/logo.png" />

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

                    <IonTextarea ref={commInputRef} value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>

                    <div className='footer'>
                        <Link id="retour" to="/home">  <IonIcon slot="start" icon={chevronBackOutline} />  RETOUR</Link>
                        <IonButton expand="full" color=" #a99462" className="butval" onClick={Tot} routerLink={'/thanx'}> Valider  {console.log(comm)} {console.log(tot)} </IonButton>
                        <Link id="polit" to="/home">Politique de confidentialité </Link>
                    </div>


                </IonGrid>
            </IonContent>
        </IonPage >
    );
};

export default Home;
