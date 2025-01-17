import React , {useState} from 'react'
import { Button , ContactForm, Input } from '../components/index'


export const BeeComponents = ()=>{
    const [formData,setFormData] = useState()

  return (
    <div>
        <h1 className="p-4">
            Najot ta'lim web developer
        </h1>
        
        Buttons:
        <div className="default-button p-10">
            Default : <Button/>
        </div>
        <div className="success-button p-10">
            success : <Button
                variant="success"
            />
        </div>
        <div className="danger-button p-10">
            danger : <Button
                variant="danger"
            />
        </div>
        <div className="primary-button p-10">
            primary : <Button
                variant="primary"
            />
        </div>
        Forms:
        <div className="form p-10 text-white">
            <ContactForm
                FormData={setFormData}
                theme="light"
                className="text-white"
            />
        </div>

        Inputs:
        <div className="input p-10">
            <Input
            type="text"
            name="example"
            onChange={()=>{}}
            label="Fancy Input Component"
            variant="fancy"
            />
        </div>
        <div className="input p-10 text-white">
            <Input
            type="text"
            name="example-1"
            onChange={()=>{}}
            label="Default Input Component"
            />
        </div>

    </div>
  )
}
