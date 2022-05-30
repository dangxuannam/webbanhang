const Header = {
    render() {
        return /* html */ `
        <div class="header">
               <div class="header-on">
                   <ul>
                       <li>
                        <i class="fa-solid fa-phone-flip">:0337608937</i>
                        <i class="fa-solid fa-clock">All day: 08:00 - 22:00</i>
                       </li>
                   </ul>
               </div>
            <div class="header-top">
                <div class="header-logo">
                    <img src="http://res.cloudinary.com/dm6frgae8/image/upload/v1652267927/vwxoijgyirweokdu7w6k.png" alt="">
                </div>
                <form action="/search" class="form-search">
                        <input type="text" class="input-button" placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm" name="keyword">
                      
                            <button class="button-search">Tìm kiếm</button>
                        
                    </form>
                <div class="header-cart">
                    <a href="/cart"><i class="fas fa-shopping-cart"></i></a>
                </div>
           </div>
         <div class="header-menu">
             <div class="mobile-menu">
            <label for="nav-input" class="nav-bars-btn">
                <i class="fa-solid fa-bars"></i>
            </label>
            <div class="logo-mobile">
            <img src="http://res.cloudinary.com/dm6frgae8/image/upload/v1652267927/vwxoijgyirweokdu7w6k.png" alt="">
            </div>
            <div class="header-cart-mobile">
                <i class="fas fa-shopping-cart"></i>
            </div>
        </div>
          
            <input hidden type="checkbox" name="" class="nav-input" id="nav-input">
            <label for="nav-input" class="nav-overlay"></label>
                <nav class="nav-mobile">
                    <label for="nav-input" class="nav-mobile-close">
                        <i class="fa-solid fa-xmark"></i>
                    </label>
                    <ul class="nav-mobile-list">
                        <li><a class="nav-mobile-link" href="">Trang Chủ</a></li>
                        <li><a class="nav-mobile-link" href="">Danh Mục</a>

                        <li><a class="nav-mobile-link" href="">Giới Thiệu</a></li>
                     
                        <li>
                            <a class="nav-mobile-link" href="">Tài Khoản</a>
                             
                    </li>
                    </ul>
                  
                </nav>
            
            <nav class="menu">
                <ul>
                    <li><a href="/">Trang Chủ</a></li>
                    <li><a href="/category">Sản Phẩm</a>
                    <li><a href="/gioithieu">Chính Sách Đại Lý</a></li>
                        <ul class="subnav">
                            <li><a href="">Đăng nhập</a></li>
                            <li><a href="">Đăng ký</a></li>
                        </ul></li>
                    
                    <li><a href="/blog">BLOG</a></li>
                    <li><a href="/gioithieu">Giới Thiệu</a></li>
                    <li>
                        <a href="">Tài Khoản</a>
                         <ul class="subnav">
                             <li><a href="">Đăng nhập</a></li>
                             <li><a href="">Đăng ký</a></li>
                         </ul>
                </li>
                
                </ul>
              
            </nav>
             
         </div>
           </div>
        `;
    },
};
export default Header;