import { Fragment } from "react";
import Monstro from "./Monstro.jsx"

const ListaMonstros = (props) => {

    const dados = props.dados

    return (
        <Fragment>
          {dados.map((objeto) => {
            return <Monstro key={objeto.id} monstroUnico={objeto}/>
          })}
        </Fragment>
      );
    };

export default ListaMonstros;