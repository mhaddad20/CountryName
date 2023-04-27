import React ,{useState,useEffect} from 'react';
import './CountryInfo.css';
import axios from 'axios';
import { AiOutlineSearch } from 'react-icons/ai';



export function CountryInfo() {
    const [country, setCountry] = useState(null);
    async function fetchCountryData(name) {
        try {
          const response = await axios.get(`http://localhost:8000/name/${name}`);
          return response.data;
        } catch (error) {
          console.log(error);
          throw new Error("Error retrieving country information");
        }
      }
      useEffect(() => {
        if (country ) {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
              });
        }
      }, [country]);
    
    
      
      
    
    async function handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const countryName = formData.get("country");
      try {
        const data = await fetchCountryData(countryName);
        console.log(data);
        setCountry(data);
      } catch (error) {
        console.log(error);
        setCountry(null);
      }
    }

    function scrollToBottom() {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      }

    return (
        <div>
            
 <form onSubmit={handleSubmit} className="search-form" style={{ backgroundImage: `url(${'https://www.mappr.co/wp-content/uploads/2022/09/world-map-2022.jpg'})` }}>
  <div className="search-input-container">
    <input type="text" name="country" placeholder="Search country" className="search-input"  autoComplete="country" />
    <button onClick={scrollToBottom} type="submit" className="search-button">
      <AiOutlineSearch className="search-icon" />
    </button>
  </div>
</form>

{country && (
    



        <div className="image-container">
  <img src={country.Flag} alt="your-image-alt-text" className="centered-image" />
</div>


    
    )}
      {country && (
      <div className="table-container">
      <table className="table">
        <tbody>
          {Object.entries(country).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

      )}




      </div>
    );
  }