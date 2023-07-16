

function Card(props){
    return(
        <ul id="concepts">
        <li className="concept">
          <img src={props.fact.image} alt="TODO: TITLE" />
          <h2>{props.fact.title}</h2>
          <p>{props.fact.description}</p>
        </li>
      </ul>
    );
}

export default Card;

