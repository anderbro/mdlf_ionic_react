import { IonContent, IonImg, IonPage, IonGrid, IonText } from '@ionic/react';
import { Link } from 'react-router-dom';
import './style.css';



const Home: React.FC = () => {
    return (


        <IonPage>


            <IonContent>

                <IonGrid>
                    <IonImg id="mas3" src="/assets/Image/logo.png" />

                    <IonText>
                        <p className='big'>Merci pour vos retours,</p>
                        <p className='small'>vous pouvez redonner la tablette à la réception.</p>
                    </IonText>
                </IonGrid>



                <Link id="polit" to="/tab2">réservé au personnel </Link>
            </IonContent>
        </IonPage >
    );
};

export default Home;
