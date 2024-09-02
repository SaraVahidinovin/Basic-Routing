function Contact() {

    return (
<main className="contact-us-page">
      <section className="application">
        <h2>Contact us</h2>
        <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laborum beatae neque voluptates cupiditate pariatur veniam repudiandae. Numquam minus quia quo labore rerum quaerat minima, adipisci voluptas veniam. Quisquam, sit!
        </p>
        <form className="form" >
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <div className="actions">
            <button type="submit">Apply</button>
          </div>
        </form>
      </section>
    </main>
    )
  }
  
  export default Contact