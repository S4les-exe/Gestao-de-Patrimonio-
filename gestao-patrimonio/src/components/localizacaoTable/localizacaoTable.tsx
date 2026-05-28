import styles from "@/components/localizacaoTable/localizacaoTable.module.css"
import LocalizacaoRow from "../localizacaoRow/localizacaoRow"
import { useState } from "react";

type ListaLocalizacao = {
    localizacaoID: string;
    nomeLocal: string;
    nomeArea: string;
    responsavel: string;
}

const LocalizacaoTable = () => {

    const [localizacao, setLocalizacao] = useState<ListaLocalizacao[] | null>(null);

    return(
        <section
          className={`${styles.table_section} ${styles.layout_guide}`}
          aria-label="Lista de ambientes"
        >
        {localizacao === null ? (
            <p>Carregando Locais...</p>
        ) : localizacao.length === 0 ? (
            <p>O produto não contem historico de alteração.</p>
        ): (
          <table className={styles.environment_table}>
            <thead>
              <tr>
                <th>Local</th>
                <th>Responsável</th>
                <th>Detalhes</th>
              </tr>
            </thead>

            <tbody>
                {localizacao.map((item) => (
                    <LocalizacaoRow 
                        key={item.localizacaoID}
                        nomeLocal={item.nomeLocal}
                        nomeArea={item.nomeArea}
                        responsavel={item.responsavel}
                    />
                ))}
            </tbody>
          </table>
        )}
        </section>
    )
}
export default LocalizacaoTable