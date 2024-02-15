import React, { useState } from "react";

const MoviesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState("");
  const [sortBy, setSortBy] = useState("asc"); 
  const [yearFilter, setYearFilter] = useState(""); 

  const movies = [
    {
      title: "Un ladrillo de Lego",
      description: "Es muy importante cuidar al paciente, el paciente será seguido por el médico, pero sucederá al mismo tiempo que habrá mucho trabajo y dolor. Porque, para llegar al más mínimo detalle, nadie debe practicar ningún tipo de trabajo a menos que obtenga algún beneficio de él.",
      year: 2015,
      type: "Película",
      poster: "https://streamcoimg-a.akamaihd.net/000/109/8345/1098345-PosterArt-f0f207e02947ca76d9f9b238aea54dc1.jpg" 
    },
    {
      title: "Sólo amigos",
      description: "Es muy importante cuidar al paciente, el paciente será seguido por el médico, pero sucederá al mismo tiempo que habrá mucho trabajo y dolor. Porque, para llegar al más mínimo detalle, nadie debe practicar ningún tipo de trabajo a menos que obtenga algún beneficio de él.",
      year: 2005,
      type: "Película",
      poster: "https://m.media-amazon.com/images/S/pv-target-images/599b2ce3ca4b33ce5bf0c80e28d4a69ce36ab278b001267373acd2c8979da89b.jpg" 
    },
    {
      title: "Ernesto y Celestina",
      description: "Es muy importante cuidar al paciente, el paciente será seguido por el médico, pero sucederá al mismo tiempo que habrá mucho trabajo y dolor. Porque, para llegar al más mínimo detalle, nadie debe practicar ningún tipo de trabajo a menos que obtenga algún beneficio de él.",
      year: 2014,
      type: "Película",
      poster: "https://es.web.img3.acsta.net/pictures/210/582/21058233_20131125102503661.jpg"
    },
    {
      title: "Valiente",
      description: "Es muy importante cuidar al paciente, el paciente será seguido por el médico, pero sucederá al mismo tiempo que habrá mucho trabajo y dolor. Porque, para llegar al más mínimo detalle, nadie debe practicar ningún tipo de trabajo a menos que obtenga algún beneficio de él.",
      year: 2005,
      type: "Película",
      poster: "https://streamcoimg-a.akamaihd.net/000/885/233/885233-PosterArt-e79ac1b3fbb5f8677094f5ae8adca301.jpg"
    },
    {
      title: "Las voces",
      description: "Es muy importante cuidar al paciente, el paciente será seguido por el médico, pero sucederá al mismo tiempo que habrá mucho trabajo y dolor. Porque, para llegar al más mínimo detalle, nadie debe practicar ningún tipo de trabajo a menos que obtenga algún beneficio de él.",
      year: 2013,
      type: "Película",
      poster: "https://mx.web.img3.acsta.net/c_310_420/pictures/19/06/15/22/31/4589542.jpg"
    },
    {
      title: "El Rey León",
      description: "La trama presenta a Simba, un joven león que tras la muerte de su padre, el Rey Mufasa, se ve forzado a exiliarse de su hogar, pero regresa para luchar por el dominio de las Tierras del Reino.",
      year: 1994,
      type: "Película",
      poster: "https://es.web.img3.acsta.net/medias/nmedia/18/68/20/31/19785394.jpg?coixp=47&coiyp=41"
    },
    {
      title: "Pulp Fiction",
      description: "Una serie de historias interrelacionadas sobre el crimen y la redención en Los Ángeles.",
      year: 1994,
      type: "Película",
      poster: "https://musicart.xboxlive.com/7/767c6300-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
    },
    {
      title: "El Señor de los Anillos: La Comunidad del Anillo",
      description: "Un joven hobbit, Frodo, quien hereda un anillo mágico de su tío Bilbo, debe embarcarse en un viaje para destruirlo y evitar que caiga en manos del Señor Oscuro Sauron.",
      year: 2001,
      type: "Película",
      poster: "https://m.media-amazon.com/images/I/816QLZKwmIL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      title: "Forrest Gump",
      description: "Las crónicas de la vida de Forrest Gump, un hombre con un coeficiente intelectual bajo pero buenas intenciones, que participa en muchos de los momentos más importantes de la historia de los Estados Unidos.",
      year: 1994,
      type: "Película",
      poster: "https://m.media-amazon.com/images/S/pv-target-images/2d0c9e38968936e6711c7fb2bc7895b82d8bb9178b5a854e14dffa4b17b88487.jpg"
    },
    {
      title: "El Padrino",
      description: "La historia de una poderosa familia de la mafia italiana en Nueva York y el ascenso y caída del patriarca Vito Corleone.",
      year: 1972,
      type: "Película",
      poster: "https://ca-times.brightspotcdn.com/dims4/default/8aa9b65/2147483647/strip/true/crop/2093x3000+0+0/resize/1200x1720!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F47%2F95%2Fcbf137037b833a53a724fde3f53e%2Fcfdj8emgq7504ddbn1ibedbziqes-ufxmz-ypi0gordml8oigvx-qxnfyjdexxje48b9jsnhzr2hbbtg9-5bm2ewo-sfvcb9svtpufonjqohy-raixysjlgk7fagt3voiify9grgz0pkj-sysmn1pfblqffyiedjz8nszvhrheowg2imuyrmeklodsplgwx3wmznmclm-gx-cvc7m0lf7h7crd5meu1oztvsd9po-e1pldrzmjwobcwk9h7avlf0y4ew56xkel9filhfyidkf9rpndq4ic7-snlvnin85poimejwzyp6rq-q8qsqvmlvl2xaq3rsy-7axvtxqcpqinvjubaglw5risa6bqkfrpqowvdt29rhgoxnbsbi3dnwzldfjuimuizsg2hody3cu-y1kgk"
    },
  ];

  const toggleSortOrder = () => {
    setSortBy(sortBy === "asc" ? "desc" : "asc");
  };

  const handleYearFilterChange = (event) => {
    setYearFilter(event.target.value);
  };

  const filteredMovies = movies
    .filter((movie) => movie.year.toString().includes(yearFilter))
    .sort((a, b) => {
      if (sortBy === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

  const moviesPerPage = 4;
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Movies Page</h2>
      
      <div className="filters">
        <label htmlFor="yearFilter">Filtrar por año:</label>
        <input
          type="text"
          id="yearFilter"
          value={yearFilter}
          onChange={handleYearFilterChange}
        />
        <button onClick={toggleSortOrder}>
          Ordenar {sortBy === "asc" ? "ascendente" : "descendente"}
        </button>
      </div>

      <div className="movies-container">
        {currentMovies.map((movie, index) => (
          <div key={index} className="movie">
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p>Año de lanzamiento: {movie.year}</p>
            <p>Tipo de programa: {movie.type}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        {[...Array(Math.ceil(filteredMovies.length / moviesPerPage)).keys()].map((number) => (
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

        .movies-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
        }

        .movie {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .movie:hover {
          transform: translateY(-5px);
        }

        .movie img {
          width: 100%;
          height: auto;
          border-radius: 10px 10px 0 0;
        }

        .movie h3 {
          font-size: 16px;
          margin: 10px 0;
          text-align: center;
        }

        .movie p {
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

export default MoviesPage;
