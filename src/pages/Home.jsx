import { useState } from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import Thefooter from "../components/Thefooter";

export default function Home() {

    const[showModal, setShowModal] = useState(false)

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);


  return (
    <>

    <h1 className='text-primary text-3xl my-8 font-bold'>Alcohol Consumption Tracker</h1> 
    <p className="font-bold text-primary">¿Sabes cómo es tu relación con el alcohol?</p>
    <p className="my-6 font-semibold">Este test es anónimo. Solo deberás indicar sexo y edad.</p>
    <div>
    
   <button className="border border-sky-900 px-4 py-2 rounded-xl mb-8 text-sky-900 text-lg" onClick={handleOpenModal}>Saber más</button>
   </div>
     {showModal && (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
       <div className="border rounded-xl mb-10 mx-auto p-8 w-6/10 bg-white text-sky-900 text-xl leading-10">
       <button
              className="absolute top-2 right-4 text-xl font-bold text-sky-900"
              onClick={handleCloseModal}
            >
              ×
            </button>
    <p>AUDIT significa "Alcohol Use Disorders Identification Test" (Prueba de Identificación de Trastornos Relacionados con el Consumo de Alcohol). Es un cuestionario de 10 preguntas de autoevaluación desarrollado por la Organización Mundial de la Salud (OMS). </p>
    <p>Puede ayudar a identificar si el consumo de alcohol de una persona es de riesgo, problemático o potencialmente dañino.</p>
      </div> 
    </div> 
    )}
    

<div className="bg-white rounded-xl mt-8 p-8">
    <ButtonPrimary title="Hacer Test"/>
    <div className="flex justify-between">
    <div>
    <p>¿Quieres registrar tu consumo o contar tus días de abstinencia?</p>
    <ButtonPrimary title="Crear cuenta"/>
    </div>
    <div>
    <p>¿Ya tienes una cuenta?</p>   
    <ButtonPrimary title="Login"/>
    </div>

    </div>
</div>

<Thefooter />
 </>
    
  )
}