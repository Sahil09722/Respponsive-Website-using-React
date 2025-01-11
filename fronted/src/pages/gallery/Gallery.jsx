import Secondheader from "../../component/Secondheader";
import headerImage from "../../images/header_bg_3.jpg";
import "./gallery.css";

const gallery = () => {
  const GallaryLenght=15;
    const images=[]
    for (let i=1;i<=GallaryLenght;i++){
      images.push(require(`../../images/gallery${i}.jpg`))
    }
  return (
    <div>
      <Secondheader title="Gallary" image={headerImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
        officia reprehenderit? Blanditiis perferendis voluptates maxime?
        Perferendis impedit quaerat non ab illo facilis veniam. Hic, omnis earum
        dolore quidem saepe dolorem.
      </Secondheader>
      <div className="gallary">
        <div className="container gallary-container">
          {
            images.map((image,index)=>{
              return <article key={index} alt={`Gallery image ${index+1}`}>
                <img src={image} />
              </article>
            })
          }
        </div>
      </div>

    </div>
  );
};

export default gallery;
