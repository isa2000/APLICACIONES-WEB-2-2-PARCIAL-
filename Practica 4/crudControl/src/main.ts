import './style.css'
import axios from 'axios'
import { IResControl, Control } from './interfaces/IControl';
const httpAxios =  axios.create({
  baseURL:'http://localhost:4000/api/v2',
})



const app = document.querySelector<HTMLDivElement>('#app')!
//#region mapa de elementos
const etiqueta = document.createElement("label")
etiqueta.textContent="ID"
const input = document.createElement("input");
input.id="id"
etiqueta.htmlFor="id"
app.appendChild(etiqueta);
app.appendChild(input);
app.innerHTML += `

<br><label for ="fecha">fecha</label> <br> <input id="fecha"/>  <br>
<label for ="hora">hora</label> <br> <input id="hora"/> <br>
<label for ="rating">rating</label> <br><input id="rating"/> <br>

<br>
<br>
<button style="background: pink;" id="new" >New</button>
<button style="background: gray;"  id="save" >Save</button>
<button style="background: yellow;" id="query" >Query</button>
<div id="body"/>
`
const newb = document.querySelector<HTMLButtonElement>('#new')!
const save = document.querySelector<HTMLButtonElement>('#save')!
const query = document.querySelector<HTMLButtonElement>('#query')!

const id = document.querySelector<HTMLInputElement>('#id')!


const fecha = document.querySelector<HTMLInputElement>('#fecha')!
const status = document.querySelector<HTMLInputElement>('#status')!
const hora = document.querySelector<HTMLInputElement>('#hora')!
const rating = document.querySelector<HTMLInputElement>('#rating')!
const stock = document.querySelector<HTMLInputElement>('#stock')!
const body = document.querySelector<HTMLDivElement>('#body')!
//#endregion


newb.addEventListener('click',()=>{
  fecha.value=""
  hora.value=""
  rating.value=""
  id.value=""
})
query.addEventListener('click', async ()=>{
  const respControls:IResControl 
  =  await (await httpAxios.get<IResControl>('control')).data;

    const tabla   = document.createElement("table")
    tabla.id="tabla"
    tabla.border="1"


    const { controls } = respControls;
    console.log(respControls)

    for (const control of controls)
    {
      const row = tabla.insertRow()
      const celda =  row.insertCell()
      celda.innerHTML=` <button class="boton" value="${control._id}" >${control.porcentajelectura}</button>`
      const celda2= row.insertCell()
      celda2.innerHTML=`${control.porcentajeescritura}`
    }
    body.innerHTML=``
    body.appendChild(tabla)
    document.querySelectorAll('.boton').forEach((ele:Element)=>{
      ele.addEventListener('click', async ()=>{
          const idx= (ele as HTMLButtonElement).value;
          const Control:Control 
          =  await (await httpAxios.get<Control>(`control/${idx}`)).data;
          fecha.value= Control.fecha;          
          hora.value= Control.hora;  
          rating.value= Control.rating;  
            
          id.value= Control._id!;  
           
      })
    })

  

    

  

})
save.addEventListener('click',async ()=>{
  const data:Control = {
    fecha:fecha.value,
    hora:hora.value,
    rating:rating.value,
    
  }
  // console.log(data);

  if (id.value.trim().length>0 )
  {
    //        
    const resp: Control = await (await httpAxios.put<Control>(`control/${id.value}`, data)).data
    console.log(resp)
    console.log(`El control ${resp.fecha} fue modificado con éxito`);
    
    return;
  }
  try {
    const resp: Control =  await (await httpAxios.post<Control>(`control`, data)).data
    console.log(`El control ${resp.hora} fue grabado con éxito`);
  } catch (error) {
    if ( axios.isAxiosError(error)  )
    {
      console.log(error );
      
    }
    
  }
  
  
})