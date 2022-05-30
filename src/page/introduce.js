import "../../css/gioithieu.css";
import footer from "../components/footer";
import Header from "../components/header";

const Introduce = {
    render() {
        return /* html */`
        ${Header.render()}
        <div class="content-introduce">
        <div class="introduce">
            <div class="introduce-blog-img">
                <img src="http://placeimg.com/640/480/technics" alt="" width="">
            </div>
            <div class="introduce-blog">
                <h2>Giới Thiệu Về Sản Phẩm</h2>
                <p> <span> Cutis </span> là thương hiệu chuyên về đồ chơi trẻ em đặc biệt là bàn LEGO và đồ chơi LEGO mang thương hiệu Việt Nam. Cutis sẽ ngày càng đa dạng vàc nâng cao chất lượng sản phẩm để mang lại trải nghiệm tốt nhất cho khách hàng. Ngoài ra, Cutis cũng sẽ phát triển các kênh cộng đồng, cung cấp các thông tin hữu ích cho mẹ và bé trong suốt thời gian phát triển của bé.]</p>
                <div class="holine">
                    <div class="fb">
                        <a href="https://www.facebook.com/xuan.nam.832002/"><i class="fa-brands fa-facebook"></i></a>
                    </div>
                    <div class="ytb">
                        <a href="https://www.youtube.com/watch?v=gx-BL-93V-s&t=1836s"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                    <div class="titok">
                        <a href=""><i class="fa-brands fa-tiktok"></i></a>
                    </div>
                    <div class="twiter">
                        <a href=""><i class="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        
        </div>
        <div class="trademark">
        <div class="trademark-title">
            <h2>Về Thương Hiệu</h2>
        </div>
        <div class="trademark-describe">
            <p>Nhận thấy các sản phẩm đồ chơi Lego trên thị trường hoặc là quá đắt đỏ, hoặc chất lượng không được như ý. Cutis được tạo ra nhằm giúp các bậc phụ huynh có thể lựa chọn cho con mình có một sự lựa chọn tốt mà không phải tốn quá nhiều chi phí.
        
                Cutis hy vọng sẽ thổi một luồng gió mới vào thị trường đồ chơi Việt Nam và sẽ là lựa chọn được các em nhỏ yêu thích. Chúng tôi luôn coi sự hài lòng của khách hàng là điều quan trọng nhất để có thể phát triển trong tương lai.
                
                Xin trân trọng cảm ơn tất cả các quý khách hàng đã, đang và sẽ ủng hộ Cutis.</p>
        </div>
        </div>
        </div>
        ${footer.render()}
        `;
    },
};
export default Introduce;