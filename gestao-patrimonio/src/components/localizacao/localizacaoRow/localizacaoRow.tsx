type Dados = {
    nomeLocal: string; 
    responsavel:  string;
    nomeArea: string; 
}

type RowProps = {
    localizacaoRow: Dados;
    onclick: () => void;
}

const LocalizacaoRow = ({nomeLocal, responsavel, nomeArea}: Dados) => {
    return( 
        <tr onClick={event => onclick()}>
            <td>{nomeLocal}</td>
            <td>{nomeArea}</td>
            <td>{responsavel}</td>
        </tr>
    )
}

export default LocalizacaoRow;