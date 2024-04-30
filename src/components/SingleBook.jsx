// Importa i moduli necessari da React e React-Bootstrap
import React, { useState } from "react"; // React è la libreria principale, e useState è un hook che permette di gestire lo stato interno del componente.
import { Card } from "react-bootstrap"; // Importa il componente Card da react-bootstrap, una libreria per l'interfaccia utente che implementa Bootstrap in React.
import CommentArea from "./CommentArea"; // Importa il componente CommentArea, definito da te, presumibilmente per gestire i commenti.

// Definizione del componente funzionale SingleBook
function SingleBook({ book }) {
  // Utilizzo del hook useState per creare e gestire lo stato 'selected'.
  // Inizialmente, 'selected' è impostato su false.
  const [selected, setSelected] = useState(false);

  // Definizione di toggleCommentArea, una funzione che cambia lo stato di 'selected'
  // da false a true e viceversa ogni volta che viene invocata.
  const toggleCommentArea = () => {
    setSelected(!selected); // Aggiorna lo stato 'selected' al valore opposto di quello attuale.
  };

  // Rendering del componente. La funzione ritorna JSX, un'estensione sintattica di JavaScript usata da React
  // per descrivere l'interfaccia utente.
  return (
    // Componente Card di React-Bootstrap, usato qui per visualizzare le informazioni del libro.
    // onClick aggiunge un gestore di eventi che chiama toggleCommentArea quando la Card viene cliccata.
    <Card className="cardbody" onClick={toggleCommentArea}>
      <Card.Img
        className="cardImg" // Classe CSS personalizzata per l'immagine.
        variant="top" // Posiziona l'immagine nella parte superiore della Card.
        src={book.img} // Percorso dell'immagine del libro, preso dall'oggetto 'book'.
        alt={book.title} // Testo alternativo dell'immagine, utile per l'accessibilità.
      />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        {/* // Titolo del libro. */}
        <Card.Text>Prezzo: {book.price} $</Card.Text>
        {/* // Prezzo del libro. */}
        <Card.Text>Genere: {book.category}</Card.Text>
        {/* // Genere del libro. */}
        <Card.Text>ID: {book.asin}</Card.Text>
        {/* // ID univoco del libro (Amazon Standard Identification Number). */}
      </Card.Body>
      {selected && <CommentArea id={book.asin} />}
      {/* // Condizionale: se'selected' è true, renderizza CommentArea. */}
    </Card>
  );
}

export default SingleBook; // Esporta il componente per poterlo utilizzare altrove nell'app.
// // useState: Questo hook è uno dei più importanti in React per la gestione dello stato. In questo caso,
//  useState è usato per controllare se mostrare o nascondere il componente CommentArea.
// // JSX: La sintassi che sembra HTML è in realtà JSX, che permette di scrivere elementi UI in modo dichiarativo.
//  React poi trasforma questo JSX in funzioni JavaScript che creano elementi del DOM.
// // Props: Le props ({ book }) sono le proprietà passate al componente. In questo caso,
// book contiene dati di un libro specifico, come titolo, prezzo, ecc.
// // Event Handling: onClick è un ascoltatore di eventi che chiama la funzione toggleCommentArea quando l'utente clicca sulla Card.
// Questo mostra o nasconde il componente CommentArea basandosi sullo stato selected.
