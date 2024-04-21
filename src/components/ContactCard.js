const ContactCard = () => {
  return(
      <div className="card lg:card-side bg-black text-white shadow-xl w-full">
          <div className="card-body w-full">
              <div>
                  <div>
                      <h1 className="text-4xl font-bold mb-16">Contact me</h1>
                      <div>
                          <h1 className="text-2xl"><b>Introduction</b></h1>
                          <p className="mt-5">Get in contact.</p>
                      </div>
                      <div className="mt-12">
                          <h1 className="text-2xl"><b>Email</b></h1>
                          <p className="mt-5">N00211885@iadt.ie</p>
                          <p className="mt-5">benhd@gmail.com</p>
                      </div>
                      <div className="mt-12">
                          <h1 className="text-2xl"><b>Social media links</b></h1>
                          <p className="mt-5">Whatsapp: don't have one</p>
                          <p className="mt-5">Cmail: don't have one</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default ContactCard;
