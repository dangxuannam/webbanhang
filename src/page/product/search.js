import toastr from "toastr";
import Headers from "../../components/header";

import { get, SearchProductByName } from "../../api/products";

import "toastr/build/toastr.min.css";
import footer from "../../components/footer";
import { addToCart } from "../../utils/cart";

const Search = {
    async render({ keyword }) {
        const { data } = await SearchProductByName(keyword);
        return /* html */ `
          <header>
        ${Headers.render()}
      
        </header>
        <div class="productnew">
                <h1 class="title">Ke qua tim kiem : ${keyword}</h1>

                <div class="products">
                ${data.map((post) => `
                    <div class="product">
                    
                        <div class="trip">
                        <div class="img-product">
                            <a href="/news/${post.id}"><img src="${post.img}" alt="" width="10%"></a>
                        </div>
                        <div class="info">
                          
                           <button>ĐẶT MUA</button>
                       </div>
                       </div>
                       
                        <div class="title-product">
                            <h3><a href="#">${post.name}</a></h3>
                        </div>
                        <div class="price-product">
                            <del>500.000đ</del>
                           <span>${post.price}</span>
                        </div>
                      
                    </div>
                    `)
        .join("")}
                </div>
                </div>
        </article>
                <footer class="bg-[#f3f3f3] min-w-full m-auto">
                ${footer.render()}
                </footer>

        `;
    },
    afterRender() {
        const search = document.querySelectorAll(".search");
        search.forEach((btn) => {
            btn.addEventListener("click", async () => {
                const { id } = btn.dataset;
                const { data } = await get(id);
                addToCart({ ...data, quantity: 1 }, () => {
                    toastr.success("them vao thanh cong");
                });
            });
        });
        Headers.afterRender();
    },
};
export default Search;