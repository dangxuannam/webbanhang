import { getAll } from "../api/products";
import "../../css/banner.css";

const products = {
    async  render() {
        const { data } = await getAll();
        return /* html */ `
        <div class="productnew">
        <h2 class="title">
            SẢN PHẨM MỚI
        </h2>
        
    </div>
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
    <div class="bannershow">
    <img src="http://res.cloudinary.com/dm6frgae8/image/upload/v1653488327/c6nblmtnqj2pvohr2mcy.png" alt="" width="40%">
    <img src="http://res.cloudinary.com/dm6frgae8/image/upload/v1653488327/c6nblmtnqj2pvohr2mcy.png" alt="" width="40%">
   </div>
    <div class="productnew">
   
       <h2 class="title">
           SẢN PHẨM BÁN CHẠY
       </h2>
   </div>
   <div class="products">
       <div class="product">
           <div class="img-product">
           <a href=""><img src="http://res.cloudinary.com/dm6frgae8/image/upload/v1652273553/rbxdtfvbzgbfywnlfdmk.jpg" alt=""></a>
           </div>
           <div class="discount-product">
               <span>Giảm 20%</span>
           </div>
           <div class="title-product">
               <h3><a href="#">Adidas Alphabounce Instinct M SF</a></h3>
           </div>
           <div class="price-product">
               <del>500.000đ</del>
              <span>400.000đ</span>
           </div>
       </div>
       <div class="product">
          <div class="img-product">
              <a href=""><img src="http://res.cloudinary.com/dm6frgae8/image/upload/v1652273553/rbxdtfvbzgbfywnlfdmk.jpg" alt=""  ></a>
          </div>
          <div class="discount-product">
              <span>Giảm 20%</span>
          </div>
          <div class="title-product">
              <h3><a href="#">Adidas Alphabounce Instinct M SF</a></h3>
          </div>
          <div class="price-product">
              <del>500.000đ</del>
             <span>400.000đ</span>
          </div>
      </div>
     
      

   </div>
  <div class="review">
      <div class="baohanh">
      <div class="icon a">
       <i class="fa-solid fa-user-group"></i>
      </div>
      <div class="uytin">
          <h2>BẢO HÀNH 3 NĂM</h2>
          <p>Một đổi một trong vòng 6 tháng </br> cam kết mạnh mẽ về chất lượng</p>
       </div>
       </div>
       <div class="baohanh">
           <div class="icon">
               <i class="fa-solid fa-gift"></i>
           </div>
           <div class="uytin">
               <h2>CHĂM SÓC KHÁCH HÀNG</h2>
               <p>Cam kết chăm sóc khách hàng </br> Tư vấn chính xác, trung thực, tận tâm</p>
            </div>
            </div>
            <div class="baohanh">
               <div class="icon c">
                   <i class="fas fa-shopping-cart"></i>
               </div>
               <div class="uytin">
                   <h2>MIỄN PHÍ VẬN CHUYỂN</h2>
                   <p>Miễn phí vận chuyển cho đơn hàng từ 200.000vnd trở lên</p>
                </div>
  </div>
   

   </div>
        `;
    },
};
export default products;