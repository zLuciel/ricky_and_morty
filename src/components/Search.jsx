import React from "react";
import { ContainerSearch } from "./css/Search";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getSearch } from "../redux/actions/actions";
import { CardSearch } from "./CardSearch";
import { BiSearch } from 'react-icons/bi';

const Search = (props) => {
  const [search, setSearch] = useState("");
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    if (search !== "") props.getSearch(1, "name", search);
    
    //const CajaAnime = document.querySelector(".Search-Anime-visual");
    document.addEventListener("click", (e) => {
      if (!e.target.matches(".input-search *")) {
        setMostrar(false);
      }else if (search.length === 0) {
        setMostrar(true);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  
  return (
    <ContainerSearch mostrar={mostrar}>
      <div className="input-search">
        <button><BiSearch className="icon-search"/></button>
        <input
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          autoComplete="off"
          placeholder="Search"
        />
      </div>
      <div className="search-view">
        {!props.searchCharacters || search === ""
          ? <p style={{fontSize:"0.8rem"}}>No hay resultado</p>
          : props.searchCharacters.map((el) => (
              <CardSearch
                key={el.id}
                id={el.id}
                name={el.name}
                img={el.image}
              />
            ))}
      </div>
    </ContainerSearch>
  );
};

const mapStateToProps = (state) => {
  return {
    searchCharacters: state.searchCharacters,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getSearch: (num, query, value) => dispatch(getSearch(num, query, value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
