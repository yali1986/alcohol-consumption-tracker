
import questions from '../data/questions';
import logo from '../../public/logo.webp'
import { Link } from 'react-router-dom';
import ButtonPrimary from '../components/ButtonPrimary';


export default function Test() {
  return (
    <div className="p-6">
    <div className='flex items-center mb-6'>
    <Link to="/">
      <img src={logo} width={"80px"}/>  
    </Link>
    
      <h2 className="text-2xl font-bold ms-10 text-primary">Cuestionario AUDIT</h2>
      </div>
     <div className='flex gap-8 mb-6 bg-white py-2 px-6 rounded-lg text-primary'>
     <div className="flex space-x-4 ">
    <span className="font-semibold">Sexo:</span>
    <label htmlFor="sexo-m" className="flex items-center space-x-1">
      <input
        type="radio"
        id="sexo-m"
        name="sexo"
        value="M"
        className="form-radio"
      />
      <span>Masculino</span>
    </label>
    <label htmlFor="sexo-f" className="flex items-center space-x-1">
      <input
        type="radio"
        id="sexo-f"
        name="sexo"
        value="F"
        className="form-radio"
      />
      <span>Femenino</span>
    </label>
    <div></div>
  </div>
      <label htmlFor="age" className="font-semibold">Edad</label>
      <input type='number' id='age' className='border border-slate-400 max-w-10 -ms-6 rounded'/>
    </div>

    
      {questions.map((q) => (
        <fieldset key={q.id} className="mb-6 border p-4 rounded">
          <legend className="font-semibold mb-2">{q.text}</legend>
          <div className="space-y-2">
            {q.options.map((opt, idx) => (
              <label
                key={idx}
                htmlFor={`q${q.id}-opt${idx}`}
                className="flex items-center space-x-2"
              >
                <input
                  type="radio"
                  id={`q${q.id}-opt${idx}`}
                  name={`question-${q.id}`}
                  value={opt}
                  className="form-radio"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ))}

      <ButtonPrimary title="Evaluar">        
      </ButtonPrimary>
    </div>
  );
}
