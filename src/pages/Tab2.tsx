import { IonContent, IonButton, IonImg, IonInput, IonPage, IonItem, IonIcon, IonSelect, IonSelectOption, IonRow, IonCol, IonGrid } from '@ionic/react';
import './style.css';


import React, { useState } from 'react';

import { addOutline } from 'ionicons/icons';






const Home: React.FC = () => {
    const sus = async (e: React.FormEvent) => {
        e.preventDefault();

    }

    const [chbre, setChbre] = useState<string>();
    const [gender, setGender] = useState<string>();
    const [hairColor, setHairColor] = useState<string>('brown');
    const [value, setValue] = useState(0);
    const [rangeValue, setRangeValue] = useState<{
        lower: number;
        upper: number;
    }>({ lower: 0, upper: 0 });

    const options = {
        cssClass: 'my-custom-interface'

    }

    const customFormatter = (value: number) => `${value}%`;
    return (


        <IonPage>


            <IonContent >

                <IonGrid>



                    <IonImg id="mas1" src="/assets/Image/logo.png" />

                    <p className='titre1'>DURÉE DU SÉJOUR :</p>


                    {/* <IonDatetime  pickerFormat="MMMM YYYY" ></IonDatetime>
                    <IonIcon name="calendar-outline">calendrier</IonIcon> */}



                    <p className='titre'>CA TOTAL DU CLIENT :</p>

                    <IonInput > </IonInput>



                    <p className='titre'>NOM DE(S) CHAMBRE(S)   </p>
                    <IonRow>
                        <IonCol>
                            <IonItem className='select'>
                                <IonSelect interface="popover" interfaceOptions={options} >
                                    <IonSelectOption className='select' value="chambre 1">chambre 1</IonSelectOption>

                                    <IonSelectOption className='select' value="chambre 2">chambre 2</IonSelectOption>

                                </IonSelect>

                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonButton className='butplus' color="light "><IonIcon slot='start' icon={addOutline}></IonIcon></IonButton>
                        </IonCol>
                    </IonRow>

                    <p className='titre'>RAISON DU VOYAGE :</p>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="full" color=" #a99462" className="but" onClick={sus} routerLink='/tab1' > Business</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="full" color=" #a99462" className="but" onClick={sus} routerLink='/tab1' > Tourisme</IonButton>
                        </IonCol>
                    </IonRow>
                    <p className='titre'>PAYS DE RESIDENCE DU CLIENT</p>
                    <IonItem>
                        <IonSelect className='select' interface="popover" interfaceOptions={options} value={hairColor} >
                            <IonSelectOption className='select' value="chambre 1">chambre 1</IonSelectOption>
                            <IonSelectOption className='select' value="chambre 2">chambre 2</IonSelectOption>

                        </IonSelect>
                    </IonItem>
                    <p className='titre'>NOMBRE DE PERSONNES</p>
                    <IonItem>
                        <IonSelect className='select' interface="popover" interfaceOptions={options} value={hairColor} >
                            <IonSelectOption className='select' value="1">1</IonSelectOption>
                            <IonSelectOption className='select' value="2">2</IonSelectOption>
                            <IonSelectOption className='select' value="3">3</IonSelectOption>
                            <IonSelectOption className='select' value="4">4</IonSelectOption>
                            <IonSelectOption className='select' value="5">5</IonSelectOption>
                            <IonSelectOption className='select' value="6">6</IonSelectOption>



                        </IonSelect>
                    </IonItem>
                    <p className='titre'>TRANCHES D’ÂGE(S) ET SEXE(S) :</p>
                    <IonRow >
                        <IonCol>
                            <IonItem>
                                <IonSelect className='select' interface="popover" interfaceOptions={options} value={hairColor} >
                                    <IonSelectOption className='select' value="18-30">18-30</IonSelectOption>
                                    <IonSelectOption className='select' value="30-45">30-45</IonSelectOption>
                                    <IonSelectOption className='select' value="45-60">45-60</IonSelectOption>
                                    <IonSelectOption className='select' value="60-75">60-75</IonSelectOption>
                                    <IonSelectOption className='select' value="75+">75+</IonSelectOption>


                                </IonSelect>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="full" color=" #a99462" className="but" onClick={sus} routerLink='/tab1' > H </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="full" color=" #a99462" className="but" onClick={sus} routerLink='/tab1' > F </IonButton>
                        </IonCol>

                    </IonRow>

                    <IonButton expand="full" color=" #a99462" className="butval" onClick={sus} routerLink='/tab1' > Valider</IonButton>





                </IonGrid>


            </IonContent>
        </IonPage >
    );
};

export default Home;