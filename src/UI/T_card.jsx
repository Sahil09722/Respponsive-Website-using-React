import Card from "./Card"


const T_card = ({image,name,job,socials}) => {
  return (

       <Card className="trainer">
       <div className="trainer_img">
        <img src={image} alt={name} />
       </div>
       <h3>{name}</h3>
       <p>{job}</p>
       <div className="trainer_social">
        {
            socials.map(({icon,link},index)=>{
                return <a key={index} href={link} target="_blank" rel="noreffer noopener">{icon}</a>
            })
        }
       </div>
 
    </Card>
    
  )
}

export default T_card
