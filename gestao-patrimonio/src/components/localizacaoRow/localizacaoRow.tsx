import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Dados = {
    nomeLocal: string; 
    responsavel:  string;
    nomeArea: string; 
}

const LocalizacaoRow = ({nomeLocal, responsavel, nomeArea}: Dados) => {
    return( 
        <tr>
            <td>{nomeLocal}</td>
            <td>{nomeArea}</td>
            <td>{responsavel}</td>
            <td><a href="#" aria-label="Ver detalhes da Sala 30/31">
                    <FontAwesomeIcon icon={faCircleInfo} />
                </a>
            </td>
        </tr>
    )
}

export default LocalizacaoRow;