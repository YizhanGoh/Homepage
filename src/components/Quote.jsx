import React, {
  useState,
  useEffect
} from "react";
import axios from "axios";

function Quote() {

  const [quote, setQuote] = useState("");

  function getQuote() {
    const options = {
      method: 'POST',
      url: 'https://motivational-quotes1.p.rapidapi.com/motivation',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'f1ce796342mshfa107cca371850dp16216bjsnd3636125edc3',
        'X-RapidAPI-Host': 'motivational-quotes1.p.rapidapi.com'
      },
      data: '{"key1":"value","key2":"value"}'
    };

    axios.request(options).then(function(response) {
      var quoteReq = response.data;
      setQuote(quoteReq);
      // console.log(result);
    }).catch(function(error) {
      console.error(error);
    });
  }

  useEffect(() => {
    getQuote()
  }, []);

  return (
    <div >
      <h2 className = "quote"> {quote} </h2>
    </div>
  );
};

export default Quote;
