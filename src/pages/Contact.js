import ContactCard from "../components/ContactCard";

const Contact = () => {
    return(
        
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div>
    <div className="flex justify-content-center">
       <ContactCard/>
    </div>
    </div>
  </div>
</div>

    );
};

export default Contact;