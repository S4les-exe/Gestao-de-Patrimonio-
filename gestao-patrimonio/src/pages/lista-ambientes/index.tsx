import styles from "@/pages/lista-ambientes/lista-ambientes.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUser,
  faBars,
  faChevronDown,
  faCircleInfo,
  faSliders
} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Header from "@/components/header/header"
import LocalizacaoRow from "@/components/localizacaoRow/localizacaoRow"
import LocalizacaoTable from "@/components/localizacaoTable/localizacaoTable"

const ListaAmbientes = () => {
  const[estaAutenticado, setEstaAutenticado] = useState(false);

  return (
    <>
      <Header/>
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

        {/* <section
          className={`${styles.table_section} ${styles.layout_guide}`}
          aria-label="Lista de ambientes"
        >
          <table className={styles.environment_table}>
            <thead>
              <tr>
                <th>Local</th>
                <th>Responsável</th>
                <th>Detalhes</th>
              </tr>
            </thead>

            <tbody>
              <LocalizacaoRow />
            </tbody>
          </table>
        </section> */}
        <LocalizacaoTable />

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
    </>
  )
}

export default ListaAmbientes;

