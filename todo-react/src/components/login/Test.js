import {useState} from 'react'

function Test() {
    let prix = 10400
    let [article, updateArticle] = useState(2)
    let [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div>
            <h3>Prix de l'article: {prix }FCFA </h3>
            <button onClick={() => updateArticle(article + 1)}>Add article</button>

            <h2>Prix total des articles: {prix * article} </h2>
            <button onClick={() => setIsOpen(false)}>Fermer le panier</button>
        </div>
    ): (
        <div>
            <button onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
        </div>
    );
}

export default Test