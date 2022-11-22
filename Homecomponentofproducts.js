import React, { useEffect, useState } from 'react'

import Axios from 'axios'
import Homeproductline1 from './Homeproduct_line_1'
import Homeproductline2 from './Homeproduct_line_2'
import Homeproductline3 from './Homeproduct_line_3'
import Homeproductline4 from './Homeproduct_line_4'

export default function Homecomponentofproducts({ pd_id_formain,setpd_id_formain}) {
    const [productarr, setproductarr] = useState([])
    async function datafetch() {
        const res = await Axios.get('http://localhost:5000/products/ecommerce')

        setproductarr(res.data)

    }
    useEffect(() => {

        datafetch()
    }, [])
    return (
        <div className='product_component' style={{ position: "absolute", left: "24px", top: "512px" }}>

            <div className='line_1' style={{ position: "absolute", left: "3.5px", top: "0px" }}>
                {
                    productarr.slice(0, 10).map((el) => (<Homeproductline1  pd_id_formain={pd_id_formain} setpd_id_formain={setpd_id_formain} productdetail={el} key={Math.random() * 1000} />))
                }


            </div>
            <div className='line_2' style={{ position: "absolute", left: "346px", top: "0px" }}>
                {
                    productarr.slice(10, 20).map((el) => (<Homeproductline2  pd_id_formain={pd_id_formain} setpd_id_formain={setpd_id_formain} productdetail={el} key={Math.random() * 1000} />))
                }

            </div>
            <div className='line_3' style={{ position: "absolute", left: "688px", top: "0px" }}>
                {
                    productarr.slice(20, 30).map((el) => (<Homeproductline3  pd_id_formain={pd_id_formain} setpd_id_formain={setpd_id_formain} productdetail={el} key={Math.random() * 1000} />))
                }
            </div>
            <div className='line_4' style={{ position: "absolute", left: "1030px", top: "0px" }}>
                {
                    productarr.slice(30, 40).map((el) => (<Homeproductline4  pd_id_formain={pd_id_formain} setpd_id_formain={setpd_id_formain} productdetail={el} key={Math.random() * 1000} />))
                }
            </div>
        </div>
    )
}
