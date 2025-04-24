import { useState } from "react";
import ButtonPrimary from "../components/ButtonPrimary";

export default function AuditTest({onClose}) {
  const questions = [/* mismo array que tenés, no lo repito para ahorrar espacio */];

  const [step, setStep] = useState(0);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [result, setResult] = useState(null);

  const handleSelect = (questionIndex, valueIndex) => {
    const updated = [...answers];
    updated[questionIndex] = valueIndex;
    setAnswers(updated);
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const calculateScore = (answers, gender) => {
    const total = answers.reduce((sum, val) => sum + (val ?? 0), 0);

    let evaluation = "No definido";
    if (gender === "hombre") {
      if (total <= 8) evaluation = "Dentro de lo normal";
      else if (total <= 13) evaluation = "Riesgo moderado";
      else evaluation = "Problema grave";
    } else {
      if (total <= 6) evaluation = "Dentro de lo normal";
      else if (total <= 13) evaluation = "Riesgo moderado";
      else evaluation = "Problema grave";
    }

    return { total, evaluation };
  };

  const handleSubmit = () => {
    const res = calculateScore(answers, gender);
    setResult(res);
  };

  // ✅ Mostrar resultado
  if (result) {
    return (
      <div className="p-8">
      {onClose && (
  <button
    onClick={onClose}
    className="mb-6 text-blue-500 underline text-sm"
  >
    Cerrar test
  </button>
)}

        <h2 className="text-2xl font-bold mb-4">Resultados</h2>
        <h3 className="text-xl mb-2">Total puntuación: {result.total}</h3>
        <h3 className="text-xl">Evaluación: {result.evaluation}</h3>
      </div>
    );
  }

  // ✅ Paso inicial: edad y género
  if (step === 0) {
    return (
      <div className="p-8">
      {onClose && (
  <button
    onClick={onClose}
    className="mb-6 text-blue-500 underline text-sm"
  >
    Cerrar test
  </button>
)}
        <h2 className="text-2xl font-bold mb-4">Antes de comenzar</h2>
        <label>Sexo:</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="border p-2 mb-4 block"
        >
          <option value="">Selecciona</option>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <label>Edad:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border p-2 block mb-4"
        />
        <ButtonPrimary
          title="Comenzar"
          onClick={() => {
            if (gender && age) setStep(1);
            else alert("Por favor completa sexo y edad");
          }}
          
        />
      </div>
    );
  }

  // ✅ Mostrar pregunta actual
  const question = questions[step - 1];

  return (
    <div className="p-8">
      <div key={question.id} className="mb-6">
        <p className="font-semibold mb-2">{question.text}</p>
        {question.options.map((opt, i) => (
          <label key={i} className="block">
            <input
              type="radio"
              name={`q${question.id}`}
              value={i}
              checked={answers[question.id - 1] === i}
              onChange={() => handleSelect(question.id - 1, i)}
            />
            {" "}{opt}
          </label>
        ))}
      </div>

      {step < 10 ? (
        <ButtonPrimary title="Siguiente" onClick={handleNext} />
      ) : (
        <ButtonPrimary title="Ver resultados" onClick={handleSubmit} />
      )}
    </div>
  );
}
