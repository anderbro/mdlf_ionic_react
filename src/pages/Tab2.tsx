import { IonContent, IonButton, IonImg, IonInput, IonPage, IonItem, IonIcon, IonSelect, IonSelectOption, IonRow, IonCol, IonGrid, IonDatetime, IonLabel, IonPopover, IonText, IonModal } from '@ionic/react';
import './style.css';

import { business, busOutline, calendar } from 'ionicons/icons';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import React, { useRef, useState } from 'react';

import { addOutline } from 'ionicons/icons';






const Home: React.FC = () => {

    const [popoverDate, setPopoverDate] = useState('');
    const [popoverDate2, setPopoverDate2] = useState('');


    const tou = document.querySelector("#tou");
    const tou2 = document.querySelector("#butv1");
    const busi = document.querySelector("#busi");
    const busi2 = document.querySelector("#butv");

    const sexef = document.querySelector("#butf");
    const sexeh = document.querySelector("#buth");
    const sexeh1 = document.querySelector("#butv2");
    const sexef1 = document.querySelector("#butv3")

    const formatDate = (value: string) => {
        return format(parseISO(value), 'MMM dd yyyy');
    };

    const sus = async (e: React.FormEvent) => {
        e.preventDefault();

    }

    const date1InputRef = useRef<HTMLIonDatetimeElement>(null);
    const date2InputRef = useRef<HTMLIonDatetimeElement>(null);
    const caInputRef = useRef<HTMLIonInputElement>(null);
    const chambreNameInputRef = useRef<HTMLIonSelectElement>(null);
    const paysClientInputRef = useRef<HTMLIonSelectElement>(null);
    const nombrePersInputRef = useRef<HTMLIonSelectElement>(null);
    const ageInputRef = useRef<HTMLIonSelectElement>(null);




    const [chambrename, setChambreName] = useState<String>();
    const [paysClient, setPaysClient] = useState<String>();
    const [ca, setCa] = useState<number>();
    const [nombrePers, setNombrePers] = useState<String>();
    const [age, setAge] = useState<String>();
    const [raison, setRaison] = useState<String>();
    const [sexe, setSexe] = useState<String>();





    const Ajouter = () => {
        // quand on clique sur le plus, rajoute la meme ligne en dessous

    }




    const Ajouter2 = () => {
        if (busi?.getAttribute("id") && tou?.getAttribute("id")) {
            busi?.setAttribute("id", "butv");
            console.log("popo")

        }
        else {
            busi2?.setAttribute("id", "busi");
            setRaison("");

        }

        // setRaison("business");



        // else if (busi?.getAttribute("id") == "butv") {
        //     busi?.setAttribute("id", "busi");
        //     tou?.setAttribute("id", "butv");
        // }


        // busi?.setAttribute("id", "butv");
        // tou?.setAttribute("id", "butv");

        // console.log(tou?.getAttribute("id"));
        // console.log(busi?.getAttribute("id"));

        // var i=1;
        // while(i < nombrePers){

        //     ajoute  <IonCol>
        //     <IonItem className='select2'>
        //         <IonSelect ref={ageInputRef} value={IonSelectOption} interface="popover" interfaceOptions={options}  >
        //             <IonSelectOption value="18-30">18-30</IonSelectOption>
        //             <IonSelectOption value="30-45">30-45</IonSelectOption>
        //             <IonSelectOption value="45-60">45-60</IonSelectOption>
        //             <IonSelectOption value="60-75">60-75</IonSelectOption>
        //             <IonSelectOption value="75+">75+</IonSelectOption>


        //         </IonSelect>
        //     </IonItem>
        // </IonCol>
        //  i+=1
        // }


        // on récupere la valeur du nombre de personnes et on rajoute autant de lignes sexe/age
        // que cette valeur,
        // 
    }



    const Ajouter3 = () => {

        if (tou?.getAttribute("id") && busi?.getAttribute("id")) {
            tou?.setAttribute("id", "butv1");
            // tou?.setAttribute("value", "tourisme");

            // setRaison("tourisme");
        }

        else {
            tou2?.setAttribute("id", "tou");
            // tou2?.removeAttribute("value");
            setRaison("");
        }

        setRaison("tourisme");
    }

    const Sexe = () => {
        if (sexeh?.getAttribute("id") && sexef?.getAttribute("id")) {
            // sexeh?.setAttribute("value", "H");
            setSexe("H");
            sexeh?.setAttribute("id", "butv2");

        }
        else {
            sexeh1?.setAttribute("id", "buth");
            sexeh1?.removeAttribute("value");
            setSexe("");

        }
    }


    const Sexe1 = () => {
        // setSexe("F");
        if (sexef?.getAttribute("id") && sexeh?.getAttribute("id")) {

            sexef?.setAttribute("id", "butv3")
            // sexef?.setAttribute("value", "F");
            console.log("dljkdflkdflkfd");
            // setSexe("F");


        }
        else {
            setSexe("");
            sexef1?.setAttribute("id", "butf");
            // sexef1?.removeAttribute("value");
            // setSexe("");
        }
    }






    const Infos = () => {
        const valCa = caInputRef.current!.value;
        const valChambreName = chambreNameInputRef.current!.value;
        const valPaysClient = paysClientInputRef.current!.value;
        const valNombrePers = nombrePersInputRef.current!.value;
        const valAge = ageInputRef.current!.value;
        // const cafin = +valCa; //bug ne prend pas valCa??



        setAge(valAge);
        setNombrePers(valNombrePers);
        setPaysClient(valPaysClient);
        setChambreName(valChambreName);
        // setCa(valCa);



    }

    const options = {
        cssClass: 'my-custom-interface'

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


                    <p className='titre'>CA TOTAL DU CLIENT :</p>

                    <IonInput type='number' ref={caInputRef} > </IonInput>



                    <p className='titre'>NOM DE(S) CHAMBRE(S)   </p>
                    <IonRow className='plus'>
                        <IonCol>
                            <IonItem className='select'>
                                <IonSelect className='slct1' slot='start' interface="popover" interfaceOptions={options} ref={chambreNameInputRef} value={IonSelectOption}  >
                                    <IonSelectOption value="chambre 1" >chambre 1</IonSelectOption>

                                    <IonSelectOption value="chambre 2">chambre 2</IonSelectOption>

                                </IonSelect>

                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonButton className='butplus' color="light " onClick={Ajouter}><IonIcon slot='start' icon={addOutline}></IonIcon></IonButton>
                        </IonCol>
                    </IonRow>

                    <p className='titre'>RAISON DU VOYAGE :</p>
                    <IonRow >
                        <IonCol>
                            <IonButton expand="full" color=" #a99462" className="but" onClick={Ajouter2} id="busi" > Business</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="full" color=" #a99462" className="but" onClick={Ajouter3} id="tou" > Tourisme</IonButton>
                        </IonCol>
                    </IonRow>
                    <p className='titre'>PAYS DE RESIDENCE DU CLIENT</p>
                    <IonItem className='select1' >
                        <IonSelect className='slct' interface="popover" interfaceOptions={options} ref={paysClientInputRef} value={IonSelectOption}>
                            <IonSelectOption value="chambre 1" >chambre 1</IonSelectOption>
                            <IonSelectOption value="chambre 2">chambre 2</IonSelectOption>

                        </IonSelect>
                    </IonItem>
                    <p className='titre'>NOMBRE DE PERSONNES</p>
                    <IonRow>
                        <IonLabel>{IonSelectOption.name}</IonLabel>
                        <IonItem className='select1'>
                            <IonSelect className='slct' slot='start' interface="popover" interfaceOptions={options} ref={nombrePersInputRef} value={IonSelectOption}>
                                <IonSelectOption value="1">1</IonSelectOption>
                                <IonSelectOption value="2">2</IonSelectOption>
                                <IonSelectOption value="3">3</IonSelectOption>
                                <IonSelectOption value="4">4</IonSelectOption>
                                <IonSelectOption value="5">5</IonSelectOption>
                                <IonSelectOption value="6">6</IonSelectOption>



                            </IonSelect>
                        </IonItem>
                    </IonRow>
                    <p className='titre'>TRANCHES D’ÂGE(S) ET SEXE(S) :</p>
                    <IonRow >
                        <IonCol>
                            <IonItem className='select2'>
                                <IonSelect ref={ageInputRef} value={IonSelectOption} interface="popover" interfaceOptions={options}  >
                                    <IonSelectOption value="18-30">18-30</IonSelectOption>
                                    <IonSelectOption value="30-45">30-45</IonSelectOption>
                                    <IonSelectOption value="45-60">45-60</IonSelectOption>
                                    <IonSelectOption value="60-75">60-75</IonSelectOption>
                                    <IonSelectOption value="75+">75+</IonSelectOption>


                                </IonSelect>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="full" color=" #a99462" className="but" id="buth" onClick={Sexe} > H </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="full" color=" #a99462" className="but" id="butf" onClick={Sexe1} > F </IonButton>
                        </IonCol>

                    </IonRow>

                    <IonButton expand="full" color=" #a99462" className="butval" onClick={Infos}  > Valider {console.log(age, chambrename, paysClient, ca, nombrePers, popoverDate, popoverDate2, raison, sexe)}</IonButton>





                </IonGrid >


            </IonContent >
        </IonPage >
    );
};

export default Home;
