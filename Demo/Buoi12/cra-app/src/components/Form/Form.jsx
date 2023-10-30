import React from "react";
import Control from "./Control";
import Paragraph from "./Paragraph";
function Form(){
    return(
        <div>
            <form>
                {/* Giống như gọi hàm và truyền tham số */}
                <Control type="text" label='Email'/>
                <Control type="password" label="Password"/>
                <Control type="checkbox" label="Hobby"/>
                <Paragraph type="warning">Velit eiusmod nulla consequat elit quis reprehenderit esse exercitation cillum eu. Amet commodo Lorem ex magna sint deserunt ex id culpa sint in reprehenderit. Voluptate reprehenderit dolore in quis magna consequat proident elit voluptate in. Sunt voluptate nisi nulla occaecat laborum excepteur eiusmod labore voluptate minim ullamco dolore laboris. Sint ullamco Lorem qui aliqua do. Amet adipisicing nulla cillum ad excepteur fugiat ea culpa nostrud eu amet et dolor.</Paragraph>
                <input type="checkbox" />
                <Button type='button'>Register</Button>
                <Button href="https://google.com">Go to Google</Button>
            </form>
        </div>
    );

}
function Button(props){
    const handleClick =()=> console.log(props.children);
    if(props.type == 'button')
    {
        return(
            <button type="button" className="btn btn-dark"
            onClick={handleClick}
            >{props.children}</button>
        )
        }if(props.href){
            return(
                <a className="btn btn-link" href={props.href}>Google</a>
            )
        
        }
       
   
}


export default Form;