import Header from "../components/header";
import Banner from "../components/banner";

import footer from "../components/footer";
import productsnew from "../components/productsnew";
import Bannernho from "../components/bannernho";

const HomePage = {
    async  render() {
        return `
        <header id="header">
                    ${Header.render()}
                </header>
        
        <div class="banner">
                        ${Banner.render()}
                        
                    </div>
                    ${Bannernho.render()}
                    <div class="product">
                    ${await productsnew.render()}
                  
                    </div>
                    

                    <footer>
                    
                    ${footer.render()}
                    </footer>
                   
                   
        `;
    },

};
export default HomePage;