import { IonContent, IonButton, IonImg, IonPage, IonRange, IonIcon, IonTextarea, IonGrid, IonCol } from '@ionic/react';
import './style.css';


import React, { useRef, useState } from 'react';

import { chevronBackOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';





// setupIonicReact();

const Home: React.FC = () => {





    const sus = async (e: React.FormEvent) => {
        e.preventDefault();

    }

    // const sejourInputRef = useRef <HTMLIonInputElement>
    const [text, setText] = useState('');
    const [value, setValue] = useState(0);
    const [rangeValue, setRangeValue] = useState<{
        lower: number;
        upper: number;
    }>({ lower: 0, upper: 0 });

    const customFormatter = (value: number) => `${value}`;
    return (


        <IonPage>


            <IonContent>

                <IonGrid>
                    <IonImg id="mas1" src="/assets/Image/logo.png" />

                    <IonCol>
                        <p className='txt1'>QUELLE NOTE DONNERIEZ-VOUS DE MANIÈRE GLOBALE À VOTRE SÉJOUR AU MAS DE LA FOUQUE ?</p>
                        <div className='bar'>
                            <IonImg src="/assets/Image/1.png" className='imgbar'> </IonImg>
                            <IonRange min={0} max={10} step={1} snaps={true} pinFormatter={customFormatter} pin={true} ticks={true} color="hsl(37, 35%, 90%)" />
                        </div>
                    </IonCol>



                    <p className='txt'>QU’AVEZ-VOUS PENSÉ DE LA QUALITÉ DE NOS CHAMBRES ?</p>
                    <div className='bar'>
                        <IonImg src="/assets/Image/2.png" className='imgbar'> </IonImg>
                        <IonRange min={0} max={10} pinFormatter={customFormatter} pin={true} step={1} snaps={true} ticks={true} color="hsl(37, 35%, 90%)" />
                    </div>


                    <p className='txt'>COMMENT ESTIMEZ-VOUS LA QUALITÉ DE VOS REPAS ?</p>
                    <div className='bar'>
                        <IonImg src="/assets/Image/3.png" className='imgbar'> </IonImg>
                        <IonRange min={0} max={10} step={1} pinFormatter={customFormatter} pin={true} snaps={true} ticks={true} color="hsl(37, 35%, 90%)" />
                    </div>


                    <p className='txt'>QUELLE NOTE DONNERIEZ-VOUS POUR LE SPA ?</p>
                    <div className='bar'>
                        <IonImg src="/assets/Image/4.png" className='imgbar'> </IonImg>
                        <IonRange min={0} max={10} step={1} pinFormatter={customFormatter} pin={true} snaps={true} ticks={true} color="hsl(37, 35%, 90%)" />
                    </div>


                    <p className='txt2' >QUELLE NOTE DONNERIEZ-VOUS POUR LES ACTIVITÉS ET EXCURSIONS HORS DE L’HÔTEL ?</p>
                    <div className='bar'>
                        <IonImg src="/assets/Image/5.png" className='imgbar'> </IonImg>
                        <IonRange min={0} max={10} step={1} pinFormatter={customFormatter} pin={true} snaps={true} ticks={true} color="hsl(37, 35%, 90%)" />
                    </div>




                    <p className='com'> COMMENTAIRES ? </p>

                    <IonTextarea value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>

                    <div className='footer'>
                        <Link id="retour" to="/home">  <IonIcon slot="start" icon={chevronBackOutline} />  RETOUR</Link>
                        <IonButton expand="full" color=" #a99462" className="butval" onClick={sus} routerLink='/tab1' > Valider</IonButton>
                        <Link id="polit" to="/home">Politique de confidentialité </Link>
                    </div>



                </IonGrid>
            </IonContent>
        </IonPage >
    );
};

export default Home;
