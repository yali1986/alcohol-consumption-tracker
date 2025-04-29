import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "../components/ButtonPrimary";
import Thefooter from "../components/Thefooter";
import logo from '../../public/logo.webp'
import Modal from "../components/Modal";


export default function Home() {

    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);


    return (
        <>
       <div className="mx-auto text-center mt-14">
            <div className="flex flex-col min-h-screen justify-between">
                <div>
                    <img src={logo} className="w-36 mx-auto" />

                    <h1 className='text-primary text-3xl mb-2 font-bold'>Alcohol Consumption Tracker</h1>
                    <p className="font-bold text-primary">¿Sabes cómo es tu relación con el alcohol?</p>
                    <p className="my-6 font-semibold text-primary">Este test es anónimo. Solo deberás indicar sexo y edad.</p>
                    <div>

                        <button className="border border-sky-900 px-4 py-2 rounded-xl mb-2 text-sky-900 text-lg" onClick={handleOpenModal}>Saber más</button>
                    </div>
                    {showModal && (
                        <Modal onClose={handleCloseModal}>
                            <p>AUDIT significa "Alcohol Use Disorders Identification Test" (Prueba de Identificación de Trastornos Relacionados con el Consumo de Alcohol). Es un cuestionario de 10 preguntas de autoevaluación desarrollado por la Organización Mundial de la Salud (OMS). </p>
                            <p>Puede ayudar a identificar si el consumo de alcohol de una persona es de riesgo, problemático o potencialmente dañino.</p>
                        </Modal>
                    )}

                    <div className="bg-white rounded-t-xl mt-8 p-4">
                    <Link to="/test">
                        <ButtonPrimary title="Hacer Test"/>                        
                    </Link>
                        
                        <div className="flex justify-center mt-8 gap-4 text-sky-900">
                            <div className="w-50 bg-slate-200 p-2 rounded-xl">
                                <div className="min-h-24">
                                    <p>¿Quieres registrar tu consumo </p>
                                    <p>o contar tus días de abstinencia?</p>
                                </div>
                                <ButtonPrimary title="Crear cuenta" />
                            </div>
                            <div className="w-50 bg-slate-200 p-2 rounded-xl shadow-lg">
                            <div className="min-h-24">
                              <p>¿Ya tienes una cuenta?</p>
                              <p className="mt-4">Actualiza tu estado</p>
                            </div>
                               
                                

                                <ButtonPrimary title="Inicia sesión" />
                            </div>

                        </div>
                    </div>
                </div>

                <div>
                    <Thefooter />
                </div>
            </div>
        </div>
        </>

    )
}