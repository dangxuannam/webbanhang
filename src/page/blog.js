import "../../css/blog.css";
import footer from "../components/footer";
import Header from "../components/header";

const Blog = {
    render() {
        return /* html */ `
        ${Header.render()}
        <div class="blogs">
        <div class="title-baiviet">
            <h3>CHUYÊN MỤC: KIẾN THỨC</h3>
        </div>
        <div class="title-blog">
            <h2>
                Nhựa ABS là gì? Độ an toàn và ứng dụng trong cuộc sống hàng ngày
            </h2>
        </div>
<div class="blog">
    <div class="img-blog">
        <img src="http://placeimg.com/640/480/technics" alt="" width="">
    </div>
    <div class="mota-blog">
        <p>Nhựa là loại chất liệu rất phổ biến trong đời sống hàng ngày. Hiện cũng có nhiều loại nhựa đa dạng như nhựa PP, PS, PET, PVC,… Và ABS là loại nhựa được ứng dụng nhiều, độ phổ biến cao.  Nhựa ABS là gì? Nhựa ABS (Acrylonitrin Butadien Styren) là nhựa có các đặc tính […]</p>
       <a href=""> <button>Đọc Thêm</button></a>
    </div>

</div>
    </div>
    ${footer.render()}
        `;
    },
};
export default Blog;