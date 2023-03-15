import React from 'react';
import './styled.css';

export const Botao = ({children, onClick, isInput}) => {

   const ehNum = (valor) => {
        if (!isNaN(valor) || valor === 'C' || valor === '.') {
            return true;
        }
        return false;
   };
   
   const ehIgual = (valor) => {
        if (valor === '=') {
            return true;
        }
        return false;
   }


  return (
    <>
        {
            isInput ? (<div className="input">{children}</div>) :
            (
                <div 
                    className={`botao-wrapper botao ${ehIgual(children) ? "btn-gual" : null} 
                               ${ehNum(children) ? null : "operacao"}`
                              }
                    onClick={() => onClick(children)}         
                >
                    {children}
                </div>
            )
        }
    </>
  )
}
