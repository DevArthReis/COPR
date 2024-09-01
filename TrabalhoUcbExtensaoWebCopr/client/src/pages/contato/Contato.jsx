import React from 'react';
import style from "./Contato.css"
function Contato() {
    return (
        <section>
        <div className={style} >
            <div className='contato'>
                <div className="cardo">
                    <div className='img'>


                    </div>
                    <div className='vasco'>
                        <h1>Contato</h1>

                        <form >
                            
                            <div className='form-group'>
                                <label>Nome</label>
                                <input type="text" placeholder="Nome" />
                            </div>
                            <div className='form-group'>
                                <label>Telefone</label>
                                <input type="text" placeholder="Telefone" />

                            </div>
                            <div className='form-group'>
                                <label>Email*</label>
                                <input type="text" placeholder="Email" />

                            </div>
                            <div className='form-group'>
                                <label>Mensagem</label>
                                <textarea className='caixa' placeholder="Mensagem"></textarea>

                            </div>
                            <button onClick=''>Enviar</button>

                        </form>
                    </div>
        



                </div>
                
                
            </div>
            
            <div className='help'>
                <h1>Estamos Aqui para Ajudar!</h1>
                <div id="linha-vertical">
                <p>Na COPR, estamos comprometidos em oferecer o melhor atendimento <br /> possível. Não hesite em nos contatar, estamos à disposição para <br /> ajudar você!</p>
                </div>
            </div>
            <div className='imagenzinha'>
            

            </div>
            

        </div>
        </section>

    )
}

export default Contato;