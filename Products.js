import React from 'react'
import Productspart from'./Productspart'
import Navbar from './Navbar'

export default function Products({ pd_id_formain,setpd_id_formain}) {
    return (
        <div>
            <Navbar />
            <div>
                <Productspart  pd_id_formain={pd_id_formain} setpd_id_formain={setpd_id_formain}/>
            </div>
        </div>
    )
}
