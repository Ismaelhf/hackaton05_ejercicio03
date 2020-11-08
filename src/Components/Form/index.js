import React,{useState} from 'react'
import './index.css'

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');


const sendForm = (e) =>{
    e.preventDefault();
    document.querySelector('#nameForm').value = name;
    console.log({phone});
    document.querySelector('#emailForm').value = email;
    document.querySelector('#phoneForm').value = phone;
    document.querySelector('#commentForm').value = comment;
}

    return (
        <section className="login">
            <div className="loginContainer">
               
                <form onSubmit={sendForm} className="form form-registro">
                    {/* <div className="contact">                                             */}
                        <div className="container">                                            
   
                                <label>Name</label>
                            <div className="item">
                                <input type="text" required value={name} onChange={({target: {value}})=> setName(value)} autoComplete="off"/>
                                {/* <p className="errorMsg">{emailError}</p> */}
                            </div>
                                <label>Mail</label>
                            <div className="item">
                                <input type="email" required value={email} onChange={({target: {value}})=> setEmail(value)} autoComplete="off"/>
                            </div>
                                <label>Phone</label>
                            <div className="item">
                                <input type="number"  required value={phone} onChange={({target: {value}})=> setPhone(value)} autoComplete="off"/>
                            </div>
                                <label>Text</label>
                            <div className="item">
                                <input type="text" required value={comment} onChange={({target: {value}})=> setComment(value)} autoComplete="off"/>
                                </div>
                        </div>
                        <div className="btnContainer">
                            {/* <img src="" alt="Girl in a jacket" width="50" height="60"> */}
                            <input type="submit" id="btnSubmit" value="SEND"/>
                        </div>
                    {/* </div> */}
                </form>

            </div>
                {/* <div>form data:{JSON.stringify({name,email,phone,comment})}</div> */}
            <br></br>
             <div className="loginContainer">
               <div className="form form-registro">
                    <div className="container contactResp">
  
                            <label>Name</label>
                        <div className="item">
                            <input type="text" required  id="nameForm"/>
                        </div>
                            <label>Mail</label>
                        <div className="item" >
                            <input type="email" required id="emailForm"/>
                        </div>
                            <label>Phone</label>
                        <div className="item" >
                            <input type="number" required id="phoneForm"/>
                        </div>

                            <label>Text</label>
                        <div className="item">
                            <input type="text" required id="commentForm"/>
                        </div>
                                                
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Form;
