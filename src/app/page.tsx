import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="homeContainer>">
        <div className="childContainer">
          Hey,
          <img  id="profilePic" src="/profilePic.jpg"></img>

          <br />
          
          My Name is <span className="pinkColor">Ayesha</span>
          <br />I am Enhancing my skills by learning Next.js
          
        </div>
        <div className="childContainer"></div>
        
      </div>

      
    </>
  );
}
