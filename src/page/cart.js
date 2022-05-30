import toastr from "toastr";
import "toastr/build/toastr.min.css";

import { reRender } from "../utils/index";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";
import Header from "../components/header";

const CartPage = {

    render() {
        let cart = [];
        let tong = 0;
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return /* html */ `
                <header>
        ${Header.render()}
        </header> 
        <table>
        <thead>
        <tr>
            <th>Tên sản phẩm</th>
            <th>Giá sản phẩm</th>
            <th>Số lượng</th>
            <th></th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        ${cart.map((item) => /* html */`
            <tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td><input type="number" value="${item.quantity}" /></td>
                <td>
                    <button data-id="${item.id}" class="bt bt-increase">Tăng</button>
                    <button data-id="${item.id}" class="bt bt-decrease">Giảm</button>
                </td>
                <td>
                    <button data-id="${item.id}" class="bt bt-remove">Xóa</button>
                </td>
                <td>
                <button data-id="${item.id}" class="bt bt-remove">Xóa</button>
            </td>
            
            <td>
            
            </td>
            <p hidden>${tong += item.price * item.quantity}</p>
            </tr>
            
        `).join("")}
        </tbody>
    </table>
    <h2> ${tong}</h2>
    
    
    `;
    },

    afterRender() {
        const bts = document.querySelectorAll(".bt");
        bts.forEach((bt) => {
            const { id } = bt.dataset;
            bt.addEventListener("click", () => {
                if (bt.classList.contains("bt-increase")) {
                    increaseQuantity(id, () => reRender(CartPage, "#app"));
                } else if (bt.classList.contains("bt-decrease")) {
                    decreaseQuantity(id, () => reRender(CartPage, "#app"));
                } else {
                    removeItemInCart(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Bạn đã xóa sản phẩm thành công");
                    });
                }
            });
        });
    },
};
export default CartPage;