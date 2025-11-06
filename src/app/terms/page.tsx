import Breadcrumb from "@/components/DesignAgency/common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termeni și Condiții || Language Center Cluj & Mureș",
  description:
    "Termeni și condiții de utilizare a serviciilor Language Center Cluj & Mureș. Informații despre cursuri și drepturi.",
  robots: "index, follow",
};

const TermeniPage = () => {
  return (
    <>
      <Breadcrumb
        title="Termeni și Condiții"
        subTitle="Informații Legale"
        pageName="TERMENI ȘI CONDIȚII"
      />

      <section className="terms-section">
        <div className="container">
          <div className="terms-wrapper">
            
            <p className="terms-date">Ultima actualizare: 07 Noiembrie 2025</p>
            
            <p className="terms-intro">
              Prin utilizarea serviciilor Language Center Cluj & Mureș și completarea formularului de contact, confirmați că ați citit și acceptat termenii și condițiile de mai jos.
            </p>

            <h2>1. Servicii Oferite</h2>
            <p>
              Language Center Cluj & Mureș oferă cursuri de limbi străine (Engleză, Germană, Spaniolă, Italiană, Franceză, Japoneză, Română pentru străini, Maghiară) atât online cât și prezențial, individual sau în grup.
            </p>

            <h2>2. Solicitare de Informații</h2>
            <p>
              Prin completarea formularului de contact, solicitați informații despre cursurile disponibile. Echipa noastră va lua legătura cu dumneavoastră pentru a discuta detaliile cursului, program, disponibilitate și alte informații relevante.
            </p>

            <h2>3. Înscrierea la Cursuri</h2>
            <p>
              Înscrierea la cursuri se face după consultarea cu echipa noastră. Vă vom informa telefonic sau prin email despre:
            </p>
            <ul>
              <li>Programul cursurilor</li>
              <li>Disponibilitatea locurilor</li>
              <li>Costurile și modalitățile de plată</li>
              <li>Datele de începere a cursurilor</li>
              <li>Materialele necesare</li>
            </ul>

            <h2>4. Obligațiile Cursantului</h2>
            <ul>
              <li>Să furnizeze informații corecte în formularul de contact</li>
              <li>Să participe activ la cursuri după confirmare</li>
              <li>Să respecte profesorii și ceilalți cursanți</li>
              <li>Să anunțe din timp în cazul absențelor</li>
              <li>Să nu distribuie materialele cursului fără acordul scris</li>
            </ul>

            <h2>5. Obligațiile Language Center</h2>
            <ul>
              <li>Să răspundă solicitărilor în maximum 48 de ore</li>
              <li>Să ofere informații clare despre cursuri</li>
              <li>Să furnizeze cursuri de calitate cu profesori calificați</li>
              <li>Să informeze cursanții despre modificările de program</li>
              <li>Să mențină un mediu de învățare profesional</li>
            </ul>

            <h2>6. Cursuri Online</h2>
            <p>
              Pentru cursurile online, cursantul este responsabil pentru:
            </p>
            <ul>
              <li>Conexiunea stabilă la internet</li>
              <li>Echipamentul tehnic necesar (calculator, tabletă, smartphone)</li>
              <li>Instalarea aplicațiilor necesare (Zoom, Google Meet, etc.)</li>
            </ul>

            <h2>7. Protecția Datelor Personale</h2>
            <p>
              Datele personale furnizate prin formularul de contact sunt prelucrate conform GDPR și legislației române în vigoare. Pentru mai multe detalii, consultați <a href="/politica-de-confidentialitate">Politica de Confidențialitate</a>.
            </p>
            <p>
              Aveți dreptul de a solicita:
            </p>
            <ul>
              <li>Accesul la datele dumneavoastră personale</li>
              <li>Rectificarea datelor inexacte</li>
              <li>Ștergerea datelor personale</li>
              <li>Retragerea consimțământului în orice moment</li>
            </ul>

            <h2>8. Proprietate Intelectuală</h2>
            <p>
              Toate materialele didactice și conținutul cursurilor sunt proprietatea Language Center Cluj & Mureș. Utilizarea lor este permisă doar în scop personal și educațional.
            </p>

            <h2>9. Modificări</h2>
            <p>
              Language Center Cluj & Mureș își rezervă dreptul de a modifica acești termeni și condiții. Modificările vor fi comunicate prin email sau pe site.
            </p>

            <h2>10. Legislație</h2>
            <p>
              Acești termeni sunt guvernați de legile din România. Orice litigiu va fi soluționat de instanțele competente din Cluj-Napoca sau Târgu Mureș.
            </p>

            <h2>11. Contact</h2>
            <p>
              Pentru întrebări despre acești termeni:
            </p>
            <ul>
              <li><strong>Email:</strong> office@languagecenter.ro</li>
              <li><strong>Telefon:</strong> +40 769 049 473</li>
              <li><strong>Adresă:</strong> Cluj-Napoca / Târgu Mureș</li>
            </ul>

          </div>
        </div>
      </section>

     
    </>
  );
};

export default TermeniPage;