import styles from "@/components/localizacao/localizacao-content/localizacao-content.module.css"
import LocalizacaoRow from "../localizacaoRow/localizacaoRow"
import { listarLocalizacao } from "@/pages/api/localizacaoService";
import { useEffect, useState } from "react";
import { erro } from "@/utils/toast";
import { useRouter } from "next/navigation";
import { verificarAutenticacao } from "@/utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

type Localizacao = {
    areaID: string
    localizacaoID: string;
    nomeLocal: string;
    nomeArea: string;
    responsavel: string;
}

const LocalizacaoContent = () => {
    const [localizacao, setLocalizacao] = useState<Localizacao[]>([]);
    const [pesquisa, setPesquisa] = useState("");

    async function listarLocalizacoes(){
      try{
          const lista = await listarLocalizacao();
          setLocalizacao(lista);
          console.log(lista)
          return lista.data;
      }catch(error: any){
          erro(error.message)
      }
    }

    useEffect(() => {
        console.log("use effect rodou")

        listarLocalizacoes();
    }, []);

    const localizacoesFiltradas = localizacao.filter((localizacao) => localizacao.nomeLocal.toLowerCase().includes(pesquisa.toLowerCase()))

    return(
        <main className={styles.page_content}>
        <section
          className={`${styles.page_header} ${styles.layout_guide}`}
          aria-labelledby="titulo-ambientes"
        >
          <h1 id="titulo-ambientes">Locais</h1>

          <form className={styles.search_area} role="search">
            <label
              htmlFor="pesquisa-ambiente"
              className={styles.sr_only}
            >
              Pesquisar ambiente
            </label>

            <input
              type="search"
              id="pesquisa-ambiente"
              name="pesquisaAmbiente"
              placeholder="Pesquise o Local"
              value={pesquisa}
              onChange={(e) => setPesquisa(e.target.value)}
            />

            <button
              type="button"
              className={styles.filter_button}
              aria-label="Filtrar ambientes"
            >
              <FontAwesomeIcon icon={faSliders} />
            </button>
          </form>
        </section>


        <section
          className={`${styles.table_section} ${styles.layout_guide}`}
          aria-label="Lista de ambientes"
        >
        {localizacao.length === 0 ? (
            <p>Carregando Locais...</p>
        ): (
          <table className={styles.environment_table}>
            <thead>
              <tr>
                <th>Local</th>
                <th>Area</th>
                <th>Responsavel</th>
              </tr>
            </thead>

            <tbody>
                {localizacoesFiltradas.map((item) => (
                    <LocalizacaoRow 
                        key={item.localizacaoID}
                        nomeLocal={item.nomeLocal}
                        nomeArea={item.nomeArea}
                        responsavel={item.responsavel}

                        onClick={() => {
                          
                        }}
                    />
                ))}
            </tbody>
          </table>
        )}
        </section>

        <nav
          className={styles.pagination}
          aria-label="Paginação"
        >
          <button
            type="button"
            className={styles.pagination_button}
            aria-label="Página anterior"
          >
            ‹
          </button>

          <a
            href="#"
            className={`${styles.pagination_link} ${styles.current}`}
            aria-current="page"
          >
            1
          </a>

          <a
            href="#"
            className={styles.pagination_link}
          >
            2
          </a>

          <a
            href="#"
            className={styles.pagination_link}
          >
            3
          </a>

          <button
            type="button"
            className={styles.pagination_button}
            aria-label="Próxima página"
          >
            ›
          </button>
        </nav>
        </main>
    )
}
export default LocalizacaoContent;