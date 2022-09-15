import React,{useState,useEffect} from "react";
import './SearchBar.css'

export default function SearchBar() {
    return(
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton">SEARCH</button>
        </div>
    )
}