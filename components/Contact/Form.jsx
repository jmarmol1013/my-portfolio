import React,{useState} from 'react'
import emailjs from 'emailjs-com';

export const Form = () => {
    const [firstName,setFirstName] = useState('');
    const [secondName,setSecondName] = useState('');
    const [mail,setMail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message,setMessage] = useState('');
    const [formSubmit,setFormSubmit] = useState('');

    const onSubmit = () => {
        const response = {
            firstName: firstName,
            seondName: secondName,
            mail: mail,
            phoneNumber: phoneNumber,
            message: message
        };

        emailjs.send('service_x7zcccm', 'template_ffzngiv', response,'_HHfBXiFy8zLLHhbS').then((result) => {
            if (result.status == 200 ){
                setFormSubmit('confirm');
            } else {
                setFormSubmit('error');
            }
        });
       
    }
       
    return (
        <div className='w-[80%] lg:w-[60%]'>
                <div className='md:flex'>
                <input 
                        type="text"
                        value={firstName}
                        name='Name'
                        onChange={(e) => setFirstName(e.target.value)} 
                        placeholder='First Name'
                        className='md:flex-1 mt-2 sappearance-none block md:w-full w-[80%] bg-primary text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:text-primary focus:bg-white focus:border-gray-500 md:mr-2 ml-[10%] md:ml-0'/>
                    <input 
                        type="text"
                        value={secondName}
                        name='SecondName'
                        onChange={(e) => setSecondName(e.target.value)} 
                        placeholder='Last Name'
                        className='md:flex-1 mt-2 sappearance-none block md:w-full w-[80%] bg-primary text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:text-primary focus:bg-white focus:border-gray-500 md:ml-2 ml-[10%]'/>
                </div>
                <input 
                        type='text'
                        value={mail}
                        name='Mail'
                        onChange={(e) => setMail(e.target.value)} 
                        placeholder='Email'
                        className='sappearance-none block md:w-full w-[80%] bg-primary text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:text-primary  focus:bg-white focus:border-gray-500 mt-3 ml-[10%] md:ml-0'/>
                <input 
                        type='tel'
                        value={phoneNumber}
                        name='PhoneNumber'
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                        placeholder='Phone'
                        className='sappearance-none block md:w-full w-[80%] bg-primary text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:text-primary  focus:bg-white focus:border-gray-500 mt-3 ml-[10%] md:ml-0'/>
                <textarea 
                        value={message}
                        name='Message'
                        onChange={(e) => setMessage(e.target.value)} 
                        placeholder='Message'
                        className='sappearance-none block md:w-full w-[80%] bg-primary text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:text-primary focus:bg-white focus:border-gray-500 mt-3 ml-[10%] md:ml-0'/>    

                <button type='submit' className='m-auto  rounded-lg py-2 px-4 border-2 border-[#736626] hover:bg-[#736626] hover:text-white  text-[#736626] md:w-full w-[80%] text-center mt-4 ml-0' onClick={onSubmit} title='Button para enviar formulario de contacto'>Sent</button>
                { formSubmit == 'confirm' ?
                    <p className=' text-center text-[#736626] pt-2'>Form sent it succesfully!</p>
                :
                    null
                }
                { formSubmit == 'error' ?
                    <p className='text-center text-red-700 pt-2'>Error sending the form</p>
                :
                    null
                }
        </div> 
    )
}
