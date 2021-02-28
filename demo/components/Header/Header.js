import styles from '../../styles/Home.module.css'
import React , { useState } from 'react';

const Header = ({sendDataToParent}) => { 
    const [data,setData] = useState(null);

    const handleChange = (text) => { 
        let convertedText = handleKeyupChar(text.target.value);
        setData(convertedText);
      };
    
    const handleKeyDown = (event) => { 
        if (event.key === 'Enter') {
            sendDataToParent(data);
        }
      
    };
    const handleKeyupChar = (text) =>{
            var charMap = {
              Ç: 'C',
              Ö: 'O',
              Ş: 'S',
              İ: 'I',
              I: 'i',
              Ü: 'U',
              Ğ: 'G',
              ç: 'c',
              ö: 'o',
              ş: 's',
              ı: 'i',
              ü: 'u',
              ğ: 'g'
            };
            let str = text;
            let str_array = str.split('');
            for (var i = 0, len = str_array.length; i < len; i++) {
              str_array[i] = charMap[str_array[i]] || str_array[i];
            }
            str = str_array.join('');
            var clearStr = str.replace(" ", "").replace("-", "").replace(/[^a-z0-9-.çöşüğı]/gi, "");
            var print = clearStr;
            return print;
    }

      

    return(
        <di>
            <input type="text"   placeholder='Search for any movie ...'  
            onChange={handleChange} 
            onKeyDown={handleKeyDown}
            className={styles.customHeaderItem}></input>
            <button className={styles.searchButton}  
            onClick = {() => {
              sendDataToParent(data);
            }} >Search</button>
        </di>
    );
}



export default Header;