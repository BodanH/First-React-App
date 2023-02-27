import "./Contacts.css"

const ContactsPage = () => {
    return ( 
        <main className="main">
            <section id="main__section" className="main__section section-main">
                <div className="section-main__container section-main-container">
                    <div className="section-main-container__content section-main-content">
                        <h2 className="section-main-content__title">Contacts</h2>
                        <div className="section-main-content__contacts">
                            <div className="section-main-content__location">
                                <h3 className="location__title">Location</h3>
                                <p className="location__description">
                                    Rivne, Ukraine
                                </p>
                            </div>
                            <div className="section-main-content__telegram">
                                <h3 className="telegram__title">Telegram</h3>
                                <p className="telegram__description">
                                    +380636099825
                                </p>
                            </div>
                            <div className="section-main-content__mail">
                                <h3 className="mail__title">Email</h3>
                                <p className="mail__description">
                                    bohdan.h.official@gmail.com
                                </p>
                            </div>                                                        
                        </div>
                    </div>
                </div>
            </section>
        </main>
     );
}
 
export default ContactsPage;