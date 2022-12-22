import React from 'react'
import data from './data.js';
function Project() {
    return (
       <div className="project"  id="Project" style={{minHeight:"100vh",padding:"70px",opacity:"1.1",filter:"opacity(0.8)",background:"#000"}}>
          <h1 style={{textAlign:"center",color:"white"}}>Projects</h1>
         <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"}}>

{
    data.map((val) => {
        return (
            <div class="card" style={{width:"20rem",margin:"10px",}}>
                <img src={val.image} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title" style={{textAlign:"center"}}>{val.title}</h5>
                        <p class="card-text"></p>
                        <a href={val.link} class="btn btn-primary">Link</a>
                    </div>
            </div>
        )
    })

}

</div>
       </div>
    )
}

export default Project