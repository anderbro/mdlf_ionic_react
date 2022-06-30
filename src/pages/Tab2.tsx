import { IonContent, IonButton, IonImg, IonInput, IonPage, IonItem, IonIcon, IonSelect, IonSelectOption, IonRow, IonCol, IonGrid, IonDatetime, IonLabel, IonPopover, setupIonicReact } from '@ionic/react';
import './style.css';
import { format, parseISO } from 'date-fns';
import React, { useRef, useState } from 'react';
import { addOutline, calendar } from 'ionicons/icons';
import AjoutChambre from '../components/AjoutChambre';
import AjoutAge from '../components/AjoutAge';
import { addClient } from '../services/data_clients';




setupIonicReact();

const Home: React.FC = () => {


    // push les données de data2 vers la bd

    const tou = document.querySelector("#tou");
    const tou2 = document.querySelector("#butv1");
    // const busi = document.querySelector("#busi");
    const busi2 = document.querySelector("#butv");

    // const sexef = document.querySelector("#butf");
    // const sexeh = document.querySelector("#buth");
    // const sexeh1 = document.querySelector("#butv2");
    // const sexef1 = document.querySelector("#butv3")

    const formatDate = (value: string) => {
        return format(parseISO(value), 'MMM dd yyyy');
    };

    const sus = async (e: React.FormEvent) => {
        e.preventDefault();

    }
    /* A way to get the value of the input. */

    const caInputRef = useRef<HTMLIonInputElement>(null);
    const chambreNameInputRef = useRef<HTMLIonSelectElement>(null);
    const paysClientInputRef = useRef<HTMLIonSelectElement>(null);
    const nombrePersInputRef = useRef<HTMLIonSelectElement>(null);
    const ageInputRef = useRef<HTMLIonSelectElement>(null);
    const raisonInput = useRef<HTMLIonButtonElement>(null);

    /* Setting the state of the component. */

    const [chambrename, setChambreName] = useState<string>('');
    const [paysClient, setPaysClient] = useState<string>('');
    const [ca, setCa] = useState<number>(0);
    const [nombrePers, setNombrePers] = useState<number>(1);
    const [age, setAge] = useState<string>('');
    const [raison, setRaison] = useState<string>('');
    const [sexe, setSexe] = useState<string>('');



    const [components, setComponents] = useState<any>([]);
    const [components1, setComponents1] = useState<any>([]);

    const AjouterChambre = () => {

        setComponents([...components, "selecteur"])
    }


    const AjouterAge = () => {

        setComponents1([...components1, "selecteur"])

    }

    const Raison = () => {

        // if ()

    }





    const date1InputRef = useRef<HTMLIonDatetimeElement>(null);
    const date2InputRef = useRef<HTMLIonDatetimeElement>(null);

    const [popoverDate, setPopoverDate] = useState('');
    const [popoverDate2, setPopoverDate2] = useState('');




    const Infos = () => {
        const valChambreName = chambreNameInputRef.current!.value;
        const valPaysClient = paysClientInputRef.current!.value;
        const valNombrePers = nombrePersInputRef.current!.value;
        const valAge = ageInputRef.current!.value;
        const valRaison = raisonInput.toString()




        // setSexe();
        setAge(valAge);
        setNombrePers(valNombrePers);
        setPaysClient(valPaysClient);
        setChambreName(valChambreName);
        setRaison(valRaison);
        setCa(ca);


        addClient(popoverDate, popoverDate2, ca, chambrename, raison, paysClient, nombrePers, age, sexe);

    }

    const options = {
        // cssClass: 'my-custom-interface'

    }



    return (


        <IonPage>


            <IonContent >

                <IonGrid>



                    <IonImg id="mas1" src="/assets/Image/logo.png" />

                    <p className='titre1'>DURÉE DU SÉJOUR :</p>




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


                    {/* <ChoixDates></ChoixDates> */}




                    <p className='titre'>CA TOTAL DU CLIENT :</p>

                    <IonInput type='number' value={ca} ref={caInputRef} className={"calendar"} > </IonInput>




                    <p className='titre'>NOM DE(S) CHAMBRE(S)   </p>
                    <IonRow className='plus' id="plus">
                        <IonCol>
                            <IonItem className='select'>
                                <IonSelect className='slct1' slot='start' interface="popover" ref={chambreNameInputRef} value={IonSelectOption}  >
                                    <IonSelectOption value="chambre 1" >chambre 1</IonSelectOption>

                                    <IonSelectOption value="chambre 2">chambre 2</IonSelectOption>

                                </IonSelect>

                            </IonItem>

                        </IonCol>
                        <IonCol>
                            <IonButton className='butplus' color="x" onClick={AjouterChambre}><IonIcon icon={addOutline}></IonIcon></IonButton>
                            {components && components.length > 0 && components.map((key: number) => { console.log(key); return (<AjoutChambre></AjoutChambre>) })}

                        </IonCol>

                    </IonRow>












                    <p className='titre'>RAISON DU VOYAGE :</p>
                    <IonRow >
                        <IonCol>
                            <IonButton expand="full" ref={raisonInput} color=" #a99462" className="but" onClick={Raison} id='busi' defaultValue="business"> Business </IonButton>

                        </IonCol>
                        <IonCol>
                            <IonButton expand="full" ref={raisonInput} color=" #a99462" className="but" onClick={Raison} defaultValue="tourisme">  Tourisme</IonButton>

                        </IonCol>

                    </IonRow>
                    <p className='titre'>PAYS DE RESIDENCE DU CLIENT</p>
                    <IonItem className='select1' >
                        <IonSelect className='slct' interface="popover" interfaceOptions={options} ref={paysClientInputRef} value={IonSelectOption}>
                            <IonSelectOption value="chambre 1" >France</IonSelectOption>
                            <IonSelectOption value="chambre 2">Espagne</IonSelectOption>
                            <IonSelectOption value="chambre 2">Allemagne</IonSelectOption>
                            <IonSelectOption value="chambre 2">Italie</IonSelectOption>

                        </IonSelect>
                    </IonItem>
                    <p className='titre'>NOMBRE DE PERSONNES</p>
                    <IonRow>
                        <IonLabel>{IonSelectOption.name}</IonLabel>
                        <IonItem className='select1'>
                            <IonSelect className='slct' slot='start' interface="popover" interfaceOptions={options} ref={nombrePersInputRef} value={IonSelectOption}>
                                <IonSelectOption value={1}>1</IonSelectOption>
                                <IonSelectOption value={2}>2</IonSelectOption>
                                <IonSelectOption value={3}>3</IonSelectOption>
                                <IonSelectOption value={4}>4</IonSelectOption>
                                <IonSelectOption value={5}>5</IonSelectOption>
                                <IonSelectOption value={6}>6</IonSelectOption>



                            </IonSelect>
                        </IonItem>
                    </IonRow>


                    <p className='titre'>TRANCHES D’ÂGE(S) ET SEXE(S) :</p>
                    <IonButton className='butplus' color="x" onClick={AjouterAge}><IonIcon icon={addOutline}></IonIcon></IonButton>
                    {components1 && components1.length > 0 && components1.map((key: number) => { console.log(key); return (<AjoutAge></AjoutAge>) })}



                    <AjoutAge></AjoutAge>

                    {/* A button that calls the function Infos and then redirects to the home page.  */}
                    <IonButton expand="full" color=" #a99462" className="butval" onClick={Infos} routerLink="home" > Valider {console.log(popoverDate, popoverDate2)}</IonButton>





                </IonGrid >


            </IonContent >
        </IonPage >
    );
};

export default Home;
