import "./Filter.css";

function Filter({ handler, genere }) {
    return (
        <select
            id="film-genres"
            name="film-genres"
            className="filter"
            onChange={handler}
            defaultValue=""  // Imposta il valore predefinito sul <select>
        >
            <option value="">All Movies</option>
            <option value="Azione">Azione</option>
            <option value="Avventura">Avventura</option>
            <option value="Animazione">Animazione</option>
            <option value="Biografico">Biografico</option>
            <option value="Commedia">Commedia</option>
            <option value="Documentario">Documentario</option>
            <option value="Drammatico">Drammatico</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Giallo">Giallo</option>
            <option value="Horror">Horror</option>
            <option value="Musicale">Musicale</option>
            <option value="Noir">Noir</option>
            <option value="Romantico">Romantico</option>
            <option value="Storico">Storico</option>
            <option value="Thriller">Thriller</option>
            <option value="Western">Western</option>
        </select>
    );
}

export default Filter;
