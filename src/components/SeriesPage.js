import React, { useState } from "react";

const SeriesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc"); 
  const [yearFilter, setYearFilter] = useState(""); 

  const series = [
    {
      title: "Star Trek: Deep Space Nine",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      year: 1993,
      type: "Serie",
      poster: "https://m.media-amazon.com/images/M/MV5BMDc3OGNhYjUtZGYwNi00MjllLWE0MjYtNDFiYmVhNWI0MGJmXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg"
    },
    {
      title: "The LA Complex",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      year: 2012,
      type: "Serie",
      poster: "https://www.tvguide.com/a/img/catalog/provider/1/1/1-172520482.jpg"
    },
    {
      title: "The Shield",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      year: 2002,
      type: "Serie",
      poster: "https://streamcoimg-a.akamaihd.net/000/109/8/1098-PosterArt-5f2fbc7f02c02a525ab9f3e95008f3fc.jpg"
    },
    {
      title: "The Review With Forrest MacNeil",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      year: 2014,
      type: "Serie",
      poster: "https://m.media-amazon.com/images/I/81CVBXd5YgL._AC_UF894,1000_QL80_.jpg"
    },
    {
      title: "At Home With Julia",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      year: "No especificado",
      type: "Serie",
      poster: "https://m.media-amazon.com/images/M/MV5BZmU2MWQzNDMtNTdmYS00YjM4LWIzZTQtMjgwZGRlYzU4Y2UxXkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_.jpg"
    },
    {
      title: "American Dreams",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      year: 2002,
      type: "Serie",
      poster: "https://m.media-amazon.com/images/M/MV5BZTQ5MWU3Y2UtMjkzNC00MjIzLTlhZmYtNTM2ZTM3MTIxZjgxXkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_FMjpg_UX1000_.jpg"
    },
    {
      title: "Ash vs Evil Dead",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      Type: "Serie",
      year: 2015,
      poster:"https://m.media-amazon.com/images/M/MV5BMTYyMjQyNTE5MF5BMl5BanBnXkFtZTgwMjEyMjE2NDM@._V1_.jpg"
    },
    {
      title: "Younger",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      Type: "Serie",
      year: 2016,
      poster: "https://resizing.flixster.com/Gt6Tqf--z8NNwahXGn4hXT43V10=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjUwOTA1My53ZWJw"
    },
    {
      title: "Transparent",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      Type: "Serie",
      year: 2014,
      poster:"https://pics.filmaffinity.com/Transparent_Serie_de_TV-679275436-large.jpg"
    },
    // Agrega más series aquí
    {
      title: "Breaking Bad",
      description: "Un profesor de química de secundaria con cáncer terminal recurre al crimen para asegurar el futuro de su familia, alterando así el equilibrio de su pequeña comunidad.",
      year: 2008,
      type: "Serie",
      poster: "https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg"
    },
    {
      title: "Stranger Things",
      description: "Cuando un niño desaparece, sus amigos, la familia y la policía se ven envueltos en una serie de eventos misteriosos mientras buscan al niño desaparecido.",
      year: 2016,
      type: "Serie",
      poster: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/08/stranger-things-cartel.jpg?tf=384x"
    },
    {
      title: "The Crown",
      description: "Esta serie dramatiza la historia de la reina Isabel II desde el comienzo de su reinado en la década de 1950 hasta la actualidad.",
      year: 2016,
      type: "Serie",
      poster: "https://m.media-amazon.com/images/I/71f97nf-u9L._AC_UF1000,1000_QL80_.jpg"
    },
    {
      title: "Friends",
      description: "Se centra en un grupo de amigos veinteañeros - Ross, Rachel, Chandler, Monica, Joey y Phoebe - que viven en Manhattan.",
      year: 1994,
      type: "Serie",
      poster: "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg"
    },

    
    
  ];

  // Función para cambiar el orden de clasificación
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Función para filtrar series por año
  const handleYearFilterChange = (event) => {
    setYearFilter(event.target.value);
  };

  // Filtrar y ordenar las series según el estado actual
  const filteredSeries = series
    .filter((serie) => serie.year.toString().includes(yearFilter))
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.title.localeCompare(b.title); 
      } else {
        return b.title.localeCompare(a.title); 
      }
    });

  // Calcular índices de series para la página actual
  const seriesPerPage = 4;
  const indexOfLastSerie = currentPage * seriesPerPage;
  const indexOfFirstSerie = indexOfLastSerie - seriesPerPage;
  const currentSeries = filteredSeries.slice(indexOfFirstSerie, indexOfLastSerie);

  // Función para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Series Page</h2>
      
      {/* Filtros */}
      <div className="filters">
        <label htmlFor="yearFilter">Filtrar por año:</label>
        <input
          type="text"
          id="yearFilter"
          value={yearFilter}
          onChange={handleYearFilterChange}
        />
        <button onClick={toggleSortOrder}>
          Ordenar {sortOrder === "asc" ? "ascendente" : "descendente"}
        </button>
      </div>

      {/* Series */}
      <div className="series-container">
        {currentSeries.map((serie, index) => (
          <div key={index} className="serie">
            <img src={serie.poster} alt={serie.title} />
            <h3>{serie.title}</h3>
            <p>{serie.description}</p>
            <p>Año de lanzamiento: {serie.year}</p>
            <p>Tipo de programa: {serie.type}</p>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="pagination">
        {[...Array(Math.ceil(filteredSeries.length / seriesPerPage)).keys()].map((number) => (
          <button
            key={number + 1}
            className={currentPage === number + 1 ? "page-number active" : "page-number"}
            onClick={() => paginate(number + 1)}
          >
            {number + 1}
          </button>
        ))}
      </div>

      <style jsx>{`
        .filters {
          margin-bottom: 20px;
        }

        .filters label {
          margin-right: 10px;
        }

        .filters input {
          margin-right: 10px;
        }

        .series-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
        }

        .serie {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .serie:hover {
          transform: translateY(-5px);
        }

        .serie img {
          width: 100%;
          height: auto;
          border-radius: 10px 10px 0 0;
        }

        .serie h3 {
          font-size: 16px;
          margin: 10px 0;
          text-align: center;
        }

        .serie p {
          font-size: 14px;
          margin: 0;
          padding: 0 10px 10px;
          text-align: center;
        }

        .pagination {
          margin-top: 20px;
          text-align: center;
        }

        .page-number {
          margin: 0 5px;
          padding: 5px 10px;
          background-color: #007bff;
          color: #fff;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .page-number:hover {
          background-color: #0056b3;
        }

        .active {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default SeriesPage;
