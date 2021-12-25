import "./button.css";

const Button = ({symbol,color,hadleClick}) =>{
    return <div onClick={() => hadleClick(symbol)}
          
           className="button-wrapper" 
           style={{backgroundColor:color}}>
               {symbol}

           </div>
};

 export default Button ;