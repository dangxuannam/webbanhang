import "../../../css/chitietsp.css";

import toastr from "toastr";

import Header from "../../components/header";
import { get } from "../../api/products";
import { addToCart } from "../../utils/cart";

const DetailProductPage = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
      
        ${Header.render()}
        <div class="contentprd">
             <div class="home">
                 <a href=""><i class="fas fa-home"></i>Trang chủ</a>
             </div>
             <div class="content-img-title">
                 <div class="img">
                     <img src="${data.img}" alt="" width="600px">
                 </div>
             <div class="mota">
                 <h2>${data.name}</h2>
                 <del>500.000đ</del>
                 <span>${data.price}vnd</span> <br>
                 <input type="number" id="inputValue" class="border border-gray-500" />
                 <ul>
                     <li>Trạng thái: còn hàng</li>
                     <li>Tình trạng: hàng mới 100%</li>
                     <li>Hình thức: Giao hàng toàn quốc & Thanh toán khi nhận hàng</li>
                 </ul>
                <div class="bu">
                    <button id="btnAddToCart">THÊM VÀO GIỎ HÀNG</button>
                    
                </div>
                </div>
            </div>
            
                <div class="content-mid">
                <div class="comment">
                    <h2 >Mô tả</h2>
                <p>
                    ${data.desc}
                </p>

                <div class="titlect">
                    SẢN PHẨM LIÊN QUAN
                </div>
            </div>
            <div class="prdlq-img">
               
            <div class="prdlq">
                <div class="img">
                <img src="./assets/img/1.png" alt="">
            </div>
            <div class="name">  
             <a href="">  <p>Nike Air Force 1 Low Off White Volt Rep 1:1</p> </a> 
             <del>500.000đ</del><span>400.000đ</span>
            </div>
            
            </div>
            <div class="prdlq">
                <div class="img">
                <img src="./assets/img/1.png" alt="">
            </div>
            <div class="name">  
             <a href="">  <p>Nike Air Force 1 Low Off White Volt Rep 1:1</p> </a> 
             <del>500.000đ</del><span>400.000đ</span>
            </div>
            
            </div>
            <div class="prdlq">
                <div class="img">
                <img src="./assets/img/1.png" alt="">
            </div>
            <div class="name">  
             <a href="">  <p>Nike Air Force 1 Low Off White Volt Rep 1:1</p> </a> 
             <del>500.000đ</del><span>400.000đ</span>
            </div>
            
            </div>
            <div class="prdlq">
                <div class="img">
                <img src="./assets/img/1.png" alt="">
            </div>
            <div class="name">  
             <a href="">  <p>Nike Air Force 1 Low Off White Volt Rep 1:1</p> </a> 
             <del>500.000đ</del><span>400.000đ</span>
            </div>
            
            </div>
            </div> 
        `;
    },
    afterRender(id) {
        const btnAddToCart = document.querySelector("#btnAddToCart");
        const inputValue = document.querySelector("#inputValue");
        btnAddToCart.addEventListener("click", async () => {
            const { data } = await get(id);
            addToCart({ ...data, quantity: inputValue.value ? +inputValue.value : 1 }, () => {
                toastr.success("Đã thêm");
            });
        });
    },
};
export default DetailProductPage;