import React from 'react';
import Swal from 'sweetalert2';
import win from '../../../img/win.png';

function Winner({guess}){
    return(
        <div>
            { setTimeout(() => { 
                Swal.fire({
                    // title: 'Sweet!',
                    text: `🏆 You won in ${guess} moves! 🏆`,
                    imageUrl: win,
                    imageWidth: 200,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                })        
              }, 1100)
            }
        </div>

    )
}

export default Winner;